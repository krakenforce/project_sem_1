<?php ?>
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
<script src="js/detailBox.js"></script>