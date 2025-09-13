<?php

namespace App\Controllers;

class HomeController
{
    public function index()
    {
        return view("home", ['name' => 'World!']);
    }
}
