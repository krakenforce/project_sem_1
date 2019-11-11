<?php
include_once dirname(__FILE__, 2) . '/includes/functions.php';
include_once dirname(__FILE__, 2) . '/includes/config.php';

$session = new Session();
$db = new Database();
if(!$session->is_signed_in()){
    // neu khong signed in, redirect-> login.php (tru khi dang o login.php)
    $url = $_SERVER["REQUEST_URI"];
    $position = strrpos($url, "login.php");
    if(!$position) {
        header("location: login.php");
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.js"></script>
    <title><?php echo $title; ?></title>
</head>
<body>

