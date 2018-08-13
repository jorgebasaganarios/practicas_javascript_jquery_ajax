/*Ejemplo 1

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(presionBoton)
}

function presionBoton()
{
  alert("Se presionó el botón");
}*/

/*EJ hoja 1

addEvent(window,'load',inicializarEventos,false);

function inicializarEventos()
{
  var boton1=document.getElementById('boton1');
  addEvent(p1,'click',presionBoton,false);
}

function presionBoton(e)
{
  alert('se presionó el botón');
}

function addEvent(elemento,nomevento,funcion,captura)
{
  if (elemento.attachEvent)
  {
    elemento.attachEvent('on'+nomevento,funcion);
    return true;
  }
  else  
    if (elemento.addEventListener)
    {
      elemento.addEventListener(nomevento,funcion,captura);
      return true;
    }
    else
      return false;
}*/

/*EJ hoja 2

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#titulo1");
  x.click(presionTitulo1)
  x=$("#titulo2");
  x.click(presionTitulo2)
}

function presionTitulo1()
{
  var x;
  x=$("#titulo1");
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
}

function presionTitulo2()
{
  var x;
  x=$("#titulo2");
  x.css("color","#ffff00");
  x.css("background-color","#ff0000");
  x.css("font-family","Arial");
}*/

/* EJ hoja 3 

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  x=$("td");
  x.click(presionTitulo1)
}

function presionTitulo1()
{
  x=$("td");
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
}*/

/*Ejercicio hoja 4

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  x=$("li");
  x.click(presionTitulo1)
}

function presionTitulo1()
{
  var x;
  x=$(this);
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
 }
 */

/*Ej hoja 5

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  x=$("td");
  x.click(presionTitulo1);
}

function presionTitulo1()
{
  x=$(this);
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
}
*/

/*
//Ej 6

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(zoomFont);
}

function zoomFont()
{
  var x;
  x=$(".news");
  x.css("font-size",10);
}
*/

/*Ej 7

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
 
  x=$("#boton");
  x.click(modificarDatosTabla);
}

function extraerTexto()
{
  var x=$("#parrafo1");
  alert(x.text());
}

function modificarDatosTabla()
{
  var x=$(".tabla1");
  x.text("-");
}

*/

/*Ej 8

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(agregarPropiedadHref1);
  x=$("#boton2");
  x.click(agregarPropiedadHref2);
  x=$("#boton3");
  x.click(agregarPropiedadHref3);
}

function agregarPropiedadHref1()
{
  var x=$("#enlaces");
  x.attr("href","http://www.gastroidea.com");
}

function agregarPropiedadHref2()
{
  var x=$("#enlaces");
  x.attr("href","http://www.facebook.com");
}

function agregarPropiedadHref3()
{
  var x=$("#enlaces");
  x.attr("href","http://www.twitter.com");
}

*/

/*Ej 9

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#boton1");
  x.click(asociarClaseHead);
  x=$("#boton2");
  x.click(desasociarClaseHead);
  var x=$("#boton3");
  x.click(asociarClaseBody);
  x=$("#boton4");
  x.click(desasociarClaseBody);
}

function asociarClaseHead()
{
  var x=$("#cabecera");
  x.addClass("recuadro");
}

function desasociarClaseHead()
{
  var x=$("#cabecera");
  x.removeClass("recuadro");
}

function asociarClaseBody()
{
  var x=$("#cuerpo");
  x.addClass("recuadro");
}

function desasociarClaseBody()
{
  var x=$("#cuerpo");
  x.removeClass("recuadro");
}

*/

/*Ej 10

var x;
x=$(document);
x.ready(inicializarEventos);
function inicializarEventos()
{
  var x;
  x=$("#boton1");
  x.click(presionBoton1);

  x=$("#boton2");
  x.click(presionBoton2);
}

function presionBoton1()
{
  var x;
  x=$("head");
  alert(x.html());
}

function presionBoton2()
{
  var x;
  x=$("body");
  alert(x.html());
}

*/

/*Ej 11

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("p");
  x.click(presionParrafoDocumento);
  x=$("#tabla2 p");
  x.click(presionpresionParrafoSegundaTabla);
}

function presionParrafoDocumento()
{
  alert('se presionó un párrafo del documento');
}

function presionpresionParrafoSegundaTabla()
{
  alert('se presionó un párrafo contenido en la segunda tabla.');
}

*/