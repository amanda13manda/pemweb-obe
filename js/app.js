import { ringkasPresensi } from './utils.js';

// Variabel global untuk menampung data tamu dari API/JSON
let dataTamuUndangan = [];
let currentLimit = Number(localStorage.getItem('itemsLimit')) ?? 5;

// Tangkap elemen pendukung API di HTML
const daftar = document.querySelector('#daftar-alat');
const btnRetry = document.querySelector('#btn-retry');
const apiStatusBox = document.querySelector('#api-status-box');
const retryContainer = document.querySelector('#retry-container');
const tombolFilter = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('#search');
const themeButton = document.querySelector('#theme-button');
const limitSelect = document.querySelector('#limit-select');

// --- FUNGSI UTAMA FETCH DATA DENGAN ASYNC/AWAIT ---
async function loadTamuData() {
  // 1. Loading State
  if (apiStatusBox) {
    apiStatusBox.style.display = 'block';
    apiStatusBox.textContent = 'Memuat data tamu dari server...';
    apiStatusBox.style.color = '#38729f';
    apiStatusBox.style.backgroundColor = '#e9e5d4';
  }
  if (retryContainer) retryContainer.style.display = 'none';

  try {
    // Lakukan request fetch ke file JSON lokal (atau endpoint REST API)
    const response = await fetch('./data/guests.json');

    // 2. Periksa response.ok (Menangani error HTTP 404/500)[cite: 24, 36, 37]
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // 3. Parse data JSON ke object JavaScript[cite: 24, 36]
    dataTamuUndangan = await response.json();

    // Sembunyikan box status jika berhasil
    if (apiStatusBox) {
      apiStatusBox.style.display = 'none';
    }

    // Jalankan inisialisasi render dan statistik
    inisialisasiDashboard();

  } catch (error) {
    console.error("Gagal memuat data:", error);
    
    // 4. Error State & Tombol Retry[cite: 25, 38, 43]
    if (apiStatusBox) {
      apiStatusBox.style.display = 'block';
      apiStatusBox.textContent = 'Data gagal dimuat. Periksa koneksi atau path file JSON.';
      apiStatusBox.style.color = '#d9534f';
      apiStatusBox.style.backgroundColor = '#fdf7f7';
    }
    if (retryContainer) {
      retryContainer.style.display = 'block';
    }
  }
}

// Event Listener untuk Tombol Retry
if (btnRetry) {
  btnRetry.addEventListener('click', () => {
    loadTamuData();
  });
}

// Fungsi Inisialisasi setelah data sukses ditarik
function inisialisasiDashboard() {
  try {
    const ringkasanData = ringkasPresensi(dataTamuUndangan);
    console.log("Ringkasan Statistik Presensi:", ringkasanData);
  } catch (error) {
    console.error("Terjadi galat pengolahan data:", error.message);
  }

  // Render awal sesuai limit localStorage
  const initialData = dataTamuUndangan.slice(0, currentLimit);
  renderItems(initialData);
}

// Fungsi Render DOM Aman (Menggunakan createElement & textContent)
function renderItems(items) {
  if (!daftar) return;
  daftar.replaceChildren(); // Bersihkan container sebelum render ulang

  if (items.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'Tidak ada data tamu yang ditemukan.';
    daftar.append(emptyMsg);
    return;
  }

  for (const item of items) {
    const article = document.createElement('article');
    article.className = 'card';
    article.style.cssText = 'background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 10px; color: #333; transition: all 0.3s ease;';

    const title = document.createElement('h3');
    title.textContent = `${item.instansi} (${item.delegasi})`;

    const info = document.createElement('p');
    info.textContent = `Jumlah Kursi: ${item.jumlah} unit | Status: ${item.status} | Lokasi: ${item.lokasi}`;

    // Elemen Container untuk Detail (Awalnya tersembunyi / display: none)
    const detailDiv = document.createElement('div');
    detailDiv.className = 'card-detail-content';
    detailDiv.style.cssText = 'display: none; margin-top: 10px; padding-top: 10px; border-top: 1px dashed #ccc; font-size: 0.85rem; text-align: left;';
    detailDiv.innerHTML = `
      <strong>Detail Lengkap:</strong><br>
      - Instansi: ${item.instansi}<br>
      - Perwakilan: ${item.delegasi}<br>
      - Jumlah Kursi: ${item.jumlah} unit<br>
      - Status: ${item.status}<br>
      - Lokasi: ${item.lokasi}
    `;

    // Tombol Detail
    const detailBtn = document.createElement('button');
    detailBtn.type = 'button';
    detailBtn.textContent = 'Detail Tamu';
    detailBtn.dataset.detail = item.id;
    detailBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px; background: #003366; color: #fff; border: none; border-radius: 4px; cursor: pointer; display: block;';

    article.append(title, info, detailDiv, detailBtn);
    daftar.append(article);
  }
}

// Event Listener untuk Filter Status Kehadiran
tombolFilter.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    const hasil = filter === 'Semua'
      ? dataTamuUndangan
      : dataTamuUndangan.filter(item => item.status === filter);
    renderItems(hasil);
  });
});

// Event Listener untuk Pencarian Real-Time
if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const keyword = event.target.value.toLowerCase();
    const hasilPencarian = dataTamuUndangan.filter(item => 
      item.delegasi.toLowerCase().includes(keyword) || 
      item.instansi.toLowerCase().includes(keyword)
    );
    renderItems(hasilPencarian);
  });
}

