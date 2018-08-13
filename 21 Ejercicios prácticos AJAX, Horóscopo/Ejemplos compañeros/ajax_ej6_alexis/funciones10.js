var x;
x=$(document);
x.ready();
var data;
function getDatos(){	
	peticion_http = new XMLHttpRequest();
	peticion_http.onreadystatechange = getFichero;
	function getFichero(){
		var user;
		var password;
		user=document.getElementById('user');
		password=document.getElementById('password');
		if(peticion_http.readyState == 4 && peticion_http.status == 200){
			data = JSON.parse(peticion_http.responseText);
			var correcto = false;
			for(var i=0; i< data.length; i++){
				if(user.value==data[i].usuario && password.value==data[i].contraseña){
					var correcto = true;
				}
			}
			if(correcto == true){
				alert('Logeado correctamente.');
				var fecha = new Date();
				texto = document.getElementById("mensaje");
				formulario = document.getElementById("formulario");
				enlaces = document.getElementById("menu");
				detalles = document.getElementById("detalles");
				formulario.innerHTML="";
				texto.innerHTML="<p2>Bienvenido " + user.value + "! <br> Fecha: " + fecha.getDate() + "/" + 
				(fecha.getMonth() +1) + "/" + fecha.getFullYear()+ "</p2>";
				enlaces.innerHTML="<p><a id='enlace1' href='pagina1.php?cod=1'>Aries</a></p>" + 
				"<p><a id='enlace2' href='pagina1.php?cod=2'>Tauro</a></p>" +
    			"<p><a id='enlace3' href='pagina1.php?cod=3'>Geminis</a></p>" + 
    			"<p><a id='enlace4' href='pagina1.php?cod=4'>Cancer</a></p>" + 
    			"<p><a id='enlace5' href='pagina1.php?cod=5'>Leo</a></p>" + 
    			"<p><a id='enlace6' href='pagina1.php?cod=6'>Virgo</a></p>" + 
    			"<p><a id='enlace7' href='pagina1.php?cod=7'>Libra</a></p>" + 
    			"<p><a id='enlace8' href='pagina1.php?cod=8'>Escorpio</a></p>" + 
    			"<p><a id='enlace9' href='pagina1.php?cod=9'>Sagitario</a></p>" + 
    			"<p><a id='enlace10' href='pagina1.php?cod=10'>Capricornio</a></p>" + 
    			"<p><a id='enlace11' href='pagina1.php?cod=11'>Acuario</a></p>" + 
    			"<p><a id='enlace12' href='pagina1.php?cod=12'>Piscis</a></p>";
    			detalles.innerHTML="Seleccione su signo";
    			for(var f=1;f<=12;f++)
    			{
    				var ob=$("#enlace" + f);
    				ob.click(presionEnlace);
    			}
    			function presionEnlace(e)
				{
    				e.preventDefault();
    				var url=e.target.getAttribute('href');
    				var img=e.target.getAttribute('id');
    				var divimg=document.getElementById("imagen");
    				divimg.innerHTML="<img src='"+img+".jpg'>";
    				cargarHoroscopo(url); 
				}
    			var conexion1;
				function cargarHoroscopo(url) 
				{
 					conexion1=new XMLHttpRequest();  
  					conexion1.onreadystatechange = procesarEventos;
  					conexion1.open("GET", url, true);
  					conexion1.send();
				}
				function procesarEventos()
				{
  					var detalles = document.getElementById("detalles");
  					if(conexion1.readyState == 4)
  					{
    					detalles.innerHTML = conexion1.responseText;
  					}	 
  					else 
  					{
    					detalles.innerHTML = 'Cargando...';
  					}
				}
			}
			else{
				alert('Usuario o contraseña incorrectos.');
			}
		}
	}
	peticion_http.open("GET","datos.json",true)
	peticion_http.send();
}
