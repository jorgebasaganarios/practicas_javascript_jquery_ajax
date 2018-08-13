$(document).ready(function(){
	$("#menu a").click(function(){	
		
		//LA PETICION AJAX
		
		//1. ELEMENTO HTML DONDE INYECTAREMOS EL RESULTADO DEL PHP
		//2. load (PAGINA PHP QUE VA A DEVOLVERNOS UN RESULTADO)
		//     1                    2
		$("#detalles").load($(this).attr("href")); 
		
		
		return false;	
	});
});

