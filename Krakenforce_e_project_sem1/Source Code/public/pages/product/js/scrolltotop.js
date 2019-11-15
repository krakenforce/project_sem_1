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
function Heading_bt1() {
    document.getElementById("pD1").style.height = "450px";
    document.getElementById("pD1").style.transition = "450ms ease"
}
function next_bt1() {
    document.getElementById("product_Slide-container_pD1").style.marginLeft = "-643px";
    document.getElementById("product_Slide-container_pD1").style.transition = "450ms ease"
}
function back_bt1() {
    document.getElementById("product_Slide-container_pD1").style.marginLeft = "-8px";
    document.getElementById("product_Slide-container_pD1").style.transition = "460ms ease"
}
function Heading_bt2() {
    document.getElementById("pD2").style.height = "450px";
    document.getElementById("pD2").style.transition = "450ms ease"
}
function next_bt2() {
    document.getElementById("product_Slide-container_pD2").style.marginLeft = "-643px";
    document.getElementById("product_Slide-container_pD2").style.transition = "450ms ease"
}
function back_bt2() {
    document.getElementById("product_Slide-container_pD2").style.marginLeft = "-8px";
    document.getElementById("product_Slide-container_pD2").style.transition = "460ms ease"
}
function Heading_bt3() {
    document.getElementById("pD3").style.height = "450px";
    document.getElementById("pD3").style.transition = "450ms ease"
}
function next_bt3() {
    document.getElementById("product_Slide-container_pD3").style.marginLeft = "-643px";
    document.getElementById("product_Slide-container_pD3").style.transition = "450ms ease"
}
function back_bt3() {
    document.getElementById("product_Slide-container_pD3").style.marginLeft = "-8px";
    document.getElementById("product_Slide-container_pD3").style.transition = "460ms ease"
}
function Heading_bt4() {
    document.getElementById("pD4").style.height = "450px";
    document.getElementById("pD4").style.transition = "450ms ease"
}
function next_bt4() {
    document.getElementById("product_Slide-container_pD4").style.marginLeft = "-643px";
    document.getElementById("product_Slide-container_pD4").style.transition = "450ms ease"
}
function back_bt4() {
    document.getElementById("product_Slide-container_pD4").style.marginLeft = "-8px";
    document.getElementById("product_Slide-container_pD4").style.transition = "460ms ease"
}
function Heading_bt5() {
    document.getElementById("pD5").style.height = "450px";
    document.getElementById("pD5").style.transition = "450ms ease"
}
function next_bt5() {
    document.getElementById("product_Slide-container_pD5").style.marginLeft = "-643px";
    document.getElementById("product_Slide-container_pD5").style.transition = "450ms ease"
}
function back_bt5() {
    document.getElementById("product_Slide-container_pD5").style.marginLeft = "-8px";
    document.getElementById("product_Slide-container_pD5").style.transition = "460ms ease"
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
function Mitsubishi_Split_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Split/01.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Split/01.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "81,000/-";
    pName.innerHTML = "Mitsubishi 1 Ton Inverter Series HJ35VA";
    pFeature01.innerHTML = "Compact Design";
    pFeature02.innerHTML = "3D airflow";
    pFeature03.innerHTML = "Rounding Natural Air";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 4700";
    pSpecs03.innerHTML = "EER : 6.2-2.75";
    disableScroll()
}
function Mitsubishi_Split_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Split/02.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Split/02.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "104,000/-";
    pName.innerHTML = "Mitsubishi 1.5 Ton Inverter Series HJ50VA";
    pFeature01.innerHTML = "Powerful cooling";
    pFeature02.innerHTML = "Concealed LED display";
    pFeature03.innerHTML = "Child lock";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 17000";
    pSpecs02.innerHTML = "Power Input (W) : 4900";
    pSpecs03.innerHTML = "EER : 7.51";
    disableScroll()
}
function Mitsubishi_Split_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Split/03.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Split/03.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "148,000/-";
    pName.innerHTML = "Mitsubishi 2 Ton Inverter Series HJ71VA";
    pFeature01.innerHTML = "Intelligent airflow";
    pFeature02.innerHTML = "Econo Cool";
    pFeature03.innerHTML = "New LEV Control";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 35000";
    pSpecs02.innerHTML = "Power Input (W) : 3500";
    pSpecs03.innerHTML = "EER : 6.4-2.40";
    disableScroll()
}
function Mitsubishi_Split_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Split/04.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Split/04.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "48,000/-";
    pName.innerHTML = "Mitsubishi SRK 13CJK Heavy Industries 1 Ton";
    pFeature01.innerHTML = "Super quiet mode";
    pFeature02.innerHTML = "Comfortalble sleep mode";
    pFeature03.innerHTML = "Evaporator self-cleaning";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 22000";
    pSpecs02.innerHTML = "Power Input (W) : 3100";
    pSpecs03.innerHTML = "EER : 5.0-3.50";
    disableScroll()
}
function Mitsubishi_Split_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Split/05.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Split/05.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "48,500/-";
    pName.innerHTML = "Mitsubishi MS-13 VC Mr Slim 1 Ton";
    pFeature01.innerHTML = "Auto mode";
    pFeature02.innerHTML = "Ultra Thin Design";
    pFeature03.innerHTML = "High Efficiency Filter";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 31000";
    pSpecs02.innerHTML = "Power Input (W) : 1200";
    pSpecs03.innerHTML = "EER : 6.0-3.50";
    disableScroll()
}
function Mitsubishi_Cabinet_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cabinet/01.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "121,499/-";
    pName.innerHTML = "Mitsubishi PS 3 2 Ton - Cabinet";
    pFeature01.innerHTML = "Dry function";
    pFeature02.innerHTML = "Wide voltage";
    pFeature03.innerHTML = "Active PFC technology";
    pSpecs01.innerHTML = "Cooling (Btu/h) :52000";
    pSpecs02.innerHTML = "Power Input (W) : 4100";
    pSpecs03.innerHTML = "EER : 7.2-4.35";
    disableScroll()
}
function Mitsubishi_Cabinet_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cabinet/02.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "251,999/-";
    pName.innerHTML = "Mitsubishi 4 TON PS SERIES 5JJ";
    pFeature01.innerHTML = "Anti dust";
    pFeature02.innerHTML = "24 hours timer";
    pFeature03.innerHTML = "Independent Dehumidification";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 44000";
    pSpecs02.innerHTML = "Power Input (W) : 5100";
    pSpecs03.innerHTML = "EER : 8.2-4.10";
    disableScroll()
}
function Mitsubishi_Cabinet_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cabinet/03.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cabinet/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "229,990/-";
    pName.innerHTML = "Mitsubishi PS-3 2.5 Ton Semi Inverter";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control Pocket";
    pFeature03.innerHTML = "Three Minutes Protection";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 39000";
    pSpecs02.innerHTML = "Power Input (W) : 4500";
    pSpecs03.innerHTML = "EER : 7.1-3.10";
    disableScroll()
}
function Mitsubishi_Cabinet_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cabinet/04.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cabinet/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "224,999/-";
    pName.innerHTML = "Mitsubishi 4 Ton PS Series 5JJ";
    pFeature01.innerHTML = "Reserved Air Outlet";
    pFeature02.innerHTML = "State of the Art";
    pFeature03.innerHTML = "Air Vane Technology";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 35000";
    pSpecs02.innerHTML = "Power Input (W) : 3400";
    pSpecs03.innerHTML = "EER : 6.2-3.10";
    disableScroll()
}
function Mitsubishi_Cabinet_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cabinet/05.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cabinet/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "298,990/-";
    pName.innerHTML = "Mitsubishi PS3CFO Inverter 3.5 Ton ";
    pFeature01.innerHTML = "Air Vane Technology";
    pFeature02.innerHTML = "Auto Swing";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 41000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 7.6-2.10";
    disableScroll()
}
function Mitsubishi_Cassette_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cassette/01.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cassette/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "127,600/-";
    pName.innerHTML = "Mitsubishi FDTC25VF";
    pFeature01.innerHTML = "Precise system control technology";
    pFeature02.innerHTML = "Intelligent airflow";
    pFeature03.innerHTML = "Friendly referigerant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 6100";
    pSpecs03.innerHTML = "EER : 8.2-3.45";
    disableScroll()
}
function Mitsubishi_Cassette_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cassette/02.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cassette/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "85,300/-";
    pName.innerHTML = "Mitsubishi FDTW56KXE6F VRF 2-Way";
    pFeature01.innerHTML = "Auto restart";
    pFeature02.innerHTML = "High Temperature Stable";
    pFeature03.innerHTML = "Movable Baffle";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 34000";
    pSpecs02.innerHTML = "Power Input (W) : 4900";
    pSpecs03.innerHTML = "EER : 7.3-2.9";
    disableScroll()
}
function Mitsubishi_Cassette_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cassette/03.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cassette/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "80,400/-";
    pName.innerHTML = "Mitsubishi FDTC45KXE6F VRF Compact";
    pFeature01.innerHTML = "Compact Design";
    pFeature02.innerHTML = "3D airflow";
    pFeature03.innerHTML = "Rounding Natural Air";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 55000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 6.9-4.1";
    disableScroll()
}
function Mitsubishi_Cassette_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cassette/04.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "163,400/-";
    pName.innerHTML = "Mitsubishi FDTW140KXE6F VRF 2-Way";
    pFeature01.innerHTML = "Built In Drain Pump";
    pFeature02.innerHTML = "Wide voltage ";
    pFeature03.innerHTML = "50% Power saving";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 61000";
    pSpecs02.innerHTML = "Power Input (W) : 4100";
    pSpecs03.innerHTML = "EER : 7.5-3.2";
    disableScroll()
}
function Mitsubishi_Cassette_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Mitsubishi/Cassette/05.docx");
    pImage.src = "../Images/Brands/Mitsubishi/Cassette/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "122,400/-";
    pName.innerHTML = "Mitsubishi FDTS71KXE6F VRF 1-Way";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Rust Resistant Cabinet";
    pFeature03.innerHTML = "Reserved Air Outlet";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 54000";
    pSpecs02.innerHTML = "Power Input (W) : 5600";
    pSpecs03.innerHTML = "EER : 8.1-4.3";
    disableScroll()
}
function Carrier_Split_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Split/01.docx");
    pImage.src = "../Images/Brands/Carrier/Split/01.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "146,300/-";
    pName.innerHTML = "Carrier CACI12OC3I6 1 Ton";
    pFeature01.innerHTML = "Antifouling";
    pFeature02.innerHTML = "Rounding Natural Air";
    pFeature03.innerHTML = "Compact Design";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 4200";
    pSpecs03.innerHTML = "EER : 8.1-3.85";
    disableScroll()
}
function Carrier_Split_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Split/02.docx");
    pImage.src = "../Images/Brands/Carrier/Split/02.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "156,800/-";
    pName.innerHTML = "Carrier CACS18SU3C3 1.5 Ton";
    pFeature01.innerHTML = "Power mode";
    pFeature02.innerHTML = "Intelligent airflow";
    pFeature03.innerHTML = "Precise system ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 4500";
    pSpecs03.innerHTML = "EER : 6.4-4.2";
    disableScroll()
}
function Carrier_Split_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Split/03.docx");
    pImage.src = "../Images/Brands/Carrier/Split/03.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "164,686/-";
    pName.innerHTML = "Carrier Durakool Star 42KGL 012T 1 Ton";
    pFeature01.innerHTML = "Rust Resistant Cabinet";
    pFeature02.innerHTML = "Reserved Air Outlet";
    pFeature03.innerHTML = "State of the Art";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 5500";
    pSpecs03.innerHTML = "EER : 7.2-5.2";
    disableScroll()
}
function Carrier_Split_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Split/04.docx");
    pImage.src = "../Images/Brands/Carrier/Split/04.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "275,700/-";
    pName.innerHTML = "Carrier Xpower Gold 42CVSR022 703 2 Ton";
    pFeature01.innerHTML = "Intelligent airflow";
    pFeature02.innerHTML = "Friendly referigerant ";
    pFeature03.innerHTML = "Auto restart ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4600";
    pSpecs03.innerHTML = "EER : 6.1-3.4";
    disableScroll()
}
function Carrier_Split_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Split/05.docx");
    pImage.src = "../Images/Brands/Carrier/Split/05.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "95,700/-";
    pName.innerHTML = "Carrier Xpower Gold 42CVSR018 703 1.5 Ton";
    pFeature01.innerHTML = "Low Noise System";
    pFeature02.innerHTML = "Easy Clean Panel";
    pFeature03.innerHTML = "Remote Control";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 3900";
    pSpecs03.innerHTML = "EER : 7.2-4.5";
    disableScroll()
}
function Carrier_Cabinet_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cabinet/01.docx");
    pImage.src = "../Images/Brands/Carrier/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "180,000/-";
    pName.innerHTML = "Carrier 1.5 Ton";
    pFeature01.innerHTML = "Self-cleaning";
    pFeature02.innerHTML = "Ultra Thin Design";
    pFeature03.innerHTML = "High Efficiency Filter";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 39000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 7.1-3.75";
    disableScroll()
}
function Carrier_Cabinet_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cabinet/02.docx");
    pImage.src = "../Images/Brands/Carrier/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "202,600/-";
    pName.innerHTML = "Carrier 4.0HP Non-Inverter";
    pFeature01.innerHTML = "24 hours timer";
    pFeature02.innerHTML = "Easy Clean Panel";
    pFeature03.innerHTML = "Remote Control ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 3200";
    pSpecs03.innerHTML = "EER : 6.1-4.75";
    disableScroll()
}
function Carrier_Cabinet_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cabinet/03.docx");
    pImage.src = "../Images/Brands/Carrier/Cabinet/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "137,200/-";
    pName.innerHTML = "Carrier 6.0HP Non-Inverter";
    pFeature01.innerHTML = "Long Distance Airflow";
    pFeature02.innerHTML = "Super quiet mode";
    pFeature03.innerHTML = "Sleep mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4300";
    pSpecs03.innerHTML = "EER : 6.4-3.45";
    disableScroll()
}
function Carrier_Cabinet_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cabinet/04.docx");
    pImage.src = "../Images/Brands/Carrier/Cabinet/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "366,000/-";
    pName.innerHTML = "Carrier 5.0HP Inverter";
    pFeature01.innerHTML = "Dry function";
    pFeature02.innerHTML = "Wide voltage";
    pFeature03.innerHTML = "Anti dust";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 35000";
    pSpecs02.innerHTML = "Power Input (W) : 5800";
    pSpecs03.innerHTML = "EER : 5.7-2.80";
    disableScroll()
}
function Carrier_Cabinet_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cabinet/05.docx");
    pImage.src = "../Images/Brands/Carrier/Cabinet/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "299,700/-";
    pName.innerHTML = "Carrier 4.0HP Inverter";
    pFeature01.innerHTML = "Intelligent airflow";
    pFeature02.innerHTML = "Friendly referigerant ";
    pFeature03.innerHTML = "LED display";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 43000";
    pSpecs02.innerHTML = "Power Input (W) : 3500";
    pSpecs03.innerHTML = "EER : 4.7-1.80";
    disableScroll()
}
function Carrier_Cassette_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cassette/01.docx");
    pImage.src = "../Images/Brands/Carrier/Cassette/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "87,600/-";
    pName.innerHTML = "Carrier 3.0HP A5CK 28E/A5LC 28C";
    pFeature01.innerHTML = "Reserved Air Outlet";
    pFeature02.innerHTML = "State of the Art";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4600";
    pSpecs03.innerHTML = "EER : 7.2-3.45";
    disableScroll()
}
function Carrier_Cassette_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cassette/02.docx");
    pImage.src = "../Images/Brands/Carrier/Cassette/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "89,600/-";
    pName.innerHTML = "Carrier 2.5HP A5CK 25E/A5LC 20C";
    pFeature01.innerHTML = "LED display";
    pFeature02.innerHTML = "Intelligent airflow";
    pFeature03.innerHTML = "Auto restart ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 5600";
    pSpecs03.innerHTML = "EER : 5.3-2.8";
    disableScroll()
}
function Carrier_Cassette_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cassette/03.docx");
    pImage.src = "../Images/Brands/Carrier/Cassette/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "219,900/-";
    pName.innerHTML = "Carrier 2.0HP A5CKY 20E/A5LCY 20C";
    pFeature01.innerHTML = "Dry function";
    pFeature02.innerHTML = "Anti dust";
    pFeature03.innerHTML = "Wide voltage";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 49000";
    pSpecs02.innerHTML = "Power Input (W) : 6600";
    pSpecs03.innerHTML = "EER : 6.3-2.8";
    disableScroll()
}
function Carrier_Cassette_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cassette/04.docx");
    pImage.src = "../Images/Brands/Carrier/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "110,700/-";
    pName.innerHTML = "Carrier 4.0HP A5CK 40E/A5LCY 40D";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control ";
    pFeature03.innerHTML = "Rust Resistant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 5200";
    pSpecs03.innerHTML = "EER : 7.3-3.8";
    disableScroll()
}
function Carrier_Cassette_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Carrier/Cassette/05.docx");
    pImage.src = "../Images/Brands/Carrier/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "135,000/-";
    pName.innerHTML = "Carrier 5.0HP A5CKY 50ER/A5LCY 50FR";
    pFeature01.innerHTML = "Super quiet mode";
    pFeature02.innerHTML = "Sleep mode";
    pFeature03.innerHTML = "Auto mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 43000";
    pSpecs02.innerHTML = "Power Input (W) : 6200";
    pSpecs03.innerHTML = "EER : 5.7-2.8";
    disableScroll()
}
function Orient_Split_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Split/01.docx");
    pImage.src = "../Images/Brands/Orient/Split/01.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "36,500/-";
    pName.innerHTML = "Orient Econotech Series 1 Ton";
    pFeature01.innerHTML = "Rust Resistant";
    pFeature02.innerHTML = "Reserved Air Outlet";
    pFeature03.innerHTML = "State of the Art";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 52000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 6.2-3.4";
    disableScroll()
}
function Orient_Split_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Split/02.docx");
    pImage.src = "../Images/Brands/Orient/Split/02.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "38,500/-";
    pName.innerHTML = "Orient OS-13 MP14 BM Pattern Series 1 Ton";
    pFeature01.innerHTML = "Anti dust";
    pFeature02.innerHTML = "24 hours timer";
    pFeature03.innerHTML = "Low Noise Air Flow ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 47000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 7.2-2.8";
    disableScroll()
}
function Orient_Split_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Split/03.docx");
    pImage.src = "../Images/Brands/Orient/Split/03.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "96,000/-";
    pName.innerHTML = "Orient DC Inverter Ultron Plus 2 Ton";
    pFeature01.innerHTML = "Air Vane Technology";
    pFeature02.innerHTML = "Auto Swing";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 53000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 5.5-3.2";
    disableScroll()
}
function Orient_Split_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Split/04.docx");
    pImage.src = "../Images/Brands/Orient/Split/04.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "60,000/-";
    pName.innerHTML = "Orient DC Inverter Inventage 1.5 Ton";
    pFeature01.innerHTML = "Multi- Mode ";
    pFeature02.innerHTML = "Dry function";
    pFeature03.innerHTML = "Wide voltage";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 47000";
    pSpecs02.innerHTML = "Power Input (W) : 5200";
    pSpecs03.innerHTML = "EER : 6.2-2.1";
    disableScroll()
}
function Orient_Split_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Split/05.docx");
    pImage.src = "../Images/Brands/Orient/Split/05.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "54,000/-";
    pName.innerHTML = "Orient DC Inverter Easy Clean 1 Ton";
    pFeature01.innerHTML = "Compact Design";
    pFeature02.innerHTML = "Movable Baffle";
    pFeature03.innerHTML = "3D airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 57000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 7.1-4.6";
    disableScroll()
}
function Orient_Cabinet_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cabinet/01.docx");
    pImage.src = "../Images/Brands/Orient/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "90,999/-";
    pName.innerHTML = "Orient 2 Ton OFS-24-MJ";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Rust Resistant ";
    pFeature03.innerHTML = "Reserved Air Outlet";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 40000";
    pSpecs02.innerHTML = "Power Input (W) : 4600";
    pSpecs03.innerHTML = "EER : 5.3-2.75";
    disableScroll()
}
function Orient_Cabinet_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cabinet/02.docx");
    pImage.src = "../Images/Brands/Orient/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "131,999/-";
    pName.innerHTML = "Orient 4 Ton OFS - 48 S2";
    pFeature01.innerHTML = "Movable Baffle";
    pFeature02.innerHTML = "Compact Design";
    pFeature03.innerHTML = "3D airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 3200";
    pSpecs03.innerHTML = "EER : 6.5-3.2";
    disableScroll()
}
function Orient_Cabinet_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cabinet/03.docx");
    pImage.src = "../Images/Brands/Orient/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "136,999/-";
    pName.innerHTML = "Orient 4 Ton OF-48MJ";
    pFeature01.innerHTML = "Auto mode";
    pFeature02.innerHTML = "Ultra Thin Design";
    pFeature03.innerHTML = "High Efficiency Filter";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 58000";
    pSpecs02.innerHTML = "Power Input (W) : 4500";
    pSpecs03.innerHTML = "EER : 7.5-3.2";
    disableScroll()
}
function Orient_Cabinet_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cabinet/04.docx");
    pImage.src = "../Images/Brands/Orient/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "90,999/-";
    pName.innerHTML = "Orient OFS-24MS2 2 Ton";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control ";
    pFeature03.innerHTML = "Low Noise Air Flow ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 5.8-2.2";
    disableScroll()
}
function Orient_Cabinet_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cabinet/05.docx");
    pImage.src = "../Images/Brands/Orient/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "90,999/-";
    pName.innerHTML = "Orient 2 Ton OFS-24-MJ";
    pFeature01.innerHTML = "Long Distance Airflow";
    pFeature02.innerHTML = "Super quiet mode";
    pFeature03.innerHTML = "Inner brass screw ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4300";
    pSpecs03.innerHTML = "EER : 6.8-2.2";
    disableScroll()
}
function Orient_Cassette_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cassette/01.docx");
    pImage.src = "../Images/Brands/Orient/Cassette/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "113,000/-";
    pName.innerHTML = "Orient HBU-18HF03";
    pFeature01.innerHTML = "Remote Control";
    pFeature02.innerHTML = "State of the Art";
    pFeature03.innerHTML = "Rust Resistant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 6.6-2.35";
    disableScroll()
}
function Orient_Cassette_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cassette/02.docx");
    pImage.src = "../Images/Brands/Orient/Cassette/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "122,000/-";
    pName.innerHTML = "Orient HBU-24CA03";
    pFeature01.innerHTML = "friendly referigerant ";
    pFeature02.innerHTML = "Auto restart ";
    pFeature03.innerHTML = "High Temperature Stable ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 43000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 4.6-2.2";
    disableScroll()
}
function Orient_Cassette_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cassette/03.docx");
    pImage.src = "../Images/Brands/Orient/Cassette/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "188,000/-";
    pName.innerHTML = "Orient HBU-36HH03";
    pFeature01.innerHTML = "Wide voltage";
    pFeature02.innerHTML = "Active PFC ";
    pFeature03.innerHTML = "24 hours timer";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 4200";
    pSpecs03.innerHTML = "EER : 6.1-3.7";
    disableScroll()
}
function Orient_Cassette_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cassette/04.docx");
    pImage.src = "../Images/Brands/Orient/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "240,000/-";
    pName.innerHTML = "Orient HBU-50CA03T3";
    pFeature01.innerHTML = "Air Vane ";
    pFeature02.innerHTML = "Auto Swing";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 3400";
    pSpecs03.innerHTML = "EER : 4.3-2.1";
    disableScroll()
}
function Orient_Cassette_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Orient/Cassette/05.docx");
    pImage.src = "../Images/Brands/Orient/Cassette/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "269,000/-";
    pName.innerHTML = "Orient HBU-60CAO3T3";
    pFeature01.innerHTML = "Head Drain Pump";
    pFeature02.innerHTML = "Branch Outlet ";
    pFeature03.innerHTML = "50% Power saving";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 2900";
    pSpecs03.innerHTML = "EER : 5.4-3.6";
    disableScroll()
}
function Sanyo_Split_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Split/01.docx");
    pImage.src = "../Images/Brands/Sanyo/Split/01.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "122,000/-";
    pName.innerHTML = "SANYO SA-KC22BG3";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control ";
    pFeature03.innerHTML = "Rust Resistant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 6.4-2.75";
    disableScroll()
}
function Sanyo_Split_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Split/02.docx");
    pImage.src = "../Images/Brands/Sanyo/Split/02.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "286,400/-";
    pName.innerHTML = "SANYO SAP-KR543E";
    pFeature01.innerHTML = "Auto Swing";
    pFeature02.innerHTML = "Power mode";
    pFeature03.innerHTML = "LED display";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 3600";
    pSpecs03.innerHTML = "EER : 4.1-1.4";
    disableScroll()
}
function Sanyo_Split_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Split/03.docx");
    pImage.src = "../Images/Brands/Sanyo/Split/03.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "138,900/-";
    pName.innerHTML = "SANYO SA-KC18BG3";
    pFeature01.innerHTML = "Auto mode";
    pFeature02.innerHTML = "Ultra Thin Design";
    pFeature03.innerHTML = "High Efficiency Filter";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 3900";
    pSpecs03.innerHTML = "EER : 5.5-1.4";
    disableScroll()
}
function Sanyo_Split_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Split/04.docx");
    pImage.src = "../Images/Brands/Sanyo/Split/04.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "292,000/-";
    pName.innerHTML = "SANYO SA-KC12BG3";
    pFeature01.innerHTML = "Anti dust";
    pFeature02.innerHTML = "24 hours timer";
    pFeature03.innerHTML = "Easy Clean Panel";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 41000";
    pSpecs02.innerHTML = "Power Input (W) : 3500";
    pSpecs03.innerHTML = "EER : 6.4-3.4";
    disableScroll()
}
function Sanyo_Split_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Split/05.docx");
    pImage.src = "../Images/Brands/Sanyo/Split/05.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "98,100/-";
    pName.innerHTML = "SANYO SA-KC9BG3";
    pFeature01.innerHTML = "Friendly referigerant";
    pFeature02.innerHTML = "Compact Design";
    pFeature03.innerHTML = "Auto restart ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 53000";
    pSpecs02.innerHTML = "Power Input (W) : 4100";
    pSpecs03.innerHTML = "EER : 7.1-2.4";
    disableScroll()
}
function Sanyo_Cabinet_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cabinet/01.docx");
    pImage.src = "../Images/Brands/Sanyo/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "158,400/-";
    pName.innerHTML = "SANYO 0.75 Ton";
    pFeature01.innerHTML = "Movable Baffle";
    pFeature02.innerHTML = "Compact Design";
    pFeature03.innerHTML = "3D airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 4500";
    pSpecs03.innerHTML = "EER : 6.2-1.8";
    disableScroll()
}
function Sanyo_Cabinet_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cabinet/02.docx");
    pImage.src = "../Images/Brands/Sanyo/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "299,000/-";
    pName.innerHTML = "SANYO 2.3 Ton RQ71CXV1";
    pFeature01.innerHTML = "State of the Art";
    pFeature02.innerHTML = "Auto Swing";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 4100";
    pSpecs03.innerHTML = "EER : 5.7-1.8";
    disableScroll()
}
function Sanyo_Cabinet_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cabinet/03.docx");
    pImage.src = "../Images/Brands/Sanyo/Cabinet/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "256,100/-";
    pName.innerHTML = "SANYO 3.8 Ton RQ125DXY1";
    pFeature01.innerHTML = "Compact Design";
    pFeature02.innerHTML = "3D airflow";
    pFeature03.innerHTML = "Head Drain Pump";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 3700";
    pSpecs03.innerHTML = "EER : 6.2-1.8";
    disableScroll()
}
function Sanyo_Cabinet_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cabinet/04.docx");
    pImage.src = "../Images/Brands/Sanyo/Cabinet/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "197,100/-";
    pName.innerHTML = "SANYO 4.6 Ton RQ140CXV1";
    pFeature01.innerHTML = "Auto mode";
    pFeature02.innerHTML = "Ultra Thin Design";
    pFeature03.innerHTML = "High Efficiency Filter";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 32000";
    pSpecs02.innerHTML = "Power Input (W) : 2900";
    pSpecs03.innerHTML = "EER : 4.7-1.8";
    disableScroll()
}
function Sanyo_Cabinet_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cabinet/05.docx");
    pImage.src = "../Images/Brands/Sanyo/Cabinet/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "88,700/-";
    pName.innerHTML = "SANYO 2.0 Ton RQC25C";
    pFeature01.innerHTML = "LED display";
    pFeature02.innerHTML = "Intelligent airflow";
    pFeature03.innerHTML = "Friendly referigerant";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 2100";
    pSpecs03.innerHTML = "EER : 6.7-1.8";
    disableScroll()
}
function Sanyo_Cassette_01() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cassette/01.docx");
    pImage.src = "../Images/Brands/Sanyo/Cassette/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "148,200/-";
    pName.innerHTML = "SANYO SN-58CA32 2 Ton";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control ";
    pFeature03.innerHTML = "Air Flow System";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 51000";
    pSpecs02.innerHTML = "Power Input (W) : 4600";
    pSpecs03.innerHTML = "EER : 7.7-3.5";
    disableScroll()
}
function Sanyo_Cassette_02() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cassette/02.docx");
    pImage.src = "../Images/Brands/Sanyo/Cassette/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "254,800/-";
    pName.innerHTML = "SANYO SN-24UA74 1.5 Ton";
    pFeature01.innerHTML = "Power mode";
    pFeature02.innerHTML = "LED display";
    pFeature03.innerHTML = "Intelligent airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 6.7-3.5";
    disableScroll()
}
function Sanyo_Cassette_03() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cassette/03.docx");
    pImage.src = "../Images/Brands/Sanyo/Cassette/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "185,000/-";
    pName.innerHTML = "SANYO SN-96BA53 1 Ton";
    pFeature01.innerHTML = "Low Noise ";
    pFeature02.innerHTML = "Easy Clean Panel";
    pFeature03.innerHTML = "Remote Control ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 40000";
    pSpecs02.innerHTML = "Power Input (W) : 3400";
    pSpecs03.innerHTML = "EER : 5.4-2.5";
    disableScroll()
}
function Sanyo_Cassette_04() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cassette/04.docx");
    pImage.src = "../Images/Brands/Sanyo/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "248,100/-";
    pName.innerHTML = "SANYO SN-45FA68 1.7 Ton";
    pFeature01.innerHTML = "LED display";
    pFeature02.innerHTML = "Intelligent airflow";
    pFeature03.innerHTML = "Friendly referigerant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 31000";
    pSpecs02.innerHTML = "Power Input (W) : 2800";
    pSpecs03.innerHTML = "EER : 3.4-1.5";
    disableScroll()
}
function Sanyo_Cassette_05() {
    boxEnable();
    link.setAttribute("href", "../Download/Sanyo/Cassette/05.docx");
    pImage.src = "../Images/Brands/Sanyo/Cassette/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "79,999/-";
    pName.innerHTML = "SANYO SN-26YA44 2 Ton";
    pFeature01.innerHTML = "Anti dust";
    pFeature02.innerHTML = "24 hours timer";
    pFeature03.innerHTML = "Wide voltage";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 34000";
    pSpecs02.innerHTML = "Power Input (W) : 3200";
    pSpecs03.innerHTML = "EER : 4.5-2.5";
    disableScroll()
}
function LG_Split_01() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Split/01.docx");
    pImage.src = "../Images/Brands/LG/Split/01.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "320,399/-";
    pName.innerHTML = "LG TS-C126LGA7 (1 Ton) - Split";
    pFeature01.innerHTML = "Movable Baffle";
    pFeature02.innerHTML = "Compact Design";
    pFeature03.innerHTML = "3D airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 4700";
    pSpecs03.innerHTML = "EER : 6.2-2.75";
    disableScroll()
}
function LG_Split_02() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Split/02.docx");
    pImage.src = "../Images/Brands/LG/Split/02.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "55,500/-";
    pName.innerHTML = "LG TS-186KAA7 (1.5 Ton) - Split";
    pFeature01.innerHTML = "Power mode";
    pFeature02.innerHTML = "LED display";
    pFeature03.innerHTML = "Intelligent airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 48000";
    pSpecs02.innerHTML = "Power Input (W) : 3400";
    pSpecs03.innerHTML = "EER : 5.1-3.75";
    disableScroll()
}
function LG_Split_03() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Split/03.docx");
    pImage.src = "../Images/Brands/LG/Split/03.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "63,800/-";
    pName.innerHTML = "LG TS-C246KAA7 (2 Ton) - Split";
    pFeature01.innerHTML = "Movable Baffle";
    pFeature02.innerHTML = "Compact Design";
    pFeature03.innerHTML = "3D airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 36000";
    pSpecs02.innerHTML = "Power Input (W) : 4500";
    pSpecs03.innerHTML = "EER : 6.4-2.7";
    disableScroll()
}
function LG_Split_04() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Split/04.docx");
    pImage.src = "../Images/Brands/LG/Split/04.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "80,800/-";
    pName.innerHTML = "LG LS-UC1868RMO (1.5 Ton) - Split";
    pFeature01.innerHTML = "State of the Art";
    pFeature02.innerHTML = "Auto Swing";
    pFeature03.innerHTML = "Power mode";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 4200";
    pSpecs03.innerHTML = "EER : 5.1-3.4";
    disableScroll()
}
function LG_Split_05() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Split/05.docx");
    pImage.src = "../Images/Brands/LG/Split/05.png";
    pImage.style.width = "350px";
    pPrice.innerHTML = "89,000/-";
    pName.innerHTML = "LG LS-UC2468RMO (2 Ton) - Split";
    pFeature01.innerHTML = "Dry function";
    pFeature02.innerHTML = "Wide voltage";
    pFeature03.innerHTML = "Active PFC ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 3200";
    pSpecs03.innerHTML = "EER : 6.5-2.7";
    disableScroll()
}
function LG_Cabinet_01() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cabinet/01.docx");
    pImage.src = "../Images/Brands/LG/Cabinet/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "298,200/-";
    pName.innerHTML = "LG AF-Q236GMC0 - Cabinet";
    pFeature01.innerHTML = "Econo Cool";
    pFeature02.innerHTML = "Self-diagnostic ";
    pFeature03.innerHTML = "Long Distance Airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 57000";
    pSpecs02.innerHTML = "Power Input (W) : 4800";
    pSpecs03.innerHTML = "EER : 7.3-4.5";
    disableScroll()
}
function LG_Cabinet_02() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cabinet/02.docx");
    pImage.src = "../Images/Brands/LG/Cabinet/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "204,999/-";
    pName.innerHTML = "LG TPC C 488 TICI 4 Ton - Cabinet";
    pFeature01.innerHTML = "Low Noise Flow ";
    pFeature02.innerHTML = "Easy Clean Panel";
    pFeature03.innerHTML = "Rust Resistant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 43000";
    pSpecs02.innerHTML = "Power Input (W) : 3800";
    pSpecs03.innerHTML = "EER : 6.6-2.5";
    disableScroll()
}
function LG_Cabinet_03() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cabinet/03.docx");
    pImage.src = "../Images/Brands/LG/Cabinet/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "93,300/-";
    pName.innerHTML = "LG TP-C186SLV0 - Cabinet";
    pFeature01.innerHTML = "Compact Design";
    pFeature02.innerHTML = "3D airflow";
    pFeature03.innerHTML = "Movable Baffle";
    pSpecs01.innerHTML = "Cooling (Btu/h) : Yes";
    pSpecs02.innerHTML = "Power Input (W) : R22";
    pSpecs03.innerHTML = "EER : Yes";
    disableScroll()
}
function LG_Cabinet_04() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cabinet/04.docx");
    pImage.src = "../Images/Brands/LG/Cabinet/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "128,000/-";
    pName.innerHTML = "LG TP-C488TLV0 - Cabinet";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control";
    pFeature03.innerHTML = "Rust Resistant ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 33000";
    pSpecs02.innerHTML = "Power Input (W) : 3600";
    pSpecs03.innerHTML = "EER : 6.1-2.5";
    disableScroll()
}
function LG_Cabinet_05() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cabinet/05.docx");
    pImage.src = "../Images/Brands/LG/Cabinet/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "94,400/-";
    pName.innerHTML = "LG TP-C508TLA1 - Cabinet";
    pFeature01.innerHTML = "Sleep mode";
    pFeature02.innerHTML = "Auto mode";
    pFeature03.innerHTML = "Ultra-Thin Design";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 4200";
    pSpecs03.innerHTML = "EER : 7.4-2.7";
    disableScroll()
}
function LG_Cassette_01() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cassette/01.docx");
    pImage.src = "../Images/Brands/LG/Cassette/01.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "263,600/-";
    pName.innerHTML = "LG ATNQ18GPLE3 - Cassette";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control";
    pFeature03.innerHTML = "Air Outlet";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 38000";
    pSpecs02.innerHTML = "Power Input (W) : 4600";
    pSpecs03.innerHTML = "EER : 6.7-3.45";
    disableScroll()
}
function LG_Cassette_02() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cassette/02.docx");
    pImage.src = "../Images/Brands/LG/Cassette/02.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "374,800/-";
    pName.innerHTML = "LG ATNQ21GPLE3 - Cassette";
    pFeature01.innerHTML = "Econo Cool";
    pFeature02.innerHTML = "Self-diagnostic ";
    pFeature03.innerHTML = "Long Distance Airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 4300";
    pSpecs03.innerHTML = "EER : 5.4-2.7";
    disableScroll()
}
function LG_Cassette_03() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cassette/03.docx");
    pImage.src = "../Images/Brands/LG/Cassette/03.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "243,100/-";
    pName.innerHTML = "LG ATNQ24GNLE3 - Cassette";
    pFeature01.innerHTML = "3D airflow";
    pFeature02.innerHTML = "Movable Baffle";
    pFeature03.innerHTML = "Compact Design";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 42000";
    pSpecs02.innerHTML = "Power Input (W) : 3500";
    pSpecs03.innerHTML = "EER : 6.6-3.2";
    disableScroll()
}
function LG_Cassette_04() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cassette/04.docx");
    pImage.src = "../Images/Brands/LG/Cassette/04.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "138,000/-";
    pName.innerHTML = "LG ATNQ36GMLE3 - Cassette";
    pFeature01.innerHTML = "Easy Clean Panel";
    pFeature02.innerHTML = "Remote Control ";
    pFeature03.innerHTML = "Low Noise ";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 37000";
    pSpecs02.innerHTML = "Power Input (W) : 3500";
    pSpecs03.innerHTML = "EER : 4.2-1.8";
    disableScroll()
}
function LG_Cassette_05() {
    boxEnable();
    link.setAttribute("href", "../Download/LG/Cassette/05.docx");
    pImage.src = "../Images/Brands/LG/Cassette/05.png";
    pImage.style.height = "150px";
    pPrice.innerHTML = "320,500/-";
    pName.innerHTML = "LG ATNQ42GMLE3 - Cassette";
    pFeature01.innerHTML = "Electronic Metal Box";
    pFeature02.innerHTML = "Super quiet mode";
    pFeature03.innerHTML = "Long Distance Airflow";
    pSpecs01.innerHTML = "Cooling (Btu/h) : 43000";
    pSpecs02.innerHTML = "Power Input (W) : 3900";
    pSpecs03.innerHTML = "EER : 6.4-2.7";
    disableScroll()
}
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
