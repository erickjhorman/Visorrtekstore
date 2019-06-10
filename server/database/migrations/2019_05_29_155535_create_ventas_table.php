<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venta', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('Cliente_id')->unsigned();
            $table->integer('domicilio_id')->unsigned();
            $table->integer('Valor_Neto');
            $table->integer('Descuento')->nullable();
            $table->integer('Valor_Iva')->nullable();
            $table->integer('Valor_a_Pagar');
            $table->enum('Forma_Pago_id', array('efectivo','Tarjeta debito','Tarjeta credito','Siste credito'));
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
        Schema::dropIfExists('compras');
    }
}
