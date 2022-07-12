<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beer extends Model
{
    use HasFactory;

    public function beerType()
    {
        return $this->belongsTo(BeerType::class);
    }

    public function brewery()
    {
        return $this->belongsTo(Brewery::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function beerPic()
    {
        return $this->belongsTo(BeerPic::class);
    }
}
