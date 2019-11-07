<?php
// các function/ method các loại mà không muốn để trong classes


//--------- tự load classes: -------
spl_autoload_register('autoloader');

function autoloader($class){

    // $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];


    $class = strtolower($class);
    $working_folder_name = "source code";
    $current_path = getcwd();
    $current_folder_name = basename($current_path);

    $path = "classes/";

    while (strtolower($current_folder_name) != $working_folder_name) {
        $current_path = dirname($current_path);
        $current_folder_name = basename($current_path);
        $path = "../" . $path;
    }

    $extension = ".class.php";
    $fullPath = $path . $class . $extension;


    if (!file_exists($fullPath)) {
        return false;
    }else {

        include_once $fullPath;
    }

}
// -----------------