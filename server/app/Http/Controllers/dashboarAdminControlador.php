<?php

namespace app\Http\Controllers;
use app\model\Venta;
use DB;
use Illuminate\Http\Request;



class dashboarAdminControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$ventas = Venta::all();

        $ventas = DB::table('ventas')
        ->join('detalle__ventas', 'detalle__ventas.venta_id', '=', 'ventas.id')
        ->join('productos', 'productos.id', '=', 'detalle__ventas.Producto_id')
        ->select('detalle__ventas.Producto_id','detalle__ventas.nombre' , 'detalle__ventas.cantidad',
        'detalle__ventas.Valor_Neto','detalle__ventas.created_at','ventas.Cliente_id','productos.imagen')
        ->get();


        return $ventas;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
