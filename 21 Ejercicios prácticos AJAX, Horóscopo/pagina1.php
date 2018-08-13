<?php
$acces = True;
if ($_REQUEST['nombre'] == "" || $_REQUEST['contrasenya'] == ""){
  echo "Introduzca el nombre y la contraseña.";
  echo " <a href='index.html'>Volver al Login</a>";
}
else
{
      $str = file_get_contents('datos.json');      
      $json = json_decode($str, true);      
      for($i = 0; $i < sizeof($json); $i++) {
        if ($_REQUEST['nombre']==$json[$i]['nombre']){
          if ($_REQUEST['contrasenya']==$json[$i]['contrasenya']){
              $_SESSION['nombre'] = $json[$i]['nombre'];
              $_SESSION['fecha'] = $json[$i]['fecha'];
              $acces = False;
              //$valor = $json[$i]['nombre'];
              //header("Location: newpage.php?nombre=".$valor);
              //echo $json[$i]["nombre"] . " " . $json[$i]["fecha"];

              echo "<!DOCTYPE html>";
              echo "<html lang='es'>";

              echo "<head>";
              echo "<meta charset='utf-8'>";
              echo "<title>AJAX - JSON Array</title>";
              echo "<script type='text/javascript' src='funciones.js'></script>";
              echo "<link href='estilos.css' rel='StyleSheet' type='text/css'>";
              echo "</head>";
              
              echo "<body>";
              
              echo "<div id='principal'>";
              echo "Bienvenido " . $_SESSION['nombre'] . "! [ <a href='index.html'>Salir</a> ]";
              echo "<br>";
              echo "Fecha de alta: " . $_SESSION['fecha'];

              echo "<h1>Signos del hor&#xF3;scopo.</h1>";
              echo "<div id='menu'>";
              echo "<p><a id='enlace1' href='pagina2.php?cod=1'>Aries</a></p>";
              echo "<p><a id='enlace2' href='pagina2.php?cod=2'>Tauro</a></p>";
              echo "<p><a id='enlace3' href='pagina2.php?cod=3'>Geminis</a></p>";
              echo "<p><a id='enlace4' href='pagina2.php?cod=4'>Cancer</a></p>";
              echo "<p><a id='enlace5' href='pagina2.php?cod=5'>Leo</a></p>";
              echo "<p><a id='enlace6' href='pagina2.php?cod=6'>Virgo</a></p>";
              echo "<p><a id='enlace7' href='pagina2.php?cod=7'>Libra</a></p>";
              echo "<p><a id='enlace8' href='pagina2.php?cod=8'>Escorpio</a></p>";
              echo "<p><a id='enlace9' href='pagina2.php?cod=9'>Sagitario</a></p>";
              echo "<p><a id='enlace10' href='pagina2.php?cod=10'>Capricornio</a></p>";
              echo "<p><a id='enlace11' href='pagina2.php?cod=11'>Acuario</a></p>";
              echo "<p><a id='enlace12' href='pagina2.php?cod=12'>Piscis</a></p>";
              echo "</div>";

              echo "<div>";
              echo "<img id='sideimage' src='images/vacio.jpg'>";
              echo "</div>";

              echo "<div id='detalles'>Seleccione su signo";
              echo "</div>";

              echo "</div>";

              echo "</body>";
              echo "</html>";
          }
        }else{
          if(($i == (sizeof($json)-1)) && $acces == True){
            echo "Introduzca el nombre y la contraseña.";
            echo " <a href='index.html'>Volver al Login</a>";
          }
        }
      }
}
?>