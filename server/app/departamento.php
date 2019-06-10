<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class departamento extends Model
{
    protected $fillable = [
        'id',
        'departamento',
        'created_at',
        'updated_at',
    ];

    //Relationship HasOne (Reverted)
    public function Cliente()
    {
        return $this->belongsTo('app\Cliente');
    }



}
