var TABLERO=new Array(10);
// JavaScript Document
// -9 MINA NO VISTA --> Icono GRIS
// -8 NO MINA NO VISTA --> Icono GRIS
// -5 MINA VISITADA --> EXPLOSION 
// 0..8 NO MINA VISITADA --> Icono numero 0..8
// -7 MINA MARCADA  --> Icono banderita
// -6 NO MINA MARCADA --> Icono banderita

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  $("td").click(visitar);
}

function llenar_tablero()
  //Para cada posición genero un numero aleatorio entre 1 y 10. Si es 1 y 2 pondré mina, sino pondre que no hay mina
  {	
	for(i=0;i<10;i++)
	{
	  for(j=0;j<10;j++){
		  var num=parseInt(Math.random()*10)+1;
		  if (num<3) TABLERO[i][j]=-9;
		  else TABLERO[i][j]=-8;
	  }
	}		
  }

function mostrar_tablero()
//Nos muestra por consola el estado del tablero
{	
  for(i=0;i<10;i++)
  {
	var fila="";
	for(j=0;j<10;j++){
		fila = fila + " " +  TABLERO[i][j];		
	}
	console.log(fila);
  }		
}

function contarMinas(x,y){

	var c=0;
	if ((x-1>=0) & (y-1>=0)) 	if (TABLERO[x-1][y-1]==-9) ++c;
	if (x-1>=0)  				if (TABLERO[x-1][y]==-9) ++c;
	if ((x-1>=0) & (y+1<10)) 	if (TABLERO[x-1][y+1]==-9) ++c;
	
	if (y-1>=0) if (TABLERO[x][y-1]==-9) ++c;
	if (y+1<10) if (TABLERO[x][y+1]==-9) ++c;

	if ((x+1<10) & (y-1>=0)) 	if (TABLERO[x+1][y-1]==-9) ++c;
	if (x+1<10)  				if (TABLERO[x+1][y]==-9) ++c;
	if  ((x+1<10) & (y+1<10)) 		if (TABLERO[x+1][y+1]==-9) ++c;
	return (c);


}

function visitar()
{ 
	var casilla=$(this);
	var x= parseInt(parseInt(casilla.attr('id')) /10);
	var y= parseInt(parseInt(casilla.attr('id')) % 10);
	
	//alert("Has picado en la fila "+x+ " y en la columna " + y);
	
	
	if (TABLERO[x][y]==-9) alert("GAME OVER");
	else if (TABLERO[x][y]==-8)  {
			var numMinas=contarMinas(x,y);
			//alert("Hay " + numMinas +" alrededor");
			//Actualizo el tablero
			TABLERO[x][y]=numMinas;
			switch(numMinas) 
			{
			case 1: casilla.html("<img  src='mbotn1.gif' alt='1 mina alrededor' >");
					break;
			case 2: casilla.html("<img  src='mbotn2.gif' alt='1 mina alrededor' >");
					break;
			case 3: casilla.html("<img  src='mbotn3.gif' alt='1 mina alrededor' >");
					break;					
			case 4: casilla.html("4");
					break;
					}
					
					
		}
	console.clear();
	mostrar_tablero();
	
}

function imprimir_tablero()
{	
 //Genera una tabla HTML a partir del tablero. 
 //Si hay mina no vista o no mina no vista, nos enseñara una casilla gris
 document.write('<table border="0">');
 var num=0;
 for(var i=0; i<10; i++ )
 {
	document.write('<tr>');
	for(var j=0; j<10; j++ )
	{
		if ((TABLERO[i][j]==-9) ||(TABLERO[i][j]==-8)) document.write('<td id='+num+'> <img  src="mbotnp.gif" alt="mina no pisada" ></td>');		
		num++;
	}
	document.write('</tr>');
	}
  document.write('</table> ');
}

/************* MAIN ****************************************/
  //M sera una matriz de 10x10 posiciones
  
  for(i=0;i<10;i++)
  {
	TABLERO[i]=new Array(10);
  }

  llenar_tablero();
  mostrar_tablero(TABLERO);
  //muestro en tablero en HTML con sus eventos
  imprimir_tablero(TABLERO);
  
