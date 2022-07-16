<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;

class BreweryController extends Controller
{
    public function breweryinfo($id)
    {
        $brewery = Brewery::with([
                    'user',
                    'breweryPic',
                    'beers',
                    'beers.beerPic',
                    'beers.reviews'
                ])
                ->findOrFail($id);
        return $brewery;
    }

    public function breweryindex()
    {
        $breweries = Brewery::with([
                    'user',
                    'breweryPic',
                    'beers',
                    'beers.beerPic',
                    'beers.reviews'
                ])
                ->get();

        return $breweries;
    }

    public function create(Request $request)
    {
        $brewery = new Brewery;
        
        $this->validate($request, [
            'user_id' => 'required'
        ]);

        $brewery->user_id = $request->input('user_id');
        $brewery->city = $request->input('city');
        $brewery->country = $request->input('country');
        $brewery->website = $request->input('website');
        $brewery->size = $request->input('size');
        $brewery->history = $request->input('history');
        $brewery->brewery_pic_id = $request->input('brewery_pic_id');

        $brewery->save();

        return 'worked';
    }
}
