<?php
include '../../includes/functions.php';
$conn = new Database();
$result = 0;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sql = "INSERT INTO customer(customer_name,email,phone,contact_type) VALUES (?,?,?,?);";
    $param = [
            $_POST['customer_name'],
            $_POST['email'],
            $_POST['phone'],
            $_POST['contact_type']
        ];
    $result = $conn->query_with_params($sql, $param);
}

//?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="shortcut icon" href="images/favicon.ico">
    <link rel="stylesheet" type="text/css" href="../../css/contact.css">
    <script src="../../js/jquery.js"></script>

</head>
<body>
<main onmouseup="footerOut()">
    <?php require 'header.php'; ?>
    <section id="sec_02">
        <div id="contact_main-container">
            <div id="c-left_container">
                <H1>Contact Us</H1>
                <h2>Home Office:</h2>
                <h3>212-214 Nguyen Dinh Chieu street, District 3, Ho Chi Minh city</h3>
                <h3>Phone : XXXXXXXXX</h3>
                <h3>Tool Free : (XY) XXXXXX</h3>
                <h3>Fax : (XY) XXXXXXXX</h3>
                <h3><a href="mailto:XXXX@gmail.com">info@gmail.com</a></h3>
                <h2>Sales:</h2>
                <h3><a href="mailto:XXX@gmail.com">sales@gmail.com</a></h3>
                <h3>Ngo Vu Thanh Toan</h3>
                <h3>Doan Le Nha Tuan</h3>
                <h3>Pham Huu Loi</h3>
                <h3>Nguyen Minh Hung</h3>
                <div id="map">
                    <iframe id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8569902483509!2d106.68959510668807!3d10.77849786161131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d97282b%3A0x45e74ca0fc0300dc!2sAptech%20Computer%20Education!5e0!3m2!1sen!2s!4v1573569936562!5m2!1sen!2s"
                            width="500px" height="350px" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </div>
            <div id="c-right_container">
                <form onsubmit="Message();" method="POST" enctype="multipart/form-data">
                    <div>
                        <h2>Send us a note:</h2>
                        <h3>You can reach us using any of the numbers on this page or you can fill out the short form
                            below to have someone contact you!</h3>
                        <br>
                        <h3 class="h3_uppercase-style">Name :</h3>
                        <input type="text" name="customer_name" value="" class="h3_cap-style"
                               required id="name"
                               placeholder="Enter name"/>
                        <br><br>
                        <h3 class="h3_uppercase-style">E-mail :</h3>
                        <input type="text" name="email" value=""
                               pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$" required
                               id="email" placeholder="XYZ@gmail.com"/>
                        <br><br>
                        <h3 class="h3_uppercase-style">Phone :</h3>
                        <input type="text" name="phone" value="" required id="phone"
                               placeholder="xxxx-xxxxxxx"/>
                        <br><br>
                        <h3>*How would you like to be contacted?</h3>
                        <input type="radio" name="contact_type" id="" value="Phone" checked>
                        <h3 class="h3-style">Phone</h3> &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="contact_type" id="" value="Email" checked>
                        <h3 class="h3-style">E-mail</h3>
                        <br><br>
                        <input type="submit" value="Submit" class="button button-highlight">

                    </div>
                </form>
            </div>
            <div id="contact_bottom">
                <div>
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
    </section>
    <?php require 'footer.php'; ?>
    <?php
    if($result > 0){
        Database::showMessage("Thank you for contacting Cosy Air Conditioner");
    }
    ?>
</main>
</body>
</html>