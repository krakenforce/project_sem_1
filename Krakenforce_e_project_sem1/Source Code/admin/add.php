<?php $title = "add page";
    include_once 'header.php'; ?>
<?php
    require_once("../includes/functions.php");
    $db = new Database();
    if ($_SERVER['REQUEST_METHOD'] == 'POST'):
        if ($_FILES['photo']['name'] != ''):
            move_uploaded_file($_FILES['photo']['tmp_name'], 'photos/' . $_FILES['photo']['name']);
            $image = 'photos/' . $_FILES['photo']['name'];
        else:
            $image = $_POST['defaultPhoto'];
        endif;
        if ($_FILES['download']['name'] != '')
        {
            move_uploaded_file($_FILES['download']['tmp_name'], 'downloads/' . $_FILES['download']['name']);
            $download = 'downloads/' . $_FILES['download']['name'];
        } else
        {
            $download = '';
        }
        $statement = "INSERT INTO product(product_code,name,price,brand,type,image,download) values (?, ?, ?, ?, ?, ?, ?)";
        $param = [
            $_POST['product_code'],
            $_POST['name'],
            $_POST['price'],
            $_POST['brand'],
            $_POST['type'],
            $image,
            $download
        ];
        $statement2 = "UPDATE product_detail SET model = ?,color  = ?, ton = ?,cooling_cap = ?,heating_cap = ?,pw_input = ?,eer = ?,fea_01 = ?,fea_02 = ?,fea_03  = ? where pro_id = LAST_INSERT_ID();";
        $param2 = [
            $_POST['model'],
            $_POST['color'],
            $_POST['ton'],
            $_POST['cooling_cap'],
            $_POST['heating_cap'],
            $_POST['pw_input'],
            $_POST['eer'],
            $_POST['fea_01'],
            $_POST['fea_02'],
            $_POST['fea_03'],
        ];
        $db->query_with_params($statement, $param);
        $db->query_with_params($statement2, $param2);
        header("location: admin_index.php");
    endif;
?>
<body>
<br/>
<!-- navbar -->
<nav class="navbar navbar-expand-md navbar-light">
    <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="myNavbar">
        <div class="container-fluid">
            <div class="row">
                <!-- sidebar -->
                <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                    <a href="admin_index.php" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Cosy Air Conditioner</a>
                    <div class="bottom-border pb-3">
                        <img src="images/krakenforce%20logo.jpg" width="50" class="rounded-circle mr-3">
                        <a href="#" class="text-white">Kraken Force</a>
                    </div>
                    <ul class="navbar-nav flex-column mt-4">
                        <li class="nav-item"><a href="admin_index.php" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-user text-light fa-lg mr-3"></i>Customer</a></li>
                        <li class="nav-item"><a href="product.php" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Product</a></li>
                        <li class="nav-item"><a href="../public/pages/index.php" class="nav-link text-white p-3 mb-2 sidebar-link"><i
                                        class="fas fa-snowflake text-light fa-lg mr-3"></i>Cosy Homepage</a></li>
                    </ul>
                </div>
                <!-- end of sidebar -->

                <!-- top-nav -->
                <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <h4 class="text-light text-uppercase mb-0"> Add Product</h4>
                        </div>
                        <div class="col-md-5">
                        </div>
                        <div class="col-md-3">
                            <ul class="navbar-nav">
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-comments text-muted fa-lg"></i></a></li>
                                <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i
                                                class="fas fa-bell text-muted fa-lg"></i></a></li>
                                <li class="nav-item ml-md-auto"><a href="logout.php" class="nav-link"><i
                                                class="fas fa-sign-out-alt text-danger fa-lg"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- end of top-nav -->
            </div>
        </div>
    </div>
