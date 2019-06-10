<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDespachosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('despachos', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('envio_id')->unsigned();
            $table->integer('transportadora_id')->unsigned();
            $table->timestamp('fecha_ingreso')->useCurrent();
            $table->date('fecha_salida');
            $table->time('hora_salida');
            $table->date('fecha_llegada');
            $table->time('hora_llegada');
            $table->enum('estado_despacho',array('Despachado','arrivado','destino','recibido','rechazado'));
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('despachos');
    }
}
