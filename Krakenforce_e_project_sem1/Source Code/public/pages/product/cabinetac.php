<?php
    require_once '../../../includes/functions.php';
    $db = new Database();
    $products = Product::find_products_by_type('Cabinet AC');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
    <link rel="stylesheet" href="css/cabinet.css">
    <script src="../../../js/jquery.js"></script>
</head>
<body style="display: flex; flex-direction: column">
<main onmouseup="footerOut()">
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
            <h1>Split Air Conditioners</h1>
        </div>
    </section>
    <section id="sec_03">
        <div id="box_division">
            <ul>
                <?php foreach ($products as $product): ?>
                    <li>
                        <div class="product-Box_pD1" onclick="Mitsubishi_Split_01()">
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
                        </div>
                    </li>
                <?php endforeach;
                    $db->closeConn(); ?>
            </ul>
        </div>
    </section>
    <section id="sec_pDetail">
        <div id="pDetail_left_box">
            <img src="../images/brands/icon-proddetails.png" alt="" draggable="false"/>
        </div>
        <div id="pDetail_Container">
            <div id="pDetail-close" onClick="pDetail_box_Close()"></div>
            <div id="pDetail_image">
                <img id="pImage" src="" alt="" draggable="false"/>
            </div>
            <div id="pDetail_price">
                <div class="pDetail_price-icon_box">
                    <img src="../images/brands/price_icon.png" alt="" draggable="false"/>
                </div>
                <div class="pDetail_price-detail">
                    <span id="pPrice" class="price">&nbsp;</span>
                </div>
            </div>

            <div id="pDetail_download">
                <div class="pDetail_download-icon_box">
                    <img src="../images/brands/download_icon.png" alt="" draggable="false"/>
                </div>
                <div class="pDetail_download-detail">
                    <a id="pdownloadFile" href="" class="download download-highlight">Download</a>
                </div>
            </div>

            <div id="pDetail_compare">
                <div class="pDetail_compare-icon_box">
                    <img src="../images/brands/compare_icon.png" alt="" draggable="false"/>
                </div>
                <div class="pDetail_compare-detail">
                    <a href='../compare.php' class='compare compare-highlight'>Compare</a>
                </div>
            </div>
            <div class="pDetail_name-detail">
                <span id="pName" class="name">&nbsp;</span>
            </div>
            <div class="pDetail_features-head-box">
                <span class="features-head">Features</span>
            </div>
            <div class="pDetail_features-detail-box">
                <div class="features-detail">
                    <span id="pFeature01">&nbsp;</span>
                    <span id="pFeature02">&nbsp;</span>
                    <span id="pFeature03">&nbsp;</span>
                </div>
            </div>
            <div class="pDetail_specs-head-box">
                <span class="specs-head">Specifications</span>
            </div>
            <div class="pDetail_specs-detail-box">
                <div class="specs-detail">
                    <span id="pSpecs01">&nbsp;</span>
                    <span id="pSpecs02">&nbsp;</span>
                    <span id="pSpecs03">&nbsp;</span>
                </div>
            </div>
        </div>
    </section>
    <script src="../brand/js/detailBox.js"></script>
    <script src="js/scrolltotop.js"></script>
</main>
</body>
<?php require 'footer.php' ?>
</html>