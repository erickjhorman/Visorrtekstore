<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDescriptionProductToProductosImagenes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('producto_imagenes', function (Blueprint $table) {
            $table->integer('description_product_id')->unsigned()->after('producto_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('producto_imagenes', function (Blueprint $table) {
            $table->dropColumn('description_product_id');
        });
    }
}
