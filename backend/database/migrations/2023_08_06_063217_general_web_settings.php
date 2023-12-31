<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('general_web_settings', function (Blueprint $table) {
            $table->id();
            $table->string('website_name');
            $table->string('logo');
            $table->string('favicon');
            $table->string('website_general_color');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('general_web_settings');
    }
};
