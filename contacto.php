<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $company = htmlspecialchars($_POST["company"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "contacto@integra.com.ar"; // tu correo
  $subject = "Nuevo mensaje desde el sitio web";
  $body = "Nombre: $name\nEmail: $email\nEmpresa: $company\n\nMensaje:\n$message";
  $headers = "From: no-reply@integra.com.ar\r\nReply-To: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>