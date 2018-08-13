<!-- Pràctica OBJETOS, Jorge Basagaña Rios -->
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">

/*var nombre = prompt("Introduce un nombre de disco: ");
var grupo=prompt("Indica el grupo del disco: ");
var any=prompt("Indica el año del disco: ");
var tipo=prompt("Indica el tipo de disco: ");
var localizacion=parseInt(prompt("Indica localización del disco: ", ""));
var prestado=prompt("¿Está prestado o no?: ");*/

var disco1 = new Disco();
var disco2 = new Disco();
disco1.nuevo("Supernatural", "Carlos Santana", "Rock", 2, true);
disco2.nuevo("Greatest Hits", "M. Jackson", "Pop", 24, true);

var discos = [];
discos.push(disco1, disco2);
disco1.imprimir();
disco2.imprimir();

var opciones = parseInt(prompt("Elige opciones: \n 0.-Cambiar localización. \n 1.-Cambiar estado."));

switch(opciones){
		case 0: disco1.cambLoc(prompt("Indica localización del disco:"));
		break;
		case 1: disco1.cambPrestado(prompt("¿Está prestado o no?: "));
		break;
		default: document.write("Opcion incorrecta");
		break;		
}

disco1.imprimir();

/*metodoPropiedades();
var loc=cambiarLocalizacion();
document.write("<br><br>Modificamos la estantería: "+loc+"<br><br>");
var prest=discoPrestado();
document.write("Modificamos el estado, ¿está prestado o no?: "+prest+"<br><br>");
document.write("Resultado de las modificaciones: <br>");
imprimir(unDisco);*/

function Disco(nombre, grupo, tipo, localizacion, prestado){

	this.nombre = "";
	this.grupo = "";
	this.any = "";
	this.tipo = "";
	this.localizacion = 0;
	this.prestado = false;

	this.nuevo=function(nombre, autor, tipo, localizacion, prestado){
		this.nombre=nombre;
		this.autor=autor;
		this.tipo=tipo;
		this.localizacion = localizacion;
		this.prestado = prestado;
	}

	this.cambLoc=function(localizacion){
		this.localizacion = localizacion;
	}

	this.cambPrestado=function(prestado){
		this.prestado = prestado;
	}

	this.imprimir=function(){
	document.write("-Nombre disco: "+this.nombre+" / Autor: "+this.autor+" / Tipo: "+this.tipo+" / Localizacion: "+this.localizacion+" / Prestado: "+this.prestado+"<br><br>");
	}
}

</script>
</head>
<body>

</body>
</html>