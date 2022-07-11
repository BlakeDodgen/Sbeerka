<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('beer_id');
            $table->foreignId('user_id');
            $table->text('review')->nullable();
            $table->int('rating');
            $table->boolean('favorite');
            $table->int('body')->nullable();
            $table->int('linger')->nullable();
            $table->int('herbal')->nullable();
            $table->int('citrus')->nullable();
            $table->int('hoppy')->nullable();
            $table->int('bitter')->nullable();
            $table->int('sour')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};
