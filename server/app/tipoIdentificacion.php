<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class tipoIdentificacion extends Model
{
    
    protected $fillable = [
        'id',
        'identificacion',
        'created_at',
        'updated_at',
    ];

//Relationship HasOne (Reverted)
    public function admin()
    {
        return $this->belongsTo('app\admin');
    }

    
    public function Cliente()
    {
        return $this->belongsTo('app\Cliente');
    }











}

