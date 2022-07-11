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
            "name1",
            "name2",
            "name3"
        ];

        foreach($pics as $pic) {
            $beerpic = new BeerPic;

            $beerpic->picture = $pic;
            $beerpic->save();
        } 
    }
}
