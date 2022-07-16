<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        // dd($input);
        Validator::make($input, [
            'first_name' => ['max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'over18' => 'accepted'
        ])->validate();

        return User::create([
            'first_name' => $input['first_name'],
            'surname' => $input['surname'],
            'username' => $input['username'],
            'brewery_name' => $input['brewery_name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'over18' => $input['over18'],
            'user_type' => $input['user_type']
        
        ]);
    }
}
