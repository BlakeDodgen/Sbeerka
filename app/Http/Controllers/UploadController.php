<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BeerPic;

class UploadController extends Controller
{

    public function index(){

       
        //testing blade, can be deleted after, same as its post path in web.php
        return view('upload');
    }
    public function store(Request $request){

        //method what can be used with on the request
        //store()
        //asStore()
        //storePublicly
        //move()
        //getClientExtension()
        //getSize()
        //getError() 
        //isValid() --extension
        
        //display the properties of the request
        //dd($request->all());

        
        $request->validate([
            'beer' => 'required|mimes:jpg,png,jpeg|max:300048'

                
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
