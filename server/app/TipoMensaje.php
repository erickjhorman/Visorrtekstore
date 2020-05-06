<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class TipoMensaje extends Model
{
    protected $primaryKey = 'id';

    public function mensaje()
    {
        return $this->hasOne('app\Mensaje', 'foreign_key');
    }

    public function testimonioProducto()
    {
        return $this->belongsTo('App\TestimonialesProducto');
    }
}
