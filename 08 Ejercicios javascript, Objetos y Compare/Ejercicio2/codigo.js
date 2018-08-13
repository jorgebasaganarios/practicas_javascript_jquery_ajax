var mesesIng=["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
var dias=['Domingo','Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'];
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var coches = [];
var contador = 0;
var cnt = 0;
var opcionUsuario = -1;

while(opcionUsuario != 0){
	var opcionUsuario = elegirOpcion();

	switch(opcionUsuario){
		case 1:
				pedirDatos();
				break;
		case 2:
				var opc2 = parseInt(prompt(' 1. Número de vehículos. \n 2. Orden por modelo. \n 3. Eliminar vehículos al principio o al final. \n 0. SALIR'));

				switch(opc2){
					case 1:
							document.write("El número de coches es: " + contador);
							break;
					case 2: 
							
							document.write("Orden por modelo: " + mostrarOrdenado(coches));
							break;
					case 3: 
							var opc3 = parseInt(prompt(' 1. Eliminar al principio. \n 2. Eliminar al final.'));
							eliminar(opc3);
							document.write("Nuevo array: " + mostrarArray());
							break;
					default:
							break;
				}
				break;
		default: 
				break;
	}
}

	function pedirDatos(){
		var tipo = prompt("Tipo:");
		var marca = prompt("Marca: ");
		var modelo = prompt("Modelo: ");

		var fecha = crearFecha();
		
		coche = new Coche();
		coche.nuevo(tipo, marca, modelo, fecha);					
		coches.push(coche);
		contador = contarCoches();
	}

	function contarCoches(){
		cnt = cnt + 1;
		return cnt;
	}

	function elegirOpcion(){
		var opc = parseInt(prompt("Elige opciones: \n 1.-Introducir coche. \n 2.-Comprobaciones \n 0.-SALIR."));
		return opc;
	}

	function Coche(tipo, marca, modelo, fecha){
		this.tipo = "";
		this.marca = "";
		this.modelo = "";
		this.fecha = "";

		this.nuevo=function(tipo, marca, modelo, fecha){
			this.tipo = tipo;
			this.marca = marca;
			this.modelo = modelo;
			this.fecha = fecha;
		}
	}

	function mostrarOrdenado(coches){
	var nuevoArray=copiaArray(coches);
	nuevoArray.sort(compare);
	return muestra(nuevoArray);
	}

	function copiaArray(coches){
	var dest=new Array();
		for (var i=0; i<coches.length; i++){
			dest[i]=coches[i];
		}
		return dest;
	}

	function muestra(coches){
	var modelos=[];
		for (var i=0; i<coches.length; i++){
			modelos[i]=coches[i].modelo;
		}
		return modelos;
	}

	function compare(a,b) {
		if (a.modelo < b.modelo){
			return -1;
		}
		if (a.modelo > b.modelo){
			return 1;
		}
		return 0;
	}

	function eliminar(opcion){
		if(opcion == 1){
			coches.shift();
		}else{
			coches.pop();
		}
	}

	function mostrarArray(){
		var finalArray = [];
		for(var i=0; i<coches.length; i++){
			finalArray[i] = coches[i].marca + " " + coches[i].modelo + " [" + coches[i].fecha + "]";
		}
		return finalArray;
	}

	function crearFecha(){
		var dia = parseInt(prompt('Introduce el dia',''));
		var mes = parseInt(prompt('Introduce el mes'));
		var ano = parseInt(prompt('Introduce el año'));

		var f = new Date(mesesIng[mes-1] +' '+ dia +', '+ ano +' 01:15:00');
		return f;
	}