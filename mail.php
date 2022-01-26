<?php 

if($_POST){

    $name = "";

    $email = "";

    $message = "";
    
    $email_body = "<div>";

    
    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Nombre del cliente:</b></label>&nbsp;<span>".$name."</span>
                        </div>";
    }
    
    if(isset($_POST['email'])){
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = $email;
        $email_body .="<div>
                           <label><b>Email del cliente:</b></label>&nbsp;<span>".$email."</span>
                        </div>";
    }
    
    if(isset($_POST['message'])){
        $message = htmlspecialchars($_POST['message']);
        $email_body .= "<div>
                           <label><b>Mensaje:</b></label>
                           <div>".$message."</div>
                        </div>";
    }
    
    $subject = "$name contacta via pagina web a Hondashi Sushi";
    
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    if(empty($name)||empty($email)||empty($message)){
     echo $email;
    }else{
        $recipient = "crislenin2506@gmail.com";
        if(mail($recipient, $subject, $email_body, $headers))
        echo'<script type="text/javascript">
    alert("Enviado correctamente");
    window.location.href="https://hondashisushi.com/Contactenos.html";
    </script>';
       //header("Location: https://hondashisushi.com/index.html");
    }

}
//crislenin2506@gmail.com

?>