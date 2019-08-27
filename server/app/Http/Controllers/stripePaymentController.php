<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Stripe;
use Stripe\Charge;
use app\model\Detalle_Venta;
use app\model\Venta;
use DB;

class stripePaymentController extends Controller
{

    public function saveToken(Request $request)
    {


    Stripe\Stripe::setApiKey('sk_test_pgKB4yy4Tugr2oPpXwePQTTo00aYwgWTtp');

    $input = $request->all();
    //return $request;

   for ($i=0; $i<count($input) ; $i++) {
        $name = $input[0]['name'];
        $token = $input[0]['tokenCard'];
        $email = $input[0]['email'];
        $amount =  $input[0]['amount'];
        $clienteId = $input[0]['clienteId'];
        $domicilioId = $input[0]['domicilioId'];

    }



    // foreach ($input as  $value) {
    //     $name = $value['name'];
    //     $token = $value['tokenCard'];
    //     $email = $value['email'];
    //     $amount =  $value['amount'];
    //     $clienteId = $value['clienteId'];
    //     $domicilioId = $value['domicilioId'];

    // }




    //this.createCustomer($email,$token);
    $customer = \Stripe\Customer::create(array(
        "name" => $name,
        "email" => $email,
        "source" => $token,

      ));

      //Stripe\Stripe::setApiKey(env('pk_test_l7iYANEOx13w718rnvfY7wed00HkXGcBvC'));
      //Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

     $charge =  Stripe\Charge::create(array(

              "amount" => $amount * 100,
              "currency" => "COP",
              "description" => "Compras de cascos desde VisorTek.com",
              "customer" => $customer->id

          ));

           //return $charge;

          $venta = new Venta(); /** Se hace una instancia del modelo solicitante*/

          $venta->cliente_id  = $clienteId;
          $venta->domicilio_id =  $domicilioId;
          $venta->forma_pago_id = "Efectivo";
          $venta->valor_neto =  $charge->amount/10;
          $venta->valor_iva = '';
          $venta->valor_a_pagar = $charge->amount/100;

          $venta->save();

          //$ventaId = DB::table('ventas')->select('id')->get();
        $ventaId =  DB::select('select id from ventas where id =(SELECT max(id) FROM ventas)');

        foreach ($ventaId as  $value) {
            $idVenta = $value->id;
        }


         //To get the purchases of the array

            for ($i=0; $i<count($input[3]) ; $i++) {


                $id = $input[3][$i]['id'];
                $producto = $input[3][$i]['producto'];
                $cantidad = $input[3][$i]['cantidad'];
                $valorventa =  $input[3][$i]['valorventa'];

                $dt = new Detalle_Venta();
                $dt->venta_id = $idVenta;
                $dt->Producto_id = $id;
                $dt->nombre = $producto;
                $dt->Cantidad = $cantidad;
                $dt->Valor_Neto = $valorventa;

                $dt->save();
            }








        //To get the purchases of the array

            // for ($i=0; $i<count($input) ; $i++) {
            //     $id = $input[3][0]['id'];
            //     $producto = $input[3][0]['producto'];
            //     $cantidad = $input[3][0]['cantidad'];
            //     $valorventa =  $input[3][0]['valorventa'];
            // }

            //     $dt = new Detalle_Venta();
            //     $dt->venta_id = $idVenta;
            //     $dt->Producto_id = $id;
            //     $dt->nombre = $producto;
            //     $dt->Cantidad = $cantidad;
            //     $dt->Valor_Neto = $valorventa;

            //     $dt->save();









}



// public function createCustomer($token,$email,$amount){
//     $customer = \Stripe\Customer::create(array(
//     "email" => $email,
//     "source" => $token

//   ));

//   saveChargeCustomer($token,$amount,$customer);
// }


// public function saveChargeCustomer($token,$amount,$customer){
//     Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

//         Stripe\Charge::create(array(

//                 "amount" => $amount,
//                 "currency" => "COP",
//                 "source" => $token,
//                 "description" => "Test payment from itsolutionstuff.com.",
//                 "customer" => $customer->id

//             ));
//             return charge;
//         }


}
