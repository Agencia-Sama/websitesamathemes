<?php
session_start();

ini_set('display_errors', 1);

error_reporting(E_ALL);
$name = $_POST['name'];
$from = $_POST['email'];
$to = "victorsilvabstronger@gmail.com";
$subject =  "Mensagem enviada temas Samá"; //$_POST['subject'];
$message = $_POST['message'];
$headers = array(
    'From' => $from,
    'Reply-To' => $from,
    'MIME-Version' => '1.0',
    'Content-type' => 'text/html; charset=iso-8859-1',
    'X-Mailer' => 'PHP/' . phpversion()
);

if(mail($to, $subject, $message, $headers)){
    $_SESSION['msg_info'] = "<span class='message__success'>Mensagem enviada com sucesso</span>";
    header('Location: ../index.php#contact');
}else{
    $_SESSION['msg_info'] = "<span class='message__success'>Erro ao enviar email, tente novamente.</span>";
    header('Location: ../index.php#contact');
}

?>