// Event Delegation untuk Tombol Detail 
if (daftar) {
  daftar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-detail]');
    if (!button) return;

    const article = button.closest('.card');
    const detailDiv = article.querySelector('.card-detail-content');

    if (detailDiv) {
      const isOpen = detailDiv.style.display === 'block';

      if (isOpen) {
        detailDiv.style.display = 'none';
        button.textContent = 'Detail Tamu';
        article.style.gridColumn = 'auto';
      } else {
        detailDiv.style.display = 'block';
        button.textContent = 'Tutup Detail';
        article.style.gridColumn = '1 / -1';
      }
    }
  });
}
// Jika elemen select ada di HTML, sinkronkan nilainya dengan localStorage
if (limitSelect) {
  limitSelect.value = currentLimit;

  // Event listener saat pengguna mengubah pilihan jumlah item per halaman
  limitSelect.addEventListener('change', (e) => {
    currentLimit = Number(e.target.value);
    
    // Simpan pilihan baru ke localStorage
    localStorage.setItem('itemsLimit', currentLimit);
    
    // Render ulang data sesuai batasan baru (menggunakan slice untuk membatasi jumlah item)
    const limitedData = dataTamuUndangan.slice(0, currentLimit);
    renderItems(limitedData);
  });
}

// Web Storage: Preferensi Tema (Light / Dark)
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = savedTheme;

if (themeButton) {
  themeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  });
}

// Memulai proses fetch data saat halaman dimuat
loadTamuData();

// VALIDASI 
const formRsvp = document.querySelector('#form-rsvp');
const formStatus = document.querySelector('#form-status');

function validateForm(data) {
    const errors = {};
    
    // --- LATIHAN 3: Pesan Error Berbeda untuk Field Kosong & Format Tidak Valid ---
    
    // 1. Validasi Asal Instansi
    const instansi = String(data.get('nama_instansi') ?? '').trim();
    if (instansi === '') {
        errors.nama_instansi = 'Kolom asal instansi wajib diisi.'; // Pesan khusus jika kosong
    } else if (instansi.length < 3) {
        errors.nama_instansi = 'Asal instansi minimal harus 3 karakter.'; // Pesan khusus jika format/panjang salah
    }

    // 2. Validasi Nama Delegasi
    const delegasi = String(data.get('nama_delegasi') ?? '').trim();
    if (delegasi === '') {
        errors.nama_delegasi = 'Kolom nama delegasi wajib diisi.'; // Pesan khusus jika kosong
    } else if (delegasi.length < 3) {
        errors.nama_delegasi = 'Nama delegasi minimal harus 3 karakter.'; // Pesan khusus jika format salah
    }

    // 3. Validasi Jumlah Hadir (Angka)
    const jumlahRaw = data.get('jumlah_hadir');
    const jumlah = Number(jumlahRaw);
    if (jumlahRaw === '') {
        errors.jumlah_hadir = 'Jumlah hadir wajib diisi.';
    } else if (!Number.isInteger(jumlah) || jumlah < 1) {
        errors.jumlah_hadir = 'Jumlah hadir tidak valid (minimal 1 orang).';
    }

    // --- LATIHAN 2: Validasi Kategori / Pilihan Hanya Boleh dari Opsi yang Tersedia ---
    const statusKehadiran = String(data.get('status_kehadiran') ?? '').trim();
    const opsiSah = ['Akan Hadir', 'Berhalangan']; // Daftar pilihan yang diizinkan
    
    if (statusKehadiran === '') {
        errors.status_kehadiran = 'Silakan pilih status kehadiran terlebih dahulu.';
    } else if (!opsiSah.includes(statusKehadiran)) {
        errors.status_kehadiran = 'Pilihan status kehadiran tidak sah atau tidak tersedia.';
    }

    return errors;
}

if (formRsvp) {
    formRsvp.addEventListener('submit', event => {
        event.preventDefault(); // Jangan kirim ke server dulu
        
        const data = new FormData(formRsvp);
        const errors = validateForm(data);

        // Bersihkan error sebelumnya
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        document.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.style.backgroundColor = 'transparent';
        }

        // Jika ditemukan error
        if (Object.keys(errors).length > 0) {
            for (const [field, message] of Object.entries(errors)) {
                const errorElement = document.querySelector(`#error-${field}`);
                if (errorElement) {
                    errorElement.textContent = message;
                }
                if (formRsvp.elements[field]) {
                    formRsvp.elements[field].setAttribute('aria-invalid', 'true');
                }
            }

            // Fokus otomatis ke elemen error pertama
            const firstField = Object.keys(errors)[0];
            if (formRsvp.elements[firstField]) {
                formRsvp.elements[firstField].focus();
            }

            if (formStatus) {
                formStatus.textContent = 'Periksa kembali data yang belum valid.';
                formStatus.style.color = '#d9534f';
                formStatus.style.backgroundColor = '#fdf7f7';
            }
            return;
        }

        // Jika lolos semua validasi Latihan
        if (formStatus) {
            formStatus.textContent = 'Data valid dan sukses! (Berhasil ditambahkan ke daftar)';
            formStatus.style.color = '#3c763d';
            formStatus.style.backgroundColor = '#dff0d8';
        }

        // Tambahkan ke tabel interaktif secara dinamis
        addDataBaru(data.get('nama_instansi'), data.get('nama_delegasi'), Number(data.get('jumlah_hadir')), data.get('status_kehadiran'));
    });
}

function addDataBaru(instansi, delegasi, jumlah, status) {
    const newDataItem = {
        id: dataTamuUndangan.length + 1,
        instansi: instansi,
        delegasi: delegasi,
        jumlah: jumlah,
        status: status,
        lokasi: 'Auditorium Lt. 4'
    };
    dataTamuUndangan.push(newDataItem);
    renderItems(dataTamuUndangan.slice(0, currentLimit));
}