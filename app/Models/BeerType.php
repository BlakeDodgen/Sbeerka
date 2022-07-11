<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\Beer;

class BeerType extends Model
{
    use HasFactory;

    // protected $table = 'beer_types';

    public function beer()
    {
        return $this->hasMany(Beer::class);
    }
}
