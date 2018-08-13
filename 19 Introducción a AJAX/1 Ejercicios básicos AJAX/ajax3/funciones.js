$(document).ready(function(){
	$("#enviar").click(presionSubmit);
});


function presionSubmit()
{
  //lo que hay en la caja de texto se lo paso a valor
  var valor=$("#nro").val();
  
  $.ajax({
           async:true,
           type: "POST",
           dataType: "html",
           contentType: "application/x-www-form-urlencoded",
           url:"pagina1.php",
		   
		  // OPCION 1 PASO UN OBJETO
          // data:{numero:valor,otroDato:27},
		  
		  
		  // OPCION 2 PASO UNA CADENA DE TEXTO CON & COMO SEPARADOR
           data:"numero="+valor+"&otroDato=27",
		   
		   
           beforeSend:inicioEnvio,
           success:llegadaDatos,
           timeout:4000,
           error:problemas,
		   //COMPLETE se ejecuta siempre, al finalizar la transaccion. Acabe bien o no
		   complete:function(a,b,c){
				alert('Transaccion AJAX finalizada. Estado '+b+"-----"+c);
		   }
	     }).done(function(){ //SOLO SE EJECUTA SI HA IDO TODO CORRECTAMENTE
			alert("esto es una funcion que se ejecuta cuando acabo");
		 
		 }); 
		 
  return false;
}
function inicioEnvio()
{
  //SE EJECUTA EN EL MOMENTO DE LA LLAMADA AJAX
  //PONGO LA RUEDECITA A GIRAR
  $("#resultados").html('<img src="cargando.gif">');
}
function llegadaDatos(P)
{
  //SI LOS DATOS HAN LLEGADO A TIEMPO (ANTES DEL timeout)
  //HAGO LO QUE QUIERA CON LOS DATOS PORQUE TENGO ACCESO A ELLOS
  $("#resultados").text(P);
}

function problemas(a,b,c)
{
  $("#resultados").text('Problemas en el servidor. Error de tipo'+b+' Aclaracion del error:'+c);
}
