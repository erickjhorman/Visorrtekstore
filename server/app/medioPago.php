<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class medioPago extends Model
{
    protected $fillable = [
        'id',
        'medio_pago',
        'nombre',
        'nit',


    ];


}
