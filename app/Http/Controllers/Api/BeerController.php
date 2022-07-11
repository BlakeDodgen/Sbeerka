<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Beer;

class BeerController extends Controller
{
    public function beerinfo($id)
    {
        $beer = Beer::findOrFail($id);

        return $beer;
    }

    public function beerindex()
    {
        $beers = Beer::get();

        return $beers;
    }
}
