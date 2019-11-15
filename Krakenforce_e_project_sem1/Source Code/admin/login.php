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
    
    $the_message = "";
    
    if ($session->is_signed_in() == true)
    {
        header("location: admin_index.php");
    }
    
    if (isset($_POST['submit']))
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
        if ($username == ADMIN_USER && $password == ADMIN_PASSWORD)
        {
            $_SESSION['user_id'] = "krakenforce";
            $session->signed_in = true;
            header("location: admin_index.php");
        } else
        {
            $the_message = "Username or password is incorrect.";
        }
    } else
    {
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
    <title>Sign in</title>
    
</head>
<body background="images/gradient-background-26046-26731-hd-wallpapers.jpg" ">

<div class="container-fluid" >
    <div class="col-md-4 col-md-offset-3" style="width: 300px; margin: 0 auto;">
        <div class="d-flex justify-content-center">
            <a href="../public/pages/index.php" style="text-decoration: none" class="navbar-brand nav-item">
                <img src="../public/pages/images/logo_full.png" height="80px" width="auto" alt="">
            </a>
            
        </div>
        <br/>
            <h3 class="text-center text-white">Welcome</h3>
            <p class="text-center text-white">Enter username and password to access Admin Page</p>
        <div class="row">
            <form id="login-id" style="box-shadow: 5px 10px 15px 5px gray;" class="col-md-12 p-3 mb-5 bg-white rounded" action="" method="post">

                <div class="form-group">
                    <label for="username"><strong>Username:</strong> </label>
                    <input type="text" class="form-control" name="username">

                </div>

                <div class="form-group">
                    <label for="password"><strong>Password:</strong></label>
                    <input type="password" class="form-control" name="password">

                </div>

                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" name="check" id="check_info">
                    <label class="form-check-label" for="check_info">Remember me</label>
                </div>
                <div class="form-group">
                    <h6 class="text-danger"><?php echo $the_message; ?></h6>
                </div>
                <div class="form-group">
                    <input type="submit" name="submit" value="Sign in" class="col-md-12 btn btn-primary">

                </div>
                

            </form>
        </div>
    </div>
</div>
<?php include "footer.php"; ?>
