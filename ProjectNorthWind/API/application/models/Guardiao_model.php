<?php
	class Guardiao_model extends CI_Model {
		public function __construct() {
			parent::__construct();
			$this->load->database();
		}
		
		public function get_all() {
			return $this->db->get('guardiões')->result_array();
		}
	}

