<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class CatalogoEstilos extends Model
{
    protected $fillable = [
        'id',
        'forma',
        'created_at',
        'updated_at',
    ];

      //Relationship HasOne (Reverted)
      public function producto()
      {
          return $this->belongsTo('app\producto');
      }
}
