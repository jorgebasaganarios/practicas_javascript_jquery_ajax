var x;
x=$(document);
x.ready();
var i;
var dato;
var data;
var data2;
var dato2;
var post;
var crea;
var salir;
var add;


function getData(){	
	
	peticion_http = new XMLHttpRequest();
	peticion_http.onreadystatechange = getFichero;
	function getFichero(){
		
		var capturaNom;
		var user;
		var password;
		user=document.getElementById('user');
		password=document.getElementById('password');
		
		if(peticion_http.readyState == 4 && peticion_http.status == 200)
		{
			data = JSON.parse(peticion_http.responseText);
			
			dato = JSON.parse(localStorage.getItem("datos"));
			if(dato == null)
			{
			data = data;
			}
			else
			{
				data = dato;
			}
			
			var correcto = false;
			
			for(var i=0; i< data.length; i++)
			{
				if(user.value==data[i].nombre && password.value==data[i].pwd){
					var correcto = true;
					capturaNom=data[i].nombre;
				}
			}
			
			if(correcto == true)	

			{	
				swal("Bien hecho!", "Te has logueado como " + capturaNom, "success");
				salir = document.getElementById('salir');
				crea = document.getElementById('creaComent');
				post = document.getElementById('comentari');
				formularioPas = document.getElementById('login');
				header = document.getElementById('cabecera');
				add = document.getElementById('createUser');
				
				header.innerHTML="";
				formularioPas.innerHTML="";
				add.innerHTML="";
				salir.innerHTML="";



				peticion_http2 = new XMLHttpRequest();
				
				peticion_http2.onreadystatechange = getOptions;
				
				peticion_http2.open("GET","coments.json",true);
				peticion_http2.send();
												
				
				
				function getOptions(){

					if(peticion_http2.readyState == 4 && peticion_http2.status == 200)
					{
						dato2 = JSON.parse(localStorage.getItem('datos2'));
						data2 = JSON.parse(peticion_http2.responseText);
						
						if(dato2 == null)
						{
							data2 = data2;
						}
						else
						{
							data2 = dato2;
						}
									
					header.innerHTML= capturaNom;
						
						
						if(capturaNom == "admin")
						{
							
								
							add.innerHTML ="<br><br><form><div class='form-group'><h4>CREA UN USUARIO NUEVO</h4><input type='text' class='form-control' id='name' aria-describedby='emailHelp' placeholder='introduce nuevo nombre usuario'></div><div class='form-group'><input type='password' class='form-control' id='pass' placeholder='introduce password'><hr><input type='button' onclick='nuevo(data)' value='CREA NUEVO' class='btn btn-info btn-block'></input></div><br>";
							creaComent.innerHTML="<div class='form-group'><label for='comment'>NUEVO COMENTARIO</label><textarea class='form-control' rows='5' id='anade'></textarea><br><input type='button' class='btn btn-info btn-sm btn-block' onclick='envia(data2)' value='ENVIAR'></input></div><br>"
							salir.innerHTML ="<input type='button' onclick='getChange()' value='SALIR' class='btn btn-dark btn-lg btn-block'></button>"
							post.innerHTML = '<tr><th>COMENTARIO</th><th>LIKES</th><th>UNLIKE</th></tr>';
							
							for(i = 0; i < data2.length; i++)
							{
								post.innerHTML += '<tr><td>' + data2[i].texto + '</td><td>'+ data2[i].like + '</td><td>' + data2[i].unlike +'</td>'
								+ "<td><input type='button' id='like' onclick='megusta("+i+")' class='btn btn-success' value='LIKE'></td>" + 
								"<td><input type='button' id='unlike' onclick='nomegusta("+i+")' class='btn btn-danger' value='UNLIKE'></td></tr>";
							}
						}
						
							
						
									
						else if(capturaNom == "moderador")
						{	
							
							salir.innerHTML ="<br><br><input type='button' onclick='getChange()' value='SALIR' class='btn btn-dark btn-lg btn-block'></button>"
							post.innerHTML = '<tr><th>COMENTARIO</th></tr>';
							for(i = 0; i < data2.length; i++)
							{
								post.innerHTML += '<tr><td>' + data2[i].texto + "</td></tr><br><input type='button' onclick='elimina("+i+")' value='BORRA COMENTARIO' class='btn btn-info btn-block'></input><br>";							

							}
							
						}	
							

						else
						{	
							
							salir.innerHTML ="<br><br><input type='button' onclick='getChange()' value='SALIR' class='btn btn-dark btn-lg btn-block'></button>"
							post.innerHTML = '<tr><th>COMENTARIO</th><th>LIKES</th><th>UNLIKE</th></tr>';
							for(i = 0; i < data2.length; i++)
							{
								//console.log(data2);
								post.innerHTML += '<tr><td>' + data2[i].texto + '</td><td>'+ data2[i].like + '</td><td>' + data2[i].unlike +'</td>'
								+ "<td><input type='button' id='like' onclick='megusta("+i+")' class='btn btn-success' value='LIKE' id='like'></td>" + 
								"<td><input type='button' id='unlike' onclick='nomegusta("+i+")' class='btn btn-danger' value='UNLIKE'></td></tr><br>";
										
							}
							
						
						}
						
					}
				

					

				}
			}else{

			swal("Nombre o contraseña incorrectos!", "...vuelve a intentarlo!");
		}}
		

	}

	
	peticion_http.open("GET","users.json",true);
	peticion_http.send();

}
	 

 function getChange(){
 	
	swal("Ha salido de la aplicación.", "Vuelva a entrar con el formulario de login.");
	crea = document.getElementById('creaComent');
	user = document.getElementById('createUser');
	post = document.getElementById('comentari');
	formularioPas = document.getElementById('login');
	header = document.getElementById('cabecera');
	comentario = document.getElementById('comentari');
	add = document.getElementById('form1');
	salir.innerHTML="";
	crea.innerHTML = "";
	post.innerHTML = "";
	header.innerHTML ="";
	comentario.innerHTML="";
	user.innerHTML="";
	formularioPas.innerHTML="<div class='form-group'><label for='exampleInputEmail1'>Name</label><input name='usuario' type='text' class='form-control' size='100' id='user' aria-describedby='emailHelp' placeholder='Introduce tu nombre de usuario'></div><div class='form-group'><label for='exampleInputPassword1'>Password</label><input name='password' type='password' class='form-control' id='password' placeholder='Introduce la contraseña'><br><input type='button'  id='entrar' class='btn btn-info btn-lg btn-block' onclick='getData()' value='Entrar'></div>";
	
}

