function ajax_get_json(){
		var resultado=document.getElementById('info');
		//console.log(resultado);
		var xmlhttp;
		if (window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
					//console.log (xmlhttp.responseText);
					var data = JSON.parse(xmlhttp.responseText);
						//console.log(data);
					if (document.getElementById('info').innerHTML ==""){
						for (var i=0; i< data.length; i++){
							//console.log(i);
							var person = data[i];
							document.getElementById('info').innerHTML += person.nombre+" "+person.apellido+"<hr>";
						}
					}
				}
			}
			xmlhttp.open("GET","datos.json",true);
			xmlhttp.send();
	}