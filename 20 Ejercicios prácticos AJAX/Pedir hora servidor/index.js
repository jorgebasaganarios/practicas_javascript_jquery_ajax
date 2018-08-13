//Cuando se carga el documento comienza iniciar()
crearEvento(window,"load",iniciar);
function iniciar()
{
	// Creamos un objeto XHR.
	miXHR = new objetoXHR();
	// Cargamos el fichero fecha.php de forma asíncrona.
	cargarAsync("fecha.php");
}
// Carga el contenido de la url de forma asíncrona con Ajax
function cargarAsync(url)
{
	if (miXHR){
	// Carga el indicador Ajax antes de realizar la petición.
	document.getElementById("indicador").innerHTML=" <img src='ajax-loader.gif'/>";
	//Si existe el objeto miXHR abrimos la url (asíncrona)
	miXHR.open('GET', url, true);
	// En cada cambio de estado llama a estadoPetición
	miXHR.onreadystatechange = estadoPeticion;
	// Hacemos la petición al servidor con GET y parámetro
	null
	miXHR.send(null);
	}
}

// Se llama en cada cambio de estado de la petición.
// 1. readyState == 4 cuando la petición ha terminado.
// 2. Status == 200 encontrado; ==404 no encontado…
function estadoPeticion(){
	if ( this.readyState==4 && this.status == 200 ){
		// Desactivamos el indicador AJAX.
		document.getElementById("indicador").innerHTML="";
		// Metemos en el contenedor resultados las respuestas de la petición AJAX.
		textoDIV(document.getElementById("resultados"),
		this.responseText);
	}
}