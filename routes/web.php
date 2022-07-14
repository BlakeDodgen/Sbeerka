<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/testing', ['App\Http\Controllers\Api\UserController', 'main']);
// Route::post('/testing/create', ['App\Http\Controllers\Api\UserController', 'create']);

Route::post('/register', [RegisteredUserController::class, 'store'])
            ->middleware(['guest:'.config('fortify.guard')]);
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
            ->middleware(array_filter([
                'guest:'.config('fortify.guard'),
                config('fortify.limiters.login') ? 'throttle:'.config('fortify.limiters.login') : null,
            ]));
    
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
            ->name('logout');

Route::get('/{path?}', ['App\Http\Controllers\HomepageController', 'index'])->where('path', '.*');




