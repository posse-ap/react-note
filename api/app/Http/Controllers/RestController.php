<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RestController extends Controller
{
    public function index()
    {
        return view('rest');
    }


    public function openapi()
    {
        return response(file_get_contents(resource_path('openapi.yml')), 200)
            ->header('Content-Type', 'text/yaml');
    }
}
