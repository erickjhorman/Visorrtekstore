<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('tipoIdentificacion_id')->unsigned();
            $table->string('nombre', 20)->unique();
            $table->string('email', 20);
            $table->string('direccion', 20);
            $table->string('telefono', 20);
            $table->string('numero', 20);
            $table->string('password', 255);
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
        Schema::dropIfExists('admins');
    }
}
