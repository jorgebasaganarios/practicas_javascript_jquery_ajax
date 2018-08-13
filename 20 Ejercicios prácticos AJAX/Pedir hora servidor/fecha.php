<?php
	// Para que el navegador no haga cache de los datos devueltos por la página PHP.
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	// retrasamos 2 segundos la ejecución de esta página PHP.
	sleep(2);
	// Mostramos la fecha y hora del servidor web.
	echo "La fecha y hora del Servidor Web: ";
	echo date("j/n/Y G:i:s.");
?>
