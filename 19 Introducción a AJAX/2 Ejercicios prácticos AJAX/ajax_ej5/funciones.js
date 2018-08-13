var dataOld;

	function ajax_get_json(){
		var resultado=document.getElementById('info');
		var xmlhttp;
		if (window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
				var data = JSON.parse(xmlhttp.responseText);				
				var cnt=0;

				nuevoArray = data.sort(compare);

				if(nuevoArray != dataOld){
					
					dataOld = nuevoArray;
					document.getElementById('info').innerHTML += "<tr><th>Posición </th>"+"<th>Nombre </th>"+"<th>Apellido </th>"+"<th>Vehiculo </th>"+"<th>Velocidad </th></tr>";
					
					for (var i=0; i< nuevoArray.length; i++){																	
						cnt=cnt + 1;
						var person = nuevoArray[i];
						document.getElementById('info').innerHTML += "<tr><td>"+cnt+" </td>"+"<td>"+person.nombre+" </td>"+"<td>"+person.apellido+" </td>"+"<td>"+person.vehiculo+" </td>"+"<td>"+person.velocidad+" </td></tr>";
					}
				}
			}
		}

		xmlhttp.open("GET","datos.json",true);
		xmlhttp.send();
	}

	function compare(a,b) {
		if (a.velocidad > b.velocidad)
		 return -1;
		if (a.velocidad < b.velocidad)
		return 1;
		return 0;
	}

	function update(){		
    	setInterval(ajax_get_json, 3000);
    }