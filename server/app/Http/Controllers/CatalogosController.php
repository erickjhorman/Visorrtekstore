<?php

namespace app\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class CatalogosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showCatalogos($id)
    {
        $Producto =  DB::table('description_productos')
        ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
        ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
        ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
        ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
        ->select('productos.*','description_productos.*',
        'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
        ->where('description_productos.Producto_id', '=', $id)
        ->get();

        return $Producto;
    }

    // public function showCatalogos($id)
    // {
    //     $Producto =  DB::table('description_productos')
    //     ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    //     ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    //     ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    //     ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    //     ->select('productos.*','description_productos.*',
    //     'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
    //     ->where('description_productos.Producto_id', '=', $id)
    //     ->where('color_id', '=', 3)
    //     ->get();

    //     return $Producto;
    // }


}
