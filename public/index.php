<?php

use Annabel\Http\Request;

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';

$request = Request::capture();

$response = $app->handle($request);
$response->send();
