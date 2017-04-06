  <?php

    $conexion = mysql_connect("dbug2016.db.9369408.hostedresource.com", "dbug2016", "Ug#02016");
    mysql_select_db("dbug2016", $conexion);
    
   if(isset($_POST['nombre'])){
      $insertar = "INSERT INTO  registros (nombres, email, facultad, cedula) 
          VALUES ('".$_POST['nombre']."', '".$_POST['mail']."', '".$_POST['facultad']."', '".$_POST['cedula']."')";
      mysql_query($insertar,$conexion);   
     }
    $prods=array();
    $prods[]=array('respuesta'=>'true');
    //echo json_encode($prods);
  ?>