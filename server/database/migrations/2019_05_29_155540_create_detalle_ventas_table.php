<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_ventas', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('venta_id')->unsigned();
            $table->integer('Producto_id')->unsigned();
            $table->integer('Cantidad');
            $table->integer('Valor_Neto');
            $table->integer('Valor_Iva')->nullable();
            $table->integer('Valor_Pagar');
            $table->string('N_cuotas');
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
        Schema::dropIfExists('detalle__compras');
    }
}
