<?php

namespace app\Http\Controllers;
use DB;
use Illuminate\Http\Request;

class commentsController extends Controller
{

   public function comentarios($id){


    $Producto =  DB::table('description_productos')
    ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    ->select('productos.*','description_productos.*','comentarios.comentario','users.nombre')
    ->where('description_productos.producto_id', '=', $id)
    ->get();

    return $Producto;

   }


}
