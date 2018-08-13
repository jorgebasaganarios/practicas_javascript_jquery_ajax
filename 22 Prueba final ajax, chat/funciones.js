function ajax_get_json(){

	var chatRequest = new XMLHttpRequest();
	var chatstr = '';
	chatRequest.open('GET','datos.json','false');
	chatRequest.onload = function() {		
		var chatData = JSON.parse(chatRequest.responseText);
		for(var key in chatData)
		{			
			chatstr = chatstr + '<div class="input panel panel-success"><div class="panel-heading"><strong>'+ 
			chatData[key].nombre+'</strong> (<a href="addlike.php?id='+ chatData[key].id + '">Likes</a>: '
			+ chatData[key].likes +') <a href="delete.php?id='+ chatData[key].id + '">X</a></div>'+
			'<div class="panel-body">'+chatData[key].mensaje+'</div>'+'<div>'+chatData[key].fecha+'</div></div><br>';
		}
		document.getElementById('info').innerHTML = chatstr;
	};
	chatRequest.send();
}