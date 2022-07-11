<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brewery;
use DB;

class BrewerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('breweries')->truncate();

        $breweries = [
            ['user_id' => ,
            'city' => ,
            'country' => ,
            'website' => ,
            'size' => ,
            'history' => ,
            'brewery_pic_id' => 
        ], ['user_id' => ,
            'city' => ,
            'country' => ,
            'website' => ,
            'size' => ,
            'history' => ,
            'brewery_pic_id' => ]
        ];

        foreach($breweries as $breweryex) {
            $brewery = new Brewery;
            
            $brewery->user_id = $breweryex['user_id'];
            $brewery->city = $breweryex['city'];
            $brewery->country = $breweryex['country'];
            $brewery->website = $breweryex['website'];
            $brewery->size = $breweryex['size'];
            $brewery->history = $breweryex['history'];
            $brewery->brewery_pic_id = $breweryex['brewery_pic_id'];

            $brewery->save();
        }
    }
}