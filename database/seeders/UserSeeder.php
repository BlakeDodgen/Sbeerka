<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\User;
use DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();

        $users = [
            [
                'first_name' => "Blake",
                'surname' => "Dodgen",
                'over18' => TRUE,
                'brewery_name' => "",
                'email' => "blake@sbeerka.beer",
                'password' => Hash::make("password"),
                'username' => "Blake42069",
                'user_type' => "1",
            ], 
            [
                'first_name' => "Ben",
                'surname' => "Herbert",
                'over18' => TRUE,
                'brewery_name' => "",
                'email' => "ben@sbeerka.beer",
                'password' => Hash::make("password"),
                'username' => "Ben",
                'user_type' => "1",
            ],
            [
                'first_name' => "Tomáš",
                'surname' => "Kravčík",
                'over18' => TRUE,
                'brewery_name' => "",
                'email' => "tomas@sbeerka.beer",
                'password' => Hash::make("password"),
                'username' => "Tomáš",
                'user_type' => "1",
            ],
            [
                'first_name' => "Ivan",
                'surname' => "Vukšić",
                'over18' => TRUE,
                'brewery_name' => "",
                'email' => "ivan@sbeerka.beer",
                'password' => Hash::make("password"),
                'username' => "Vukšić",
                'user_type' => "1",
            ],
            [
                'first_name' => "",
                'surname' => "",
                'over18' => TRUE,
                'brewery_name' => "Sibeeria",
                'email' => "sibeeria@sibeeria.com",
                'password' => Hash::make("password"),
                'username' => "",
                'user_type' => "2",
            ],
            [
                'first_name' => "",
                'surname' => "",
                'over18' => TRUE,
                'brewery_name' => "Raven",
                'email' => "raven@raven.com",
                'password' => Hash::make("password"),
                'username' => "",
                'user_type' => "2",
            ],
            [
                'first_name' => "",
                'surname' => "",
                'over18' => TRUE,
                'brewery_name' => "Rogue",
                'email' => "rogue@rogue.com",
                'password' => Hash::make("password"),
                'username' => "",
                'user_type' => "2",
            ],
            [
                'first_name' => "",
                'surname' => "",
                'over18' => TRUE,
                'brewery_name' => "Mobcraft",
                'email' => "mobcraft@mobcraft.com",
                'password' => Hash::make("password"),
                'username' => "",
                'user_type' => "2",
            ],
        ];

        foreach($users as $userex) {
            $user = new User;
            
            $user->first_name = $userex['first_name'];
            $user->surname = $userex['surname'];
            $user->over18 = $userex['over18'];
            $user->brewery_name = $userex['brewery_name'];
            $user->email = $userex['email'];
            $user->password = $userex['password'];
            $user->username = $userex['username'];
            $user->user_type = $userex['user_type'];

            $user->save();
        }
    }
}