function Data1() {
    var option2 = document.getElementById("option2").value;
    var option1 = document.getElementById("option1").value;
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
        alert("PLEASE CHOOSE DIFFRENT ITEM");
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
        if (option1 == "1 Ton Inverter Series HJ35VA") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Split/01.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "HJ35VA";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5100 W";
            eer1.innerHTML = "9.4-2.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 81,000/-"
        }
        if (option1 == "1.5 Ton Inverter Series HJ50VA") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Split/02.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "HJ50VA";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Offwhite";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "17000 BTU";
            heat1.innerHTML = "19000 BTU";
            power1.innerHTML = "4900 W";
            eer1.innerHTML = "7.51 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 104,000/-"
        }
        if (option1 == "2 Ton Inverter Series HJ71VA") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Split/03.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "HJ71VA";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "35000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3500 W";
            eer1.innerHTML = "6.4-2.40 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 148,000/-"
        }
        if (option1 == "SRK 13CJK Heavy Industries 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Split/04.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "13CJK";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "22000 BTU";
            heat1.innerHTML = "18000 BTU";
            power1.innerHTML = "3100 W";
            eer1.innerHTML = "5.0-3.50 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 48,000/-"
        }
        if (option1 == "MS-13 VC Mr Slim 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Split/05.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "MS-13 VC";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Grey";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "31000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "1200 W";
            eer1.innerHTML = "6.0-3.50 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 48,500/-"
        }
        if (option1 == "PS 3 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "PS 3";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "52000 BTU";
            heat1.innerHTML = "31000 BTU";
            power1.innerHTML = "4100 W";
            eer1.innerHTML = "7.2-4.35 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 121,499/-"
        }
        if (option1 == "4 TON PS SERIES 5JJ") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "PS SERIES 5JJ";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "44000 BTU";
            heat1.innerHTML = "27000 BTU";
            power1.innerHTML = "5100 W";
            eer1.innerHTML = "8.2-4.10 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 251,999/-"
        }
        if (option1 == "PS-3 2.5 Ton Semi Inverter") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cabinet/03.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "PS-3";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "39000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4500 W";
            eer1.innerHTML = "7.1-3.10 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 229,990/-"
        }
        if (option1 == "4 Ton PS Series 5JJ") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cabinet/04.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "PS Series 5JJ";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "35000 BTU";
            heat1.innerHTML = "29000 BTU";
            power1.innerHTML = "3400 W";
            eer1.innerHTML = "6.2-3.10 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 224,999/-"
        }
        if (option1 == "PS3CFO Inverter 3.5 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cabinet/05.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "PS3CFO";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.5 Ton";
            cool1.innerHTML = "41000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "7.6-2.10 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 298,990/-"
        }
        if (option1 == "FDTC25VF") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "FDTC25VF";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.5 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "26000 BTU";
            power1.innerHTML = "6100 W";
            eer1.innerHTML = "8.2-3.45 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 127,600/-"
        }
        if (option1 == "FDTW56KXE6F VRF 2-Way") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cassette/02.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "FDTW56KXE6F";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4.0 Ton";
            cool1.innerHTML = "34000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4900 W";
            eer1.innerHTML = "7.3-2.9 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 85,300/-"
        }
        if (option1 == "FDTC45KXE6F VRF Compact") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cassette/03.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "FDTC45KXE6F";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.7 Ton";
            cool1.innerHTML = "55000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "6.9-4.1 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 80,400/-"
        }
        if (option1 == "FDTW140KXE6F VRF 2-Way") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cassette/04.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "FDTW140KXE6F";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.9 Ton";
            cool1.innerHTML = "61000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4100 W";
            eer1.innerHTML = "7.5-3.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 163,400/-"
        }
        if (option1 == "FDTS71KXE6F VRF 1-Way") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Mitsubishi/Cassette/05.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Mitsubishi";
            model1.innerHTML = "FDTS71KXE6F";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.5 Ton";
            cool1.innerHTML = "54000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5600 W";
            eer1.innerHTML = "8.1-4.3 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 122,400/-"
        }
        if (option1 == "CACI12OC3I6 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Split/01.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "CACI12OC3I6";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Grey";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4200 W";
            eer1.innerHTML = "8.1-3.85 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 146,300/-"
        }
        if (option1 == "CACS18SU3C3 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Split/02.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "CACS18SU3C3";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "24000 BTU";
            power1.innerHTML = "4500 W";
            eer1.innerHTML = "6.4-4.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 156,800/-"
        }
        if (option1 == "Durakool Star 42KGL 012T 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Split/03.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "42KGL 012T";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5500 W";
            eer1.innerHTML = "7.2-5.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 164,686/-"
        }
        if (option1 == "Xpower Gold 42CVSR022 703 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Split/04.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "42CVSR022";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4600 W";
            eer1.innerHTML = "6.1-3.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 275,700/-"
        }
        if (option1 == "Xpower Gold 42CVSR018 703 1.5 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Split/05.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "42CVSR018";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3900 W";
            eer1.innerHTML = "7.2-4.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 95,700/-"
        }
        if (option1 == "1.5 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "C565HT7";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "39000 BTU";
            heat1.innerHTML = "31000 BTU";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "7.1-3.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 180,000/-"
        }
        if (option1 == "4.0HP Non-Inverter") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "4.0NI";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3200 W";
            eer1.innerHTML = "6.1-4.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 202,600/-"
        }
        if (option1 == "6.0HP Non-Inverter") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cabinet/03.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "6.0NI";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.5 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4300 W";
            eer1.innerHTML = "6.4-3.45 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 137,200/-"
        }
        if (option1 == "5.0HP Inverter") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cabinet/04.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "5.0I";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.7 Ton";
            cool1.innerHTML = "35000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5800 W";
            eer1.innerHTML = "5.7-2.80 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 366,000/-"
        }
        if (option1 == "4.0HP Inverter") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cabinet/05.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "4.0I";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.3 Ton";
            cool1.innerHTML = "43000 BTU";
            heat1.innerHTML = "38000 BTU";
            power1.innerHTML = "3500 W";
            eer1.innerHTML = "4.7-1.80 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 299,700/-"
        }
        if (option1 == "3.0HP A5CK 28E/A5LC 28C") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "28E/A5LC";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.1 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4600 W";
            eer1.innerHTML = "7.2-3.45 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 87,600/-"
        }
        if (option1 == "2.5HP A5CK 25E/A5LC 20C") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cassette/02.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "A5CK 25E/A5LC";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.9 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5600 W";
            eer1.innerHTML = "5.3-2.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 89,600/-"
        }
        if (option1 == "2.0HP A5CKY 20E/A5LCY 20C") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cassette/03.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "A5CKY 20E/A5LCY";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "49000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "6600 W";
            eer1.innerHTML = "6.3-2.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 219,900/-"
        }
        if (option1 == "4.0HP A5CK 40E/A5LCY 40D") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cassette/04.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "A5CK 40E";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5200 W";
            eer1.innerHTML = "7.3-3.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 110,700/-"
        }
        if (option1 == "5.0HP A5CKY 50ER/A5LCY 50FR") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Carrier/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Carrier";
            model1.innerHTML = "50ER/A5LCY";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.5 Ton";
            cool1.innerHTML = "43000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "6200 W";
            eer1.innerHTML = "5.7-2.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 135,000/-"
        }
        if (option1 == "Econotech Series 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Split/01.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OACI3I6";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "52000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "6.2-3.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 36,500/-"
        }
        if (option1 == "OS-13 MP14 BM Pattern Series 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Split/02.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OS-13 MP14";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Grey";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "47000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "7.2-2.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 38,500/-"
        }
        if (option1 == "DC Inverter Ultron Plus 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Split/03.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "Ultron MP59";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Brown";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "53000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "5.5-3.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 96,000/-"
        }
        if (option1 == "DC Inverter Inventage 1.5 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Split/04.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "Ultron IH59";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Balck";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "47000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "5200 W";
            eer1.innerHTML = "6.2-2.1 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 60,000/-"
        }
        if (option1 == "DC Inverter Easy Clean 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Split/05.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "Ultra E69";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Balck";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "57000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "7.1-4.6 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 54,000/-"
        }
        if (option1 == "2 Ton OFS-24-MJ") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OFS-24-MJ";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "40000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4600 W";
            eer1.innerHTML = "5.3-2.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 90,999/-"
        }
        if (option1 == "4 Ton OFS - 48 S2") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OFS-48 S2";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3200 W";
            eer1.innerHTML = "6.5-3.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 131,999/-"
        }
        if (option1 == "4 Ton OF-48MJ") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OF-48MJ";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "58000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4500 W";
            eer1.innerHTML = "7.5-3.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 136,999/-"
        }
        if (option1 == "OFS-24MS2 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OFS-24MS2";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "5.8-2.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 90,999/-"
        }
        if (option1 == "2 Ton OFS-24-MJ") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "OFS-24-MJ";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4300 W";
            eer1.innerHTML = "6.8-2.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 90,999/-"
        }
        if (option1 == "HBU-18HF03") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "18HF03";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "6.6-2.35 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 113,000/-"
        }
        if (option1 == "HBU-24CA03") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cassette/02.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "24CA03";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "43000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "4.6-2.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 122,000/-"
        }
        if (option1 == "HBU-36HH03") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cassette/03.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "36HH03";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.9 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4200 W";
            eer1.innerHTML = "6.1-3.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 188,000/-"
        }
        if (option1 == "HBU-50CA03T3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cassette/04.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "50CA03T3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3400 W";
            eer1.innerHTML = "4.3-2.1 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 240,000/-"
        }
        if (option1 == "HBU-60CAO3T3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Orient/Cassette/05.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Orient";
            model1.innerHTML = "60CAO3T3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "25000 BTU";
            power1.innerHTML = "2900 W";
            eer1.innerHTML = "5.4-3.6 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 269,000/-"
        }
        if (option1 == "SA-KC22BG3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Split/01.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "KC22BG3";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Grey";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "6.4-2.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 122,000/-"
        }
        if (option1 == "SAP-KR543E") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Split/02.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "KR543E";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.8 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3600 W";
            eer1.innerHTML = "4.1-1.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 286,400/-"
        }
        if (option1 == "SA-KC18BG3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Split/03.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "KC18BG3";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.8 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3900 W";
            eer1.innerHTML = "5.5-1.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 138,900/-"
        }
        if (option1 == "SA-KC12BG3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Split/04.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "KC12BG3";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3 Ton";
            cool1.innerHTML = "41000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3500 W";
            eer1.innerHTML = "6.4-3.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 292,000/-"
        }
        if (option1 == "SA-KC9BG3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Split/05.png";
            image1.style.width = "280px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "KC9BG3";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Grey";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "53000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4100 W";
            eer1.innerHTML = "7.1-2.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 98,100/-"
        }
        if (option1 == "0.75 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "SN07";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "0.7 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4500 W";
            eer1.innerHTML = "6.2-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 158,400/-"
        }
        if (option1 == "2.3 Ton RQ71CXV1") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "RQ71CXV1";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.3 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4100 W";
            eer1.innerHTML = "5.7-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 299,000/-"
        }
        if (option1 == "3.8 Ton RQ125DXY1") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cabinet/03.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "RQ125DXY1";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3.8 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3700 W";
            eer1.innerHTML = "6.2-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 256,100/-"
        }
        if (option1 == "4.6 Ton RQ140CXV1") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cabinet/04.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "RQ140CXV1";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4.6 Ton";
            cool1.innerHTML = "32000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "2900 W";
            eer1.innerHTML = "4.7-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 197,100/-"
        }
        if (option1 == "2.0 Ton RQC25C") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cabinet/05.png";
            image1.style.height = "150px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "RQC25C";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4.0 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "2100 W";
            eer1.innerHTML = "6.7-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 88,700/-"
        }
        if (option1 == "SN-58CA32 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "58CA32";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "51000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4600 W";
            eer1.innerHTML = "7.7-3.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 148,200/-"
        }
        if (option1 == "SN-24UA74 1.5 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cassette/02.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "24UA74";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "6.7-3.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 254,800/-"
        }
        if (option1 == "SN-96BA53 1 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cassette/03.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "96BA53";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "40000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3400 W";
            eer1.innerHTML = "5.4-2.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 185,000/-"
        }
        if (option1 == "SN-45FA68 1.7 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cassette/04.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "45FA68";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.7 Ton";
            cool1.innerHTML = "31000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "2800 W";
            eer1.innerHTML = "3.4-1.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 248,100/-"
        }
        if (option1 == "SN-26YA44 2 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/Sanyo/Cassette/05.png";
            image1.style.height = "140px";
            brand1.innerHTML = "Sanyo";
            model1.innerHTML = "26YA44";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "34000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3200 W";
            eer1.innerHTML = "4.5-2.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 79,999/-"
        }
        if (option1 == "TS-C126LGA7 (1 Ton)") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Split/01.png";
            image1.style.width = "280px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "C126LGA7";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4700 W";
            eer1.innerHTML = "6.2-2.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 45,000/-"
        }
        if (option1 == "TS-186KAA7 (1.5 Ton)") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Split/02.png";
            image1.style.width = "280px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "186KAA7";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "Red";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "48000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3400 W";
            eer1.innerHTML = "5.1-3.75 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 55,500/-"
        }
        if (option1 == "TS-C246KAA7 (2 Ton)") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Split/03.png";
            image1.style.width = "280px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "C246KAA7";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "36000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4500 W";
            eer1.innerHTML = "6.4-2.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 63,800/-"
        }
        if (option1 == "LS-UC1868RMO (1.5 Ton)") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Split/04.png";
            image1.style.width = "280px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "UC1868RMO";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.5 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4200 W";
            eer1.innerHTML = "5.1-3.4 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 80,800/-"
        }
        if (option1 == "LS-UC2468RMO (2 Ton)") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Split/05.png";
            image1.style.width = "280px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "UC2468RMO";
            type1.innerHTML = "Wall Mounted Split AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3200 W";
            eer1.innerHTML = "6.5-2.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 89,000/-"
        }
        if (option1 == "AF-Q236GMC0") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cabinet/01.png";
            image1.style.height = "150px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "Q236GMC0";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "57000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4800 W";
            eer1.innerHTML = "7.3-4.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 298,200/-"
        }
        if (option1 == "TPC C 488 TICI 4 Ton") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cabinet/02.png";
            image1.style.height = "150px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "488 TICI";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "4 Ton";
            cool1.innerHTML = "43000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3800 W";
            eer1.innerHTML = "6.6-2.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 204,999/-"
        }
        if (option1 == "TP-C186SLV0") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cabinet/03.png";
            image1.style.height = "150px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "C186SLV0";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "36000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "2700 W";
            eer1.innerHTML = "5.3-2.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 93,300/-"
        }
        if (option1 == "TP-C488TLV0") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cabinet/04.png";
            image1.style.height = "150px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "C488TLV0";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3 Ton";
            cool1.innerHTML = "33000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3600 W";
            eer1.innerHTML = "6.1-2.5 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 128,000/-"
        }
        if (option1 == "TP-C508TLA1") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cabinet/05.png";
            image1.style.height = "150px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "C508TLA1";
            type1.innerHTML = "Floor Standing AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "1.7 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4200 W";
            eer1.innerHTML = "7.4-2.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 94,400/-"
        }
        if (option1 == "ATNQ18GPLE3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cassette/01.png";
            image1.style.height = "140px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "G-ATNQ18";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "38000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4600 W";
            eer1.innerHTML = "6.7-3.45 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 263,600/-"
        }
        if (option1 == "ATNQ21GPLE3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cassette/02.png";
            image1.style.height = "140px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "G-Q21GPLE3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "4300 W";
            eer1.innerHTML = "5.4-2.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 374,800/-"
        }
        if (option1 == "ATNQ24GNLE3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cassette/03.png";
            image1.style.height = "140px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "ATNQ24GNLE3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.8 Ton";
            cool1.innerHTML = "42000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3500 W";
            eer1.innerHTML = "6.6-3.2 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 243,100/-"
        }
        if (option1 == "ATNQ36GMLE3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cassette/04.png";
            image1.style.height = "140px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "ATNQ36GMLE3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "3 Ton";
            cool1.innerHTML = "37000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3500 W";
            eer1.innerHTML = "4.2-1.8 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 138,000/-"
        }
        if (option1 == "ATNQ42GMLE3") {
            image1.style.width = "";
            image1.style.height = "";
            image1.src = "../Images/Brands/LG/Cassette/05.png";
            image1.style.height = "140px";
            brand1.innerHTML = "LG";
            model1.innerHTML = "ATNQ42GMLE3";
            type1.innerHTML = "Ceiling Cassette AC";
            color1.innerHTML = "White";
            ton1.innerHTML = "2.5 Ton";
            cool1.innerHTML = "43000 BTU";
            heat1.innerHTML = "/";
            power1.innerHTML = "3900 W";
            eer1.innerHTML = "6.4-2.7 Btu/W-h-W/W";
            price1.innerHTML = "Rs. 320,500/-"
        }
    }
}
function Data2() {
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
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
    if (option2 == option1) {
        alert("PLEASE CHOOSE DIFFRENT ITEM");
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
        if (option2 == "1 Ton Inverter Series HJ35VA") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Split/01.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "HJ35VA";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5100 W";
            eer2.innerHTML = "9.4-2.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 81,000/-"
        }
        if (option2 == "1.5 Ton Inverter Series HJ50VA") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Split/02.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "HJ50VA";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Offwhite";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "17000 BTU";
            heat2.innerHTML = "19000 BTU";
            power2.innerHTML = "4900 W";
            eer2.innerHTML = "7.51 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 104,000/-"
        }
        if (option2 == "2 Ton Inverter Series HJ71VA") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Split/03.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "HJ71VA";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "35000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3500 W";
            eer2.innerHTML = "6.4-2.40 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 148,000/-"
        }
        if (option2 == "SRK 13CJK Heavy Industries 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Split/04.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "13CJK";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "22000 BTU";
            heat2.innerHTML = "18000 BTU";
            power2.innerHTML = "3100 W";
            eer2.innerHTML = "5.0-3.50 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 48,000/-"
        }
        if (option2 == "MS-13 VC Mr Slim 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Split/05.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "MS-13 VC";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Grey";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "31000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "1200 W";
            eer2.innerHTML = "6.0-3.50 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 48,500/-"
        }
        if (option2 == "PS 3 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "PS 3";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "52000 BTU";
            heat2.innerHTML = "31000 BTU";
            power2.innerHTML = "4100 W";
            eer2.innerHTML = "7.2-4.35 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 121,499/-"
        }
        if (option2 == "4 TON PS SERIES 5JJ") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "PS SERIES 5JJ";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "44000 BTU";
            heat2.innerHTML = "27000 BTU";
            power2.innerHTML = "5100 W";
            eer2.innerHTML = "8.2-4.10 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 251,999/-"
        }
        if (option2 == "PS-3 2.5 Ton Semi Inverter") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cabinet/03.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "PS-3";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "39000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4500 W";
            eer2.innerHTML = "7.1-3.10 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 229,990/-"
        }
        if (option2 == "4 Ton PS Series 5JJ") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cabinet/04.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "PS Series 5JJ";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "35000 BTU";
            heat2.innerHTML = "29000 BTU";
            power2.innerHTML = "3400 W";
            eer2.innerHTML = "6.2-3.10 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 224,999/-"
        }
        if (option2 == "PS3CFO Inverter 3.5 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cabinet/05.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "PS3CFO";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.5 Ton";
            cool2.innerHTML = "41000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "7.6-2.10 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 298,990/-"
        }
        if (option2 == "FDTC25VF") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "FDTC25VF";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.5 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "26000 BTU";
            power2.innerHTML = "6100 W";
            eer2.innerHTML = "8.2-3.45 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 127,600/-"
        }
        if (option2 == "FDTW56KXE6F VRF 2-Way") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cassette/02.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "FDTW56KXE6F";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4.0 Ton";
            cool2.innerHTML = "34000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4900 W";
            eer2.innerHTML = "7.3-2.9 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 85,300/-"
        }
        if (option2 == "FDTC45KXE6F VRF Compact") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cassette/03.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "FDTC45KXE6F";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.7 Ton";
            cool2.innerHTML = "55000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "6.9-4.1 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 80,400/-"
        }
        if (option2 == "FDTW140KXE6F VRF 2-Way") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cassette/04.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "FDTW140KXE6F";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.9 Ton";
            cool2.innerHTML = "61000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4100 W";
            eer2.innerHTML = "7.5-3.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 163,400/-"
        }
        if (option2 == "FDTS71KXE6F VRF 1-Way") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Mitsubishi/Cassette/05.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Mitsubishi";
            model2.innerHTML = "FDTS71KXE6F";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.5 Ton";
            cool2.innerHTML = "54000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5600 W";
            eer2.innerHTML = "8.1-4.3 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 122,400/-"
        }
        if (option2 == "CACI12OC3I6 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Split/01.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "CACI12OC3I6";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Grey";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4200 W";
            eer2.innerHTML = "8.1-3.85 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 146,300/-"
        }
        if (option2 == "CACS18SU3C3 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Split/02.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "CACS18SU3C3";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "24000 BTU";
            power2.innerHTML = "4500 W";
            eer2.innerHTML = "6.4-4.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 156,800/-"
        }
        if (option2 == "Durakool Star 42KGL 012T 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Split/03.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "42KGL 012T";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5500 W";
            eer2.innerHTML = "7.2-5.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 164,686/-"
        }
        if (option2 == "Xpower Gold 42CVSR022 703 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Split/04.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "42CVSR022";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4600 W";
            eer2.innerHTML = "6.1-3.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 275,700/-"
        }
        if (option2 == "Xpower Gold 42CVSR018 703 1.5 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Split/05.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "42CVSR018";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3900 W";
            eer2.innerHTML = "7.2-4.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 95,700/-"
        }
        if (option2 == "1.5 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "C565HT7";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "39000 BTU";
            heat2.innerHTML = "31000 BTU";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "7.1-3.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 180,000/-"
        }
        if (option2 == "4.0HP Non-Inverter") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "4.0NI";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3200 W";
            eer2.innerHTML = "6.1-4.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 202,600/-"
        }
        if (option2 == "6.0HP Non-Inverter") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cabinet/03.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "6.0NI";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.5 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4300 W";
            eer2.innerHTML = "6.4-3.45 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 137,200/-"
        }
        if (option2 == "5.0HP Inverter") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cabinet/04.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "5.0I";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.7 Ton";
            cool2.innerHTML = "35000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5800 W";
            eer2.innerHTML = "5.7-2.80 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 366,000/-"
        }
        if (option2 == "4.0HP Inverter") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cabinet/05.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "4.0I";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.3 Ton";
            cool2.innerHTML = "43000 BTU";
            heat2.innerHTML = "38000 BTU";
            power2.innerHTML = "3500 W";
            eer2.innerHTML = "4.7-1.80 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 299,700/-"
        }
        if (option2 == "3.0HP A5CK 28E/A5LC 28C") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "28E/A5LC";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.1 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4600 W";
            eer2.innerHTML = "7.2-3.45 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 87,600/-"
        }
        if (option2 == "2.5HP A5CK 25E/A5LC 20C") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cassette/02.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "A5CK 25E/A5LC";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.9 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5600 W";
            eer2.innerHTML = "5.3-2.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 89,600/-"
        }
        if (option2 == "2.0HP A5CKY 20E/A5LCY 20C") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cassette/03.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "A5CKY 20E/A5LCY";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "49000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "6600 W";
            eer2.innerHTML = "6.3-2.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 219,900/-"
        }
        if (option2 == "4.0HP A5CK 40E/A5LCY 40D") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cassette/04.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "A5CK 40E";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5200 W";
            eer2.innerHTML = "7.3-3.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 110,700/-"
        }
        if (option2 == "5.0HP A5CKY 50ER/A5LCY 50FR") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Carrier/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Carrier";
            model2.innerHTML = "50ER/A5LCY";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.5 Ton";
            cool2.innerHTML = "43000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "6200 W";
            eer2.innerHTML = "5.7-2.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 135,000/-"
        }
        if (option2 == "Econotech Series 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Split/01.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OACI3I6";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "52000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "6.2-3.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 36,500/-"
        }
        if (option2 == "OS-13 MP14 BM Pattern Series 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Split/02.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OS-13 MP14";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Grey";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "47000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "7.2-2.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 38,500/-"
        }
        if (option2 == "DC Inverter Ultron Plus 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Split/03.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "Ultron MP59";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Brown";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "53000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "5.5-3.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 96,000/-"
        }
        if (option2 == "DC Inverter Inventage 1.5 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Split/04.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "Ultron IH59";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Balck";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "47000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "5200 W";
            eer2.innerHTML = "6.2-2.1 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 60,000/-"
        }
        if (option2 == "DC Inverter Easy Clean 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Split/05.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "Ultra E69";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Balck";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "57000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "7.1-4.6 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 54,000/-"
        }
        if (option2 == "2 Ton OFS-24-MJ") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OFS-24-MJ";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "40000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4600 W";
            eer2.innerHTML = "5.3-2.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 90,999/-"
        }
        if (option2 == "4 Ton OFS - 48 S2") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OFS-48 S2";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3200 W";
            eer2.innerHTML = "6.5-3.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 131,999/-"
        }
        if (option2 == "4 Ton OF-48MJ") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OF-48MJ";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "58000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4500 W";
            eer2.innerHTML = "7.5-3.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 136,999/-"
        }
        if (option2 == "OFS-24MS2 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OFS-24MS2";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "5.8-2.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 90,999/-"
        }
        if (option2 == "2 Ton OFS-24-MJ") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "OFS-24-MJ";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4300 W";
            eer2.innerHTML = "6.8-2.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 90,999/-"
        }
        if (option2 == "HBU-18HF03") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "18HF03";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "6.6-2.35 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 113,000/-"
        }
        if (option2 == "HBU-24CA03") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cassette/02.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "24CA03";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "43000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "4.6-2.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 122,000/-"
        }
        if (option2 == "HBU-36HH03") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cassette/03.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "36HH03";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.9 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4200 W";
            eer2.innerHTML = "6.1-3.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 188,000/-"
        }
        if (option2 == "HBU-50CA03T3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cassette/04.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "50CA03T3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3400 W";
            eer2.innerHTML = "4.3-2.1 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 240,000/-"
        }
        if (option2 == "HBU-60CAO3T3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Orient/Cassette/05.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Orient";
            model2.innerHTML = "60CAO3T3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "25000 BTU";
            power2.innerHTML = "2900 W";
            eer2.innerHTML = "5.4-3.6 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 269,000/-"
        }
        if (option2 == "SA-KC22BG3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Split/01.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "KC22BG3";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Grey";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "6.4-2.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 122,000/-"
        }
        if (option2 == "SAP-KR543E") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Split/02.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "KR543E";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.8 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3600 W";
            eer2.innerHTML = "4.1-1.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 286,400/-"
        }
        if (option2 == "SA-KC18BG3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Split/03.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "KC18BG3";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.8 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3900 W";
            eer2.innerHTML = "5.5-1.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 138,900/-"
        }
        if (option2 == "SA-KC12BG3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Split/04.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "KC12BG3";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3 Ton";
            cool2.innerHTML = "41000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3500 W";
            eer2.innerHTML = "6.4-3.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 292,000/-"
        }
        if (option2 == "SA-KC9BG3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Split/05.png";
            image2.style.width = "280px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "KC9BG3";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Grey";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "53000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4100 W";
            eer2.innerHTML = "7.1-2.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 98,100/-"
        }
        if (option2 == "0.75 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "SN07";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "0.7 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4500 W";
            eer2.innerHTML = "6.2-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 158,400/-"
        }
        if (option2 == "2.3 Ton RQ71CXV1") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "RQ71CXV1";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.3 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4100 W";
            eer2.innerHTML = "5.7-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 299,000/-"
        }
        if (option2 == "3.8 Ton RQ125DXY1") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cabinet/03.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "RQ125DXY1";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3.8 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3700 W";
            eer2.innerHTML = "6.2-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 256,100/-"
        }
        if (option2 == "4.6 Ton RQ140CXV1") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cabinet/04.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "RQ140CXV1";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4.6 Ton";
            cool2.innerHTML = "32000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "2900 W";
            eer2.innerHTML = "4.7-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 197,100/-"
        }
        if (option2 == "2.0 Ton RQC25C") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cabinet/05.png";
            image2.style.height = "150px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "RQC25C";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4.0 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "2100 W";
            eer2.innerHTML = "6.7-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 88,700/-"
        }
        if (option2 == "SN-58CA32 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "58CA32";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "51000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4600 W";
            eer2.innerHTML = "7.7-3.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 148,200/-"
        }
        if (option2 == "SN-24UA74 1.5 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cassette/02.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "24UA74";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "6.7-3.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 254,800/-"
        }
        if (option2 == "SN-96BA53 1 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cassette/03.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "96BA53";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "40000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3400 W";
            eer2.innerHTML = "5.4-2.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 185,000/-"
        }
        if (option2 == "SN-45FA68 1.7 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cassette/04.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "45FA68";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.7 Ton";
            cool2.innerHTML = "31000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "2800 W";
            eer2.innerHTML = "3.4-1.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 248,100/-"
        }
        if (option2 == "SN-26YA44 2 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/Sanyo/Cassette/05.png";
            image2.style.height = "140px";
            brand2.innerHTML = "Sanyo";
            model2.innerHTML = "26YA44";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "34000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3200 W";
            eer2.innerHTML = "4.5-2.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 79,999/-"
        }
        if (option2 == "TS-C126LGA7 (1 Ton)") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Split/01.png";
            image2.style.width = "280px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "C126LGA7";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4700 W";
            eer2.innerHTML = "6.2-2.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 45,000/-"
        }
        if (option2 == "TS-186KAA7 (1.5 Ton)") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Split/02.png";
            image2.style.width = "280px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "186KAA7";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "Red";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "48000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3400 W";
            eer2.innerHTML = "5.1-3.75 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 55,500/-"
        }
        if (option2 == "TS-C246KAA7 (2 Ton)") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Split/03.png";
            image2.style.width = "280px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "C246KAA7";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "36000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4500 W";
            eer2.innerHTML = "6.4-2.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 63,800/-"
        }
        if (option2 == "LS-UC1868RMO (1.5 Ton)") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Split/04.png";
            image2.style.width = "280px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "UC1868RMO";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.5 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4200 W";
            eer2.innerHTML = "5.1-3.4 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 80,800/-"
        }
        if (option2 == "LS-UC2468RMO (2 Ton)") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Split/05.png";
            image2.style.width = "280px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "UC2468RMO";
            type2.innerHTML = "Wall Mounted Split AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3200 W";
            eer2.innerHTML = "6.5-2.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 89,000/-"
        }
        if (option2 == "AF-Q236GMC0") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cabinet/01.png";
            image2.style.height = "150px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "Q236GMC0";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "57000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4800 W";
            eer2.innerHTML = "7.3-4.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 298,200/-"
        }
        if (option2 == "TPC C 488 TICI 4 Ton") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cabinet/02.png";
            image2.style.height = "150px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "488 TICI";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "4 Ton";
            cool2.innerHTML = "43000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3800 W";
            eer2.innerHTML = "6.6-2.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 204,999/-"
        }
        if (option2 == "TP-C186SLV0") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cabinet/03.png";
            image2.style.height = "150px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "C186SLV0";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "36000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "2700 W";
            eer2.innerHTML = "5.3-2.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 93,300/-"
        }
        if (option2 == "TP-C488TLV0") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cabinet/04.png";
            image2.style.height = "150px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "C488TLV0";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3 Ton";
            cool2.innerHTML = "33000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3600 W";
            eer2.innerHTML = "6.1-2.5 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 128,000/-"
        }
        if (option2 == "TP-C508TLA1") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cabinet/05.png";
            image2.style.height = "150px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "C508TLA1";
            type2.innerHTML = "Floor Standing AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "1.7 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4200 W";
            eer2.innerHTML = "7.4-2.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 94,400/-"
        }
        if (option2 == "ATNQ18GPLE3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cassette/01.png";
            image2.style.height = "140px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "G-ATNQ18";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "38000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4600 W";
            eer2.innerHTML = "6.7-3.45 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 263,600/-"
        }
        if (option2 == "ATNQ21GPLE3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cassette/02.png";
            image2.style.height = "140px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "G-Q21GPLE3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "4300 W";
            eer2.innerHTML = "5.4-2.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 374,800/-"
        }
        if (option2 == "ATNQ24GNLE3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cassette/03.png";
            image2.style.height = "140px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "ATNQ24GNLE3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.8 Ton";
            cool2.innerHTML = "42000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3500 W";
            eer2.innerHTML = "6.6-3.2 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 243,100/-"
        }
        if (option2 == "ATNQ36GMLE3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cassette/04.png";
            image2.style.height = "140px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "ATNQ36GMLE3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "3 Ton";
            cool2.innerHTML = "37000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3500 W";
            eer2.innerHTML = "4.2-1.8 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 138,000/-"
        }
        if (option2 == "ATNQ42GMLE3") {
            image2.style.width = "";
            image2.style.height = "";
            image2.src = "../Images/Brands/LG/Cassette/05.png";
            image2.style.height = "140px";
            brand2.innerHTML = "LG";
            model2.innerHTML = "ATNQ42GMLE3";
            type2.innerHTML = "Ceiling Cassette AC";
            color2.innerHTML = "White";
            ton2.innerHTML = "2.5 Ton";
            cool2.innerHTML = "43000 BTU";
            heat2.innerHTML = "/";
            power2.innerHTML = "3900 W";
            eer2.innerHTML = "6.4-2.7 Btu/W-h-W/W";
            price2.innerHTML = "Rs. 320,500/-"
        }
    }
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
