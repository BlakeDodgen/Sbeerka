<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function main()
    {
        return view('createuser');
    }

    public function create(Request $request)
    {
        $user = new User;
        $this->validate($request, [
            // 'first_name' => 'string|nullable',   
            // 'surname' => 'string|nullable',  
            'over18' => 'accepted',
            // 'username' => 'string|nullable',
            // 'brewery_name' => 'string|nullable',
            'password' => 'required',
            'email' => 'required|email',
            // 'user_type' => 'required|integer',
        ]);

        $user->first_name = $request->input('first_name');
        $user->surname = $request->input('surname');
        $user->over18 = true;
        $user->username = $request->input('username');
        $user->brewery_name = $request->input('brewery_name');
        $user->password = $request->input('password');
        $user->email = $request->input('email');
        $user->user_type = $request->input('user_type');

        $user->save();

        // session()->flash('success_message', 'The client was successfully created.');

        return 'Something worked';  
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        
        $user->delete();

        return 'user deleted';
    }
}
