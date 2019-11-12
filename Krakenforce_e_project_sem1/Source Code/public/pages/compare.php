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
    <title>Document</title>
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
                        <option>---------------Select Product---------------</option>
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
    <script src="brand/js/my.js"></script>
    <script>
        $(document).ready(function() {
            $('select#option1').on('change', function () {
                var option2 = document.getElementById("option2").value;
                var option1 = document.getElementById("option1").value;
                console.log(option1);
                console.log(option2);
                var image1 = document.getElementById("image1");
                var brand1 = document.getElementById("brand1");
                var model1 = document.getElementById("model1");
                var type1 = document.getElementById("type1");
                var color1 = document.getElementById("color1");
                var ton1 = document.getElementById("ton1");
                var cool1 = document.getElementById("cool1");
                var heat1 = document.getElementById("heat1");
                var power1 = document.getElementById("power1");
                var eer1 = document.getElementById("eer1");
                var price1 = document.getElementById("price1");
                if (option1 == option2) {
                    alert("PLEASE CHOOSE DIFFRENT ITEM -- xin chọn sản phẩm khác!");
                    image1.style.width = "";
                    image1.style.height = "";
                    image1.src = "";
                    brand1.innerHTML = "";
                    model1.innerHTML = "";
                    type1.innerHTML = "";
                    color1.innerHTML = "";
                    ton1.innerHTML = "";
                    cool1.innerHTML = "";
                    heat1.innerHTML = "";
                    power1.innerHTML = "";
                    eer1.innerHTML = "";
                    price1.innerHTML = "";
                    document.getElementById("option1").selectedIndex = "0"
                } else {
                    product_id = $(this).children("option:selected").val();
                    $.ajax({
                        url: "../../includes/data_display.php",
                        dataType: 'json',
                        method: "GET",
                        data: {product_id: product_id},
                        success: function (data) {
                            image1.style.maxWidth = "200px";
                            image1.style.height = "50px";
                            image1.src = "../../admin/" + data.product_info['image'];
                            image1.style.height = "140px";
                            brand1.innerHTML = data.product_info['brand'];
                            model1.innerHTML = data.product_info['model'];
                            type1.innerHTML = data.product_info['type'];
                            color1.innerHTML = data.product_info['color'];
                            ton1.innerHTML = data.product_info['ton'];
                            cool1.innerHTML = data.product_info['cooling_cap'];
                            heat1.innerHTML = data.product_info['heating_cap'];
                            power1.innerHTML = data.product_info['pw_input'];
                            eer1.innerHTML = data.product_info['eer'];
                            price1.innerHTML = data.product_info['price'];
                        }
                    });
                }
            });

            $('select#option2').on('change', function () {
                var option2 = document.getElementById("option2").value;
                var option1 = document.getElementById("option1").value;
                var image2 = document.getElementById("image2");
                var brand2 = document.getElementById("brand2");
                var model2 = document.getElementById("model2");
                var type2 = document.getElementById("type2");
                var color2 = document.getElementById("color2");
                var ton2 = document.getElementById("ton2");
                var cool2 = document.getElementById("cool2");
                var heat2 = document.getElementById("heat2");
                var power2 = document.getElementById("power2");
                var eer2 = document.getElementById("eer2");
                var price2 = document.getElementById("price2");
                if (option1 == option2) {
                    alert("PLEASE CHOOSE DIFFRENT ITEM! -- xin chọn sản phẩm khác!");
                    image2.style.width = "";
                    image2.style.height = "";
                    image2.src = "";
                    brand2.innerHTML = "";
                    model2.innerHTML = "";
                    type2.innerHTML = "";
                    color2.innerHTML = "";
                    ton2.innerHTML = "";
                    cool2.innerHTML = "";
                    heat2.innerHTML = "";
                    power2.innerHTML = "";
                    eer2.innerHTML = "";
                    price2.innerHTML = "";
                    document.getElementById("option2").selectedIndex = "0"
                } else {
                    product_id = $(this).children("option:selected").val();
                    $.ajax({
                        url: "../../includes/data_display.php",
                        dataType: 'json',
                        method: "GET",
                        data: {product_id: product_id},
                        success: function (data) {
                            image2.style.maxWidth = "200px";
                            image2.style.height = "50px";
                            image2.src = "../../admin/" + data.product_info['image'];
                            image2.style.height = "140px";
                            brand2.innerHTML = data.product_info['brand'];
                            ;
                            model2.innerHTML = data.product_info['model'];
                            type2.innerHTML = data.product_info['type'];
                            color2.innerHTML = data.product_info['color'];
                            ton2.innerHTML = data.product_info['ton'];
                            cool2.innerHTML = data.product_info['cooling_cap'];
                            heat2.innerHTML = data.product_info['heating_cap'];
                            power2.innerHTML = data.product_info['pw_input'];
                            eer2.innerHTML = data.product_info['eer'];
                            price2.innerHTML = data.product_info['price'];
                        }
                    });
                }
            });
        });
    </script>
</main>
</body>
</html>