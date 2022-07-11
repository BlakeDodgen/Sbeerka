<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BreweryPic;
use DB;

class BreweryPicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brewery_pics')->truncate();

        $pics = [
            "name1",
            "name2",
            "name3"
        ];

        foreach($pics as $pic) {
            $brewerypic = new BreweryPic;

            $brewerypic->picture = $pic;
            $brewerypic->save();
        } 
    }
}
