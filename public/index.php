<?php

declare(strict_types=1);

/**
 * Annabel Framework - Entry point
 */

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';

$app->run();
