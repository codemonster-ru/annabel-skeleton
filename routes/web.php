<?php

use App\Controllers\HomeController;

$app->get('/', [HomeController::class, 'index']);
$app->get('/vue', fn() => app()->vue('Home', ['message' => 'Hello, World!']));
