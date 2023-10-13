<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::none();
        });
        RateLimiter::for('category', function (Request $request) {
            return Limit::none();
        });
        RateLimiter::for('orders', function (Request $request) {
            return Limit::none();
        });
        RateLimiter::for('settings', function (Request $request) {
            return Limit::none();
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));
            Route::middleware('web')
                ->group(base_path('routes/web.php'));  
            Route::middleware('category')
                ->prefix('category')
                ->group(base_path('routes/category.php'));
            Route::middleware('orders')
                ->prefix('orders')
                ->group(base_path('routes/orders.php'));
            Route::middleware('settings')
                ->prefix('settings')
                ->group(base_path('routes/settings.php'));
        });
    }
}
