
window.onload = function()
{
	//si el boton crea fuera un submit en vez de click pondriamos submit
	 document.getElementById('entrar').addEventListener('click',log, true);
	
}


function log()
{		
			//funcion llama a la conexion la comprueba, llama objeto xmlhttprequest()	
				
				//console.log(resultado);
			var xmlhttp;
			if (window.XMLHttpRequest){
				var xmlhttp = new XMLHttpRequest();
				//console.log("123");

			}else{
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
					
				//funcion para llamar al archivo json 
				xmlhttp.onreadystatechange=comprueba;
				xmlhttp.open('GET', 'http://localhost:8000/ajax_ej6_juanma/login.json', true);
				xmlhttp.send(null);
						



			function comprueba(){
				//alert('aaaa');
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
						//console.log("123");
						var data = JSON.parse(xmlhttp.responseText);
							var usuario = document.login.usuario.value; 
							var password = document.login.password.value;
							//console.log(usuario+password); 
							//console.log(data.nombre);
							for(var i = 0; i < data.length;i++){
							
								if (usuario == data[i].nombre && password == data[i].pwd){ 
								document.cookie="usuario="+data[i].nombre+";";
								window.location ="index.html";
								//este return es para parar el flujo para que entre en index, 
								//el programa iria a login otra vez.
								return usuario;
								}
						 								
							}

							alert('usuario o contraseña incorrectos');
							window.location="login.html";

			
								
							
							

							//if(data.length != cnt){
								
								//document.getElementById('info').innerHTML = ""; //se vacia primero los campos para q no se repita infinito
								//creamos la cabecera una vez sin hacerlo dentro del for
								//document.getElementById('info').innerHTML = '<tr><th>NOMBRE</th><th>APELLIDOS</th><th>VEHICULO</th></tr>'; 
								//en el bucle rellena la tabla con los objetos del archivo json
								//for (var i=0; i< data.length; i++){
								//	var person = data[i];
								//	document.getElementById('info').innerHTML += '<tr><td>' + person.nombre+'</td><td>'+person.apellido +'</td><td>' + person.vehiculo + '</td></tr>';	
							//	}
							//}
							
						

					}

					
		}
}