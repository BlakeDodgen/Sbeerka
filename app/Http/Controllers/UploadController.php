<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BeerPic;

class UploadController extends Controller
{

    public function index(){

       

        return view('upload');
    }
    public function store(Request $request){

        //store()
        //asStore()
        //storePublicly
        //move()
        //getClientExtension()
        //getSize()
        //getError() 
        //isValid() --extension
        //dd($request->all());

        $request->validate([
            'picture' => 'required|mimes:jpg,png,jpeg|max:300048'

                
        ]);

        //creates a new controlled name of the file
        $newImageName = time() . "-". $request->name . "." . $request->picture->extension();    

        $request->picture->move(public_path('img/uploaded'), $newImageName);

        // dd($newImageName);

         $beerPic = BeerPic::create([
            'picture' => $newImageName
         ]);
        
        return view('');
    }
}
