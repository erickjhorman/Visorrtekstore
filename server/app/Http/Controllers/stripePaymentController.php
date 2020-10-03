<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use app\http\Requests\StripePaymentRequest;
use Stripe;
use Stripe\Charge;
use app\model\Detalle_Venta;
use app\model\Venta;
use DB;

class StripePaymentController extends Controller
{

    public function saveToken(Request $request)
    {
       Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

       $data =  $request->all();

       if(empty($data)) {

        for ($i = 0; $i < count($data); $i++) {
            $name = $data[0]['name'];
            $token = $data[0]['tokenCard'];
            $email = $data[0]['email'];
            $amount =  $data[0]['amount'];
            $clienteId = $data[0]['clienteId'];
            $domicilioId = $data[0]['domicilioId'];
        }

            $customer = \Stripe\Customer::create(array(
                "name" => $name,
                "email" => $email,
                "source" => $token,

            ));

            $charge =  Stripe\Charge::create(array(
                "amount" => $amount * 100,
                "currency" => "COP",
                "description" => "Compras de cascos desde VisorTek.com",
                "customer" => $customer->id

            ));

             /*  To insert the purchases into database */
            $idLastPurchase = DB::table('ventas')->insertGetId(
                ['cliente_id' => $clienteId , 'domicilio_id' => $domicilioId,
                'Forma_Pago_id' => 'Tarjeta de credito', 'valor_neto' => $charge->amount / 10,
                'valor_iva' => 0, 'valor_a_pagar' => $charge->amount / 100]
            );

            // For testing

            // $venta = new Venta();
            // /** Se hace una instancia del modelo solicitante*/

            // $venta->cliente_id  = $clienteId;
            // $venta->domicilio_id =  $domicilioId;
            // $venta->forma_pago_id = "Tarjeta de credito";
            // $venta->valor_neto =  $charge->amount / 10;
            // $venta->valor_iva = '';
            // $venta->valor_a_pagar = $charge->amount / 100;

            // $venta->save();

            //To get the purchases of the array from my shopping kart

            for ($i = 0; $i < count($data[3]); $i++) {

                $id = $data[3][$i]['id'];
                $producto = $data[3][$i]['producto_name'];
                $cantidad = $data[3][$i]['cantidad'];
                $valorventa =  $data[3][$i]['valorVenta'];

                $dt = new Detalle_Venta();
                $dt->venta_id = $idLastPurchase;
                $dt->Producto_id = $id;
                $dt->nombre = $producto;
                $dt->Cantidad = $cantidad;
                $dt->Valor_Neto = $valorventa;

                $dt->saveOrFail();
            }
         return $charge;

       } else {

         return response()->json(['message' => 'Request Null']);
       }



        }

    public function getCompras($id)
    {
        $compras =   DB::table('ventas')
            ->join('detalle__ventas', 'detalle__ventas.venta_id', '=', 'ventas.id')
            ->join('productos', 'productos.id', '=', 'detalle__ventas.Producto_id')
            ->select(
                'ventas.id as venta_id',
                'detalle__ventas.Producto_id',
                'detalle__ventas.nombre',
                'detalle__ventas.cantidad',
                'detalle__ventas.Valor_Neto',
                'detalle__ventas.created_at',
                'ventas.Cliente_id',
                'productos.imagen'
            )
            ->where('ventas.Cliente_id', '=', $id)
            ->get();

        return  $compras;
    }

}
