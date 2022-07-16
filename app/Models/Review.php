<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\Models\Beer;
// use App\Models\User;

class Review extends Model
{
    use HasFactory;

    public function beer()
    {
        return $this->belongsTo(Beer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
