<?php

namespace app\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use app\comentarios;
use app\http\Requests\validateComentarioForm;

class commentsController extends Controller
{

   public function comentarios($id){




    // $Producto =  DB::table('description_productos')
    // ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    // ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    // ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    // ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    // ->select('productos.*','description_productos.*','comentarios.comentario','users.nombre')
    // ->where('description_productos.producto_id', '=', $id)
    // ->get();

     $Producto =  DB::table('description_productos')
    ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    ->select('productos.*','description_productos.*','comentarios.comentario','users.nombre',
    'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
    ->where('description_productos.producto_id', '=', $id)
    ->get();

    return $Producto;




   }

   public function SaveComentarios(validateComentarioForm $request){



    $comentario = new comentarios;
    $comentario->producto_id = '1';
    $comentario->usuario_id = '2';
    $comentario->comentario = $request->comentario;
    $comentario->estado ='2';

    $comentario->save();
    return "Guardado";
   }

   }




