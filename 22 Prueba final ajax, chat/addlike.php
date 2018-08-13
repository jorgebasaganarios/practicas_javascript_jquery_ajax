<?php
header("Location: index.html");
$current_data = file_get_contents('datos.json');
$id_value = $_GET['id'];
$array_data = json_decode($current_data, true);
foreach ($array_data as $key => $value) {
    if ($value['id'] == $id_value) {
        $act_likes = $array_data[$key]['likes'];
        $act_likes = $act_likes + 1;
        $array_data[$key]['likes'] = $act_likes;
    }
}
$json_arr = array_values($array_data);
file_put_contents('datos.json', json_encode($array_data));
?>