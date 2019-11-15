<?php
    require_once('../../../includes/functions.php');
    $db = new Database();
    $products = Product::find_product_by_brand_and_type('LG', 'Split AC');
    $products2 = Product::find_product_by_brand_and_type('LG', 'Cabinet AC');
    $products3 = Product::find_product_by_brand_and_type('LG', 'Cassette AC');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LG</title>
    <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <script src="../../../js/jquery.js"></script>
</head>
<body>
<main onmouseup="footerOut()">
    <?php require 'header.php' ?>
    <section id="sec_02">
        <div id="slider">
            <div class="image_slider">
                <div id="left_image_slider">
                    <div id="wowslider-container1">
                        <div class="ws_images">
                            <ul>
                                <li><img src="../images/slider/lg_slider/012.png" alt="" title="" id="wows1_0">
                                </li>
                                <li><img src="../images/slider/lg_slider/022.png" alt="" title="" id="wows1_1">
                                </li>
                                <li><img src="../images/slider/lg_slider/032.png" alt="" title="" id="wows1_2">
                                </li>
                                <li><img src="../images/slider/lg_slider/042.png" alt="" title="" id="wows1_3">
                                </li>
                                <li><img src="../images/slider/lg_slider/052.png" alt="" title="" id="wows1_4">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <script src="js/lgSlider.js"></script>
                </div>
                <div id="right_image_slider">
                    <img src="../images/slider/lg_slider/lg01.png" alt="" draggable="false">
                </div>
            </div>
        </div>
    </section>
    <section id="sec_03">
        <div class="products_data_pD1" id="pD1">
            <div class="subHeading_pD1">
                <h2>Split Air Conditioners</h2>
            </div>
            <div class="product-Box_division_pD1">
                <div class="Box-BACK_button_pD1" onclick="back_bt1()">
                    <img src="../images/brands/box-back_icon.png" alt="" draggable="false">
                </div>
                <div class="Box-NEXT_button_pD1" onclick="next_bt1()">
                    <img src="../images/brands/box-next_icon.png" alt="" draggable="false">
                </div>

                <div class="product-Box_display_pD1">
                    <div class="display-container_pD1" id="product_Slide-container_pD1">
                        <?php foreach ($products as $product): ?>
                            <div class="product-Box_pD1">
                                <div class="product-Box_image_pD1">
                                    <img src="../../../admin/<?php echo $product->product_info['image']; ?>" alt=""
                                         draggable="false">
                                </div>
                                <div class="product-Box_detail_pD1">
                                    <h2><?php echo $product->product_info['brand']; ?></h2>
                                    <h3><?php echo $product->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD1 btn_details">
                                        <input type="hidden" class="product_id" value="<?php echo $product->product_info['pro_id']; ?>">
                                        <input type="hidden" class="product_download" value="../../../admin/<?php echo $product->product_info['download']; ?>">
                                        <input type="hidden" class="product_image" value="../../../admin/<?php echo $product->product_info['image']; ?>">
                                        <input type="hidden" class="product_price" value="<?php echo number_format($product->product_info['price']); ?>">
                                        <input type="hidden" class="product_name" value="<?php echo $product->product_info['name']; ?>">
                                        <input type="hidden" class="product_feature1" value="<?php echo $product->product_info['fea_01']; ?>">
                                        <input type="hidden" class="product_feature2" value="<?php echo $product->product_info['fea_02']; ?>">
                                        <input type="hidden" class="product_feature3" value="<?php echo $product->product_info['fea_03']; ?>">
                                        <input type="hidden" class="product_specs1" value="<?php echo "Cooling (Btu/H): ". $product->product_info['cooling_cap']; ?>">
                                        <input type="hidden" class="product_specs2" value="<?php echo "Power Input(W): ".$product->product_info['pw_input']; ?>">
                                        <input type="hidden" class="product_specs3" value="<?php echo "EER: ".$product->product_info['eer']; ?>">
                                        <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

            </div>
        </div>
        <div class="products_data_pD2" id="pD2">
            <div class="subHeading_pD2">
                <h2>Cabinet Air Conditioners</h2>
            </div>
            <div class="product-Box_division_alter_pD2">
                <div class="Box-BACK_button_pD2" onclick="back_bt2()">
                    <img src="../images/brands/box-back_icon.png" alt="" draggable="false">
                </div>
                <div class="Box-NEXT_button_pD2" onclick="next_bt2()">
                    <img src="../images/brands/box-next_icon.png" alt="" draggable="false">
                </div>
                <div class="product-Box_display_pD2">
                    <div class="display-container_pD2" id="product_Slide-container_pD2">
                        <?php foreach ($products2 as $product2): ?>
                            <div class="product-Box_pD2">
                                <div class="product-Box_image_pD2">
                                    <img src="../../../admin/<?php echo $product2->product_info['image']; ?>" alt=""
                                         draggable="false">
                                </div>
                                <div class="product-Box_detail_pD2">
                                    <h2><?php echo $product2->product_info['brand']; ?></h2>
                                    <h3><?php echo $product2->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD2 btn_details">
                                        <input type="hidden" class="product_id" value="<?php echo $product2->product_info['pro_id']; ?>">
                                        <input type="hidden" class="product_download" value="../../../admin/<?php echo $product2->product_info['download']; ?>">
                                        <input type="hidden" class="product_image" value="../../../admin/<?php echo $product2->product_info['image']; ?>">
                                        <input type="hidden" class="product_price" value="<?php echo number_format($product2->product_info['price']); ?>">
                                        <input type="hidden" class="product_name" value="<?php echo $product2->product_info['name']; ?>">
                                        <input type="hidden" class="product_feature1" value="<?php echo $product2->product_info['fea_01']; ?>">
                                        <input type="hidden" class="product_feature2" value="<?php echo $product2->product_info['fea_02']; ?>">
                                        <input type="hidden" class="product_feature3" value="<?php echo $product2->product_info['fea_03']; ?>">
                                        <input type="hidden" class="product_specs1" value="<?php echo "Cooling (Btu/H): ".$product2->product_info['cooling_cap']; ?>">
                                        <input type="hidden" class="product_specs2" value="<?php echo "Power Input(W): ".$product2->product_info['pw_input']; ?>">
                                        <input type="hidden" class="product_specs3" value="<?php echo "EER: ".$product2->product_info['eer']; ?>">
                                        <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="products_data_pD3" id="pD3">
            <div class="subHeading_pD3">
                <h2>Cassette Air Conditioners</h2>
            </div>
            <div class="product-Box_division_pD3">
                <div class="Box-BACK_button_pD3" onclick="back_bt3()">
                    <img src="../images/brands/box-back_icon.png" alt="" draggable="false">
                </div>
                <div class="Box-NEXT_button_pD3" onclick="next_bt3()">
                    <img src="../images/brands/box-next_icon.png" alt="" draggable="false">
                </div>
                <div class="product-Box_display_pD3">
                    <div class="display-container_pD3" id="product_Slide-container_pD3">
                        <?php foreach ($products3 as $product3): ?>
                            <div class="product-Box_pD3">
                                <div class="product-Box_image_pD3">
                                    <img src="../../../admin/<?php echo $product3->product_info['image']; ?>" alt=""
                                         draggable="false">
                                </div>
                                <div class="product-Box_detail_pD3">
                                    <h2><?php echo $product3->product_info['brand']; ?></h2>
                                    <h3><?php echo $product3->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD3 btn_details">
                                        <input type="hidden" class="product_id" value="<?php echo $product3->product_info['pro_id']; ?>">
                                        <input type="hidden" class="product_download" value="../../../admin/<?php echo $product3->product_info['download']; ?>">
                                        <input type="hidden" class="product_image" value="../../../admin/<?php echo $product3->product_info['image']; ?>">
                                        <input type="hidden" class="product_price" value="<?php echo number_format($product3->product_info['price']); ?>">
                                        <input type="hidden" class="product_name" value="<?php echo $product3->product_info['name']; ?>">
                                        <input type="hidden" class="product_feature1" value="<?php echo $product3->product_info['fea_01']; ?>">
                                        <input type="hidden" class="product_feature2" value="<?php echo $product3->product_info['fea_02']; ?>">
                                        <input type="hidden" class="product_feature3" value="<?php echo $product3->product_info['fea_03']; ?>">
                                        <input type="hidden" class="product_specs1" value="<?php echo "Cooling (Btu/H): ".$product3->product_info['cooling_cap']; ?>">
                                        <input type="hidden" class="product_specs2" value="<?php echo "Power Input(W): ".$product3->product_info['pw_input']; ?>">
                                        <input type="hidden" class="product_specs3" value="<?php echo "EER: ".$product3->product_info['eer']; ?>">
                                        <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php $db->closeConn(); ?>
    <?php include '../../../includes/Product_Detail Box.php'; ?>
    <?php require 'footer.php'; ?>
    <script src="js/scrolltotop.js"></script>
    <script src="../../../js/my.js"></script>
</main>
</body>
</html>