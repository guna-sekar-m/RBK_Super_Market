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
        Schema::create('order_masters', function (Blueprint $table) {
            $table->id();
            $table->string('order_id');
            $table->string('user_id');
            $table->string('total_amount');
            $table->string('shipping_cost');
            $table->string('shipping_name');
            $table->string('shipping_email');
            $table->string('shipping_mobile_number');
            $table->string('shipping_address');
            $table->string('order_status');
            $table->string('order_date');
            $table->string('payment_id');
            $table->string('payment_type');
            $table->string('payment_mode');
            $table->string('payment_status');
            $table->string('delivery_instructions')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_masters');
    }
};
