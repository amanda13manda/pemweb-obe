<?php
declare(strict_types=1);

// Middleware sederhana untuk memastikan Header selalu JSON
header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'];

// 1. ENDPOINT GET: Mengambil daftar data tamu sementara
if ($method === 'GET') {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'count' => 2,
        'data' => [
            ['id' => 1, 'nama' => 'Ahmad Subagja', 'pax' => 2, 'status' => 'Hadir'],
            ['id' => 2, 'nama' => 'Siti Nurhaliza', 'pax' => 1, 'status' => 'Tentatif']
        ]
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. ENDPOINT POST: Menerima konfirmasi RSVP tamu baru dengan validasi
if ($method === 'POST') {
    try {
        $payload = json_decode(
            file_get_contents('php://input'),
            true,
            512,
            JSON_THROW_ON_ERROR
        );
    } catch (JsonException $e) {
        // Kondisi 400: Format JSON rusak / salah sintaks
        http_response_code(400);
        echo json_encode(['error' => 'Format JSON tidak valid']);
        exit;
    }

    if (!is_array($payload)) {
        http_response_code(400); // 400 Bad Request jika bukan object
        echo json_encode(['error' => 'Body JSON harus berupa object']);
        exit;
    }

    // Ambil data dan bersihkan
    $nama = trim((string) ($payload['nama'] ?? ''));
    $pax  = filter_var($payload['pax'] ?? null, FILTER_VALIDATE_INT);

    // Kondisi 422: Validasi aturan bisnis gagal (misal nama kosong, >100 karakter, atau pax < 1)
    if ($nama === '' || strlen($nama) > 100 || $pax === false || $pax < 1) {
        http_response_code(422);
        echo json_encode([
            'error' => 'Data tidak valid. Nama wajib diisi (maks 100 karakter) dan jumlah pax minimal 1.'
        ]);
        exit;
    }

    // Jika lolos semua validasi -> Sukses (201 Created)
    http_response_code(201);
    echo json_encode([
        'message' => 'Konfirmasi RSVP berhasil disimpan',
        'data' => compact('nama', 'pax')
    ]);
    exit;
}

// 3. JIKA MENGGUNAKAN METHOD SELAIN GET/POST (Misal: DELETE)
header('Allow: GET, POST');
http_response_code(405); // 405 Method Not Allowed sesuai Latihan 3 modul
echo json_encode(['error' => 'Method tidak diizinkan']);
exit;
