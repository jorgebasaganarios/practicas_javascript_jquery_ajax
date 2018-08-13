
addEventListener('load',inicializarEventos,false);


function inicializarEventos()
  { 
 
var c = getCookie();
document.getElementById('ck').innerHTML = "Bienvenido " + c + ".. conoce tu horóscopo.";
 
for(var f=1;f<=12;f++)
{
     
  var ob=document.getElementById('enlace'+f);
  ob.addEventListener('click',presionEnlace,false);

  }
}

function presionEnlace(e)
{
    
    e.preventDefault();
    var url=e.target.getAttribute('href');
    var a=e.target.getAttribute('name');
    document.getElementById('fondo').src = a;
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

//funcion para recorrer la cookie y rescatar el valor de de la propiedad "usuario"
function getCookie(){
 
var miCuki = document.cookie;
var lista = miCuki.split(";");
for(var i in lista){
  var busca = lista[i].search("usuario");
  if(busca > -1){miCuki=lista[i]}
 }
var igual = miCuki.indexOf("=");
var valor = miCuki.substring(igual+1);
return valor;
}

