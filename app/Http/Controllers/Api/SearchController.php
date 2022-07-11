<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;
use App\Models\Beer;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $searchType = $request->search;
        $searchText = $request->text;

        if ($searchType == "beer") {
            $beers = Beer::where('name', 'like', ('%'.$searchText.'%'))
                    ->with('beerType', 'brewery')
                    ->get();
            return $beers;
        } else {
            return 'hello';
        }
    }
}
