<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\BeerType;
use App\Models\BeerPic;

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
                    'reviews',
                    'reviews.user'
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
        $beerPic = new BeerPic;
        


        $values = json_decode($request->values);

        

        $beer->brewery_id = $values->brewery_id;
        $beer->beer_type_id = $values->beer_type_id;
        $beer->name = $values->name;
        $beer->alcohol_volume = $values->alcohol_volume;
        $beer->degree = $values->degree;
        $beer->description = $values->description;

        $beerPics = BeerPic::select('id')
        ->get();

        $newImageName = time() . "-". $request->image->getClientOriginalName(); 
        $beerPic->picture = $newImageName;

        $number = 0;
        foreach($beerPics as $value) {
        if($value['id'] > $number) {
        $number = $value['id'];
        }   
        }
        

        $beer->beer_pic_id = $number + 1;
        $beerPic->save();
        $beer->save();

       
        $request->image->move(public_path('img/beers'), $newImageName);

        return 'worked';
    }

    public function beerTypesList()
    {
        $beerTypes = BeerType::get();

        return $beerTypes;
    }
}
