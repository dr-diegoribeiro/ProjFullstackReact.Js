<?php
  function query($sql){
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "fullstack_ultimate";

    $conn = mysqli_connect($servername, $username, $password, $database);
    $conn->query("set names utf8");
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $resultado;
  }

  function nonquery($sql){
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "fullstack_ultimate";

    $conn = mysqli_connect($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
  }
?>