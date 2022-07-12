<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Beer;

class BeerType extends Model
{
    use HasFactory;

    public function beers()
    {
        return $this->hasMany(Beer::class);
    }
}
