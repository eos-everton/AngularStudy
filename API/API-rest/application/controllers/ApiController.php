<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class ApiController extends ResourceController
{
    protected $modelName = 'App\Models\ApiModel'; // Modelo (se for usar um banco)
    protected $format    = 'json';

    public function index()
    {
        // Retorna uma resposta simples
        return $this->respond(['message' => 'API funcionando!']);
    }

    public function show($id = null)
    {
        // Exemplo de como retornar um item por ID
        return $this->respond(['id' => $id, 'data' => 'exemplo de dado']);
    }
}
