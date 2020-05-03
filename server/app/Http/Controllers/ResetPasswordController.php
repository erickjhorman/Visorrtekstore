<?php

namespace app\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use app\User;
use Symfony\Component\HttpFoundation\Response;
use app\Mail\ResetPasswordMail;
use app\Http\Controllers\ResetPasswordController;
use Illuminate\Support\Carbon;


class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request)
    {
       if (!$this->validateEmail($request->email)) {
         return $this->failedResponse();

       }
       $this->send($request->email);
       return $this->successResponse();
      }

public function send($email)
  {
    $token = $this->createToken($email);
    var_dump($token);
    Mail::to($email)->send(new ResetPasswordMail($token));
  }

  public function createToken($email)
  {
         $oldToken = DB::table('password_resets')->where('email', $email)->first();
         //return  $oldToken;
         if($oldToken){
         return $oldToken;
         }
         $token = str_random(60);

         $this->saveToken($token, $email);

         return $token;
  }
    public function saveToken($token,$email){
      DB::table('password_resets')->insert([
        'email' => $email,
        'token' => $token,
        'created_at' => Carbon::now()
      ]);
    }


    public function validateEmail($email)
    {
       return !!User::where('email' , $email)->first();
    }

    public function failedResponse()
    {
      return response()->json(
         'Correo no encontrado en nuestra base de datos'
     , Response::HTTP_NOT_FOUND);

    }

    public function successResponse()
    {
      return response()->json([
         'success' => 'Se ha enviado un correo electronico para restablecer su contraseña '
      ], Response::HTTP_OK);

    }

}
