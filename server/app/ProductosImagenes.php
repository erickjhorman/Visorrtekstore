<?php
namespace app;

use Illuminate\Database\Eloquent\Model;

class ProductosImagenes extends Model
{
    protected $table = 'producto_imagenes';
    protected $primaryKey = 'id_producto_imagenes';

    protected $fillable = [
        'id_producto_imagenes',
        'producto_id',
        'imagen',
        'talla_id',
        'updated_at',
        'created_at',
    ];

    public function producto()
    {
        return $this->belongsTo('app\producto');
    }
}
