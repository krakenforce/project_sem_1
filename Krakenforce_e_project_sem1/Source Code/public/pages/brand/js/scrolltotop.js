    var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1e3,
        fadeduration: [500, 100]
    },
    controlHTML: '<img src="/Krakenforce_e_project_sem1/Source Code/public/pages/images/backtotop.png" />',
    controlattrs: {
        offsetx: 5,
        offsety: 5
    },
    anchorkeyword: "#top",
    state: {
        isvisible: !1,
        shouldvisible: !1
    },
    scrollup: function() {
        this.cssfixedsupport || this.$control.css({
            opacity: 0
        });
        var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0,
            this.$body.animate({
                scrollTop: t
            }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var t = jQuery(window)
            , o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx
            , s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: o + "px",
            top: s + "px"
        })
    },
    togglecontrol: function() {
        var t = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(),
            this.state.shouldvisible = t >= this.setting.startline ? !0 : !1,
            this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
                opacity: 1
            }, this.setting.fadeduration[0]),
                this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
                opacity: 0
            }, this.setting.fadeduration[1]),
                this.state.isvisible = !1)
    },
    init: function() {
        jQuery(document).ready(function(t) {
            var o = scrolltotop
                , s = document.all;
            o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest,
                o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"),
                o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({
                    position: o.cssfixedsupport ? "fixed" : "absolute",
                    bottom: o.controlattrs.offsety,
                    right: o.controlattrs.offsetx,
                    opacity: 0,
                    cursor: "pointer"
                }).attr({
                    title: "Scroll to Top"
                }).click(function() {
                    return o.scrollup(),
                        !1
                }).appendTo("body"),
            document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
                width: o.$control.width()
            }),
                o.togglecontrol(),
                t('a[href="' + o.anchorkeyword + '"]').click(function() {
                    return o.scrollup(),
                        !1
                }),
                t(window).bind("scroll resize", function(t) {
                    o.togglecontrol()
                })
        })
    }
};
scrolltotop.init();
function next_bt1() {
    document.getElementById("product_Slide-container_pD1").style.marginLeft = "-616px";
    document.getElementById("product_Slide-container_pD1").style.transition = "450ms ease"
}
function back_bt1() {
    document.getElementById("product_Slide-container_pD1").style.marginLeft = "0px";
    document.getElementById("product_Slide-container_pD1").style.transition = "450ms ease"
}
function next_bt2() {
    document.getElementById("product_Slide-container_pD2").style.marginLeft = "-616px";
    document.getElementById("product_Slide-container_pD2").style.transition = "450ms ease"
}
function back_bt2() {
    document.getElementById("product_Slide-container_pD2").style.marginLeft = "0px";
    document.getElementById("product_Slide-container_pD2").style.transition = "460ms ease"
}
function next_bt3() {
    document.getElementById("product_Slide-container_pD3").style.marginLeft = "-616px";
    document.getElementById("product_Slide-container_pD3").style.transition = "450ms ease"
}
function back_bt3() {
    document.getElementById("product_Slide-container_pD3").style.marginLeft = "0px";
    document.getElementById("product_Slide-container_pD3").style.transition = "450ms ease"
}
var link = document.getElementById("pdownloadFile");
var pImage = document.getElementById("pImage");
var pPrice = document.getElementById("pPrice");
var pName = document.getElementById("pName");
var pFeature01 = document.getElementById("pFeature01");
var pFeature02 = document.getElementById("pFeature02");
var pFeature03 = document.getElementById("pFeature03");
var pSpecs01 = document.getElementById("pSpecs01");
var pSpecs02 = document.getElementById("pSpecs02");
var pSpecs03 = document.getElementById("pSpecs03");

function pDetail_box_Close() {
    document.getElementById("sec_pDetail").style.visibility = "hidden";
    document.getElementById("pDetail_Container").style.opacity = "0";
    document.getElementById("pDetail_Container").style.transition = "450ms ease";
    document.getElementById("pDetail_Container").style.transform = "rotateY(90deg)";
    document.getElementById("pDetail_left_box").style.opacity = "0";
    document.getElementById("pDetail_left_box").style.transition = "450ms ease";
    document.getElementById("pDetail_left_box").style.transform = "rotateY(90deg)";
    document.getElementById("pImage").style.height = "";
    document.getElementById("pImage").style.width = "";
    document.getElementById("pImage").src = "";
    document.getElementById("pPrice").innerHTML = "&nbsp;";
    document.getElementById("pName").innerHTML = "&nbsp;";
    document.getElementById("pFeature01").innerHTML = "&nbsp;";
    document.getElementById("pFeature02").innerHTML = "&nbsp;";
    document.getElementById("pFeature03").innerHTML = "&nbsp;";
    document.getElementById("pSpecs01").innerHTML = "&nbsp;";
    document.getElementById("pSpecs02").innerHTML = "&nbsp;";
    document.getElementById("pSpecs03").innerHTML = "&nbsp;";
    enableScroll()
}
function boxEnable() {
    document.getElementById("sec_pDetail").style.visibility = "visible";
    document.getElementById("pDetail_Container").style.opacity = "1";
    document.getElementById("pDetail_Container").style.transition = "450ms ease";
    document.getElementById("pDetail_Container").style.transform = "rotateY(0deg)";
    document.getElementById("pDetail_left_box").style.opacity = "1";
    document.getElementById("pDetail_left_box").style.transition = "450ms ease";
    document.getElementById("pDetail_left_box").style.transform = "rotateY(0deg)"
}
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false
    }
}
function disableScroll() {
    if (window.addEventListener)
        window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null
}
function bNav_brands() {
    document.getElementById("brands_div").style.visibility = "visible";
    document.getElementById("brands_div").style.opacity = "1";
    document.getElementById("brands_div").style.marginTop = "-98px";
    document.getElementById("brands_div").style.transition = "250ms ease";
    document.getElementById("products_div").style.visibility = "hidden";
    document.getElementById("products_div").style.opacity = "0";
    document.getElementById("products_div").style.marginTop = "-110px";
    document.getElementById("products_div").style.transition = "150ms ease"
}
function bNav_products() {
    document.getElementById("products_div").style.visibility = "visible";
    document.getElementById("products_div").style.opacity = "1";
    document.getElementById("products_div").style.marginTop = "-98px";
    document.getElementById("products_div").style.transition = "250ms ease";
    document.getElementById("brands_div").style.visibility = "hidden";
    document.getElementById("brands_div").style.opacity = "0";
    document.getElementById("brands_div").style.marginTop = "-110px";
    document.getElementById("brands_div").style.transition = "150ms ease"
}
function footerOut() {
    document.getElementById("products_div").style.visibility = "hidden";
    document.getElementById("products_div").style.opacity = "0";
    document.getElementById("products_div").style.marginTop = "-110px";
    document.getElementById("products_div").style.transition = "150ms ease";
    document.getElementById("brands_div").style.visibility = "hidden";
    document.getElementById("brands_div").style.opacity = "0";
    document.getElementById("brands_div").style.marginTop = "-110px";
    document.getElementById("brands_div").style.transition = "150ms ease"
}
function Message() {
    alert("Thank You For Contacting Us")
}
