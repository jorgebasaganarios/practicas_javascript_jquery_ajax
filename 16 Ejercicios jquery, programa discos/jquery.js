window.onload = iniciar;
var valor = "";
var valorTag = "";
function iniciar(){
  document.getElementById("boton1").addEventListener('click',validarNombre,false);
  document.getElementById("boton1").addEventListener('click',validarGrupo,false);
  document.getElementById("boton1").addEventListener('click',validarAny,false);
  document.getElementById("boton1").addEventListener('click',validarLoc,false);
}

function validarNombre() {
  valor = document.getElementById("label1");
  valorTag = document.getElementById("label1-");
  if(valor.value.length == 0 || valor.value.length>20){
    alert("NOMBRE: El campo no puede estar vacío ni puede ser mayor que 20 caracteres.");
    asociarClase(valor.id);
    asociarClaseTag(valorTag.id);
    return false;
  }
  desAsociarClase(valor.id);
  desAsociarClaseTag(valorTag.id);
  return true;
}

function validarGrupo() {
  valor = document.getElementById("label2");
  valorTag = document.getElementById("label2-");
  if(valor.value.length == 0 || valor.value.length>20){
    alert("GRUPO: El campo no puede estar vacío ni puede ser mayor que 20 caracteres.");
    asociarClase(valor.id);
    asociarClaseTag(valorTag.id);
    return false;
  }
  desAsociarClase(valor.id);
  desAsociarClaseTag(valorTag.id);
  return true;
}

function validarAny() {
  var valorAny = document.getElementById("label3");
  for(var i=0; i<valorAny.value.length; i++)
  {
    valor = valorAny.value.charCodeAt(i);
    if(valor<48 || valor>57)
    {
      alert("FECHA DE PUBLICACIÓN: Se ha detectado un valor que no es un número.");
      asociarClase(valorAny.id);
      return false;
    }else{
      desAsociarClase(valorAny.id);
      return true;
    }
  }
}

function validarLoc() {
  var valorLoc = document.getElementById("label5");
  for(var i=0; i<valorLoc.value.length; i++)
  {
    valor = valorLoc.value.charCodeAt(i);
    if(valor<48 || valor>57)
    {
      alert("LOCALIZACIÓN: Se ha detectado un valor que no es un número.");
      asociarClase(valorLoc.id);
      return false;
    }else{
      desAsociarClase(valorLoc.id);
      return true;
    }
  }
}

function asociarClase(id)
{
  var x=$("#"+id);
  x.addClass("recuadro");
}

function desAsociarClase(id)
{
  var x=$("#"+id);
  x.removeClass("recuadro");
}

function asociarClaseTag(id)
{
  var x=$("#"+id);
  x.addClass("labelcolor");
}

function desAsociarClaseTag(id)
{
  var x=$("#"+id);
  x.removeClass("labelcolor");
}