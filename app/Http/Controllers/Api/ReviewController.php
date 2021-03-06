<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function create(Request $request)
    {
        $review = new Review;
        
        $this->validate($request, [
            'user_id' => 'required',   
            'beer_id' => 'required',
        ]);

        $review->user_id = $request->input('user_id');
        $review->beer_id = $request->input('beer_id');
        $review->rating = $request->input('rating');
        $review->review = $request->input('review');
        $review->body = $request->input('body');
        $review->linger = $request->input('linger');
        $review->herbal = $request->input('herbal');
        $review->citrus = $request->input('citrus');
        $review->hoppy = $request->input('hoppy');
        $review->bitter = $request->input('bitter');
        $review->sour = $request->input('sour');
        $review->favorite = $request->input('favorite');

        $review->save();

        return 'worked';
    }

    public function userReviews($id)
    {
        $reviews = Review::where('user_id', '=', $id)
                    ->with('beer:id,name,beer_pic_id', 'beer.beerPic')
                    ->get();
        return $reviews;
    }

    public function destroy(Request $request)
    {
       dd($request);
        // $user = Review::where;
        
        // $user->delete();

        return 'user deleted';
    }

    public function favoriteBeers($id)
    {
        $beers = Review::where('user_id', '=', $id)
                        ->where('favorite', '=', 1)
                        ->with('beer')
                        ->get();

        return $beers;
    }
}
