/**
 * Menghitung ringkasan statistik kehadiran tamu undangan seminar
 * @param {Array} data - Koleksi array of objects data tamu
 * @returns {Object} Statistik kehadiran
 */
export function ringkasPresensi(data) {
    // Error Handling Dasar: Validasi tipe data input
    if (!Array.isArray(data)) {
        throw new TypeError('Data harus berupa array!');
    }

    // Menghitung akumulasi total orang yang akan hadir (reduce)
    const totalOrangHadir = data.reduce((total, tamu) => {
        return tamu.status === 'Akan Hadir' ? total + tamu.jumlah : total;
    }, 0);

    return {
        totalUndangan: data.length,
        totalOrangHadir: totalOrangHadir,
        jumlahHadir: data.filter(tamu => tamu.status === 'Akan Hadir').length,
        jumlahBerhalangan: data.filter(tamu => tamu.status !== 'Akan Hadir').length
    };
}