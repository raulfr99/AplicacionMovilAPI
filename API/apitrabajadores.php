<?php 
include 'trabajador.php';
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
class apiTrabajadores{
    private $imagen;
        private $error;
    function getAll(){
        
        $trabajador = new Trabajador();
        $trabajadores = array();
        $trabajadores ["items"] = array();

        $res = $trabajador -> obtenerTrabajadores();
        
        if ($res->rowCount()){
            while($row = $res->fetch(PDO :: FETCH_ASSOC)){
                $item = array(
                    'id'=> $row['id'],
                    'nombre'=> $row['nombre'],
                    'apellidos'=> $row['apellidos'],
                    'numero'=> $row['numtelefono'],
                    'categoria'=> $row['categoria'],
                    'oficio'=> $row['oficio'],
                    'descripcion'=> $row['descripcion'],
                    'imagen'=> $row['imagen'],
                    'calificacion'=> $row['calificacion'],
                    'edad'=> $row['edad']
                );
                array_push($trabajadores['items'],$item);
            }
           //echo json_encode($trabajadores);
          $this-> printJSON($trabajadores);
        }
        else{
          $this-> error('No hay registros. ');
        }
    }

    function getById($id){
        $trabajador = new Trabajador();
        $trabajadores = array();
        $trabajadores ["items"] = array();

        $res = $trabajador -> obtenerTrabajador($id);
        
        if ($res->rowCount()==1){

            $row = $res->fetch();
            
                $item = array(
                    'id'=> $row['id'],
                    'nombre'=> $row['nombre'],
                    'apellidos'=> $row['apellidos'],
                    'numero'=> $row['numtelefono'],
                    'categoria'=> $row['categoria'],
                    'oficio'=> $row['oficio'],
                    'imagen'=> $row['imagen'],
                    'calificacion'=> $row['calificacion'],
                    'edad'=> $row['edad']
                );
                array_push($trabajadores['items'],$item);
            
           //echo JSON.parse($trabajadores)."\n";
           
          $this-> printJSON($trabajadores)."\n";
        }
        else{ 
          $this-> error('No hay registros. ');
        }
    }

    function add($item){
        $trabajador = new Trabajador();
        $res  = $trabajador -> nuevoTrabajador($item);
        $this  -> exito('Nuevo trabajador registrado!');
    }
      function actualizar($item){
        $trabajador = new Trabajador();
        $res  = $trabajador -> actualizarCali($item);
        $this  -> exito('Nuevo trabajador registrado!');
    }
    function printJSON($array){
        echo json_encode($array);
    }
    function exito($mensaje){
        echo json_encode(array('mensaje'=>$mensaje));
    }
    function error($mensaje){
        echo json_encode(array('mensaje'=>$mensaje));
    }

    
    function subirImagen($file){
        $directorio = $_FILES['imagen']['name'];

    $this -> imagen = basename($file["name"]);
        $archivo = $directorio . basename($file["name"]);
    $tipoArchivo = strtolower(pathinfo($archivo, PATHINFO_EXTENSION));

    // valida que es imagen
    $checarSiImagen = getimagesize($file["tmp_name"]);

    //var_dump($size);
    $folder ="img/"; 
    $image = $_FILES['imagen']['name']; 

    $path = $folder.$image;
    if($checarSiImagen != false){

        //validando tamaño del archivo
        $size = $file["size"];

        if($size > 500000){
            $this->error= "El archivo tiene que ser menor a 500kb";
            return false;
        }else{

            //validar tipo de imagen
            if($tipoArchivo == "jpg" || $tipoArchivo == "jpeg" || $tipoArchivo == "png"){
                // se validó el archivo correctamente
                if(move_uploaded_file( $_FILES['imagen'] ['tmp_name'], $path)){
                  //  echo "El archivo se subió correctamente";
                    return true;
                }else{
                    $this->error= "Hubo un error en la subida del archivo ";
                    return false;
                }
            }else{
                $this->error= "Solo se admiten archivos jpg ,jpeg , png. ";
                    return false;
            }
        }
    }else{
        $this->error= "El documento no es una imagen. ";
        return false;
    }
    }
    function getImagen(){
        return $this->imagen;
    }
    function getError(){
        return $this->error;
    }
}

?> 