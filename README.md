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