<?php
header("Location: index.html");
$current_data = file_get_contents('datos.json'); 
$array_data = json_decode($current_data, true);
$id_cnt = count($array_data);
echo $id_cnt;
$extra = array(
	 'id'				=>	   $id_cnt+1,
     'nombre'           =>     $_GET['nombre'],
     'mensaje'          =>     $_GET['mensaje'],
     'fecha'			=>	   date('l jS \of F Y h:i:s A'),
     'likes'			=>	   0,
     'estado'			=>	   false
);
$array_data[] = $extra;
$final_data = json_encode($array_data); 
file_put_contents('datos.json', $final_data);
?>