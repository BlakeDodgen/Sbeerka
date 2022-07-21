<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Brewery;

class UserController extends Controller
{
    public function main()
    {
        return view('createuser');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        
        $user->delete();

        return 'user deleted';
    }

    public function userinfo($id)
    {
        $user = User::with('brewery')
                    ->findOrFail($id);

        return $user;
    }

    public function editUser(Request $request)
    {
        // dd($request->input('id'));
        $user = User::findOrFail($request->input('id'));
        
        // $this->validate($request, [
        //     'user_id' => 'required',   
        //     'beer_id' => 'required',
        // ]);

        $user->first_name = $request->input('first_name');
        $user->surname = $request->input('surname');
        $user->username = $request->input('username');
        $user->email = $request->input('email');

        $user->save();

        return 'User Profile Updated';
    }
}