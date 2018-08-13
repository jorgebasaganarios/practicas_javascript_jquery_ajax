var x;
x=$(document);
x.ready(iniciar);

function iniciar()
{
  var x;
  x=$("img");
  x.mouseover(aumentar);
  x.mouseout(reducir);
}

function aumentar()
{
  $(this).css("width","200");
  $(this).css("height","200");
}

function reducir()
{
  $(this).css("width","100");
  $(this).css("height","100");
}
