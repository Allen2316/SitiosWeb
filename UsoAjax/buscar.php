<?php
include("database.php");

if (isset($_GET["buscar"])) {
    $user =$_GET["buscar"];    
}

$sql = "SELECT * FROM usuarios WHERE user = '$user'";
$result = mysqli_query($conexion, $sql);

if (!$result) {
    die("Error al buscar");
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "user"=>$row["user"],
        "pass"=>$row["pass"]
    );
}

echo json_encode($json);