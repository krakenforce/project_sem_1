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
        }).show().appendTo(X || document.body).attr("target", "_blank");
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
jQuery.fn.coinslider || function(t) {
    var e = new Array
        , a = new Array
        , n = new Array
        , s = new Array
        , d = new Array
        , r = new Array
        , o = new Array
        , c = new Array
        , f = new Array
        , p = new Array
        , h = new Array
        , u = new Array;
    t.fn.coinslider = t.fn.CoinSlider = function(l) {
        init = function(o) {
            for (a[o.id] = new Array,
                     n[o.id] = new Array,
                     s[o.id] = new Array,
                     d[o.id] = new Array,
                     r[o.id] = new Array,
                     c[o.id] = l.startSlide || 0,
                     p[o.id] = 0,
                     h[o.id] = 1,
                     u[o.id] = o,
                     e[o.id] = t.extend({}, t.fn.coinslider.defaults, l),
                     t.each(t("#" + o.id + " img"), function(i, e) {
                         n[o.id][i] = e,
                             s[o.id][i] = t(e).parent().is("a") ? t(e).parent().attr("href") : "",
                             d[o.id][i] = t(e).parent().is("a") ? t(e).parent().attr("target") : "",
                             r[o.id][i] = t(e).next().is("span") ? t(e).next().html() : ""
                     }),
                     u[o.id] = t("<div class='coin-slider' id='coin-slider-" + o.id + "' />").css({
                         "background-image": "url(" + n[o.id][l.startSlide || 0].src + ")",
                         "-o-background-size": "100%",
                         "-webkit-background-size": "100%",
                         "-moz-background-size": "100%",
                         "background-size": "100%",
                         width: "100%",
                         height: "100%",
                         position: "relative",
                         "background-position": "top left"
                     }).appendTo(t(o).parent().parent()),
                     i = 1; i <= e[o.id].sph; i++)
                for (j = 1; j <= e[o.id].spw; j++)
                    t(e[o.id].links ? "<a href='" + s[o.id][0] + "'></a>" : "<div></div>").css({
                        float: "left",
                        position: "absolute",
                        overflow: "hidden"
                    }).append(t("<img>")).appendTo(u[o.id]).attr("id", "cs-" + o.id + i + j);
            u[o.id].append("<div class='cs-title' id='cs-title-" + o.id + "' style='position: absolute; bottom:0; left: 0; z-index: 1000;'></div>"),
            e[o.id].navigation && t.setNavigation(o)
        }
            ,
            t.setFields = function(s) {
                var d = u[s.id].width()
                    , r = u[s.id].height();
                for (tWidth = sWidth = parseInt(d / e[s.id].spw),
                         tHeight = sHeight = parseInt(r / e[s.id].sph),
                         counter = sLeft = sTop = 0,
                         tgapx = gapx = e[s.id].width - e[s.id].spw * sWidth,
                         tgapy = gapy = e[s.id].height - e[s.id].sph * sHeight,
                         imgParams = t(n[s.id][l.startSlide || 0]),
                         imgParams = {
                             width: imgParams.width(),
                             height: imgParams.height(),
                             marginTop: parseFloat(imgParams.css("marginTop")),
                             marginLeft: parseFloat(imgParams.css("marginLeft"))
                         },
                         i = 1; i <= e[s.id].sph; i++) {
                    for (gapx = tgapx,
                             gapy > 0 ? (gapy--,
                                 sHeight = tHeight + 1) : sHeight = tHeight,
                             j = 1; j <= e[s.id].spw; j++)
                        gapx > 0 ? (gapx--,
                            sWidth = tWidth + 1) : sWidth = tWidth,
                            a[s.id][counter] = i + "" + j,
                            counter++,
                            t("#cs-" + s.id + i + j).css({
                                width: sWidth + "px",
                                height: sHeight + "px",
                                overflow: "hidden",
                                left: sLeft,
                                top: sTop
                            }).addClass("cs-" + s.id).find("img").css({
                                width: imgParams.width,
                                height: imgParams.height,
                                marginTop: imgParams.marginTop - sTop,
                                marginLeft: imgParams.marginLeft - sLeft
                            }),
                            sLeft += sWidth;
                    sTop += sHeight,
                        sLeft = 0
                }
                t(".cs-" + s.id).mouseover(function() {
                    t("#cs-navigation-" + s.id).show()
                }),
                    t(".cs-" + s.id).mouseout(function() {
                        t("#cs-navigation-" + s.id).hide()
                    }),
                    t("#cs-title-" + s.id).mouseover(function() {
                        t("#cs-navigation-" + s.id).show()
                    }),
                    t("#cs-title-" + s.id).mouseout(function() {
                        t("#cs-navigation-" + s.id).hide()
                    }),
                e[s.id].hoverPause && (t(".cs-" + s.id).mouseover(function() {
                    e[s.id].pause = !0
                }),
                    t(".cs-" + s.id).mouseout(function() {
                        e[s.id].pause = !1
                    }),
                    t("#cs-title-" + s.id).mouseover(function() {
                        e[s.id].pause = !0
                    }),
                    t("#cs-title-" + s.id).mouseout(function() {
                        e[s.id].pause = !1
                    }))
            }
            ,
            t.transitionCall = function(i) {
                e[i.id].delay < 0 || (clearInterval(o[i.id]),
                    delay = e[i.id].delay + e[i.id].spw * e[i.id].sph * e[i.id].sDelay,
                    o[i.id] = setInterval(function() {
                        t.transition(i)
                    }, delay))
            }
            ,
            t.transition = function(i, s) {
                1 != e[i.id].pause && (t.setFields(i),
                    t.effect(i),
                    p[i.id] = 0,
                    f[i.id] = setInterval(function() {
                        t.appereance(i, a[i.id][p[i.id]])
                    }, e[i.id].sDelay),
                    t(u[i.id]).find("img").attr("src", n[i.id][c[i.id]].src),
                    "undefined" == typeof s ? c[i.id]++ : "prev" == s ? c[i.id]-- : c[i.id] = s,
                c[i.id] == n[i.id].length && (c[i.id] = 0),
                -1 == c[i.id] && (c[i.id] = n[i.id].length - 1),
                    t(".cs-button-" + i.id).removeClass("cs-active"),
                    t("#cs-button-" + i.id + "-" + (c[i.id] + 1)).addClass("cs-active"),
                    r[i.id][c[i.id]] ? (t("#cs-title-" + i.id).css({
                        opacity: 0
                    }).animate({
                        opacity: e[i.id].opacity
                    }, e[i.id].titleSpeed),
                        t("#cs-title-" + i.id).html(r[i.id][c[i.id]])) : t("#cs-title-" + i.id).css("opacity", 0))
            }
            ,
            t.appereance = function(i, a) {
                return t(".cs-" + i.id).attr("href", s[i.id][c[i.id]]).attr("target", d[i.id][c[i.id]]),
                    p[i.id] == e[i.id].spw * e[i.id].sph ? (clearInterval(f[i.id]),
                        void setTimeout(function() {
                            t(i).trigger("cs:animFinished")
                        }, 300)) : (t("#cs-" + i.id + a).find("img").css("opacity", 0).attr("src", n[i.id][c[i.id]].src).animate({
                        opacity: 1
                    }, 300),
                        void p[i.id]++)
            }
            ,
            t.setNavigation = function(i) {
                for (t(u[i.id]).append("<div id='cs-navigation-" + i.id + "'></div>"),
                         t("#cs-navigation-" + i.id).hide(),
                         t("#cs-navigation-" + i.id).append("<a href='#' id='cs-prev-" + i.id + "' class='cs-prev'>prev</a>"),
                         t("#cs-navigation-" + i.id).append("<a href='#' id='cs-next-" + i.id + "' class='cs-next'>next</a>"),
                         t("#cs-prev-" + i.id).css({
                             position: "absolute",
                             top: e[i.id].height / 2 - 15,
                             left: 0,
                             "z-index": 1001,
                             "line-height": "30px",
                             opacity: e[i.id].opacity
                         }).click(function(e) {
                             e.preventDefault(),
                                 t.transition(i, "prev"),
                                 t.transitionCall(i)
                         }).mouseover(function() {
                             t("#cs-navigation-" + i.id).show()
                         }),
                         t("#cs-next-" + i.id).css({
                             position: "absolute",
                             top: e[i.id].height / 2 - 15,
                             right: 0,
                             "z-index": 1001,
                             "line-height": "30px",
                             opacity: e[i.id].opacity
                         }).click(function(e) {
                             e.preventDefault(),
                                 t.transition(i),
                                 t.transitionCall(i)
                         }).mouseover(function() {
                             t("#cs-navigation-" + i.id).show()
                         }),
                         t("<div id='cs-buttons-" + i.id + "' class='cs-buttons'></div>").appendTo(t("#coin-slider-" + i.id)),
                         k = 1; k < n[i.id].length + 1; k++)
                    t("#cs-buttons-" + i.id).append("<a href='#' class='cs-button-" + i.id + "' id='cs-button-" + i.id + "-" + k + "'>" + k + "</a>");
                t.each(t(".cs-button-" + i.id), function(e, a) {
                    t(a).click(function(a) {
                        t(".cs-button-" + i.id).removeClass("cs-active"),
                            t(this).addClass("cs-active"),
                            a.preventDefault(),
                            t.transition(i, e),
                            t.transitionCall(i)
                    })
                }),
                    t("#cs-navigation-" + i.id + " a").mouseout(function() {
                        t("#cs-navigation-" + i.id).hide(),
                            e[i.id].pause = !1
                    }),
                    t("#cs-buttons-" + i.id).css({
                        left: "50%",
                        "margin-left": 15 * -n[i.id].length / 2 - 5,
                        position: "relative"
                    })
            }
            ,
            t.effect = function(n) {
                if (effA = ["random", "swirl", "rain", "straight", "snakeV", "rainV"],
                    eff = "" == e[n.id].effect ? effA[Math.floor(Math.random() * effA.length)] : e[n.id].effect,
                    a[n.id] = new Array,
                "random" == eff) {
                    for (counter = 0,
                             i = 1; i <= e[n.id].sph; i++)
                        for (j = 1; j <= e[n.id].spw; j++)
                            a[n.id][counter] = i + "" + j,
                                counter++;
                    t.random(a[n.id])
                }
                /rain|swirl|straight|snakeV|rainV/.test(eff) && t[eff](n),
                    h[n.id] *= -1,
                h[n.id] > 0 && a[n.id].reverse()
            }
            ,
            t.random = function(i) {
                var t = i.length;
                if (0 == t)
                    return !1;
                for (; --t; ) {
                    var e = Math.floor(Math.random() * (t + 1))
                        , a = i[t]
                        , n = i[e];
                    i[t] = n,
                        i[e] = a
                }
            }
            ,
            t.swirl = function(n) {
                for (var s = e[n.id].sph, d = e[n.id].spw, r = 1, o = 1, c = 0, f = 0, p = 0, h = !0; h; ) {
                    for (f = 0 == c || 2 == c ? d : s,
                             i = 1; f >= i; i++)
                        if (a[n.id][p] = r + "" + o,
                            p++,
                        i != f)
                            switch (c) {
                                case 0:
                                    o++;
                                    break;
                                case 1:
                                    r++;
                                    break;
                                case 2:
                                    o--;
                                    break;
                                case 3:
                                    r--
                            }
                    switch (c = (c + 1) % 4) {
                        case 0:
                            d--,
                                o++;
                            break;
                        case 1:
                            s--,
                                r++;
                            break;
                        case 2:
                            d--,
                                o--;
                            break;
                        case 3:
                            s--,
                                r--
                    }
                    check = t.max(s, d) - t.min(s, d),
                    check >= d && check >= s && (h = !1)
                }
            }
            ,
            t.rain = function(t) {
                for (var n = e[t.id].sph, s = e[t.id].spw, d = 0, r = to2 = from = 1, o = !0; o; ) {
                    for (i = from; r >= i; i++)
                        a[t.id][d] = i + "" + parseInt(to2 - i + 1),
                            d++;
                    to2++,
                    n > r && s > to2 && s > n && r++,
                    n > r && n >= s && r++,
                    to2 > s && from++,
                    from > r && (o = !1)
                }
            }
            ,
            t.rainV = function(i) {
                for (var t = e[i.id], n = 0, s = 1; s <= t.sph; s++)
                    for (var d = 1; d <= t.spw; d++)
                        a[i.id][n] = s + "" + d,
                            n++
            }
            ,
            t.snakeV = function(i) {
                for (var t = e[i.id], n = 0, s = 1; s <= t.sph; s++)
                    for (var d = 1; d <= t.spw; d++)
                        a[i.id][n] = s + "" + (s % 2 ? d : t.spw + 1 - d),
                            n++
            }
            ,
            t.straight = function(t) {
                for (counter = 0,
                         i = 1; i <= e[t.id].sph; i++)
                    for (j = 1; j <= e[t.id].spw; j++)
                        a[t.id][counter] = i + "" + j,
                            counter++
            }
            ,
            t.min = function(i, t) {
                return i > t ? t : i
            }
            ,
            t.max = function(i, t) {
                return t > i ? t : i
            }
            ,
            this.each(function() {
                init(this)
            })
    }
        ,
        t.fn.coinslider.defaults = {
            width: 565,
            height: 290,
            spw: 7,
            sph: 5,
            delay: 3e3,
            sDelay: 30,
            opacity: .7,
            titleSpeed: 500,
            effect: "",
            navigation: !0,
            links: !0,
            hoverPause: !0
        }
}(jQuery);
function ws_squares(i, h, b) {
    var e = jQuery;
    var g = e(this);
    var f = b.find("ul").get(0);
    f.id = "wowslider_tmp" + Math.round(Math.random() * 99999);
    var c = 0;
    e(f).coinslider({
        hoverPause: false,
        startSlide: i.startSlide,
        navigation: 0,
        delay: -1,
        effect: i.type,
        width: i.width,
        height: i.height,
        sDelay: i.duration / (7 * 5)
    });
    var d = e("#coin-slider-" + f.id).addClass("ws_effect ws_squares").css({
        position: "absolute",
        display: "none",
        left: 0,
        top: 0,
        "z-index": 8,
        transform: "translate3d(0,0,0)"
    });
    var a = i.startSlide;
    e(f).bind("cs:animFinished", function() {
        g.trigger("effectEnd");
        if (c < 2) {
            c = 0;
            d.hide()
        }
    });
    this.go = function(j) {
        c++;
        d.show();
        a = j;
        e.transition(f, j);
        d.css("background", "none");
        if (i.fadeOut) {
            e(f).fadeOut(i.duration)
        }
    }
}
jQuery("#wowslider-container1").wowSlider({
    effect: "squares",
    prev: "",
    next: "",
    duration: 15 * 100,
    delay: 45 * 100,
    width: 780,
    height: 445,
    autoPlay: true,
    autoPlayVideo: false,
    playPause: false,
    stopOnHover: false,
    loop: false,
    bullets: 0,
    caption: false,
    captionEffect: "parallax",
    controls: false,
    controlsThumb: false,
    responsive: 1,
    fullScreen: false,
    gestures: 2,
    onBeforeStep: 0,
    images: 0
});
