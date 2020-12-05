<?php
    header("Access-Control-Allow-Origin:*");
    require_once 'connect_bd.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        echo json_encode(array("msg" => "Método GET Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome_cli = $_POST['nome_cli'];
        $telefone = $_POST['telefone'];
        $endereco_cli = $_POST['endereco_cli'];
        $cidade_cli = $_POST['cidade_cli'];
        $cep_cli = $_POST['cep_cli'];
        $uf_cli = $_POST['uf_cli'];
        $produto = $_POST['produto'];
       


        $sql = "INSERT INTO cliente VALUES (null, '$nome_cli', '$telefone', '$endereco_cli', '$cidade_cli', '$cep_cli', '$uf_cli', '$produto')";

        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'PUT'){
        echo json_encode(array("msg" => "Método PUT efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        echo json_encode(array("msg" => "Método DELETE efetuado"));
    } else {
        echo "Falha!";
    }