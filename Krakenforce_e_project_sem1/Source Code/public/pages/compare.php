<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
    <link rel="stylesheet" href="../../css/compare.css">
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
                    <select id="option1" onchange="Data1()">
                        <option>---------------Select Product---------------</option>
                        <option disabled></option>
                        <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mitsubishi</option>
                        <option disabled>-------------------------------------------------</option>
                        <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------Split------------</option>
                        <option>1 Ton Inverter Series HJ35VA</option>
                        <option>1.5 Ton Inverter Series HJ50VA</option>
                    </select>
                </label>
                <label>
                    <select id="option2" onchange="Data2()">
                        <option>---------------Select Product---------------</option>
                        <option disabled></option>
                        <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mitsubishi</option>
                        <option disabled>-------------------------------------------------</option>
                        <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------Split------------</option>
                        <option>1 Ton Inverter Series HJ35VA</option>
                        <option>1.5 Ton Inverter Series HJ50VA</option>
                    </select>
                </label>
            </div>
            <div class="compare_image_bar">
                <div class="compare_Image_Box">
                    <img id="image1" src="" alt="" draggable="false">
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
                                <div class="BGstyle01" id="brand1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="model1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="type1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="color1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="ton1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="cool1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="heat1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="power1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle01" id="eer1"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="BGstyle02" id="price1"></div>
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
</main>
</body>
</html>