<?php

use Annabel\Application;

$app = new Application(dirname(__DIR__), true);

require __DIR__ . '/../routes/web.php';

return $app;
