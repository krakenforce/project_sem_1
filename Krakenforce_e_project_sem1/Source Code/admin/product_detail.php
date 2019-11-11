<?php
    require_once("../includes/functions.php");
    require_once("../classes/pagination.class.php");
    $db = new Database();
    $id = $_POST['id']; //chưa xử lí được vùng này
    $products = Product::find_product_by_id('12');
    //$products = Product::find_all_products();
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
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.js"></script>
    <title>Product Detail</title>
</head>
<body>
<div>
    <h1 class="text-center">Product Detail</h1>
</div>
<div class="container-fluid" id="vm-form">
    <a href="admin_index.php">
        <button class="btn btn-danger">X</button>
    </a>
    <form action="#" method="post" enctype="multipart/form-data" class="bg-warning" style="margin: 50px;padding: 30px;border-radius: 5px;">
        <?php foreach ($products as $product): ?>
        <br/>
        <img class="align-content-center" height="100px" width="auto"
             src="<?php echo $product->product_info['image']; ?>" alt="">
        <div class="form-row">
            <div class="form-group col-md-1 readonly_area">
                <label for="pro_id">Product ID:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['pro_id']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="pro_code">Product Code:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['product_code']; ?>">
            </div>
            <div class="form-group col-md-3 readonly_area">
                <label for="name">Name:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['name']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="brand">Brand:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['brand']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-2 readonly_area">
                <label for="model">Model:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['model']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="color">Color:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['color']; ?>">
            </div>
            <div class="form-group col-md-1 readonly_area">
                <label for="ton">Ton:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['ton']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="cooling_cap">Cooling Capacity:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['cooling_cap']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="heating_cap">Heating Capacity:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['heating_cap']; ?>">
            </div>
            <div class="form-group col-md-2 readonly_area">
                <label for="pw_input">Power Input:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['pw_input']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-2 readonly_area">
                <label for="pw_input">Power Input:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['pw_input']; ?>">
            </div>
            <div class="form-group col-md-3 readonly_area">
                <label for="fea_01">Feature 1:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['fea_01']; ?>">
            </div>
            <div class="form-group col-md-3 readonly_area">
                <label for="fea_02">Feature 2:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['fea_02']; ?>">
            </div>
            <div class="form-group col-md-3 readonly_area">
                <label for="fea_03">Feature 3:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['fea_03']; ?>">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-3 readonly_area">
                <label for="download">Detail Information Download File</label><br/>
                <a href="downloads/<?php echo $product->product_info['download'];?> download"><button type="button" class="btn btn-success" name="download-btn" value="<?php echo $product->product_info['download']; ?>"><?php echo $product->product_info['download']; ?></button></a>
                //chưa download được
            </div>
        </div>
        <?php endforeach; ?>
    </form>
</div>
<?php $db->closeConn(); ?>
</body>
</html>
