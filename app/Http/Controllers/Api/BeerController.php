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
        $beer = Beer::with([
                    'beerType',
                    'beerPic',
                    'brewery',
                    'brewery.breweryPic',
                    'brewery.user',
                    'reviews'
                    ])
                    ->findOrFail($id);

        return $beer;
    }

    public function beerindex()
    {
        $beers = Beer::with([
                    'beerType',
                    'beerPic',
                    'brewery',
                    'brewery.breweryPic',
                    'brewery.user',
                    'reviews'
                    ])
                    ->get();
        return $beers;
    }

    public function create(Request $request)
    {
        $beer= new Beer;
        
        $this->validate($request, [
            'name' => 'required'
        ]);

        $beer->brewery_id = $request->input('brewery_id');
        $beer->beer_type_id = $request->input('beer_type_id');
        $beer->name = $request->input('name');
        $beer->alcohol_volume = $request->input('alcohol_volume');
        $beer->degree = $request->input('degree');
        $beer->description = $request->input('description');
        $beer->beer_pic_id = $request->input('ubeer_pic_id');

        $beer->save();

        return 'worked';
    }
}
