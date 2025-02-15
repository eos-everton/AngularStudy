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

    public function index() {
        $query = $this->db->get("guardiões");
        echo json_encode($query->result());
    }

    
}
?>
