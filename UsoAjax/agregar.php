<?php
include("database.php");
if(isset($_POST["user"])){
    $user = $_POST["user"];
    $pass = $_POST["pass"];

    $sql = "INSERT INTO usuarios (user, pass) VALUES ('$user','$pass')";
    $result = mysqli_query($conexion,$sql);

    if(!$result){
        die ("Fallo al agregar");
    }
    echo "Agregado con exito";
}