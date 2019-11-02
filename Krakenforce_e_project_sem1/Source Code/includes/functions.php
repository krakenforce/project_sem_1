<?php
// các function/ method các loại mà không muốn để trong classes


//--------- tự load classes: -------
spl_autoload_register('autoloader');

function autoloader($class){

    // $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

    $class = strtolower($class);
    $path = "../classes/";
    $extension = ".class.php";
    $fullPath = $path . $class . $extension;


    if (!file_exists($fullPath)) {
        return false;
    }else {

        include_once $fullPath;
    }

}
// -----------------