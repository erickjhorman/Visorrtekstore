<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDescriptionProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('description_productos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Producto_id')->unsigned();
            $table->integer('color_id')->unsigned();
            $table->integer('talla_id')->unsigned();
            $table->integer('Forma_id')->unsigned();
            $table->integer('Existencia');
            $table->integer('Valor_Venta');
            $table->integer('ValorMin');
            $table->integer('Iva_Porcentaje')->nullable();
            $table->timestamps()->useCurrent();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('description_productos');
    }
}
