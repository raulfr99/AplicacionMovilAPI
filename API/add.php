<?php 
include 'apitrabajadores.php';
header("Access-Control-Allow-Origin: *");
$api = new apiTrabajadores();


         if(isset($_POST['nombre'])){
          
            $item = array(
                'nombre'=>$_POST['nombre'],
                'apellidos'=>$_POST['apellidos'],
                'numtelefono'=>$_POST['numtelefono'],
                'contrasena'=>md5($_POST['contrasena']),
                'categoria'=>'1',
                'oficio'=>$_POST['oficio'],
                'calificacion'=>'0',
                'descripcion'=>$_POST['descripcion'],
                'edad'=>$_POST['edad'],
                'imagen'=>$_POST['imagen']
            );
            $api->add($item);
         }else{
        $api -> error('Error al llamar el API.');
    }
   
    
?>