<?php
include("database.php");

$sql = "SELECT * FROM usuarios";
$result = mysqli_query($conexion, $sql);

if (!$result) {
    die("Error al listar");
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "user"=>$row["user"],
        "pass"=>$row["pass"]
    );
}

echo json_encode($json);