var paises = ["España", "Francia", "Alemania", "Italia", "Grecia", "Portugal"];

//Mostrar el número de elementos del array.

function pedirDatos(){
	var opt = parseInt(prompt(' 1. Mostrar número de países. \n 2. Mostrar listado de países. \n 3. Mostrar intervalo de países. \n 4. Añadir un país. \n 5. Borrar país.\n 6. Consultar un país. \n 0. SALIR'));
	return opt;
}

function mostrarCantidad(){
	var cantidad = paises.length;
	return cantidad;
}

//Mostrar todos los elementos del array.

function mostrarElementos(orden){
	if(orden == 1){
		elementos = paises;
	}
	if(orden == 2){
		elementos = vectorPaises().reverse();
	}
	if(orden == 3){
		elementos = vectorPaises().sort();
	}
	return elementos;
}

function vectorPaises(){
	var vector = [];
	for(var i=0; i<paises.length; i++){		
		vector.push(paises[i]);
	}
	return vector;
}

//Mostrar un intervalo de países.

function mostrarIntervalo(inicio, fin){
	elementos = paises.slice(inicio-1, fin);
	return elementos;
}

//Agregar elemento.

function agregaElemento(nombre, posicion){
	if(posicion == 0){
		paises.unshift(nombre); // Añade al principio.
	}
	if(posicion == paises.length){
		paises.push(nombre); // Añade al final.
	}
}

//Eliminar elemento.

function eliminaElemento(nombre, posicion){
	if(posicion == 1){
		paises.shift(nombre); //Elimina primer elemento
	}
	if(posicion == 2){
		paises.reverse();
		paises.reverse(paises.shift(nombre));
		//Se puede utilizar pop() para eliminar al final.
	}	
}

//Consultar país.

function consultarPais(valor){
	if(valor >= 0 && valor <=paises.length){
		elementos = paises[valor-1];
	}else{
		for(var i=0; i<paises.length; i++){
			if(valor == paises[i]){
				elementos = i+1;
			}
		}
	}
	return elementos;
}