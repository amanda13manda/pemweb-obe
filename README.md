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
