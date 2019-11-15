<?php
    include_once realpath(dirname(__FILE__) . '/..') . '/includes/functions.php';
    include_once realpath(dirname(__FILE__) . '/..') . '/includes/config.php';
    
    $session = new Session();
    $db = new Database();
    if (!$session->is_signed_in())
    {
        // neu khong signed in, redirect-> login.php (tru khi dang o login.php)
        $url = $_SERVER["REQUEST_URI"];
        $position = strrpos($url, "login.php");
        if (!$position)
        {
            header("location: login.php");
        }
    }
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
            integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
            crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="title icon" href="images/krakenforce_logo_on1_icon.ico">
    <title>Adminstator</title>
</head>
<body>

