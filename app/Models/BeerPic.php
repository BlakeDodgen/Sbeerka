<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BeerPic extends Model
{
    use HasFactory;

    public function beer()
    {
        return $this->hasOne(Beer::class);
    }
}
