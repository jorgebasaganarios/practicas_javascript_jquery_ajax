var x;

var validFecha = false;
var validCoc = false;
var validDest = false
var validGram = false;
var validComp = false;

x=$(document);
x.ready(iniciar);

function iniciar(){
  $("#boton1").click(formAction);
}

function formAction(){  

  reset();
  validarFecha();
  validarCoc();
  validarDest();
  validarGram();
  validarComp();
  mostrar();
}

function reset(){
  $("#textarea1").html("");
}

function validarFecha(){
  var valorFecha = $("#label1");
  if(!(/^\d{2}[/]\d{2}[/]\d{4}$/.test(valorFecha.val()))){
    asociarClase(valorFecha[0].id);
  }else{
    desAsociarClase(valorFecha[0].id);
    validFecha = true;
  }
}


function validarCoc(){  
  var valorCoc = $("#label2");
  if(!(/^[A-Z]{2}\W\d{4}$/.test(valorCoc.val()))){
    asociarClase(valorCoc[0].id);
  }else{
    desAsociarClase(valorCoc[0].id);
    validCoc = true;
  }
}

function validarDest(){
  var valorDest = $("#label3");
  if(!(/^[A-Z]{2,3}[_]\D+[:]\d{4}$/.test(valorDest.val()))){
    asociarClase(valorDest[0].id);
  }else{
    desAsociarClase(valorDest[0].id);
    validDest = true;
  }
}

function validarGram(){
  var valorGram = $("#label4");
  if(!(/^([1-9]\d{2}|[1-4]\d{3}|5000)$/.test(valorGram.val()))){
    asociarClase(valorGram[0].id);
  }else{
    desAsociarClase(valorGram[0].id);
    validGram = true;
  }
}

function validarComp(){
  var valorComp = $("#label5");
  if(!(/^\d+[g]\D{1,2}\d*\D{1,2}\d*$/.test(valorComp.val()))){
    asociarClase(valorComp[0].id);
  }else{
    desAsociarClase(valorComp[0].id);
    validComp = true;
  }
}

function asociarClase(id)
{
  x=$("#"+id);
  x.addClass("recuadro");
}

function desAsociarClase(id)
{
  x=$("#"+id);
  x.removeClass("recuadro");
}

function mostrar()
{  
  if(validFecha && validCoc && validDest && validGram && validComp){
    
    $("#textarea1").append('Fecha: ');
    $("#textarea1").append($('#label1').val());
    $("#textarea1").append(' / Cocinero: ');
    $("#textarea1").append($('#label2').val());
    $("#textarea1").append(' / Destinatario: ');
    $("#textarea1").append($('#label3').val());
    $("#textarea1").append(' / Gramaje: ');
    $("#textarea1").append($('#label4').val());
    $("#textarea1").append(' / Composición: ');
    $("#textarea1").append($('#label5').val());

    swal("Todo Correcto!");

    validFecha = false;
    validCoc = false;
    validDest = false
    validGram = false;
    validComp = false;
  }else{
    swal("Hay errores!");
  }
}