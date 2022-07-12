<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;
use App\Models\Beer;
use App\Models\BeerType;
use App\Models\User;
use App\Models\Review;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        // Assigning the two search variables from the request object
        $searchType = $request->search;
        $searchText = $request->text;

        // Different searches


        if ($searchType == "beername") {
            $beers = Beer::where('name', 'like', ('%'.$searchText.'%'))
                    // ->with('beerType', 'brewery', 'beerPic')
                    ->with([
                        'beerType',
                        'beerPic',
                        'brewery',
                        'brewery.breweryPic',
                        'brewery.user',
                        'reviews'
                    ])
                    ->get();
            return $beers;

        } elseif ($searchType == "breweries") {
            $users = User::select('id', 'brewery_name')
                    ->where('brewery_name', 'like', ('%'.$searchText.'%'))
                    ->with([
                        'brewery',
                        'brewery.breweryPic',
                        'brewery.beers',
                        'brewery.beers.beerPic',
                        'brewery.beers.reviews'
                    ])
                    ->get();
            return $users;  

        } elseif ($searchType == "beer-type") {
            $beerType = BeerType::where('type', 'like', ('%'.$searchText.'%'))
                    ->with([
                        'beers',
                        'beers.beerPic',
                        'beers.reviews'
                    ])
                    ->get();
            return $beerType;

        } elseif ($searchType == "city") {
            $breweries = Brewery::where('city', 'like', ('%'.$searchText.'%'))
                    ->with([
                        'breweryPic',
                        'user',
                        'beers',
                        'beers.beerPic',
                        'beers.reviews'
                    ])
                    ->get();
            return $breweries;

        } elseif ($searchType == "country") {
            $breweries = Brewery::where('country', 'like', ('%'.$searchText.'%'))
                    ->with([
                        'breweryPic',
                        'user',
                        'beers',
                        'beers.beerPic',
                        'beers.reviews'
                    ])
                    ->get();
            return $breweries;

        } else {
            return 'Hello! This still needs some work!';
        }
    }
}