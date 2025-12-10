# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2025-12-10

### Added

-   Added `config/database.php` with default MySQL/SQLite connections and migrations path.
-   Implemented users migration (`database/migrations/2025_12_10_213456_create_users_table.php`) with standard auth columns.

## [1.0.1] - 2025-11-10

### Changed

-   Updated Response import to `Codemonster\Http\Response` (`app/Controllers/HomeController.php`).
-   Removed `declare(strict_types=1)` from `public/index.php`, `bootstrap/app.php`, `routes/web.php`, `app/Controllers/HomeController.php`.
-   Removed redundant file-level docblocks in the same files.

### Dependencies

-   Updated `composer.lock` (compatible with `codemonster-ru/annabel ^1.0`).

## [1.0.0] - 2025-10-18

### Initial Release

-   Introduced the **Annabel Skeleton** — starter project for the [Annabel PHP framework](https://github.com/codemonster-ru/annabel)
-   Included minimal but complete structure:
    -   `app/Controllers/HomeController.php`
    -   `bootstrap/app.php`, `public/index.php`
    -   `routes/web.php`, `resources/views/home.php`
-   Integrated example controller and default view template
-   Added built-in dev server command `composer start`
