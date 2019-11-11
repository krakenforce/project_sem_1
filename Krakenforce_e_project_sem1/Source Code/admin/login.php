<?php $title = "login";

include_once dirname(__FILE__, 2) . '/includes/functions.php';
include_once dirname(__FILE__, 2) . '/includes/config.php';

$session = new Session();
$db = new Database();
if (!$session->is_signed_in()) {
    // neu khong signed in, redirect-> login.php (tru khi dang o login.php)
    $url = $_SERVER["REQUEST_URI"];
    $position = strrpos($url, "login.php");
    if (!$position) {
        header("location: login.php");
    }
}

$the_message = "";

if($session->is_signed_in() == true){
    header("location: admin_index.php");
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if($username == ADMIN_USER && $password == ADMIN_PASSWORD) {
        $_SESSION['user_id'] = "krakenforce";
        $session->signed_in = true;
        header("location: admin_index.php");
    }else {
        $the_message = "username or password is incorrect.";
    }
}else {
    $username = "";
    $password = "";
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
    </div>
    <h4 class="text-center" style="color: #0A6BD3; margin: 0px"><?php echo $title; ?></h4>

</head>
<body>

<div class="container">
    <div class="col-md-4 col-md-offset-3" style="width: 300px; margin: 0 auto;">

        <h4 class="bg-danger"><?php echo $the_message; ?></h4>

        <form id="login-id" action="" method="post">

            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" name="username">

            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password">

            </div>


            <div class="form-group">
                <input type="submit" name="submit" value="sign in" class="btn btn-primary">

            </div>

        </form>

    </div>
</div>
<?php include "footer.php"; ?>
