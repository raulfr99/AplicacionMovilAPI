<?php
include 'apitrabajadores.php';
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$api = new apiTrabajadores();
    if(isset($_GET['id'])){
        $id = $_GET['id'];
       
        if(is_numeric($id)){
            $api-> getById($id);
        }
        else{
            $api -> error('Los parametros son incorrectos.');
        }
        
    }
    else{
        $api ->getAll();
    }
 
?>