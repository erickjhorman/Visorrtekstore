<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEstadoProductoToDescriptionProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('description_productos', function (Blueprint $table) {
            $table->integer('estado_producto_id')->unsigned()->after('producto_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('description_productos', function (Blueprint $table) {
            $table->dropColumn('estado_producto_id');
        });
    }
}
