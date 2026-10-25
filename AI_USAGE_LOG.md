# AI Usage Log
## Penggunaan AI 1
- Tanggal: 26 Agustus 2026
- Tujuan Penggunaan AI:
Membantu membuat README.md.
- Prompt Ringkas:
Membuat README proyek Pemrograman Web.
- Hasil:
AI memberikan struktur README yang berisi identitas, deskripsi proyek, teknologi, cara menjalankan proyek, dan URL lokal.
- Verifikasi:
Isi README diperiksa dan disesuaikan dengan langkah praktikum.
- Keputusan Mahasiswa:
Digunakan setelah diperiksa dan disesuaikan.

## Penggunaan AI 2
- Tanggal: 26 Agustus 2026
- Tujuan Penggunaan AI:
Membantu menganalisis hasil pengujian halaman web.
- Prompt Ringkas:
Mencatat Request URL, Request Method, Status Code, Content-Type, dan waktu response dari tab Network.
-Hasil:
Informasi request berhasil dicatat berdasarkan hasil pengujian pada browser.
- Verifikasi:
Hasil diperiksa kembali melalui tab Network pada browser.
- Keputusan Mahasiswa:
Digunakan sebagai dokumentasi hasil praktikum.
---
## Pertemuan 2 - Modul 02: Struktur HTML5 dan Aksesibilitas Web Dasar
- **Tanggal:** 2 September 2026
- **Tools AI yang Digunakan:** Gemini AI
- **Tujuan Penggunaan:** 
  - Konsultasi ide proyek individu (Sistem Presensi On-The-Spot Kegiatan Himpunan).
  - Memahami panduan refactoring struktur `<div>` ke elemen semantik HTML5.
  - Mempelajari aturan penulisan variasi atribut `alt` pada gambar dan prosedur pengujian navigasi keyboard (Tab).
- **Prompt yang Diberikan:**
  - "nah saya ada kepikiran untuk himpunan saya sendiri... apakah ide yang saya berikan ini telah sesuai panduan proyeknya?"
  - "berikan langkah langkah untuk mengerjakan latihannya... apakah harus mengerjakan juga bagian D?"
  - "Uji Keyboard itu yang mana ya di gambar?"
- **Hasil yang Diadopsi:**
  - Struktur kode HTML5 semantik pada file `index.html`.
  - Jawaban perbandingan kode semantik, 5 contoh alt text, serta hasil uji keyboard untuk laporan Bagian E. Latihan.
- **Verifikasi Mandiri:**
  - Memverifikasi struktur semantik dengan menjalankan halaman di Laragon `http://localhost/pemweb-obe/`.
  - Menguji langsung perpindahan fokus keyboard menggunakan tombol Tab di Google Chrome.
  - Memeriksa keabsahan branch, commit, dan push pada terminal Git.

===
- Tanggal: 8 September 2026
- Tujuan Penggunaan: 
  - Konsultasi penyesuaian judul dan struktur proyek menjadi sistem undangan digital berstandar QR Code dan form RSVP delegasi instansi.
  - Memahami panduan refactoring elemen HTML5 semantik, pembuatan tabel rundown, dan checklist aksesibilitas web dasar.
  - Mempelajari urutan perintah terminal Git untuk pembuatan branch, commit bertahap, dan merge.
---

## Pertemuan 3 - Modul 03: CSS_Responsive_UIUX
* Tanggal: 14 September 2026

### 1. Review dan Penyelarasan Latihan Modul 3
* Topik: Review dan Penyesuaian CSS
* Prompt Utama: Menyesuaikan kode `style.css` agar memenuhi rubrik latihan CSS Grid, navigasi wrap, dan komparasi satuan ukuran CSS.
* Kontribusi AI: Memberikan struktur kode penanda komentar khusus untuk jawaban Latihan 1, 2, dan 3.
* Validasi Mandiri: Memeriksa kembali isi file `style.css`, memastikan tidak ada properti duplikat, dan menguji penerapannya di browser.

### 2. Analisis Kebutuhan Tugas OBE
* Topik: Pemahaman Instruksi Tugas 3 OBE
* Prompt Utama: Membedah maksud instruksi Tugas 3 OBE dengan penjelasan analogi yang mudah dipahami.
* Kontribusi AI: Menguraikan konsep landing page satu halaman, fungsi responsivitas Flexbox/Grid, peran state fokus `:focus-visible`, serta kriteria minimal tiga komponen reusable.
* Validasi Mandiri: Menentukan strategi implementasi komponen kartu (card), tombol (button), dan isian formulir (form group) sebelum memodifikasi markup HTML.

### 3. Integrasi Desain Visual Canva
* Topik: Penerapan Layout dan Kode Warna Spesifik
* Prompt Utama: Mengonversi layout visual dari Canva ke dalam Semantic HTML & CSS menggunakan kode warna HEX presisi dan padanan tipografi.
* Kontribusi AI: Memetakan skema warna (`#9dc7e8`, `#f6ecdb`, `#f4a82a`, `#4f7b9d`), menyusun HTML semantik, dan menambahkan Google Fonts (*Playfair Display* dan *Plus Jakarta Sans*).
* Validasi Mandiri: Menguji tampilan dan mengoreksi pembungkus section agar warna latar membentang penuh (full-width) ke tepi layar sementara konten tetap terpusat di tengah.

