<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

class Pessoas extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->database();

		header("Access-Control-Allow-Origin: *"); // Permite qualquer origem. Ajuste conforme necessário.
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit(0);
        }

    }

    // GET: Lista todas as pessoas
    public function index() {
        $query = $this->db->get("pessoas");
        echo json_encode($query->result());
    }

    // POST: Adiciona uma nova pessoa
    public function store() {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($this->db->insert("pessoas", $data)) {
            echo json_encode(["status" => "success", "id" => $this->db->insert_id()]);
        } else {
            echo json_encode(["status" => "error"]);
        }
    }

    // PUT: Atualiza uma pessoa
    public function update($id) {
        $data = json_decode(file_get_contents("php://input"), true);
        $this->db->where("id", $id);
        if ($this->db->update("pessoas", $data)) {
            echo json_encode(["status" => "updated"]);
        } else {
            echo json_encode(["status" => "error"]);
        }
    }

    // DELETE: Remove uma pessoa
    public function delete($id) {
        $this->db->where("id", $id);
        if ($this->db->delete("pessoas")) {
            echo json_encode(["status" => "deleted"]);
        } else {
            echo json_encode(["status" => "error"]);
        }
    }
}
?>
