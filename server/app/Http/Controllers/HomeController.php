<?php

namespace app\Http\Controllers;
use app\admin;
use app\tipoIdentificacion;
use app\CatalogoColoresProducto;
use app\ciudas;
use app\departamento;
use app\categoria;
use app\marcas;
use app\users;
use app\tipoTarjeta;
use app\producto;
use app\medioPago;
use app\ventas;
use app\Domicilio;
use app\Detalle_Venta;
use app\envio;
use app\recibo;
use app\factura;
use app\transportadora;
use app\despacho;
use app\productosDestacados;

use Illuminate\Http\Request;
use DB;
use \stdClass;
use \toArray;



class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // $Admins = DB::table('admins')->select('nombre as Nombre_Admin')->get();
        // return $Admins;
        // return view('home' , compact(Admins));

        // $identificacion = DB::table('tipo_identificacions')->select('id','identificacion')->get();
        // return $identificacion;

        // $adminJoin =  DB::table('admins')
        //               ->join('tipo_identificacions', 'tipo_identificacions.id', '=', 'admins.tipoIdentificacion_id')
        //               ->select('admins.*', 'tipo_identificacions.id', 'tipo_identificacions.identificacion')
        //               ->get();

        // return $adminJoin;

        //   $adminJoin =  DB::table('clientes')
        //               ->join('users', 'users.id', '=', 'clientes.usuario_id')
        //               ->join('tipo_identificacions', 'tipo_identificacions.id', '=', 'clientes.tipoIdentificacion_id')
        //               ->join('departamentos', 'departamentos.id', '=', 'clientes.departamento_id')
        //               ->join('ciudads', 'ciudads.id', '=', 'clientes.ciudad_id')
        //               ->join('tipo_tarjetas', 'tipo_tarjetas.id', '=', 'clientes.tarjeta_id')
        //               ->select('users.nombre', 'tipo_identificacions.identificacion','departamentos.departamento',
        //                'ciudads.ciudad','tipo_tarjetas.tarjeta')
        //               ->get();
        //     return $adminJoin;

        //  $Admins = DB::table('')->select('*')->get();
        //  return $Admins;

        // $adminJoin =  DB::table('despachos')
        //               ->join('envios', 'envios.id', '=', 'despachos.envio_id')
        //               ->join('transportadoras', 'transportadoras.id', '=', 'despachos.transportadora_id')
        //               ->select('envios.*', 'despachos.*')
        //               ->get();



//         $adminJoin =  DB::table('facturas')
//         ->join('detalle_ventas', 'detalle_ventas.id', '=', 'facturas.detalleVenta_id')
//         ->select('detalle_ventas.*', 'facturas.*')
//         ->get();



          // i get the information form the database
          $catalogos = DB::table('tipo_productos')
          ->select('id','Categoria')
          ->get();

          $marcas = DB::table('marcas')
          ->select('id','tipoProducto_id','Marca')
          ->get();



          //I converted the collection into an array
          $result1 = json_decode($catalogos, true);
          $result2 = json_decode($marcas, true);


           //I created two arrays to store my information
          $categoria = array();
          $array2 = array();



          /*
             I'm using two for loop to itirate the two arrays to store the inforamtion need
          */

            for ($i=0; $i<count($result1); $i++) {

                //I save some information into two variables
                 $id_producto = $result1[$i]['id'];
                 $catalogo   =  $result1[$i]['Categoria'];



                $array2 = [];
                foreach ($result2 as $r) {
                if ($r['tipoProducto_id'] ==  $id_producto) {


                       //i create an array with the information which match with the conduition at the top
                       $array2[] = ['producto_id' => $r['tipoProducto_id'] , 'id' => $r['id'], 'marca' => $r['Marca']];

                   }


                }

                //I store the informatiuon of my array result 1 and create a property where i push the information of the second array
                $categoria[] = ['id' => $id_producto, 'categoria' => $catalogo , 'marca' => $array2];

              }

               //$json = json_decode(json_encode($categoria, true));
               return $categoria;
}


public function getImagenes(){

    $imagenes = DB::table('imagenes')->select('*')->get();
    return $imagenes;


}

public function getMarcas($id){

    $marcas = DB::table('marcas')
            ->join('tipo_productos', 'tipo_productos.id', '=', 'marcas.tipoProducto_id')
            ->select('marcas.id','marca', 'tipo_productos.categoria')
            ->where('tipoProducto_id', '=', $id)
            ->get();
            return $marcas;

}

public function getProductos($id){

    //  $Productos =  DB::table('description_productos')
    //              ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    //              ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    //              ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    //              ->join('catalogo_estilos', 'catalogo_estilos.id', '=', 'description_productos.forma_id')
    //              ->select('productos.*', 'description_productos.*')
    //              ->where('description_productos.id', '=', $id)
    //              ->get();

    //              return $Productos;



                 $Productos =  DB::table('description_productos')
                 ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
                 ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
                 ->select('productos.*','description_productos.*')
                 ->where('marca_id', '=', $id)
                 ->where('color_id', '=', 3)
                 ->get();

                 return $Productos;




                //  $Productos =  DB::table('productos')
                //  ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
                //  ->select('productos.*')
                //  ->where('marca_id', '=', $id)
                //  ->get();

                //  return $Productos;

}

public function productosDestacados(){

    $productoDestacados = DB::table('detalle__ventas')
    ->join('productos', 'productos.id', '=', 'detalle__ventas.Producto_id')
    ->select(DB::raw('count(Producto_id) as valor_repetido,cantidad,productos.imagen,productos.id,productos.producto as nombre'))
    ->groupBy('producto')
    ->orderBy('valor_repetido','desc')
    ->limit(5)
    ->get();

   return  $productoDestacados;

}

public function testimonioVentas(){

    $testimonios =  DB::table('testimonios_ventas')
                    ->join('ventas', 'ventas.id', '=', 'testimonios_ventas.venta_id')
                    ->join('detalle__ventas','detalle__ventas.venta_id', '=' , 'ventas.id')
                    ->join('Productos','Productos.id', '=' , 'detalle__ventas.Producto_id')
                    ->join('testimonios', 'testimonios.id', '=', 'testimonios_ventas.testimonio_id')
                    ->join('clientes', 'clientes.id', '=', 'ventas.cliente_id')
                    ->select('testimonios_ventas.created_at','testimonios.testimonio','clientes.nombre','clientes.apellido','clientes.avatar','productos.imagen')
                    ->get();

                    return  $testimonios;
}

public function imagenesProductos()
{
     $imagenesProductosDestacados = DB::table('producto_imagenes')
                                   ->select('id_producto_imagenes','producto_id','imagen')
                                   ->get();

     return $imagenesProductosDestacados;
}


public function getColorsProducts($id){

     $colores =  DB::table('description_productos')
    ->Join('productos', 'productos.id', '=', 'description_productos.Producto_id')
    ->Join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    ->select('catalogo_colores_productos.color','catalogo_colores_productos.id')
    ->where('description_productos.Producto_id', '=', $id)
    ->distinct()
    ->get();

    return $colores;

}

public function getComentarios(){
    $comentarios =  DB::table('comentarios_productos')
            ->join('users', 'users.id', '=', 'comentarios_productos.usuario_id')
            ->join('clientes', 'clientes.usuario_id', '=', 'users.id')
            ->select('comentarios_productos.*')
            ->orderBy('id','desc')
            ->limit(5)
            ->get();

     return $comentarios;


  }


}
