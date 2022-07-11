<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/beers/{id}', ['App\Http\Controllers\Api\BeerController', 'beerinfo']);
Route::get('/beers', ['App\Http\Controllers\Api\BeerController', 'beerindex']);

Route::get('/breweries/{id}', ['App\Http\Controllers\Api\BreweryController', 'breweryinfo']);
Route::get('/breweries', ['App\Http\Controllers\Api\BreweryController', 'breweryindex']);