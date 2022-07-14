<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BeerPicSeeder::class);
        $this->call(BeerSeeder::class);
        $this->call(BeerTypeSeeder::class);
        $this->call(BreweryPicSeeder::class);
        $this->call(BrewerySeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ReviewSeeder::class);
    }
}