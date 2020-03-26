<?php
namespace app\Http\Middleware;
use Closure;

class Cors

{
  public function handle($request, Closure $next)
  {



    //   header('Access-Control-Allow-Origin:*');
    //   header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    //   header('Access-Control-Allow-Headers:X-Requested-With,Content-Type,X-Token-Auth, Authorization,Origin');

    header("Access-Control-Allow-Origin:*");
    //header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    header('Access-Control-Allow-Headers: Content-type, X-Auth-Token, Authorization, Origin');

      return $next($request);
  }
}
