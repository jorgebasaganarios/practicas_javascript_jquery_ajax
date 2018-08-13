/*
• Mostrar número de discos.
• Mostrar listado de discos(y le preguntará si quiere mostrarlos en el orden que se
encuentran en el array, del revés u ordenados alfabéticamente).
• Mostrar un intervalo de discos(y le pedirá que introduzca el intervalo en formato
inicio-fin; luego deberás extraer el valor inicio y fin).
• Añadir un disco (y le preguntará si quiere añadir al principio o al final).
• Borrar un disco (y le preguntará si quiere borrar al principio o al final).
• Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).
*/
var d1=new disco();
var d2=new disco();
 d1.nuevo("Gaia","Mago de Oz","Rock Celta");
 d2.nuevo("Estopa","Estopa","Pop");

//d1.showInfo();
var opc=0, como=0, cm2=0;
var discos=[];
discos.push(d1,d2);
do{
	opc=menu();
	switch(opc){
		case 0: console.log("Salir");
		break;
		case 1: console.log("El numero actual de discos es: "+discos.length);
		break;
		case 2: como=parseInt(prompt("Como desea mostrarlos?\n1.-Orden por defecto\n2.-Ordenados alfabéticamente\n3.-Orden inverso"));
				switch(como){
					case 1: console.log(muestra(discos).join(" - "));
					break;
					case 2: console.log(showOrder(discos).join(" - "));
							//console.log(discos.sort(compare));
					break;
					case 3: console.log(showReverse(discos).join(" - "));
					break;
					default: console.log("Opción de ordenar incorrecta");
					break;
					
				}
		break;
		case 3: console.log(showInterval(discos).join(" - "));
		break;
		case 4: cm2=parseInt(prompt("Al principio o al final?\n1.-Principio\n2.-Final"));
				switch(cm2){
					case 1: addIni(discos);
					break;
					case 2: addEnd(discos);
					break;
					default: console.log("Opcion añadir incorrecta");
					break;
				}
		break;

		default: alert("Opcion incorrecta");
		break;		
	}


}while (opc!=0);

function menu(){
	return (parseInt(prompt("Que desea realizar:\n1.-Mostrar cantidad de discos\n2.-Mostrar listado de discos\n3.-Mostrar intervalo\n4.-Añadir un disco\n5.-Borrar un disco\n0.-Salir")));
}


function disco(){
	this.nombre="";
	this.autor="";
	this.tipo="";
	this.localizacion=0;
	this.prestado=false;

	this.nuevo=function(nombre, autor, tipo,localizacion){
		this.nombre=nombre;
		this.autor=autor;
		this.tipo=tipo;
		this.localizacion=localizacion;

	}
	this.ubicacion=function(nestant){
		this.localizacion=nestant;
	}
	this.prestar=function(){
		this.prestado=true;
	}
	this.showInfo=function(){
		console.log("Nombre disco:"+this.nombre+" autor:"+this.autor+" tipo:"+this.tipo+" ubicado en la estanteria:"+this.localizacion+" prestado:"+this.prestado+" ")
	}

}

function showReverse(xx){

	var n1=copiaArray(xx);
	n1.reverse();
	return(muestra(n1));
 	
}

function showOrder(xx){
	var n1=copiaArray(xx);
	n1.sort(compare);
	return(muestra(n1));
}
function compare(a,b) {
	if (a.nombre < b.nombre){
		return -1;
	}
	if (a.nombre > b.nombre){
		return 1;
	}
	return 0;
}
function showInterval(xx){
	return(muestra(xx.slice(parseInt(prompt("Desde...")-1,parseInt(prompt("Hasta..."))))));
}	


function muestra(xx){
	var nombres=[];
	for (var i=0; i<xx.length; i++){
		nombres[i]=xx[i].nombre;
	}
	return (nombres);
}

function copiaArray(origen){
	var dest=new Array();
	for (var i=0; i<origen.length; i++){
		dest[i]=origen[i];

	}
	return (dest);
}

function crearDisco(){
	var dn=new disco();
	var name=prompt("Introduzca nombre del disco"), author=prompt("Autor"), tipe=prompt("tipo"), locate=prompt("Donde lo almacenara?");
	dn.nuevo(name,author,tipe,locate);
	return (dn);
}
function addEnd(xx){
	var dx=crearDisco();
	xx.push(dx);
}
function addIni(xx){
	var dx=crearDisco();
	xx.unshift(dx);
}
function pideDatos(){
	var name=prompt("Introduzca nombre del disco"), author=prompt("Autor"), tipe=prompt("tipo"), locate=prompt("Donde lo almacenara?")

	return(name,author,tipe,locate);

}