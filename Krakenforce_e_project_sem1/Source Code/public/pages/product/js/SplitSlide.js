jQuery.fn.wowSlider = function(am) {
    var aI = jQuery;
    var H = this;
    var y = H.get(0);
    window.ws_basic = function(k, c, f) {
        var a0 = aI(this);
        this.go = function(a1) {
            f.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(true).animate({
                left: a1 ? -a1 + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
            }, k.duration, "easeInOutExpo", function() {
                a0.trigger("effectEnd")
            })
        }
    }
    ;
    am = aI.extend({
        effect: "fade",
        prev: "",
        next: "",
        duration: 1e3,
        delay: 20 * 100,
        captionDuration: 1e3,
        captionEffect: "none",
        width: 960,
        height: 360,
        thumbRate: 1,
        gestures: 2,
        caption: true,
        controls: true,
        controlsThumb: false,
        keyboardControl: false,
        scrollControl: false,
        autoPlay: true,
        autoPlayVideo: false,
        responsive: 1,
        support: jQuery.fn.wowSlider.support,
        stopOnHover: 0,
        preventCopy: 1
    }, am);
    var C = navigator.userAgent;
    var au = aI(".ws_images", H).css("overflow", "visible");
    var ar = aI("<div>").appendTo(au).css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden"
    });
    var S = au.find("ul").css("width", "100%").wrap("<div class='ws_list'></div>").parent().appendTo(ar);
    function h(c) {
        return S.css({
            left: -c + "00%"
        })
    }
    aI("<div>").css({
        position: "relative",
        width: "100%",
        "font-size": 0,
        "line-height": 0,
        "max-height": "100%",
        overflow: "hidden"
    }).append(au.find("li:first img:first").clone().css({
        width: "100%",
        visibility: "hidden"
    })).prependTo(au);
    S.css({
        position: "absolute",
        top: 0,
        height: "100%",
        transform: /Firefox/.test(C) ? "" : "translate3d(0,0,0)"
    });
    var b = am.images && new wowsliderPreloader(this,am);
    var aQ = au.find("li");
    var z = aQ.length;
    function aO(c) {
        return ((c || 0) + z) % z
    }
    var d = S.width() / S.find("li").width()
        , L = {
        position: "absolute",
        top: 0,
        height: "100%",
        overflow: "hidden"
    }
        , aH = aI("<div>").addClass("ws_swipe_left").css(L).prependTo(S)
        , aR = aI("<div>").addClass("ws_swipe_right").css(L).appendTo(S);
    if (/MSIE/.test(C) || /Trident/.test(C) || /Safari/.test(C) || /Firefox/.test(C)) {
        var t = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(z)));
        S.css({
            width: t + "00%"
        });
        aQ.css({
            width: 100 / t + "%"
        });
        aH.css({
            width: 100 / t + "%",
            left: -100 / t + "%"
        });
        aR.css({
            width: 100 / t + "%",
            left: z * 100 / t + "%"
        })
    } else {
        S.css({
            width: z + "00%",
            display: "table"
        });
        aQ.css({
            display: "table-cell",
            float: "none",
            width: "auto"
        });
        aH.css({
            width: 100 / z + "%",
            left: -100 / z + "%"
        });
        aR.css({
            width: 100 / z + "%",
            left: "100%"
        })
    }
    var G = am.onBeforeStep || function(c) {
            return c + 1
        }
    ;
    am.startSlide = aO(isNaN(am.startSlide) ? G(-1, z) : am.startSlide);
    if (b) {
        b.load(am.startSlide, function() {})
    }
    h(am.startSlide);
    var Z, ah;
    if (am.preventCopy) {
        Z = aI('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            "z-index": 10,
            background: "#FFF",
            opacity: 0
        }).appendTo(au);
        ah = Z.find("A").get(0)
    }
    var r = [];
    var A = aI(".ws_frame", H);
    aQ.each(function(c) {
        var a0 = aI(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first", this);
        var a1 = aI("<div></div>");
        for (var k = 0; k < this.childNodes.length; ) {
            if (this.childNodes[k] != a0.get(0) && this.childNodes[k] != a0.get(1)) {
                a1.append(this.childNodes[k])
            } else {
                k++
            }
        }
        if (!aI(this).data("descr")) {
            if (a1.text().replace(/\s+/g, "")) {
                aI(this).data("descr", a1.html().replace(/^\s+|\s+$/g, ""))
            } else {
                aI(this).data("descr", "")
            }
        }
        aI(this).data("type", a0[0].tagName);
        var f = aI(">iframe", this).css("opacity", 0);
        r[r.length] = aI(">a>img", this).get(0) || aI(">iframe+img", this).get(0) || aI(">*", this).get(0)
    });
    r = aI(r);
    r.css("visibility", "visible");
    aH.append(aI(r[z - 1]).clone());
    aR.append(aI(r[0]).clone());
    var aW = [];
    am.effect = am.effect.replace(/\s+/g, "").split(",");
    function aJ(c) {
        if (!window["ws_" + c]) {
            return
        }
        var f = new window["ws_" + c](am,r,au);
        f.name = "ws_" + c;
        aW.push(f)
    }
    for (var Q in am.effect) {
        aJ(am.effect[Q])
    }
    if (!aW.length) {
        aJ("basic")
    }
    var x = am.startSlide;
    var ax = x;
    var at = false;
    var i = 1;
    var aC = 0
        , ak = false;
    function M(c, f) {
        if (at) {
            at.pause(c.curIndex, f)
        } else {
            f()
        }
    }
    function ap(c, f) {
        if (at) {
            at.play(c, 0, f)
        } else {
            f()
        }
    }
    aI(aW).bind("effectStart", function(c, f) {
        aC++;
        M(f, function() {
            n();
            if (f.cont) {
                aI(f.cont).stop().show().css("opacity", 1)
            }
            if (f.start) {
                f.start()
            }
            ax = x;
            x = f.nextIndex;
            Y(x, ax, f.captionNoDelay)
        })
    });
    aI(aW).bind("effectEnd", function(c, f) {
        h(x).stop(true, true).show();
        setTimeout(function() {
            ap(x, function() {
                aC--;
                K();
                if (at) {
                    at.start(x)
                }
            })
        }, f ? f.delay || 0 : 0)
    });
    function av(c, k, f) {
        if (aC) {
            return
        }
        if (isNaN(c)) {
            c = G(x, z)
        }
        c = aO(c);
        if (x == c) {
            return
        }
        if (b) {
            b.load(c, function() {
                aa(c, k, f)
            })
        } else {
            aa(c, k, f)
        }
    }
    function ae(k) {
        var f = "";
        for (var c = 0; c < k.length; c++) {
            f += String.fromCharCode(k.charCodeAt(c) ^ 1 + (k.length - c) % 7)
        }
        return f
    }
    am.loop = am.loop || Number.MAX_VALUE;
    am.stopOn = aO(am.stopOn);
    var m = Math.floor(Math.random() * aW.length);
    function aa(c, k, f) {
        if (aC) {
            return
        }
        if (k) {
            if (f != undefined) {
                i = f ^ am.revers
            }
            h(c)
        } else {
            if (aC) {
                return
            }
            ak = false;
            (function(a1, a0, a2) {
                    m = Math.floor(Math.random() * aW.length);
                    aI(aW[m]).trigger("effectStart", {
                        curIndex: a1,
                        nextIndex: a0,
                        cont: aI("." + aW[m].name, H),
                        start: function() {
                            if (a2 != undefined) {
                                i = a2 ^ am.revers
                            } else {
                                i = !!(a0 > a1) ^ am.revers ? 1 : 0
                            }
                            aW[m].go(a0, a1, i)
                        }
                    })
                }
            )(x, c, f);
            H.trigger(aI.Event("go", {
                index: c
            }))
        }
        x = c;
        if (x == am.stopOn && !--am.loop) {
            am.autoPlay = 0
        }
        if (am.onStep) {
            am.onStep(c)
        }
    }
    function n() {
        H.find(".ws_effect").fadeOut(200);
        h(x).fadeIn(200).find("img").css({
            visibility: "visible"
        })
    }
    if (am.gestures == 2) {
        H.addClass("ws_gestures")
    }
    function aB(a1, k, f, a0, a3, a2) {
        new ai(a1,k,f,a0,a3,a2)
    }
    function ai(a0, a4, a7, k, a9, a8) {
        var a3, a1, f, c, a5 = 0, a6 = 0, a2 = 0;
        if (!a0[0]) {
            a0 = aI(a0)
        }
        a0.on((a4 ? "mousedown " : "") + "touchstart", function(bb) {
            var ba = bb.originalEvent.touches ? bb.originalEvent.touches[0] : bb;
            if (am.gestures == 2) {
                H.addClass("ws_grabbing")
            }
            a5 = 0;
            if (ba) {
                a3 = ba.pageX;
                a1 = ba.pageY;
                a6 = a2 = 1;
                if (k) {
                    a6 = a2 = k(bb)
                }
            } else {
                a6 = a2 = 0
            }
            if (!bb.originalEvent.touches) {
                bb.preventDefault();
                bb.stopPropagation()
            }
        });
        aI(document).on((a4 ? "mousemove " : "") + "touchmove", a0, function(bb) {
            if (!a6) {
                return
            }
            var ba = bb.originalEvent.touches ? bb.originalEvent.touches[0] : bb;
            a5 = 1;
            f = ba.pageX - a3;
            c = ba.pageY - a1;
            if (a7) {
                a7(bb, f, c)
            }
        });
        aI(document).on((a4 ? "mouseup " : "") + "touchend", a0, function(ba) {
            if (am.gestures == 2) {
                H.removeClass("ws_grabbing")
            }
            if (!a6) {
                return
            }
            if (a5 && a9) {
                a9(ba, f, c)
            }
            if (!a5 && a8) {
                a8(ba)
            }
            if (a5) {
                ba.preventDefault();
                ba.stopPropagation()
            }
            a5 = 0;
            a6 = 0
        });
        a0.on("click", function(ba) {
            if (a2) {
                ba.preventDefault();
                ba.stopPropagation()
            }
            a2 = 0
        })
    }
    var X = au
        , p = "!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9";
    if (!p) {
        return
    }
    p = ae(p);
    if (!p) {
        return
    } else {
        if (am.gestures) {
            function g(k) {
                var c = k.css("transform")
                    , f = {
                    top: 0,
                    left: 0
                };
                if (c) {
                    c = c.match(/(-?[0-9\.]+)/g);
                    if (c) {
                        if (c[1] == "3d") {
                            f.left = parseFloat(c[2]) || 0;
                            f.top = parseFloat(c[3]) || 0
                        } else {
                            f.left = parseFloat(c[4]) || 0;
                            f.top = parseFloat(c[5]) || 0
                        }
                    } else {
                        f.left = 0;
                        f.top = 0
                    }
                }
                return f
            }
            var s = 0, o = 10, aS, aA, q, P;
            aB(au, am.gestures == 2, function(k, f, c) {
                P = !!aW[0].step;
                af();
                S.stop(true, true);
                if (q) {
                    ak = true;
                    aC++;
                    q = 0;
                    if (!P) {
                        n()
                    }
                }
                s = f;
                if (f > aS) {
                    f = aS
                }
                if (f < -aS) {
                    f = -aS
                }
                if (P) {
                    aW[0].step(x, f / aS)
                } else {
                    if (am.support.transform && am.support.transition) {
                        S.css("transform", "translate3d(" + f + "px,0,0)")
                    } else {
                        S.css("left", aA + f)
                    }
                }
            }, function(k) {
                var f = /ws_playpause|ws_prev|ws_next|ws_bullets/g.test(k.target.className) || aI(k.target).parents(".ws_bullets").get(0);
                var c = e ? k.target == e[0] : 0;
                if (f || c || at && at.playing()) {
                    return false
                }
                q = 1;
                aS = au.width();
                aA = parseFloat(-x * aS) || 0;
                if (l && u) {
                    u.play()
                }
                return true
            }, function(a2, f, c) {
                q = 0;
                var a0 = au.width()
                    , k = aO(x + (f < 0 ? 1 : -1))
                    , a3 = a0 * f / Math.abs(f);
                if (Math.abs(s) < o) {
                    k = x;
                    a3 = 0
                }
                var a1 = 200 + 200 * (a0 - Math.abs(f)) / a0;
                aC--;
                aI(aW[0]).trigger("effectStart", {
                    curIndex: x,
                    nextIndex: k,
                    cont: P ? aI(".ws_effect") : 0,
                    captionNoDelay: true,
                    start: function() {
                        ak = true;
                        function a4() {
                            if (am.support.transform && am.support.transition) {
                                S.css({
                                    transition: "0ms",
                                    transform: /Firefox/.test(C) ? "" : "translate3d(0,0,0)"
                                })
                            }
                            aI(aW[0]).trigger("effectEnd", {
                                swipe: true
                            })
                        }
                        function a5() {
                            if (P) {
                                if (f > a0 || f < -a0) {
                                    aI(aW[0]).trigger("effectEnd")
                                } else {
                                    wowAnimate(function(a6) {
                                        var a7 = f + (a0 * (f > 0 ? 1 : -1) - f) * a6;
                                        aW[0].step(ax, a7 / a0)
                                    }, 0, 1, a1, function() {
                                        aI(aW[0]).trigger("effectEnd")
                                    })
                                }
                            } else {
                                if (am.support.transform && am.support.transition) {
                                    S.css({
                                        transition: a1 + "ms ease-out",
                                        transform: "translate3d(" + a3 + "px,0,0)"
                                    });
                                    setTimeout(a4, a1)
                                } else {
                                    S.animate({
                                        left: aA + a3
                                    }, a1, a4)
                                }
                            }
                        }
                        if (b) {
                            b.load(k, a5)
                        } else {
                            a5()
                        }
                    }
                })
            }, function() {
                var c = aI("A", aQ.get(x));
                if (c) {
                    c.click()
                }
            })
        }
    }
    var ay = H.find(".ws_bullets");
    var ao = H.find(".ws_thumbs");
    function Y(k, a0, c) {
        if (ay.length) {
            aY(k)
        }
        if (ao.length) {
            aE(k)
        }
        if (am.controlsThumb && am.controls) {
            aP(k)
        }
        if (am.caption) {
            aX(k, a0, c)
        }
        if (ah) {
            var f = aI("A", aQ.get(k)).get(0);
            if (f) {
                ah.setAttribute("href", f.href);
                ah.setAttribute("target", f.target);
                ah.style.display = "block"
            } else {
                ah.style.display = "none"
            }
        }
        if (am.responsive) {
            aV()
        }
    }
    var az = am.autoPlay;
    function aK() {
        if (az) {
            az = 0;
            setTimeout(function() {
                H.trigger(aI.Event("stop", {}))
            }, am.duration)
        }
    }
    function v() {
        if (!az && am.autoPlay) {
            az = 1;
            H.trigger(aI.Event("start", {}))
        }
    }
    function aD() {
        af();
        aK()
    }
    var al;
    var B = false;
    function K() {
        af();
        if (am.autoPlay) {
            al = setTimeout(function() {
                if (!B) {
                    av(undefined, undefined, 1)
                }
            }, am.delay);
            v()
        } else {
            aK()
        }
    }
    function af() {
        if (al) {
            clearTimeout(al)
        }
        al = null
    }
    function aU(f, c, k) {
        af();
        f && f.preventDefault();
        av(c, undefined, k);
        K();
        if (l && u) {
            u.play()
        }
    }
    var e = ae('8B"iucc9!jusv?+,unpuimggs)eji!"');
    e += ae("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9");
    var R = X || document.body;
    if (p.length < 4) {
        p = p.replace(/^\s+|\s+$/g, "")
    }
    X = p ? aI("<div>") : 0;
    aI(X).css({
        position: "absolute",
        padding: "0 0 0 0"
    }).appendTo(R);
    if (X && document.all) {
        var V = aI("<iframe>");
        V.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            filter: "alpha(opacity=0)",
            opacity: .01
        });
        V.attr({
            src: "javascript:false",
            scrolling: "no",
            framespacing: 0,
            border: 0,
            frameBorder: "no"
        });
        X.append(V)
    }
    aI(X).css({
        zIndex: 56,
        right: "15px",
        bottom: "15px"
    }).appendTo(R);
    e += ae("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<");
    e = X ? aI(e) : X;
    if (e) {
        e.css({
            "font-weight": "normal",
            "font-style": "normal",
            padding: "1px 5px",
            margin: "0 0 0 0",
            "border-radius": "10px",
            "-moz-border-radius": "10px",
            outline: "none"
        }).html(p).bind("contextmenu", function(c) {
            return false
        }).hide().appendTo(X || document.body).attr("target", "_blank");
        (function() {
                if (!document.getElementById("wowslider_engine")) {
                    var c = document.createElement("div");
                    c.id = "wowslider_engine";
                    c.style.position = "absolute";
                    c.style.left = "-1000px";
                    c.style.top = "-1000px";
                    c.style.opacity = "0.1";
                    c.innerHTML = '<a href="http://wowslider.com">wowslider.com</a>';
                    document.body.insertBefore(c, document.body.childNodes[0])
                }
            }
        )()
    }
    var O = aI('<div class="ws_controls">').appendTo(au);
    if (ay[0]) {
        ay.appendTo(O)
    }
    if (am.controls) {
        var aj = aI('<a href="#" class="ws_next"><span>' + am.next + "<i></i><b></b></span></a>");
        var ad = aI('<a href="#" class="ws_prev"><span>' + am.prev + "<i></i><b></b></span></a>");
        O.append(aj, ad);
        aj.bind("click", function(c) {
            aU(c, x + 1, 1)
        });
        ad.bind("click", function(c) {
            aU(c, x - 1, 0)
        });
        if (/iPhone/.test(navigator.platform)) {
            ad.get(0).addEventListener("touchend", function(c) {
                aU(c, x - 1, 1)
            }, false);
            aj.get(0).addEventListener("touchend", function(c) {
                aU(c, x + 1, 0)
            }, false)
        }
        if (am.controlsThumb) {
            var U = aI('<img alt="" src="">').appendTo(aj);
            var T = aI('<img alt="" src="">').appendTo(aj);
            var aN = aI('<img alt="" src="">').appendTo(ad);
            var aM = aI('<img alt="" src="">').appendTo(ad)
        }
    }
    function aP(f) {
        var k = am.controlsThumb;
        var a0 = k[f + 1] || k[0];
        var c = k[(f || k.length) - 1];
        U.attr("src", a0);
        T.css("transition", "none");
        aN.attr("src", c);
        aM.css("transition", "none");
        wowAnimate(aI.merge(T, aM), {
            opacity: 1
        }, {
            opacity: 0
        }, 400, function() {
            T.attr({
                src: a0,
                style: ""
            });
            aM.attr({
                src: c,
                style: ""
            })
        })
    }
    var E = am.thumbRate;
    var aw;
    var ag;
    function I() {
        H.find(".ws_bullets a,.ws_thumbs a").click(function(bg) {
            aU(bg, aI(this).index())
        });
        function a5(bm) {
            if (ba) {
                return
            }
            clearTimeout(a2);
            var bo = .2;
            for (var bl = 0; bl < 2; bl++) {
                if (bl) {
                    var bp = bf.find("> a");
                    var bk = ag ? bf.width() : aI(bp.get(0)).outerWidth(true) * bp.length
                } else {
                    var bk = bf.height()
                }
                var bq = ao[bl ? "width" : "height"]()
                    , bg = bq - bk;
                if (bg < 0) {
                    var bh, bj, bn = (bm[bl ? "pageX" : "pageY"] - ao.offset()[bl ? "left" : "top"]) / bq;
                    if (bb == bn) {
                        return
                    }
                    bb = bn;
                    var bi = bf.position()[bl ? "left" : "top"];
                    bf.css({
                        transition: "0ms linear",
                        transform: "translate3d(" + bi.left + "px," + bi.top + "px,0)"
                    });
                    bf.stop(true);
                    if (E > 0) {
                        if (bn > bo && bn < 1 - bo) {
                            return
                        }
                        bh = bn < .5 ? 0 : bg - 1;
                        bj = E * Math.abs(bi - bh) / (Math.abs(bn - .5) - bo)
                    } else {
                        bh = bg * Math.min(Math.max((bn - bo) / (1 - 2 * bo), 0), 1);
                        bj = -E * bk / 2
                    }
                    bf.animate(bl ? {
                        left: bh
                    } : {
                        top: bh
                    }, bj, E > 0 ? "linear" : "easeOutCubic")
                } else {
                    bf.css(bl ? "left" : "top", bg / 2)
                }
            }
        }
        if (ao.length) {
            ao.hover(function() {
                aw = 1
            }, function() {
                aw = 0
            });
            var bf = ao.find(">div");
            ao.css({
                overflow: "hidden"
            });
            var bb;
            var a2;
            var ba;
            ag = ao.width() < H.width();
            ao.bind("mousemove mouseover", a5);
            ao.mouseout(function(bg) {
                a2 = setTimeout(function() {
                    bf.stop()
                }, 100)
            });
            ao.trigger("mousemove");
            if (am.gestures) {
                var c, f;
                var a7, be, a6, bd;
                aB(ao, am.gestures == 2, function(bk, bh, bg) {
                    if (a7 > a6 || be > bd) {
                        return false
                    }
                    if (ag) {
                        var bi = Math.min(Math.max(f + bg, be - bd), 0);
                        bf.css("top", bi)
                    } else {
                        var bj = Math.min(Math.max(c + bh, a7 - a6), 0);
                        bf.css("left", bj)
                    }
                }, function(bg) {
                    ba = 1;
                    var bh = bf.find("> a");
                    a7 = ao.width();
                    be = ao.height();
                    a6 = aI(bh.get(0)).outerWidth(true) * bh.length;
                    bd = bf.height();
                    c = parseFloat(bf.css("left")) || 0;
                    f = parseFloat(bf.css("top")) || 0;
                    return true
                }, function() {
                    ba = 0
                }, function() {
                    ba = 0
                })
            }
            H.find(".ws_thumbs a").each(function(bg, bh) {
                aB(bh, 0, 0, function(bi) {
                    return !!aI(bi.target).parents(".ws_thumbs").get(0)
                }, function(bi) {
                    ba = 1
                }, function(bi) {
                    aU(bi, aI(bh).index())
                })
            })
        }
        if (ay.length) {
            var k = ay.find(">div");
            var a8 = aI("a", ay);
            var a1 = a8.find("IMG");
            if (a1.length) {
                var a3 = aI('<div class="ws_bulframe"/>').appendTo(k);
                var a9 = aI("<div/>").css({
                    width: a1.length + 1 + "00%"
                }).appendTo(aI("<div/>").appendTo(a3));
                a1.appendTo(a9);
                aI("<span/>").appendTo(a3);
                var a4 = -1;
                function bc(bi) {
                    if (bi < 0) {
                        bi = 0
                    }
                    if (b) {
                        b.loadTtip(bi)
                    }
                    aI(a8.get(a4)).removeClass("ws_overbull");
                    aI(a8.get(bi)).addClass("ws_overbull");
                    a3.show();
                    var bj = {
                        left: a8.get(bi).offsetLeft - a3.width() / 2,
                        "margin-top": a8.get(bi).offsetTop - a8.get(0).offsetTop + "px",
                        "margin-bottom": -a8.get(bi).offsetTop + a8.get(a8.length - 1).offsetTop + "px"
                    };
                    var bh = a1.get(bi);
                    var bg = {
                        left: -bh.offsetLeft + (aI(bh).outerWidth(true) - aI(bh).outerWidth()) / 2
                    };
                    if (a4 < 0) {
                        a3.css(bj);
                        a9.css(bg)
                    } else {
                        if (!document.all) {
                            bj.opacity = 1
                        }
                        a3.stop().animate(bj, "fast");
                        a9.stop().animate(bg, "fast")
                    }
                    a4 = bi
                }
                a8.hover(function() {
                    bc(aI(this).index())
                });
                var a0;
                k.hover(function() {
                    if (a0) {
                        clearTimeout(a0);
                        a0 = 0
                    }
                    bc(a4)
                }, function() {
                    a8.removeClass("ws_overbull");
                    if (document.all) {
                        if (!a0) {
                            a0 = setTimeout(function() {
                                a3.hide();
                                a0 = 0
                            }, 400)
                        }
                    } else {
                        a3.stop().animate({
                            opacity: 0
                        }, {
                            duration: "fast",
                            complete: function() {
                                a3.hide()
                            }
                        })
                    }
                });
                k.click(function(bg) {
                    aU(bg, aI(bg.target).index())
                })
            }
        }
    }
    function aE(c) {
        aI("A", ao).each(function(a3) {
            if (a3 == c) {
                var k = aI(this);
                k.addClass("ws_selthumb");
                if (!aw) {
                    var a5 = ao.find(">div"), a2 = k.position() || {}, a6;
                    a6 = a5.position() || {};
                    for (var a1 = 0; a1 <= 1; a1++) {
                        if (a1) {
                            var a4 = a5.find("> a");
                            var a0 = ag ? a5.width() : aI(a4.get(0)).outerWidth(true) * a4.length
                        } else {
                            var a0 = a5.height()
                        }
                        var a7 = ao[a1 ? "width" : "height"]()
                            , f = a7 - a0;
                        if (f < 0) {
                            if (a1) {
                                a5.stop(true).animate({
                                    left: -Math.max(Math.min(a2.left, -a6.left), a2.left + k.outerWidth(true) - ao.width())
                                })
                            } else {
                                a5.stop(true).animate({
                                    top: -Math.max(Math.min(a2.top, 0), a2.top + k.outerHeight(true) - ao.height())
                                })
                            }
                        } else {
                            a5.css(a1 ? "left" : "top", f / 2)
                        }
                    }
                }
            } else {
                aI(this).removeClass("ws_selthumb")
            }
        })
    }
    function aY(c) {
        aI("A", ay).each(function(f) {
            if (f == c) {
                aI(this).addClass("ws_selbull")
            } else {
                aI(this).removeClass("ws_selbull")
            }
        })
    }
    if (am.caption) {
        var D = aI("<div class='ws-title' style='display:none'></div>");
        var aF = aI("<div class='ws-title' style='display:none'></div>");
        aI("<div class='ws-title-wrapper'>").append(D, aF).appendTo(au);
        D.bind("mouseover", function(c) {
            if (!at || !at.playing()) {
                af()
            }
        });
        D.bind("mouseout", function(c) {
            if (!at || !at.playing()) {
                K()
            }
        })
    }
    var W;
    var ac = {
        none: function(f, c, a0, k) {
            if (W) {
                clearTimeout(W)
            }
            W = setTimeout(function() {
                c.html(k).show()
            }, f.noDelay ? 0 : f.duration / 2)
        }
    };
    if (!ac[am.captionEffect]) {
        ac[am.captionEffect] = window["ws_caption_" + am.captionEffect]
    }
    function N(c) {
        var f = aQ[c]
            , a0 = aI("img", f).attr("title")
            , k = aI(f).data("descr");
        if (!a0.replace(/\s+/g, "")) {
            a0 = ""
        }
        return (a0 ? "<span>" + a0 + "</span>" : "") + (k ? "<br><div>" + k + "</div>" : "")
    }
    function aX(f, a1, c) {
        var a0 = N(f);
        var a2 = N(a1);
        var k = am.captionEffect;
        (ac[aI.type(k)] || ac[k] || ac.none)(aI.extend({
            $this: H,
            curIdx: x,
            prevIdx: ax,
            noDelay: c
        }, am), D, aF, a0, a2, i)
    }
    if (ay.length || ao.length) {
        I()
    }
    Y(x, ax, true);
    if (am.stopOnHover) {
        this.bind("mouseover", function(c) {
            if (!at || !at.playing()) {
                af()
            }
            B = true
        });
        this.bind("mouseout", function(c) {
            if (!at || !at.playing()) {
                K()
            }
            B = false
        })
    }
    if (!at || !at.playing()) {
        K()
    }
    var u = H.find("audio").get(0)
        , l = am.autoPlay;
    if (u) {
        aI(u).insertAfter(H);
        if (window.Audio && u.canPlayType && u.canPlayType("audio/mp3")) {
            u.loop = "loop";
            if (am.autoPlay) {
                u.autoplay = "autoplay";
                setTimeout(function() {
                    u.play()
                }, 100)
            }
        } else {
            u = u.src;
            var ab = u.substring(0, u.length - /[^\\\/]+$/.exec(u)[0].length);
            var j = "wsSound" + Math.round(Math.random() * 9999);
            aI("<div>").appendTo(H).get(0).id = j;
            var J = "wsSL" + Math.round(Math.random() * 9999);
            window[J] = {
                onInit: function() {}
            };
            swfobject.createSWF({
                data: ab + "player_mp3_js.swf",
                width: "1",
                height: "1"
            }, {
                allowScriptAccess: "always",
                loop: true,
                FlashVars: "listener=" + J + "&loop=1&autoplay=" + (am.autoPlay ? 1 : 0) + "&mp3=" + u
            }, j);
            u = 0
        }
        H.bind("stop", function() {
            l = false;
            if (u) {
                u.pause()
            } else {
                aI(j).SetVariable("method:pause", "")
            }
        });
        H.bind("start", function() {
            if (u) {
                u.play()
            } else {
                aI(j).SetVariable("method:play", "")
            }
        })
    }
    y.wsStart = av;
    y.wsRestart = K;
    y.wsStop = aD;
    var aL = aI('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>');
    function a() {
        am.autoPlay = !am.autoPlay;
        if (!am.autoPlay) {
            y.wsStop();
            aL.removeClass("ws_pause");
            aL.addClass("ws_play")
        } else {
            K();
            aL.removeClass("ws_play");
            aL.addClass("ws_pause");
            if (at) {
                at.start(x)
            }
        }
    }
    if (am.playPause) {
        if (am.autoPlay) {
            aL.addClass("ws_pause")
        } else {
            aL.addClass("ws_play")
        }
        aL.click(function() {
            a();
            return false
        });
        O.append(aL)
    }
    if (am.keyboardControl) {
        aI(document).on("keyup", function(c) {
            switch (c.which) {
                case 32:
                    a();
                    break;
                case 37:
                    aU(c, x - 1, 0);
                    break;
                case 39:
                    aU(c, x + 1, 1);
                    break
            }
        })
    }
    if (am.scrollControl) {
        H.on("DOMMouseScroll mousewheel", function(c) {
            if (c.originalEvent.wheelDelta < 0 || c.originalEvent.detail > 0) {
                aU(null, x + 1, 1)
            } else {
                aU(null, x - 1, 0)
            }
        })
    }
    if (typeof wowsliderVideo == "function") {
        var F = aI('<div class="ws_video_btn"><div></div></div>').appendTo(au);
        at = new wowsliderVideo(H,am,n);
        if (typeof $f != "undefined") {
            at.vimeo(true);
            at.start(x)
        }
        window.onYouTubeIframeAPIReady = function() {
            at.youtube(true);
            at.start(x)
        }
        ;
        F.on("click touchend", function() {
            if (!aC) {
                at.play(x, 1)
            }
        })
    }
    var aZ = 0;
    if (am.fullScreen) {
        if (typeof NoSleep !== "undefined") {
            var aT = new NoSleep
        }
        var w = function() {
            var a2 = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenchange"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitfullscreenchange"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitfullscreenchange"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozfullscreenchange"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "MSFullscreenChange"]], f = {}, a1, a0;
            for (var k = 0, c = a2.length; k < c; k++) {
                a1 = a2[k];
                if (a1 && a1[1]in document) {
                    for (k = 0,
                             a0 = a1.length; k < a0; k++) {
                        f[a2[0][k]] = a1[k]
                    }
                    return f
                }
            }
            return false
        }();
        if (w) {
            function aq() {
                return !!document[w.fullscreenElement]
            }
            var aG = 0;
            function an(c) {
                if (/WOW Slider/g.test(C)) {
                    return
                }
                c.preventDefault();
                if (aq()) {
                    document[w.exitFullscreen]();
                    if (typeof aT !== "undefined") {
                        aT.disable()
                    }
                } else {
                    aG = 1;
                    H.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][w.requestFullscreen]();
                    if (typeof aT !== "undefined") {
                        aT.enable()
                    }
                }
            }
            document.addEventListener(w.fullscreenchange, function(c) {
                if (aq()) {
                    aZ = 1;
                    aV()
                } else {
                    if (aG) {
                        aG = 0;
                        H.unwrap()
                    }
                    aZ = 0;
                    aV()
                }
                if (!aW[0].step) {
                    n()
                }
            });
            aI("<a href='#' class='ws_fullscreen'></a>").on("click", an).appendTo(au)
        }
    }
    function aV() {
        var a4 = aZ ? 4 : am.responsive
            , c = au.width() || am.width
            , a0 = aI([r, aH.find("img"), aR.find("img")]);
        if (a4 > 0 && !!document.addEventListener) {
            H.css("fontSize", Math.max(Math.min(c / am.width || 1, 1) * 10, 4))
        }
        if (a4 == 2) {
            var f = Math.max(c / am.width, 1) - 1;
            a0.each(function() {
                aI(this).css("marginTop", -am.height * f / 2)
            })
        }
        if (a4 == 3) {
            var a5 = window.innerHeight - (H.offset().top || 0)
                , a2 = am.width / am.height
                , a3 = a2 > c / a5;
            H.css("height", a5);
            a0.each(function() {
                aI(this).css({
                    width: a3 ? "auto" : "100%",
                    height: a3 ? "100%" : "auto",
                    marginLeft: a3 ? (c - a5 * a2) / 2 : 0,
                    marginTop: a3 ? 0 : (a5 - c / a2) / 2
                })
            })
        }
        if (a4 == 4) {
            var a1 = window.innerWidth
                , k = window.innerHeight
                , a2 = (H.width() || am.width) / (H.height() || am.height);
            H.css({
                maxWidth: a2 > a1 / k ? "100%" : a2 * k,
                height: ""
            });
            a0.each(function() {
                aI(this).css({
                    width: "100%",
                    marginLeft: 0,
                    marginTop: 0
                })
            })
        } else {
            H.css({
                maxWidth: "",
                top: ""
            })
        }
    }
    if (am.responsive) {
        aI(aV);
        aI(window).on("load resize", aV)
    }
    return this
}
;
jQuery.extend(jQuery.easing, {
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeOutElastic1: function(k, l, i, h, g) {
        var f = Math.PI / 2;
        var m = 1.70158;
        var e = 0;
        var j = h;
        if (l == 0) {
            return i
        }
        if ((l /= g) == 1) {
            return i + h
        }
        if (!e) {
            e = g * .3
        }
        if (j < Math.abs(h)) {
            j = h;
            var m = e / 4
        } else {
            var m = e / f * Math.asin(h / j)
        }
        return j * Math.pow(2, -10 * l) * Math.sin((l * g - m) * f / e) + h + i
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    }
});
jQuery.fn.wowSlider.support = {
    transform: function() {
        if (!window.getComputedStyle) {
            return false
        }
        var b = document.createElement("div");
        document.body.insertBefore(b, document.body.lastChild);
        b.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        var a = window.getComputedStyle(b).getPropertyValue("transform");
        b.parentNode.removeChild(b);
        if (a !== undefined) {
            return a !== "none"
        } else {
            return false
        }
    }(),
    perspective: function() {
        var b = "perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" ");
        for (var a = 0; a < b.length; a++) {
            if (document.body.style[b[a]] !== undefined) {
                return !!b[a]
            }
        }
        return false
    }(),
    transition: function() {
        var a = document.body || document.documentElement
            , b = a.style;
        return b.transition !== undefined || b.WebkitTransition !== undefined || b.MozTransition !== undefined || b.MsTransition !== undefined || b.OTransition !== undefined
    }()
};
(function(a) {
        function b(l, m, n, f, h, j, o) {
            if (typeof l === "undefined") {
                return
            }
            if (!l.jquery && typeof l !== "function") {
                m = l.from;
                n = l.to;
                f = l.duration;
                h = l.delay;
                j = l.easing;
                o = l.callback;
                l = l.each || l.obj
            }
            var k = "num";
            if (l.jquery) {
                k = "obj"
            }
            if (typeof l === "undefined" || typeof m === "undefined" || typeof n === "undefined") {
                return
            }
            if (typeof h === "function") {
                o = h;
                h = 0
            }
            if (typeof j === "function") {
                o = j;
                j = 0
            }
            if (typeof h === "string") {
                j = h;
                h = 0
            }
            f = f || 0;
            h = h || 0;
            j = j || 0;
            o = o || 0;
            function i(s) {
                var t = (new Date).getTime() + h;
                var r = function() {
                    var v = (new Date).getTime() - t;
                    if (v < 0) {
                        v = 0
                    }
                    var u = f ? v / f : 1;
                    if (u < 1) {
                        s(u);
                        requestAnimationFrame(r)
                    } else {
                        q(1)
                    }
                };
                r();
                function q(u) {
                    cancelAnimationFrame(u);
                    s(1);
                    if (o) {
                        o()
                    }
                }
                return {
                    stop: q
                }
            }
            function g(s, r, q) {
                return s + (r - s) * q
            }
            function e(q, r) {
                if (r == "linear") {
                    return q
                }
                if (r == "swing") {
                    return a.easing[r] ? a.easing[r](q) : q
                }
                return a.easing[r] ? a.easing[r](1, q, 0, 1, 1, 1) : q
            }
            var c = {
                opacity: 0,
                top: "px",
                left: "px",
                right: "px",
                bottom: "px",
                width: "px",
                height: "px",
                translate: "px",
                rotate: "deg",
                rotateX: "deg",
                rotateY: "deg",
                scale: 0
            };
            function p(x, w, v, r) {
                if (typeof w === "object") {
                    var q = {};
                    for (var t in w) {
                        q[t] = p(x, w[t], v[t], r)
                    }
                    return q
                } else {
                    var s = ["px", "%", "in", "cm", "mm", "pt", "pc", "em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "deg", "rad", "grad", "turn"];
                    var u = "";
                    if (typeof w === "string") {
                        u = w
                    } else {
                        if (typeof v === "string") {
                            u = v
                        }
                    }
                    u = function(A, z, B) {
                        for (var y in z) {
                            if (A.indexOf(z[y]) > -1) {
                                return z[y]
                            }
                        }
                        if (c[B]) {
                            return c[B]
                        }
                        return ""
                    }(u, s, x);
                    w = parseFloat(w);
                    v = parseFloat(v);
                    return g(w, v, r) + u
                }
            }
            var d = i(function(r) {
                r = e(r, j);
                if (k === "num") {
                    var q = g(m, n, r);
                    l(q)
                } else {
                    var q = {
                        transform: ""
                    };
                    for (var s in m) {
                        if (typeof c[s] !== "undefined") {
                            var t = p(s, m[s], n[s], r);
                            switch (s) {
                                case "translate":
                                    q.transform += " translate3d(" + t[0] + "," + t[1] + "," + t[2] + ")";
                                    break;
                                case "rotate":
                                    q.transform += " rotate(" + t + ")";
                                    break;
                                case "rotateX":
                                    q.transform += " rotateX(" + t + ")";
                                    break;
                                case "rotateY":
                                    q.transform += " rotateY(" + t + ")";
                                    break;
                                case "scale":
                                    if (typeof t === "object") {
                                        q.transform += " scale(" + t[0] + ", " + t[1] + ")"
                                    } else {
                                        q.transform += " scale(" + t + ")"
                                    }
                                    break;
                                default:
                                    q[s] = t
                            }
                        }
                    }
                    if (q.transform === "") {
                        delete q.transform
                    }
                    l.css(q)
                }
            });
            return d
        }
        window.wowAnimate = b
    }
)(jQuery);
if (!Date.now) {
    Date.now = function() {
        return (new Date).getTime()
    }
}
(function() {
        var d = ["webkit", "moz"];
        for (var b = 0; b < d.length && !window.requestAnimationFrame; ++b) {
            var a = d[b];
            window.requestAnimationFrame = window[a + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[a + "CancelAnimationFrame"] || window[a + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var c = 0;
            window.requestAnimationFrame = function(g) {
                var f = Date.now();
                var e = Math.max(c + 16, f);
                return setTimeout(function() {
                    g(c = e)
                }, e - f)
            }
            ;
            window.cancelAnimationFrame = clearTimeout
        }
    }
)();
function ws_caption_parallax(d, c, h, f, g, b) {
    var e = jQuery;
    c.parent().css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    });
    c.html(f).css("width", "100%").stop(1, 1);
    h.html(g).css("width", "100%").stop(1, 1);
    (function a(n, j, v, r, s, w) {
            var p = 15;
            var m = d.$this.width();
            p *= m / 100;
            function q(z, A) {
                return z.css(d.support.transform ? {
                    transform: "translate3d(" + A + "px,0px,0px)"
                } : {
                    marginLeft: A
                }).css("display", "inline-block")
            }
            if (d.prevIdx == d.curIdx) {
                q(n, 0).fadeIn(s / 3);
                q(e(">div,>span", n), 0)
            } else {
                var l = e(">div", n);
                var y = e(">div", j);
                var o = e(">span", n);
                var i = e(">span", j);
                var u = p + m * (w ? -1 : 1)
                    , x = p + m * (w ? 1 : -1)
                    , t = (w ? -1 : 1) * p;
                q(n, u).show();
                q(j, 0).show();
                q(l, t);
                q(y, 0);
                q(o, 2 * t);
                q(i, 0);
                wowAnimate(function(z) {
                    z = e.easing.swing(z);
                    q(n, (1 - z) * u);
                    q(j, z * x)
                }, 0, 1, d.duration);
                var k = .8;
                wowAnimate(function(z) {
                    z *= k;
                    q(o, (1 - z) * 2 * t);
                    q(l, (1 - z) * t);
                    q(i, z * (-2 * t));
                    q(y, z * -t)
                }, 0, 1, d.duration, function() {
                    i.css("opacity", 0);
                    y.css("opacity", 0);
                    wowAnimate(function(z) {
                        z = e.easing.easeOutCubic(1, z, 0, 1, 1, 1);
                        var A = (1 - k) * 2 * t
                            , C = (1 - k) * t
                            , B = k * (-2 * t)
                            , D = k * -t;
                        q(o, (1 - z) * A);
                        q(l, (1 - z) * C);
                        q(i, (1 - z) * B + z * (-2 * t));
                        q(y, (1 - z) * D + z * -t)
                    }, 0, 1, /Firefox/g.test(navigator.userAgent) ? 1500 : d.delay)
                })
            }
        }
    )(c, h, f, g, d.captionDuration, b)
}
function ws_glass_parallax(d, l, m) {
    var f = jQuery;
    var i = f(this);
    var j = d.parallax || .25;
    var k = f("<div>").css({
        position: "absolute",
        display: "none",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }).addClass("ws_effect ws_glass_parallax").appendTo(m);
    var h = !d.noCanvas && !window.opera && !!document.createElement("canvas").getContext;
    if (h) {
        try {
            document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1)
        } catch (q) {
            h = 0
        }
    }
    function t(e) {
        return Math.round(e * 1e3) / 1e3
    }
    var u = f("<div>").css({
        position: "absolute",
        left: 0,
        top: 0,
        overflow: "hidden",
        width: "100%",
        height: "100%",
        transform: "translate3d(0,0,0)",
        zIndex: 1
    }).appendTo(k);
    var s = u.clone().appendTo(k);
    var r = u.clone().css({
        width: "20%"
    }).appendTo(k);
    var c;
    var p = u.clone().appendTo(k).css({
        zIndex: 0
    });
    this.go = function(C, A, x) {
        var e = f(l.get(A));
        e = {
            position: "absolute",
            width: e.width(),
            height: e.height(),
            marginTop: e.css("marginTop"),
            marginLeft: e.css("marginLeft")
        };
        x = x ? 1 : -1;
        var E = f(l.get(A)).clone().css(e).appendTo(u);
        var z = f(l.get(C)).clone().css(e).appendTo(s);
        var v = f(l.get(C)).clone().css(e).appendTo(r);
        if (x == -1) {
            r.css({
                left: "auto",
                right: 0
            });
            v.css({
                left: "auto",
                right: 0
            })
        } else {
            r.css({
                left: 0,
                right: "auto"
            });
            v.css({
                left: 0,
                right: "auto"
            })
        }
        var D = (m.width() || d.width) * 1.3;
        var B = m.height() || d.height;
        var y;
        if (h) {
            if (!c) {
                c = f("<canvas>").css({
                    position: "absolute",
                    left: 0,
                    top: 0
                }).attr({
                    width: e.width,
                    height: e.height
                }).appendTo(p)
            }
            c.css(e).attr({
                width: e.width,
                height: e.height
            });
            y = o(f(l.get(C)), e, 10, c.get(0))
        }
        if (!h || !y) {
            h = 0
        }
        wowAnimate(function(G) {
            G = f.easing.swing(G);
            var L = t(x * G * D)
                , F = t(x * (-D + G * D - (1 - G) * D * .2))
                , J = t(x * (-D * 1.4 + G * (D * 1.4 + D / 1.3)))
                , w = t(-x * D * j * G)
                , H = t(x * D * j * (1 - G))
                , I = t(-x * D * (j + .2) * G)
                , K = t(x * (-D * .2 + G * D * .4));
            if (d.support.transform) {
                u.css("transform", "translate3d(" + L + "px,0,0)");
                E.css("transform", "translate3d(" + w + "px,0,0)");
                s.css("transform", "translate3d(" + F + "px,0,0)");
                z.css("transform", "translate3d(" + H + "px,0,0)");
                r.css("transform", "translate3d(" + J + "px,0,0)");
                v.css("transform", "scale(1.6) translate3d(" + I + "px,0,0)");
                p.css("transform", "translate3d(" + K + "px,0,0)")
            } else {
                u.css("left", L);
                E.css("margin-left", w);
                s.css("left", F);
                z.css("margin-left", H);
                r.css("left", J);
                v.css("margin-left", I);
                p.css("left", K)
            }
        }, 0, 1, d.duration, function() {
            k.hide();
            E.remove();
            z.remove();
            v.remove();
            i.trigger("effectEnd")
        })
    }
    ;
    function o(C, A, B, v) {
        var F = (parseInt(C.parent().css("z-index")) || 0) + 1;
        if (h) {
            var I = v.getContext("2d");
            I.drawImage(C.get(0), 0, 0, A.width, A.height);
            if (!a(I, 0, 0, v.width, v.height, B)) {
                return 0
            }
            return f(v)
        }
        var J = f("<div></div>").css({
            position: "absolute",
            "z-index": F,
            left: 0,
            top: 0
        }).css(A).appendTo(v);
        var H = (Math.sqrt(5) + 1) / 2;
        var w = 1 - H / 2;
        for (var z = 0; w * z < B; z++) {
            var D = Math.PI * H * z;
            var e = w * z + 1;
            var G = e * Math.cos(D);
            var E = e * Math.sin(D);
            f(document.createElement("img")).attr("src", C.attr("src")).css({
                opacity: 1 / (z / 1.8 + 1),
                position: "absolute",
                "z-index": F,
                left: Math.round(G) + "px",
                top: Math.round(E) + "px",
                width: "100%",
                height: "100%"
            }).appendTo(J)
        }
        return J
    }
    var g = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
    var n = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
    function a(am, U, S, v, w, ad) {
        if (isNaN(ad) || ad < 1) {
            return
        }
        ad |= 0;
        var ah;
        try {
            ah = am.getImageData(U, S, v, w)
        } catch (al) {
            console.log("error:unable to access image data: " + al);
            return false
        }
        var C = ah.data;
        var ab, aa, aj, ag, J, M, G, A, B, R, H, T, P, X, ac, K, F, L, N, W;
        var ak = ad + ad + 1;
        var Y = v << 2;
        var I = v - 1;
        var af = w - 1;
        var E = ad + 1;
        var ae = E * (E + 1) / 2;
        var V = new b;
        var Q = V;
        for (aj = 1; aj < ak; aj++) {
            Q = Q.next = new b;
            if (aj == E) {
                var D = Q
            }
        }
        Q.next = V;
        var ai = null;
        var Z = null;
        G = M = 0;
        var O = g[ad];
        var z = n[ad];
        for (aa = 0; aa < w; aa++) {
            X = ac = K = A = B = R = 0;
            H = E * (F = C[M]);
            T = E * (L = C[M + 1]);
            P = E * (N = C[M + 2]);
            A += ae * F;
            B += ae * L;
            R += ae * N;
            Q = V;
            for (aj = 0; aj < E; aj++) {
                Q.r = F;
                Q.g = L;
                Q.b = N;
                Q = Q.next
            }
            for (aj = 1; aj < E; aj++) {
                ag = M + ((I < aj ? I : aj) << 2);
                A += (Q.r = F = C[ag]) * (W = E - aj);
                B += (Q.g = L = C[ag + 1]) * W;
                R += (Q.b = N = C[ag + 2]) * W;
                X += F;
                ac += L;
                K += N;
                Q = Q.next
            }
            ai = V;
            Z = D;
            for (ab = 0; ab < v; ab++) {
                C[M] = A * O >> z;
                C[M + 1] = B * O >> z;
                C[M + 2] = R * O >> z;
                A -= H;
                B -= T;
                R -= P;
                H -= ai.r;
                T -= ai.g;
                P -= ai.b;
                ag = G + ((ag = ab + ad + 1) < I ? ag : I) << 2;
                X += ai.r = C[ag];
                ac += ai.g = C[ag + 1];
                K += ai.b = C[ag + 2];
                A += X;
                B += ac;
                R += K;
                ai = ai.next;
                H += F = Z.r;
                T += L = Z.g;
                P += N = Z.b;
                X -= F;
                ac -= L;
                K -= N;
                Z = Z.next;
                M += 4
            }
            G += v
        }
        for (ab = 0; ab < v; ab++) {
            ac = K = X = B = R = A = 0;
            M = ab << 2;
            H = E * (F = C[M]);
            T = E * (L = C[M + 1]);
            P = E * (N = C[M + 2]);
            A += ae * F;
            B += ae * L;
            R += ae * N;
            Q = V;
            for (aj = 0; aj < E; aj++) {
                Q.r = F;
                Q.g = L;
                Q.b = N;
                Q = Q.next
            }
            J = v;
            for (aj = 1; aj <= ad; aj++) {
                M = J + ab << 2;
                A += (Q.r = F = C[M]) * (W = E - aj);
                B += (Q.g = L = C[M + 1]) * W;
                R += (Q.b = N = C[M + 2]) * W;
                X += F;
                ac += L;
                K += N;
                Q = Q.next;
                if (aj < af) {
                    J += v
                }
            }
            M = ab;
            ai = V;
            Z = D;
            for (aa = 0; aa < w; aa++) {
                ag = M << 2;
                C[ag] = A * O >> z;
                C[ag + 1] = B * O >> z;
                C[ag + 2] = R * O >> z;
                A -= H;
                B -= T;
                R -= P;
                H -= ai.r;
                T -= ai.g;
                P -= ai.b;
                ag = ab + ((ag = aa + E) < af ? ag : af) * v << 2;
                A += X += ai.r = C[ag];
                B += ac += ai.g = C[ag + 1];
                R += K += ai.b = C[ag + 2];
                ai = ai.next;
                H += F = Z.r;
                T += L = Z.g;
                P += N = Z.b;
                X -= F;
                ac -= L;
                K -= N;
                Z = Z.next;
                M += v
            }
        }
        am.putImageData(ah, U, S);
        return true
    }
    function b() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null
    }
}
jQuery("#wowslider-container1").wowSlider({
    effect: "glass_parallax",
    prev: "",
    next: "",
    duration: 20 * 100,
    delay: 45 * 100,
    width: 1130,
    height: 445,
    autoPlay: true,
    autoPlayVideo: false,
    playPause: false,
    stopOnHover: false,
    loop: false,
    bullets: 0,
    caption: true,
    captionEffect: "parallax",
    controls: false,
    controlsThumb: false,
    responsive: 1,
    fullScreen: false,
    gestures: 1,
    onBeforeStep: 0,
    images: 0
});
