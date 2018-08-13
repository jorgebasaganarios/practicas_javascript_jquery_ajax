$(document).ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#enviar");
  x.click(presionSubmit);
}

function presionSubmit()
{
  //guardamos en v el valor almacenado en la caja de texto
  var v=$("#nro").val();
  
  //1. rutina php que ejecutaremos
  //2. datos que le pasamos
  //3. funcion js que ejecutaremos cuando la llamada ajax haya finalizado
  //          1              2           3
  //MANERA 1 de pasar datos, via parametros {nombre_parametro:valor}
  $.get("pagina1.php",{numero:v},llegadaDatos); 
  
  //MANERA 2 de pasar datos via direccion nombre.php?nombre_par=valor
  //$.get("pagina1.php?numero="+v,llegadaDatos); 
  return false;
}

//Esta es la funcion que ejecutamos cuando ha acabado el ajax. 
//en "datos" tenemos los datos que devuelve el php
function llegadaDatos(datos)
{
  alert(datos);
}
