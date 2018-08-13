var asignaturas = [];
var asignaturaMostrar;
var contador = 0;
var cnt = 0;
var opcionUsuario = -1;

while(opcionUsuario != 0){
	var opcionUsuario = parseInt(prompt(' 1. Introduce asignatura: \n 2. Añade nota: \n 3. Media. \n 0. SALIR'));
	switch(opcionUsuario){
		case 0: document.write("SALIR");
				break;
		case 1: document.write("Asignatura " + pedirDatos() + " añadida." + "<br><br>");
				break;
		case 2: var posicionAsig = buscarAsig(prompt('Introduce la asignatura en la que añadir la nota: '));
				asignaturas[posicionAsig].agregarNota(pedirNota());
				document.write("Nota: " + pedirNota() + " añadida a asignatura: " + asignaturas[posicionAsig].mostrarAsignatura() + "." + "<br><br>");
				break;
		case 3: document.write("Media: " + mediaFinal(asignaturas) + "<br><br>");
				break;
		default:document.write("ERROR");
				break;
	}
}

	function pedirDatos(){
		var nomAsig = prompt(" 1. ¿Qué asignatura?");
		var prof = prompt(" 2. ¿Qué profesor?");
		asignatura = new Asignatura();
		asignatura.creaAsig(nomAsig, prof);
		asignaturas.push(asignatura);
		contador = contarAsignaturas();
		return nomAsig;
	}

	function contarAsignaturas(){
		cnt = cnt + 1;
	}

	function elegirOpcion(){
		var opc = parseInt(prompt(' 1. Introduce asignatura: \n 2. Añade nota: \n 3. Media. \n 0. SALIR'));
		return opc;
	}

	function Asignatura(nomAsig, prof){
		this.nomAsig = "";
		this.prof = "";
		this.notas = [];

		this.creaAsig=function(nomAsig, prof){
			this.nomAsig = nomAsig;
			this.prof = prof;
		}

		this.agregarNota=function(n){
			this.notas.push(n);
		}

		this.mostrarAsignatura=function(){
			var asignaturaMostrar = this.nomAsig;
			return asignaturaMostrar;
		}

		this.mediaNotas=function(){
			var media = 0;
			for(var j=0; j<this.notas.length; j++){
				media = media + this.notas[j];
			}
			return media/j;
		}
	}

	function pedirNota(){
		var nota = parseFloat(prompt('Introduce una nota: '));
		return nota;
	}

	function buscarAsig(nom){
		for(var i=0; i<asignaturas.length; i++){
			if(asignaturas[i].nomAsig == nom){
				return i;
			}
		}
	}

	function mediaFinal(asignaturas){
		var total = 0;
		for(var i=0; i<asignaturas.length; i++){
			total = total + asignaturas[i].mediaNotas();
		}
		return total/i;
	}