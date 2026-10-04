# Identitas Mata Kuliah & Akademik
Amanda (NIM: 2440304008) Praktikum Pemrograman Web
Mata Kuliah: Pemrograman Web
Kode Mata Kuliah: 26TJ453127
Program Studi: Sarjana Teknik Komputer
Institusi: Fakultas Teknik, Universitas Borneo Tarakan
Dosen Pengampu: Kharis Hudaiby Hanif, S.Pd., M.Kom.

## Deskripsi Singkat Proyek
Proyek ini merupakan hasil praktikum Pemrograman Web yang dibuat untuk mempelajari dasar pembuatan dan pengujian halaman web menggunakan lingkungan server lokal. Proyek dijalankan menggunakan Laragon 5 dan diakses melalui localhost.

## Teknologi yang Digunakan
HTML
PHP 8.4
Apache
Laragon 5
Visual Studio Code

## Cara Menjalankan Proyek
1. Jalankan Laragon 5
2. Klik Start All untuk menjalankan Apache
3. Pastikan Apache sudah berjalan dengan membuka `http://localhost`.
4. Pastikan versi PHP yang aktif adalah PHP 8.4
5. Pastikan folder proyek berada di:
   `C:\laragon\www\pemweb-obe`
6. Buka browser.
7. Akses URL proyek melalui:
   `http://localhost/pemweb-obe/`

## Pengujian
Proyek telah diuji melalui browser menggunakan alamat:
http://localhost/pemweb-obe/

---

## Progres Pertemuan 2 - Struktur HTML5 & Aksesibilitas
- Menerapkan struktur HTML5 semantik (header, nav, main, section, article, form, footer).
- Melakukan pengujian aksesibilitas navigasi berbasis keyboard menggunakan tombol Tab.

## Fitur Halaman Web
1. Navigasi Utama (`<nav>`): Menu tautan cepat ke bagian informasi, susunan acara, RSVP, dan bantuan.
2. Identitas Tamu & QR Code: Kartu informasi beserta kode QR unik untuk pemindaian saat kedatangan di acara.
3. Informasi Kegiatan (`<article>` & `<section>`): Rincian pelaksanaan kegitan.
4. Susunan Acara (`<table>`): Jadwal kegiatan terstruktur dari registrasi hingga penutup.
5. Formulir RSVP (`<form>`): Input data instansi, nama perwakilan delegasi, jumlah hadir, dan status konfirmasi.
6. Pusat Bantuan: Informasi panitia di meja registrasi.
7. Aksesibilitas Dasar: Atribut `lang="id"`, *skip link* (*tautan lewati ke konten utama*), label form interaktif, dan teks alternatif (`alt`) pada gambar.

## Alur Kerja Version Control (Git)
- Pengerjaan fitur menggunakan *branch* khusus: `feature/struktur-home`
- Riwayat *commit* terstruktur dan bermakna.
- Digabungkan ke *branch* utama (`main`) melalui proses merge.
---

## Progres Pertemuan 3 - CSS Responsive UIUX
Proyek ini adalah landing page responsif dan aksesibel untuk sistem manajemen undangan dan presensi kegiatan Seminar Himpunan Mahasiswa Teknik Komputer (HMTK). Desain antarmuka dirancang dengan tema warna resmi Canva (kombinasi biru pastel `#9dc7e8`, krem `#f6ecdb`, dan aksen emas `#f4a82a`), serta menerapkan tata letak vertikal elegan yang adaptif pada semua ukuran layar perangkat.

## Fitur dan Implementasi 

1. Semantic HTML5 & Hierarki Konten:
   - Menggunakan tag struktural semantik: `<header>`, `<main>`, `<section>`, `<nav>`, `<table>`, `<form>`, dan `<footer>`.
   - Struktur heading terurut logis mulai dari `<h1>` hingga `<h4>`.

2. CSS Custom Properties (`:root`):
   - Manajemen palet warna terpusat (`--blue-bg`, `--creme-bg`, `--gold-accent`, `--blue-accent`, dll.).
   - Standardisasi font kustom (*Playfair Display* dan *Plus Jakarta Sans*).

3. Responsive Layout (Flexbox & CSS Grid):
   - Flexbox: Digunakan untuk penataan cover hero di tengah dan navigasi pill bawah dengan `flex-wrap: wrap` (mencegah *horizontal scrolling*).
   - CSS Grid: Digunakan pada 3 kartu informasi kegiatan (`.info-grid-cards`) dengan pembagian unit fraksi `fr`.
   - Media Queries: Mengatur transisi tata letak kartu dari 1 kolom pada mobile (< 480px) menjadi 3 kolom sejajar pada tablet/desktop (>= 480px).
   - Full-Width Section: Latar belakang tiap section membentang penuh ke tepi layar, sementara konten utama tetap terpusat secara rapi.

