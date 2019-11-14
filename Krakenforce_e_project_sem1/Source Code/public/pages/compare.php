<?php
    require_once '../../includes/functions.php';
    $db = new Database();
    $products = Product::find_all_products();

    if(isset($_GET['pro_id'])){
        $id = $_GET['pro_id'];
        $chosen_product = Product::find_product_by_id($id);
    };
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Compare</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
    <link rel="stylesheet" href="../../css/compare.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="../../js/compare.js"></script>
</head>
<body>
<main onmouseup="footerOut()">
    <?php require 'header.php' ?>
    <section id="sec_02">
        <div id="banner">
            <img src="images/compare_banner.png" alt="" draggable="false">
        </div>
    </section>
    <section id="sec_03">
        <div id="compare_comtainer">
            <div class="compare-dropmenu_bar">
                <label>
                    <select id="option1">
                        <option><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['name'] : "---------------Select Product---------------"; ?></option>
                        <option disabled></option>
                        <?php foreach ($products as $product): ?>
                            <option value="<?php echo $product->product_info['pro_id']; ?>"><?php echo $product->product_info['name']; ?></option>
                        <?php endforeach;
                            $db->closeConn(); ?>
                    </select>
                </label>
                <label>
                    <select id="option2" onchange="Data2()">
                        <option>---------------Select Product---------------</option>
                        <option disabled></option>
                        <?php foreach ($products as $product): ?>
                            <option value="<?php echo $product->product_info['pro_id']; ?>"><?php echo $product->product_info['name']; ?></option>
                        <?php endforeach;
                            $db->closeConn(); ?>
                    </select>
                </label>
            </div>
            <div class="compare_image_bar">
                <div class="compare_Image_Box">
                    <img id="image1" src="<?php echo isset($_GET['pro_id'])? '../../admin/'.$chosen_product->product_info['image'] : ""; ?>" style="max-width: 250px; height: 140px;" alt="" draggable="false">
                </div>
                <div class="compare_Image_Box">
                    <img id="image2" src="" alt="" draggable="false">
                </div>
                <div></div>
            </div>
            <div class="compare_detail_box">
                <div class="Detail_C1">
                    <table id="table01">
                        <tbody>
                        <tr>
                            <td>
                                <div>
                                    Brand
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Model</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Type</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Color</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Ton</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Cooling Capacity</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Heating Capacity</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Power Input</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>EER</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>Price</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="Detail_C2">
                    <table id="table02">
                        <tbody>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="brand1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['brand'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="model1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['model'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="type1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['type'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="color1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['color'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="ton1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['ton'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="cool1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['cooling_cap'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="heat1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['heating_cap'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="power1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['pw_input'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="eer1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['eer'] : ""; ?></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="price1"><?php echo isset($_GET['pro_id'])? $chosen_product->product_info['price'] : ""; ?></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="Detail_C3">
                    <table id="table03">
                        <tbody>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="brand2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="model2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="type2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="color2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="ton2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="cool2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="heat2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="power2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="eer2"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="price2"></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <?php require 'footer.php' ?>
    <script src="../../js/my.js"></script>
</main>
</body>
</html>