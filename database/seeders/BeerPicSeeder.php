<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BeerPic;
use DB;

class BeerPicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('beer_pics')->truncate();

        $pics = [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
            "18.png",
            "19.png",
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
            "30.png",
            "31.png",
            "32.png",
            "33.png",
            "34.png",
            "35.png",
            "36.png"
        ];

        foreach($pics as $pic) {
            $beerpic = new BeerPic;

            $beerpic->picture = $pic;
            $beerpic->save();
        } 
    }
}
