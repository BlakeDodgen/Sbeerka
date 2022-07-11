<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BeerType;
use DB;

class BeerTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beer_types')->truncate();

        $beertypes = [
            "New Zealand Pilsner",
            "Sour Ale with Blackcurrant",
            "Triple New England IPA",
            "Sour Ale with Mango & Passion Fruit",
            "Czech Pale Ale",
            "Pale Lager",
            "Czech Dark Lager",
            "IPA with Grapefruit",
            "New England IPA",
            "India Pale Lager",
            "West Coast IPA",
            "Czech Pale Lager",
            "English Barleywine",
            "Double New England IPA",
            "Imperial Stout with Mayple Syrup",
            "Double IPA", 
            "New England Pale Ale", 
            "Session New England IPA", 
            "Imperial Pastry Sour Ale", 
            "Imperial Stout with Peanut Butter", 
            "Imperial Stout with Prunes", 
            "Spiced Sour Ale", 
            "Tasmanian IPA", 
            "American Pale Ale", 
            "Double Black IPA", 
            "West Coast IPA", 
            "New England IPA", 
            "American Pumpkin Pie Ale", 
            "Double IPA", 
            "India Pale Ale", 
            "Sour Ale", 
            "Quake IPA", 
            "India Pale Ale", 
            "Bohemian Pilsner", 
            "Imperial Stout",
            "West Coat IPA",
            "Pale Ale Gluten Free",
            
        ];

        foreach($beertypes as $type) {
            $beertype = new BeerType;

            $beertype->type = $type;
            $beertype->save();
        } 
    }
}
