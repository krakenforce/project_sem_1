<?php
    require_once '../../../includes/functions.php';
    $db = new Database();
    $products = Product::find_products_by_type('Cabinet AC');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cabinet Air Conditioner</title>
    <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="css/cabinet.css">
    <script src="../../../js/jquery.js"></script>
</head>
<body style="display: flex; flex-direction: column">
<?php require 'header.php' ?>
<section id="sec_02">
    <div id="slider">
        <div id="wowslider-container1">
            <div class="ws_images">
                <ul>
                    <li><img src="../images/slider/cabinet_slider/04.png" alt="" title="" id="wows1_0"></li>
                    <li><img src="../images/slider/cabinet_slider/05.png" alt="" title="" id="wows1_1"></li>
                    <li><img src="../images/slider/cabinet_slider/014.png" alt="" title="" id="wows1_2"></li>
                    <li><img src="../images/slider/cabinet_slider/024.png" alt="" title="" id="wows1_3"></li>
                    <li><img src="../images/slider/cabinet_slider/033.png" alt="" title="" id="wows1_4"></li>
                </ul>
            </div>
            <script src="js/cabinetSlide.js"></script>
        </div>
    </div>
    <div class="page_heading-text">
        <h1>Cabinet Air Conditioners</h1>
    </div>
</section>
<main onmouseup="footerOut()">
    <section id="sec_03">
        <div id="box_division">
            <ul>
                <?php foreach ($products as $product): ?>
                    <li>
                        <div class="product-Box_pD1 btn_details">
                            <a>
                                <div class="product-Box_image_pD1">
                                    <img src="../../../admin/<?php echo $product->product_info['image']; ?>" alt=""
                                         draggable="false">
                                </div>
                                <div class="product-Box_detail_pD1">
                                    <h2><?php echo $product->product_info['brand']; ?></h2>
                                    <h3><?php echo $product->product_info['name']; ?></h3>
                                </div>
                                <div class="product-Box_hover_pD1">
                                    <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                </div>
                            </a>
                            <input type="hidden" class="product_id" value="<?php echo $product->product_info['pro_id']; ?>">
                            <input type="hidden" class="product_download" value="../../../admin/<?php echo $product->product_info['download']; ?>">
                            <input type="hidden" class="product_image" value="../../../admin/<?php echo $product->product_info['image']; ?>">
                            <input type="hidden" class="product_price" value="<?php echo number_format($product->product_info['price']); ?>">
                            <input type="hidden" class="product_name" value="<?php echo $product->product_info['name']; ?>">
                            <input type="hidden" class="product_feature1" value="<?php echo $product->product_info['fea_01']; ?>">
                            <input type="hidden" class="product_feature2" value="<?php echo $product->product_info['fea_02']; ?>">
                            <input type="hidden" class="product_feature3" value="<?php echo $product->product_info['fea_03']; ?>">
                            <input type="hidden" class="product_specs1" value="<?php echo "Cooling (Btu/H): ".$product->product_info['cooling_cap']; ?>">
                            <input type="hidden" class="product_specs2" value="<?php echo "Power Input(W): ".$product->product_info['pw_input']; ?>">
                            <input type="hidden" class="product_specs3" value="<?php echo "EER: ".$product->product_info['eer']; ?>">
                        </div>
                    </li>
                <?php endforeach;
                    $db->closeConn(); ?>
            </ul>
        </div>
    <?php include '../../../includes/Product_Detail Box.php'; ?>
    <script src="js/scrolltotop.js"></script>
    <script src="../../../js/my.js"></script>
</main>
</body>
<?php require 'footer.php'; ?>
</html>