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
}
