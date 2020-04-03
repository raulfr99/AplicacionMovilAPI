<?php
/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");*/
   header('Access-Control-Allow-Origin: *');
$target_path = "img/";
 
$target_path = $target_path . basename( $_FILES['imagen']['name']);
 
if(move_uploaded_file($_FILES['imagen']['tmp_name'], $target_path)) {
    echo "Upload and move success";
} else{
echo $target_path;
    echo "There was an error uploading the file, please try again!";
}

?>
