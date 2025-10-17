<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    // ... other properties

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array<string, class-string|string>
     */
    protected $routeMiddleware = [
        // ... existing middlewares
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.session' => \Illuminate\Session\Middleware\AuthenticateSession::class,
        // ...
        // ADD YOUR CUSTOM MIDDLEWARE HERE 👇
        'checkRole' => \App\Http\Middleware\CheckRole::class, // Assuming your middleware is in App\Http\Middleware\CheckRole
    ];
}