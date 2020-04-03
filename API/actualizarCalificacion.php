<?php 
include 'apitrabajadores.php';
header("Access-Control-Allow-Origin: *");
$api = new apiTrabajadores();

         if(isset($_POST['id'])){
         
            $item = array(
                'id'=>$_POST['id'],
                'calificacion'=>$_POST['calificacion']
            );
            $api->actualizar($item);
         }else{
        $api -> error('Error al llamar el API.');
    }
   
    
?>