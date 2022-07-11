<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\Brewery;

class BreweryPic extends Model
{
    use HasFactory;

    public function brewery()
    {
        return $this->hasOne(Brewery::class);
    }
}
