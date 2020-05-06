<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveTestimonioToTestimonialesVentas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('testimoniales_ventas', function (Blueprint $table) {
            $table->dropColumn('testimonio');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('testimoniales_ventas', function (Blueprint $table) {
            $table->string('testimonio',150)->after('tipo_de_mensaje_id');
        });
    }
}
