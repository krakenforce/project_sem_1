$(document).ready(function(){
    $('div.btn_details').on("click", function () {
        var image = $(this).find('.product_image').val(),
            download = $(this).find('.product_download').val(),
            price = $(this).find('.product_price').val(),
            name = $(this).find('.product_name').val(),
            feature1 = $(this).find('.product_feature1').val(),
            feature2 = $(this).find('.product_feature2').val(),
            feature3 = $(this).find('.product_feature3').val(),
            specs1 = $(this).find('.product_specs1').val(),
            specs2 = $(this).find('.product_specs2').val(),
            specs3 = $(this).find('.product_specs3').val(),
            product_id = $(this).find('.product_id').val();

        boxEnable();
        link.setAttribute("href", download);
        pImage.src = image;
        pImage.style.width = "auto";
        pImage.style.maxHeight = "200px";
        pPrice.innerHTML = price;
        pName.innerHTML = name;
        pFeature01.innerHTML = feature1;
        pFeature02.innerHTML = feature2;
        pFeature03.innerHTML = feature3;
        pSpecs01.innerHTML = specs1;
        pSpecs02.innerHTML = specs2;
        pSpecs03.innerHTML = specs3;
        pCompareLink.setAttribute("href", "../compare.php?pro_id="+product_id);
        disableScroll()
    });

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