### 4. Responsivitas dan Penataan Media Query
* Topik: Pengaturan Breakpoint Mobile ke Desktop
* Prompt Utama: Mengatur kartu informasi agar tidak berdesakan saat diakses melalui perangkat berlayar sempit.
* Kontribusi AI: Menyusun aturan media query dengan pendekatan mobile-first (1 kolom default pada mobile dan 3 kolom sejajar pada layar lebih lebar menggunakan CSS Grid).
* Validasi Mandiri: Menguji perubahan breakpoint menggunakan Google Chrome DevTools pada ukuran 320px, 768px, dan mode desktop penuh.

### 5. Pengujian Aksesibilitas Web
* Topik: Audit Aksesibilitas (A11y)
* Prompt Utama: Melakukan pengujian aksesibilitas menggunakan navigasi keyboard dan audit Google Lighthouse.
* Kontribusi AI: Memberikan panduan pengujian tombol `Tab` (skip-link dan focus ring) serta langkah konfigurasi audit kategori Accessibility pada panel Lighthouse.
* Validasi Mandiri: Menjalankan audit mandiri hingga menghasilkan skor aksesibilitas 94 dan mendokumentasikan hasil tangkapan layar untuk laporan.
---

## Pertemuan 5 - DOM, EVENT, WEB STORAGE, DAN DYNAMIC UI
* Tanggal: 23-27 September 2026

### 1. Analisis Kebutuhann
* Diskusi Logika Interaksi DOM: Membantu memvalidasi struktur kode untuk 3 interaksi bermakna (Filter, Real-time Search, dan Event Delegation).
* Penerapan Web Storage: Membantu merumuskan logika penyimpanan preferensi tema (Light/Dark mode) menggunakan `localStorage.getItem` dan `setItem`.
* Penyusunan Format Dokumentasi: Membantu menstrukturkan laporan alur event agar sesuai dengan rubrik penilaian tugas OBE.

### 2. Verifikasi dan Pengujian
* Seluruh potongan kode yang disarankan telah diuji secara mandiri (self-tested) dengan menjalankan proyek secara lokal melalui server lokal / browser.
* Memastikan tab Console pada Developer Tools bebas dari pesan galat (error bebas) dan fungsi berjalan sesuai harapan.
---
## Pertemuan 6 - FORM, VALIDASI, ACCESSIBILITY, DAN INPUT HANDLING 
* Tanggal: 30 September-4 Oktober 2026
### 1. Analisis Kebutuhan
  * *Validasi Bisnis dan Aksesibilitas:* Membantu merumuskan logika penanganan *error* bersyarat, penerapan atribut `aria-invalid`, serta pemindahan fokus otomatis untuk mendukung navigasi *keyboard* pembaca layar.
  * *Penyusunan Dokumentasi Review:* Membantu menyusun temuan hasil peninjauan kode dan perbaikan form agar sesuai dengan rubrik Tugas OBE.

### 2. Verifikasi dan Pengujian
  * *Pengujian Mandiri:* Seluruh penyesuaian kode pada `index.html` dan `app.js` telah diuji secara lokal di peramban web untuk memastikan pesan kesalahan muncul dengan benar.
  * *Penyimpanan Commit:* Memastikan riwayat perbaikan dicatat dan disimpan ke dalam repositori Git lokal.
---

## Pertemuan 7 - REST API INTEGRATION, ASYNC/AWAIT, DAN STATE MANAGEMENT
* **Tanggal:** 7-11 Oktober 2026

### 1. Analisis Kebutuhan
* **Integrasi Fetch & Async/Await:** Membantu menyusun struktur fungsi `loadTamuData()` asinkron untuk penarikan data dari mock API JSON.
* **Pengelolaan State UI Kompleks:** Merumuskan logika pengubahan tampilan antarmuka untuk 4 state dinamis: *Loading*, *Success*, *Error (dengan tombol Retry)*, serta *Empty State*.
* **Penanganan Galat (Error Handling):** Menyusun blok `try...catch` dan pemeriksaan `response.ok` untuk mengantisipasi kegagalan jaringan atau kesalahan path file.

### 2. Verifikasi dan Pengujian
* **Pengujian State Komunikasi:** Menguji transisi *Loading State* ke *Success State* serta menyimulasikan kegagalan *fetch* untuk memverifikasi penampilan *Error State* dan tombol *Retry*.
* **Verifikasi Filter & Search Lokal:** Memastikan proses pemfilteran dan pencarian data dilakukan dari memori *array* lokal tanpa melakukan panggilan API berulang (*keypress*).
---

## Pertemuan 9 - BACK-END PHP DAN REST API
* **Tanggal:** 25 Oktober 2026

### 1. Analisis Kebutuhan
* **Struktur Server PHP Laragon:** Membantu menyiapkan direktori proyek pada `C:\laragon\www\pemweb-obe` dan mengonfigurasi endpoint berbasis Apache.
* **Middleware & Header Content-Type:** Merumuskan penempatan header `application/json` agar setiap respons API konsisten secara global.
* **Validasi & Error Handling:** Menyusun blok try-catch untuk menangkap JSON rusak (`400`), validasi panjang nama & pax (`422`), serta penanganan method tidak diizinkan (`405`).

### 2. Verifikasi dan Pengujian
* **Pengujian Endpoint via Console/Network:** Memverifikasi status code HTTP (`200`, `201`, `400`, `422`, `405`) menggunakan *fetch* di *Browser Console* dan *DevTools Network*.
* **Konfigurasi Git & Environment:** Memastikan file `.env` terabaikan oleh `.gitignore` sementara `.composer.json` dan `.env.example` tercatat dengan baik.