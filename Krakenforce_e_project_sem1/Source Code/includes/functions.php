<?php

//--------- tự load classes: -------
spl_autoload_register('autoloader');

function autoloader($class_name){

    // $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $class_name = strtolower($class_name);
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
    $fullPath = $path . $class_name . $extension;

    if (!file_exists($fullPath)) {
        return false;
    }else {
        include_once $fullPath;
    }
}
// -----------------------------------