import { ringkasPresensi } from './utils.js';

// Data koleksi(utama) entitas proyek (Contoh: Data Presensi Tamu Seminar HMTK))
// Properti mencakup: id, instansi, delegasi, jumlah, status, dan lokasi
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

// Latihan 1: Menampilkan tamu pada properti lokasi tertentu menggunakan filter
const targetLokasi = 'Auditorium Lt. 4';
const tamuDiAuditorium = dataTamuUndangan.filter(tamu => tamu.lokasi === targetLokasi);
console.log(`Tamu di ${targetLokasi} (filter):`);
console.table(tamuDiAuditorium);

// Latihan 2: Fungsi mencari data tamu berdasarkan id menggunakan find
function cariTamuById(data, idTarget) {
    return data.find(tamu => tamu.id === idTarget);
}
const hasilCari = cariTamuById(dataTamuUndangan, 2);
console.log("Pencarian Tamu ID 2 (find):", hasilCari);

// Latihan 3: Destructuring dan template literal membuat string ringkasan
console.log("Ringkasan String Per Item (Destructuring & Template Literal):");
dataTamuUndangan.forEach(({ id, instansi, delegasi, jumlah, status }) => {
    console.log(`[ID ${id}] ${instansi} diwakili oleh ${delegasi} membawa ${jumlah} orang (Status: ${status}).`);
});