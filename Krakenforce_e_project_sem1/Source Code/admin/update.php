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
        if ($_FILES['download']['name'] != '') {
            move_uploaded_file($_FILES['download']['tmp_name'], 'downloads/' . $_FILES['download']['name']);
            $download = 'downloads/' . $_FILES['download']['name'];
        }else {
            $download = '';
        }
        $statement = "UPDATE product SET product_code = ?,name=?,price=?,brand=?,type=?,image=?,download=?";
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
    $products = Product::find_all_products();
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
<br/>
<?php foreach ($products as $product): ?>
<div class="container" style="border: 1px black solid;">
    <h2 class="text-center">Product Infomation Detail</h2>
    <form action="" method="POST" enctype="multipart/form-data">
        <div class="form-row">
            <div class="form-group col-md-2">
                <label for="">Product Code: </label>
                <input type="text" name="product_code" class="form-control" value="<?php echo $product->product_info['product_code']; ?>">
            </div>
            <div class="form-group col-md-2">
                <label for="">Brand: </label>
                <input type="text" name="brand" id="" class="form-control" value="<?php echo $product->product_info['brand']; ?>">
            </div>
            <div class="form-group col-md-3">
                <label for="">Product Name: </label>
                <input type="text" name="name" id="" class="form-control" value="<?php echo $product->product_info['name']; ?>">
            </div>
            <div class="form-group col-md-3">
                <label for="">Product Model: </label>
                <input type="text" name="model" id="" class="form-control" value="<?php echo $product->product_info['model']; ?>">
            </div>
            <div class="form-group col-md-2">
                <label for="">Color: </label>
                <input type="text" name="color" id="" class="form-control" value="<?php echo $product->product_info['color']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="">Ton: </label>
                <input type="number" step="0.01" name="ton" id="" class="form-control" value="<?php echo $product->product_info['ton']; ?>">
            </div>
            <div class="form-group col-md-4">
                <label for="">Cooling capacity: </label>
                <input type="number" name="cooling_cap" id="" class="form-control" value="<?php echo $product->product_info['cooling_cap']; ?>">
            </div>
            <div class="form-group col-md-4">
                <label for="">Heating capacity: </label>
                <input type="number" name="heating_cap" id="" class="form-control" value="<?php echo $product->product_info['heating_cap']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="">Power Input: </label>
                <input type="number" name="pw_input" id="" class="form-control" value="<?php echo $product->product_info['pw_input']; ?>">
            </div>
            <div class="form-group col-md-6">
                <label for="">EER: </label>
                <input type="text" name="eer" id="" class="form-control" value="<?php echo $product->product_info['eer']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="">Feature 1: </label>
                <input type="text" name="fea_01" id="" class="form-control" value="<?php echo $product->product_info['fea_01']; ?>">
            </div>
            <div class="form-group col-md-4">
                <label for="">Feature 2: </label>
                <input type="text" name="fea_02" id="" class="form-control" value="<?php echo $product->product_info['fea_02']; ?>">
            </div>
            <div class="form-group col-md-4">
                <label for="">Feature 3: </label>
                <input type="text" name="fea_03" id="" class="form-control" value="<?php echo $product->product_info['fea_03']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <label for="">Price: </label>
                <input type="number" name="price" id="" class="form-control" placeholder="Enter price (number)" value="<?php echo $product->product_info['price']; ?>">
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
            <img src="<?php echo $product->product_info['price']; ?>" id="output" alt="uploaded-image" height="100px">
            <strong><label for="image">Photo</label></strong>
            <input class="form-control-file" type="file" name="photo" onchange="loadFile(event)">
            <script>
                var loadFile = function(event) {
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

        <button class="btn btn-primary" type="submit" name="submit" >UPLOAD</button>
        <a href="add.php"> <input class="btn btn-danger" value="Cancel"> </a>
    </form>
    <br/><br/>

</div>
<?php endforeach; ?>
</div>
</body>

</html>