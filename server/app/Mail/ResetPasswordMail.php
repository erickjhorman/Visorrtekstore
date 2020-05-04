<?php

namespace app\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use app\Http\Controllers\ResetPasswordController;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    // Variable to send to the email blade component
    public $token;
    public $user;
    public $subject = '';

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token,$user)
    {

    $this->token = $token->token;
    $this->nombre = $user->nombre;

    //    var_dump($token);
    //    var_dump($user);
    //    var_dump($this->token);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Email.passwordReset')
                     ->from('visortek.cali@gmail.com')
                     ->subject('Recuperar contraseña desde visortek')
                     ->with([
                     'token' => $this->token,
                     'nombre' => $this->nombre
        ]);
        //  return $this->markdown('Email.passwordReset')->with(['token' => $this->token

        //  ]);


    }
}
