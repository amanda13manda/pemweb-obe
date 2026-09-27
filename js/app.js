import { ringkasPresensi } from './utils.js';

// Data koleksi (utama) entitas proyek
const dataTamuUndangan = [
    { id: 1, instansi: 'HIMATRO', delegasi: 'Ahmad Fauzi', jumlah: 2, status: 'Akan Hadir', lokasi: 'Auditorium Lt. 4' },
    { id: 2, instansi: 'HIMASIKOM', delegasi: 'Siti Nurhaliza', jumlah: 3, status: 'Akan Hadir', lokasi: 'Auditorium Lt. 4' },
    { id: 3, instansi: 'BEM FT', delegasi: 'Rian Pratama', jumlah: 1, status: 'Berhalangan', lokasi: 'Auditorium Lt. 4' },
    { id: 4, instansi: 'DPM FT', delegasi: 'Dewi Lestari', jumlah: 2, status: 'Akan Hadir', lokasi: 'VIP Lounge' },
    { id: 5, instansi: 'UKM Robotika', delegasi: 'Budi Santoso', jumlah: 1, status: 'Berhalangan', lokasi: 'Auditorium Lt. 4' }
];

// Filter tamu yang terkonfirmasi "Akan Hadir"
const tamuAkanHadir = dataTamuUndangan.filter(tamu => tamu.status === 'Akan Hadir');

// Map untuk mengambil array nama instansi
const daftarInstansi = dataTamuUndangan.map(({ instansi }) => instansi);

// Reduce untuk menghitung total kapasitas kursi seluruh tamu
const totalKapasitasKursi = dataTamuUndangan.reduce((sum, tamu) => sum + tamu.jumlah, 0);

// Eksekusi fungsi statistik dengan try...catch (Error Handling)
try {
    const ringkasanData = ringkasPresensi(dataTamuUndangan);

    console.log("1. Data Tamu Akan Hadir (filter):");
    console.table(tamuAkanHadir);

    console.log("2. Daftar Nama Instansi (map):", daftarInstansi);
    console.log(`3. Total Kapasitas Kursi (reduce): ${totalKapasitasKursi} orang`);

    console.log("4. Ringkasan Statistik Presensi (utils.js):", ringkasanData);
} catch (error) {
    console.error("Terjadi galat pengolahan data:", error.message);
}

// Menangkap Elemen dari HTML
const daftar = document.querySelector('#daftar-alat');
const tombolFilter = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('#search');
const themeButton = document.querySelector('#theme-button');

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

// 1. Tangkap elemen select limit di HTML
const limitSelect = document.querySelector('#limit-select');

// 2. Ambil data tersimpan dari localStorage atau gunakan default (misal: 5)
let currentLimit = Number(localStorage.getItem('itemsLimit')) ?? 5;

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

// PANGGILAN UTAMA: Render data saat pertama kali halaman dimuat dengan batasan dari localStorage
const initialData = dataTamuUndangan.slice(0, currentLimit);
renderItems(initialData);