<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class TipoSala extends Model
{
    protected $primaryKey = 'id';


    public function sala()
    {
        return $this->hasOne('app\Sala', 'foreign_key');
    }
}
