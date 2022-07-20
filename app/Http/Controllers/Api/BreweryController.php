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

         $brewery = new Brewery;
         $breweryPic = new BreweryPic;

       
        
        $this->validate($request, [
            'image' => 'required'
        ]);
        
        // dd($request->image->name);
        // dd($request->image->getClientOriginalName());

        $values = json_decode($request->values);

        // $this->validate($values, [
        //     'city' => 'required'
        // ]);
    
        $brewery->user_id = $values->user_id;
        $brewery->city = $values->city;
        $brewery->country = $values->country;
        $brewery->website = $values->website;
        $brewery->size = $values->size;
        $brewery->history = $values->history;


        if ($request->image->getClientOriginalName() == null) {
            $breweryPic->picture = 'Brewery.png';
        } else {
            $newImageName = time() . "-". $request->image->getClientOriginalName(); 
            $breweryPic->picture = $newImageName;
        }
        
        $breweryPics = BreweryPic::select('id')
        ->get();

        $number = 0;
        foreach($breweryPics as $value) {
        if($value['id'] > $number) {
        $number = $value['id'];
        }   
        }
        
        $brewery->brewery_pic_id = $number + 1;
        $breweryPic->save();
        $brewery->save();

       
        $request->image->move(public_path('img/breweries'), $newImageName);

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

    public function test(Request $request)
    {
        dd($request);
    }
}
