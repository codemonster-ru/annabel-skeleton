<?php

declare(strict_types=1);

namespace App\Controllers;

use Codemonster\Annabel\Http\Response;

/**
 * The default controller that renders the home page.
 */
class HomeController
{
    public function index(): Response
    {
        return view('home', ['name' => 'World!']);
    }
}
