<?php

declare(strict_types=1);

/**
 * Define the application routes.
 * Each route is registered on the $app instance.
 */

use App\Controllers\HomeController;

$app->get('/', [HomeController::class, 'index']);
