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
            specs3 = $(this).find('.product_specs3').val();

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
        disableScroll()
    });
});