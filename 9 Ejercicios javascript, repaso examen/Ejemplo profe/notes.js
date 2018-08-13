var cuaderno=[];
var flag;
var posi;

do{
	switch (menu()){
		case 0: console.log("Ciao");
			flag=0;
		break;
		case 1:
			//Añade asignatura
			addAsig(cuaderno);
		break;
		case 2:
			//Añade nota
			posi=buscaPosi(prompt("Que asignatura"), cuaderno);
			if (posi!="nat"){
						cuaderno[posi].addQual(parseFloat(prompt("Introduzca la nota")));
			}
		break;
		case 3:
			//Muestra media
			switch (submenu()){
			case 1:
				posi=buscaPosi(prompt("De que asignatura"), cuaderno);
				if (posi!="nat"){
							console.log("La media es: "+cuaderno[posi].media());
				}
			break;	
			case 2:
				console.log("La media total del cuaderno es: "+mediaTotal(cuaderno));
			break;
			}
			
		break;
	}
}while (flag!=0);


function asignatura(){
	this.nombre="";
	this.profe="";
	this.notas=[];

	this.datos= function(name,teacher){
		this.nombre=name;
		this.profe=teacher;
	}
	this.addQual = function(q){
		this.notas.push(q);
	}

	this.media = function(){
		var media=0;
		for (var i=0; i<this.notas.length; i++){
			media=media+this.notas[i];
		}
		return (media/(i));
	}
}

function addAsig(lista){
	var m=new asignatura();
	m.datos(prompt("Introduzca nombre de la materia"), prompt("Introduzca profesor que la imparte"));
	lista.push(m);
	console.log("Materia añadida");
}

function buscaPosi(xx, lista){
	for (var i=0; i<lista.length; i++){
		if (lista[i].nombre==xx){
			return i;

		}
	}
	alert("No hay ninguna asignatura con ese nombre\n"+xx);
	return ("nat");
}

function submenu(){
	return (parseInt(prompt("1.-Media por asignatura\n2.-Media total")));
}

function mediaTotal(lista){
	var maga=0;
	for (var i=0; i<lista.length; i++){
		maga=maga+lista[i].media();
	}
	return (maga/(i));
}
function menu(){
	return (parseInt(prompt("1.-Añade asignatura\n2.-Añade nota\n3.-Muestra medias\n0.-Salir")))
}