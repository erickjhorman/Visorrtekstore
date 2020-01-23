<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'Sala_id',
        'usuario_id',
        'tipoMensaje_id',
        'mensaje',
        'url',
        'hora',
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'foreign_key');
    }

    public function sala()
    {
        return $this->belongsTo('app\Sala', 'foreign_key');
    }

    public function tipo_mensaje()
    {
        return $this->belongsTo('app\TipoMensaje', 'foreign_key');
    }
}
