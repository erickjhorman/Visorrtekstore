<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class categoria extends Model
{
    protected $fillable = [
        'id',
        'categoria',
        'created_at',
        'updated_at',
    ];

    //Relationship Many to Many
public function marcas()
{
    return $this->belongsToMany('App\marcas', 'categorias_marcas', 'categoria_id', 'marcas_id');
}


}

