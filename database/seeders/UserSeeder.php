<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            ['first_name' => ,
            'surname' => ,
            'over18' => ,
            'brewery_name' => ,
            'email' => ,
            'password' => ,
            'username' => ,
            'user_type' => 
        ], ['first_name' => ,
            'surname' => ,
            'over18' => ,
            'brewery_name' => ,
            'email' => ,
            'password' => ,
            'username' => ,
            'user_type' => 
            ]
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