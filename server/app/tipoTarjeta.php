<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class tipoTarjeta extends Model
{

    protected $fillable = [
        'id',
        'tarjeta_id',
        'tarjeta',

    ];


    //Relationship HasMany (Reverted)
      public function Cliente()
      {
          return $this->belongsTo('app\Cliente');
      }


}
