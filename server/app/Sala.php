<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    protected $primaryKey = 'id';

    public function mensaje()
    {
        return $this->hasOne('app\Mensaje', 'foreign_key');
    }

    public function usuario_sala()
    {
        return $this->hasOne('app\UsuarioSala', 'foreign_key');
    }

    public function tipo_sala()
    {
        return $this->belongsTo('app\TipoSala', 'foreign_key');
    }

    public function users()
    {
        return $this->belongsToMany('app\User', 'usuario_salas', 'usuario_id', 'Sala_id');
    }
}
