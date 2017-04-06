<?php
	$mensaje = "\nDe: " .$_POST['name'];
	$mensaje.= "\nMóvil: ".$_POST['movil'];
	$mensaje.= "\nE-mail: ".$_POST['email'];
	$mensaje.= "\nMensaje: " .$_POST['message'];	
	
	//$mensaje.= "\n--------------------------\n";
	//nuestro correo
	$destino= "relaciones_publicas@ug.edu.ec";
	$remitente = $_POST['email'];
	$asunto = "Plan Excelencia Universitaria: ".$_POST['name'];
	mail($destino,$asunto,$mensaje,"FROM: $remitente");
	//El mensaje que se mostrará al confirmar el envío
	echo "Mensaje enviado. Gracias por contactarse.";