4. Komponen Reusable:
   - Card Component: Wadah informasi dengan border kontras dan aksen drop-shadow khas sketsa.
   - Button Component: Tombol bergaya kapsul (pill shape) untuk aksi utama dan menu pintasan.
   - Form Group Component: Baris input minimalis dengan border bawah dan label kapital terstruktur.

5. Aksesibilitas (A11y):
   - Skip Link (`Lewati ke konten utama`) untuk pembaca layar (screen reader).
   - Indikator fokus keyboard visual yang jelas via `:focus-visible`.
   - Atribut `alt` deskriptif pada gambar QR Code dan logo.
   - Lolos audit otomatis Google Lighthouse dengan skor Aksesibilitas 94.
---

## Progres Pertemuan 5 - DOM, EVENT, WEB STORAGE, DAN DYNAMIC UI
implementasi lanjutan dari interaksi DOM dinamis, penggunaan Event Listener, serta penerapan Web Storage sederhana untuk pengaturan tema aplikasi (Light/Dark Mode).

## Dokumentasi Alur Event 
Sistem pada aplikasi ini menggunakan 3 interaksi utama berbasis DOM Events:

### 1. Alur Event: Filter Status Kehadiran (`click`)
* Elemen Terkait: Kumpulan tombol filter (`Semua`, `Akan Hadir`, `Berhalangan`).
* Alur Eksekusi:
  1. Pengguna mengklik salah satu tombol filter status kehadiran.
  2. *Event listener* tipe `'click'` mendeteksi klik dan membaca atribut data dari tombol tersebut (`button.dataset.filter`).
  3. Berdasarkan nilai filter, data array tamu (`dataTamuUnangan`) disaring menggunakan metode `.filter()`.
  4. Fungsi `renderItems(hasil)` dipanggil untuk menghapus elemen lama dan merender ulang kartu tamu yang sesuai ke dalam DOM secara dinamis.

### 2. Alur Event: Pencarian Real-Time (`input`)
* Elemen Terkait: Kolom input pencarian (`searchInput`).
* Alur Eksekusi:
  1. Pengguna mengetikkan nama delegasi atau instansi pada kolom pencarian.
  2. Event listener tipe `'input'` memicu fungsi setiap kali ada perubahan nilai teks pada input.
  3. Nilai input diubah menjadi huruf kecil (lowercase) untuk pencarian yang case-insensitive.
  4. Data tamu disaring berdasarkan kecocokan string pada atribut `delegasi` atau `instansi`.
  5. Fungsi `renderItems(hasilPencarian)` mengeksekusi pembaruan tampilan kartu tamu di layar seketika tanpa *reload* halaman.

### 3. Alur Event: Tombol Detail Interaktif (*Event Delegation* - `click`)
* Elemen Terkait: Kontainer daftar tamu (`daftar`) dan tombol "Detail Tamu".
* Alur Eksekusi:
  1. Pengguna mengklik tombol "Detail Tamu" pada salah satu kartu.
  2. Alih-alih memasang event listener di setiap tombol, teknik Event Delegation mendeteksi klik pada kontainer utama yang mengarah ke elemen ber-atribut `[data-detail]`.
  3. Skrip mencari elemen detail terdekat (`.card-detail-content`) dari kartu yang diklik.
  4. Status tampilan (display style) diubah secara kondisional (`'block'` / `'none'`), teks tombol berganti antara "Detail Tamu" dan "Tutup Detail", serta tata letak CSS grid disesuaikan secara dinamis.


## Penerapan State Sederhana / Web Storage
* Aplikasi menggunakan `localStorage` untuk menyimpan preferensi tema pengguna (`theme: 'light'` atau `'theme' : 'dark'`).
* Saat halaman dimuat ulang (refresh), skrip membaca state dari `localStorage` agar preferensi tema pengguna tetap terjaga secara konsisten.
---
## Peer / Code Review dan Validasi Form (pertemuan 6)
* Komponen Terkait: Form RSVP (`#form-rsvp`), fungsi validasi bisnis (`validateForm`), serta atribut aksesibilitas (`aria-invalid` dan pengelolaan fokus).
* Alur Peninjauan & Perbaikan:
  1. *Peer review* dilakukan untuk mengevaluasi pengalaman pengguna dan aksesibilitas form saat terjadi kesalahan pengisian data.
  2. Atribut HTML `novalidate` diterapkan untuk menonaktifkan validasi bawaan peramban agar digantikan dengan logika penanganan kustom di JavaScript.
  3. Pesan *error* dipisahkan secara spesifik antara kondisi *field* kosong dan panjang karakter minimum yang tidak sesuai.
  4. Atribut aksesibilitas `aria-invalid="true"` ditambahkan secara dinamis dan peramban diarahkan memindahkan fokus kursor secara otomatis ke *field* error pertama menggunakan fungsi `.focus()`.