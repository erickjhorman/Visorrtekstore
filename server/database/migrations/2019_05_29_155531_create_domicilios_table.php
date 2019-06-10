<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomiciliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domicilios', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('cliente_id')->unsigned();
            $table->integer('departamento_id')->unsigned();
            $table->integer('ciudad_id')->unsigned();
            $table->string('nombre',30);
            $table->string('apellido',30);
            $table->string('barrio',30)->nullable();
            $table->string('via',10);
            $table->string('numero',30);
            $table->string('celular',13);
            $table->longText('Datos_adicionales',60)->nullable();
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
        Schema::dropIfExists('domicilios');
    }
}
