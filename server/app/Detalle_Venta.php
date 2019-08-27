<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class Detalle_Venta extends Model
{
    protected $fillable = [
        'id',
        'venta_id',
        'producto_id',
        'nombre',
        'cantidad',
        'valor_neto',
        'valor_iva',
        'valor_pagar',
        'n_cuotas',
];

//Relatiship Inverse
public function detalle_venta()
{
    return $this->belongsTo('app\envio');
}

//Relatiship Inverse
public function recibo()
{
    return $this->belongsTo('app\recibo');
}

//Relatiship Inverse
public function factura()
{
    return $this->belongsTo('app\factura');
}

}
