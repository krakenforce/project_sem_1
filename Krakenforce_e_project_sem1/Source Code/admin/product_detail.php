<?php $title = "Product Details"; include_once 'header.php'; ?>
<?php
    $db = new Database();
    $pro_id = $_GET['pro_id'];
    $product = Product::find_product_by_id($pro_id);
    //$products = Product::find_all_products();
?>

<div class="container-fluid" id="vm-form">
    <div class="justify-content-center d-flex">
    </div>
    <a href="admin_index.php"><button class="btn btn-danger">x</button></a>
    <form action="#" method="post" enctype="multipart/form-data" class="bg-warning" style="margin: 50px;padding: 30px;border-radius: 5px;">
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
            <div class="form-group col-md-2 readonly_area">
                <label for="brand">Price:</label><br/>
                <input type="text" name="" id="" value="<?php echo $product->product_info['price']; ?>">
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
                <input  value="<?php echo $product->product_info['download']; ?>">
            </div>
        </div>

    </form>
    <a href="update.php?pro_id=<?= $product->product_info['pro_id']; ?>"><button style="margin-left:50px" class="btn btn-success">Update</button> </a>
</div>
<?php $db->closeConn(); ?>
</body>
</html>
