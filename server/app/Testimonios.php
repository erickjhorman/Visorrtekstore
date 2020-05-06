<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class Testimonios extends Model
{

    protected $table = 'testimoniales';
    protected $primaryKey = 'id';


    protected $fillable = [
        'id',
        'testimonio',
        'created_at',
        'updated_at'

    ];

    // Many to Many relationship
    public function venta()
    {
        return $this->belongsToMany('App\Ventas','testimonio_id','venta_id');
    }

     // One to Many relationship
    public function tipoMensaje()
    {
        return $this->hasMany('App\TipoMensaje');
    }

}
