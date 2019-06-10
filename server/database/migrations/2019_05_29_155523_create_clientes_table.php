<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('usuario_id')->unsigned();
            $table->integer('tipoIdentificacion_id')->unsigned();
            $table->integer('departamento_id')->unsigned();
            $table->integer('tarjeta_id')->unsigned();
            $table->integer('ciudad_id')->unsigned();
            $table->string('avatar')->nullable();
            $table->string('nombre',30)->nullable();
            $table->string('apellido',30)->nullable();
            $table->string('Telefono',10)->nullable();
            $table->string('celular',13)->nullable();
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
        Schema::dropIfExists('clientes');
    }
}
