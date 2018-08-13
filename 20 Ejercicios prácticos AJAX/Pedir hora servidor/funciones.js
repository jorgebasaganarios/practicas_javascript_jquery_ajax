// Función cross-browser para crear objeto XMLHttpRequest
function objetoXHR(){
	if (window.XMLHttpRequest){
	// El navegador implementa la interfaz XHR de forma nativa
	return new XMLHttpRequest();
	}
else if (window.ActiveXObject){
	var versionesIE = new Array('Msxml2.XMLHTTP.5.0',
	'Msxml2.XMLHTTP.4.0',
	'Msxml2.XMLHTTP.3.0' , 'Msxml2.XMLHTTP',
	'Microsoft.XMLHTTP'); 
	for (var i = 0; i < versionesIE.length; i++){
		try{
			return new ActiveXObject(versionesIE[i]);
		}catch (errorControlado) {}//Capturamosel error,
	}
}
	// Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
	throw new Error("No se pudo crear el objeto XMLHttpRequest");
}
// Función cross-browser para añadir Eventos
var crearEvento = function(){
function w3c_crearEvento(elemento, evento, mifuncion){
	elemento.addEventListener(evento, mifuncion, false);
}
function ie_crearEvento(elemento, evento, mifuncion) {
	var fx = function(){ mifuncion.call(elemento); };
	//Enlazamos el objeto con attachEvent para IE
	elemento.attachEvent('on' + evento, fx);
}
if (typeof window.addEventListener !== 'undefined'){ 
		return w3c_crearEvento; 
	}
		else if (typeof window.attachEvent !== 'undefined'){
		 return ie_crearEvento; 
	}
}(); // <= Esta es la parte más crítica - tiene que terminar en ()

// Función cross-browser para modificar el contenidode un div
function textoDIV(nodo, texto){
	//var nodo = document.getElementById(idObjeto);
	while (nodo.firstChild)
	// Eliminamos todos los hijos de ese objeto.
		nodo.removeChild(nodo.firstChild);
	// Cuando ya no tenga hijos, agregamos un hijocon el texto que recibela función.
	nodo.appendChild(document.createTextNode(texto));
}