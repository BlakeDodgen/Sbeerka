<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\BeerType;

class BeerController extends Controller
{
    public function beerinfo($id)
    {
        $beer = Beer::with('beerType', 'brewery')->findOrFail($id);

        return $beer;
    }

    public function beerindex()
    {
        $beers = Beer::with('beerType', 'brewery')->get();

        return $beers;
    }
}
