<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class CatalogoColoresProducto extends Model
{
    protected $fillable = [
        'id',
        'color',
        'created_at',
        'updated_at',
    ];

      //Relationship HasOne (Reverted)
      public function producto()
      {
          return $this->belongsTo('app\producto');
      }
}