</nav>
<!-- end of navbar -->
<section>
    <div class="container-fluid">
        <div class="row mb-5">
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div class="row align-items-center">
                    <div class="col-xl-10 col-12 ml-4 mt-5 mb-xl-0">
                        <h2 class="text-center">Product Infomation Detail</h2>
                        <form action="" method="POST" enctype="multipart/form-data">
                            <div class="form-row">
                                <div class="form-group col-md-2">
                                    <label for="">Product Code: </label>
                                    <input type="text" name="product_code" class="form-control"
                                           placeholder="Enter product code" value="SP">
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="">Brand: </label>
                                    <input type="text" name="brand" id="" class="form-control"
                                           placeholder="Enter brand">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="">Product Name: </label>
                                    <input type="text" name="name" id="" class="form-control"
                                           placeholder="Enter product name">
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="">Product Model: </label>
                                    <input type="text" name="model" id="" class="form-control"
                                           placeholder="Enter product model">
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="">Color: </label>
                                    <input type="text" name="color" id="" class="form-control"
                                           placeholder="Enter color">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="">Ton: </label>
                                    <input type="number" step="0.01" name="ton" id="" class="form-control"
                                           placeholder="Enter product ton" value="0">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Cooling capacity: </label>
                                    <input type="number" name="cooling_cap" id="" class="form-control"
                                           placeholder="Enter cooling capacity" value="0">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Heating capacity: </label>
                                    <input type="number" name="heating_cap" id="" class="form-control"
                                           placeholder="Enter heating capacity" value="0">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="">Power Input: </label>
                                    <input type="number" name="pw_input" id="" class="form-control"
                                           placeholder="Enter Power Input" value="0">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="">EER: </label>
                                    <input type="text" name="eer" id="" class="form-control" placeholder="Enter EER">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="">Feature 1: </label>
                                    <input type="text" name="fea_01" id="" class="form-control"
                                           placeholder="Enter feature">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Feature 2: </label>
                                    <input type="text" name="fea_02" id="" class="form-control"
                                           placeholder="Enter feature">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="">Feature 3: </label>
                                    <input type="text" name="fea_03" id="" class="form-control"
                                           placeholder="Enter feature">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="">Price: </label>
                                    <input type="number" name="price" id="" class="form-control"
                                           placeholder="Enter price (number)">
                                </div>

                                <div class="form-group col-md-9">
                                    <label for="">Type: </label><br>
                                    <input type="radio" name="type" id="" value="Split AC" checked>
                                    <label for="Split AC">Split AC</label> &nbsp
                                    <input type="radio" name="type" id="" value="Cabinet AC">
                                    <label for="Cabinet">Cabinet AC </label> &nbsp
                                    <input type="radio" name="type" id="" value="Cassette AC">
                                    <label for="Cassette AC">Cassette AC </label> &nbsp
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="hidden" name="defaultPhoto" value="photos/default.png">
                                <img src="photos/default.png" id="output" alt="uploaded-image" height="100px">
                                <strong><label for="image">Photo</label></strong>
                                <input class="form-control-file" type="file" name="photo" onchange="loadFile(event)">
                                <script>
                                    var loadFile = function (event) {
                                        var output = document.getElementById('output');
                                        output.src = URL.createObjectURL(event.target.files[0]);
                                    };
                                </script>
                            </div>

                            <br/>

                            <div class="form-group">
                                <label for="">Product information download file: </label>
                                <input type="file" name="download" id="" class="form-control">
                            </div>

                            <button class="btn btn-primary" type="submit" name="submit">UPLOAD</button>
                            <a href="product.php"> <input class="btn btn-danger" value="Cancel"> </a>
                        </form>
                        <br/><br/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<footer>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div class="row border-top pt-3">
                    <div class="col-lg-6 text-center">
                        <ul class="list-inline">
                            <li class="list-inline-item mr-2">
                                <a href="admin_index.php" class="text-dark">Dashboard</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="#" class="text-dark">Customer</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="#" class="text-dark">Product</a>
                            </li>
                            <li class="list-inline-item mr-2">
                                <a href="../public/pages/index.php" class="text-dark">Cosy AC Homepage</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 text-center">
                        <p>&copy; 2019 Copyright. Made With <i class="fab fa-gitkraken text-danger"></i> by <span
                                    class="text-success">Kraken Force</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- end of footer -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>
<script src="js/script.js"></script>
</body>

</html>