<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Review;
use DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->truncate();

        $reviews = [
            [
                'beer_id' => '1',
                'user_id' => '1',
                'review' => "This was a very tasty beer, shame about the price.",
                'rating' => 4,
                'favorite' => false,
                'body' => 5,
                'linger' => 3,
                'herbal' => 1,
                'citrus' => 2,
                'hoppy' => 4,
                'bitter' => 4,
                'sour' => 2
            ], [
                'beer_id' => '1',
                'user_id' => '2',
                'review' => "I felt as though I had been elevated to another, higher plain of consciousness after drinking this amazing brew!",
                'rating' => 5,
                'favorite' => true,
                'body' => 2,
                'linger' => 2,
                'herbal' => 2,
                'citrus' => 2,
                'hoppy' => 2,
                'bitter' => 2,
                'sour' => 2
            ], [
                'beer_id' => '2',
                'user_id' => '2',
                'review' => "Ok, that's all.",
                'rating' => 2,
                'favorite' => false,
                'body' => 3,
                'linger' => 2,
                'herbal' => 1,
                'citrus' => 1,
                'hoppy' => 3,
                'bitter' => 3,
                'sour' => 1
            ], [
                'beer_id' => '2',
                'user_id' => '3',
                'review' => "Good stuff, I could drink this for hours.",
                'rating' => 4,
                'favorite' => true,
                'body' => 3,
                'linger' => 1,
                'herbal' => 2,
                'citrus' => 2,
                'hoppy' => 4,
                'bitter' => 2,
                'sour' => 4
            ],            
        ];

        foreach($reviews as $reviewex) {
            $review = new Review;
            
            $review->beer_id = $reviewex['beer_id'];
            $review->user_id = $reviewex['user_id'];
            $review->review = $reviewex['review'];
            $review->rating = $reviewex['rating'];
            $review->favorite = $reviewex['favorite'];
            $review->body = $reviewex['body'];
            $review->linger = $reviewex['linger'];
            $review->herbal = $reviewex['herbal'];
            $review->citrus = $reviewex['citrus'];
            $review->hoppy = $reviewex['hoppy'];
            $review->bitter = $reviewex['bitter'];
            $review->sour = $reviewex['sour'];

            $review->save();
        }
    }
}