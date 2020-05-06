<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $fillable = [
        'id',
        'cliente_id',
        'domicilio_id',
        'forma_pago_id',
        'valor_neto',
        'valor_iva',
        'valor_a_pagar',
];

public function clientes()
{
    return $this->hasMany('app\clientes');
}

public function domicilios()
{
    return $this->hasOne('app\clientes');
}

public function testimonios(){
    return $this->belongsToMany('app\TestimonialesProducto');
}

}
