<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnviosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('envios', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('Detalle_venta_id')->unsigned();
            $table->enum('tipo_envio', array('Domicilio','Recoger_en_tienda'));
            $table->integer('administrador_id')->unsigned();
            $table->string('domicilio_id');
            $table->string('nombre', 20);
            $table->string('apellido', 15);
            $table->string('cedula', 10);
            $table->string('telefono', 10);
            $table->longtext('descripcionProducto');
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
        Schema::dropIfExists('envios');
    }
}
