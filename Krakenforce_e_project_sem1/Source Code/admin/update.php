<?php
    require_once ("../classes/database.class.php");
    $db = new Database();
    if ($_SERVER['REQUEST_METHOD']==='POST'):
        if($_FILES['image']['name'] != ''):
            move_uploaded_file($_FILES['image']['tmp_name'], 'images/'.$_FILES['image']['name']);
            $image = $_FILES['image']['name'];
        else:
            $image = $_POST['oldphoto'];
        endif;
        $statement = "UPDATE product SET product_code=?,name=?,price=?,brand=?,type=?,image=?,download=? WHERE pro_id = ?";
        $param = [
            $_POST['product_code'],
            $_POST['name'],
            $_POST['price'],
            $_POST['brand'],
            $_POST['type'],
            $image,
            $_POST['download']
        ];
        $statement2 = "UPDATE product_detail SET model=?,color=?,ton=?,cooling_cap=?,heating_cap=?,pw_input=?,eer=?,fea_01=?,fea_02=?,fea_03=? WHERE pro_id = ?";
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
        $db->query_with_params($statement,$param);
        $db->query_with_params($statement2,$param2);
        header("location: admin_index.php");
    else:
        $statement = "SELECT * FROM product INNER JOIN product_detail ON product.pro_id = product_detail.pro_id WHERE product.pro_id = ?";
        $param = ["{$_GET['pro_id']}"];
        $stmt = $db->query_with_params($statement,$param);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        extract($product);
        
    endif;
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.js"></script>
    <title>Document</title>
</head>

<body>
<h1 class="text-center" style="color: #0A6BD3">Cosy Aircondition Adminstrator</h1>
<div>
    <a href="admin_index.php" style="text-decoration: none">
        <button class="btn btn-primary">Admin Home Page</button>
    </a>
</div>
<br />
<div class="container" style="border: 1px black solid;">
    <h2 class="text-center">Product Infomation Detail</h2>
    <form action="" method="post" enctype="multipart/form-data">
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="">Product Code: </label>
                <input type="text" name="pro_code" class="form-control" placeholder="Enter product code">
            </div>
            <div class="form-group col-md-2">
                <label for="">Brand: </label>
                <input type="text" name="brand" id="" class="form-control" placeholder="Enter brand">
            </div>
            <div class="form-group col-md-3">
                <label for="">Product Name: </label>
                <input type="text" name="name" id="" class="form-control" placeholder="Enter product name">
            </div>
            <div class="form-group col-md-3">
                <label for="">Product Model: </label>
                <input type="text" name="model" id="" class="form-control" placeholder="Enter product model">
            </div>
            <div class="form-group col-md-2">
                <label for="">Color: </label>
                <input type="text" name="color" id="" class="form-control" placeholder="Enter color">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="">Ton: </label>
                <input type="text" name="Ton" id="" class="form-control" placeholder="Enter product ton">
            </div>
            <div class="form-group col-md-4">
                <label for="">Cooling capacity: </label>
                <input type="text" name="cooling_cap" id="" class="form-control" placeholder="Enter cooling capacity">
            </div>
            <div class="form-group col-md-4">
                <label for="">Heating capacity: </label>
                <input type="text" name="heating_cap" id="" class="form-control" placeholder="Enter heating capacity">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="">Power Input: </label>
                <input type="text" name="pw_input" id="" class="form-control" placeholder="Enter Power Input">
            </div>
            <div class="form-group col-md-6">
                <label for="">EER: </label>
                <input type="text" name="eer" id="" class="form-control" placeholder="Enter EER">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="">Feature 1: </label>
                <input type="text" name="fea_01" id="" class="form-control" placeholder="Enter feature">
            </div>
            <div class="form-group col-md-4">
                <label for="">Feature 2: </label>
                <input type="text" name="fea_02" id="" class="form-control" placeholder="Enter feature">
            </div>
            <div class="form-group col-md-4">
                <label for="">Feature 3: </label>
                <input type="text" name="fea_03" id="" class="form-control" placeholder="Enter feature">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="">Price: </label>
                <input type="text" name="price" id="" class="form-control" placeholder="Enter price">
            </div>
            
            <div class="form-group col-md-9">
                <label for="">Type: </label><br>
                <input type="radio" name="air_conditioner" id="" value="Split AC" checked>
                <label for="Split AC">Split AC</label> &nbsp
                <input type="radio" name="air_conditioner" id="" value="Cabinet AC">
                <label for="Cabinet">Cabinet AC </label> &nbsp
                <input type="radio" name="air_conditioner" id="" value="Cassette AC">
                <label for="Cassette AC">Cassette AC </label> &nbsp
            </div>
        </div>
    
        <form action="" method="post" enctype="multipart/form-data">
            Select Image File to Upload:
            <input type="file" name="image" id="">
        </form>
        <br/>
        <div class="form-group">
            <label for="">Product information download file: </label>
            <input type="file" name="download" id="" class="form-control">
        </div>
    </form>
    <br /><br />
    <input type="submit" class="btn btn-primary" value="Upload"> &nbsp &nbsp &nbsp
    <a href="add.php"> <input class="btn btn-danger" value="Cancel"> </a>
</div>
</div>
</body>

</html>