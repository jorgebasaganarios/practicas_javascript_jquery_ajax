addEventListener('load',inicializarEventos,false);

function inicializarEventos()
{
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
    cargarHoroscopo(url);    
}

var conexion1;
function cargarHoroscopo(url)
{
  var numPos, route;
  if(url.length == 17){
      numPos = url.charAt((16));
      route='images/'+numPos+'.jpg';
      document.getElementById('sideimage').src = route;
  }else{
      numPos = url.charAt((16)) + url.charAt((17));
      route='images/'+numPos+'.jpg';
      document.getElementById('sideimage').src = route;
  }

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