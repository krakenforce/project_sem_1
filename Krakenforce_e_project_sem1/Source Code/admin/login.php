<?php $title = "login"; include_once 'header.php'; ?>
<?php

$the_message = "";

if($session->is_signed_in() == true){
    header("location: admin_index.php");
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if($username == "krakenforce" && $password == "123456") {
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

<?php include "footer.php"; ?>
