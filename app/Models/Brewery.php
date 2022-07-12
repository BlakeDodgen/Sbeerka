<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brewery extends Model
{
    use HasFactory;

    public function beers()
    {
        return $this->hasMany(Beer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function breweryPic()
    {
        return $this->belongsTo(BreweryPic::class);
    }

}
