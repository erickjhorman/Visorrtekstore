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


        $imagenes = DB::table('producto_imagenes')
        ->join('description_productos', 'description_productos.id', '=', 'producto_imagenes.description_product_id')
        ->select('producto_imagenes.id_producto_imagenes','producto_imagenes.imagen','producto_imagenes.description_product_id','description_productos.color_id')
        ->get();

        $Producto =  DB::table('description_productos')
        ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
        ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
        ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
        ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
        ->select('productos.*','description_productos.*',
        'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
        ->where('description_productos.Producto_id', '=', $id)
        ->get();

        $comentarios =  DB::table('comentarios_productos')
            ->join('users', 'users.id', '=', 'comentarios_productos.usuario_id')
            ->join('clientes', 'clientes.usuario_id', '=', 'users.id')
            ->select('comentarios_productos.*','users.nombre','clientes.avatar')
            ->orderBy('id','desc')
            ->get();


         //I converted the collection into an array
         $result1 = json_decode($Producto, true);
         $result2 = json_decode($imagenes, true);
         $result3 =  json_decode($comentarios, true);


          //I created two arrays to store my information
         $productos = array();
         $imagenes = array();
         $comentarios = array();

           /*
             I'm using two for loop to itirate the two arrays to store the inforamtion need
          */

          for ($i=0; $i<count($result1); $i++) {

            //I save some information into two variables
             $id_description_product = $result1[$i]['id'];
             $Producto_id   =  $result1[$i]['Producto_id'];
             $productoName = $result1[$i]['Producto'];
             $estado_producto_id   =  $result1[$i]['estado_producto_id'];
             $color_id   =  $result1[$i]['color_id'];
             $talla_id   =  $result1[$i]['talla_id'];
             $Forma_id   =  $result1[$i]['Forma_id'];
             $caracteristicas   =  $result1[$i]['caracteristicas'];
             $imagen = $result1[$i]['imagen'];
             $Existencia   =  $result1[$i]['Existencia'];
             $Valor_Venta   =  $result1[$i]['Valor_Venta'];
             $valor_min   =  $result1[$i]['ValorMin'];
             $Iva_Porcentaje   =  $result1[$i]['Iva_Porcentaje'];
             $created_at   =  $result1[$i]['created_at'];
             $updated_at   =  $result1[$i]['updated_at'];


            $imagenes = [];
            foreach ($result2 as $r) {
            if ($r['description_product_id'] ==  $id_description_product) {


                   //i create an array with the information which match with the conduition at the top
                   $imagenes[] = ['id_producto_imagenes' => $r['id_producto_imagenes'], 'description_product_id' => $r['description_product_id'], 'color_id' => $r['color_id'],'imagen' => $r['imagen']];

               }
            }

            $comentarios = [];
            foreach($result3 as $r3){
                if ($r3['descriptionProducto_id'] ==  $id_description_product) {

                    $comentarios[] = ['id' => $r3['id'], 'descriptionProducto_id' => $r3['descriptionProducto_id'],'usuario_id' => $r3['usuario_id'],
                                      'color_id' => $color_id ,'comentario' => $r3['comentario'], 'estado' => $r3['estado'],'nombre' => $r3['nombre'],
                                      'avatar' => $r3['avatar'],'created_at' => $r3['created_at'],'updated_at' => $r3['updated_at']];
                }
            }

            //I store the informatiuon of my array result 1 and create a property where i push the information of the second array
            $productos[] = [ 'id_description_product' => $id_description_product, 'producto_name' => $productoName, 'id_producto' => $Producto_id, 'estado_producto_id' => $estado_producto_id,
                            'color_id' => $color_id, 'talla_id' => $talla_id,'Forma_id' => $Forma_id, 'caracteristicas' => $caracteristicas, 'imagen' => $imagen,
                            'Existencia' => $Existencia, 'Valor_Venta' => $Valor_Venta, 'ValorMin' => $valor_min,'Iva_Porcentaje' => $Iva_Porcentaje,
                            'created_at' => $created_at,'updated_at' => $updated_at, 'imagenes' => $imagenes,'comentarios' => $comentarios];

          }

           //$json = json_decode(json_encode($categoria, true));
           return $productos;
    }

     public function getProductImagenesbyColor($id){

          $ima = DB::table('producto_imagenes')
          ->join('description_productos', 'description_productos.products.id', '=', 'producto_imagenes.description_product_id')
          ->select('producto_imagenes.imagen')
          ->where('producto_imagenes.description_product_id', '=', $id)
          ->get();

          return $ima;
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
