<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;
use App\Models\Beer;
use App\Models\BeerType;
use App\Models\User;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $searchType = $request->search;
        $searchText = $request->text;

        if ($searchType == "beername") {
            $beers = Beer::where('name', 'like', ('%'.$searchText.'%'))
                    ->with('beerType', 'brewery', 'beerPic')
                    ->get();
            return $beers;
        } elseif ($searchType == "breweries") {
            $users = User::select('id')
                    ->where('brewery_name', 'like', ('%'.$searchText.'%'))
                    ->get();
            $userslist = [];
            foreach($users as $user) {
                array_push($userslist, $user->id);
            }
            dd($userslist);
            // $breweries = Brewery::where('id', 'in', $userslist)
            //         ->with('brewery')
            //         ->with ('beers')
            //         ->get();
            return $users;
        } elseif ($searchType == "beer-type") {
            $beerType = BeerType::where('type', 'like', ('%'.$searchText.'%'))
                    ->with('beers')
                    ->get();
            return $beerType;
        } else {
            return 'Hello! This still needs some work!';
        }
    }
}

// all
// breweries -DONE
// beername -DONE
// city
// flavors
// alcohol-content
// beer-type -DONE
// random-beer