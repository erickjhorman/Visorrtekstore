<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class transportadora extends Model
{
    protected $fillable = [
        'id',
        'transportadora',
        'valor_envio',

    ];

    public function despachos()
    {
        return $this->belongsTo('app\despacho');
    }

}
