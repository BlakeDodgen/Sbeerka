<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function create(Request $request)
    {
        // validation
        $review = new Review;

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
        $review->favorite = false;

        $review->save();

        return 'worked';
    }
}
