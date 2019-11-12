<?php
    include_once dirname(__FILE__, 2) . '/includes/functions.php';
    include_once dirname(__FILE__, 2) . '/includes/config.php';
    
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
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title><?php echo $title; ?></title>
    <h1 class="text-center" style="color: #0A6BD3">Cosy Aircondition Adminstrator</h1>

    <div class="d-flex justify-content-center">
        <a href="../public/pages/index.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-info">Cosy AirConditioner Home Page</button>
        </a>
        <a href="admin_index.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-primary">Admin Home Page</button>
        </a>
        <a href="customer managerment/customer_manager.php" style="text-decoration: none" , class="navbar-brand nav-item">
            <button class="btn btn-primary">Customer manager</button>
        </a>
        <a href="logout.php" style="text-decoration: none" class="navbar-brand nav-item">
            <button class="btn btn-primary">Log out</button>
        </a>
    </div>
    <h4 class="text-center" style="color: #0A6BD3; margin: 0px"><?php echo $title; ?></h4>

</head>
<body>

