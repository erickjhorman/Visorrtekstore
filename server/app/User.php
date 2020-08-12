<?php

namespace app;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [ 'id' => $this->id,
                'user_id' => $this->user,
                'email' => $this->email,
                'name' => $this->nombre,
                'created_at' => $this->created_at];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'email', 'password',
    ];

    public function comentario()
    {
        return $this->hasMany('app\comentarios_producto');
    }


    public function usuario_sala()
    {
        return $this->hasOne('app\UsuarioSala', 'foreign_key');
    }


    public function mensaje()
    {
        return $this->hasOne('app\Mensaje', 'foreign_key');
    }

    public function Salas()
    {
        return $this->belongsToMany('app\Sala', 'usuario_salas', 'usuario_id', 'Sala_id');
    }




    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function setPasswordAttribute($value)
    {

        $this->attributes['password'] = bcrypt($value);
    }
}
