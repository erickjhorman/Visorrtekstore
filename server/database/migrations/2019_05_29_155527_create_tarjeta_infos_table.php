<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTarjetaInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarjeta_infos', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('tipoIdentificacion_id')->unsigned();
            $table->string('numero',30)->nullable();
            $table->string('nombre',30)->nullable();
            $table->string('apellido',30)->nullable();
            $table->string('date',10)->nullable();
            $table->string('cedula',13)->nullable();
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
        Schema::dropIfExists('tarjeta_infos');
    }
}
