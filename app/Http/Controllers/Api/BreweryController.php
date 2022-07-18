<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brewery;
use App\Models\BreweryPic;

class BreweryController extends Controller
{
    public function breweryinfo($id)
    {
        $brewery = Brewery::where('user_id', '=', $id)
                    ->with([
                    'user',
                    'breweryPic',
                    'beers',
                    'beers.beerPic',
                    'beers.reviews'
                    ])
                ->get();
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

        dd( $request->image->originalName);
        $brewery = new Brewery;
        
        // $this->validate($request, [
        //     'user_id' => 'required'
        // ]);

        $values = json_decode($request->values);
            
        $brewery->user_id = $values->user_id;
        $brewery->city = $values->city;
        $brewery->country = $values->country;
        $brewery->website = $values->website;
        $brewery->size = $values->size;
        $brewery->history = $values->history;

        $breweryPic = new BreweryPic;
        $breweryPic->picture = $request->file('image')->name;
        $breweryPic->save();

        $brewery->brewery_pic_id = $breweryPic->id;

        $brewery->save();

        return $brewery;
    }

    public function number()
    {
        $breweries = Brewery::select('id')
                        ->get();

        $number = 0;
        foreach($breweries as $value) {
            if($value['id'] > $number) {
                $number = $value['id'];
            }   
        }
        return $number;
    }

    public function breweryByUser($id)
    {
        $brewery = Brewery::where('user_id', '=', $id)
                            ->get();

        return $brewery;
    }
}
