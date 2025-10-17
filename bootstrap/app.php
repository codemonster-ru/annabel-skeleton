<?php

declare(strict_types=1);

use Codemonster\Annabel\Application;

/**
 * Bootstrap the Annabel application and load routes.
 */

$baseDir = __DIR__ . '/..';

$app = new Application($baseDir);

require "$baseDir/routes/web.php";

return $app;