function nuevo(a)
{	

	var obj = new Object();
	obj.nombre = document.getElementById('name').value;
	obj.pwd = document.getElementById('pass').value;
	a.push(obj);
	document.getElementById('name').value = "";
	document.getElementById('pass').value ="";	
	if (typeof(Storage) != "undefined") {
    	localStorage.setItem("datos", JSON.stringify(a));
	}
	swal("Usuario creado!", "se creó el usuarios " + obj.nombre, "success");
	//console.log(a);
}

function envia(data2)
{

	var obj = new Object();
	var nuevoCom = document.getElementById('anade').value;
	 obj.texto = nuevoCom;
	 obj.like = 0;
	 obj.unlike = 0;
	data2.push(obj);
	nuevoCom = "";
	post.innerHTML="";
	post.innerHTML = '<tr><th>COMENTARIO</th><th>LIKES</th><th>UNLIKE</th></tr>';
	 for(i = 0; i < data2.length; i++)
	{
	post.innerHTML += '<tr><td>' + data2[i].texto + '</td><td>'+ data2[i].like + '</td><td>' + data2[i].unlike +'</td>'
		+ "<td><input type='button' id='like' onclick='megusta("+i+")' class='btn btn-success' value='LIKE' id='like'></td>" + 
		"<td><input type='button' id='unlike' onclick='nomegusta("+i+")' class='btn btn-outline-danger' value='UNLIKE'></td></tr><br>";
	}	
	if (typeof(Storage) != "undefined") {
    	localStorage.setItem("datos2", JSON.stringify(data2));
	}
}


function megusta(d)
{	

	 data2[d].like++;
	 post.innerHTML = "";
	 post.innerHTML = '<tr><th>COMENTARIO</th><th>LIKES</th><th>UNLIKE</th></tr>';
	 for(i = 0; i < data2.length; i++)
	{
	post.innerHTML += '<tr><td>' + data2[i].texto + '</td><td>'+ data2[i].like + '</td><td>' + data2[i].unlike +'</td>'
		+ "<td><input type='button' id='like' onclick='megusta("+i+")' class='btn btn-success' value='LIKE' id='like'></td>" + 
		"<td><input type='button' id='unlike' onclick='nomegusta("+i+")' class='btn btn-outline-danger' value='UNLIKE'></td></tr><br>";
	}	
	if (typeof(Storage) != "undefined") {
    	localStorage.setItem("datos2", JSON.stringify(data2));
	}
}

function nomegusta(d)
{	

	data2[d].unlike++;
	//alert(data2[d].unlike);
	post.innerHTML = "";
	post.innerHTML = '<tr><th>COMENTARIO</th><th>LIKES</th><th>UNLIKE</th></tr>';

	for(i = 0; i < data2.length; i++)
	{
	post.innerHTML += '<tr><td>' + data2[i].texto + '</td><td>'+ data2[i].like + '</td><td>' + data2[i].unlike +'</td>'
	+ "<td><input type='button' id='like' onclick='megusta("+i+")' class='btn btn-success' value='LIKE' id='like'></td>" + 
	"<td><input type='button' id='unlike' onclick='nomegusta("+i+")' class='btn btn-outline-danger' value='UNLIKE'></td></tr><br>";
	}
	if (typeof(Storage) != "undefined") {
    	localStorage.setItem("datos2", JSON.stringify(data2));
	}
}

function elimina(d)
{
	
	swal({
  	title: "Estas seguro?",
  	text: "Si elimina el comentario desaparecerá para siempre...",
  	icon: "warning",
  	buttons: true,
  	dangerMode: true,
	})
	.then((willDelete) => {
  if (willDelete) {
    swal("Hecho! El comentario ha sido borrado", {
      icon: "success",

    });
    data2.splice(d, 1);
	post.innerHTML= "";
	post.innerHTML = '<tr><th>COMENTARIO</th></tr>';
    for(i = 0; i < data2.length; i++)
	{
		post.innerHTML += '<tr><td>' + data2[i].texto + "</td></tr><br><input type='button' onclick='elimina("+i+")' value='BORRA COMENTARIO' class='btn btn-info btn-block'></input><br>";							
	}
	if (typeof(Storage) != "undefined") {
    	localStorage.setItem("datos2", JSON.stringify(data2));
	}
  	} else {
    swal("Su comentario no se ha borrado!");
  }
});

	
}