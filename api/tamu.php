<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/config/database.php';

// Middleware Header JSON
header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'];

// 1. ENDPOINT GET: Mengambil daftar data tamu dari MySQL
if ($method === 'GET') {
    try {
        $status = $_GET['status'] ?? null;

        // Prepared statement jika ada filter status
        if ($status) {
            $stmt = db()->prepare('SELECT t.id, t.instansi, t.delegasi, t.jumlah_pax, t.status_kehadiran, k.nama_kategori 
                                   FROM tamu_undangan t 
                                   JOIN kategori_tamu k ON k.id = t.kategori_id 
                                   WHERE t.status_kehadiran = :status 
                                   ORDER BY t.id DESC');
            $stmt->execute(['status' => $status]);
        } else {
            // Ambil semua data tamu beserta nama kategorinya
            $stmt = db()->query('SELECT t.id, t.instansi, t.delegasi, t.jumlah_pax, t.status_kehadiran, k.nama_kategori 
                                 FROM tamu_undangan t 
                                 JOIN kategori_tamu k ON k.id = t.kategori_id 
                                 ORDER BY t.id DESC');
        }

        $data = $stmt->fetchAll();

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'count' => count($data),
            'data' => $data
        ], JSON_UNESCAPED_UNICODE);
        exit;
        
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Gagal mengambil data dari database']);
        exit;
    }
}

// Method Not Allowed
header('Allow: GET');
http_response_code(405);
echo json_encode(['error' => 'Method tidak diizinkan']);
exit;
