<?php
header("Location: index.html", true, 301);
$current_data = file_get_contents('datos.json');
$array_data = json_decode($current_data, true);
$id_value = $_GET['id'];
$arr_index = array();
foreach ($array_data as $key => $value) {
    if ($value['id'] == $id_value) {
        $arr_index[] = $key;
    }
}
foreach ($arr_index as $i) {
    unset($array_data[$i]);
}
$json_arr = array_values($array_data);
file_put_contents('datos.json', json_encode($array_data));
?>