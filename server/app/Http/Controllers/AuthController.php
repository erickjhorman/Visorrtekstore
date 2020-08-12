<?php

namespace app\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use app\Http\Controllers\Controller;
use app\User;
use app\model\Cliente;



//use app\Http\Controllers\User;
use app\Http\Requests\SignRequest;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email o password'], 401);
        }

        return $this->respondWithToken($token);
    }





    public function signup(SignRequest $request)
    {
       User::create($request->all());

       //I get the id of the use to save it in the cliente table
       $arrayUserId = DB::select('select id from Users
       where id =(SELECT max(id) FROM Users)');

         //Foreach para convertir consulta en integer
         foreach ($arrayUserId as  $value) {
            $User_get = $value->id;
        }
        //  $User_get = DB::table('Users')
        //  ->select('id', DB::raw('MAX(created_at)'))->get()
        //  ->where('id', $user->id;

        //  $User_get = DB::table('Users')->select('id')
        //  ->where('id','=','id')
        //  ->max('id');
        $cliente = new Cliente();  /** Se hace una instancia del modelo solicitante*/
        $cliente->usuario_id = $User_get;
        $cliente->save();

       return $this->login($request);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Seccion satisfactoriamente cerrada']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */

     protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'id' => auth()->user()->id,
            'user' => auth()->user()->user,
            'email' => auth()->user()->email,
            'nombre' => auth()->user()->nombre,
            'created_at' => auth()->user()->created_at,
        ]);

        //Here i get the information from the backend using an API
    }
    }
