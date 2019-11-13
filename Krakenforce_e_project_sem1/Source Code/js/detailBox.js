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
