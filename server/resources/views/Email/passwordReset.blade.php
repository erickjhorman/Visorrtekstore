@component('mail::message')



    Saludos, Querido <br>
      {{ $nombre }}

# Cambiar tu contraseña

Dale click a este boton para restablecer la contraseña

 @component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
 Restablecer contraseña



@endcomponent

Muchas gracias,<br>

{{ config('app.name') }}
@endcomponent
