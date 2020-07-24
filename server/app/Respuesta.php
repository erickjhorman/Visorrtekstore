<?php

namespace app;
use app\Pregunta;

use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
    protected $fillable = [
        'id_respuesta',
        'usuario_id',
        'respuesta',
        'created_at',
        'updated_at'

    ];

    public function preguntas(){

        return $this->belongsToMany(Pregunta::class)
                          ->using(PreguntaRespuesta::class)
                          ->as('pregunta_respuesta')
                          ->withTimestamps()
                          ->withPivot([
                            'id',
                            'respuesta_id',
                            'pregunta_id',
                            'created_at',
                            'updated_at'
                        ]);
    }
}
