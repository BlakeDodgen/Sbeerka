<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;

class BreweryController extends Controller
{
    public function breweryinfo($id)
    {
        $brewery = Brewery::with('user', 'beers')->findOrFail($id);

        return $brewery;
    }

    public function breweryindex()
    {
        $breweries = Brewery::with('user', 'beers')->get();

        return $breweries;
    }
}
