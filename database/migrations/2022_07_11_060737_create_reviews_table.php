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
            $table->integer('body')->nullable();
            $table->integer('linger')->nullable();
            $table->integer('herbal')->nullable();
            $table->integer('citrus')->nullable();
            $table->integer('hoppy')->nullable();
            $table->integer('bitter')->nullable();
            $table->integer('sour')->nullable();
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
