var arrayImg=document.getElementsByTagName('img');
var aleatorio = 0;
var numclic=0;
var numTry=0;
var total=0;
var img1;
var img2;
var puntuacion=0;
var intentos=0;

window.onload = function(){
	console.log("Página cargada.");

	for(var i=0; i<arrayImg.length; i++){
		arrayImg[i].addEventListener('click', pulsar);
		document.getElementById('try').value = numTry;
		document.getElementById('result').value = puntuacion;
	}
}

function pulsar(){
	if(numclic==0){
		this.src = "img/" + this.name + ".png";
		img1 = document.getElementById(this.id);		
		console.log("Imagen 1");
		numclic++;		
	}else if(numclic==1){
		this.src = "img/" + this.name + ".png";
		img2 = document.getElementById(this.id);
		console.log("Imagen 2");
		numclic++;
		setTimeout(function(){comprobar()}, 500);
	}
}

function comprobar(){
	console.log("Comprobación...");
	if(img1.name == img2.name){
		img1.src = "img/" + "correcto.png";
		img2.src = "img/" + "correcto.png";
		for(var j=0; j<arrayImg.length; j++){	
			if(arrayImg[j].name == img1.name){
				arrayImg[j].removeEventListener('click', pulsar);
			}
		}
		img1.removeEventListener('click', pulsar);
		numclic = 0;
		total++;
		setTimeout(function(){comprobarTotal(total)}, 500);
		numTry++;
		document.getElementById('try').value = numTry;
		puntuacion = puntuacion + 100;
		document.getElementById('result').value = puntuacion;
	}
	else{
		img1.src = "img/" + "0.png";
		img2.src = "img/" + "0.png";
		numclic = 0;
		numTry++;
		document.getElementById('try').value = numTry;
		puntuacion = puntuacion - 100;
		document.getElementById('result').value = puntuacion;
	}
}

function comprobarTotal(total){
	if(total == 6){
		return alert('¡Enhorabuena, prueba superada!');
	}
}