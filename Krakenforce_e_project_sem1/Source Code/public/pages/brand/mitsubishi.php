<?php
    require_once('../../../includes/functions.php');
    $db = new Database();
    
    $products = Product::find_product_by_brand_and_type('Mitsubishi', 'Split AC');
    $products2 = Product::find_product_by_brand_and_type('Mitsubishi', 'Cabinet AC');
    $products3 = Product::find_product_by_brand_and_type('Mitsubishi', 'Cassette AC');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mitsubishi</title>
    <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
    <script src="../../../js/jquery.js"></script>
</head>
<main onmouseup="footerOut()">
    <?php require 'header.php' ?>
    <section id="sec_02">
        <div id="slider">
            <div class="image_slider">
                <div id="left_image_slider">
                    <div id="wowslider-container1" class="ws_gestures">
                        <div class="ws_images">
                            <ul>
                                <li><img src="../images/slider/mitsubishi_slider/012.png" alt="" title="" id="wows1_0">
                                </li>
                                <li><img src="../images/slider/mitsubishi_slider/022.png" alt="" title="" id="wows1_1">
                                </li>
                                <li><img src="../images/slider/mitsubishi_slider/032.png" alt="" title="" id="wows1_2">
                                </li>
                                <li><img src="../images/slider/mitsubishi_slider/042.png" alt="" title="" id="wows1_3">
                                </li>
                                <li><img src="../images/slider/mitsubishi_slider/052.png" alt="" title="" id="wows1_4">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <script src="js/Slider.js"></script>
                </div>
                <div id="right_image_slider"><img src="../images/slider/mitsubishi_slider/mitsubishi01.png" alt=""
                                                  draggable="false"></div>
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
                            <div class="product-Box_pD1">-->
                                <div class="product-Box_image_pD1">
                                    <img src="<?php echo $product->product_info['image']; ?>" alt="" draggable="false">
                                </div>
                                <div class="product-Box_detail_pD1">
                                    <h2><?php echo $product->product_info['brand']; ?></h2>
                                    <h3><?php echo $product->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD1" onclick="Mitsubishi_Split_01()">
                                        <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
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
                                    <img src="<?php echo $product2->product_info['image']; ?>" alt="" draggable="false">
                                </div>
                                <div class="product-Box_detail_pD2">
                                    <h2><?php echo $product2->product_info['brand']; ?></h2>
                                    <h3><?php echo $product2->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD2" onclick="Mitsubishi_Cabinet_01()">
                                        <img src="../images/brands/pbox_search-icon.png" alt="" draggable="false">
                                    </div>
                                </a>
                            </div>
                        <?php endforeach;?>
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
                                    <img src="<?php echo $product3->product_info['image']; ?>" alt="" draggable="false">
                                </div>
                                <div class="product-Box_detail_pD3">
                                    <h2><?php echo $product3->product_info['brand']; ?></h2>
                                    <h3><?php echo $product3->product_info['name']; ?></h3>
                                </div>
                                <a>
                                    <div class="product-Box_hover_pD3" onclick="Mitsubishi_Cassette_01()">
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
    <?php include './Product_Detail Box.php' ?>
    <?php require 'footer.php' ?>

    <script src="js/scrolltotop.js">window.initdata = {}</script>
    <script src="js/detailBox.js"></script>
</main>

</html>