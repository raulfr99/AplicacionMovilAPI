<?php
include_once 'conexion.php';
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

class Trabajador extends DB{
    function obtenerTrabajadores(){
        $query = $this->connect()->query('SELECT * FROM trabajadores');
        return $query;
    }

    function obtenerTrabajador($id){
        $query = $this ->connect()->prepare('SELECT * FROM trabajadores WHERE ID = :id');
        $query -> execute(['id'=>$id]);
        return $query;
    }
    
    function nuevoTrabajador($trabajador){
        $query = $this ->connect()->prepare('INSERT INTO trabajadores(nombre,contrasena, apellidos, numtelefono,categoria,oficio,descripcion,imagen,calificacion,edad) values (:nombre,:contrasena, :apellidos,:numtelefono,:categoria,:oficio,:descripcion,:imagen,:calificacion,:edad)');
        $query -> execute(['nombre'=>$trabajador['nombre'],'contrasena'=>$trabajador['contrasena'],'apellidos'=>$trabajador['apellidos'],'numtelefono'
        =>$trabajador['numtelefono'],'categoria'=>$trabajador['categoria'],'oficio'=>$trabajador['oficio'],
        'descripcion'=>$trabajador['descripcion'],
        'imagen'=>$trabajador['imagen'],'calificacion'=>$trabajador['calificacion'],'edad'=>$trabajador['edad']]);
        return $query;
    }
    function actualizarCali($datos){
        $query = $this ->connect()->prepare('UPDATE trabajadores set calificacion= :calificacion WHERE ID = :id');
         $query -> execute(['calificacion'=>$datos['calificacion'],'id'=>$datos['id']]);
    }
}
?>