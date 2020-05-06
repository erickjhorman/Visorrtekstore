<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class TestimoniosVentas extends Model
{

    protected $fillable = [
        'id_testimonios_ventas',
        'venta_id',
        'testimonio_id',
        'tipo_de_mensaje_id',
        'created_at',
        'updated_at'

    ];

   // One to Many relationship
   public function tipoMensaje()
   {
       return $this->hasMany('App\TipoMensaje');
   }

}
