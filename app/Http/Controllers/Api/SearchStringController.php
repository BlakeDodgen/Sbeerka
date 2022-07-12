<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\User;
use App\Models\Brewery;
use App\Models\BeerType;

class SearchStringController extends Controller
{
    public function beers()
    {
        $beerlist = Beer::select('name')
                    ->get();
        $beers = [];
        foreach($beerlist as $value) {
            array_push($beers, $value['name']);
        }
        return $beers;
    }

    public function breweries()
    {
        $brewerylist = User::select('brewery_name')
                    ->where('user_type', '=', 2)
                    ->get();
        $breweries = [];
        foreach($brewerylist as $value) {
            array_push($breweries, $value['brewery_name']);
        }
        return $breweries;
    }

    public function cities()
    {
        $citylist = Brewery::select('city')
                    ->get();
        $cities = [];
        foreach($citylist as $value) {
            if(!in_array($value['city'], $cities)) {
                array_push($cities, $value['city']);
            }  
        }
        return $cities;
    }

    public function countries()
    {
        $countrylist = Brewery::select('country')
                    ->get();
        $countries = [];
        foreach($countrylist as $value) {
            if(!in_array($value['country'], $countries)) {
                array_push($countries, $value['country']);
            }   
        }
        return $countries;
    }

    public function beertypes()
    {
        $beertypelist = BeerType::select('type')
                    ->get();
        $beertypes = [];
        foreach($beertypelist as $value) {
            array_push($beertypes, $value['type']);
        }
        return $beertypes;
    }
}
