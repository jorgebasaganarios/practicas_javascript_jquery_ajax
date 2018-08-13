var dataOld;

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
				var data = JSON.parse(xmlhttp.responseText);
				if(data != dataOld){
					document.getElementById('info').innerHTML = "";
					dataOld = data;
					document.getElementById('info').innerHTML += "<tr><th>Nombre </th>"+"<th>Apellido </th>"+"<th>Vehiculo </th></tr>";
					for (var i=0; i< data.length; i++){
						var person = data[i];
							document.getElementById('info').innerHTML += "<tr><td>"+person.nombre+" </td>"+"<td>"+person.apellido+" </td>"+"<td>"+person.vehiculo+" </td></tr>";
					}
				}
			}
		}
		xmlhttp.open("GET","datos.json",true);
		xmlhttp.send();
	}

	function update(){		
    	setInterval(ajax_get_json, 3000);
    }