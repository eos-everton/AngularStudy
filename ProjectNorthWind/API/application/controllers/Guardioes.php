<?php
	
	class Guardioes extends CI_Controller {
		public function __construct() {
			parent::__construct();
			$this->load->model('Guardiao_model');
		}
		
		public function index() {
			header('Content-Type: application/json');
        	echo json_encode($this->Guardiao_model->get_all());

			// $data['guardiões'] = $this->Guardiao_model->get_all();
			// $this->load->view('guardioes/index', $data);
		}
}
