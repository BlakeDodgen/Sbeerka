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
        Schema::create('beers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('brewery_id');
            $table->foreignId('beer_type_id');
            $table->string('name');
            $table->float('alcohol_volume')->nullable();
            $table->int('degree')->nullable();
            $table->text('description')->nullable();
            $table->foreignId('beer_pic_id')->nullable();
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
        Schema::dropIfExists('beers');
    }
};
