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
            [
                'beer_id' => '2',
                'user_id' => '4',
                'review' => "Nice colour, quite attractive looking liquid...",
                'rating' => 4,
                'favorite' => false,
                'body' => 2,
                'linger' => 2,
                'herbal' => 2,
                'citrus' => 3,
                'hoppy' => 5,
                'bitter' => 1,
                'sour' => 1
            ],
            [
                'beer_id' => '13',
                'user_id' => '4',
                'review' => "Probaly the best beer I ever tasted, but I feel that waiteress was flirting with my partner so I deducted 3 stars",
                'rating' => 2,
                'favorite' => false,
                'body' => 3,
                'linger' => 2,
                'herbal' => 1,
                'citrus' => 4,
                'hoppy' => 5,
                'bitter' => 2,
                'sour' => 3
            ],
            [
                'beer_id' => '23',
                'user_id' => '4',
                'review' => "Made me feel like a God, I woke up 3 days later",
                'rating' => 5,
                'favorite' => true,
                'body' => 5,
                'linger' => 4,
                'herbal' => 4,
                'citrus' => 2,
                'hoppy' => 2,
                'bitter' => 3,
                'sour' => 2
            ],
            [
                'beer_id' => '33',
                'user_id' => '4',
                'review' => "Remindes me of a sunset in Giza, where I was visiting pyramides. I visited 92 countries so far and swam with dolphines. Quite sure that I saw a yeti, but not in Giza, in Nepal which I also visited",
                'rating' => 5,
                'favorite' => true,
                'body' => 2,
                'linger' => 3,
                'herbal' => 1,
                'citrus' => 5,
                'hoppy' => 2,
                'bitter' => 2,
                'sour' => 3
            ], [
                'beer_id' => '27',
                'user_id' => '4',
                'review' => "It's good!!",
                'rating' => 5,
                'favorite' => true,
                'body' => 2,
                'linger' => 2,
                'herbal' => 4,
                'citrus' => 2,
                'hoppy' => 3,
                'bitter' => 5,
                'sour' => 2
            ]

        ];

        foreach ($reviews as $reviewex) {
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
