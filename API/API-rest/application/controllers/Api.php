<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

    // Define table name here, assuming your model uses a table for CRUD operations
    protected $table = 'your_table_name'; // Adjust this to your actual table name

    public function __construct() {
        parent::__construct();
        // Set CORS headers to allow your Angular frontend to make requests
        header("Access-Control-Allow-Origin: http://localhost:4200");  // Your frontend URL
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");

        // Handle OPTIONS request (pre-flight check)
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit(0);  // No body needed for pre-flight request
        }

        // Load the model for database operations
        $this->load->model('Api_model');
    }

    // This will handle the index route and fetch all data from the model
    public function index() {
        $data = $this->Api_model->get_all();
        echo json_encode($data);
    }

    // This method will fetch a single record by ID
    public function get_by_id($id) {
        $data = $this->Api_model->get_by_id($id); // Ensure your model has this method
        echo json_encode($data);
    }

    // This method inserts data into the database
    public function insert() {
        // Assuming the data is passed via POST, and you handle validation elsewhere
        $data = $this->input->post();
        if ($this->Api_model->insert($data)) {
            echo json_encode(['status' => 'success', 'message' => 'Data inserted successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to insert data']);
        }
    }

    // This method updates data in the database
    public function update($id) {
        // Assuming the data is passed via POST for the update
        $data = $this->input->post();
        if ($this->Api_model->update($id, $data)) {
            echo json_encode(['status' => 'success', 'message' => 'Data updated successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to update data']);
        }
    }

    // This method deletes a record from the database by ID
    public function delete($id) {
        if ($this->Api_model->delete($id)) {
            echo json_encode(['status' => 'success', 'message' => 'Data deleted successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete data']);
        }
    }
}
