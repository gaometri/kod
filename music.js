if (! function (t) {
        function n() {}
        n.dumy = document.createElement("div"), n.trim = function (e) {
            return e.replace(/\s/gi, "")
        }, n.splitAndTrim = function (e, t) {
            for (var o = e.split(","), s = o.length, i = 0; i < s; i++) t && (o[i] = n.trim(o[i]));
            return o
        }, n.checkTime = function (e) {
            return !!/^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/.test(e)
        }, n.formatTime = function (e) {
            var t = Math.floor(e / 3600),
                o = e % 3600,
                s = Math.floor(o / 60),
                i = o % 60,
                n = Math.ceil(i);
            return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : self.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
        }, n.MD5 = function (e) {
            function a(e, t) {
                return e << t | e >>> 32 - t
            }

            function d(e, t) {
                var o, s, i, n, r;
                return i = 2147483648 & e, n = 2147483648 & t, r = (1073741823 & e) + (1073741823 & t), (o = 1073741824 & e) & (s = 1073741824 & t) ? 2147483648 ^ r ^ i ^ n : o | s ? 1073741824 & r ? 3221225472 ^ r ^ i ^ n : 1073741824 ^ r ^ i ^ n : r ^ i ^ n
            }

            function t(e, t, o, s, i, n, r) {
                var l;
                return e = d(e, d(d((l = t) & o | ~l & s, i), r)), d(a(e, n), t)
            }

            function o(e, t, o, s, i, n, r) {
                var l;
                return e = d(e, d(d(t & (l = s) | o & ~l, i), r)), d(a(e, n), t)
            }

            function s(e, t, o, s, i, n, r) {
                return e = d(e, d(d(t ^ o ^ s, i), r)), d(a(e, n), t)
            }

            function i(e, t, o, s, i, n, r) {
                return e = d(e, d(d(o ^ (t | ~s), i), r)), d(a(e, n), t)
            }

            function n(e) {
                var t, o = "",
                    s = "";
                for (t = 0; t <= 3; t++) o += (s = "0" + (e >>> 8 * t & 255).toString(16)).substr(s.length - 2, 2);
                return o
            }
            var r, l, u, c, h, _, f, p, m, b = Array();
            for (b = function (e) {
                    for (var t, o = e.length, s = o + 8, i = 16 * (1 + (s - s % 64) / 64), n = Array(i - 1), r = 0, l = 0; l < o;) r = l % 4 * 8, n[t = (l - l % 4) / 4] = n[t] | e.charCodeAt(l) << r, l++;
                    return r = l % 4 * 8, n[t = (l - l % 4) / 4] = n[t] | 128 << r, n[i - 2] = o << 3, n[i - 1] = o >>> 29, n
                }(e = function (e) {
                    e = e.replace(/\r\n/g, "\n");
                    for (var t = "", o = 0; o < e.length; o++) {
                        var s = e.charCodeAt(o);
                        s < 128 ? t += String.fromCharCode(s) : (127 < s && s < 2048 ? t += String.fromCharCode(s >> 6 | 192) : (t += String.fromCharCode(s >> 12 | 224), t += String.fromCharCode(s >> 6 & 63 | 128)), t += String.fromCharCode(63 & s | 128))
                    }
                    return t
                }(e)), _ = 1732584193, f = 4023233417, p = 2562383102, m = 271733878, r = 0; r < b.length; r += 16) _ = t(l = _, u = f, c = p, h = m, b[r + 0], 7, 3614090360), m = t(m, _, f, p, b[r + 1], 12, 3905402710), p = t(p, m, _, f, b[r + 2], 17, 606105819), f = t(f, p, m, _, b[r + 3], 22, 3250441966), _ = t(_, f, p, m, b[r + 4], 7, 4118548399), m = t(m, _, f, p, b[r + 5], 12, 1200080426), p = t(p, m, _, f, b[r + 6], 17, 2821735955), f = t(f, p, m, _, b[r + 7], 22, 4249261313), _ = t(_, f, p, m, b[r + 8], 7, 1770035416), m = t(m, _, f, p, b[r + 9], 12, 2336552879), p = t(p, m, _, f, b[r + 10], 17, 4294925233), f = t(f, p, m, _, b[r + 11], 22, 2304563134), _ = t(_, f, p, m, b[r + 12], 7, 1804603682), m = t(m, _, f, p, b[r + 13], 12, 4254626195), p = t(p, m, _, f, b[r + 14], 17, 2792965006), _ = o(_, f = t(f, p, m, _, b[r + 15], 22, 1236535329), p, m, b[r + 1], 5, 4129170786), m = o(m, _, f, p, b[r + 6], 9, 3225465664), p = o(p, m, _, f, b[r + 11], 14, 643717713), f = o(f, p, m, _, b[r + 0], 20, 3921069994), _ = o(_, f, p, m, b[r + 5], 5, 3593408605), m = o(m, _, f, p, b[r + 10], 9, 38016083), p = o(p, m, _, f, b[r + 15], 14, 3634488961), f = o(f, p, m, _, b[r + 4], 20, 3889429448), _ = o(_, f, p, m, b[r + 9], 5, 568446438), m = o(m, _, f, p, b[r + 14], 9, 3275163606), p = o(p, m, _, f, b[r + 3], 14, 4107603335), f = o(f, p, m, _, b[r + 8], 20, 1163531501), _ = o(_, f, p, m, b[r + 13], 5, 2850285829), m = o(m, _, f, p, b[r + 2], 9, 4243563512), p = o(p, m, _, f, b[r + 7], 14, 1735328473), _ = s(_, f = o(f, p, m, _, b[r + 12], 20, 2368359562), p, m, b[r + 5], 4, 4294588738), m = s(m, _, f, p, b[r + 8], 11, 2272392833), p = s(p, m, _, f, b[r + 11], 16, 1839030562), f = s(f, p, m, _, b[r + 14], 23, 4259657740), _ = s(_, f, p, m, b[r + 1], 4, 2763975236), m = s(m, _, f, p, b[r + 4], 11, 1272893353), p = s(p, m, _, f, b[r + 7], 16, 4139469664), f = s(f, p, m, _, b[r + 10], 23, 3200236656), _ = s(_, f, p, m, b[r + 13], 4, 681279174), m = s(m, _, f, p, b[r + 0], 11, 3936430074), p = s(p, m, _, f, b[r + 3], 16, 3572445317), f = s(f, p, m, _, b[r + 6], 23, 76029189), _ = s(_, f, p, m, b[r + 9], 4, 3654602809), m = s(m, _, f, p, b[r + 12], 11, 3873151461), p = s(p, m, _, f, b[r + 15], 16, 530742520), _ = i(_, f = s(f, p, m, _, b[r + 2], 23, 3299628645), p, m, b[r + 0], 6, 4096336452), m = i(m, _, f, p, b[r + 7], 10, 1126891415), p = i(p, m, _, f, b[r + 14], 15, 2878612391), f = i(f, p, m, _, b[r + 5], 21, 4237533241), _ = i(_, f, p, m, b[r + 12], 6, 1700485571), m = i(m, _, f, p, b[r + 3], 10, 2399980690), p = i(p, m, _, f, b[r + 10], 15, 4293915773), f = i(f, p, m, _, b[r + 1], 21, 2240044497), _ = i(_, f, p, m, b[r + 8], 6, 1873313359), m = i(m, _, f, p, b[r + 15], 10, 4264355552), p = i(p, m, _, f, b[r + 6], 15, 2734768916), f = i(f, p, m, _, b[r + 13], 21, 1309151649), _ = i(_, f, p, m, b[r + 4], 6, 4149444226), m = i(m, _, f, p, b[r + 11], 10, 3174756917), p = i(p, m, _, f, b[r + 2], 15, 718787259), f = i(f, p, m, _, b[r + 9], 21, 3951481745), _ = d(_, l), f = d(f, u), p = d(p, c), m = d(m, h);
            return (n(_) + n(f) + n(p) + n(m)).toLowerCase()
        }, n.indexOfArray = function (e, t) {
            for (var o = e.length, s = 0; s < o; s++)
                if (e[s] === t) return s;
            return -1
        }, n.randomizeArray = function (e) {
            for (var t = [], o = e.concat(), s = o.length, i = 0; i < s; i++) {
                var n = Math.floor(Math.random() * o.length);
                t.push(o[n]), o.splice(n, 1)
            }
            return t
        }, n.getCanvasWithModifiedColor = function (e, t, o) {
            if (e) {
                var s, i, n = document.createElement("canvas"),
                    r = n.getContext("2d"),
                    l = null,
                    a = parseInt(t.replace(/^#/, ""), 16),
                    d = a >>> 16 & 255,
                    u = a >>> 8 & 255,
                    c = 255 & a;
                n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", n.style.margin = "0px", n.style.padding = "0px", n.style.maxWidth = "none", n.style.maxHeight = "none", n.style.border = "none", n.style.lineHeight = "1", n.style.backgroundColor = "transparent", n.style.backfaceVisibility = "hidden", n.style.webkitBackfaceVisibility = "hidden", n.style.MozBackfaceVisibility = "hidden", n.style.MozImageRendering = "optimizeSpeed", n.style.WebkitImageRendering = "optimizeSpeed", n.width = e.width, n.height = e.height, r.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, e.width, e.height), i = r.getImageData(0, 0, e.width, e.height), l = r.getImageData(0, 0, e.width, e.height);
                for (var h = 0, _ = i.data.length; h < _; h += 4) 0 < l.data[h + 3] && (l.data[h] = i.data[h] / 255 * d, l.data[h + 1] = i.data[h + 1] / 255 * u, l.data[h + 2] = i.data[h + 2] / 255 * c);
                return r.globalAlpha = .5, r.putImageData(l, 0, 0), r.drawImage(n, 0, 0), o && ((s = new Image).src = n.toDataURL()), {
                    canvas: n,
                    image: s
                }
            }
        }, n.changeCanvasHEXColor = function (e, t, o, s) {
            if (e) {
                var i, n = (t = t).getContext("2d"),
                    r = null,
                    l = parseInt(o.replace(/^#/, ""), 16),
                    a = l >>> 16 & 255,
                    d = l >>> 8 & 255,
                    u = 255 & l;
                t.width = e.width, t.height = e.height, n.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, e.width, e.height), i = n.getImageData(0, 0, e.width, e.height), r = n.getImageData(0, 0, e.width, e.height);
                for (var c = 0, h = i.data.length; c < h; c += 4) 0 < r.data[c + 3] && (r.data[c] = i.data[c] / 255 * a, r.data[c + 1] = i.data[c + 1] / 255 * d, r.data[c + 2] = i.data[c + 2] / 255 * u);
                if (n.globalAlpha = .5, n.putImageData(r, 0, 0), n.drawImage(t, 0, 0), s) {
                    var _ = new Image;
                    return _.src = t.toDataURL(), _
                }
            }
        }, n.getSecondsFromString = function (e) {
            var t = 0,
                o = 0,
                s = 0;
            if (e) return "0" == (t = (e = e.split(":"))[0])[0] && "0" != t[1] && (t = parseInt(t[1])), "00" == t && (t = 0), "0" == (o = e[1])[0] && "0" != o[1] && (o = parseInt(o[1])), "00" == o && (o = 0), secs = parseInt(e[2].replace(/,.*/gi, "")), "0" == secs[0] && "0" != secs[1] && (secs = parseInt(secs[1])), "00" == secs && (secs = 0), 0 != t && (s += 60 * t * 60), 0 != o && (s += 60 * o), s += secs
        }, n.isURLEncoded = function (e) {
            try {
                if (decodeURIComponent(e) != e && -1 != e.indexOf("%")) return !0
            } catch (e) {}
            return !1
        }, n.getValidSource = function (e) {
            if (e) {
                var t = "null" == location.origin ? "" : location.origin,
                    o = location.pathname; - 1 != o.indexOf(".") && (o = o.substr(0, o.lastIndexOf("/") + 1)), -1 == e.indexOf("http:") && -1 == e.indexOf("https:") && !n.isLocal && (e = t + o + e);
                var s = encodeURI(e.substr(0, e.lastIndexOf("/") + 1)),
                    i = e.substr(e.lastIndexOf("/") + 1);
                return e = s + (i = e.match(/\.mp3|\.mp4|\.m3u8|\.txt|\.srt|\.vtt|\.jpg|\.jpeg|\.png/gi) && !e.match(/\.s3|\drive.|dropbox|\?/gi) ? n.isURLEncoded(i) ? e.substr(e.lastIndexOf("/") + 1) : encodeURIComponent(e.substr(e.lastIndexOf("/") + 1)) : e.substr(e.lastIndexOf("/") + 1))
            }
        }, n.isLocal = "file:" == document.location.protocol, n.parent = function (e, t) {
            for (void 0 === t && (t = 1); t-- && e;) e = e.parentNode;
            return e && 1 === e.nodeType ? e : null
        }, n.sibling = function (e, t) {
            for (; e && 0 !== t;)
                if (0 < t) {
                    if (e.nextElementSibling) e = e.nextElementSibling;
                    else
                        for (e = e.nextSibling; e && 1 !== e.nodeType; e = e.nextSibling);
                    t--
                } else {
                    if (e.previousElementSibling) e = e.previousElementSibling;
                    else
                        for (e = e.previousSibling; e && 1 !== e.nodeType; e = e.previousSibling);
                    t++
                } return e
        }, n.getChildAt = function (e, t) {
            var o = n.getChildren(e);
            return t < 0 && (t += o.length), t < 0 ? null : o[t]
        }, n.getChildById = function (e) {
            return document.getElementById(e) || void 0
        }, n.getChildren = function (e, t) {
            for (var o = [], s = e.firstChild; null != s; s = s.nextSibling) t ? o.push(s) : 1 === s.nodeType && o.push(s);
            return o
        }, n.getChildrenFromAttribute = function (e, t, o) {
            for (var s = [], i = e.firstChild; null != i; i = i.nextSibling) o && n.hasAttribute(i, t) ? s.push(i) : 1 === i.nodeType && n.hasAttribute(i, t) && s.push(i);
            return 0 == s.length ? void 0 : s
        }, n.getChildFromNodeListFromAttribute = function (e, t, o) {
            for (var s = e.firstChild; null != s; s = s.nextSibling) {
                if (o && n.hasAttribute(s, t)) return s;
                if (1 === s.nodeType && n.hasAttribute(s, t)) return s
            }
        }, n.getAttributeValue = function (e, t) {
            if (n.hasAttribute(e, t)) return e.getAttribute(t)
        }, n.hasAttribute = function (e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : !!e.getAttribute(t)
        }, n.insertNodeAt = function (e, t, o) {
            var s = n.children(e);
            if (o < 0 || o > s.length) throw new Error("invalid index!");
            e.insertBefore(t, s[o])
        }, n.hasCanvas = function () {
            return Boolean(document.createElement("canvas"))
        }, n.hitTest = function (e, t, o) {
            if (!e) throw Error("Hit test target is null!");
            var s = e.getBoundingClientRect();
            return t >= s.left && t <= s.left + (s.right - s.left) && o >= s.top && o <= s.top + (s.bottom - s.top)
        }, n.getScrollOffsets = function () {
            return null != t.pageXOffset ? {
                x: t.pageXOffset,
                y: t.pageYOffset
            } : "CSS1Compat" == document.compatMode ? {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            } : void 0
        }, n.getViewportSize = function () {
            return n.hasPointerEvent && 1 < navigator.msMaxTouchPoints ? {
                w: document.documentElement.clientWidth || t.innerWidth,
                h: document.documentElement.clientHeight || t.innerHeight
            } : n.isMobile ? {
                w: t.innerWidth,
                h: t.innerHeight
            } : {
                w: document.documentElement.clientWidth || t.innerWidth,
                h: document.documentElement.clientHeight || t.innerHeight
            }
        }, n.getViewportMouseCoordinates = function (e) {
            var t = n.getScrollOffsets();
            return e.touches ? {
                screenX: null == e.touches[0] ? e.touches.pageX - t.x : e.touches[0].pageX - t.x,
                screenY: null == e.touches[0] ? e.touches.pageY - t.y : e.touches[0].pageY - t.y
            } : {
                screenX: null == e.clientX ? e.pageX - t.x : e.clientX,
                screenY: null == e.clientY ? e.pageY - t.y : e.clientY
            }
        }, n.hasPointerEvent = Boolean(t.navigator.msPointerEnabled) || Boolean(t.navigator.pointerEnabled), n.isMobile = function () {
            if (n.hasPointerEvent && 1 < navigator.msMaxTouchPoints || n.hasPointerEvent && 1 < navigator.maxTouchPoints) return !0;
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
            for (i in e)
                if (-1 != navigator.userAgent.toLowerCase().indexOf(e[i].toLowerCase())) return !0;
            return "macintel" === navigator.platform.toLowerCase() && 1 < navigator.maxTouchPoints && !t.MSStream
        }(), n.isAndroid = -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()), n.isChrome = -1 != navigator.userAgent.toLowerCase().indexOf("chrome"), n.isSafari = -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome"), n.isOpera = -1 != navigator.userAgent.toLowerCase().indexOf("opera") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome"), n.isFirefox = -1 != navigator.userAgent.toLowerCase().indexOf("firefox"), n.isIE = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("edge")) || Boolean(!n.isIE && document.documentElement.msRequestFullscreen), n.isIE11 = Boolean(!n.isIE && document.documentElement.msRequestFullscreen), n.isIEAndLessThen9 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8"), n.isIEAndLessThen10 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 9"), n.isIE7 = -1 != navigator.userAgent.toLowerCase().indexOf("msie 7"), n.isApple = -1 != navigator.appVersion.toLowerCase().indexOf("mac"), n.hasFullScreen = n.dumy.requestFullScreen || n.dumy.mozRequestFullScreen || n.dumy.webkitRequestFullScreen || n.dumy.msieRequestFullScreen, n.onReady = function (e) {
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
                n.checkIfHasTransofrms(), e()
            }) : document.onreadystatechange = function () {
                n.checkIfHasTransofrms(), "complete" == document.readyState && e()
            }
        }, n.checkIfHasTransofrms = function () {
            document.documentElement.appendChild(n.dumy), n.hasTransform3d = function () {
                for (var e, t, o = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = o.shift();)
                    if (void 0 !== n.dumy.style[e] && (n.dumy.style.position = "absolute", t = n.dumy.getBoundingClientRect().left, n.dumy.style[e] = "translate3d(500px, 0px, 0px)", 100 < (t = Math.abs(n.dumy.getBoundingClientRect().left - t)) && t < 900)) {
                        try {
                            document.documentElement.removeChild(n.dumy)
                        } catch (e) {}
                        return !0
                    } try {
                    document.documentElement.removeChild(n.dumy)
                } catch (e) {}
                return !1
            }(), n.hasTransform2d = function () {
                for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = t.shift();)
                    if (void 0 !== n.dumy.style[e]) return !0;
                try {
                    document.documentElement.removeChild(n.dumy)
                } catch (e) {}
                return !1
            }(), n.isReadyMethodCalled_bl = !0
        }, n.disableElementSelection = function (e) {
            try {
                e.style.userSelect = "none"
            } catch (e) {}
            try {
                e.style.MozUserSelect = "none"
            } catch (e) {}
            try {
                e.style.webkitUserSelect = "none"
            } catch (e) {}
            try {
                e.style.khtmlUserSelect = "none"
            } catch (e) {}
            try {
                e.style.oUserSelect = "none"
            } catch (e) {}
            try {
                e.style.msUserSelect = "none"
            } catch (e) {}
            try {
                e.msUserSelect = "none"
            } catch (e) {}
            e.onselectstart = function () {
                return !1
            }
        }, n.getUrlArgs = function (e) {
            for (var t = {}, o = (e.substr(e.indexOf("?") + 1) || location.search.substring(1)).split("&"), s = 0; s < o.length; s++) {
                var i = o[s].indexOf("="),
                    n = o[s].substring(0, i),
                    r = o[s].substring(i + 1);
                r = decodeURIComponent(r), t[n] = r
            }
            return t
        }, n.isReadyMethodCalled_bl = !1, t.FWDRAPUtils = n
    }(window), !window.FWDAnimation) {
    var _fwd_gsScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window;
    (_fwd_gsScope._fwd_gsQueue || (_fwd_gsScope._fwd_gsQueue = [])).push(function () {
            "use strict";

            function g(e, t, o, s) {
                o === s && (o = s - (s - t) / 1e6), e === t && (t = e + (o - e) / 1e6), this.a = e, this.b = t, this.c = o, this.d = s, this.da = s - e, this.ca = o - e, this.ba = t - e
            }

            function S(e, t, o, s) {
                var i = {
                        a: e
                    },
                    n = {},
                    r = {},
                    l = {
                        c: s
                    },
                    a = (e + t) / 2,
                    d = (t + o) / 2,
                    u = (o + s) / 2,
                    c = (a + d) / 2,
                    h = (d + u) / 2,
                    _ = (h - c) / 8;
                return i.b = a + (e - a) / 4, n.b = c + _, i.c = n.a = (i.b + n.b) / 2, n.c = r.a = (c + h) / 2, r.b = h - _, l.b = u + (s - u) / 4, r.c = l.a = (r.b + l.b) / 2, [i, n, r, l]
            }

            function b(e, t, o, s, i) {
                var n, r, l, a, d, u, c, h, _, f, p, m, b, g = e.length - 1,
                    y = 0,
                    v = e[0].a;
                for (n = 0; n < g; n++) r = (d = e[y]).a, l = d.d, a = e[y + 1].d, h = i ? (p = T[n], b = ((m = w[n]) + p) * t * .25 / (s ? .5 : D[n] || .5), l - ((u = l - (l - r) * (s ? .5 * t : 0 !== p ? b / p : 0)) + (((c = l + (a - l) * (s ? .5 * t : 0 !== m ? b / m : 0)) - u) * (3 * p / (p + m) + .5) / 4 || 0))) : l - ((u = l - (l - r) * t * .5) + (c = l + (a - l) * t * .5)) / 2, u += h, c += h, d.c = _ = u, d.b = 0 !== n ? v : v = d.a + .6 * (d.c - d.a), d.da = l - r, d.ca = _ - r, d.ba = v - r, o ? (f = S(r, v, _, l), e.splice(y, 1, f[0], f[1], f[2], f[3]), y += 4) : y++, v = c;
                (d = e[y]).b = v, d.c = v + .4 * (d.d - v), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = v - d.a, o && (f = S(d.a, v, d.c, d.d), e.splice(y, 1, f[0], f[1], f[2], f[3]))
            }

            function y(e, t, o, s) {
                var i, n, r, l, a, d, u = [];
                if (s)
                    for (n = (e = [s].concat(e)).length; - 1 < --n;) "string" == typeof (d = e[n][t]) && "=" === d.charAt(1) && (e[n][t] = s[t] + Number(d.charAt(0) + d.substr(2)));
                if ((i = e.length - 2) < 0) return u[0] = new g(e[0][t], 0, 0, e[i < -1 ? 0 : 1][t]), u;
                for (n = 0; n < i; n++) r = e[n][t], l = e[n + 1][t], u[n] = new g(r, 0, 0, l), o && (a = e[n + 2][t], T[n] = (T[n] || 0) + (l - r) * (l - r), w[n] = (w[n] || 0) + (a - l) * (a - l));
                return u[n] = new g(e[n][t], 0, 0, e[n + 1][t]), u
            }

            function _(e, t, o, s, i, n) {
                var r, l, a, d, u, c, h, _, f = {},
                    p = [],
                    m = n || e[0];
                for (l in i = "string" == typeof i ? "," + i + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) p.push(l);
                if (1 < e.length) {
                    for (_ = e[e.length - 1], h = !0, r = p.length; - 1 < --r;)
                        if (l = p[r], .05 < Math.abs(m[l] - _[l])) {
                            h = !1;
                            break
                        } h && (e = e.concat(), n && e.unshift(n), e.push(e[1]), n = e[e.length - 3])
                }
                for (T.length = w.length = D.length = 0, r = p.length; - 1 < --r;) l = p[r], v[l] = -1 !== i.indexOf("," + l + ","), f[l] = y(e, l, v[l], n);
                for (r = T.length; - 1 < --r;) T[r] = Math.sqrt(T[r]), w[r] = Math.sqrt(w[r]);
                if (!s) {
                    for (r = p.length; - 1 < --r;)
                        if (v[l])
                            for (c = (a = f[p[r]]).length - 1, d = 0; d < c; d++) u = a[d + 1].da / w[d] + a[d].da / T[d] || 0, D[d] = (D[d] || 0) + u * u;
                    for (r = D.length; - 1 < --r;) D[r] = Math.sqrt(D[r])
                }
                for (r = p.length, d = o ? 4 : 1; - 1 < --r;) a = f[l = p[r]], b(a, t, o, s, v[l]), h && (a.splice(0, d), a.splice(a.length - d, d));
                return f
            }

            function f(e, t, o) {
                for (var s, i, n, r, l, a, d, u, c, h, _, f = 1 / o, p = e.length; - 1 < --p;)
                    for (n = (h = e[p]).a, r = h.d - n, l = h.c - n, a = h.b - n, s = i = 0, u = 1; u <= o; u++) s = i - (i = ((d = f * u) * d * r + 3 * (c = 1 - d) * (d * l + c * a)) * d), t[_ = p * o + u - 1] = (t[_] || 0) + s * s
            }
            var P, T, w, D, v, o, m, e, t, s;

            function a(e) {
                for (; e;) e.f || e.blob || (e.m = Math.round), e = e._next
            }
            _fwd_gsScope.FWDFWD_gsDefine("FWDAnimation", ["core.FWDAnim", "core.FWDSimpleTimeline", "FWDTweenLite"], function (s, u, m) {
                function b(e) {
                    var t, o = [],
                        s = e.length;
                    for (t = 0; t !== s; o.push(e[t++]));
                    return o
                }

                function g(e, t, o) {
                    var s, i, n = e.cycle;
                    for (s in n) i = n[s], e[s] = "function" == typeof i ? i(o, t[o]) : i[o % i.length];
                    delete e.cycle
                }
                var y = function (e, t, o) {
                        m.call(this, e, t, o), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = y.prototype.render
                    },
                    v = 1e-10,
                    S = m._internals,
                    T = S.isSelector,
                    P = S.isArray,
                    e = y.prototype = m.to({}, .1, {}),
                    w = [];
                y.version = "1.19.0", e.constructor = y, e.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = m.killTweensOf, y.getTweensOf = m.getTweensOf, y.lagSmoothing = m.lagSmoothing, y.ticker = m.ticker, y.render = m.render, e.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), m.prototype.invalidate.call(this)
                }, e.updateTo = function (e, t) {
                    var o, s = this.ratio,
                        i = this.vars.immediateRender || e.immediateRender;
                    for (o in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[o] = e[o];
                    if (this._initted || i)
                        if (t) this._initted = !1, i && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && m._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                        var n = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._initted = !1, this._init(), 0 < this._time || i)
                        for (var r, l = 1 / (1 - s), a = this._firstPT; a;) r = a.s + a.c, a.c *= l, a.s = r - a.c, a = a._next;
                    return this
                }, e.render = function (e, t, o) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, i, n, r, l, a, d, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._time,
                        _ = this._totalTime,
                        f = this._cycle,
                        p = this._duration,
                        m = this._rawPrevTime;
                    if (c - 1e-7 <= e ? (this._totalTime = c, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = p, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, i = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === p && (!this._initted && this.vars.lazy && !o || (this._startTime === this._timeline._duration && (e = 0), (m < 0 || e <= 0 && -1e-7 <= e || m === v && "isPause" !== this.data) && m !== e && (o = !0, v < m && (i = "onReverseComplete")), this._rawPrevTime = u = !t || e || m === e ? e : v))) : e < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === p && 0 < m) && (i = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === p && (!this._initted && this.vars.lazy && !o || (0 <= m && (o = !0), this._rawPrevTime = u = !t || e || m === e ? e : v))), this._initted || (o = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (r = p + this._repeatDelay, this._cycle = this._totalTime / r >> 0, 0 !== this._cycle && this._cycle === this._totalTime / r && _ <= e && this._cycle--, this._time = this._totalTime - this._cycle * r, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? this._time = p : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / p, (1 === (a = this._easeType) || 3 === a && .5 <= l) && (l = 1 - l), 3 === a && (l *= 2), 1 === (d = this._easePower) ? l *= l : 2 === d ? l *= l * l : 3 === d ? l *= l * l * l : 4 === d && (l *= l * l * l * l), 1 === a ? this.ratio = 1 - l : 2 === a ? this.ratio = l : this._time / p < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / p)), h !== this._time || o || f !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = h, this._totalTime = _, this._rawPrevTime = m, this._cycle = f, S.lazyTweens.push(this), void(this._lazy = [e, t]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / p) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== h && 0 <= e && (this._active = !0), 0 === _ && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, t, o) : i = i || "_dummyGS"), this.vars.onStart && (0 === this._totalTime && 0 !== p || t || this._callback("onStart"))), n = this._firstPT; n;) {
                            if (n.f) n.t[n.p](n.c * this.ratio + n.s);
                            else {
                                var b = n.c * this.ratio + n.s;
                                "x" == n.p ? n.t.setX(b) : "y" == n.p ? n.t.setY(b) : "z" == n.p ? n.t.setZ(b) : "angleX" == n.p ? n.t.setAngleX(b) : "angleY" == n.p ? n.t.setAngleY(b) : "angleZ" == n.p ? n.t.setAngleZ(b) : "w" == n.p ? n.t.setWidth(b) : "h" == n.p ? n.t.setHeight(b) : "alpha" == n.p ? n.t.setAlpha(b) : "scale" == n.p ? n.t.setScale2(b) : n.t[n.p] = b
                            }
                            n = n._next
                        }
                        this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, t, o), t || this._totalTime === _ && !i || this._callback("onUpdate")), this._cycle !== f && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), i && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === p && this._rawPrevTime === v && u !== v && (this._rawPrevTime = 0)))
                    } else _ !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
                }, y.to = function (e, t, o) {
                    return new y(e, t, o)
                }, y.from = function (e, t, o) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new y(e, t, o)
                }, y.fromTo = function (e, t, o, s) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new y(e, t, s)
                }, y.staggerTo = y.allTo = function (e, t, o, s, i, n, r) {
                    s = s || 0;

                    function l() {
                        o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), i.apply(r || o.callbackScope || this, n || w)
                    }
                    var a, d, u, c, h = 0,
                        _ = [],
                        f = o.cycle,
                        p = o.startAt && o.startAt.cycle;
                    for (P(e) || ("string" == typeof e && (e = m.selector(e) || e), T(e) && (e = b(e))), e = e || [], s < 0 && ((e = b(e)).reverse(), s *= -1), a = e.length - 1, u = 0; u <= a; u++) {
                        for (c in d = {}, o) d[c] = o[c];
                        if (f && (g(d, e, u), null != d.duration && (t = d.duration, delete d.duration)), p) {
                            for (c in p = d.startAt = {}, o.startAt) p[c] = o.startAt[c];
                            g(d.startAt, e, u)
                        }
                        d.delay = h + (d.delay || 0), u === a && i && (d.onComplete = l), _[u] = new y(e[u], t, d), h += s
                    }
                    return _
                }, y.staggerFrom = y.allFrom = function (e, t, o, s, i, n, r) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, y.staggerTo(e, t, o, s, i, n, r)
                }, y.staggerFromTo = y.allFromTo = function (e, t, o, s, i, n, r, l) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, y.staggerTo(e, t, s, i, n, r, l)
                }, y.delayedCall = function (e, t, o, s, i) {
                    return new y(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: o,
                        callbackScope: s,
                        onReverseComplete: t,
                        onReverseCompleteParams: o,
                        immediateRender: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, y.set = function (e, t) {
                    return new y(e, 0, t)
                }, y.isTweening = function (e) {
                    return 0 < m.getTweensOf(e, !0).length
                };
                var n = function (e, t) {
                        for (var o = [], s = 0, i = e._first; i;) i instanceof m ? o[s++] = i : (t && (o[s++] = i), s = (o = o.concat(n(i, t))).length), i = i._next;
                        return o
                    },
                    c = y.getAllTweens = function (e) {
                        return n(s._rootTimeline, e).concat(n(s._rootFramesTimeline, e))
                    };
                y.killAll = function (e, t, o, s) {
                    null == t && (t = !0), null == o && (o = !0);
                    var i, n, r, l = c(0 != s),
                        a = l.length,
                        d = t && o && s;
                    for (r = 0; r < a; r++) n = l[r], (d || n instanceof u || (i = n.target === n.vars.onComplete) && o || t && !i) && (e ? n.totalTime(n._reversed ? 0 : n.totalDuration()) : n._enabled(!1, !1))
                }, y.killChildTweensOf = function (e, t) {
                    if (null != e) {
                        var o, s, i, n, r, l = S.tweenLookup;
                        if ("string" == typeof e && (e = m.selector(e) || e), T(e) && (e = b(e)), P(e))
                            for (n = e.length; - 1 < --n;) y.killChildTweensOf(e[n], t);
                        else {
                            for (i in o = [], l)
                                for (s = l[i].target.parentNode; s;) s === e && (o = o.concat(l[i].tweens)), s = s.parentNode;
                            for (r = o.length, n = 0; n < r; n++) t && o[n].totalTime(o[n].totalDuration()), o[n]._enabled(!1, !1)
                        }
                    }
                };

                function i(e, t, o, s) {
                    t = !1 !== t, o = !1 !== o;
                    for (var i, n, r = c(s = !1 !== s), l = t && o && s, a = r.length; - 1 < --a;) n = r[a], (l || n instanceof u || (i = n.target === n.vars.onComplete) && o || t && !i) && n.paused(e)
                }
                return y.pauseAll = function (e, t, o) {
                    i(!0, e, t, o)
                }, y.resumeAll = function (e, t, o) {
                    i(!1, e, t, o)
                }, y.globalTimeScale = function (e) {
                    var t = s._rootTimeline,
                        o = m.ticker.time;
                    return arguments.length ? (e = e || v, t._startTime = o - (o - t._startTime) * t._timeScale / e, t = s._rootFramesTimeline, o = m.ticker.frame, t._startTime = o - (o - t._startTime) * t._timeScale / e, t._timeScale = s._rootTimeline._timeScale = e, e) : t._timeScale
                }, e.progress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, e.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, e.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, e.duration = function (e) {
                    return arguments.length ? s.prototype.duration.call(this, e) : this._duration
                }, e.totalDuration = function (e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, e.repeat = function (e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, e.repeatDelay = function (e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, e.yoyo = function (e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, y
            }, !0), _fwd_gsScope.FWDFWD_gsDefine("FWDTimelineLite", ["core.FWDAnim", "core.FWDSimpleTimeline", "FWDTweenLite"], function (u, c, h) {
                function _(e) {
                    c.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var t, o, s = this.vars;
                    for (o in s) t = s[o], y(t) && -1 !== t.join("").indexOf("{self}") && (s[o] = this._swapSelfInParams(t));
                    y(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                }

                function f(e) {
                    var t, o = {};
                    for (t in e) o[t] = e[t];
                    return o
                }

                function p(e, t, o) {
                    var s, i, n = e.cycle;
                    for (s in n) i = n[s], e[s] = "function" == typeof i ? i.call(t[o], o) : i[o % i.length];
                    delete e.cycle
                }

                function m(e) {
                    var t, o = [],
                        s = e.length;
                    for (t = 0; t !== s; o.push(e[t++]));
                    return o
                }
                var b = 1e-10,
                    e = h._internals,
                    t = _._internals = {},
                    g = e.isSelector,
                    y = e.isArray,
                    v = e.lazyTweens,
                    S = e.lazyRender,
                    r = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    n = t.pauseCallback = function () {},
                    o = _.prototype = new c;
                return _.version = "1.19.0", o.constructor = _, o.kill()._gc = o._forcingPlayhead = o._hasPause = !1, o.to = function (e, t, o, s) {
                    var i = o.repeat && r.FWDAnimation || h;
                    return t ? this.add(new i(e, t, o), s) : this.set(e, o, s)
                }, o.from = function (e, t, o, s) {
                    return this.add((o.repeat && r.FWDAnimation || h).from(e, t, o), s)
                }, o.fromTo = function (e, t, o, s, i) {
                    var n = s.repeat && r.FWDAnimation || h;
                    return t ? this.add(n.fromTo(e, t, o, s), i) : this.set(e, s, i)
                }, o.staggerTo = function (e, t, o, s, i, n, r, l) {
                    var a, d, u = new _({
                            onComplete: n,
                            onCompleteParams: r,
                            callbackScope: l,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        c = o.cycle;
                    for ("string" == typeof e && (e = h.selector(e) || e), g(e = e || []) && (e = m(e)), (s = s || 0) < 0 && ((e = m(e)).reverse(), s *= -1), d = 0; d < e.length; d++)(a = f(o)).startAt && (a.startAt = f(a.startAt), a.startAt.cycle && p(a.startAt, e, d)), c && (p(a, e, d), null != a.duration && (t = a.duration, delete a.duration)), u.to(e[d], t, a, d * s);
                    return this.add(u, i)
                }, o.staggerFrom = function (e, t, o, s, i, n, r, l) {
                    return o.immediateRender = 0 != o.immediateRender, o.runBackwards = !0, this.staggerTo(e, t, o, s, i, n, r, l)
                }, o.staggerFromTo = function (e, t, o, s, i, n, r, l, a) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, this.staggerTo(e, t, s, i, n, r, l, a)
                }, o.call = function (e, t, o, s) {
                    return this.add(h.delayedCall(0, e, t, o), s)
                }, o.set = function (e, t, o) {
                    return o = this._parseTimeOrLabel(o, 0, !0), null == t.immediateRender && (t.immediateRender = o === this._time && !this._paused), this.add(new h(e, 0, t), o)
                }, _.exportRoot = function (e, t) {
                    null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                    var o, s, i = new _(e),
                        n = i._timeline;
                    for (null == t && (t = !0), n._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = n._time, o = n._first; o;) s = o._next, t && o instanceof h && o.target === o.vars.onComplete || i.add(o, o._startTime - o._delay), o = s;
                    return n.add(i, 0), i
                }, o.add = function (e, t, o, s) {
                    var i, n, r, l, a, d;
                    if ("number" != typeof t && (t = this._parseTimeOrLabel(t, 0, !0, e)), !(e instanceof u)) {
                        if (e instanceof Array || e && e.push && y(e)) {
                            for (o = o || "normal", s = s || 0, i = t, n = e.length, r = 0; r < n; r++) y(l = e[r]) && (l = new _({
                                tweens: l
                            })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === o ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === o && (l._startTime -= l.delay())), i += s;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, t);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = h.delayedCall(0, e)
                    }
                    if (c.prototype.add.call(this, e, t), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (d = (a = this).rawTime() > e._startTime; a._timeline;) d && a._timeline.smoothChildTiming ? a.totalTime(a._totalTime, !0) : a._gc && a._enabled(!0, !1), a = a._timeline;
                    return this
                }, o.remove = function (e) {
                    if (e instanceof u) {
                        this._remove(e, !1);
                        var t = e._timeline = e.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && y(e)) {
                        for (var o = e.length; - 1 < --o;) this.remove(e[o]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, o._remove = function (e, t) {
                    c.prototype._remove.call(this, e, t);
                    var o = this._last;
                    return o ? this._time > o._startTime + o._totalDuration / o._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, o.append = function (e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, o.insert = o.insertMultiple = function (e, t, o, s) {
                    return this.add(e, t || 0, o, s)
                }, o.appendMultiple = function (e, t, o, s) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), o, s)
                }, o.addLabel = function (e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, o.addPause = function (e, t, o, s) {
                    var i = h.delayedCall(0, n, o, s || this);
                    return i.vars.onComplete = i.vars.onReverseComplete = t, i.data = "isPause", this._hasPause = !0, this.add(i, e)
                }, o.removeLabel = function (e) {
                    return delete this._labels[e], this
                }, o.getLabelTime = function (e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, o._parseTimeOrLabel = function (e, t, o, s) {
                    var i;
                    if (s instanceof u && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && y(s)))
                        for (i = s.length; - 1 < --i;) s[i] instanceof u && s[i].timeline === this && this.remove(s[i]);
                    if ("string" == typeof t) return this._parseTimeOrLabel(t, o && "number" == typeof e && null == this._labels[t] ? e - this.duration() : 0, o);
                    if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (i = e.indexOf("="))) return null == this._labels[e] ? o ? this._labels[e] = this.duration() + t : t : this._labels[e] + t;
                        t = parseInt(e.charAt(i - 1) + "1", 10) * Number(e.substr(i + 1)), e = 1 < i ? this._parseTimeOrLabel(e.substr(0, i - 1), 0, o) : this.duration()
                    }
                    return Number(e) + t
                }, o.seek = function (e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, o.stop = function () {
                    return this.paused(!0)
                }, o.gotoAndPlay = function (e, t) {
                    return this.play(e, t)
                }, o.gotoAndStop = function (e, t) {
                    return this.pause(e, t)
                }, o.render = function (e, t, o) {
                    this._gc && this._enabled(!0, !1);
                    var s, i, n, r, l, a, d, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        h = this._startTime,
                        _ = this._timeScale,
                        f = this._paused;
                    if (u - 1e-7 <= e) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (i = !0, r = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || this._rawPrevTime < 0 || this._rawPrevTime === b) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > b && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : b, e = u + 1e-4;
                    else if (e < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== b && (0 < this._rawPrevTime || e < 0 && 0 <= this._rawPrevTime)) && (r = "onReverseComplete", i = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = i = !0, r = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : b, 0 === e && i)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (i = !1), s = s._next;
                            e = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !t) {
                            if (c <= e)
                                for (s = this._first; s && s._startTime <= e && !a;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (a = s), s = s._next;
                            else
                                for (s = this._last; s && s._startTime >= e && !a;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (a = s), s = s._prev;
                            a && (this._time = e = a._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = e
                    }
                    if (this._time !== c && this._first || o || l || a) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && 0 < e && (this._active = !0), 0 === c && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), c <= (d = this._time))
                            for (s = this._first; s && (n = s._next, d === this._time && (!this._paused || f));)(s._active || s._startTime <= d && !s._paused && !s._gc) && (a === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)), s = n;
                        else
                            for (s = this._last; s && (n = s._prev, d === this._time && (!this._paused || f));) {
                                if (s._active || s._startTime <= c && !s._paused && !s._gc) {
                                    if (a === s) {
                                        for (a = s._prev; a && a.endTime() > this._time;) a.render(a._reversed ? a.totalDuration() - (e - a._startTime) * a._timeScale : (e - a._startTime) * a._timeScale, t, o), a = a._prev;
                                        a = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)
                                }
                                s = n
                            }
                        this._onUpdate && (t || (v.length && S(), this._callback("onUpdate"))), r && (this._gc || h !== this._startTime && _ === this._timeScale || (0 === this._time || u >= this.totalDuration()) && (i && (v.length && S(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r)))
                    }
                }, o._hasPausedChild = function () {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof _ && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, o.getChildren = function (e, t, o, s) {
                    s = s || -9999999999;
                    for (var i = [], n = this._first, r = 0; n;) n._startTime < s || (n instanceof h ? !1 !== t && (i[r++] = n) : (!1 !== o && (i[r++] = n), !1 !== e && (r = (i = i.concat(n.getChildren(!0, t, o))).length))), n = n._next;
                    return i
                }, o.getTweensOf = function (e, t) {
                    var o, s, i = this._gc,
                        n = [],
                        r = 0;
                    for (i && this._enabled(!0, !0), s = (o = h.getTweensOf(e)).length; - 1 < --s;)(o[s].timeline === this || t && this._contains(o[s])) && (n[r++] = o[s]);
                    return i && this._enabled(!1, !0), n
                }, o.recent = function () {
                    return this._recent
                }, o._contains = function (e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, o.shiftChildren = function (e, t, o) {
                    o = o || 0;
                    for (var s, i = this._first, n = this._labels; i;) i._startTime >= o && (i._startTime += e), i = i._next;
                    if (t)
                        for (s in n) n[s] >= o && (n[s] += e);
                    return this._uncache(!0)
                }, o._kill = function (e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var o = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), s = o.length, i = !1; - 1 < --s;) o[s]._kill(e, t) && (i = !0);
                    return i
                }, o.clear = function (e) {
                    var t = this.getChildren(!1, !0, !0),
                        o = t.length;
                    for (this._time = this._totalTime = 0; - 1 < --o;) t[o]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, o.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return u.prototype.invalidate.call(this)
                }, o._enabled = function (e, t) {
                    if (e === this._gc)
                        for (var o = this._first; o;) o._enabled(e, !0), o = o._next;
                    return c.prototype._enabled.call(this, e, t)
                }, o.totalTime = function (e, t, o) {
                    this._forcingPlayhead = !0;
                    var s = u.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, o.duration = function (e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, o.totalDuration = function (e) {
                    if (arguments.length) return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this;
                    if (this._dirty) {
                        for (var t, o, s = 0, i = this._last, n = 999999999999; i;) t = i._prev, i._dirty && i.totalDuration(), i._startTime > n && this._sortChildren && !i._paused ? this.add(i, i._startTime - i._delay) : n = i._startTime, i._startTime < 0 && !i._paused && (s -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale), this.shiftChildren(-i._startTime, !1, -9999999999), n = 0), s < (o = i._startTime + i._totalDuration / i._timeScale) && (s = o), i = t;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }, o.paused = function (e) {
                    if (!e)
                        for (var t = this._first, o = this._time; t;) t._startTime === o && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                    return u.prototype.paused.apply(this, arguments)
                }, o.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === u._rootFramesTimeline
                }, o.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, _
            }, !0), _fwd_gsScope.FWDFWD_gsDefine("TimelineMax", ["FWDTimelineLite", "FWDTweenLite", "easing.Ease"], function (t, l, e) {
                function o(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                }
                var B = 1e-10,
                    s = l._internals,
                    A = s.lazyTweens,
                    F = s.lazyRender,
                    a = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    d = new e(null, null, 1, 0),
                    i = o.prototype = new t;
                return i.constructor = o, i.kill()._gc = !1, o.version = "1.19.0", i.invalidate = function () {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, i.addCallback = function (e, t, o, s) {
                    return this.add(l.delayedCall(0, e, o, s), t)
                }, i.removeCallback = function (e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var o = this.getTweensOf(e, !1), s = o.length, i = this._parseTimeOrLabel(t); - 1 < --s;) o[s]._startTime === i && o[s]._enabled(!1, !1);
                    return this
                }, i.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, i.tweenTo = function (e, t) {
                    t = t || {};
                    var o, s, i, n = {
                            ease: d,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        r = t.repeat && a.FWDAnimation || l;
                    for (s in t) n[s] = t[s];
                    return n.time = this._parseTimeOrLabel(e), o = Math.abs(Number(n.time) - this._time) / this._timeScale || .001, i = new r(this, o, n), n.onStart = function () {
                        i.target.paused(!0), i.vars.time !== i.target.time() && o === i.duration() && i.duration(Math.abs(i.vars.time - i.target.time()) / i.target._timeScale), t.onStart && i._callback("onStart")
                    }, i
                }, i.tweenFromTo = function (e, t, o) {
                    o = o || {}, e = this._parseTimeOrLabel(e), o.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, o.immediateRender = !1 !== o.immediateRender;
                    var s = this.tweenTo(t, o);
                    return s.duration(Math.abs(s.vars.time - e) / this._timeScale || .001)
                }, i.render = function (e, t, o) {
                    this._gc && this._enabled(!0, !1);
                    var s, i, n, r, l, a, d, u, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._duration,
                        _ = this._time,
                        f = this._totalTime,
                        p = this._startTime,
                        m = this._timeScale,
                        b = this._rawPrevTime,
                        g = this._paused,
                        y = this._cycle;
                    if (c - 1e-7 <= e) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (i = !0, r = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && -1e-7 <= e || b < 0 || b === B) && b !== e && this._first && (l = !0, B < b && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : B, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : e = (this._time = h) + 1e-4;
                    else if (e < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== _ || 0 === h && b !== B && (0 < b || e < 0 && 0 <= b) && !this._locked) && (r = "onReverseComplete", i = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = i = !0, r = "onReverseComplete") : 0 <= b && this._first && (l = !0), this._rawPrevTime = e;
                        else {
                            if (this._rawPrevTime = h || !t || e || this._rawPrevTime === e ? e : B, 0 === e && i)
                                for (s = this._first; s && 0 === s._startTime;) s._duration || (i = !1), s = s._next;
                            e = 0, this._initted || (l = !0)
                        }
                    else if (0 === h && b < 0 && (l = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (a = h + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && f <= e && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = h - this._time), this._time > h ? e = (this._time = h) + 1e-4 : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
                        if (_ <= (e = this._time))
                            for (s = this._first; s && s._startTime <= e && !d;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (d = s), s = s._next;
                        else
                            for (s = this._last; s && s._startTime >= e && !d;) s._duration || "isPause" === s.data && 0 < s._rawPrevTime && (d = s), s = s._prev;
                        d && (this._time = e = d._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== y && !this._locked) {
                        var v = this._yoyo && 0 != (1 & y),
                            S = v === (this._yoyo && 0 != (1 & this._cycle)),
                            T = this._totalTime,
                            P = this._cycle,
                            w = this._rawPrevTime,
                            D = this._time;
                        if (this._totalTime = y * h, this._cycle < y ? v = !v : this._totalTime += h, this._time = _, this._rawPrevTime = 0 === h ? b - 1e-4 : b, this._cycle = y, this._locked = !0, _ = v ? 0 : h, this.render(_, t, 0 === h), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), _ !== this._time) return;
                        if (S && (_ = v ? h + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = D, this._totalTime = T, this._cycle = P, this._rawPrevTime = w
                    }
                    if (this._time !== _ && this._first || o || l || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < e && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), _ <= (u = this._time))
                            for (s = this._first; s && (n = s._next, u === this._time && (!this._paused || g));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (d === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)), s = n;
                        else
                            for (s = this._last; s && (n = s._prev, u === this._time && (!this._paused || g));) {
                                if (s._active || s._startTime <= _ && !s._paused && !s._gc) {
                                    if (d === s) {
                                        for (d = s._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, o), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, o) : s.render((e - s._startTime) * s._timeScale, t, o)
                                }
                                s = n
                            }
                        this._onUpdate && (t || (A.length && F(), this._callback("onUpdate"))), r && (this._locked || this._gc || p !== this._startTime && m === this._timeScale || (0 === this._time || c >= this.totalDuration()) && (i && (A.length && F(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r)))
                    } else f !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
                }, i.getActive = function (e, t, o) {
                    null == e && (e = !0), null == t && (t = !0), null == o && (o = !1);
                    var s, i, n = [],
                        r = this.getChildren(e, t, o),
                        l = 0,
                        a = r.length;
                    for (s = 0; s < a; s++)(i = r[s]).isActive() && (n[l++] = i);
                    return n
                }, i.getLabelAfter = function (e) {
                    e || 0 !== e && (e = this._time);
                    var t, o = this.getLabelsArray(),
                        s = o.length;
                    for (t = 0; t < s; t++)
                        if (o[t].time > e) return o[t].name;
                    return null
                }, i.getLabelBefore = function (e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), o = t.length; - 1 < --o;)
                        if (t[o].time < e) return t[o].name;
                    return null
                }, i.getLabelsArray = function () {
                    var e, t = [],
                        o = 0;
                    for (e in this._labels) t[o++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function (e, t) {
                        return e.time - t.time
                    }), t
                }, i.progress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, i.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, i.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, i.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, i.repeat = function (e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, i.repeatDelay = function (e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, i.yoyo = function (e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, i.currentLabel = function (e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, o
            }, !0), P = 180 / Math.PI, T = [], w = [], D = [], v = {}, o = _fwd_gsScope.FWDFWD_gsDefine.globals, m = _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.7",
                API: 2,
                fwd_global: !0,
                init: function (e, t, o) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var s, i, n, r, l, a = t.values || [],
                        d = {},
                        u = a[0],
                        c = t.autoRotate || o.vars.orientToBezier;
                    for (s in this._autoRotate = c ? c instanceof Array ? c : [
                            ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                        ] : null, u) this._props.push(s);
                    for (n = this._props.length; - 1 < --n;) s = this._props[n], this._overwriteProps.push(s), i = this._func[s] = "function" == typeof e[s], d[s] = i ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), l || d[s] !== a[0][s] && (l = d);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? _(a, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, l) : function (e, t, o) {
                            var s, i, n, r, l, a, d, u, c, h, _, f = {},
                                p = "cubic" === (t = t || "soft") ? 3 : 2,
                                m = "soft" === t,
                                b = [];
                            if (m && o && (e = [o].concat(e)), null == e || e.length < 1 + p) throw "invalid Bezier data";
                            for (c in e[0]) b.push(c);
                            for (a = b.length; - 1 < --a;) {
                                for (f[c = b[a]] = l = [], h = 0, u = e.length, d = 0; d < u; d++) s = null == o ? e[d][c] : "string" == typeof (_ = e[d][c]) && "=" === _.charAt(1) ? o[c] + Number(_.charAt(0) + _.substr(2)) : Number(_), m && 1 < d && d < u - 1 && (l[h++] = (s + l[h - 2]) / 2), l[h++] = s;
                                for (u = h - p + 1, d = h = 0; d < u; d += p) s = l[d], i = l[d + 1], n = l[d + 2], r = 2 == p ? 0 : l[d + 3], l[h++] = _ = 3 == p ? new g(s, i, n, r) : new g(s, (2 * i + s) / 3, (2 * i + n) / 3, n);
                                l.length = h
                            }
                            return f
                        }(a, t.type, d), this._segCount = this._beziers[s].length, this._timeRes) {
                        var h = function (e, t) {
                            var o, s, i, n, r = [],
                                l = [],
                                a = 0,
                                d = 0,
                                u = (t = t >> 0 || 6) - 1,
                                c = [],
                                h = [];
                            for (o in e) f(e[o], r, t);
                            for (i = r.length, s = 0; s < i; s++) a += Math.sqrt(r[s]), h[n = s % t] = a, n === u && (d += a, c[n = s / t >> 0] = h, l[n] = d, a = 0, h = []);
                            return {
                                length: d,
                                lengths: l,
                                segments: c
                            }
                        }(this._beziers, this._timeRes);
                        this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (c = this._autoRotate)
                        for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; - 1 < --n;) {
                            for (r = 0; r < 3; r++) s = c[n][r], this._func[s] = "function" == typeof e[s] && e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            s = c[n][2], this._initialRotations[n] = (this._func[s] ? this._func[s].call(this._target) : this._target[s]) || 0, this._overwriteProps.push(s)
                        }
                    return this._startRatio = o.vars.runBackwards ? 1 : 0, !0
                },
                set: function (e) {
                    var t, o, s, i, n, r, l, a, d, u, c = this._segCount,
                        h = this._func,
                        _ = this._target,
                        f = e !== this._startRatio;
                    if (this._timeRes) {
                        if (d = this._lengths, u = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < c - 1) {
                            for (a = c - 1; s < a && (this._l2 = d[++s]) <= e;);
                            this._l1 = d[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && 0 < s) {
                            for (; 0 < s && (this._l1 = d[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = d[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (t = s, e -= this._l1, s = this._si, e > this._s2 && s < u.length - 1) {
                            for (a = u.length - 1; s < a && (this._s2 = u[++s]) <= e;);
                            this._s1 = u[s - 1], this._si = s
                        } else if (e < this._s1 && 0 < s) {
                            for (; 0 < s && (this._s1 = u[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                        }
                        r = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else r = (e - (t = e < 0 ? 0 : 1 <= e ? c - 1 : c * e >> 0) * (1 / c)) * c;
                    for (o = 1 - r, s = this._props.length; - 1 < --s;) i = this._props[s], l = (r * r * (n = this._beziers[i][t]).da + 3 * o * (r * n.ca + o * n.ba)) * r + n.a, this._mod[i] && (l = this._mod[i](l, _)), h[i] ? _[i](l) : "x" == i ? _.setX(l) : "y" == i ? _.setY(l) : "z" == i ? _.setZ(l) : "angleX" == i ? _.setAngleX(l) : "angleY" == i ? _.setAngleY(l) : "angleZ" == i ? _.setAngleZ(l) : "w" == i ? _.setWidth(l) : "h" == i ? _.setHeight(l) : "alpha" == i ? _.setAlpha(l) : "scale" == i ? _.setScale2(l) : _[i] = l;
                    if (this._autoRotate) {
                        var p, m, b, g, y, v, S, T = this._autoRotate;
                        for (s = T.length; - 1 < --s;) i = T[s][2], v = T[s][3] || 0, S = !0 === T[s][4] ? 1 : P, n = this._beziers[T[s][0]], p = this._beziers[T[s][1]], n && p && (n = n[t], p = p[t], m = n.a + (n.b - n.a) * r, m += ((g = n.b + (n.c - n.b) * r) - m) * r, g += (n.c + (n.d - n.c) * r - g) * r, b = p.a + (p.b - p.a) * r, b += ((y = p.b + (p.c - p.b) * r) - b) * r, y += (p.c + (p.d - p.c) * r - y) * r, l = f ? Math.atan2(y - b, g - m) * S + v : this._initialRotations[s], this._mod[i] && (l = this._mod[i](l, _)), h[i] ? _[i](l) : _[i] = l)
                    }
                }
            }), e = m.prototype, m.bezierThrough = _, m.cubicToQuadratic = S, m._autoCSS = !0, m.quadraticToCubic = function (e, t, o) {
                return new g(e, (2 * t + e) / 3, (2 * t + o) / 3, o)
            }, m._cssRegister = function () {
                var e = o.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        _ = t._parseToProxy,
                        f = t._setPluginRatio,
                        p = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function (e, t, o, s, i, n) {
                            t instanceof Array && (t = {
                                values: t
                            }), n = new m;
                            var r, l, a, d = t.values,
                                u = d.length - 1,
                                c = [],
                                h = {};
                            if (u < 0) return i;
                            for (r = 0; r <= u; r++) a = _(e, d[r], s, i, n, u !== r), c[r] = a.end;
                            for (l in t) h[l] = t[l];
                            return h.values = c, (i = new p(e, "bezier", 0, 0, a.pt, 2)).data = a, i.plugin = n, i.setRatio = f, 0 === h.autoRotate && (h.autoRotate = !0), !h.autoRotate || h.autoRotate instanceof Array || (r = !0 === h.autoRotate ? 0 : Number(h.autoRotate), h.autoRotate = null != a.end.left ? [
                                ["left", "top", "rotation", r, !1]
                            ] : null != a.end.x && [
                                ["x", "y", "rotation", r, !1]
                            ]), h.autoRotate && (s._transform || s._enableTransforms(!1), a.autoRotate = s._target._gsTransform, a.proxy.rotation = a.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), n._onInitTween(a.proxy, h, s._tween), i
                        }
                    })
                }
            }, e._mod = function (e) {
                for (var t, o = this._overwriteProps, s = o.length; - 1 < --s;)(t = e[o[s]]) && "function" == typeof t && (this._mod[o[s]] = t)
            }, e._kill = function (e) {
                var t, o, s = this._props;
                for (t in this._beziers)
                    if (t in e)
                        for (delete this._beziers[t], delete this._func[t], o = s.length; - 1 < --o;) s[o] === t && s.splice(o, 1);
                if (s = this._autoRotate)
                    for (o = s.length; - 1 < --o;) e[s[o][2]] && s.splice(o, 1);
                return this._super._kill.call(this, e)
            }, _fwd_gsScope.FWDFWD_gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "FWDTweenLite"], function (n, U) {
                var f, w, D, p, N = function () {
                        n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = N.prototype.setRatio
                    },
                    d = _fwd_gsScope.FWDFWD_gsDefine.globals,
                    m = {},
                    e = N.prototype = new n("css");
                (e.constructor = N).version = "1.19.0", N.API = 2, N.defaultTransformPerspective = 0, N.defaultSkewType = "compensated", N.defaultSmoothOrigin = !0, e = "px", N.suffixMap = {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e,
                    width: e,
                    height: e,
                    fontSize: e,
                    padding: e,
                    margin: e,
                    perspective: e,
                    lineHeight: ""
                };

                function r(e, t) {
                    return t.toUpperCase()
                }

                function t(e) {
                    return Z.createElementNS ? Z.createElementNS("http://www.w3.org/1999/xhtml", e) : Z.createElement(e)
                }

                function l(e) {
                    return M.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                }

                function b(e) {
                    window.console && console.log(e)
                }

                function B(e, t) {
                    var o, s, i = (t = t || ee).style;
                    if (void 0 !== i[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), o = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; - 1 < --s && void 0 === i[o[s] + e];);
                    return 0 <= s ? (ne = "-" + (re = 3 === s ? "ms" : o[s]).toLowerCase() + "-", re + e) : null
                }

                function g(e, t) {
                    var o, s, i, n = {};
                    if (t = t || le(e, null))
                        if (o = t.length)
                            for (; - 1 < --o;) - 1 !== (i = t[o]).indexOf("-transform") && Ie !== i || (n[i.replace(h, r)] = t.getPropertyValue(i));
                        else
                            for (o in t) - 1 !== o.indexOf("Transform") && Le !== o || (n[o] = t[o]);
                    else if (t = e.currentStyle || e.style)
                        for (o in t) "string" == typeof o && void 0 === n[o] && (n[o.replace(h, r)] = t[o]);
                    return ie || (n.opacity = l(e)), s = Ge(e, t, !1), n.rotation = s.rotation, n.skewX = s.skewX, n.scaleX = s.scaleX, n.scaleY = s.scaleY, n.x = s.x, n.y = s.y, Me && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ), n.filters && delete n.filters, n
                }

                function y(e, t, o, s, i) {
                    var n, r, l, a = {},
                        d = e.style;
                    for (r in o) "cssText" !== r && "length" !== r && isNaN(r) && (t[r] !== (n = o[r]) || i && i[r]) && -1 === r.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (a[r] = "auto" !== n || "left" !== r && "top" !== r ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof t[r] || "" === t[r].replace(u, "") ? n : 0 : ue(e, r), void 0 !== d[r] && (l = new ve(d, r, d[r], l))));
                    if (s)
                        for (r in s) "className" !== r && (a[r] = s[r]);
                    return {
                        difs: a,
                        firstMPT: l
                    }
                }

                function v(e, t, o) {
                    if ("svg" === (e.nodeName + "").toLowerCase()) return (o || le(e))[t] || 0;
                    if (e.getBBox && Ve(e)) return e.getBBox()[t] || 0;
                    var s = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        i = ce[t],
                        n = i.length;
                    for (o = o || le(e, null); - 1 < --n;) s -= parseFloat(ae(e, "padding" + i[n], o, !0)) || 0, s -= parseFloat(ae(e, "border" + i[n] + "Width", o, !0)) || 0;
                    return s
                }

                function A(e, t) {
                    return "function" == typeof e && (e = e(E, R)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                }

                function F(e, t) {
                    return "function" == typeof e && (e = e(E, R)), null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                }

                function H(e, t, o, s) {
                    var i, n, r, l, a;
                    return "function" == typeof e && (e = e(E, R)), (l = null == e ? t : "number" == typeof e ? e : (i = 360, n = e.split("_"), r = ((a = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === e.indexOf("rad") ? 1 : Q) - (a ? 0 : t), n.length && (s && (s[o] = t + r), -1 !== e.indexOf("short") && (r %= i) !== r % 180 && (r = r < 0 ? r + i : r - i), -1 !== e.indexOf("_cw") && r < 0 ? r = (r + 3599999999640) % i - (r / i | 0) * i : -1 !== e.indexOf("ccw") && 0 < r && (r = (r - 3599999999640) % i - (r / i | 0) * i)), t + r)) < 1e-6 && -1e-6 < l && (l = 0), l
                }

                function _(e, t, o) {
                    return 255 * (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (o - t) * e * 6 : e < .5 ? o : 3 * e < 2 ? t + (o - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                }

                function s(e, t) {
                    var o, s, i, n = e.match(me) || [],
                        r = 0,
                        l = n.length ? "" : e;
                    for (o = 0; o < n.length; o++) s = n[o], r += (i = e.substr(r, e.indexOf(s, r) - r)).length + s.length, 3 === (s = pe(s, t)).length && s.push(1), l += i + (t ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
                    return l + e.substr(r)
                }
                var W, S, T, x, P, C, R, E, o, i, O = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    k = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    L = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    I = /(?:\d|\-|\+|=|#|\.)*/g,
                    M = /opacity *= *([^)]*)/i,
                    Y = /opacity:([^;]*)/i,
                    a = /alpha\(opacity *=.+?\)/i,
                    X = /^(rgb|hsl)/,
                    c = /([A-Z])/g,
                    h = /-([a-z])/gi,
                    V = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    j = /(?:Left|Right|Width)/i,
                    z = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    G = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    q = /,(?=[^\)]*(?:\(|$))/gi,
                    K = /[\s,\(]/i,
                    J = Math.PI / 180,
                    Q = 180 / Math.PI,
                    $ = {},
                    Z = document,
                    ee = t("div"),
                    te = t("img"),
                    oe = N._internals = {
                        _specialProps: m
                    },
                    se = navigator.userAgent,
                    ie = (o = se.indexOf("Android"), i = t("a"), T = -1 !== se.indexOf("Safari") && -1 === se.indexOf("Chrome") && (-1 === o || 3 < Number(se.substr(o + 8, 1))), P = T && Number(se.substr(se.indexOf("Version/") + 8, 1)) < 6, x = -1 !== se.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(se) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(se)) && (C = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                    ne = "",
                    re = "",
                    le = Z.defaultView ? Z.defaultView.getComputedStyle : function () {},
                    ae = N.getStyle = function (e, t, o, s, i) {
                        var n;
                        return ie || "opacity" !== t ? (!s && e.style[t] ? n = e.style[t] : (o = o || le(e)) ? n = o[t] || o.getPropertyValue(t) || o.getPropertyValue(t.replace(c, "-$1").toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == i || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : i) : l(e)
                    },
                    de = oe.convertToPixels = function (e, t, o, s, i) {
                        if ("px" === s || !s) return o;
                        if ("auto" === s || !o) return 0;
                        var n, r, l, a = j.test(t),
                            d = e,
                            u = ee.style,
                            c = o < 0,
                            h = 1 === o;
                        if (c && (o = -o), h && (o *= 100), "%" === s && -1 !== t.indexOf("border")) n = o / 100 * (a ? e.clientWidth : e.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + ae(e, "position") + ";line-height:0;", "%" !== s && d.appendChild && "v" !== s.charAt(0) && "rem" !== s) u[a ? "borderLeftWidth" : "borderTopWidth"] = o + s;
                            else {
                                if (r = (d = e.parentNode || Z.body)._gsCache, l = U.ticker.frame, r && a && r.time === l) return r.width * o / 100;
                                u[a ? "width" : "height"] = o + s
                            }
                            d.appendChild(ee), n = parseFloat(ee[a ? "offsetWidth" : "offsetHeight"]), d.removeChild(ee), a && "%" === s && !1 !== N.cacheWidths && ((r = d._gsCache = d._gsCache || {}).time = l, r.width = n / o * 100), 0 !== n || i || (n = de(e, t, o, s, !0))
                        }
                        return h && (n /= 100), c ? -n : n
                    },
                    ue = oe.calculateOffset = function (e, t, o) {
                        if ("absolute" !== ae(e, "position", o)) return 0;
                        var s = "left" === t ? "Left" : "Top",
                            i = ae(e, "margin" + s, o);
                        return e["offset" + s] - (de(e, t, parseFloat(i), i.replace(I, "")) || 0)
                    },
                    ce = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    he = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    _e = function (e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        null != e && "" !== e || (e = "0 0");
                        var o, s = e.split(" "),
                            i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : s[0],
                            n = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : s[1];
                        if (3 < s.length && !t) {
                            for (s = e.split(", ").join(",").split(","), e = [], o = 0; o < s.length; o++) e.push(_e(s[o]));
                            return e.join(",")
                        }
                        return null == n ? n = "center" === i ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + n + (2 < s.length ? " " + s[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(i.replace(u, "")), t.oy = parseFloat(n.replace(u, "")), t.v = e), t || e
                    },
                    fe = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    pe = N.parseColor = function (e, t) {
                        var o, s, i, n, r, l, a, d, u, c, h;
                        if (e)
                            if ("number" == typeof e) o = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), fe[e]) o = fe[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (s = e.charAt(1)) + s + (i = e.charAt(2)) + i + (n = e.charAt(3)) + n), o = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (o = h = e.match(O), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(k)
                                    } else r = Number(o[0]) % 360 / 360, l = Number(o[1]) / 100, s = 2 * (a = Number(o[2]) / 100) - (i = a <= .5 ? a * (l + 1) : a + l - a * l), 3 < o.length && (o[3] = Number(e[3])), o[0] = _(r + 1 / 3, s, i), o[1] = _(r, s, i), o[2] = _(r - 1 / 3, s, i);
                                else o = e.match(O) || fe.transparent;
                                o[0] = Number(o[0]), o[1] = Number(o[1]), o[2] = Number(o[2]), 3 < o.length && (o[3] = Number(o[3]))
                            }
                        else o = fe.black;
                        return t && !h && (s = o[0] / 255, i = o[1] / 255, n = o[2] / 255, a = ((d = Math.max(s, i, n)) + (u = Math.min(s, i, n))) / 2, d === u ? r = l = 0 : (c = d - u, l = .5 < a ? c / (2 - d - u) : c / (d + u), r = d === s ? (i - n) / c + (i < n ? 6 : 0) : d === i ? (n - s) / c + 2 : (s - i) / c + 4, r *= 60), o[0] = r + .5 | 0, o[1] = 100 * l + .5 | 0, o[2] = 100 * a + .5 | 0), o
                    },
                    me = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (e in fe) me += "|" + e + "\\b";
                me = new RegExp(me + ")", "gi"), N.colorStringFilter = function (e) {
                    var t, o = e[0] + e[1];
                    me.test(o) && (t = -1 !== o.indexOf("hsl(") || -1 !== o.indexOf("hsla("), e[0] = s(e[0], t), e[1] = s(e[1], t)), me.lastIndex = 0
                }, U.defaultStringFilter || (U.defaultStringFilter = N.colorStringFilter);

                function be(e, t, n, r) {
                    if (null == e) return function (e) {
                        return e
                    };
                    var l, a = t ? (e.match(me) || [""])[0] : "",
                        d = e.split(a).join("").match(L) || [],
                        u = e.substr(0, e.indexOf(d[0])),
                        c = ")" === e.charAt(e.length - 1) ? ")" : "",
                        h = -1 !== e.indexOf(" ") ? " " : ",",
                        _ = d.length,
                        f = 0 < _ ? d[0].replace(O, "") : "";
                    return _ ? l = t ? function (e) {
                        var t, o, s, i;
                        if ("number" == typeof e) e += f;
                        else if (r && q.test(e)) {
                            for (i = e.replace(q, "|").split("|"), s = 0; s < i.length; s++) i[s] = l(i[s]);
                            return i.join(",")
                        }
                        if (t = (e.match(me) || [a])[0], s = (o = e.split(t).join("").match(L) || []).length, _ > s--)
                            for (; ++s < _;) o[s] = n ? o[(s - 1) / 2 | 0] : d[s];
                        return u + o.join(h) + h + t + c + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function (e) {
                        var t, o, s;
                        if ("number" == typeof e) e += f;
                        else if (r && q.test(e)) {
                            for (o = e.replace(q, "|").split("|"), s = 0; s < o.length; s++) o[s] = l(o[s]);
                            return o.join(",")
                        }
                        if (s = (t = e.match(L) || []).length, _ > s--)
                            for (; ++s < _;) t[s] = n ? t[(s - 1) / 2 | 0] : d[s];
                        return u + t.join(h) + c
                    } : function (e) {
                        return e
                    }
                }

                function ge(d) {
                    return d = d.split(","),
                        function (e, t, o, s, i, n, r) {
                            var l, a = (t + "").split(" ");
                            for (r = {}, l = 0; l < 4; l++) r[d[l]] = a[l] = a[l] || a[(l - 1) / 2 >> 0];
                            return s.parse(e, r, i, n)
                        }
                }
                oe._setPluginRatio = function (e) {
                    this.plugin.setRatio(e);
                    for (var t, o, s, i, n, r = this.data, l = r.proxy, a = r.firstMPT; a;) t = l[a.v], a.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), a.t[a.p] = t, a = a._next;
                    if (r.autoRotate && (r.autoRotate.rotation = r.mod ? r.mod(l.rotation, this.t) : l.rotation), 1 === e || 0 === e)
                        for (a = r.firstMPT, n = 1 === e ? "e" : "b"; a;) {
                            if ((o = a.t).type) {
                                if (1 === o.type) {
                                    for (i = o.xs0 + o.s + o.xs1, s = 1; s < o.l; s++) i += o["xn" + s] + o["xs" + (s + 1)];
                                    o[n] = i
                                }
                            } else o[n] = o.s + o.xs0;
                            a = a._next
                        }
                };

                function ye(e, t, o, s, i, n) {
                    var r = new Se(e, t, o, s - o, i, -1, n);
                    return r.b = o, r.e = r.xs0 = s, r
                }
                var ve = function (e, t, o, s, i) {
                        this.t = e, this.p = t, this.v = o, this.r = i, s && ((s._prev = this)._next = s)
                    },
                    Se = (oe._parseToProxy = function (e, t, o, s, i, n) {
                        var r, l, a, d, u, c = s,
                            h = {},
                            _ = {},
                            f = o._transform,
                            p = $;
                        for (o._transform = null, $ = t, s = u = o.parse(e, t, s, i), $ = p, n && (o._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); s && s !== c;) {
                            if (s.type <= 1 && (_[l = s.p] = s.s + s.c, h[l] = s.s, n || (d = new ve(s, "s", l, d, s.r), s.c = 0), 1 === s.type))
                                for (r = s.l; 0 < --r;) a = "xn" + r, _[l = s.p + "_" + a] = s.data[a], h[l] = s[a], n || (d = new ve(s, a, l, d, s.rxp[a]));
                            s = s._next
                        }
                        return {
                            proxy: h,
                            end: _,
                            firstMPT: d,
                            pt: u
                        }
                    }, oe.CSSPropTween = function (e, t, o, s, i, n, r, l, a, d, u) {
                        this.t = e, this.p = t, this.s = o, this.c = s, this.n = r || t, e instanceof Se || p.push(this.n), this.r = l, this.type = n || 0, a && (this.pr = a, f = !0), this.b = void 0 === d ? o : d, this.e = void 0 === u ? o + s : u, i && ((this._next = i)._prev = this)
                    }),
                    Te = N.parseComplex = function (e, t, o, s, i, n, r, l, a, d) {
                        o = o || n || "", "function" == typeof s && (s = s(E, R)), r = new Se(e, t, 0, 0, r, d ? 2 : 1, null, !1, l, o, s), s += "", i && me.test(s + o) && (s = [o, s], N.colorStringFilter(s), o = s[0], s = s[1]);
                        var u, c, h, _, f, p, m, b, g, y, v, S, T, P = o.split(", ").join(",").split(" "),
                            w = s.split(", ").join(",").split(" "),
                            D = P.length,
                            B = !1 !== W;
                        for (-1 === s.indexOf(",") && -1 === o.indexOf(",") || (P = P.join(" ").replace(q, ", ").split(" "), w = w.join(" ").replace(q, ", ").split(" "), D = P.length), D !== w.length && (D = (P = (n || "").split(" ")).length), r.plugin = a, r.setRatio = d, u = me.lastIndex = 0; u < D; u++)
                            if (_ = P[u], f = w[u], (b = parseFloat(_)) || 0 === b) r.appendXtra("", b, A(f, b), f.replace(k, ""), B && -1 !== f.indexOf("px"), !0);
                            else if (i && me.test(_)) S = ")" + ((S = f.indexOf(")") + 1) ? f.substr(S) : ""), T = -1 !== f.indexOf("hsl") && ie, _ = pe(_, T), f = pe(f, T), (g = 6 < _.length + f.length) && !ie && 0 === f[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(w[u]).join("transparent")) : (ie || (g = !1), T ? r.appendXtra(g ? "hsla(" : "hsl(", _[0], A(f[0], _[0]), ",", !1, !0).appendXtra("", _[1], A(f[1], _[1]), "%,", !1).appendXtra("", _[2], A(f[2], _[2]), g ? "%," : "%" + S, !1) : r.appendXtra(g ? "rgba(" : "rgb(", _[0], f[0] - _[0], ",", !0, !0).appendXtra("", _[1], f[1] - _[1], ",", !0).appendXtra("", _[2], f[2] - _[2], g ? "," : S, !0), g && (_ = _.length < 4 ? 1 : _[3], r.appendXtra("", _, (f.length < 4 ? 1 : f[3]) - _, S, !1))), me.lastIndex = 0;
                        else if (p = _.match(O)) {
                            if (!(m = f.match(k)) || m.length !== p.length) return r;
                            for (c = h = 0; c < p.length; c++) v = p[c], y = _.indexOf(v, h), r.appendXtra(_.substr(h, y - h), Number(v), A(m[c], v), "", B && "px" === _.substr(y + v.length, 2), 0 === c), h = y + v.length;
                            r["xs" + r.l] += _.substr(h)
                        } else r["xs" + r.l] += r.l || r["xs" + r.l] ? " " + f : f;
                        if (-1 !== s.indexOf("=") && r.data) {
                            for (S = r.xs0 + r.data.s, u = 1; u < r.l; u++) S += r["xs" + u] + r.data["xn" + u];
                            r.e = S + r["xs" + u]
                        }
                        return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                    },
                    Pe = 9;
                for ((e = Se.prototype).l = e.pr = 0; 0 < --Pe;) e["xn" + Pe] = 0, e["xs" + Pe] = "";
                e.xs0 = "", e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function (e, t, o, s, i, n) {
                    var r = this,
                        l = r.l;
                    return r["xs" + l] += n && (l || r["xs" + l]) ? " " + e : e || "", o || 0 === l || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = s || "", 0 < l ? (r.data["xn" + l] = t + o, r.rxp["xn" + l] = i, r["xn" + l] = t, r.plugin || (r.xfirst = new Se(r, "xn" + l, t, o, r.xfirst || r, 0, r.n, i, r.pr), r.xfirst.xs0 = 0)) : (r.data = {
                        s: t + o
                    }, r.rxp = {}, r.s = t, r.c = o, r.r = i), r) : (r["xs" + l] += t + (s || ""), r)
                };

                function we(e, t) {
                    t = t || {}, this.p = t.prefix && B(e) || e, m[e] = m[this.p] = this, this.format = t.formatter || be(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                }
                var De = oe._registerComplexSpecialProp = function (e, t, o) {
                        "object" != typeof t && (t = {
                            parser: o
                        });
                        var s, i = e.split(","),
                            n = t.defaultValue;
                        for (o = o || [n], s = 0; s < i.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = o[s] || n, new we(i[s], t)
                    },
                    Be = oe._registerPluginProp = function (e) {
                        if (!m[e]) {
                            var a = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            De(e, {
                                parser: function (e, t, o, s, i, n, r) {
                                    var l = d.com.greensock.plugins[a];
                                    return l ? (l._cssRegister(), m[o].parse(e, t, o, s, i, n, r)) : (b("Error: " + a + " js file not loaded."), i)
                                }
                            })
                        }
                    };
                (e = we.prototype).parseComplex = function (e, t, o, s, i, n) {
                    var r, l, a, d, u, c, h = this.keyword;
                    if (this.multi && (q.test(o) || q.test(t) ? (l = t.replace(q, "|").split("|"), a = o.replace(q, "|").split("|")) : h && (l = [t], a = [o])), a) {
                        for (d = a.length > l.length ? a.length : l.length, r = 0; r < d; r++) t = l[r] = l[r] || this.dflt, o = a[r] = a[r] || this.dflt, h && (u = t.indexOf(h)) !== (c = o.indexOf(h)) && (-1 === c ? l[r] = l[r].split(h).join("") : -1 === u && (l[r] += " " + h));
                        t = l.join(", "), o = a.join(", ")
                    }
                    return Te(e, this.p, t, o, this.clrs, this.dflt, s, this.pr, i, n)
                }, e.parse = function (e, t, o, s, i, n, r) {
                    return this.parseComplex(e.style, this.format(ae(e, this.p, D, !1, this.dflt)), this.format(t), i, n)
                }, N.registerSpecialProp = function (e, a, d) {
                    De(e, {
                        parser: function (e, t, o, s, i, n, r) {
                            var l = new Se(e, o, 0, 0, i, 2, o, !1, d);
                            return l.plugin = n, l.setRatio = a(e, t, s._tween, o), l
                        },
                        priority: d
                    })
                }, N.useSVGTransformAttr = T || x;

                function Ae(e, t, o) {
                    var s, i = Z.createElementNS("http://www.w3.org/2000/svg", e),
                        n = /([a-z])([A-Z])/g;
                    for (s in o) i.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), o[s]);
                    return t.appendChild(i), i
                }

                function Fe(e, t, o, s, i, n) {
                    var r, l, a, d, u, c, h, _, f, p, m, b, g, y, v = e._gsTransform,
                        S = ze(e, !0);
                    v && (g = v.xOrigin, y = v.yOrigin), (!s || (r = s.split(" ")).length < 2) && (h = e.getBBox(), r = [(-1 !== (t = _e(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), o.xOrigin = d = parseFloat(r[0]), o.yOrigin = u = parseFloat(r[1]), s && S !== je && (c = S[0], h = S[1], _ = S[2], f = S[3], p = S[4], l = d * (f / (b = c * f - h * _)) + u * (-_ / b) + (_ * (m = S[5]) - f * p) / b, a = d * (-h / b) + u * (c / b) - (c * m - h * p) / b, d = o.xOrigin = r[0] = l, u = o.yOrigin = r[1] = a), v && (n && (o.xOffset = v.xOffset, o.yOffset = v.yOffset, v = o), i || !1 !== i && !1 !== N.defaultSmoothOrigin ? (l = d - g, a = u - y, v.xOffset += l * S[0] + a * S[2] - l, v.yOffset += l * S[1] + a * S[3] - a) : v.xOffset = v.yOffset = 0), n || e.setAttribute("data-svg-origin", r.join(" "))
                }

                function He(e) {
                    var t, o, s = this.data,
                        i = -s.rotation * J,
                        n = i + s.skewX * J,
                        r = 1e5,
                        l = (Math.cos(i) * s.scaleX * r | 0) / r,
                        a = (Math.sin(i) * s.scaleX * r | 0) / r,
                        d = (Math.sin(n) * -s.scaleY * r | 0) / r,
                        u = (Math.cos(n) * s.scaleY * r | 0) / r,
                        c = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        o = a, a = -d, d = -o, t = h.filter, c.filter = "";
                        var _, f, p = this.t.offsetWidth,
                            m = this.t.offsetHeight,
                            b = "absolute" !== h.position,
                            g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + l + ", M12=" + a + ", M21=" + d + ", M22=" + u,
                            y = s.x + p * s.xPercent / 100,
                            v = s.y + m * s.yPercent / 100;
                        if (null != s.ox && (y += (_ = (s.oxp ? p * s.ox * .01 : s.ox) - p / 2) - (_ * l + (f = (s.oyp ? m * s.oy * .01 : s.oy) - m / 2) * a), v += f - (_ * d + f * u)), g += b ? ", Dx=" + ((_ = p / 2) - (_ * l + (f = m / 2) * a) + y) + ", Dy=" + (f - (_ * d + f * u) + v) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = t.replace(G, g) : c.filter = g + " " + t, 0 !== e && 1 !== e || 1 == l && 0 === a && 0 === d && 1 == u && (b && -1 === g.indexOf("Dx=0, Dy=0") || M.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !b) {
                            var S, T, P, w = C < 8 ? 1 : -1;
                            for (_ = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((p - ((l < 0 ? -l : l) * p + (a < 0 ? -a : a) * m)) / 2 + y), s.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (d < 0 ? -d : d) * p)) / 2 + v), Pe = 0; Pe < 4; Pe++) P = (o = -1 !== (S = h[T = he[Pe]]).indexOf("px") ? parseFloat(S) : de(this.t, T, parseFloat(S), S.replace(I, "")) || 0) !== s[T] ? Pe < 2 ? -s.ieOffsetX : -s.ieOffsetY : Pe < 2 ? _ - s.ieOffsetX : f - s.ieOffsetY, c[T] = (s[T] = Math.round(o - P * (0 === Pe || 2 === Pe ? 1 : w))) + "px"
                        }
                    }
                }
                var We, Ce, Re, Ee, Oe, ke = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Le = B("transform"),
                    Ie = ne + "transform",
                    xe = B("transformOrigin"),
                    Me = null !== B("perspective"),
                    Ue = oe.Transform = function () {
                        this.perspective = parseFloat(N.defaultTransformPerspective) || 0, this.force3D = !(!1 === N.defaultForce3D || !Me) && (N.defaultForce3D || "auto")
                    },
                    Ne = window.SVGElement,
                    Ye = Z.documentElement,
                    Xe = (Oe = C || /Android/i.test(se) && !window.chrome, Z.createElementNS && !Oe && (Ce = Ae("svg", Ye), Ee = (Re = Ae("rect", Ce, {
                        width: 100,
                        height: 50,
                        x: 100
                    })).getBoundingClientRect().width, Re.style[xe] = "50% 50%", Re.style[Le] = "scaleX(0.5)", Oe = Ee === Re.getBoundingClientRect().width && !(x && Me), Ye.removeChild(Ce)), Oe),
                    Ve = function (e) {
                        return !!(Ne && e.getBBox && e.getCTM && function (e) {
                            try {
                                return e.getBBox()
                            } catch (e) {}
                        }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                    },
                    je = [1, 0, 0, 1, 0, 0],
                    ze = function (e, t) {
                        var o, s, i, n, r, l, a = e._gsTransform || new Ue,
                            d = e.style;
                        if (Le ? s = ae(e, Ie, null, !0) : e.currentStyle && (s = (s = e.currentStyle.filter.match(z)) && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), (o = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s) && Le && ((l = "none" === le(e).display) || !e.parentNode) && (l && (n = d.display, d.display = "block"), e.parentNode || (r = 1, Ye.appendChild(e)), o = !(s = ae(e, Ie, null, !0)) || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, n ? d.display = n : l && Qe(d, "display"), r && Ye.removeChild(e)), (a.svg || e.getBBox && Ve(e)) && (o && -1 !== (d[Le] + "").indexOf("matrix") && (s = d[Le], o = 0), i = e.getAttribute("transform"), o && i && (-1 !== i.indexOf("matrix") ? (s = i, o = 0) : -1 !== i.indexOf("translate") && (s = "matrix(1,0,0,1," + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", o = 0))), o) return je;
                        for (i = (s || "").match(O) || [], Pe = i.length; - 1 < --Pe;) n = Number(i[Pe]), i[Pe] = (r = n - (n |= 0)) ? (1e5 * r + (r < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                        return t && 6 < i.length ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                    },
                    Ge = oe.getTransform = function (e, t, o, s) {
                        if (e._gsTransform && o && !s) return e._gsTransform;
                        var i, n, r, l, a, d, u = o && e._gsTransform || new Ue,
                            c = u.scaleX < 0,
                            h = Me && (parseFloat(ae(e, xe, t, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                            _ = parseFloat(N.defaultTransformPerspective) || 0;
                        if (u.svg = !(!e.getBBox || !Ve(e)), u.svg && (Fe(e, ae(e, xe, t, !1, "50% 50%") + "", u, e.getAttribute("data-svg-origin")), We = N.useSVGTransformAttr || Xe), (i = ze(e)) !== je) {
                            if (16 === i.length) {
                                var f, p, m, b, g, y = i[0],
                                    v = i[1],
                                    S = i[2],
                                    T = i[3],
                                    P = i[4],
                                    w = i[5],
                                    D = i[6],
                                    B = i[7],
                                    A = i[8],
                                    F = i[9],
                                    H = i[10],
                                    W = i[12],
                                    C = i[13],
                                    R = i[14],
                                    E = i[11],
                                    O = Math.atan2(D, H);
                                u.zOrigin && (W = A * (R = -u.zOrigin) - i[12], C = F * R - i[13], R = H * R + u.zOrigin - i[14]), u.rotationX = O * Q, O && (f = P * (b = Math.cos(-O)) + A * (g = Math.sin(-O)), p = w * b + F * g, m = D * b + H * g, A = P * -g + A * b, F = w * -g + F * b, H = D * -g + H * b, E = B * -g + E * b, P = f, w = p, D = m), O = Math.atan2(-S, H), u.rotationY = O * Q, O && (p = v * (b = Math.cos(-O)) - F * (g = Math.sin(-O)), m = S * b - H * g, F = v * g + F * b, H = S * g + H * b, E = T * g + E * b, y = f = y * b - A * g, v = p, S = m), O = Math.atan2(v, y), u.rotation = O * Q, O && (y = y * (b = Math.cos(-O)) + P * (g = Math.sin(-O)), p = v * b + w * g, w = v * -g + w * b, D = S * -g + D * b, v = p), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (1e5 * Math.sqrt(y * y + v * v) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(w * w + F * F) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(D * D + H * H) + .5 | 0) / 1e5, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = P || w ? Math.atan2(P, w) * Q + u.rotation : u.skewX || 0, 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (c ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = E ? 1 / (E < 0 ? -E : E) : 0, u.x = W, u.y = C, u.z = R, u.svg && (u.x -= u.xOrigin - (u.xOrigin * y - u.yOrigin * P), u.y -= u.yOrigin - (u.yOrigin * v - u.xOrigin * w))
                            } else if (!Me || s || !i.length || u.x !== i[4] || u.y !== i[5] || !u.rotationX && !u.rotationY) {
                                var k = 6 <= i.length,
                                    L = k ? i[0] : 1,
                                    I = i[1] || 0,
                                    x = i[2] || 0,
                                    M = k ? i[3] : 1;
                                u.x = i[4] || 0, u.y = i[5] || 0, r = Math.sqrt(L * L + I * I), l = Math.sqrt(M * M + x * x), a = L || I ? Math.atan2(I, L) * Q : u.rotation || 0, d = x || M ? Math.atan2(x, M) * Q + a : u.skewX || 0, 90 < Math.abs(d) && Math.abs(d) < 270 && (c ? (r *= -1, d += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (l *= -1, d += d <= 0 ? 180 : -180)), u.scaleX = r, u.scaleY = l, u.rotation = a, u.skewX = d, Me && (u.rotationX = u.rotationY = u.z = 0, u.perspective = _, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * L + u.yOrigin * x), u.y -= u.yOrigin - (u.xOrigin * I + u.yOrigin * M))
                            }
                            for (n in u.zOrigin = h, u) u[n] < 2e-5 && -2e-5 < u[n] && (u[n] = 0)
                        }
                        return o && (e._gsTransform = u).svg && (We && e.style[Le] ? U.delayedCall(.001, function () {
                            Qe(e.style, Le)
                        }) : !We && e.getAttribute("transform") && U.delayedCall(.001, function () {
                            e.removeAttribute("transform")
                        })), u
                    },
                    qe = oe.set3DTransformRatio = oe.setTransformRatio = function (e) {
                        var t, o, s, i, n, r, l, a, d, u, c, h, _, f, p, m, b, g, y, v, S, T, P, w = this.data,
                            D = this.t.style,
                            B = w.rotation,
                            A = w.rotationX,
                            F = w.rotationY,
                            H = w.scaleX,
                            W = w.scaleY,
                            C = w.scaleZ,
                            R = w.x,
                            E = w.y,
                            O = w.z,
                            k = w.svg,
                            L = w.perspective,
                            I = w.force3D;
                        if (!((1 !== e && 0 !== e || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || O || L || F || A || 1 !== C) || We && k || !Me) B || w.skewX || k ? (B *= J, T = w.skewX * J, P = 1e5, t = Math.cos(B) * H, i = Math.sin(B) * H, o = Math.sin(B - T) * -W, n = Math.cos(B - T) * W, T && "simple" === w.skewType && (b = Math.tan(T - w.skewY * J), o *= b = Math.sqrt(1 + b * b), n *= b, w.skewY && (b = Math.tan(w.skewY * J), t *= b = Math.sqrt(1 + b * b), i *= b)), k && (R += w.xOrigin - (w.xOrigin * t + w.yOrigin * o) + w.xOffset, E += w.yOrigin - (w.xOrigin * i + w.yOrigin * n) + w.yOffset, We && (w.xPercent || w.yPercent) && (f = this.t.getBBox(), R += .01 * w.xPercent * f.width, E += .01 * w.yPercent * f.height), R < (f = 1e-6) && -f < R && (R = 0), E < f && -f < E && (E = 0)), y = (t * P | 0) / P + "," + (i * P | 0) / P + "," + (o * P | 0) / P + "," + (n * P | 0) / P + "," + R + "," + E + ")", k && We ? this.t.setAttribute("transform", "matrix(" + y) : D[Le] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y) : D[Le] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + H + ",0,0," + W + "," + R + "," + E + ")";
                        else {
                            if (x && (H < (f = 1e-4) && -f < H && (H = C = 2e-5), W < f && -f < W && (W = C = 2e-5), !L || w.z || w.rotationX || w.rotationY || (L = 0)), B || w.skewX) B *= J, p = t = Math.cos(B), m = i = Math.sin(B), w.skewX && (B -= w.skewX * J, p = Math.cos(B), m = Math.sin(B), "simple" === w.skewType && (b = Math.tan((w.skewX - w.skewY) * J), p *= b = Math.sqrt(1 + b * b), m *= b, w.skewY && (b = Math.tan(w.skewY * J), t *= b = Math.sqrt(1 + b * b), i *= b))), o = -m, n = p;
                            else {
                                if (!(F || A || 1 !== C || L || k)) return void(D[Le] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + E + "px," + O + "px)" + (1 !== H || 1 !== W ? " scale(" + H + "," + W + ")" : ""));
                                t = n = 1, o = i = 0
                            }
                            d = 1, s = r = l = a = u = c = 0, h = L ? -1 / L : 0, _ = w.zOrigin, f = 1e-6, v = ",", S = "0", (B = F * J) && (p = Math.cos(B), u = h * (l = -(m = Math.sin(B))), s = t * m, r = i * m, h *= d = p, t *= p, i *= p), (B = A * J) && (b = o * (p = Math.cos(B)) + s * (m = Math.sin(B)), g = n * p + r * m, a = d * m, c = h * m, s = o * -m + s * p, r = n * -m + r * p, d *= p, h *= p, o = b, n = g), 1 !== C && (s *= C, r *= C, d *= C, h *= C), 1 !== W && (o *= W, n *= W, a *= W, c *= W), 1 !== H && (t *= H, i *= H, l *= H, u *= H), (_ || k) && (_ && (R += s * -_, E += r * -_, O += d * -_ + _), k && (R += w.xOrigin - (w.xOrigin * t + w.yOrigin * o) + w.xOffset, E += w.yOrigin - (w.xOrigin * i + w.yOrigin * n) + w.yOffset), R < f && -f < R && (R = S), E < f && -f < E && (E = S), O < f && -f < O && (O = 0)), y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", y += (t < f && -f < t ? S : t) + v + (i < f && -f < i ? S : i) + v + (l < f && -f < l ? S : l), y += v + (u < f && -f < u ? S : u) + v + (o < f && -f < o ? S : o) + v + (n < f && -f < n ? S : n), A || F || 1 !== C ? (y += v + (a < f && -f < a ? S : a) + v + (c < f && -f < c ? S : c) + v + (s < f && -f < s ? S : s), y += v + (r < f && -f < r ? S : r) + v + (d < f && -f < d ? S : d) + v + (h < f && -f < h ? S : h) + v) : y += ",0,0,0,0,1,0,", y += R + v + E + v + O + v + (L ? 1 + -O / L : 1) + ")", D[Le] = y
                        }
                    };
                (e = Ue.prototype).x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, De("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (e, t, o, s, i, n, r) {
                        if (s._lastParsedTransform === r) return i;
                        var l;
                        "function" == typeof (s._lastParsedTransform = r)[o] && (l = r[o], r[o] = t);
                        var a, d, u, c, h, _, f, p, m, b = e._gsTransform,
                            g = e.style,
                            y = ke.length,
                            v = r,
                            S = {},
                            T = "transformOrigin",
                            P = Ge(e, D, !0, v.parseTransform),
                            w = v.transform && ("function" == typeof v.transform ? v.transform(E, R) : v.transform);
                        if (s._transform = P, w && "string" == typeof w && Le)(d = ee.style)[Le] = w, d.display = "block", d.position = "absolute", Z.body.appendChild(ee), a = Ge(ee, null, !1), P.svg && (_ = P.xOrigin, f = P.yOrigin, a.x -= P.xOffset, a.y -= P.yOffset, (v.transformOrigin || v.svgOrigin) && (w = {}, Fe(e, _e(v.transformOrigin), w, v.svgOrigin, v.smoothOrigin, !0), _ = w.xOrigin, f = w.yOrigin, a.x -= w.xOffset - P.xOffset, a.y -= w.yOffset - P.yOffset), (_ || f) && (p = ze(ee, !0), a.x -= _ - (_ * p[0] + f * p[2]), a.y -= f - (_ * p[1] + f * p[3]))), Z.body.removeChild(ee), a.perspective || (a.perspective = P.perspective), null != v.xPercent && (a.xPercent = F(v.xPercent, P.xPercent)), null != v.yPercent && (a.yPercent = F(v.yPercent, P.yPercent));
                        else if ("object" == typeof v) {
                            if (a = {
                                    scaleX: F(null != v.scaleX ? v.scaleX : v.scale, P.scaleX),
                                    scaleY: F(null != v.scaleY ? v.scaleY : v.scale, P.scaleY),
                                    scaleZ: F(v.scaleZ, P.scaleZ),
                                    x: F(v.x, P.x),
                                    y: F(v.y, P.y),
                                    z: F(v.z, P.z),
                                    xPercent: F(v.xPercent, P.xPercent),
                                    yPercent: F(v.yPercent, P.yPercent),
                                    perspective: F(v.transformPerspective, P.perspective)
                                }, null != (h = v.directionalRotation))
                                if ("object" == typeof h)
                                    for (d in h) v[d] = h[d];
                                else v.rotation = h;
                            "string" == typeof v.x && -1 !== v.x.indexOf("%") && (a.x = 0, a.xPercent = F(v.x, P.xPercent)), "string" == typeof v.y && -1 !== v.y.indexOf("%") && (a.y = 0, a.yPercent = F(v.y, P.yPercent)), a.rotation = H("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : P.rotation - P.skewY, P.rotation - P.skewY, "rotation", S), Me && (a.rotationX = H("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", S), a.rotationY = H("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", S)), a.skewX = H(v.skewX, P.skewX - P.skewY), (a.skewY = H(v.skewY, P.skewY)) && (a.skewX += a.skewY, a.rotation += a.skewY)
                        }
                        for (Me && null != v.force3D && (P.force3D = v.force3D, c = !0), P.skewType = v.skewType || P.skewType || N.defaultSkewType, (u = P.force3D || P.z || P.rotationX || P.rotationY || a.z || a.rotationX || a.rotationY || a.perspective) || null == v.scale || (a.scaleZ = 1); - 1 < --y;)(1e-6 < (w = a[m = ke[y]] - P[m]) || w < -1e-6 || null != v[m] || null != $[m]) && (c = !0, i = new Se(P, m, P[m], w, i), m in S && (i.e = S[m]), i.xs0 = 0, i.plugin = n, s._overwriteProps.push(i.n));
                        return w = v.transformOrigin, P.svg && (w || v.svgOrigin) && (_ = P.xOffset, f = P.yOffset, Fe(e, _e(w), a, v.svgOrigin, v.smoothOrigin), i = ye(P, "xOrigin", (b ? P : a).xOrigin, a.xOrigin, i, T), i = ye(P, "yOrigin", (b ? P : a).yOrigin, a.yOrigin, i, T), _ === P.xOffset && f === P.yOffset || (i = ye(P, "xOffset", b ? _ : P.xOffset, P.xOffset, i, T), i = ye(P, "yOffset", b ? f : P.yOffset, P.yOffset, i, T)), w = We ? null : "0px 0px"), (w || Me && u && P.zOrigin) && (Le ? (c = !0, m = xe, w = (w || ae(e, m, D, !1, "50% 50%")) + "", (i = new Se(g, m, 0, 0, i, -1, T)).b = g[m], i.plugin = n, Me ? (d = P.zOrigin, w = w.split(" "), P.zOrigin = (2 < w.length && (0 === d || "0px" !== w[2]) ? parseFloat(w[2]) : d) || 0, i.xs0 = i.e = w[0] + " " + (w[1] || "50%") + " 0px", (i = new Se(P, "zOrigin", 0, 0, i, -1, i.n)).b = d, i.xs0 = i.e = P.zOrigin) : i.xs0 = i.e = w) : _e(w + "", P)), c && (s._transformType = P.svg && We || !u && 3 !== this._transformType ? 2 : 3), l && (r[o] = l), i
                    },
                    prefix: !0
                }), De("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), De("borderRadius", {
                    defaultValue: "0px",
                    parser: function (e, t, o, s, i, n) {
                        t = this.format(t);
                        var r, l, a, d, u, c, h, _, f, p, m, b, g, y, v, S, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = e.style;
                        for (f = parseFloat(e.offsetWidth), p = parseFloat(e.offsetHeight), r = t.split(" "), l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = B(T[l])), -1 !== (u = d = ae(e, T[l], D, !1, "0px")).indexOf(" ") && (u = (d = u.split(" "))[0], d = d[1]), c = a = r[l], h = parseFloat(u), b = u.substr((h + "").length), "" === (m = (g = "=" === c.charAt(1)) ? (_ = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), _ *= parseFloat(c), c.substr((_ + "").length - (_ < 0 ? 1 : 0)) || "") : (_ = parseFloat(c), c.substr((_ + "").length))) && (m = w[o] || b), m !== b && (y = de(e, "borderLeft", h, b), v = de(e, "borderTop", h, b), d = "%" === m ? (u = y / f * 100 + "%", v / p * 100 + "%") : "em" === m ? (u = y / (S = de(e, "borderLeft", 1, "em")) + "em", v / S + "em") : (u = y + "px", v + "px"), g && (c = parseFloat(u) + _ + m, a = parseFloat(d) + _ + m)), i = Te(P, T[l], u + " " + d, c + " " + a, !1, "0px", i);
                        return i
                    },
                    prefix: !0,
                    formatter: be("0px 0px 0px 0px", !1, !0)
                }), De("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (e, t, o, s, i, n) {
                        return Te(e.style, o, this.format(ae(e, o, D, !1, "0px 0px")), this.format(t), !1, "0px", i)
                    },
                    prefix: !0,
                    formatter: be("0px 0px", !1, !0)
                }), De("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (e, t, o, s, i, n) {
                        var r, l, a, d, u, c, h = "background-position",
                            _ = D || le(e, null),
                            f = this.format((_ ? C ? _.getPropertyValue(h + "-x") + " " + _.getPropertyValue(h + "-y") : _.getPropertyValue(h) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            p = this.format(t);
                        if (-1 !== f.indexOf("%") != (-1 !== p.indexOf("%")) && p.split(",").length < 2 && (c = ae(e, "backgroundImage").replace(V, "")) && "none" !== c) {
                            for (r = f.split(" "), l = p.split(" "), te.setAttribute("src", c), a = 2; - 1 < --a;)(d = -1 !== (f = r[a]).indexOf("%")) != (-1 !== l[a].indexOf("%")) && (u = 0 === a ? e.offsetWidth - te.width : e.offsetHeight - te.height, r[a] = d ? parseFloat(f) / 100 * u + "px" : parseFloat(f) / u * 100 + "%");
                            f = r.join(" ")
                        }
                        return this.parseComplex(e.style, f, p, i, n)
                    },
                    formatter: _e
                }), De("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function (e) {
                        return _e(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                    }
                }), De("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), De("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), De("transformStyle", {
                    prefix: !0
                }), De("backfaceVisibility", {
                    prefix: !0
                }), De("userSelect", {
                    prefix: !0
                }), De("margin", {
                    parser: ge("marginTop,marginRight,marginBottom,marginLeft")
                }), De("padding", {
                    parser: ge("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), De("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (e, t, o, s, i, n) {
                        var r, l, a;
                        return t = C < 9 ? (l = e.currentStyle, a = C < 8 ? " " : ",", r = "rect(" + l.clipTop + a + l.clipRight + a + l.clipBottom + a + l.clipLeft + ")", this.format(t).split(",").join(a)) : (r = this.format(ae(e, this.p, D, !1, this.dflt)), this.format(t)), this.parseComplex(e.style, r, t, i, n)
                    }
                }), De("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), De("autoRound,strictUnits", {
                    parser: function (e, t, o, s, i) {
                        return i
                    }
                }), De("border", {
                    defaultValue: "0px solid #000",
                    parser: function (e, t, o, s, i, n) {
                        var r = ae(e, "borderTopWidth", D, !1, "0px"),
                            l = this.format(t).split(" "),
                            a = l[0].replace(I, "");
                        return "px" !== a && (r = parseFloat(r) / de(e, "borderTopWidth", 1, a) + a), this.parseComplex(e.style, this.format(r + " " + ae(e, "borderTopStyle", D, !1, "solid") + " " + ae(e, "borderTopColor", D, !1, "#000")), l.join(" "), i, n)
                    },
                    color: !0,
                    formatter: function (e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(me) || ["#000"])[0]
                    }
                }), De("borderWidth", {
                    parser: ge("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), De("float,cssFloat,styleFloat", {
                    parser: function (e, t, o, s, i, n) {
                        var r = e.style,
                            l = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new Se(r, l, 0, 0, i, -1, o, !1, 0, r[l], t)
                    }
                });

                function Ke(e) {
                    var t, o = this.t,
                        s = o.filter || ae(this.data, "filter") || "",
                        i = this.s + this.c * e | 0;
                    100 == i && (t = -1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (o.removeAttribute("filter"), !ae(this.data, "filter")) : (o.filter = s.replace(a, ""), !0)), t || (this.xn1 && (o.filter = s = s || "alpha(opacity=" + i + ")"), -1 === s.indexOf("pacity") ? 0 == i && this.xn1 || (o.filter = s + " alpha(opacity=" + i + ")") : o.filter = s.replace(M, "opacity=" + i))
                }
                De("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (e, t, o, s, i, n) {
                        var r = parseFloat(ae(e, "opacity", D, !1, "1")),
                            l = e.style,
                            a = "autoAlpha" === o;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + r), a && 1 === r && "hidden" === ae(e, "visibility", D) && 0 !== t && (r = 0), ie ? i = new Se(l, "opacity", r, t - r, i) : ((i = new Se(l, "opacity", 100 * r, 100 * (t - r), i)).xn1 = a ? 1 : 0, l.zoom = 1, i.type = 2, i.b = "alpha(opacity=" + i.s + ")", i.e = "alpha(opacity=" + (i.s + i.c) + ")", i.data = e, i.plugin = n, i.setRatio = Ke), a && ((i = new Se(l, "visibility", 0, 0, i, -1, null, !1, 0, 0 !== r ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(i.n), s._overwriteProps.push(o)), i
                    }
                });

                function Je(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, o = this.t.style; t;) t.v ? o[t.p] = t.v : Qe(o, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                }
                var Qe = function (e, t) {
                    t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(c, "-$1").toLowerCase())) : e.removeAttribute(t))
                };
                De("className", {
                    parser: function (e, t, o, s, i, n, r) {
                        var l, a, d, u, c, h = e.getAttribute("class") || "",
                            _ = e.style.cssText;
                        if ((i = s._classNamePT = new Se(e, o, 0, 0, i, 2)).setRatio = Je, i.pr = -11, f = !0, i.b = h, a = g(e, D), d = e._gsClassPT) {
                            for (u = {}, c = d.data; c;) u[c.p] = 1, c = c._next;
                            d.setRatio(1)
                        }
                        return (e._gsClassPT = i).e = "=" !== t.charAt(1) ? t : h.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", i.e), l = y(e, a, g(e), r, u), e.setAttribute("class", h), i.data = l.firstMPT, e.style.cssText = _, i = i.xfirst = s.parse(e, l.difs, i, n)
                    }
                });

                function $e(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, o, s, i, n, r = this.t.style,
                            l = m.transform.parse;
                        if ("all" === this.e) i = !(r.cssText = "");
                        else
                            for (s = (t = this.e.split(" ").join("").split(",")).length; - 1 < --s;) o = t[s], m[o] && (m[o].parse === l ? i = !0 : o = "transformOrigin" === o ? xe : m[o].p), Qe(r, o);
                        i && (Qe(r, Le), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                }
                for (De("clearProps", {
                        parser: function (e, t, o, s, i) {
                            return (i = new Se(e, o, 0, 0, i, 2)).setRatio = $e, i.e = t, i.pr = -10, i.data = s._tween, f = !0, i
                        }
                    }), e = "bezier,throwProps,physicsProps,physics2D".split(","), Pe = e.length; Pe--;) Be(e[Pe]);
                (e = N.prototype)._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function (e, t, o, s) {
                    if (!e.nodeType) return !1;
                    this._target = R = e, this._tween = o, this._vars = t, E = s, W = t.autoRound, f = !1, w = t.suffixMap || N.suffixMap, D = le(e, ""), p = this._overwriteProps;
                    var i, n, r, l, a, d, u, c, h, _ = e.style;
                    if (S && "" === _.zIndex && ("auto" !== (i = ae(e, "zIndex", D)) && "" !== i || this._addLazySet(_, "zIndex", 0)), "string" == typeof t && (l = _.cssText, i = g(e, D), _.cssText = l + ";" + t, i = y(e, i, g(e)).difs, !ie && Y.test(t) && (i.opacity = parseFloat(RegExp.$1)), t = i, _.cssText = l), t.className ? this._firstPT = n = m.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = n = this.parse(e, t, null), this._transformType) {
                        for (h = 3 === this._transformType, Le ? T && (S = !0, "" === _.zIndex && ("auto" !== (u = ae(e, "zIndex", D)) && "" !== u || this._addLazySet(_, "zIndex", 0)), P && this._addLazySet(_, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (h ? "visible" : "hidden"))) : _.zoom = 1, r = n; r && r._next;) r = r._next;
                        c = new Se(e, "transform", 0, 0, null, 2), this._linkCSSP(c, null, r), c.setRatio = Le ? qe : He, c.data = this._transform || Ge(e, D, !0), c.tween = o, c.pr = -1, p.pop()
                    }
                    if (f) {
                        for (; n;) {
                            for (d = n._next, r = l; r && r.pr > n.pr;) r = r._next;
                            (n._prev = r ? r._prev : a) ? n._prev._next = n: l = n, (n._next = r) ? r._prev = n : a = n, n = d
                        }
                        this._firstPT = l
                    }
                    return !0
                }, e.parse = function (e, t, o, s) {
                    var i, n, r, l, a, d, u, c, h, _, f = e.style;
                    for (i in t) "function" == typeof (d = t[i]) && (d = d(E, R)), (n = m[i]) ? o = n.parse(e, d, i, this, o, s, t) : (a = ae(e, i, D) + "", h = "string" == typeof d, "color" === i || "fill" === i || "stroke" === i || -1 !== i.indexOf("Color") || h && X.test(d) ? (h || (d = (3 < (d = pe(d)).length ? "rgba(" : "rgb(") + d.join(",") + ")"), o = Te(f, i, a, d, !0, "transparent", o, 0, s)) : h && K.test(d) ? o = Te(f, i, a, d, !0, null, o, 0, s) : (u = (r = parseFloat(a)) || 0 === r ? a.substr((r + "").length) : "", "" !== a && "auto" !== a || (u = "width" === i || "height" === i ? (r = v(e, i, D), "px") : "left" === i || "top" === i ? (r = ue(e, i, D), "px") : (r = "opacity" !== i ? 0 : 1, "")), "" === (c = (_ = h && "=" === d.charAt(1)) ? (l = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), l *= parseFloat(d), d.replace(I, "")) : (l = parseFloat(d), h ? d.replace(I, "") : "")) && (c = i in w ? w[i] : u), d = l || 0 === l ? (_ ? l + r : l) + c : t[i], u !== c && "" !== c && (l || 0 === l) && r && (r = de(e, i, r, u), "%" === c ? (r /= de(e, i, 100, "%") / 100, !0 !== t.strictUnits && (a = r + "%")) : "em" === c || "rem" === c || "vw" === c || "vh" === c ? r /= de(e, i, 1, c) : "px" !== c && (l = de(e, i, l, c), c = "px"), _ && (!l && 0 !== l || (d = l + r + c))), _ && (l += r), !r && 0 !== r || !l && 0 !== l ? void 0 !== f[i] && (d || d + "" != "NaN" && null != d) ? (o = new Se(f, i, l || r || 0, 0, o, -1, i, !1, 0, a, d)).xs0 = "none" !== d || "display" !== i && -1 === i.indexOf("Style") ? d : a : b("invalid " + i + " tween value: " + t[i]) : (o = new Se(f, i, r, l - r, o, 0, i, !1 !== W && ("px" === c || "zIndex" === i), 0, a, d)).xs0 = c)), s && o && !o.plugin && (o.plugin = s);
                    return o
                }, e.setRatio = function (e) {
                    var t, o, s, i = this._firstPT;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; i;) {
                                if (t = i.c * e + i.s, i.r ? t = Math.round(t) : t < 1e-6 && -1e-6 < t && (t = 0), i.type)
                                    if (1 === i.type)
                                        if (2 === (s = i.l)) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2;
                                        else if (3 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3;
                                else if (4 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4;
                                else if (5 === s) i.t[i.p] = i.xs0 + t + i.xs1 + i.xn1 + i.xs2 + i.xn2 + i.xs3 + i.xn3 + i.xs4 + i.xn4 + i.xs5;
                                else {
                                    for (o = i.xs0 + t + i.xs1, s = 1; s < i.l; s++) o += i["xn" + s] + i["xs" + (s + 1)];
                                    i.t[i.p] = o
                                } else -1 === i.type ? i.t[i.p] = i.xs0 : i.setRatio && i.setRatio(e);
                                else i.t[i.p] = t + i.xs0;
                                i = i._next
                            } else
                                for (; i;) 2 !== i.type ? i.t[i.p] = i.b : i.setRatio(e), i = i._next;
                        else
                            for (; i;) {
                                if (2 !== i.type)
                                    if (i.r && -1 !== i.type)
                                        if (t = Math.round(i.s + i.c), i.type) {
                                            if (1 === i.type) {
                                                for (s = i.l, o = i.xs0 + t + i.xs1, s = 1; s < i.l; s++) o += i["xn" + s] + i["xs" + (s + 1)];
                                                i.t[i.p] = o
                                            }
                                        } else i.t[i.p] = t + i.xs0;
                                else i.t[i.p] = i.e;
                                else i.setRatio(e);
                                i = i._next
                            }
                }, e._enableTransforms = function (e) {
                    this._transform = this._transform || Ge(this._target, D, !0), this._transformType = this._transform.svg && We || !e && 3 !== this._transformType ? 2 : 3
                };

                function Ze(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                }
                e._addLazySet = function (e, t, o) {
                    var s = this._firstPT = new Se(e, t, 0, 0, this._firstPT, 2);
                    s.e = o, s.setRatio = Ze, s.data = this
                }, e._linkCSSP = function (e, t, o, s) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, s = !0), o ? o._next = e : s || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = o), e
                }, e._mod = function (e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && e[t.p] === Math.round && (t.r = 1), t = t._next
                }, e._kill = function (e) {
                    var t, o, s, i = e;
                    if (e.autoAlpha || e.alpha) {
                        for (o in i = {}, e) i[o] = e[o];
                        i.opacity = 1, i.autoAlpha && (i.visibility = 1)
                    }
                    for (e.className && (t = this._classNamePT) && ((s = t.xfirst) && s._prev ? this._linkCSSP(s._prev, t._next, s._prev._prev) : s === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, s._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== o && t.plugin._kill && (t.plugin._kill(e), o = t.plugin), t = t._next;
                    return n.prototype._kill.call(this, i)
                };
                var et = function (e, t, o) {
                    var s, i, n, r;
                    if (e.slice)
                        for (i = e.length; - 1 < --i;) et(e[i], t, o);
                    else
                        for (i = (s = e.childNodes).length; - 1 < --i;) r = (n = s[i]).type, n.style && (t.push(g(n)), o && o.push(n)), 1 !== r && 9 !== r && 11 !== r || !n.childNodes.length || et(n, t, o)
                };
                return N.cascadeTo = function (e, t, o) {
                    var s, i, n, r, l = U.to(e, t, o),
                        a = [l],
                        d = [],
                        u = [],
                        c = [],
                        h = U._internals.reservedProps;
                    for (e = l._targets || l.target, et(e, d, c), l.render(t, !0, !0), et(e, u), l.render(0, !0, !0), l._enabled(!0), s = c.length; - 1 < --s;)
                        if ((i = y(c[s], d[s], u[s])).firstMPT) {
                            for (n in i = i.difs, o) h[n] && (i[n] = o[n]);
                            for (n in r = {}, i) r[n] = d[s][n];
                            a.push(U.fromTo(c[s], t, r, i))
                        } return a
                }, n.activate([N]), N
            }, !0), t = _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (e, t, o) {
                    return this._tween = o, !0
                }
            }), (s = t.prototype)._onInitAllProps = function () {
                for (var e, t, o, s = this._tween, i = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), n = i.length, r = {}, l = s._propLookup.roundProps; - 1 < --n;) r[i[n]] = Math.round;
                for (n = i.length; - 1 < --n;)
                    for (e = i[n], t = s._firstPT; t;) o = t._next, t.pg ? t.t._mod(r) : t.n === e && (2 === t.f && t.t ? a(t.t._firstPT) : (this._add(t.t, e, t.s, t.c), o && (o._prev = t._prev), t._prev ? t._prev._next = o : s._firstPT === t && (s._firstPT = o), t._next = t._prev = null, s._propLookup[e] = l)), t = o;
                return !1
            }, s._add = function (e, t, o, s) {
                this._addTween(e, t, o, o + s, t, Math.round), this._overwriteProps.push(t)
            }, _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.0",
                init: function (e, t, o, s) {
                    var i, n;
                    if ("function" != typeof e.setAttribute) return !1;
                    for (i in t) "function" == typeof (n = t[i]) && (n = n(s, e)), this._addTween(e, "setAttribute", e.getAttribute(i) + "", n + "", i, !1, i), this._overwriteProps.push(i);
                    return !0
                }
            }), _fwd_gsScope.FWDFWD_gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.0",
                API: 2,
                init: function (e, t, o, s) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var i, n, r, l, a, d, u = !0 === t.useRadians ? 2 * Math.PI : 360;
                    for (i in t) "useRadians" !== i && ("function" == typeof (l = t[i]) && (l = l(s, e)), n = (d = (l + "").split("_"))[0], r = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), a = (l = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - r, d.length && (-1 !== (n = d.join("_")).indexOf("short") && (a %= u) !== a % (u / 2) && (a = a < 0 ? a + u : a - u), -1 !== n.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== n.indexOf("ccw") && 0 < a && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (1e-6 < a || a < -1e-6) && (this._addTween(e, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function (e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _fwd_gsScope.FWDFWD_gsDefine("easing.Back", ["easing.Ease"], function (m) {
                function e(e, t) {
                    var o = u("easing." + e, function () {}, !0),
                        s = o.prototype = new m;
                    return s.constructor = o, s.getRatio = t, o
                }

                function t(e, t, o, s, i) {
                    var n = u("easing." + e, {
                        easeOut: new t,
                        easeIn: new o,
                        easeInOut: new s
                    }, !0);
                    return c(n, e), n
                }

                function b(e, t, o) {
                    this.t = e, this.v = t, o && (((this.next = o).prev = this).c = o.v - t, this.gap = o.t - e)
                }

                function o(e, t) {
                    var o = u("easing." + e, function (e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = o.prototype = new m;
                    return s.constructor = o, s.getRatio = t, s.config = function (e) {
                        return new o(e)
                    }, o
                }
                var s, i, n, r = _fwd_gsScope.FWDGreenSockGlobals || _fwd_gsScope,
                    l = r.com.greensock,
                    a = 2 * Math.PI,
                    d = Math.PI / 2,
                    u = l._class,
                    c = m.register || function () {},
                    h = t("Back", o("BackOut", function (e) {
                        return --e * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), o("BackIn", function (e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), o("BackInOut", function (e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    _ = u("easing.SlowMo", function (e, t, o) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === o
                    }, !0),
                    f = _.prototype = new m;
                return f.constructor = _, f.getRatio = function (e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, _.ease = new _(.7, .7), f.config = _.config = function (e, t, o) {
                    return new _(e, t, o)
                }, (f = (s = u("easing.SteppedEase", function (e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0)).prototype = new m).constructor = s, f.getRatio = function (e) {
                    return e < 0 ? e = 0 : 1 <= e && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, f.config = s.config = function (e) {
                    return new s(e)
                }, (f = (i = u("easing.RoughEase", function (e) {
                    for (var t, o, s, i, n, r, l = (e = e || {}).taper || "none", a = [], d = 0, u = 0 | (e.points || 20), c = u, h = !1 !== e.randomize, _ = !0 === e.clamp, f = e.template instanceof m ? e.template : null, p = "number" == typeof e.strength ? .4 * e.strength : .4; - 1 < --c;) t = h ? Math.random() : 1 / u * c, o = f ? f.getRatio(t) : t, s = "none" === l ? p : "out" === l ? (i = 1 - t) * i * p : "in" === l ? t * t * p : t < .5 ? (i = 2 * t) * i * .5 * p : (i = 2 * (1 - t)) * i * .5 * p, h ? o += Math.random() * s - .5 * s : c % 2 ? o += .5 * s : o -= .5 * s, _ && (1 < o ? o = 1 : o < 0 && (o = 0)), a[d++] = {
                        x: t,
                        y: o
                    };
                    for (a.sort(function (e, t) {
                            return e.x - t.x
                        }), r = new b(1, 1, null), c = u; - 1 < --c;) n = a[c], r = new b(n.x, n.y, r);
                    this._prev = new b(0, 0, 0 !== r.t ? r : r.next)
                }, !0)).prototype = new m).constructor = i, f.getRatio = function (e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return (this._prev = t).v + (e - t.t) / t.gap * t.c
                }, f.config = function (e) {
                    return new i(e)
                }, i.ease = new i, t("Bounce", e("BounceOut", function (e) {
                    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), e("BounceIn", function (e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), e("BounceInOut", function (e) {
                    var t = e < .5;
                    return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), t("Circ", e("CircOut", function (e) {
                    return Math.sqrt(1 - --e * e)
                }), e("CircIn", function (e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), e("CircInOut", function (e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), t("Elastic", (n = function (e, t, o) {
                    var s = u("easing." + e, function (e, t) {
                            this._p1 = 1 <= e ? e : 1, this._p2 = (t || o) / (e < 1 ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        i = s.prototype = new m;
                    return i.constructor = s, i.getRatio = t, i.config = function (e, t) {
                        return new s(e, t)
                    }, s
                })("ElasticOut", function (e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function (e) {
                    return -this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2)
                }, .3), n("ElasticInOut", function (e) {
                    return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), t("Expo", e("ExpoOut", function (e) {
                    return 1 - Math.pow(2, -10 * e)
                }), e("ExpoIn", function (e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), e("ExpoInOut", function (e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), t("Sine", e("SineOut", function (e) {
                    return Math.sin(e * d)
                }), e("SineIn", function (e) {
                    return 1 - Math.cos(e * d)
                }), e("SineInOut", function (e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), u("easing.EaseLookup", {
                    find: function (e) {
                        return m.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(s, "SteppedEase", "ease,"), h
            }, !0)
        }), _fwd_gsScope.FWDFWD_gsDefine && _fwd_gsScope._fwd_gsQueue.pop()(),
        function (_, f) {
            "use strict";
            var p = {},
                m = _.FWDGreenSockGlobals = _.FWDGreenSockGlobals || _;
            if (!m.FWDTweenLite) {
                var e, t, o, b, g, s, i, y = function (e) {
                        var t, o = e.split("."),
                            s = m;
                        for (t = 0; t < o.length; t++) s[o[t]] = s = s[o[t]] || {};
                        return s
                    },
                    c = y("com.greensock"),
                    v = 1e-10,
                    a = function (e) {
                        var t, o = [],
                            s = e.length;
                        for (t = 0; t !== s; o.push(e[t++]));
                        return o
                    },
                    S = function () {},
                    T = (s = Object.prototype.toString, i = s.call([]), function (e) {
                        return null != e && (e instanceof Array || "object" == typeof e && !!e.push && s.call(e) === i)
                    }),
                    P = {},
                    w = function (a, d, u, c) {
                        this.sc = P[a] ? P[a].sc : [], (P[a] = this).gsClass = null, this.func = u;
                        var h = [];
                        this.check = function (e) {
                            for (var t, o, s, i, n, r = d.length, l = r; - 1 < --r;)(t = P[d[r]] || new w(d[r], [])).gsClass ? (h[r] = t.gsClass, l--) : e && t.sc.push(this);
                            if (0 === l && u) {
                                if (s = (o = ("com.greensock." + a).split(".")).pop(), i = y(o.join("."))[s] = this.gsClass = u.apply(u, h), c)
                                    if (m[s] = p[s] = i, !(n = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd) define((_.FWDGreenSockAMDPath ? _.FWDGreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                                        return i
                                    });
                                    else if (n)
                                    if (a === f)
                                        for (r in fwd_module.exports = p[f] = i, p) i[r] = p[r];
                                    else p[f] && (p[f][s] = i);
                                for (r = 0; r < this.sc.length; r++) this.sc[r].check()
                            }
                        }, this.check(!0)
                    },
                    n = _.FWDFWD_gsDefine = function (e, t, o, s) {
                        return new w(e, t, o, s)
                    },
                    h = c._class = function (e, t, o) {
                        return t = t || function () {}, n(e, [], function () {
                            return t
                        }, o), t
                    };
                n.globals = m;
                var r = [0, 0, 1, 1],
                    D = h("easing.Ease", function (e, t, o, s) {
                        this._func = e, this._type = o || 0, this._power = s || 0, this._params = t ? r.concat(t) : r
                    }, !0),
                    B = D.map = {},
                    l = D.register = function (e, t, o, s) {
                        for (var i, n, r, l, a = t.split(","), d = a.length, u = (o || "easeIn,easeOut,easeInOut").split(","); - 1 < --d;)
                            for (n = a[d], i = s ? h("easing." + n, null, !0) : c.easing[n] || {}, r = u.length; - 1 < --r;) l = u[r], B[n + "." + l] = B[l + n] = i[l] = e.getRatio ? e : e[l] || new e
                    };
                for ((o = D.prototype)._calcEnd = !1, o.getRatio = function (e) {
                        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                        var t = this._type,
                            o = this._power,
                            s = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                        return 1 === o ? s *= s : 2 === o ? s *= s * s : 3 === o ? s *= s * s * s : 4 === o && (s *= s * s * s * s), 1 === t ? 1 - s : 2 === t ? s : e < .5 ? s / 2 : 1 - s / 2
                    }, t = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --t;) o = e[t] + ",Power" + t, l(new D(null, null, 1, t), o, "easeOut", !0), l(new D(null, null, 2, t), o, "easeIn" + (0 === t ? ",easeNone" : "")), l(new D(null, null, 3, t), o, "easeInOut");
                B.linear = c.easing.Linear.easeIn, B.swing = c.easing.Quad.easeInOut;
                var A = h("events.EventDispatcher", function (e) {
                    this._listeners = {}, this._eventTarget = e || this
                });
                (o = A.prototype).addEventListener = function (e, t, o, s, i) {
                    i = i || 0;
                    var n, r, l = this._listeners[e],
                        a = 0;
                    for (this !== b || g || b.wake(), null == l && (this._listeners[e] = l = []), r = l.length; - 1 < --r;)(n = l[r]).c === t && n.s === o ? l.splice(r, 1) : 0 === a && n.pr < i && (a = r + 1);
                    l.splice(a, 0, {
                        c: t,
                        s: o,
                        up: s,
                        pr: i
                    })
                }, o.removeEventListener = function (e, t) {
                    var o, s = this._listeners[e];
                    if (s)
                        for (o = s.length; - 1 < --o;)
                            if (s[o].c === t) return void s.splice(o, 1)
                }, o.dispatchEvent = function (e) {
                    var t, o, s, i = this._listeners[e];
                    if (i)
                        for (1 < (t = i.length) && (i = i.slice(0)), o = this._eventTarget; - 1 < --t;)(s = i[t]) && (s.up ? s.c.call(s.s || o, {
                            type: e,
                            target: o
                        }) : s.c.call(s.s || o))
                };
                var F = _.requestAnimationFrame,
                    H = _.cancelAnimationFrame,
                    W = Date.now || function () {
                        return (new Date).getTime()
                    },
                    C = W();
                for (t = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --t && !F;) F = _[e[t] + "RequestAnimationFrame"], H = _[e[t] + "CancelAnimationFrame"] || _[e[t] + "CancelRequestAnimationFrame"];
                h("Ticker", function (e, t) {
                    var i, n, r, l, a, d = this,
                        u = W(),
                        o = !(!1 === t || !F) && "auto",
                        c = 500,
                        h = 33,
                        _ = function (e) {
                            var t, o, s = W() - C;
                            c < s && (u += s - h), C += s, d.time = (C - u) / 1e3, t = d.time - a, (!i || 0 < t || !0 === e) && (d.frame++, a += t + (l <= t ? .004 : l - t), o = !0), !0 !== e && (r = n(_)), o && d.dispatchEvent("tick")
                        };
                    A.call(d), d.time = d.frame = 0, d.tick = function () {
                        _(!0)
                    }, d.lagSmoothing = function (e, t) {
                        c = e || 1e10, h = Math.min(t, c, 0)
                    }, d.sleep = function () {
                        null != r && (o && H ? H(r) : clearTimeout(r), n = S, r = null, d === b && (g = !1))
                    }, d.wake = function (e) {
                        null !== r ? d.sleep() : e ? u += -C + (C = W()) : 10 < d.frame && (C = W() - c + 5), n = 0 === i ? S : o && F ? F : function (e) {
                            return setTimeout(e, 1e3 * (a - d.time) + 1 | 0)
                        }, d === b && (g = !0), _(2)
                    }, d.fps = function (e) {
                        if (!arguments.length) return i;
                        l = 1 / ((i = e) || 60), a = this.time + l, d.wake()
                    }, d.useRAF = function (e) {
                        if (!arguments.length) return o;
                        d.sleep(), o = e, d.fps(i)
                    }, d.fps(e), setTimeout(function () {
                        "auto" === o && d.frame < 5 && "hidden" !== document.visibilityState && d.useRAF(!1)
                    }, 1500)
                }), (o = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
                var d = h("core.FWDAnim", function (e, t) {
                    if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, q) {
                        g || b.wake();
                        var o = this.vars.useFrames ? G : q;
                        o.add(this, o._time), this.vars.paused && this.paused(!0)
                    }
                });
                b = d.ticker = new c.Ticker, (o = d.prototype)._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
                var u = function () {
                    g && 2e3 < W() - C && b.wake(), setTimeout(u, 2e3)
                };
                u(), o.play = function (e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, o.pause = function (e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, o.resume = function (e, t) {
                    return null != e && this.seek(e, t), this.paused(!1)
                }, o.seek = function (e, t) {
                    return this.totalTime(Number(e), !1 !== t)
                }, o.restart = function (e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                }, o.reverse = function (e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, o.render = function (e, t, o) {}, o.invalidate = function () {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, o.isActive = function () {
                    var e, t = this._timeline,
                        o = this._startTime;
                    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= o && e < o + this.totalDuration() / this._timeScale
                }, o._enabled = function (e, t) {
                    return g || b.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                }, o._kill = function (e, t) {
                    return this._enabled(!1, !1)
                }, o.kill = function (e, t) {
                    return this._kill(e, t), this
                }, o._uncache = function (e) {
                    for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                    return this
                }, o._swapSelfInParams = function (e) {
                    for (var t = e.length, o = e.concat(); - 1 < --t;) "{self}" === e[t] && (o[t] = this);
                    return o
                }, o._callback = function (e) {
                    var t = this.vars,
                        o = t[e],
                        s = t[e + "Params"],
                        i = t[e + "Scope"] || t.callbackScope || this;
                    switch (s ? s.length : 0) {
                    case 0:
                        o.call(i);
                        break;
                    case 1:
                        o.call(i, s[0]);
                        break;
                    case 2:
                        o.call(i, s[0], s[1]);
                        break;
                    default:
                        o.apply(i, s)
                    }
                }, o.eventCallback = function (e, t, o, s) {
                    if ("on" === (e || "").substr(0, 2)) {
                        var i = this.vars;
                        if (1 === arguments.length) return i[e];
                        null == t ? delete i[e] : (i[e] = t, i[e + "Params"] = T(o) && -1 !== o.join("").indexOf("{self}") ? this._swapSelfInParams(o) : o, i[e + "Scope"] = s), "onUpdate" === e && (this._onUpdate = t)
                    }
                    return this
                }, o.delay = function (e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                }, o.duration = function (e) {
                    return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, o.totalDuration = function (e) {
                    return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                }, o.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }, o.totalTime = function (e, t, o) {
                    if (g || b.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (e < 0 && !o && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var s = this._totalDuration,
                                i = this._timeline;
                            if (s < e && !o && (e = s), this._startTime = (this._paused ? this._pauseTime : i._time) - (this._reversed ? s - e : e) / this._timeScale, i._dirty || this._uncache(!1), i._timeline)
                                for (; i._timeline;) i._timeline._time !== (i._startTime + i._totalTime) / i._timeScale && i.totalTime(i._totalTime, !0), i = i._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (k.length && J(), this.render(e, t, !1), k.length && J())
                    }
                    return this
                }, o.progress = o.totalProgress = function (e, t) {
                    var o = this.duration();
                    return arguments.length ? this.totalTime(o * e, t) : o ? this._time / o : this.ratio
                }, o.startTime = function (e) {
                    return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                }, o.endTime = function (e) {
                    return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                }, o.timeScale = function (e) {
                    if (!arguments.length) return this._timeScale;
                    if (e = e || v, this._timeline && this._timeline.smoothChildTiming) {
                        var t = this._pauseTime,
                            o = t || 0 === t ? t : this._timeline.totalTime();
                        this._startTime = o - (o - this._startTime) * this._timeScale / e
                    }
                    return this._timeScale = e, this._uncache(!1)
                }, o.reversed = function (e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, o.paused = function (e) {
                    if (!arguments.length) return this._paused;
                    var t, o, s = this._timeline;
                    return e != this._paused && s && (g || e || b.wake(), o = (t = s.rawTime()) - this._pauseTime, !e && s.smoothChildTiming && (this._startTime += o, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 != o && this._initted && this.duration() && (t = s.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                };
                var R = h("core.FWDSimpleTimeline", function (e) {
                    d.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                (o = R.prototype = new d).constructor = R, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function (e, t, o, s) {
                    var i, n;
                    if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                        for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                    return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
                }, o._remove = function (e, t) {
                    return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, o.render = function (e, t, o) {
                    var s, i = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = e; i;) s = i._next, (i._active || e >= i._startTime && !i._paused) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, o) : i.render((e - i._startTime) * i._timeScale, t, o)), i = s
                }, o.rawTime = function () {
                    return g || b.wake(), this._totalTime
                };
                var E = h("FWDTweenLite", function (e, t, o) {
                        if (d.call(this, t, o), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                        var s, i, n, r = e.jquery || e.length && e !== _ && e[0] && (e[0] === _ || e[0].nodeType && e[0].style && !e.nodeType),
                            l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? z[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (r || e instanceof Array || e.push && T(e)) && "number" != typeof e[0])
                            for (this._targets = n = a(e), this._propLookup = [], this._siblings = [], s = 0; s < n.length; s++)(i = n[s]) ? "string" != typeof i ? i.length && i !== _ && i[0] && (i[0] === _ || i[0].nodeType && i[0].style && !i.nodeType) ? (n.splice(s--, 1), this._targets = n = n.concat(a(i))) : (this._siblings[s] = Q(i, this, !1), 1 === l && 1 < this._siblings[s].length && Z(i, this, null, 1, this._siblings[s])) : "string" == typeof (i = n[s--] = E.selector(i)) && n.splice(s + 1, 1) : n.splice(s--, 1);
                        else this._propLookup = {}, this._siblings = Q(e, this, !1), 1 === l && 1 < this._siblings.length && Z(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === t && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -v, this.render(Math.min(0, -this._delay)))
                    }, !0),
                    O = function (e) {
                        return e && e.length && e !== _ && e[0] && (e[0] === _ || e[0].nodeType && e[0].style && !e.nodeType)
                    };
                (o = E.prototype = new d).constructor = E, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, E.version = "1.19.0", E.defaultEase = o._ease = new D(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = b, E.autoSleep = 120, E.lagSmoothing = function (e, t) {
                    b.lagSmoothing(e, t)
                }, E.selector = _.$ || _.jQuery || function (e) {
                    var t = _.$ || _.jQuery;
                    return t ? (E.selector = t)(e) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                };
                var k = [],
                    L = {},
                    I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                    x = function (e) {
                        for (var t, o = this._firstPT; o;) t = o.blob ? e ? this.join("") : this.start : o.c * e + o.s, o.m ? t = o.m(t, this._target || o.t) : t < 1e-6 && -1e-6 < t && (t = 0), o.f ? o.fp ? o.t[o.p](o.fp, t) : o.t[o.p](t) : o.t[o.p] = t, o = o._next
                    },
                    M = function (e, t, o, s) {
                        var i, n, r, l, a, d, u, c = [e, t],
                            h = 0,
                            _ = "",
                            f = 0;
                        for (c.start = e, o && (o(c), e = c[0], t = c[1]), c.length = 0, i = e.match(I) || [], n = t.match(I) || [], s && (s._next = null, s.blob = 1, c._firstPT = c._applyPT = s), a = n.length, l = 0; l < a; l++) u = n[l], _ += (d = t.substr(h, t.indexOf(u, h) - h)) || !l ? d : ",", h += d.length, f ? f = (f + 1) % 5 : "rgba(" === d.substr(-5) && (f = 1), u === i[l] || i.length <= l ? _ += u : (_ && (c.push(_), _ = ""), r = parseFloat(i[l]), c.push(r), c._firstPT = {
                            _next: c._firstPT,
                            t: c,
                            p: c.length - 1,
                            s: r,
                            c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - r) || 0,
                            f: 0,
                            m: f && f < 4 ? Math.round : 0
                        }), h += u.length;
                        return (_ += t.substr(h)) && c.push(_), c.setRatio = x, c
                    },
                    U = function (e, t, o, s, i, n, r, l, a) {
                        "function" == typeof s && (s = s(a || 0, e));
                        var d, u = "get" === o ? e[t] : o,
                            c = typeof e[t],
                            h = "string" == typeof s && "=" === s.charAt(1),
                            _ = {
                                t: e,
                                p: t,
                                s: u,
                                f: "function" == c,
                                pg: 0,
                                n: i || t,
                                m: n ? "function" == typeof n ? n : Math.round : 0,
                                pr: 0,
                                c: h ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - u || 0
                            };
                        if ("number" != c && ("function" == c && "get" === o && (d = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), _.s = u = r ? e[d](r) : e[d]()), "string" == typeof u && (r || isNaN(u)) ? (_.fp = r, _ = {
                                t: M(u, s, l || E.defaultStringFilter, _),
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: i || t,
                                pr: 0,
                                m: 0
                            }) : h || (_.s = parseFloat(u), _.c = parseFloat(s) - _.s || 0)), _.c) return (_._next = this._firstPT) && (_._next._prev = _), this._firstPT = _
                    },
                    N = E._internals = {
                        isArray: T,
                        isSelector: O,
                        lazyTweens: k,
                        blobDif: M
                    },
                    Y = E._plugins = {},
                    X = N.tweenLookup = {},
                    V = 0,
                    j = N.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    },
                    z = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    G = d._rootFramesTimeline = new R,
                    q = d._rootTimeline = new R,
                    K = 30,
                    J = N.lazyRender = function () {
                        var e, t = k.length;
                        for (L = {}; - 1 < --t;)(e = k[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                        k.length = 0
                    };
                q._startTime = b.time, G._startTime = b.frame, q._active = G._active = !0, setTimeout(J, 1), d._updateRoot = E.render = function () {
                    var e, t, o;
                    if (k.length && J(), q.render((b.time - q._startTime) * q._timeScale, !1, !1), G.render((b.frame - G._startTime) * G._timeScale, !1, !1), k.length && J(), b.frame >= K) {
                        for (o in K = b.frame + (parseInt(E.autoSleep, 10) || 120), X) {
                            for (e = (t = X[o].tweens).length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete X[o]
                        }
                        if ((!(o = q._first) || o._paused) && E.autoSleep && !G._first && 1 === b._listeners.tick.length) {
                            for (; o && o._paused;) o = o._next;
                            o || b.sleep()
                        }
                    }
                }, b.addEventListener("tick", d._updateRoot);
                var Q = function (e, t, o) {
                        var s, i, n = e._gsTweenID;
                        if (X[n || (e._gsTweenID = n = "t" + V++)] || (X[n] = {
                                target: e,
                                tweens: []
                            }), t && ((s = X[n].tweens)[i = s.length] = t, o))
                            for (; - 1 < --i;) s[i] === t && s.splice(i, 1);
                        return X[n].tweens
                    },
                    $ = function (e, t, o, s) {
                        var i, n, r = e.vars.onOverwrite;
                        return r && (i = r(e, t, o, s)), (r = E.onOverwrite) && (n = r(e, t, o, s)), !1 !== i && !1 !== n
                    },
                    Z = function (e, t, o, s, i) {
                        var n, r, l, a;
                        if (1 === s || 4 <= s) {
                            for (a = i.length, n = 0; n < a; n++)
                                if ((l = i[n]) !== t) l._gc || l._kill(null, e, t) && (r = !0);
                                else if (5 === s) break;
                            return r
                        }
                        var d, u = t._startTime + v,
                            c = [],
                            h = 0,
                            _ = 0 === t._duration;
                        for (n = i.length; - 1 < --n;)(l = i[n]) === t || l._gc || l._paused || (l._timeline !== t._timeline ? (d = d || ee(t, 0, _), 0 === ee(l, d, _) && (c[h++] = l)) : l._startTime <= u && l._startTime + l.totalDuration() / l._timeScale > u && ((_ || !l._initted) && u - l._startTime <= 2e-10 || (c[h++] = l)));
                        for (n = h; - 1 < --n;)
                            if (l = c[n], 2 === s && l._kill(o, e, t) && (r = !0), 2 !== s || !l._firstPT && l._initted) {
                                if (2 !== s && !$(l, t)) continue;
                                l._enabled(!1, !1) && (r = !0)
                            } return r
                    },
                    ee = function (e, t, o) {
                        for (var s = e._timeline, i = s._timeScale, n = e._startTime; s._timeline;) {
                            if (n += s._startTime, i *= s._timeScale, s._paused) return -100;
                            s = s._timeline
                        }
                        return t < (n /= i) ? n - t : o && n === t || !e._initted && n - t < 2 * v ? v : (n += e.totalDuration() / e._timeScale / i) > t + v ? 0 : n - t - v
                    };
                o._init = function () {
                    var e, t, o, s, i, n, r = this.vars,
                        l = this._overwrittenProps,
                        a = this._duration,
                        d = !!r.immediateRender,
                        u = r.ease;
                    if (r.startAt) {
                        for (s in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), i = {}, r.startAt) i[s] = r.startAt[s];
                        if (i.overwrite = !1, i.immediateRender = !0, i.lazy = d && !1 !== r.lazy, i.startAt = i.delay = null, this._startAt = E.to(this.target, 0, i), d)
                            if (0 < this._time) this._startAt = null;
                            else if (0 !== a) return
                    } else if (r.runBackwards && 0 !== a)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            for (s in 0 !== this._time && (d = !1), o = {}, r) j[s] && "autoCSS" !== s || (o[s] = r[s]);
                            if (o.overwrite = 0, o.data = "isFromStart", o.lazy = d && !1 !== r.lazy, o.immediateRender = d, this._startAt = E.to(this.target, 0, o), d) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        } if (this._ease = u = u ? u instanceof D ? u : "function" == typeof u ? new D(u, r.easeParams) : B[u] || E.defaultEase : E.defaultEase, r.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (n = this._targets.length, e = 0; e < n; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], l ? l[e] : null, e) && (t = !0);
                    else t = this._initProps(this.target, this._propLookup, this._siblings, l, 0);
                    if (t && E._onPluginEvent("_onInitAllProps", this), l && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                        for (o = this._firstPT; o;) o.s += o.c, o.c = -o.c, o = o._next;
                    this._onUpdate = r.onUpdate, this._initted = !0
                }, o._initProps = function (e, t, o, s, i) {
                    var n, r, l, a, d, u;
                    if (null == e) return !1;
                    for (n in L[e._gsTweenID] && J(), this.vars.css || e.style && e !== _ && e.nodeType && Y.css && !1 !== this.vars.autoCSS && function (e, t) {
                            var o, s = {};
                            for (o in e) j[o] || o in t && "transform" !== o && "x" !== o && "y" !== o && "width" !== o && "height" !== o && "className" !== o && "border" !== o || !(!Y[o] || Y[o] && Y[o]._autoCSS) || (s[o] = e[o], delete e[o]);
                            e.css = s
                        }(this.vars, e), this.vars)
                        if (u = this.vars[n], j[n]) u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[n] = u = this._swapSelfInParams(u, this));
                        else if (Y[n] && (a = new Y[n])._onInitTween(e, this.vars[n], this, i)) {
                        for (this._firstPT = d = {
                                _next: this._firstPT,
                                t: a,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: n,
                                pg: 1,
                                pr: a._priority,
                                m: 0
                            }, r = a._overwriteProps.length; - 1 < --r;) t[a._overwriteProps[r]] = this._firstPT;
                        (a._priority || a._onInitAllProps) && (l = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                    } else t[n] = U.call(this, e, n, "get", u, n, 0, null, this.vars.stringFilter, i);
                    return s && this._kill(s, e) ? this._initProps(e, t, o, s, i) : 1 < this._overwrite && this._firstPT && 1 < o.length && Z(e, this, t, this._overwrite, o) ? (this._kill(t, e), this._initProps(e, t, o, s, i)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), l)
                }, o.render = function (e, t, o) {
                    var s, i, n, r, l = this._time,
                        a = this._duration,
                        d = this._rawPrevTime;
                    if (a - 1e-7 <= e) this._totalTime = this._time = a, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, i = "onComplete", o = o || this._timeline.autoRemoveChildren), 0 === a && (!this._initted && this.vars.lazy && !o || (this._startTime === this._timeline._duration && (e = 0), (d < 0 || e <= 0 && -1e-7 <= e || d === v && "isPause" !== this.data) && d !== e && (o = !0, v < d && (i = "onReverseComplete")), this._rawPrevTime = r = !t || e || d === e ? e : v));
                    else if (e < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== l || 0 === a && 0 < d) && (i = "onReverseComplete", s = this._reversed), e < 0 && (this._active = !1, 0 === a && (!this._initted && this.vars.lazy && !o || (0 <= d && (d !== v || "isPause" !== this.data) && (o = !0), this._rawPrevTime = r = !t || e || d === e ? e : v))), this._initted || (o = !0);
                    else if (this._totalTime = this._time = e, this._easeType) {
                        var u = e / a,
                            c = this._easeType,
                            h = this._easePower;
                        (1 === c || 3 === c && .5 <= u) && (u = 1 - u), 3 === c && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : e / a < .5 ? u / 2 : 1 - u / 2
                    } else this.ratio = this._ease.getRatio(e / a);
                    if (this._time !== l || o) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!o && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = l, this._rawPrevTime = d, k.push(this), void(this._lazy = [e, t]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / a) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== l && 0 <= e && (this._active = !0), 0 === l && (this._startAt && (0 <= e ? this._startAt.render(e, t, o) : i = i || "_dummyGS"), this.vars.onStart && (0 === this._time && 0 !== a || t || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                        this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, t, o), t || (this._time !== l || s || o) && this._callback("onUpdate")), i && (this._gc && !o || (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, o), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[i] && this._callback(i), 0 === a && this._rawPrevTime === v && r !== v && (this._rawPrevTime = 0)))
                    }
                }, o._kill = function (e, t, o) {
                    if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : E.selector(t) || t;
                    var s, i, n, r, l, a, d, u, c, h = o && this._time && o._startTime === this._startTime && this._timeline === o._timeline;
                    if ((T(t) || O(t)) && "number" != typeof t[0])
                        for (s = t.length; - 1 < --s;) this._kill(e, t[s], o) && (a = !0);
                    else {
                        if (this._targets) {
                            for (s = this._targets.length; - 1 < --s;)
                                if (t === this._targets[s]) {
                                    l = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : "all";
                                    break
                                }
                        } else {
                            if (t !== this.target) return !1;
                            l = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                        }
                        if (l) {
                            if (d = e || l, u = e !== i && "all" !== i && e !== l && ("object" != typeof e || !e._tempKill), o && (E.onOverwrite || this.vars.onOverwrite)) {
                                for (n in d) l[n] && (c = c || []).push(n);
                                if ((c || !e) && !$(this, o, t, c)) return !1
                            }
                            for (n in d)(r = l[n]) && (h && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, a = !0), r.pg && r.t._kill(d) && (a = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete l[n]), u && (i[n] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return a
                }, o.invalidate = function () {
                    return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], d.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -v, this.render(Math.min(0, -this._delay))), this
                }, o._enabled = function (e, t) {
                    if (g || b.wake(), e && this._gc) {
                        var o, s = this._targets;
                        if (s)
                            for (o = s.length; - 1 < --o;) this._siblings[o] = Q(s[o], this, !0);
                        else this._siblings = Q(this.target, this, !0)
                    }
                    return d.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                }, E.to = function (e, t, o) {
                    return new E(e, t, o)
                }, E.from = function (e, t, o) {
                    return o.runBackwards = !0, o.immediateRender = 0 != o.immediateRender, new E(e, t, o)
                }, E.fromTo = function (e, t, o, s) {
                    return s.startAt = o, s.immediateRender = 0 != s.immediateRender && 0 != o.immediateRender, new E(e, t, s)
                }, E.delayedCall = function (e, t, o, s, i) {
                    return new E(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: o,
                        callbackScope: s,
                        onReverseComplete: t,
                        onReverseCompleteParams: o,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: i,
                        overwrite: 0
                    })
                }, E.set = function (e, t) {
                    return new E(e, 0, t)
                }, E.getTweensOf = function (e, t) {
                    if (null == e) return [];
                    var o, s, i, n;
                    if (e = "string" != typeof e ? e : E.selector(e) || e, (T(e) || O(e)) && "number" != typeof e[0]) {
                        for (o = e.length, s = []; - 1 < --o;) s = s.concat(E.getTweensOf(e[o], t));
                        for (o = s.length; - 1 < --o;)
                            for (n = s[o], i = o; - 1 < --i;) n === s[i] && s.splice(o, 1)
                    } else
                        for (o = (s = Q(e).concat()).length; - 1 < --o;)(s[o]._gc || t && !s[o].isActive()) && s.splice(o, 1);
                    return s
                }, E.killTweensOf = E.killDelayedCallsTo = function (e, t, o) {
                    "object" == typeof t && (o = t, t = !1);
                    for (var s = E.getTweensOf(e, t), i = s.length; - 1 < --i;) s[i]._kill(o, e)
                };
                var te = h("plugins.TweenPlugin", function (e, t) {
                    this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = te.prototype
                }, !0);
                if (o = te.prototype, te.version = "1.19.0", te.API = 2, o._firstPT = null, o._addTween = U, o.setRatio = x, o._kill = function (e) {
                        var t, o = this._overwriteProps,
                            s = this._firstPT;
                        if (null != e[this._propName]) this._overwriteProps = [];
                        else
                            for (t = o.length; - 1 < --t;) null != e[o[t]] && o.splice(t, 1);
                        for (; s;) null != e[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                        return !1
                    }, o._mod = o._roundProps = function (e) {
                        for (var t, o = this._firstPT; o;)(t = e[this._propName] || null != o.n && e[o.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === o.f ? o.t._applyPT.m = t : o.m = t), o = o._next
                    }, E._onPluginEvent = function (e, t) {
                        var o, s, i, n, r, l = t._firstPT;
                        if ("_onInitAllProps" === e) {
                            for (; l;) {
                                for (r = l._next, s = i; s && s.pr > l.pr;) s = s._next;
                                (l._prev = s ? s._prev : n) ? l._prev._next = l: i = l, (l._next = s) ? s._prev = l : n = l, l = r
                            }
                            l = t._firstPT = i
                        }
                        for (; l;) l.pg && "function" == typeof l.t[e] && l.t[e]() && (o = !0), l = l._next;
                        return o
                    }, te.activate = function (e) {
                        for (var t = e.length; - 1 < --t;) e[t].API === te.API && (Y[(new e[t])._propName] = e[t]);
                        return !0
                    }, n.plugin = function (e) {
                        if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                        var t, o = e.propName,
                            s = e.priority || 0,
                            i = e.overwriteProps,
                            n = {
                                init: "_onInitTween",
                                set: "setRatio",
                                kill: "_kill",
                                round: "_mod",
                                mod: "_mod",
                                initAll: "_onInitAllProps"
                            },
                            r = h("plugins." + o.charAt(0).toUpperCase() + o.substr(1) + "Plugin", function () {
                                te.call(this, o, s), this._overwriteProps = i || []
                            }, !0 === e.fwd_global),
                            l = r.prototype = new te(o);
                        for (t in (l.constructor = r).API = e.API, n) "function" == typeof e[t] && (l[n[t]] = e[t]);
                        return r.version = e.version, te.activate([r]), r
                    }, e = _._fwd_gsQueue) {
                    for (t = 0; t < e.length; t++) e[t]();
                    for (o in P) P[o].func || _.console.log("GSAP encountered missing dependency: " + o)
                }
                g = !1
            }
        }("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation")
}! function (e) {
    var t = function () {
        var i = this;
        t.prototype;
        this.main_do = null, this.init = function () {
            this.setupScreen(), e.onerror = this.showError, this.screen.style.zIndex = 99999999999, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
        }, this.position = function () {
            var e = FWDRAPUtils.getScrollOffsets();
            i.setX(e.x + 150), i.setY(e.y)
        }, this.addConsoleToDom = function () {
            -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(i.screen) : document.documentElement.appendChild(i.screen)
        }, this.setupScreen = function () {
            this.main_do = new FWDRAPDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(200), this.main_do.setHeight(300), this.setWidth(200), this.setHeight(300), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
        }, this.showError = function (e, t, o) {
            var s = i.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + o + " for " + t;
            i.main_do.setInnerHTML(s), i.main_do.screen.scrollTop = i.main_do.screen.scrollHeight
        }, this.log = function (e) {
            var t = i.main_do.getInnerHTML() + "<br>" + e;
            i.main_do.setInnerHTML(t), i.main_do.getScreen().scrollTop = 1e4
        }, this.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDRAPDisplayObject("div", "absolute")
    }, t.prototype = null, e.FWDConsole = t
}(window), window.FWDDisplayObject = function (e, t, o, s) {
        var i = this;
        if (i.listeners = {
                events_ar: []
            }, "div" != e && "img" != e && "canvas" != e) throw Error("Type is not valid! " + e);
        i.type = e, this.children_ar = [], this.style, this.screen, this.transform, this.position = t || "absolute", this.overflow = o || "hidden", this.display = s || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDUtils.hasTransform3d, this.hasTransform2d_bl = FWDUtils.hasTransform2d, (FWDUtils.isIE || FWDUtils.isIE11 && !FWDUtils.isMobile) && (i.hasTransform3d_bl = !1, i.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, i.init = function () {
            i.setScreen()
        }, i.getTransform = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== i.screen.style[e]) return e;
            return !1
        }, i.getOpacityType = function () {
            return void 0 !== i.screen.style.opacity ? "opacity" : "filter"
        }, i.setScreen = function (e) {
            "img" == i.type && e ? i.screen = e : i.screen = document.createElement(i.type), i.setMainProperties()
        }, i.setMainProperties = function () {
            i.transform = i.getTransform(), i.setPosition(i.position), i.setOverflow(i.overflow), i.opacityType = i.getOpacityType(), "opacity" == i.opacityType && (i.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), i.screen.style.left = "0px", i.screen.style.top = "0px", i.screen.style.margin = "0px", i.screen.style.padding = "0px", i.screen.style.maxWidth = "none", i.screen.style.maxHeight = "none", i.screen.style.border = "none", i.screen.style.lineHeight = "1", i.screen.style.backgroundColor = "transparent", i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden", i.screen.style.MozImageRendering = "optimizeSpeed", i.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (i.setWidth(i.screen.width), i.setHeight(i.screen.height))
        }, i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.setSelectable = function (e) {
            e || (i.screen.style.userSelect = "none", i.screen.style.MozUserSelect = "none", i.screen.style.webkitUserSelect = "none", i.screen.style.khtmlUserSelect = "none", i.screen.style.oUserSelect = "none", i.screen.style.msUserSelect = "none", i.screen.msUserSelect = "none", i.screen.ondragstart = function (e) {
                return !1
            }, i.screen.onselectstart = function () {
                return !1
            }, i.screen.ontouchstart = function () {
                return !1
            }, i.screen.style.webkitTouchCallout = "none", i.hasBeenSetSelectable_bl = !0)
        }, i.getScreen = function () {
            return i.screen
        }, i.setVisible = function (e) {
            i.visible = e, 1 == i.visible ? i.screen.style.visibility = "visible" : i.screen.style.visibility = "hidden"
        }, i.getVisible = function () {
            return i.visible
        }, i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%", i.screen.style.height = "100%"
        }, i.getStyle = function () {
            return i.screen.style
        }, i.setOverflow = function (e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, i.setPosition = function (e) {
            i.position = e, i.screen.style.position = i.position
        }, i.setDisplay = function (e) {
            i.display = e, i.screen.style.display = i.display
        }, i.setButtonMode = function (e) {
            i.buttonMode = e, 1 == i.buttonMode ? i.screen.style.cursor = "pointer" : i.screen.style.cursor = "default"
        }, i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        }, i.setInnerHTML = function (e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, i.getInnerHTML = function () {
            return i.innerHTML
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.setAlpha = function (e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, i.getAlpha = function () {
            return i.alpha
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.getGlobalX = function () {
            return i.getRect().left
        }, i.getGlobalY = function () {
            return i.getRect().top
        }, i.setX = function (e) {
            i.x = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.left = i.x + "px"
        }, i.getX = function () {
            return i.x
        }, i.setY = function (e) {
            i.y = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.top = i.y + "px"
        }, i.getY = function () {
            return i.y
        }, i.setWidth = function (e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, i.getWidth = function () {
            return "div" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function (e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, i.getHeight = function () {
            return "div" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, i.addChild = function (e) {
            i.contains(e) && i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.push(e), i.screen.appendChild(e.screen)
        }, i.removeChild = function (e) {
            if (!i.contains(e)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
            i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1), i.screen.removeChild(e.screen)
        }, i.contains = function (e) {
            return -1 != FWDUtils.indexOfArray(i.children_ar, e)
        }, i.addChildAt = function (e, t) {
            if (0 == i.getNumChildren()) i.children_ar.push(e), i.screen.appendChild(e.screen);
            else if (1 == t) i.screen.insertBefore(e.screen, i.children_ar[0].screen), i.screen.insertBefore(i.children_ar[0].screen, e.screen), i.contains(e) ? i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e);
            else {
                if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                i.screen.insertBefore(e.screen, i.children_ar[t].screen), i.contains(e) ? i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e)
            }
        }, i.getChildAt = function (e) {
            if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == i.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        }, i.removeChildAtZero = function () {
            i.screen.removeChild(i.children_ar[0].screen), i.children_ar.shift()
        }, i.getNumChildren = function () {
            return i.children_ar.length
        }, i.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, i.dispatchEvent = function (e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var i in t) this.listeners.events_ar[o][i] = t[i];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, i.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, i.disposeImage = function () {
            "img" == i.type && (i.screen.src = null)
        }, i.destroy = function () {
            i.hasBeenSetSelectable_bl && (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null), i.screen.removeAttribute("style"), i.listeners = [], i.listeners = null, i.children_ar = [], i.children_ar = null, i.style = null, i.screen = null, i.transform = null, i.position = null, i.overflow = null, i.display = null, i.visible = null, i.buttonMode = null, i.x = null, i.y = null, i.w = null, i.h = null, i.rect = null, i.alpha = null, i.innerHTML = null, i.opacityType = null, i.isHtml5_bl = null, i.hasTransform3d_bl = null, i.hasTransform2d_bl = null, i = null
        }, i.init()
    }, window, window.FWDEventDispatcher = function () {
        this.listeners = {
            events_ar: []
        }, this.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, this.dispatchEvent = function (e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var i in t) this.listeners.events_ar[o][i] = t[i];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, this.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, this.destroy = function () {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    },
    function (i) {
        var t = function (e) {
            var s = this;
            t.prototype;
            this.appId = parseInt(e);
            s.init = function () {
                s.checkFBRoot(), i.fbAsyncInit || s.connect()
            }, this.checkFBRoot = function () {
                var e = Boolean(document.getElementById("fb-root"));
                e || ((e = document.createElement("div")).id = "fb-root", document.getElementsByTagName("body")[0].appendChild(e))
            }, this.connect = function () {
                var e, t, o;
                s.hasStartedToConnect_bl || (s.hasStartedToConnect_bl = !0, i.fbAsyncInit = function () {
                    FB.init({
                        appId: s.appId,
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        oauth: !0
                    }), FB.Event.subscribe("auth.authResponseChange", function (e) {
                        "connected" === e.status || FB.login()
                    })
                }, e = document, o = "facebook-jssdk", e.getElementById(o) || ((t = e.createElement("script")).id = o, t.async = !0, t.src = "//connect.facebook.net/en_US/all.js", e.getElementsByTagName("body")[0].appendChild(t)))
            }, this.share = function (e, t, o) {
                FB.ui({
                    method: "feed",
                    link: e,
                    caption: t,
                    picture: o
                }, function (e) {})
            }, s.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDEventDispatcher
        }, t.prototype = null, i.FWDFacebookShare = t
    }(window);
var FWDFlashTest = function () {
    var u = "undefined",
        c = "object",
        h = "Shockwave Flash",
        _ = "application/x-shockwave-flash",
        f = window,
        p = document,
        m = navigator,
        s = function () {
            var e = typeof p.getElementById != u && typeof p.getElementsByTagName != u && typeof p.createElement != u,
                t = m.userAgent.toLowerCase(),
                o = m.platform.toLowerCase(),
                s = /win/.test(o || t),
                i = /mac/.test(o || t),
                n = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                r = !1,
                l = [0, 0, 0],
                a = null;
            if (typeof m.plugins != u && typeof m.plugins[h] == c) !(a = m.plugins[h].description) || typeof m.mimeTypes != u && m.mimeTypes[_] && !m.mimeTypes[_].enabledPlugin || (r = !!0, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof f.ActiveXObject != u) try {
                var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                d && (a = d.GetVariable("$version")) && (r = !0, a = a.split(" ")[1].split(","), l = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
            } catch (e) {}
            return {
                w3: e,
                pv: l,
                wk: n,
                ie: r,
                win: s,
                mac: i
            }
        }();

    function e(e) {
        var t = s.pv,
            o = e.split(".");
        return o[0] = parseInt(o[0], 10), o[1] = parseInt(o[1], 10) || 0, o[2] = parseInt(o[2], 10) || 0, t[0] > o[0] || t[0] == o[0] && t[1] > o[1] || t[0] == o[0] && t[1] == o[1] && t[2] >= o[2]
    }
    return {
        hasFlashPlayerVersion: e
    }
}();

function A(t, e, o) {
    var s = e || 0,
        i = 0;
    "string" == typeof t ? (i = o || t.length, this.a = function (e) {
        return 255 & t.charCodeAt(e + s)
    }) : "unknown" == typeof t && (i = o || IEBinary_getLength(t), this.a = function (e) {
        return IEBinary_getByteAt(t, e + s)
    }), this.l = function (e, t) {
        for (var o = Array(t), s = 0; s < t; s++) o[s] = this.a(e + s);
        return o
    }, this.h = function () {
        return i
    }, this.d = function (e, t) {
        return 0 != (this.a(e) & 1 << t)
    }, this.w = function (e) {
        return (e = (this.a(e + 1) << 8) + this.a(e)) < 0 && (e += 65536), e
    }, this.i = function (e) {
        var t = this.a(e);
        return (t = (((t << 8) + this.a(e + 1) << 8) + this.a(e + 2) << 8) + (e = this.a(e + 3))) < 0 && (t += 4294967296), t
    }, this.o = function (e) {
        var t = this.a(e);
        return (t = ((t << 8) + this.a(e + 1) << 8) + (e = this.a(e + 2))) < 0 && (t += 16777216), t
    }, this.c = function (e, t) {
        for (var o = [], s = e, i = 0; s < e + t; s++, i++) o[i] = String.fromCharCode(this.a(s));
        return o.join("")
    }, this.e = function (e, t, o) {
        switch (e = this.l(e, t), o.toLowerCase()) {
        case "utf-16":
        case "utf-16le":
        case "utf-16be":
            t = o;
            var s, i = 0,
                n = 1;
            o = 0, s = Math.min(s || e.length, e.length), 254 == e[0] && 255 == e[1] ? (t = !0, i = 2) : 255 == e[0] && 254 == e[1] && (t = !1, i = 2), t && (n = 0, o = 1), t = [];
            for (var r = 0; i < s; r++) {
                var l = e[i + n],
                    a = (l << 8) + e[i + o];
                i = i + 2;
                if (0 == a) break;
                l < 216 || 224 <= l ? t[r] = String.fromCharCode(a) : (l = (e[i + n] << 8) + e[i + o], i += 2, t[r] = String.fromCharCode(a, l))
            }(e = new String(t.join(""))).g = i;
            break;
        case "utf-8":
            for (s = 0, i = Math.min(i || e.length, e.length), 239 == e[0] && 187 == e[1] && 191 == e[2] && (s = 3), n = [], o = 0; s < i && 0 != (t = e[s++]); o++) t < 128 ? n[o] = String.fromCharCode(t) : 194 <= t && t < 224 ? (r = e[s++], n[o] = String.fromCharCode(((31 & t) << 6) + (63 & r))) : 224 <= t && t < 240 ? (r = e[s++], a = e[s++], n[o] = String.fromCharCode(((255 & t) << 12) + ((63 & r) << 6) + (63 & a))) : 240 <= t && t < 245 && (t = ((7 & t) << 18) + ((63 & (r = e[s++])) << 12) + ((63 & (a = e[s++])) << 6) + (63 & (l = e[s++])) - 65536, n[o] = String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
            (e = new String(n.join(""))).g = s;
            break;
        default:
            for (i = [], n = n || e.length, s = 0; s < n && 0 != (o = e[s++]);) i[s - 1] = String.fromCharCode(o);
            (e = new String(i.join(""))).g = s
        }
        return e
    }, this.f = function (e, t) {
        t()
    }
}

function B(t, o, u) {
    function c(e, t, o, s, i, n) {
        var r = l();
        r ? (void 0 === n && (n = !0), t && (void 0 !== r.onload ? r.onload = function () {
            "200" == r.status || "206" == r.status ? (r.fileSize = i || r.getResponseHeader("Content-Length"), t(r)) : o && o(), r = null
        } : r.onreadystatechange = function () {
            4 == r.readyState && ("200" == r.status || "206" == r.status ? (r.fileSize = i || r.getResponseHeader("Content-Length"), t(r)) : o && o(), r = null)
        }), r.open("GET", e, n), r.overrideMimeType && r.overrideMimeType("text/plain; charset=x-user-defined"), s && r.setRequestHeader("Range", "bytes=" + s[0] + "-" + s[1]), r.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"), r.send(null)) : o && o()
    }

    function l() {
        var e = null;
        return window.XMLHttpRequest ? e = new XMLHttpRequest : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e
    }

    function e(e, t) {
        var o = l();
        o && (t && (void 0 !== o.onload ? o.onload = function () {
            "200" == o.status && t(this), o = null
        } : o.onreadystatechange = function () {
            4 == o.readyState && ("200" == o.status && t(this), o = null)
        }), o.open("HEAD", e, !0), o.send(null))
    }

    function s(e, n) {
        var r, o;

        function s(e) {
            var t = ~~(e[0] / r) - o;
            return t < 0 && (t = 0), (e = 1 + ~~(e[1] / r) + o) >= blockTotal && (e = blockTotal - 1), [t, e]
        }

        function i(o, s) {
            for (; a[o[0]];)
                if (o[0]++, o[0] > o[1]) return void(s && s());
            for (; a[o[1]];)
                if (o[1]--, o[0] > o[1]) return void(s && s());
            var i = [o[0] * r, (o[1] + 1) * r - 1];
            c(e, function (e) {
                parseInt(e.getResponseHeader("Content-Length"), 10) == n && (o[0] = 0, o[1] = blockTotal - 1, i[0] = 0, i[1] = n - 1), e = {
                    data: e.N || e.responseText,
                    offset: i[0]
                };
                for (var t = o[0]; t <= o[1]; t++) a[t] = e;
                s && s()
            }, u, i, t, !!s)
        }
        var t, l = new A("", 0, n),
            a = [];
        for (var d in o = void 0 === o ? 0 : o, blockTotal = 1 + ~~((n - 1) / (r = r || 2048)), l) l.hasOwnProperty(d) && "function" == typeof l[d] && (this[d] = l[d]);
        this.a = function (e) {
            var t;
            return i(s([e, e])), "string" == typeof (t = a[~~(e / r)]).data ? 255 & t.data.charCodeAt(e - t.offset) : "unknown" == typeof t.data ? IEBinary_getByteAt(t.data, e - t.offset) : void 0
        }, this.f = function (e, t) {
            i(s(e), t)
        }
    }
    e(t, function (e) {
        e = parseInt(e.getResponseHeader("Content-Length"), 10) || -1, o(new s(t, e))
    })
}
if (document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n<\/script>\r\n"), function (e) {
        e.FileAPIReader = function (s, i) {
            return function (e, t) {
                var o = i || new FileReader;
                o.onload = function (e) {
                    t(new A(e.target.result))
                }, o.readAsBinaryString(s)
            }
        }
    }(this), function (e) {
        var t = e.p = {},
            a = {},
            o = [0, 7];
        t.t = function (e) {
            delete a[e]
        }, t.s = function () {
            a = {}
        }, t.B = function (n, r, l) {
            ((l = l || {}).dataReader || B)(n, function (i) {
                i.f(o, function () {
                    var s = "ftypM4A" == i.c(4, 7) ? ID4 : "ID3" == i.c(0, 3) ? ID3v2 : ID3v1;
                    s.m(i, function () {
                        var e, t = l.tags,
                            o = s.n(i, t);
                        t = a[n] || {};
                        for (e in o) o.hasOwnProperty(e) && (t[e] = o[e]);
                        a[n] = t, r && r()
                    })
                })
            })
        }, t.v = function (e) {
            if (!a[e]) return null;
            var t, o = {};
            for (t in a[e]) a[e].hasOwnProperty(t) && (o[t] = a[e][t]);
            return o
        }, t.A = function (e, t) {
            return a[e] ? a[e][t] : null
        }, e.ID3 = e.p, t.loadTags = t.B, t.getAllTags = t.v, t.getTag = t.A, t.clearTags = t.t, t.clearAll = t.s
    }(this), function (e) {
        var t = e.q = {},
            a = "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
        t.m = function (e, t) {
            var o = e.h();
            e.f([o - 128 - 1, o], t)
        }, t.n = function (e) {
            var t = e.h() - 128;
            if ("TAG" != e.c(t, 3)) return {};
            var o = e.c(3 + t, 30).replace(/\0/g, ""),
                s = e.c(33 + t, 30).replace(/\0/g, ""),
                i = e.c(63 + t, 30).replace(/\0/g, ""),
                n = e.c(93 + t, 4).replace(/\0/g, "");
            if (0 == e.a(97 + t + 28)) var r = e.c(97 + t, 28).replace(/\0/g, ""),
                l = e.a(97 + t + 29);
            else r = "", l = 0;
            return {
                version: "1.1",
                title: o,
                artist: s,
                album: i,
                year: n,
                comment: r,
                track: l,
                genre: (e = e.a(97 + t + 30)) < 255 ? a[e] : ""
            }
        }, e.ID3v1 = e.q
    }(this), function (e) {
        function g(e, t) {
            var o = t.a(e),
                s = t.a(e + 1),
                i = t.a(e + 2);
            return 127 & t.a(e + 3) | (127 & i) << 7 | (127 & s) << 14 | (127 & o) << 21
        }
        var y = e.D = {};
        y.b = {}, y.frames = {
            BUF: "Recommended buffer size",
            CNT: "Play counter",
            COM: "Comments",
            CRA: "Audio encryption",
            CRM: "Encrypted meta frame",
            ETC: "Event timing codes",
            EQU: "Equalization",
            GEO: "General encapsulated object",
            IPL: "Involved people list",
            LNK: "Linked information",
            MCI: "Music CD Identifier",
            MLL: "MPEG location lookup table",
            PIC: "Attached picture",
            POP: "Popularimeter",
            REV: "Reverb",
            RVA: "Relative volume adjustment",
            SLT: "Synchronized lyric/text",
            STC: "Synced tempo codes",
            TAL: "Album/Movie/Show title",
            TBP: "BPM (Beats Per Minute)",
            TCM: "Composer",
            TCO: "Content type",
            TCR: "Copyright message",
            TDA: "Date",
            TDY: "Playlist delay",
            TEN: "Encoded by",
            TFT: "File type",
            TIM: "Time",
            TKE: "Initial key",
            TLA: "Language(s)",
            TLE: "Length",
            TMT: "Media type",
            TOA: "Original artist(s)/performer(s)",
            TOF: "Original filename",
            TOL: "Original Lyricist(s)/text writer(s)",
            TOR: "Original release year",
            TOT: "Original album/Movie/Show title",
            TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
            TP2: "Band/Orchestra/Accompaniment",
            TP3: "Conductor/Performer refinement",
            TP4: "Interpreted, remixed, or otherwise modified by",
            TPA: "Part of a set",
            TPB: "Publisher",
            TRC: "ISRC (International Standard Recording Code)",
            TRD: "Recording dates",
            TRK: "Track number/Position in set",
            TSI: "Size",
            TSS: "Software/hardware and settings used for encoding",
            TT1: "Content group description",
            TT2: "Title/Songname/Content description",
            TT3: "Subtitle/Description refinement",
            TXT: "Lyricist/text writer",
            TXX: "User defined text information frame",
            TYE: "Year",
            UFI: "Unique file identifier",
            ULT: "Unsychronized lyric/text transcription",
            WAF: "Official audio file webpage",
            WAR: "Official artist/performer webpage",
            WAS: "Official audio source webpage",
            WCM: "Commercial information",
            WCP: "Copyright/Legal information",
            WPB: "Publishers official webpage",
            WXX: "User defined URL link frame",
            AENC: "Audio encryption",
            APIC: "Attached picture",
            COMM: "Comments",
            COMR: "Commercial frame",
            ENCR: "Encryption method registration",
            EQUA: "Equalization",
            ETCO: "Event timing codes",
            GEOB: "General encapsulated object",
            GRID: "Group identification registration",
            IPLS: "Involved people list",
            LINK: "Linked information",
            MCDI: "Music CD identifier",
            MLLT: "MPEG location lookup table",
            OWNE: "Ownership frame",
            PRIV: "Private frame",
            PCNT: "Play counter",
            POPM: "Popularimeter",
            POSS: "Position synchronisation frame",
            RBUF: "Recommended buffer size",
            RVAD: "Relative volume adjustment",
            RVRB: "Reverb",
            SYLT: "Synchronized lyric/text",
            SYTC: "Synchronized tempo codes",
            TALB: "Album/Movie/Show title",
            TBPM: "BPM (beats per minute)",
            TCOM: "Composer",
            TCON: "Content type",
            TCOP: "Copyright message",
            TDAT: "Date",
            TDLY: "Playlist delay",
            TENC: "Encoded by",
            TEXT: "Lyricist/Text writer",
            TFLT: "File type",
            TIME: "Time",
            TIT1: "Content group description",
            TIT2: "Title/songname/content description",
            TIT3: "Subtitle/Description refinement",
            TKEY: "Initial key",
            TLAN: "Language(s)",
            TLEN: "Length",
            TMED: "Media type",
            TOAL: "Original album/movie/show title",
            TOFN: "Original filename",
            TOLY: "Original lyricist(s)/text writer(s)",
            TOPE: "Original artist(s)/performer(s)",
            TORY: "Original release year",
            TOWN: "File owner/licensee",
            TPE1: "Lead performer(s)/Soloist(s)",
            TPE2: "Band/orchestra/accompaniment",
            TPE3: "Conductor/performer refinement",
            TPE4: "Interpreted, remixed, or otherwise modified by",
            TPOS: "Part of a set",
            TPUB: "Publisher",
            TRCK: "Track number/Position in set",
            TRDA: "Recording dates",
            TRSN: "Internet radio station name",
            TRSO: "Internet radio station owner",
            TSIZ: "Size",
            TSRC: "ISRC (international standard recording code)",
            TSSE: "Software/Hardware and settings used for encoding",
            TYER: "Year",
            TXXX: "User defined text information frame",
            UFID: "Unique file identifier",
            USER: "Terms of use",
            USLT: "Unsychronized lyric/text transcription",
            WCOM: "Commercial information",
            WCOP: "Copyright/Legal information",
            WOAF: "Official audio file webpage",
            WOAR: "Official artist/performer webpage",
            WOAS: "Official audio source webpage",
            WORS: "Official internet radio station homepage",
            WPAY: "Payment",
            WPUB: "Publishers official webpage",
            WXXX: "User defined URL link frame"
        };
        var v = {
                title: ["TIT2", "TT2"],
                artist: ["TPE1", "TP1"],
                album: ["TALB", "TAL"],
                year: ["TYER", "TYE"],
                comment: ["COMM", "COM"],
                track: ["TRCK", "TRK"],
                genre: ["TCON", "TCO"],
                picture: ["APIC", "PIC"],
                lyrics: ["USLT", "ULT"]
            },
            S = ["title", "artist", "album", "track"];
        y.m = function (e, t) {
            e.f([0, g(6, e)], t)
        }, y.n = function (e, t) {
            var o = 0;
            if (4 < (d = e.a(o + 3))) return {
                version: ">2.4"
            };
            var s = e.a(o + 4),
                i = e.d(o + 5, 7),
                n = e.d(o + 5, 6),
                r = e.d(o + 5, 5),
                l = g(o + 6, e);
            o += 10;
            if (n) o = o + ((c = e.i(o)) + 4);
            var a, d = {
                version: "2." + d + "." + s,
                major: d,
                revision: s,
                flags: {
                    unsynchronisation: i,
                    extended_header: n,
                    experimental_indicator: r
                },
                size: l
            };
            if (i) a = {};
            else {
                l = l - 10, i = e, s = t, n = {}, r = d.major;
                for (var u, c = [], h = 0; u = (s || S)[h]; h++) c = c.concat(v[u] || [u]);
                for (s = c; o < l;) {
                    h = i, u = o;
                    var _ = c = null;
                    switch (r) {
                    case 2:
                        a = h.c(u, 3);
                        var f = h.o(u + 3),
                            p = 6;
                        break;
                    case 3:
                        a = h.c(u, 4), f = h.i(u + 4), p = 10;
                        break;
                    case 4:
                        a = h.c(u, 4), f = g(u + 4, h), p = 10
                    }
                    if ("" == a) break;
                    o += p + f, s.indexOf(a) < 0 || (2 < r && (_ = {
                        message: {
                            P: h.d(u + 8, 6),
                            I: h.d(u + 8, 5),
                            M: h.d(u + 8, 4)
                        },
                        k: {
                            K: h.d(u + 8 + 1, 7),
                            F: h.d(u + 8 + 1, 3),
                            H: h.d(u + 8 + 1, 2),
                            C: h.d(u + 8 + 1, 1),
                            u: h.d(u + 8 + 1, 0)
                        }
                    }), u += p, _ && _.k.u && (g(u, h), u += 4, f -= 4), _ && _.k.C || (a in y.b ? c = y.b[a] : "T" == a[0] && (c = y.b["T*"]), c = c ? c(u, f, h, _) : void 0, c = {
                        id: a,
                        size: f,
                        description: a in y.frames ? y.frames[a] : "Unknown",
                        data: c
                    }, a in n ? (n[a].id && (n[a] = [n[a]]), n[a].push(c)) : n[a] = c))
                }
                a = n
            }
            for (var m in v)
                if (v.hasOwnProperty(m)) {
                    e: {
                        for ("string" == typeof (f = v[m]) && (f = [f]), o = void(p = 0); o = f[p]; p++)
                            if (o in a) {
                                e = a[o].data;
                                break e
                            } e = void 0
                    }
                    e && (d[m] = e)
                } for (var b in a) a.hasOwnProperty(b) && (d[b] = a[b]);
            return d
        }, e.ID3v2 = y
    }(this), function () {
        function l(e) {
            var t;
            switch (e) {
            case 0:
                t = "iso-8859-1";
                break;
            case 1:
                t = "utf-16";
                break;
            case 2:
                t = "utf-16be";
                break;
            case 3:
                t = "utf-8"
            }
            return t
        }
        var a = "32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
        ID3v2.b.APIC = function (e, t, o, s, i) {
            i = i || "3", s = e;
            var n = l(o.a(e));
            switch (i) {
            case "2":
                var r = o.c(e + 1, 3);
                e += 4;
                break;
            case "3":
            case "4":
                e += 1 + (r = o.e(e + 1, t - (e - s), n)).g
            }
            return i = o.a(e, 1), i = a[i], e += 1 + (n = o.e(e + 1, t - (e - s), n)).g, {
                format: r.toString(),
                type: i,
                description: n.toString(),
                data: o.l(e, s + t - e)
            }
        }, ID3v2.b.COMM = function (e, t, o) {
            var s = e,
                i = l(o.a(e)),
                n = o.c(e + 1, 3),
                r = o.e(e + 4, t - 4, i);
            return e += 4 + r.g, e = o.e(e, s + t - e, i), {
                language: n,
                O: r.toString(),
                text: e.toString()
            }
        }, ID3v2.b.COM = ID3v2.b.COMM, ID3v2.b.PIC = function (e, t, o, s) {
            return ID3v2.b.APIC(e, t, o, s, "2")
        }, ID3v2.b.PCNT = function (e, t, o) {
            return o.J(e)
        }, ID3v2.b.CNT = ID3v2.b.PCNT, ID3v2.b["T*"] = function (e, t, o) {
            var s = l(o.a(e));
            return o.e(e + 1, t - 1, s).toString()
        }, ID3v2.b.TCON = function (e, t, o) {
            return ID3v2.b["T*"].apply(this, arguments).replace(/^\(\d+\)/, "")
        }, ID3v2.b.TCO = ID3v2.b.TCON, ID3v2.b.USLT = function (e, t, o) {
            var s = e,
                i = l(o.a(e)),
                n = o.c(e + 1, 3),
                r = o.e(e + 4, t - 4, i);
            return e += 4 + r.g, e = o.e(e, s + t - e, i), {
                language: n,
                G: r.toString(),
                L: e.toString()
            }
        }, ID3v2.b.ULT = ID3v2.b.USLT
    }(), function (e) {
        var _ = e.r = {};
        _.types = {
            0: "uint8",
            1: "text",
            13: "jpeg",
            14: "png",
            21: "uint8"
        }, _.j = {
            "Â©alb": ["album"],
            "Â©art": ["artist"],
            "Â©ART": ["artist"],
            aART: ["artist"],
            "Â©day": ["year"],
            "Â©nam": ["title"],
            "Â©gen": ["genre"],
            trkn: ["track"],
            "Â©wrt": ["composer"],
            "Â©too": ["encoder"],
            cprt: ["copyright"],
            covr: ["picture"],
            "Â©grp": ["grouping"],
            keyw: ["keyword"],
            "Â©lyr": ["lyrics"],
            "Â©cmt": ["comment"],
            tmpo: ["tempo"],
            cpil: ["compilation"],
            disk: ["disc"]
        }, _.m = function (e, t) {
            e.f([0, 7], function () {
                ! function e(t, o, s, i) {
                    var n = t.i(o);
                    if (0 == n) i();
                    else {
                        var r = t.c(o + 4, 4); - 1 < ["moov", "udta", "meta", "ilst"].indexOf(r) ? ("meta" == r && (o += 4), t.f([o + 8, o + 8 + 8], function () {
                            e(t, o + 8, n - 8, i)
                        })) : t.f([o + (r in _.j ? 0 : n), o + n + 8], function () {
                            e(t, o + n, s, i)
                        })
                    }
                }(e, 0, e.h(), t)
            })
        }, _.n = function (e) {
            var t = {};
            return function e(t, o, s, i, n) {
                n = void 0 === n ? "" : n + "  ";
                for (var r = s; r < s + i;) {
                    var l = o.i(r);
                    if (0 == l) break;
                    var a = o.c(r + 4, 4);
                    if (-1 < ["moov", "udta", "meta", "ilst"].indexOf(a)) {
                        "meta" == a && (r += 4), e(t, o, r + 8, l - 8, n);
                        break
                    }
                    if (_.j[a]) {
                        var d = o.o(r + 16 + 1),
                            u = _.j[a];
                        if (d = _.types[d], "trkn" == a) t[u[0]] = o.a(r + 16 + 11), t.count = o.a(r + 16 + 13);
                        else {
                            a = r + 16 + 4 + 4;
                            var c, h = l - 16 - 4 - 4;
                            switch (d) {
                            case "text":
                                c = o.e(a, h, "UTF-8");
                                break;
                            case "uint8":
                                c = o.w(a);
                                break;
                            case "jpeg":
                            case "png":
                                c = {
                                    k: "image/" + d,
                                    data: o.l(a, h)
                                }
                            }
                            t[u[0]] = "comment" === u[0] ? {
                                text: c
                            } : c
                        }
                    }
                    r += l
                }
            }(t, e, 0, e.h()), t
        }, e.ID4 = e.r
    }(this), function (a) {
        var e = navigator.platform,
            t = !1;
        if ("iPad" != e && "iPhone" != e || (t = !0), t) {
            var o = navigator.userAgent,
                s = !1;
            if (-1 == o.indexOf("6") && -1 == o.indexOf("7") || (s = !0), s) {
                var i = {},
                    n = {},
                    r = a.setTimeout,
                    d = a.setInterval,
                    l = a.clearTimeout,
                    u = a.clearInterval;
                a.setTimeout = function () {
                    return c(r, i, arguments)
                }, a.setInterval = function () {
                    return c(d, n, arguments)
                }, a.clearTimeout = function (e) {
                    var t = i[e];
                    t && (delete i[e], l(t.id))
                }, a.clearInterval = function (e) {
                    var t = n[e];
                    t && (delete n[e], u(t.id))
                }, a.addEventListener("scroll", function () {
                    var e;
                    for (e in i) h(r, l, i, e);
                    for (e in n) h(d, u, n, e)
                })
            }
        }

        function c(e, t, o) {
            var s, i = o[0],
                n = e === d;
            return o[0] = function () {
                i && (i.apply(a, arguments), n || (delete t[s], i = null))
            }, s = e.apply(a, o), t[s] = {
                args: o,
                created: Date.now(),
                cb: i,
                id: s
            }, s
        }

        function h(e, t, o, s) {
            var i = o[s];
            if (i) {
                var n = e === d;
                if (t(i.id), !n) {
                    var r = i.args[1],
                        l = Date.now() - i.created;
                    l < 0 && (l = 0), (r -= l) < 0 && (r = 0), i.args[1] = r
                }
                i.args[0] = function () {
                    i.cb && (i.cb.apply(a, arguments), n || (delete o[s], i.cb = null))
                }, i.created = Date.now(), i.id = e.apply(a, i.args)
            }
        }
    }(window), function (window) {
        var FWDRAP = function (props) {
                var self = this;
                if (this.listeners = {
                        events_ar: []
                    }, FWDRAP.instaces_ar.push(this), self.mainFolderPath_str = props.mainFolderPath, self.mainFolderPath_str.lastIndexOf("/") + 1 != self.mainFolderPath_str.length && (self.mainFolderPath_str += "/"), this.skinPath_str = props.skinPath, self.skinPath_str.lastIndexOf("/") + 1 != self.skinPath_str.length && (self.skinPath_str += "/"), this.warningIconPath_str = self.mainFolderPath_str + this.skinPath_str + "warningIcon.png", this.useYoutube_bl = props.useYoutube || "no", this.useYoutube_bl = "yes" == self.useYoutube_bl, this.useVideo_bl = props.useVideo || "no", this.useVideo_bl = "yes" == self.useVideo_bl, this.instanceName_str = props.instanceName, this.instanceName_str) {
                    if (window[this.instanceName_str]) alert("FWDRAP instance name " + this.instanceName_str + " is already defined and contains a different instance reference, set a different instance name.");
                    else if (window[this.instanceName_str] = this, -1 == document.cookie.indexOf("FWDRAP=" + self.instanceName_str) || self.isMobile_bl) {
                        var recoverDecodingErrorDate, recoverSwapAudioCodecDate;
                        if (FWDRAP.instaces_ar.push(this), self.init = function () {
                                var e, t, o, s, i;
                                (FWDTweenLite.ticker.useRAF(!1), this.props_obj = props, this.props_obj) ? (this.useOnlyAPI_bl = self.props_obj.useOnlyAPI, this.useOnlyAPI_bl = "yes" == self.useOnlyAPI_bl, this.props_obj.parentId || this.useOnlyAPI_bl ? FWDRAPUtils.getChildById(self.props_obj.parentId) || this.useOnlyAPI_bl ? (this.stageContainer = FWDRAPUtils.getChildById(self.props_obj.parentId), this.ws = null, this.data = null, this.customContextMenu_do = null, this.info_do = null, this.main_do = null, this.preloader_do = null, this.controller_do = null, this.categories_do = null, this.playlist_do = null, this.videoScreen_do = null, this.flash_do = null, this.flashObject = null, this.facebookShare = null, this.flashObjectMarkup_str = null, this.popupWindowBackgroundColor = this.props_obj.popupWindowBackgroundColor || "#000000", this.prevCatId = -1, this.catId = -1, this.id = -1, this.prevId = -1, this.lastPercentPlayed = 0, this.totalAudio = 0, this.stageWidth = 0, this.stageHeight = 0, this.maxWidth = self.props_obj.maxWidth || 2e3, this.maxHeight = 0, this.popupWindowWidth = self.props_obj.popupWindowWidth || 500, this.popupWindowHeight = self.props_obj.popupWindowHeight || 400, this.resizeHandlerId_to, this.resizeHandler2Id_to, this.hidePreloaderId_to, this.orientationChangeId_to, this.showCatWidthDelayId_to, this.hasOpenedInPopup_bl = !1, this.isAPIReady_bl = !1, this.isPlaylistLoaded_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.useDeepLinking_bl = self.props_obj.useDeepLinking, this.useDeepLinking_bl = "yes" == self.useDeepLinking_bl, this.openInPopup_bl = !1, self.initializeOnlyWhenVisible_bl = self.props_obj.initializeOnlyWhenVisible, self.initializeOnlyWhenVisible_bl = "yes" == self.initializeOnlyWhenVisible_bl, setTimeout(function () {
                                    try {
                                        if (window.opener && window.opener.openedPlayerInstance && window.opener.openedPlayerInstance == self.instanceName_str) self.openInPopup_bl = !0, self.popupWindow = window.opener[self.instanceName_str], window.opener[self.instanceName_str].removeAndDisablePlayer();
                                        else if (window.opener && window.opener.openedPlayerInstance && window.opener.openedPlayerInstance != self.instanceName_str) return
                                    } catch (e) {}
                                    self.isMobile_bl = FWDRAPUtils.isMobile, self.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, self.setupmain_do(), self.startResizeHandler(), self.initializeOnlyWhenVisible_bl ? (window.addEventListener("scroll", self.onInitlalizeScrollHandler), self.initTimer_to = setTimeout(self.onInitlalizeScrollHandler, 500)) : self.setupPlayer()
                                }, 49), self.googleAnalyticsTrackingCode = self.props_obj.googleAnalyticsTrackingCode, !window.ga && self.googleAnalyticsTrackingCode ? (e = window, t = document, o = "ga", e.GoogleAnalyticsObject = o, e.ga = e.ga || function () {
                                    (e.ga.q = e.ga.q || []).push(arguments)
                                }, e.ga.l = 1 * new Date, s = t.createElement("script"), i = t.getElementsByTagName("script")[0], s.async = 1, s.src = "https://www.google-analytics.com/analytics.js", i.parentNode.insertBefore(s, i), ga("create", self.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview")) : window.ga && self.googleAnalyticsTrackingCode && (ga("create", self.googleAnalyticsTrackingCode, "auto"), ga("send", "pageview"))) : alert("FWDRAP holder div is not found, please make sure that the div exsists and the id is correct! " + self.props_obj.parentId) : alert("Property parentId is not defined in the FWDRAP constructor, self property represents the div id into which the megazoom is added as a child!")) : alert("FWDRAP constructor properties object is not defined!")
                            }, self.onInitlalizeScrollHandler = function () {
                                var e = FWDRAPUtils.getScrollOffsets();
                                self.pageXOffset = e.x, self.pageYOffset = e.y, self.main_do.getRect().top >= -self.stageHeight && self.main_do.getRect().top < self.ws.h && (window.removeEventListener("scroll", self.onInitlalizeScrollHandler), self.setupPlayer())
                            }, this.setupPlayer = function () {
                                clearTimeout(self.initTimer_to), self.setupInfo(), self.setupData()
                            }, this.popup = function () {
                                if (!self.popupWindow || self.popupWindow.closed) {
                                    var e = screen.width / 2 - self.popupWindowWidth / 2,
                                        t = screen.height / 2 - self.popupWindowHeight / 2,
                                        o = "no";
                                    FWDRAPUtils.isSafari && (o = "yes");
                                    try {
                                        FWDRAPUtils.isMobile ? self.popupWindow = window.open(location.href) : self.popupWindow = window.open(location.href, "", "location=" + o + ", width=" + self.popupWindowWidth + ", height=" + self.popupWindowHeight + ", top=" + t + ", left=" + e), self.popupWindow && (self.stageContainer.style.display = "none", self.preloader_do && self.preloader_do.hide(!1), self.data.closeData(), self.stop(), window.openedPlayerInstance = self.instanceName_str, self.hasOpenedInPopup_bl = !0, self.isAPIReady_bl = !1), self.stopResizeHandler(), self.dispatchEvent(FWDRAP.POPUP)
                                    } catch (e) {}
                                }
                            }, this.removeAndDisablePlayer = function () {
                                try {
                                    self.stageContainer.style.display = "none"
                                } catch (e) {}
                            }, self.setupmain_do = function () {
                                self.main_do = new FWDRAPDisplayObject("div", "relative"), self.main_do.getStyle().msTouchAction = "none", self.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", self.main_do.setBackfaceVisibility(), self.main_do.setOverflow("visible"), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && self.main_do.setSelectable(!1), self.openInPopup_bl ? (FWDRAPUtils.isIEAndLessThen9 || (document.getElementsByTagName("body")[0].style.display = "none"), document.documentElement.appendChild(self.main_do.screen), self.main_do.setPosition("fixed"), self.main_do.getStyle().zIndex = "2147483646", document.documentElement.style.overflow = "hidden", document.documentElement.style.backgroundColor = self.popupWindowBackgroundColor, self.main_do.setBkColor(self.popupWindowBackgroundColor), self.main_do.getStyle().width = "100%", self.main_do.setHeight(3e3)) : (self.stageContainer.style.overflow = "hidden", self.stageContainer.style.height = "0px", self.stageContainer.appendChild(self.main_do.screen))
                            }, self.setupInfo = function () {
                                FWDRAPInfo.setPrototype(), self.info_do = new FWDRAPInfo(self, self.warningIconPath_str)
                            }, self.startResizeHandler = function () {
                                window.addEventListener ? window.addEventListener("resize", self.onResizeHandler) : window.attachEvent && window.attachEvent("onresize", self.onResizeHandler), self.onResizeHandler(!0), self.resizeHandlerId_to = setTimeout(function () {
                                    self.resizeHandler(!0)
                                }, 50)
                            }, self.stopResizeHandler = function () {
                                clearTimeout(self.resizeHandlerId_to), clearTimeout(self.resizeHandler2Id_to), clearTimeout(self.orientationChangeId_to), window.removeEventListener ? window.removeEventListener("resize", self.onResizeHandler) : window.detachEvent && window.detachEvent("onresize", self.onResizeHandler)
                            }, self.onResizeHandler = function (e) {
                                self.resizeHandler(), clearTimeout(self.resizeHandler2Id_to), self.resizeHandler2Id_to = setTimeout(function () {
                                    self.resizeHandler()
                                }, 300)
                            }, self.resizeHandler = function (e) {
                                self.ws = FWDRAPUtils.getViewportSize(), self.openInPopup_bl ? self.stageWidth = self.ws.w : (self.stageContainer.style.width = "100%", self.stageContainer.offsetWidth > self.maxWidth && !self.openInPopup_bl && (self.stageContainer.style.width = self.maxWidth + "px"), self.stageWidth = self.stageContainer.offsetWidth, self.controller_do && (self.maxHeight = self.controller_do.h), self.stageHeight = self.maxHeight, self.main_do.setWidth(self.stageWidth)), self.preloader_do && self.positionPreloader(), self.controller_do && self.controller_do.resizeAndPosition(e), self.categories_do && self.categories_do.resizeAndPosition(), self.playlist_do && self.playlist_do.resizeAndPosition(), self.info_do && self.info_do.isShowed_bl && self.info_do.positionAndResize(), self.shareWindow_do && self.shareWindow_do.isShowed_bl && self.shareWindow_do.positionAndResize(), self.passWindow_do && self.passWindow_do.isShowed_bl && self.passWindow_do.positionAndResize(), self.playbackRateWindow_do && self.playbackRateWindow_do.isShowed_bl && self.playbackRateWindow_do.positionAndResize(), self.positionVideoHolder(), self.data && !e ? self.setStageContainerHeight(!1) : self.setStageContainerHeight(!0)
                            }, this.setStageContainerHeight = function (e) {
                                if (self.controller_do) {
                                    if (self.openInPopup_bl) return self.ws || (self.ws = FWDRAPUtils.getViewportSize()), self.stageWidth = self.ws.w, self.main_do.setX(0), self.main_do.setY(0), self.main_do.getStyle().width = "100%", self.main_do.setHeight(3e3), self.controller_do.setX(0), FWDAnimation.killTweensOf(self.controller_do), e || (self.isFullScreen_bl || self.controller_do.setY(0), self.controller_do.setX(0)), self.isFullScreen_bl || self.controller_do.setY(0), self.controller_do.setX(0), void(self.playlist_do && (FWDAnimation.killTweensOf(self.playlist_do), self.playlist_do.setX(0), e || self.playlist_do.setY(self.controller_do.h), self.playlist_do.setX(0), self.playlist_do.setY(self.controller_do.h)));
                                    self.playlist_do && self.playlist_do.isShowed_bl && (self.maxHeight += self.playlist_do.h), self.playlist_do && self.playlist_do.setY(self.controller_do.h), FWDAnimation.killTweensOf(self.stageContainer), e ? self.playlist_do && self.playlist_do.isShowed_bl ? (self.main_do.setHeight(self.controller_do.h + self.playlist_do.h), FWDAnimation.to(self.stageContainer, .8, {
                                        css: {
                                            height: self.controller_do.h + self.playlist_do.h
                                        },
                                        ease: Expo.easeInOut
                                    })) : (self.main_do.setHeight(self.controller_do.h), FWDAnimation.to(self.stageContainer, .8, {
                                        css: {
                                            height: self.controller_do.h
                                        },
                                        ease: Expo.easeInOut
                                    })) : self.playlist_do && self.playlist_do.isShowed_bl ? (self.main_do.setHeight(self.controller_do.h + self.playlist_do.h), self.stageContainer.style.height = self.controller_do.h + self.playlist_do.h + "px") : (self.main_do.setHeight(self.controller_do.h), self.stageContainer.style.height = self.controller_do.h + "px")
                                } else self.openInPopup_bl || (self.main_do.setHeight(self.stageHeight), self.stageContainer.style.height = self.stageHeight + "px")
                            }, this.setupContextMenu = function () {
                                self.customContextMenu_do = new FWDRAPContextMenu(self.main_do, self.data.rightClickContextMenu_str)
                            }, this.setupMainInstances = function () {
                                self.controller_do || (FWDRAP.hasHTML5Audio && self.setupAudioScreen(), self.setupController(), self.setupVideosHolder(), self.setupHider(), self.useYoutube_bl && self.setupYoutubePlayer(), self.useVideo_bl && self.setupVideoScreen(), self.data.showShareButton_bl && self.setupShareWindow(), self.data.showPlaybackRateButton_bl && self.setupPlaybackRateWindow(), self.setupPasswordWindow(), self.data.showPlaylistsButtonAndPlaylists_bl && self.setupCategories(), self.data.showPlayListButtonAndPlaylist_bl && self.setupPlaylist(), self.controller_do.resizeAndPosition(), self.data.addKeyboardSupport_bl && self.addKeyboardSupport())
                            }, this.addKeyboardSupport = function () {
                                document.addEventListener ? (document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)) : document.attachEvent && (document.attachEvent("onkeydown", this.onKeyDownHandler), document.attachEvent("onkeyup", this.onKeyUpHandler))
                            }, this.onKeyDownHandler = function (e) {
                                if (!self.isSpaceDown_bl && self.hasStartedToPlay_bl && !FWDRAP.isSearchedFocused_bl && (self.isSpaceDown_bl = !0, e.preventDefault && e.preventDefault(), self == FWDRAP.keyboardCurInstance)) {
                                    if (32 == e.keyCode) {
                                        if (self.audioType_str == FWDRAP.YOUTUBE) {
                                            if (!self.ytb_do.isSafeToBeControlled_bl) return;
                                            self.ytb_do.togglePlayPause()
                                        } else if (self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do) {
                                            if (!self.audioScreen_do.isSafeToBeControlled_bl) return;
                                            self.audioScreen_do.togglePlayPause()
                                        } else {
                                            if (!self.videoScreen_do.isSafeToBeControlled_bl) return;
                                            self.videoScreen_do && self.videoScreen_do.togglePlayPause()
                                        }
                                        return e.preventDefault && e.preventDefault(), !1
                                    }
                                    if (77 == e.keyCode) 0 != self.volume && (self.lastVolume = self.volume), 0 != self.volume ? self.volume = 0 : self.volume = self.lastVolume, self.setVolume(self.volume);
                                    else if (38 == e.keyCode) self.volume += .1, 1 < self.volume && (self.volume = 1), self.setVolume(self.volume);
                                    else if (40 == e.keyCode) self.volume -= .1, self.volume < 0 && (self.volume = 0), self.setVolume(self.volume);
                                    else if (77 == e.keyCode) self.volume < 0 && (self.volume = 0), self.setVolume(self.volume);
                                    else if (39 != e.keyCode || self.isAdd_bl) {
                                        if (37 == e.keyCode && !self.isAdd_bl) {
                                            5 == (t = self.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDRAPUtils.getSecondsFromString(t), t -= 5, 5 == (t = FWDRAPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), self.scrubbAtTime(t)
                                        }
                                    } else {
                                        var t;
                                        5 == (t = self.getCurrentTime()).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), t = FWDRAPUtils.getSecondsFromString(t), t += 5, 5 == (t = FWDRAPUtils.formatTime(t)).length && (t = "00:" + t), 7 == t.length && (t = "0" + t), self.scrubbAtTime(t)
                                    }
                                }
                            }, this.onKeyUpHandler = function (e) {
                                self.isSpaceDown_bl = !1
                            }, this.setupPasswordWindow = function () {
                                FWDRAPPassword.setPrototype(), self.passWindow_do = new FWDRAPPassword(self.data, self), self.passWindow_do.addListener(FWDRAPPassword.CORRECT, self.passordCorrect)
                            }, this.passordCorrect = function () {
                                self.passWindow_do.hide(), self.hasPassedPassowrd_bl = !0, self.play()
                            }, this.setupClickScreen = function () {
                                self.dumyClick_do = new FWDRAPDisplayObject("div"), self.dumyClick_do.getStyle().width = "100%", self.dumyClick_do.getStyle().height = "100%", FWDRAPUtils.isIE && (self.dumyClick_do.setBkColor("#00FF00"), self.dumyClick_do.setAlpha(1e-5)), self.dumyClick_do.screen.addEventListener ? self.dumyClick_do.screen.addEventListener("click", self.playPauseClickHandler) : self.dumyClick_do.screen.attachEvent && self.dumyClick_do.screen.attachEvent("onclick", self.playPauseClickHandler)
                            }, this.playPauseClickHandler = function (e) {
                                2 != e.button && (self.disableClick_bl || (self.firstTapPlaying_bl = self.isPlaying_bl, (FWDRAP.keyboardCurInstance = self).audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.togglePlayPause() : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do && self.videoScreen_do.togglePlayPause()))
                            }, this.addDoubleClickSupport = function () {
                                !self.isMobile_bl && self.dumyClick_do.screen.addEventListener ? (self.dumyClick_do.screen.addEventListener("mousedown", self.onFirstDown), FWDRAPUtils.isIEWebKit && self.dumyClick_do.screen.addEventListener("dblclick", self.onSecondDown)) : self.isMobile_bl ? self.dumyClick_do.screen.addEventListener("touchstart", self.onFirstDown) : self.dumyClick_do.screen.addEventListener && self.dumyClick_do.screen.addEventListener("mousedown", self.onFirstDown)
                            }, this.onFirstDown = function (e) {
                                if (2 != e.button) {
                                    self.isFullscreen_bl && e.preventDefault && e.preventDefault();
                                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                                    self.firstTapX = t.screenX, self.firstTapY = t.screenY, self.firstTapPlaying_bl = self.isPlaying_bl, FWDRAPUtils.isIEWebKit || (self.isMobile_bl ? (self.dumyClick_do.screen.addEventListener("touchstart", self.onSecondDown), self.dumyClick_do.screen.removeEventListener("touchstart", self.onFirstDown)) : self.dumyClick_do.screen.addEventListener && (self.dumyClick_do.screen.addEventListener("mousedown", self.onSecondDown), self.dumyClick_do.screen.removeEventListener("mousedown", self.onFirstDown)), clearTimeout(self.secondTapId_to), self.secondTapId_to = setTimeout(self.doubleTapExpired, 250))
                                }
                            }, this.doubleTapExpired = function () {
                                clearTimeout(self.secondTapId_to), self.isMobile_bl ? (self.dumyClick_do.screen.removeEventListener("touchstart", self.onSecondDown), self.dumyClick_do.screen.addEventListener("touchstart", self.onFirstDown)) : self.dumyClick_do.screen.addEventListener && (self.dumyClick_do.screen.removeEventListener("mousedown", self.onSecondDown), self.dumyClick_do.screen.addEventListener("mousedown", self.onFirstDown))
                            }, this.onSecondDown = function (e) {
                                e.preventDefault && e.preventDefault();
                                var t, o, s = FWDRAPUtils.getViewportMouseCoordinates(e);
                                FWDRAPUtils.isIEWebKit && (self.firstTapPlaying_bl = self.isPlaying_bl), e.touches && 1 != e.touches.length || (t = Math.abs(s.screenX - self.firstTapX), o = Math.abs(s.screenY - self.firstTapY), self.isMobile_bl && (10 < t || 10 < o) || !self.isMobile_bl && (2 < t || 2 < o) || (self.switchFullScreenOnDoubleClick(), FWDRAPUtils.isIEWebKit || (self.firstTapPlaying_bl ? self.play() : self.pause())))
                            }, this.switchFullScreenOnDoubleClick = function () {
                                self.disableClick(), self.isFullScreen_bl ? self.goNormalScreen() : self.goFullScreen()
                            }, this.setupHider = function () {
                                FWDRAPHider.setPrototype(), self.hider = new FWDRAPHider(self.main_do, self.controller_do.videoControllerHolder_do, 2e3), self.hider.addListener(FWDRAPHider.SHOW, self.hiderShowHandler), self.hider.addListener(FWDRAPHider.HIDE, self.hiderHideHandler), self.hider.addListener(FWDRAPHider.HIDE_COMPLETE, self.hiderHideCompleteHandler)
                            }, this.hiderShowHandler = function () {
                                self.controller_do && self.controller_do.showVideoContoller(!0), self.showCursor()
                            }, this.hiderHideHandler = function () {
                                FWDRAPUtils.isIphone || ((self.audioType_str != FWDRAP.VIDEO || !self.videoScreen_do || self.videoScreen_do.isPlaying_bl) && (self.audioType_str != FWDRAP.YOUTUBE || !self.ytb_do || self.ytb_do.isPlaying_bl) ? FWDRAPUtils.hitTest(self.controller_do.videoControllerHolder_do.screen, self.hider.globalX, self.hider.globalY) ? self.hider.reset() : (self.hideCursor(), self.controller_do.hideVideoContoller(!0)) : self.hider.reset())
                            }, this.hiderHideCompleteHandler = function () {}, this.setupVideosHolder = function () {
                                this.videosHolder_do = new FWDRAPDisplayObject("div"), self.videosHolder_do.getStyle().background = "url('" + self.data.thumbnailBkPath_str + "')", this.controller_do.mainHolder_do.addChild(this.videosHolder_do), self.data.showVideoFullScreenButton_bl && !self.openInPopup_bl && (this.setupClickScreen(), this.setupDisableClick(), this.addDoubleClickSupport(), this.fullScreenButtonOverlay_do = new FWDRAPDisplayObject("div"), self.fullScreenButtonOverlay_do.getStyle().background = "url('" + self.data.thumbnailBkPath_str + "')", this.fullScreenButtonOverlay_do.setWidth(self.data.controllerHeight), this.fullScreenButtonOverlay_do.setHeight(self.data.controllerHeight), FWDRAPSimpleButton.setPrototype(), -1 != this.skinPath_str.indexOf("hex_white") ? self.largePlayButton_do = new FWDRAPSimpleButton(self.data.largePlayN_img, self.data.largePlayS_str, void 0, !0, self.data.useHEXColorsForSkin_bl, self.data.normalButtonsColor_str, "#FFFFFF") : self.largePlayButton_do = new FWDRAPSimpleButton(self.data.largePlayN_img, self.data.largePlayS_str, void 0, !0, self.data.useHEXColorsForSkin_bl, self.data.normalButtonsColor_str, self.data.selectedButtonsColor_str), self.largePlayButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, self.largePlayButtonUpHandler), self.largePlayButton_do.hide(), FWDRAPComplexButton.setPrototype(), self.fullScreenButton_do = new FWDRAPComplexButton(self.data.fullScreenN_img, self.data.fullScreenS_str, self.data.normalScreenN_img, self.data.normalScreenS_str, !0, self.data.useHEXColorsForSkin_bl, self.data.normalButtonsColor_str, self.data.selectedButtonsColor_str), self.data.showButtonsToolTips_bl && (FWDRAPToolTip.setPrototype(), self.fullscreenToolTip_do = new FWDRAPToolTip(self.fullScreenButton_do, self.data.toopTipBk_str, self.data.toopTipPointer_str, self.data.toopTipPointerUp_str, "full screen / normal screen", self.data.toolTipsButtonFontColor_str, self.data.toolTipsButtonsHideDelay), document.documentElement.appendChild(self.fullscreenToolTip_do.screen), self.fullScreenButton_do.addListener(FWDRAPComplexButton.SHOW_TOOLTIP, self.fullScreenShowToolTipHandler)), self.fullScreenButton_do.addListener(FWDRAPComplexButton.MOUSE_UP, self.toggleFullScreen), this.videosHolder_do.setWidth(self.data.controllerHeight), this.videosHolder_do.setHeight(self.data.controllerHeight), self.checkShowFullScreenButtonHitTest(), setTimeout(function () {
                                    self.videosHolder_do.addChild(self.dumyClick_do), self.disableClick_do && self.main_do.addChild(self.disableClick_do), self.videosHolder_do.addChild(self.fullScreenButtonOverlay_do), self.controller_do.mainHolder_do.contains(self.fullScreenButton_do) || self.videosHolder_do.addChild(self.fullScreenButton_do), self.videosHolder_do.addChild(self.largePlayButton_do), self.hideFullScreenButtonAndOverlay(!1, !0)
                                }, 50))
                            }, this.largePlayButtonUpHandler = function () {
                                self.disableClick(), self.largePlayButton_do.hide(), self.play()
                            }, this.fullScreenShowToolTipHandler = function (e) {
                                self.controller_do.showToolTip(self.fullScreenButton_do, self.fullscreenToolTip_do, e.e)
                            }, this.toggleFullScreen = function () {
                                self.isMobile_bl && self.fullScreenButton_do.alpha < .5 ? self.showFullScreenButtonAndOverlay(!0) : 1 == self.fullScreenButton_do.currentState ? self.goFullScreen() : self.goNormalScreen()
                            }, this.positionVideoHolder = function () {
                                if (self.isFullScreen_bl) {
                                    var e = FWDRAPUtils.getViewportSize();
                                    self.videosHolder_do.setWidth(e.w), self.videosHolder_do.setHeight(e.h), self.largePlayButton_do.setX(parseInt((e.w - self.largePlayButton_do.w) / 2)), self.largePlayButton_do.setY(parseInt((e.h - self.largePlayButton_do.h) / 2))
                                } else self.videosHolder_do && (self.videosHolder_do.setWidth(self.data.controllerHeight), self.videosHolder_do.setHeight(self.data.controllerHeight))
                            }, this.checkShowFullScreenButtonHitTest = function () {
                                self.fullScreenButtonOverlay_do && self.fullScreenButtonOverlay_do.screen.addEventListener && (self.fullScreenButtonOverlay_do.screen.addEventListener("mousemove", self.checkShowFullScreenButtonHitTestHandler), window.removeEventListener("mousemove", self.checkFullScreenAndOverlayHit))
                            }, this.checkShowFullScreenButtonHitTestHandler = function () {
                                self.isFullScreen_bl || (self.fullScreenButtonOverlay_do.screen.addEventListener && (self.fullScreenButtonOverlay_do.screen.removeEventListener("mousemove", self.checkShowFullScreenButtonHitTestHandler), window.addEventListener("mousemove", self.checkFullScreenAndOverlayHit)), self.showFullScreenButtonAndOverlay(!0))
                            }, this.checkFullScreenAndOverlayHit = function (e) {
                                if (!self.isFullScreen_bl) {
                                    self.fullScreenButtonOverlay_do.screen.EventListener && self.fullScreenButtonOverlay_do.screen.removeEventListener("mousemove", self.showFullScreenButtonAndOverlay);
                                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                                    FWDRAPUtils.hitTest(self.fullScreenButtonOverlay_do.screen, t.screenX, t.screenY) || (self.checkShowFullScreenButtonHitTest(), self.hideFullScreenButtonAndOverlay(!0))
                                }
                            }, this.showFullScreenButtonAndOverlay = function (e) {
                                self.isFullScreenButtonAndOverlayShowed_bl || (this.isFullScreenButtonAndOverlayShowed_bl = !0, FWDAnimation.killTweensOf(self.fullScreenButton_do), FWDAnimation.killTweensOf(self.fullScreenButtonOverlay_do), e ? (FWDAnimation.to(self.fullScreenButton_do, .8, {
                                    alpha: 1,
                                    ease: Expo.easeOut
                                }), FWDAnimation.to(self.fullScreenButtonOverlay_do, .8, {
                                    alpha: .6,
                                    ease: Expo.easeOut
                                })) : (self.fullScreenButton_do.setAlpha(1), self.fullScreenButtonOverlay_do.setAlpha(.6)), self.positionVideoHolder())
                            }, this.hideFullScreenButtonAndOverlay = function (e, t) {
                                (self.isFullScreenButtonAndOverlayShowed_bl || t) && (self.isFullScreenButtonAndOverlayShowed_bl = !1, self.fullScreenButton_do && (FWDAnimation.killTweensOf(self.fullScreenButton_do), FWDAnimation.killTweensOf(self.fullScreenButtonOverlay_do), e ? (0 == self.videosHolder_do.x && FWDAnimation.to(self.fullScreenButton_do, .8, {
                                    alpha: 0,
                                    ease: Expo.easeOut
                                }), FWDAnimation.to(self.fullScreenButtonOverlay_do, .8, {
                                    alpha: 0,
                                    ease: Expo.easeOut
                                })) : (0 == self.videosHolder_do.x && self.fullScreenButton_do.setAlpha(0), self.fullScreenButtonOverlay_do.setAlpha(0))))
                            }, this.setupDisableClick = function () {
                                self.disableClick_do = new FWDRAPDisplayObject("div")
                            }, this.disableClick = function () {
                                self.disableClick_bl = !0, clearTimeout(self.disableClickId_to), self.disableClick_do && (self.disableClick_do.getStyle().width = "5000px", self.disableClick_do.getStyle().height = "5000px"), self.disableClickId_to = setTimeout(function () {
                                    self.disableClick_do && (self.disableClick_do.setWidth(0), self.disableClick_do.setHeight(0)), self.disableClick_bl = !1
                                }, 500)
                            }, this.goFullScreen = function () {
                                if (self.isAPIReady_bl) {
                                    document.addEventListener && (document.addEventListener("fullscreenchange", self.onFullScreenChange), document.addEventListener("mozfullscreenchange", self.onFullScreenChange), document.addEventListener("webkitfullscreenchange", self.onFullScreenChange), document.addEventListener("MSFullscreenChange", self.onFullScreenChange)), document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? document.documentElement.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen(), self.disableClick(), self.main_do.getStyle().position = "fixed", self.controller_do.setOverflow("visible"), self.controller_do.mainHolder_do.setOverflow("visible"), document.documentElement.style.overflow = "hidden", self.main_do.getStyle().zIndex = 9999999999998, self.playlist_do && self.playlist_do.setVisible(!1), self.controller_do.goFullScreen(), self.controller_do.videoControllerHolder_do.addChild(self.fullScreenButton_do), self.videosHolder_do.setX(0), self.fullScreenButtonOverlay_do.setVisible(!1), self.isFullScreen_bl = !0, self.fullScreenButton_do.setButtonState(0);
                                    var e = FWDRAPUtils.getScrollOffsets();
                                    self.lastX = e.x, self.lastY = e.y, self.hider && self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do && self.videoScreen_do.isPlaying_bl ? self.hider.start() : self.hider && self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do && self.ytb_do.isPlaying_bl && self.hider.start(), self.playlist_do && self.playlist_do.ascDscButton_do && self.playlist_do.ascDscButton_do.setAlpha(0), self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do && !self.videoScreen_do.isPlaying_bl ? self.largePlayButton_do.show() : self.audioType_str != FWDRAP.YOUTUBE || !self.ytb_do || self.ytb_do.isPlaying_bl || self.isMobile_bl || self.largePlayButton_do.show(), window.scrollTo(0, 0), self.isMobile_bl && window.addEventListener("touchmove", self.disableFullScreenOnMobileHandler), self.resizeHandler(!0)
                                }
                            }, this.disableFullScreenOnMobileHandler = function (e) {
                                e.preventDefault && e.preventDefault()
                            }, this.goNormalScreen = function () {
                                self.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), self.disableClick(), self.addmain_doToTheOriginalParent(), self.showCursor(), self.fullScreenButton_do && self.fullScreenButton_do.setButtonState(1), self.playlist_do && self.playlist_do.ascDscButton_do && self.playlist_do.ascDscButton_do.setAlpha(1))
                            }, this.addmain_doToTheOriginalParent = function () {
                                self.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", self.onFullScreenChange), document.removeEventListener("mozfullscreenchange", self.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", self.onFullScreenChange), document.removeEventListener("MSFullscreenChange", self.onFullScreenChange)), self.isFullScreen_bl = !1, self.isEmbedded_bl || (FWDRAPUtils.isIEAndLessThen9 ? document.documentElement.style.overflow = "auto" : document.documentElement.style.overflow = "visible", self.main_do.getStyle().position = "relative"), self.controller_do.setOverflow("hidden"), self.controller_do.mainHolder_do.setOverflow("hidden"), self.controller_do.goNormalScreen(), self.videosHolder_do.addChild(self.fullScreenButton_do), document.documentElement.style.overflow = "visible", self.main_do.getStyle().zIndex = 0, self.playlist_do && (self.playlist_do.setVisible(!0), self.playlist_do.ascDscButton_do && self.playlist_do.ascDscButton_do.setAlpha(1)), self.hideFullScreenButtonAndOverlay(!1), self.fullScreenButtonOverlay_do.setVisible(!0), self.checkShowFullScreenButtonHitTest(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.hider && (self.hider.reset(), self.hider.stop()), self.resizeHandler(!0), window.scrollTo(self.lastX, self.lastY), FWDRAPUtils.isIE || setTimeout(function () {
                                    window.scrollTo(self.lastX, self.lastY)
                                }, 150), self.isMobile_bl && window.removeEventListener("touchmove", self.disableFullScreenOnMobileHandler))
                            }, this.onFullScreenChange = function (e) {
                                document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (self.fullScreenButton_do.setButtonState(1), self.addmain_doToTheOriginalParent(), self.isFullScreen_bl = !1, self.resizeHandler(!0))
                            }, this.hideCursor = function () {
                                document.documentElement.style.cursor = "none", self.dumyClick_do && (self.dumyClick_do.getStyle().cursor = "none"), document.getElementsByTagName("body")[0].style.cursor = "none"
                            }, this.showCursor = function () {
                                document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto", self.dumyClick_do && (self.dumyClick_do.getStyle().cursor = "auto")
                            }, this.setupData = function () {
                                FWDRAPAudioData.setPrototype(), self.data = new FWDRAPAudioData(self.props_obj, self.rootElement_el, self), self.data.addListener(FWDRAPAudioData.UPDATE_IMAGE, self.onImageUpdate), self.data.addListener(FWDRAPAudioData.PRELOADER_LOAD_DONE, self.onPreloaderLoadDone), self.data.addListener(FWDRAPAudioData.SOUNDCLOUD_TRACK_READY, self.onSoundClooudReady), self.data.addListener(FWDRAPAudioData.RADIO_TRACK_READY, self.onRadioReady), self.data.addListener(FWDRAPAudioData.RADIO_TRACK_UPDATE, self.onRadioTrackUpdate), self.data.addListener(FWDRAPAudioData.LOAD_ERROR, self.dataLoadError), self.data.addListener(FWDRAPAudioData.SKIN_PROGRESS, self.dataSkinProgressHandler), self.data.addListener(FWDRAPAudioData.SKIN_LOAD_COMPLETE, self.dataSkinLoadComplete), self.data.addListener(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE, self.dataPlayListLoadComplete)
                            }, self.onSoundClooudReady = function (e) {
                                self.data.playlist_ar[self.id].source = e.source, self.setSource(), self.isPlaylistItemClicked_bl && self.play()
                            }, self.onImageUpdate = function (e) {
                                self.controller_do.loadThumb(e.image)
                            }, self.onRadioReady = function (e) {
                                self.isShoutcast_bl || self.isIcecast_bl ? (self.radioSource_str = e.source, self.data.playlist_ar[self.id].title = e.songTitle, self.controller_do.setTitle(e.songTitle), self.prevAudioPath != self.audioPath && (self.setSource(), self.isPlaylistItemClicked_bl && self.play(), self.prevAudioPath = self.audioPath)) : self.data.closeJsonPLoader()
                            }, self.onRadioTrackUpdate = function (e) {
                                self.curTitle = e.songTitle, self.curTitle != self.prevTitle && (self.controller_do.setTitle(e.songTitle), self.prevTitle = self.curTitle)
                            }, self.onPreloaderLoadDone = function () {
                                self.data.autoPlay_bl && !FWDRAP.iFrame && FWDRAPUtils.isChrome && !FWDRAPUtils.isMobile && (FWDRAP.iFrame = document.createElement("iframe"), FWDRAP.iFrame.src = self.data.mainFolderPath_str + "audio/silent.mp3", FWDRAP.iFrame.style.position = "absolute", FWDRAP.iFrame.style.top = "-500px", document.documentElement.appendChild(FWDRAP.iFrame)), self.maxHeight = self.data.controllerHeight, self.setupPreloader(), self.isMobile_bl || self.setupContextMenu(), self.resizeHandler(), self.openInPopup_bl || self.main_do.setHeight(self.data.controllerHeight), self.stageContainer.style.height = self.data.controllerHeight + "px"
                            }, self.dataLoadError = function (e) {
                                self.maxHeight = 200, self.preloader_do && self.preloader_do.hide(!1), self.main_do.addChild(self.info_do), self.info_do.showText(e.text), self.main_do.setHeight(self.data.controllerHeight), self.stageContainer.style.height = self.data.controllerHeight + "px", self.dispatchEvent(FWDRAP.ERROR, {
                                    error: e.text
                                })
                            }, self.dataSkinProgressHandler = function (e) {}, self.dataSkinLoadComplete = function () {
                                self.openInPopup_bl && (self.data.showPopupButton_bl = !1), self.useDeepLinking_bl ? setTimeout(function () {
                                    self.setupDL()
                                }, 200) : (self.openInPopup_bl ? (self.catId = self.popupWindow.catId, self.id = self.popupWindow.id) : (self.catId = self.data.startAtPlaylist, self.id = self.data.startAtTrack), self.loadInternalPlaylist())
                            }, this.dataPlayListLoadComplete = function () {
                                self.isAPIReady_bl || self.dispatchEvent(FWDRAP.READY), self.data.randomizePlaylist_bl && (self.data.playlist_ar = FWDRAPUtils.randomizeArray(self.data.playlist_ar)), self.data.startAtRandomTrack_bl && (self.id = Math.max(0, parseInt(Math.random() * self.data.playlist_ar.length) - 1), self.useDeepLinking_bl && FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id)), self.isAPIReady_bl = !0, self.isPlaylistLoaded_bl = !0, self.openInPopup_bl && (self.data.autoPlay_bl = !0, self.data.showPlayListByDefault_bl = !0), self.setupMainInstances(), self.updatePlaylist(), self.resizeHandler(), self.dispatchEvent(FWDRAP.LOAD_PLAYLIST_COMPLETE)
                            }, this.updatePlaylist = function () {
                                self.main_do && self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.preloader_do.hide(!0), self.prevId = -1, self.totalAudio = self.data.playlist_ar.length, self.controller_do.enableControllerWhileLoadingPlaylist(), self.controller_do.cleanThumbnails(!0), self.playlist_do && self.playlist_do.updatePlaylist(self.data.playlist_ar), self.openInPopup_bl && self.popupWindow.videoScreen_do && (self.lastPercentPlayed = self.popupWindow.videoScreen_do.lastPercentPlayed), self.setSource(), (self.data.autoPlay_bl || self.data.playTrackAfterPlaylistLoad_bl) && setTimeout(self.play, 1e3), self.playlist_do && self.playlist_do.isShowed_bl && self.controller_do.setPlaylistButtonState("selected"), self.playlist_do && self.playlist_do.comboBox_do && self.playlist_do.comboBox_do.setButtonsStateBasedOnId(self.catId), self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName)
                            }, this.loadInternalPlaylist = function () {
                                self.isPlaylistLoaded_bl = !1, self.stop(), self.hider && (self.hider.reset(), self.hider.stop()), self.preloader_do.show(!0), self.controller_do && (self.controller_do.disableControllerWhileLoadingPlaylist(), self.controller_do.loadThumb()), self.playlist_do && self.playlist_do.destroyPlaylist(), self.data.loadPlaylist(self.catId), self.isAPIReady_bl && self.dispatchEvent(FWDRAP.START_TO_LOAD_PLAYLIST)
                            }, this.setupAtbWindow = function () {
                                FWDRAPATB.setPrototype(), self.atb_do = new FWDRAPATB(self.controller_do, self), self.atb_do.addListener(FWDRAPATB.HIDE_COMPLETE, self.atbWindowHideCompleteHandler)
                            }, this.atbWindowHideCompleteHandler = function () {
                                self.controller_do && !self.isMobile_bl && (self.controller_do.atbButton_do.isDisabled_bl = !1, self.controller_do.atbButton_do.setNormalState())
                            }, this.setupPlaybackRateWindow = function () {
                                FWDRAPPlaybackRateWindow.setPrototype(), self.playbackRateWindow_do = new FWDRAPPlaybackRateWindow(self.data, self), self.playbackRateWindow_do.addListener(FWDRAPPlaybackRateWindow.HIDE_COMPLETE, self.playbackRateWindowHideCompleteHandler), self.playbackRateWindow_do.addListener(FWDRAPPlaybackRateWindow.SET_PLAYBACK_RATE, self.playbackRateWindowSetPlaybackRateHandler)
                            }, this.playbackRateWindowHideCompleteHandler = function () {
                                self.controller_do && !self.isMobile_bl && (self.controller_do.playbackRateButton_do.isDisabled_bl = !1, self.controller_do.playbackRateButton_do.setNormalState())
                            }, this.playbackRateWindowSetPlaybackRateHandler = function (e) {
                                self.setPlaybackRate(e.rate)
                            }, this.setupVideoScreen = function () {
                                FWDRAPVideoScreen.setPrototype(), self.videoScreen_do = new FWDRAPVideoScreen(self, self.data.volume), self.videoScreen_do.addListener(FWDRAPVideoScreen.ERROR, self.audioScreenErrorHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.SAFE_TO_SCRUBB, self.audioScreenSafeToScrubbHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.STOP, self.audioScreenStopHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.PLAY, self.audioScreenPlayHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.PAUSE, self.audioScreenPauseHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.UPDATE, self.audioScreenUpdateHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.UPDATE_TIME, self.audioScreenUpdateTimeHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.LOAD_PROGRESS, self.audioScreenLoadProgressHandler), self.videoScreen_do.addListener(FWDRAPVideoScreen.PLAY_COMPLETE, self.audioScreenPlayCompleteHandler), self.videosHolder_do.addChild(self.videoScreen_do)
                            }, this.setupYoutubePlayer = function () {
                                -1 != location.protocol.indexOf("file:") && (FWDRAPUtils.isOpera || FWDRAPUtils.isIE) || (FWDRAPYoutubeScreen.setPrototype(), self.ytb_do = new FWDRAPYoutubeScreen(self, self.data.volume), self.ytb_do.addListener(FWDRAPYoutubeScreen.READY, self.youtubeReadyHandler), self.ytb_do.addListener(FWDRAPAudioScreen.ERROR, self.audioScreenErrorHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.SAFE_TO_SCRUBB, self.audioScreenSafeToScrubbHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.STOP, self.audioScreenStopHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.PLAY, self.audioScreenPlayHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.PAUSE, self.audioScreenPauseHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.UPDATE, self.audioScreenUpdateHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.UPDATE_TIME, self.audioScreenUpdateTimeHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.LOAD_PROGRESS, self.audioScreenLoadProgressHandler), self.ytb_do.addListener(FWDRAPYoutubeScreen.PLAY_COMPLETE, self.audioScreenPlayCompleteHandler), self.videosHolder_do.addChild(self.ytb_do))
                            }, this.youtubeReadyHandler = function (e) {}, this.setupDL = function () {
                                FWDAddress.onChange = self.dlChangeHandler, self.dlChangeHandler()
                            }, this.dlChangeHandler = function () {
                                if (!self.hasOpenedInPopup_bl) {
                                    var e = !1;
                                    self.categories_do && self.categories_do.isOnDOM_bl ? self.categories_do.hide() : (self.catId = parseInt(FWDAddress.getParameter("catid")), self.id = parseInt(FWDAddress.getParameter("trackid")), (null == self.catId || null == self.id || isNaN(self.catId) || isNaN(self.id)) && (self.catId = self.data.startAtPlaylist, self.id = self.data.startAtTrack, e = !0), (self.catId < 0 || self.catId > self.data.totalCategories - 1 && !e) && (self.catId = self.data.startAtPlaylist, self.id = self.data.startAtTrack, e = !0), self.data.playlist_ar && (self.id < 0 && !e ? (self.id = self.data.startAtTrack, e = !0) : self.prevCatId == self.catId && self.id > self.data.playlist_ar.length - 1 && !e && (self.id = self.data.playlist_ar.length - 1, e = !0)), e ? location.hash = self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id : self.prevCatId != self.catId ? (self.loadInternalPlaylist(), self.prevCatId = self.catId) : (self.setSource(!1), self.audioType_str != FWDRAP.HLS && self.play(), self.changeHLS_bl = !0))
                                }
                            }, this.setupPreloader = function () {
                                FWDRAPPreloader.setPrototype(), self.preloader_do = new FWDRAPPreloader(self.data.mainPreloader_img, 53, 34, 30, 80, !0), self.preloader_do.show(!0), self.main_do.addChild(self.preloader_do)
                            }, this.positionPreloader = function () {
                                self.preloader_do.setX(parseInt((self.stageWidth - self.preloader_do.w) / 2)), self.controller_do ? self.preloader_do.setY(parseInt((self.controller_do.h - self.preloader_do.h) / 2)) : self.preloader_do.setY(parseInt((self.maxHeight - self.preloader_do.h) / 2))
                            }, this.setupCategories = function () {
                                FWDRAPCategories.setPrototype(), self.categories_do = new FWDRAPCategories(self.data), self.categories_do.getStyle().zIndex = "2147483647", self.categories_do.addListener(FWDRAPCategories.HIDE_COMPLETE, self.categoriesHideCompleteHandler), self.data.showPlaylistsByDefault_bl && (self.showCatWidthDelayId_to = setTimeout(function () {
                                    self.showCategories()
                                }, 1400))
                            }, this.categoriesHideCompleteHandler = function (e) {
                                if (self.controller_do.setCategoriesButtonState("unselected"), self.customContextMenu_do && self.customContextMenu_do.updateParent(self.main_do), self.useDeepLinking_bl) self.categories_do.id != self.catId && (self.catId = self.categories_do.id, self.id = 0, FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id));
                                else {
                                    if (self.catId == self.categories_do.id) return;
                                    self.catId = self.categories_do.id, self.id = 0, self.loadInternalPlaylist(self.catId)
                                }
                            }, this.setupPlaylist = function () {
                                FWDRAPPlaylist.setPrototype(), self.playlist_do = new FWDRAPPlaylist(self.data, self), self.playlist_do.addListener(FWDRAPPlaylist.CHANGE_PLAYLIST, self.playlistChangePlaylistHandler), self.playlist_do.addListener(FWDRAPPlaylistItem.MOUSE_UP, self.palylistItemOnUpHandler), self.playlist_do.addListener(FWDRAPPlaylistItem.DOWNLOAD, self.palylistItemDownloadHandler), self.playlist_do.addListener(FWDRAPPlaylistItem.BUY, self.palylistItemBuyHandler), self.playlist_do.addListener(FWDRAPPlaylist.UPDATE_TRACK_TITLE_if_FOLDER, self.palylistUpdateFolderTrackTitle), self.main_do.addChild(self.playlist_do)
                            }, this.playlistChangePlaylistHandler = function (e) {
                                if (self.controller_do.setCategoriesButtonState("unselected"), self.customContextMenu_do && self.customContextMenu_do.updateParent(self.main_do), self.useDeepLinking_bl) e.id != self.catId && (self.catId = e.id, self.id = 0, FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id));
                                else {
                                    if (self.catId == e.id) return;
                                    self.catId = e.id, self.id = 0, self.loadInternalPlaylist(self.catId)
                                }
                            }, this.palylistItemOnUpHandler = function (e) {
                                self.isPlaylistItemClicked_bl = !0, e.id == self.id ? self.audioType_str == FWDRAP.AUDIO && self.audioScreen_do.isPlaying_bl ? self.pause() : self.audioType_str != FWDRAP.AUDIO || self.audioScreen_do.isStopped_bl && !self.audioScreen_do.isStopped_bl ? self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do.isPlaying_bl ? self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || self.videoScreen_do.isStopped_bl ? self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do.isPlaying_bl ? self.pause() : self.audioType_str != FWDRAP.YOUTUBE || self.ytb_do.isStopped_bl || self.play() : self.play() : self.pause() : self.play() : self.useDeepLinking_bl && self.id != e.id ? (FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + e.id), self.id = e.id) : (self.id = e.id, self.setSource(!0), self.changeHLS_bl = !0, self.autioType_str != FWDRAP.HLS && self.play()), self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName)
                            }, this.palylistItemDownloadHandler = function (e) {
                                self.downloadMP3(e.id)
                            }, this.palylistUpdateFolderTrackTitle = function (e) {
                                self.controller_do.setTitle(e.title)
                            }, this.palylistItemBuyHandler = function (e) {
                                self.buy(e.id)
                            }, this.setupShareWindow = function () {
                                FWDRAPShareWindow.setPrototype(), self.shareWindow_do = new FWDRAPShareWindow(self.data, self), self.shareWindow_do.addListener(FWDRAPShareWindow.HIDE_COMPLETE, self.shareWindowHideCompleteHandler)
                            }, this.shareWindowHideCompleteHandler = function () {
                                self.controller_do && !self.isMobile_bl && (self.controller_do.shareButton_do.isDisabled_bl = !1, self.controller_do.shareButton_do.setNormalState())
                            }, this.setupController = function () {
                                FWDRAPController.setPrototype(), self.controller_do = new FWDRAPController(self.data, self), self.controller_do.addListener(FWDRAPController.POPUP, self.controllerOnPopupHandler), self.controller_do.addListener(FWDRAPController.PLAY, self.controllerOnPlayHandler), self.controller_do.addListener(FWDRAPController.PLAY_NEXT, self.controllerPlayNextHandler), self.controller_do.addListener(FWDRAPController.PLAY_PREV, self.controllerPlayPrevHandler), self.controller_do.addListener(FWDRAPController.PAUSE, self.controllerOnPauseHandler), self.controller_do.addListener(FWDRAPController.VOLUME_START_TO_SCRUB, self.volumeStartToScrubbHandler), self.controller_do.addListener(FWDRAPController.VOLUME_STOP_TO_SCRUB, self.volumeStopToScrubbHandler), self.controller_do.addListener(FWDRAPController.START_TO_SCRUB, self.controllerStartToScrubbHandler), self.controller_do.addListener(FWDRAPController.SCRUB, self.controllerScrubbHandler), self.controller_do.addListener(FWDRAPController.SCRUB_PLAYLIST_ITEM, self.controllerPlaylistItemScrubbHandler), self.controller_do.addListener(FWDRAPController.STOP_TO_SCRUB, self.controllerStopToScrubbHandler), self.controller_do.addListener(FWDRAPController.CHANGE_VOLUME, self.controllerChangeVolumeHandler), self.controller_do.addListener(FWDRAPController.SHOW_CATEGORIES, self.showCategoriesHandler), self.controller_do.addListener(FWDRAPController.SHOW_PLAYLIST, self.showPlaylistHandler), self.controller_do.addListener(FWDRAPController.HIDE_PLAYLIST, self.hidePlaylistHandler), self.controller_do.addListener(FWDRAPController.ENABLE_LOOP, self.enableLoopHandler), self.controller_do.addListener(FWDRAPController.DISABLE_LOOP, self.disableLoopHandler), self.controller_do.addListener(FWDRAPController.ENABLE_SHUFFLE, self.enableShuffleHandler), self.controller_do.addListener(FWDRAPController.DISABLE_SHUFFLE, self.disableShuffleHandler), self.controller_do.addListener(FWDRAPController.SHARE, self.controllerShareHandler), self.controller_do.addListener(FWDRAPController.DOWNLOAD_MP3, self.controllerButtonDownloadMp3Handler), self.controller_do.addListener(FWDRAPController.BUY, self.controllerButtonBuyHandler), self.controller_do.addListener(FWDRAPController.SHOW_ATOB, self.showAtobWindowHandler), self.controller_do.addListener(FWDRAPController.SHOW_PLAYBACKRATE, self.showPlaybacrateWindowHandler), self.main_do.addChild(self.controller_do), self.openInPopup_bl && self.data.showPlaylistsButtonAndPlaylists_bl && (self.controller_do.setPlaylistButtonState("selected"), self.controller_do.playlistButton_do && self.controller_do.playlistButton_do.disableForGood())
                            }, this.showPlaybacrateWindowHandler = function (e) {
                                self.resizeHandler(), self.playbackRateWindow_do.show(), self.controller_do && !self.isMobile_bl && (self.controller_do.playbackRateButton_do.setSelectedState(), self.controller_do.playbackRateButton_do.isDisabled_bl = !0)
                            }, this.controllerShareHandler = function (e) {
                                self.shareWindow_do.show(), self.controller_do && !self.isMobile_bl && (self.controller_do.shareButton_do.setSelectedState(), self.controller_do.shareButton_do.isDisabled_bl = !0)
                            }, this.controllerOnPopupHandler = function () {
                                self.popup()
                            }, this.controllerOnPlayHandler = function (e) {
                                self.play()
                            }, this.controllerPlayNextHandler = function (e) {
                                self.data.shuffle_bl ? self.playShuffle() : self.playNext()
                            }, this.controllerPlayPrevHandler = function (e) {
                                self.data.shuffle_bl ? self.playShuffle() : self.playPrev()
                            }, this.controllerOnPauseHandler = function (e) {
                                self.isPlaylistItemClicked_bl = !0, self.pause()
                            }, this.volumeStartToScrubbHandler = function (e) {
                                self.playlist_do && self.playlist_do.showDisable()
                            }, this.volumeStopToScrubbHandler = function (e) {
                                self.playlist_do && self.playlist_do.hideDisable()
                            }, this.controllerStartToScrubbHandler = function (e) {
                                self.playlist_do && self.playlist_do.showDisable(), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do ? self.ytb_do.startToScrub() : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.startToScrub() : FWDRAP.hasHTML5Audio ? self.audioScreen_do.startToScrub() : self.isFlashScreenReady_bl && (FWDRAP.pauseAllAudio(self), self.flashObject.startToScrub())
                            }, this.controllerScrubbHandler = function (e) {
                                self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do ? self.ytb_do.scrub(e.percent) : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.scrub(e.percent) : FWDRAP.hasHTML5Audio ? self.audioScreen_do.scrub(e.percent) : self.isFlashScreenReady_bl && self.flashObject.scrub(e.percent)
                            }, this.controllerPlaylistItemScrubbHandler = function (e) {
                                self.playlist_do && self.playlist_do.updateCurItemProgress(e.percent)
                            }, this.controllerStopToScrubbHandler = function (e) {
                                self.playlist_do && self.playlist_do.hideDisable(), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do ? self.ytb_do.stopToScrub() : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.stopToScrub() : FWDRAP.hasHTML5Audio ? self.audioScreen_do.stopToScrub() : self.isFlashScreenReady_bl && self.flashObject.stopToScrub()
                            }, this.controllerChangeVolumeHandler = function (e) {
                                self.setVolume(e.percent)
                            }, this.showCategoriesHandler = function (e) {
                                self.showCategories(), self.controller_do.setCategoriesButtonState("selected")
                            }, this.showPlaylistHandler = function (e) {
                                self.data.animateOnIntro_bl ? self.playlist_do.show(!0) : self.playlist_do.show(!1), self.controller_do.setPlaylistButtonState("selected")
                            }, this.hidePlaylistHandler = function (e) {
                                self.data.animateOnIntro_bl ? self.playlist_do.hide(!0) : self.playlist_do.hide(!1), self.controller_do.setPlaylistButtonState("unselected")
                            }, this.enableLoopHandler = function (e) {
                                self.data.loop_bl = !0, self.data.shuffle_bl = !1, self.controller_do.setLoopStateButton("selected"), self.controller_do.setShuffleButtonState("unselected")
                            }, this.disableLoopHandler = function (e) {
                                self.data.loop_bl = !1, self.controller_do.setLoopStateButton("unselected")
                            }, this.enableShuffleHandler = function (e) {
                                self.data.shuffle_bl = !0, self.data.loop_bl = !1, self.controller_do.setShuffleButtonState("selected"), self.controller_do.setLoopStateButton("unselected")
                            }, this.disableShuffleHandler = function (e) {
                                self.data.shuffle_bl = !1, self.controller_do.setShuffleButtonState("unselected")
                            }, this.controllerButtonDownloadMp3Handler = function (e) {
                                self.downloadMP3()
                            }, this.showAtobWindowHandler = function (e) {
                                self.resizeHandler(), self.atb_do.positionAndResize(), self.atb_do.show(!0), self.controller_do && !self.isMobile_bl && (self.controller_do.atbButton_do.setSelectedState(), self.controller_do.atbButton_do.isDisabled_bl = !0)
                            }, this.controllerButtonBuyHandler = function () {
                                self.buy()
                            }, this.setupAudioScreen = function () {
                                FWDRAPAudioScreen.setPrototype(), self.audioScreen_do = new FWDRAPAudioScreen(self.data.volume, self.data.autoPlay_bl, self.data.loop_bl), self.audioScreen_do.addListener(FWDRAPAudioScreen.START, self.audioScreenStartHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.ERROR, self.audioScreenErrorHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.SAFE_TO_SCRUBB, self.audioScreenSafeToScrubbHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.STOP, self.audioScreenStopHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.PLAY, self.audioScreenPlayHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.PAUSE, self.audioScreenPauseHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.UPDATE, self.audioScreenUpdateHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.UPDATE_TIME, self.audioScreenUpdateTimeHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.LOAD_PROGRESS, self.audioScreenLoadProgressHandler), self.audioScreen_do.addListener(FWDRAPAudioScreen.PLAY_COMPLETE, self.audioScreenPlayCompleteHandler), self.useOnlyAPI_bl ? document.documentElement.appendChild(self.audioScreen_do.screen) : self.main_do.addChild(self.audioScreen_do)
                            }, this.audioScreenStartHandler = function () {
                                self.dispatchEvent(FWDRAP.START)
                            }, this.audioScreenErrorHandler = function (e) {
                                var t;
                                self.isPlaying_bl = !1, self.showCursor(), self.largePlayButton_do && self.largePlayButton_do.hide(), t = FWDRAP.hasHTML5Audio ? decodeURIComponent(e.text) : decodeURIComponent(String(e)), self.main_do && self.main_do.addChild(self.info_do), self.info_do && self.info_do.showText(t), self.hider && (self.hider.reset(), self.hider.stop()), self.dispatchEvent(FWDRAP.ERROR, {
                                    error: t
                                })
                            }, this.audioScreenSafeToScrubbHandler = function () {
                                self.controller_do && self.controller_do.enableMainScrubber(), self.hider && self.isFullScreen_bl && self.hider.start(), self.isShoutcast_bl || self.isIcecast_bl
                            }, this.audioScreenStopHandler = function (e) {
                                self.isPlaying_bl = !1, self.showCursor(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.hider && (self.hider.reset(), self.hider.stop()), self.main_do && self.main_do.contains(self.info_do) && self.main_do.removeChild(self.info_do), self.controller_do && (self.controller_do.showPlayButton(), self.controller_do.stopEqulizer(), self.controller_do.disableMainScrubber()), self.dispatchEvent(FWDRAP.STOP)
                            }, this.sendGAPlayedEvent = function () {
                                if (window.ga && self.videoNameGa && self.videoNameGa != self.prevVideoNameGa) {
                                    var e = "trackName:" + self.videoNameGa;
                                    ga("send", {
                                        hitType: "event",
                                        eventCategory: self.videoCat,
                                        eventAction: "played",
                                        eventLabel: e,
                                        nonInteraction: !0
                                    })
                                }
                                self.prevVideoNameGa = self.videoNameGa
                            }, this.audioScreenPlayHandler = function () {
                                self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName), self.sendGAPlayedEvent(), self.isPlaying_bl = !0, (FWDRAP.keyboardCurInstance = self).showCursor(), self.controller_do && (self.controller_do.showPauseButton(), self.controller_do.startEqulizer()), self.hider && self.isFullScreen_bl && self.hider.start(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.playlist_do && self.playlist_do.setCurItemPauseState(), self.openInPopup_bl && setTimeout(function () {
                                    self.scrubbedFirstTimeInPopup_bl || self.scrub(self.lastPercentPlayed), self.scrubbedFirstTimeInPopup_bl = !0
                                }, 600), self.hasStartedToPlay_bl || self.data.playlist_ar[self.id].startAtTime && self.scrubbAtTime(self.data.playlist_ar[self.id].startAtTime), self.hasStartedToPlay_bl = !0, self.dispatchEvent(FWDRAP.PLAY)
                            }, this.audioScreenPauseHandler = function () {
                                self.isPlaying_bl = !1, self.hider && (self.hider.reset(), self.hider.stop()), !FWDRAPUtils.isIphone && self.largePlayButton_do && self.isFullScreen_bl && (self.audioType_str == FWDRAP.VIDEO ? self.largePlayButton_do.show() : self.audioType_str != FWDRAP.YOUTUBE || self.isMobile_bl || self.largePlayButton_do.show()), self.showCursor(), self.controller_do && (self.controller_do.showPlayButton(), self.controller_do.stopEqulizer()), self.playlist_do && self.playlist_do.setCurItemPlayState(), self.dispatchEvent(FWDRAP.PAUSE)
                            }, this.audioScreenUpdateHandler = function (e) {
                                var t;
                                t = FWDRAP.hasHTML5Audio ? e.percent : e, self.controller_do && self.controller_do.updateMainScrubber(t), self.playlist_do && self.playlist_do.updateCurItemProgress(t), self.dispatchEvent(FWDRAP.UPDATE, {
                                    percent: t
                                })
                            }, this.audioScreenUpdateTimeHandler = function (e, t) {
                                if (self.prevSeconds != e.seconds && (self.totalTimePlayed += 1), self.totalTimeInSeconds = e.totalTimeInSeconds, self.curTimeInSecond = e.seconds, self.totalTime = e.totalTime, self.curTime = e.curTime, self.prevSeconds = e.seconds, self.totalPercentPlayed = self.totalTimePlayed / e.totalTimeInSeconds, isFinite(self.totalPercentPlayed) || (self.totalPercentPlayed = 0), self.controller_do && !self.controller_do.isMainScrubberScrubbing_bl && self.atb_do && self.atb_do.isShowed_bl && !self.atb_do.scrub) {
                                    var o = self.totalTimeInSeconds * self.atb_do.pa,
                                        s = self.totalTimeInSeconds * self.atb_do.pb;
                                    self.prevCurTimeInSeconds != self.curTimeInSecond && (self.prevCurTimeInSeconds = self.curTimeInSecond, self.curTimeInSecond < o ? self.scrub(self.atb_do.pa) : self.curTimeInSecond > s && self.scrub(self.atb_do.pa))
                                }
                                var i, n;
                                FWDRAP.hasHTML5Audio ? (i = e.curTime, n = e.totalTime) : (i = e, (n = t).length > i.length && (i = parseInt(n.substring(0, 1)) - 1 + ":" + i)), self.controller_do && self.controller_do.updateTime(i, n), self.data.playlist_ar[self.id] && self.data.playlist_ar[self.id].stopAtTime && FWDRAPUtils.getSecondsFromString(self.data.playlist_ar[self.id].stopAtTime) <= e.seconds && self.stop(), 5 < n.length ? self.totalDuration = FWDRAPUtils.getSecondsFromString(n) : self.totalDuration = FWDRAPUtils.getSecondsFromString("00:" + n), self.dispatchEvent(FWDRAP.UPDATE_TIME, {
                                    curTime: i,
                                    totalTime: n
                                })
                            }, this.audioScreenLoadProgressHandler = function (e) {
                                FWDRAP.hasHTML5Audio ? self.controller_do && self.controller_do.updatePreloaderBar(e.percent) : self.controller_do && self.controller_do.updatePreloaderBar(e)
                            }, this.audioScreenPlayCompleteHandler = function () {
                                if (self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName), self.dispatchEvent(FWDRAP.PLAY_COMPLETE), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do)
                                    if (self.data.loop_bl) self.ytb_do.replay();
                                    else if (self.data.shuffle_bl) self.playShuffle();
                                else {
                                    if (self.data.playlistLoop_bl) self.playNext();
                                    else if (self.id == self.playlist_do.items_ar.length - 1)(e = self.catId + 1) > self.data.totalCategories - 1 && (e = 0), self.data.autoPlay_bl = !0, self.loadPlaylist(e);
                                    else self.playNext()
                                } else if (self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do)
                                    if (self.data.loop_bl) self.videoScreen_do.replay();
                                    else if (self.data.shuffle_bl) self.playShuffle();
                                else {
                                    if (self.data.playlistLoop_bl) self.playNext();
                                    else if (self.id == self.playlist_do.items_ar.length - 1)(e = self.catId + 1) > self.data.totalCategories - 1 && (e = 0), self.data.autoPlay_bl = !0, self.loadPlaylist(e);
                                    else self.playNext()
                                } else if (FWDRAP.hasHTML5Audio)
                                    if (self.data.loop_bl) self.audioScreen_do.replay();
                                    else if (self.data.shuffle_bl) self.playShuffle();
                                else {
                                    if (self.data.playlistLoop_bl) self.playNext();
                                    else if (self.id == self.playlist_do.items_ar.length - 1)(e = self.catId + 1) > self.data.totalCategories - 1 && (e = 0), self.data.autoPlay_bl = !0, self.loadPlaylist(e);
                                    else self.playNext()
                                } else if (self.isFlashScreenReady_bl)
                                    if (self.data.loop_bl) self.flashObject.replayAudio();
                                    else if (self.data.shuffle_bl) self.playShuffle();
                                else {
                                    var e;
                                    if (self.data.playlistLoop_bl) self.playNext();
                                    else if (self.id == self.playlist_do.items_ar.length - 1)(e = self.catId + 1) > self.data.totalCategories - 1 && (e = 0), self.data.autoPlay_bl = !0, self.loadPlaylist(e);
                                    else self.playNext()
                                }
                            }, this.loadID3IfPlaylistDisabled = function () {
                                var o = self.data.playlist_ar[self.id].source;
                                "..." == self.data.playlist_ar[self.id].title && (o = o + "?rand=" + parseInt(99999999 * Math.random()), ID3.loadTags(o, function () {
                                    var e = self.data.playlist_ar[self.id],
                                        t = ID3.getAllTags(o);
                                    e.title = t.artist + " - " + t.title, e.titleText = e.title, self.controller_do.setTitle(e.title)
                                }))
                            }, this.setSource = function (e) {
                                if (0 != self.totalAudio) {
                                    if (self.stop(!0), self.data.playVideoOnlyWhenLoggedIn_bl && !self.data.isLoggedIn_bl) return self.main_do.addChild(self.info_do), self.info_do.showText(self.data.loggedInMessage_str), void(self.info_do.allowToRemove_bl = !1);
                                    if (self.useYoutube_bl && self.ytb_do && !self.ytb_do.isReady_bl) setTimeout(self.setSource, 200);
                                    else if (e && (self.itemClicked = e), self.passWindow_do && self.passWindow_do.hide(), self.id < 0 ? self.id = 0 : self.id > self.totalAudio - 1 && (self.id = self.totalAudio - 1), -1 != self.id) {
                                        if (self.audioPath = self.data.playlist_ar[self.id].source, self.isShoutcast_bl = self.data.playlist_ar[self.id].isShoutcast_bl, self.isIcecast_bl = self.data.playlist_ar[self.id].isIcecast_bl, self.data.shoutcastVersion = self.data.playlist_ar[self.id].shoutcastVersion, !self.isShoutcastLoaded_bl && self.isShoutcast_bl && self.prevAudioPath != self.audioPath) return self.isShoutcastLoaded_bl = !0, self.playlist_do && self.playlist_do.activateItems(self.id, self.itemClicked), self.resizeHandler(), void self.data.getShoutcastRadioNameAndStream(self.audioPath);
                                        if (!self.isIcecastLoaded_bl && self.isIcecast_bl && self.prevAudioPath != self.audioPath) return self.isIcecastLoaded_bl = !0, self.playlist_do && self.playlist_do.activateItems(self.id, self.itemClicked), self.resizeHandler(), void self.data.getIcecastRadioNameAndStream(self.audioPath);
                                        var t;
                                        if ((self.isShoutcast_bl || self.isIcecast_bl) && (self.audioPath = self.radioSource_str, self.controller_do.loadThumb("")), self.prevAudioPath = self.audioPath, self.data.playlist_ar[self.id].controlerThumbnailPath && self.controller_do.loadThumb(self.data.playlist_ar[self.id].controlerThumbnailPath), self.data.playlist_ar[self.id].title && self.controller_do.setTitle(self.data.playlist_ar[self.id].title), self.stop(), self.isShoutcast_bl = self.data.playlist_ar[self.id].isShoutcast_bl, self.isIcecast_bl = self.data.playlist_ar[self.id].isIcecast_bl, self.videoPosterPath = self.data.playlist_ar[self.id].videoPosterPath, -1 != self.audioPath.indexOf("soundcloud.") && -1 == self.audioPath.indexOf("https://api.soundcloud.") ? (self.data.getSoundcloudUrl(self.audioPath), self.isLoadingSoundcloudTrack_bl = !0, self.audioType_str = FWDRAP.AUDIO) : (self.audioType_str = FWDRAP.AUDIO, self.isLoadingSoundcloudTrack_bl = !1), self.finalAudioPath_str = self.audioPath, -1 == self.audioPath.indexOf(".") && 11 == self.audioPath.length ? self.audioType_str = FWDRAP.YOUTUBE : -1 != self.audioPath.indexOf(".mp4") ? self.audioType_str = FWDRAP.VIDEO : self.isMobile_bl || FWDRAP.hasHTMLHLS || -1 == self.audioPath.indexOf(".m3u8") ? self.audioType_str = FWDRAP.AUDIO : self.audioType_str = FWDRAP.HLS, self.isMobile_bl ? self.largePlayButton_do && self.largePlayButton_do.hide() : self.largePlayButton_do && self.isFullScreen_bl && self.largePlayButton_do.show(), self.data.playlist_ar[self.id].atb && !self.isATBJsLoaded_bl) return (t = document.createElement("script")).src = self.data.mainFolderPath_str + "java/FWDRAPATB.js", document.head.appendChild(t), t.onerror = function () {
                                            self.main_do.addChild(self.info_do), self.info_do.showText('A to B plugin js file named <font color="#FF0000">FWDRAPATB.js</font> is not found. Please make sure that the content folder contains the java folder that contains the <font color="#FF0000">FWDRAPATB.js</font> file.'), self.preloader_do && self.preloader_do.hide()
                                        }, void(t.onload = function () {
                                            self.isATBJsLoaded_bl = !0, self.setupAtbWindow(), self.setSource(self.audioPath)
                                        });
                                        if (!(self.isMobile_bl || FWDRAP.hasHTMLHLS || -1 == self.audioPath.indexOf(".m3u8") || self.isHLSJsLoaded_bl || FWDRAP.isHLSJsLoaded_bl)) return -1 != location.protocol.indexOf("file:") ? (self.main_do.addChild(self.info_do), self.info_do.showText("This browser dosen't allow playing HLS / live streaming videos local, please test online."), void self.resizeHandler()) : ((t = document.createElement("script")).src = self.data.hlsPath_str, document.head.appendChild(t), t.onerror = function () {
                                            self.main_do.addChild(self.info_do), self.info_do.showText("Error loading HLS library <font color='#FF0000'>" + self.data.hlsPath_str + "</font>."), self.preloader_do && self.preloader_do.hide()
                                        }, void(t.onload = function () {
                                            self.isHLSJsLoaded_bl = !0, FWDRAP.isHLSJsLoaded_bl = !0, self.setupHLS(), self.setSource(self.audioPath)
                                        }));
                                        if (self.audioType_str == FWDRAP.YOUTUBE) {
                                            if (self.ytb_do.ytb && !self.ytb_do.ytb.cueVideoById) return;
                                            self.videoScreen_do && self.videoScreen_do.setX(-500), self.ytb_do.setX(0), self.isLoadingSoundcloudTrack_bl || (self.ytb_do.setSource(self.audioPath), self.data.autoPlay_bl && self.play()), self.isMobile_bl ? self.largePlayButton_do && self.largePlayButton_do.hide() : self.largePlayButton_do && self.isFullScreen_bl && self.largePlayButton_do.show()
                                        } else self.audioType_str == FWDRAP.VIDEO || self.audioType_str == FWDRAP.HLS ? (self.ytb_do && self.ytb_do.setX(-500), self.isLoadingSoundcloudTrack_bl || (self.videoScreen_do.setSource(self.audioPath), self.videoScreen_do.initVideo(), self.audioType_str == FWDRAP.HLS ? (self.videoScreen_do.setX(-500), self.setupHLS(), self.hlsJS.loadSource(self.audioPath), self.hlsJS.attachMedia(self.videoScreen_do.video_el), self.isHLSManifestReady_bl = !0, (self.data.autoPlay_bl || self.isPlaylistItemClicked_bl) && self.play()) : (self.videoScreen_do.setX(0), self.data.autoPlay_bl && self.play())), self.largePlayButton_do && self.isFullScreen_bl && self.largePlayButton_do.show()) : FWDRAP.hasHTML5Audio && (self.goNormalScreen(), self.ytb_do && self.ytb_do.setX(-500), self.videoScreen_do && self.videoScreen_do.setX(-500), self.audioScreen_do.setSource(self.audioPath), self.data.autoPlay_bl && self.play());
                                        self.controller_do.stopEqulizer(), self.controller_do.setTitle(self.data.playlist_ar[self.id].title), null == self.data.playlist_ar[self.id].duration ? self.controller_do.updateTime("00:00", "00:00") : self.controller_do.updateTime("00:00", FWDRAP.formatTotalTime(self.data.playlist_ar[self.id].duration)), self.controller_do.loadThumb(self.data.playlist_ar[self.id].thumbPath), self.playlist_do ? self.playlist_do.activateItems(self.id, self.itemClicked) : self.loadID3IfPlaylistDisabled(), self.setPlaybackRate(self.data.defaultPlaybackRate)
                                    }
                                }
                            }, this.destroyHLS = function () {
                                self.hlsJS && (self.hlsJS.destroy(), self.hlsJS = null)
                            }, this.setupHLS = function () {
                                self.hlsJS || (self.isHLSJsLoaded_bl = !0, self.hlsJS = new Hls, self.hlsJS.on(Hls.Events.ERROR, function (e, t) {
                                    switch (self.HLSError_str, t.details) {
                                    case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                                        try {
                                            self.HLSError_str = 'cannot load <a href="' + t.context.url + '">' + url + "</a><br>HTTP response code:" + t.response.code + " <br>" + t.response.text, 0 === t.response.code && (self.HLSError_str += 'this might be a CORS issue, consider installing <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi">Allow-Control-Allow-Origin</a> Chrome Extension')
                                        } catch (e) {
                                            self.HLSError_str = "cannot load " + self.audioPath
                                        }
                                        break;
                                    case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
                                        self.HLSError_str = "timeout while loading manifest";
                                        break;
                                    case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
                                        self.HLSError_str = "error while parsing manifest:" + t.reason;
                                        break;
                                    case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
                                        self.HLSError_str = "error while loading level playlist";
                                        break;
                                    case Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                        self.HLSError_str = "timeout while loading level playlist";
                                        break;
                                    case Hls.ErrorDetails.LEVEL_SWITCH_ERROR:
                                        self.HLSError_str = "error while trying to switch to level " + t.level;
                                        break;
                                    case Hls.ErrorDetails.FRAG_LOAD_ERROR:
                                        self.HLSError_str = "error while loading fragment " + t.frag.url;
                                        break;
                                    case Hls.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        self.HLSError_str = "timeout while loading fragment " + t.frag.url;
                                        break;
                                    case Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                                        self.HLSError_str = "Frag Loop Loading Error";
                                        break;
                                    case Hls.ErrorDetails.FRAG_DECRYPT_ERROR:
                                        self.HLSError_str = "Decrypting Error:" + t.reason;
                                        break;
                                    case Hls.ErrorDetails.FRAG_PARSING_ERROR:
                                        self.HLSError_str = "Parsing Error:" + t.reason;
                                        break;
                                    case Hls.ErrorDetails.KEY_LOAD_ERROR:
                                        self.HLSError_str = "error while loading key " + t.frag.decryptdata.uri;
                                        break;
                                    case Hls.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        self.HLSError_str = "timeout while loading key " + t.frag.decryptdata.uri;
                                        break;
                                    case Hls.ErrorDetails.BUFFER_APPEND_ERROR:
                                        self.HLSError_str = "Buffer Append Error";
                                        break;
                                    case Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR:
                                        self.HLSError_str = "Buffer Add Codec Error for " + t.mimeType + ":" + t.err.message;
                                        break;
                                    case Hls.ErrorDetails.BUFFER_APPENDING_ERROR:
                                        self.HLSError_str = "Buffer Appending Error"
                                    }
                                    self.HLSError_str && (console && console.log(self.HLSError_str), self.main_do.addChild(self.info_do), self.info_do.showText(self.HLSError_str), self.resizeHandler())
                                }))
                            }, this.loadPlaylist = function (e) {
                                self.isAPIReady_bl && self.data.prevId != e && (self.catId = e, self.id = 0, self.catId < 0 ? self.catId = 0 : self.catId > self.data.totalCategories - 1 && (self.catId = self.data.totalCategories - 1), self.useDeepLinking_bl ? FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id) : self.loadInternalPlaylist())
                            }, this.playNext = function () {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.data.showPlayListButtonAndPlaylist_bl ? self.playlist_do.items_ar[self.playlist_do.curItem_do.sortId + 1] ? self.id = self.playlist_do.items_ar[self.playlist_do.curItem_do.sortId + 1].id : self.id = self.playlist_do.items_ar[0].id : (self.id++, self.id < 0 ? self.id = self.totalAudio - 1 : self.id > self.totalAudio - 1 && (self.id = 0)), self.useDeepLinking_bl ? FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id) : (self.setSource(), self.changeHLS_bl = !0, self.audioType_str != FWDRAP.HLS && self.play()), self.prevId = self.id, self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName))
                            }, this.playPrev = function () {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.data.showPlayListButtonAndPlaylist_bl ? self.playlist_do.items_ar[self.playlist_do.curItem_do.sortId - 1] ? self.id = self.playlist_do.items_ar[self.playlist_do.curItem_do.sortId - 1].id : self.id = self.playlist_do.items_ar[self.totalAudio - 1].id : (self.id--, self.id < 0 ? self.id = self.totalAudio - 1 : self.id > self.totalAudio - 1 && (self.id = 0)), self.useDeepLinking_bl ? FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id) : (self.setSource(), self.changeHLS_bl = !0, self.audioType_str != FWDRAP.HLS && self.play()), self.prevId = self.id, self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName))
                            }, this.playShuffle = function () {
                                if (self.isAPIReady_bl && self.isPlaylistLoaded_bl) {
                                    for (var e = parseInt(Math.random() * self.data.playlist_ar.length); e == self.id;) e = parseInt(Math.random() * self.data.playlist_ar.length);
                                    self.id = e, self.id < 0 ? self.id = self.totalAudio - 1 : self.id > self.totalAudio - 1 && (self.id = 0), self.useDeepLinking_bl ? FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id) : (self.setSource(), self.changeHLS_bl = !0, self.audioType_str != FWDRAP.HLS && self.play()), self.prevId = self.id, self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName)
                                }
                            }, this.playSpecificTrack = function (e, t) {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.catId = e, self.id = t, self.catId < 0 ? self.catId = 0 : self.catId > self.data.totalCategories - 1 && (self.catId = self.data.totalCategories - 1), self.id < 0 && (self.id = 0), self.useDeepLinking_bl ? FWDAddress.setValue(self.instanceName_str + "?catid=" + self.catId + "&trackid=" + self.id) : (self.setSource(), self.changeHLS_bl = !0, self.audioType_str != FWDRAP.HLS && self.play()), self.prevId = self.id, self.data.playlist_ar && (self.videoNameGa = self.data.playlist_ar[self.id].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName))
                            }, this.play = function () {
                                if (self.isAPIReady_bl && self.isPlaylistLoaded_bl && !self.isLoadingSoundcloudTrack_bl) {
                                    if (self.isPlaylistItemClicked_bl = !0, self.audioType_str == FWDRAP.HLS && 0 <= location.protocol.indexOf("file:")) return self.main_do.addChild(self.info_do), self.info_do.showText("HLS m3u8 videos can't be played local on this browser, please test it online!."), void self.info_do.positionAndResize();
                                    if (self.data.playlist_ar[self.id].isPrivate && !self.hasPassedPassowrd_bl && self.passWindow_do) return self.resizeHandler(), void self.passWindow_do.show();
                                    self.hasPassedPassowrd_bl = !0, self.largePlayButton_do && self.largePlayButton_do.hide(), FWDRAP.pauseAllAudio(self), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do ? self.ytb_do.play() : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? self.audioScreen_do && self.audioScreen_do.play() : self.audioType_str != FWDRAP.HLS_JS || self.isHLSManifestReady_bl ? self.videoScreen_do && self.videoScreen_do.play() : (self.videoScreen_do.initVideo(), self.setupHLS(), self.hlsJS.loadSource(self.audioPath), self.hlsJS.attachMedia(self.videoScreen_do.video_el), self.hlsJS.on(Hls.Events.MANIFEST_PARSED, function (e) {
                                        self.isHLSManifestReady_bl = !0, self.audioType_str == FWDRAP.HLS_JS && self.play()
                                    }))
                                }
                            }, this.resume = function () {
                                self.isAPIReady_bl && FWDRAP.hasHTML5Audio && self.audioType_str == FWDRAP.HLS && self.flashObject.playerResume()
                            }, this.pause = function () {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.isPlaylistItemClicked_bl = !0, self.largePlayButton_do && self.isFullScreen_bl && self.largePlayButton_do.show(), self.audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.pause() : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? FWDRAP.hasHTML5Audio && self.audioScreen_do && self.audioScreen_do.pause() : self.videoScreen_do.pause())
                            }, this.stop = function (e) {
                                self.isAPIReady_bl && (e || (self.isIcecastLoaded_bl = !1, self.isShoutcastLoaded_bl = !1), self.controller_do && (self.controller_do.ttm && self.controller_do.ttm.hide(), self.controller_do.disableAtbButton()), self.hasStartedToPlay_bl = !1, self.hasPassedPassowrd_bl = !1, self.isShoutcast_bl = !1, self.isIcecast_bl = !1, self.destroyHLS(), self.opener_do && self.opener_do.showPlayButton(), self.largePlayButton_do && self.largePlayButton_do.hide(), self.playlist_do && (self.playlist_do.setCurItemPlayState(), self.playlist_do.updateCurItemProgress(0)), self.showCursor(), self.audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.stop() : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? FWDRAP.hasHTML5Audio && self.audioScreen_do.stop() : self.videoScreen_do.stop(), self.setPlaybackRate(self.data.defaultPlaybackRate), self.hasHlsPlayedOnce_bl = !1, self.isSafeToScrub_bl = !1, self.hlsState = void 0, self.changeHLS_bl = !1)
                            }, this.startToScrub = function () {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.audioType_str == FWDRAP.YOUTUBE ? self.videoScreen_do.startToScrub() : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.startToScrub() : FWDRAP.hasHTML5Audio ? self.audioScreen_do.startToScrub() : self.isFlashScreenReady_bl && self.flashObject.startToScrub())
                            }, this.stopToScrub = function () {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (self.audioType_str == FWDRAP.YOUTUBE ? self.videoScreen_do.stopToScrub() : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.stopToScrub() : FWDRAP.hasHTML5Audio ? self.audioScreen_do.stopToScrub() : self.isFlashScreenReady_bl && self.flashObject.stopToScrub())
                            }, this.scrubbAtTime = function (e) {
                                self.isAPIReady_bl && e && (-1 != String(e).indexOf(":") && (e = FWDRAPUtils.getSecondsFromString(e)), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do && self.ytb_do.isSafeToBeControlled_bl ? self.ytb_do.scrubbAtTime(e) : self.audioType_str == FWDRAP.AUDIO ? self.audioScreen_do && self.audioScreen_do.scrubbAtTime(e) : FWDRAP.VIDEO && self.videoScreen_do && self.videoScreen_do.scrubbAtTime(e))
                            }, this.scrub = function (e) {
                                self.isAPIReady_bl && self.isPlaylistLoaded_bl && (isNaN(e) || (e < 0 ? e = 0 : 1 < e && (e = 1), self.audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.scrub(e) : self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.scrub(e) : FWDRAP.hasHTML5Audio ? self.audioType_str == FWDRAP.HLS ? self.flashObject.playerSeek(e * self.HLSDuration) : self.audioScreen_do && self.audioScreen_do.scrub(e) : self.isFlashScreenReady_bl && self.flashObject.scrub(e)))
                            }, this.setPlaybackRate = function (e) {
                                self.isAPIReady_bl && (self.data.defaultPlaybackRate = e, self.audioType_str == FWDRAP.VIDEO && self.videoScreen_do ? self.videoScreen_do.setPlaybackRate(e) : self.audioType_str == FWDRAP.AUDIO && self.audioScreen_do ? self.audioScreen_do.setPlaybackRate(e) : self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do.setPlaybackRate(e))
                            }, this.setVolume = function (e) {
                                self.isAPIReady_bl && (self.volume = e, self.controller_do && self.controller_do.updateVolume(e, !0), self.audioType_str == FWDRAP.YOUTUBE && self.ytb_do ? self.ytb_do.setVolume(e) : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? FWDRAP.hasHTML5Audio && self.audioScreen_do && self.audioScreen_do.setVolume(e) : self.videoScreen_do.setVolume(e))
                            }, this.showCategories = function () {
                                self.isAPIReady_bl && self.categories_do && (self.categories_do.show(self.catId), self.customContextMenu_do && self.customContextMenu_do.updateParent(self.categories_do), self.controller_do.setCategoriesButtonState("selected"))
                            }, this.hideCategories = function () {
                                self.isAPIReady_bl && self.categories_do && (self.categories_do.hide(), self.controller_do.setCategoriesButtonState("unselected"))
                            }, this.showPlaylist = function () {
                                self.isAPIReady_bl && self.playlist_do && (self.data.animateOnIntro_bl ? self.playlist_do.show(!0) : self.playlist_do.show(!1), self.controller_do.setPlaylistButtonState("selected"))
                            }, this.hidePlaylist = function () {
                                self.isAPIReady_bl && (self.playlist_do && (self.data.animateOnIntro_bl ? self.playlist_do.hide(!0) : self.playlist_do.hide(!1), self.controller_do.setPlaylistButtonState("unselected")), self.shareWindow_do && self.shareWindow_do.hide(!0))
                            }, this.share = function () {
                                self.isAPIReady_bl && self.shareWindow_do && self.shareWindow_do.show()
                            }, this.getIsAPIReady = function () {
                                return self.isAPIReady_bl
                            }, this.getCatId = function () {
                                return self.catId
                            }, this.getTrackId = function () {
                                return self.id
                            }, this.getTrackTitle = function () {
                                if (self.isAPIReady_bl) return self.data.playlist_ar[self.id].title
                            }, this.getCurrentTime = function () {
                                if (self.isAPIReady_bl) return self.audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.getCurrentTime() : self.audioType_str == FWDRAP.AUDIO ? self.audioScreen_do.getCurrentTime() : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? void 0 : self.videoScreen_do.getCurrentTime()
                            }, this.getDuration = function () {
                                if (self.isAPIReady_bl) return self.audioType_str == FWDRAP.YOUTUBE ? self.ytb_do.getDuration() : self.audioType_str == FWDRAP.AUDIO ? self.audioScreen_do.getDuration() : self.audioType_str != FWDRAP.VIDEO && self.audioType_str != FWDRAP.HLS || !self.videoScreen_do ? void 0 : self.videoScreen_do.getDuration()
                            }, this.downloadMP3 = function (e) {
                                if (self.isAPIReady_bl) {
                                    if ("file:" == document.location.protocol) {
                                        return self.main_do.addChild(self.info_do), void self.info_do.showText("Downloading mp3 files local is not allowed or possible!. To function properly please test online.")
                                    }
                                    if (null == e && (e = self.id), self.videoNameGa = self.data.playlist_ar[e].titleText, self.videoCat = self.data.cats_ar[self.catId].playlistsName, window.ga) {
                                        var t = "trackName:" + self.videoNameGa;
                                        ga("send", {
                                            hitType: "event",
                                            eventCategory: self.videoCat,
                                            eventAction: "downloaded",
                                            eventLabel: t,
                                            nonInteraction: !0
                                        })
                                    }
                                    var o = self.data.playlist_ar[e].downloadPath,
                                        s = self.data.playlist_ar[e].titleText;
                                    self.data.downloadMp3(o, s)
                                }
                            }, this.buy = function (pId) {
                                if (self.isAPIReady_bl) {
                                    if ("file:" == document.location.protocol) {
                                        var error = "Buying mp3 files local is not allowed or possible!. To function properly please test online.";
                                        return self.main_do.addChild(self.info_do), void self.info_do.showText(error)
                                    }
                                    null == pId && (pId = self.id);
                                    var buy = self.data.playlist_ar[pId].buy; - 1 != buy.indexOf("http") && buy.indexOf("http") < 3 ? window.open(buy) : eval(buy)
                                }
                            }, this.addTrack = function (e, t, o, s, i, n, r) {
                                self.isReady_bl || self.playlist_do && self.playlist_do.addTrack(e, t, o, s, i, n, r)
                            }, this.updateHEXColors = function (e, t) {
                                self.isAPIReady_bl && (self.controller_do.updateHEXColors(e, t), self.largePlayButton_do && self.largePlayButton_do.updateHEXColors(e, "#FFFFFF"), self.shareWindow_do && self.shareWindow_do.updateHEXColors(e, t), self.playbackRateWindow_do && self.playbackRateWindow_do.updateHEXColors(e, t), self.playlist_do && self.playlist_do.updateHEXColors(e, t))
                            }, this.addListener = function (e, t) {
                                if (this.listeners) {
                                    if (null == e) throw Error("type is required.");
                                    if ("object" == typeof e) throw Error("type must be of type String.");
                                    if ("function" != typeof t) throw Error("listener must be of type Function.");
                                    var o = {};
                                    o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
                                }
                            }, this.dispatchEvent = function (e, t) {
                                if (null != this.listeners) {
                                    if (null == e) throw Error("type is required.");
                                    if ("object" == typeof e) throw Error("type must be of type String.");
                                    for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                                        if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                                            if (t)
                                                for (var i in t) this.listeners.events_ar[o][i] = t[i];
                                            this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                                        }
                                }
                            }, this.removeListener = function (e, t) {
                                if (null == e) throw Error("type is required.");
                                if ("object" == typeof e) throw Error("type must be of type String.");
                                if ("function" != typeof t) throw Error("listener must be of type Function." + e);
                                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                                        this.listeners.events_ar.splice(o, 1);
                                        break
                                    }
                            }, self.useYoutube_bl && (-1 != location.protocol.indexOf("file:") && FWDRAPUtils.isIE || -1 != location.protocol.indexOf("file:") && FWDRAPUtils.isOpera)) return self.stageContainer = FWDRAPUtils.getChildById(props.parentId), self.setupmain_do(), self.setupInfo(), self.main_do.addChild(self.info_do), self.info_do.allowToRemove_bl = !1, self.info_do.showText('This browser dosen\'t allow the Youtube API to run local, please test it online or in another browser like Firefox or Chrome! If you don\'t want to use Youtube set <font color="#FF000000">useYoutube:"no"</font>.'), void self.resizeHandler();
                        setTimeout(FWDRAP.checkIfHasYoutube, 100)
                    }
                } else alert("FWDRAP instance name is requires please make sure that the instanceName parameter exsists and it's value is uinique.");

                function handleMediaError() {
                    if (autoRecoverError) {
                        var e = performance.now();
                        !recoverDecodingErrorDate || 3e3 < e - recoverDecodingErrorDate ? (recoverDecodingErrorDate = performance.now(), self.HLSError_str = "try to recover media Error ...", self.hlsJS.recoverMediaError()) : !recoverSwapAudioCodecDate || 3e3 < e - recoverSwapAudioCodecDate ? (recoverSwapAudioCodecDate = performance.now(), self.HLSError_str = "try to swap Audio Codec and recover media Error ...", self.hlsJS.swapAudioCodec(), self.hlsJS.recoverMediaError()) : self.HLSError_str = "cannot recover, last media error recovery failed ..."
                    }
                    self.HLSError_str && (console && console.log(self.HLSError_str), self.main_do.addChild(self.info_do), self.info_do.showText(self.HLSError_str), self.resizeHandler())
                }
            },
            QX, RX, SX, TX;
        FWDRAP.checkIfHasYoutube = function () {
            if (!FWDRAP.checkIfHasYoutube_bl) {
                for (var e = !(FWDRAP.checkIfHasYoutube_bl = !0), t = FWDRAP.instaces_ar.length, o = 0; o < t; o++) FWDRAP.instaces_ar[o].useYoutube_bl && (e = !0);
                e ? setTimeout(FWDRAP.setupYoutubeAPI, 500) : setTimeout(FWDRAP.setupAllInstances, 500)
            }
        }, FWDRAP.setupYoutubeAPI = function () {
            if (!FWDRAP.isYoutubeAPICreated_bl)
                if (FWDRAP.isYoutubeAPICreated_bl = !0, "undefined" != typeof YT) FWDRAP.setupAllInstances();
                else {
                    window.onYouTubeIframeAPIReady = function () {
                        FWDRAP.setupAllInstances()
                    };
                    var e = document.createElement("script");
                    e.src = "https://www.youtube.com/iframe_api";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }
        }, FWDRAP.setupAllInstances = function () {
            if (!FWDRAP.areInstancesCreated_bl) {
                var e = FWDRAPUtils.getUrlArgs(window.location.search).RAPInstanceName;
                "pause" != FWDRAP.audioStartBehaviour && "stop" != FWDRAP.audioStartBehaviour && "none" != FWDRAP.audioStartBehaviour && (FWDRAP.audioStartBehaviour = "pause"), FWDRAPUtils.isMobile_bl && (FWDRAP.audioStartBehaviour = "stop"), FWDRAP.areInstancesCreated_bl = !0;
                var t, o = FWDRAP.instaces_ar.length;
                if (e)
                    for (var s = 0; s < o; s++)
                        if ((t = FWDRAP.instaces_ar[s]).props.instanceName == e) return FWDRAP.isEmbedded_bl = !0, void t.init();
                for (s = 0; s < o; s++) t = FWDRAP.instaces_ar[s], FWDRAP.instaces_ar[s - 1], t.init()
            }
        }, FWDRAP.setPrototype = function () {
            FWDRAP.prototype = new FWDRAPEventDispatcher
        }, FWDRAP.pauseAllAudio = function (e) {
            for (var t, o = FWDRAP.instaces_ar.length, s = 0; s < o; s++)(t = FWDRAP.instaces_ar[s]) != e && t.stop()
        }, FWDRAP.stopAllAudio = function (e) {
            for (var t, o = FWDRAP.instaces_ar.length, s = 0; s < o; s++)(t = FWDRAP.instaces_ar[s]) != e && t.stop()
        }, FWDRAP.hasHTML5Audio = (QX = document.createElement("audio"), RX = !1, QX.canPlayType && (RX = Boolean("probably" == QX.canPlayType("audio/mpeg") || "maybe" == QX.canPlayType("audio/mpeg"))), !!self.isMobile_bl || RX), FWDRAP.hasHTMLHLS = (SX = document.createElement("video"), TX = !1, SX.canPlayType && (TX = Boolean("probably" === SX.canPlayType("application/vnd.apple.mpegurl") || "maybe" === SX.canPlayType("application/vnd.apple.mpegurl"))), TX), FWDRAP.getAudioFormats = function () {
            var e = document.createElement("audio");
            if (e.canPlayType) {
                var t = "",
                    o = [];
                return "probably" != e.canPlayType("audio/mpeg") && "maybe" != e.canPlayType("audio/mpeg") || (t += ".mp3"), "probably" != e.canPlayType("audio/ogg") && "maybe" != e.canPlayType("audio/ogg") || (t += ".ogg"), "probably" != e.canPlayType("audio/mp4") && "maybe" != e.canPlayType("audio/mp4") || (t += ".webm"), (o = t.split(".")).shift(), e = null, o
            }
        }(), FWDRAP.hasCanvas = Boolean(document.createElement("canvas")), FWDRAP.formatTotalTime = function (e) {
            if ("string" == typeof e && -1 != e.indexOf(":")) return e.length <= 5 ? e : "0:" + e;
            e /= 1e3;
            var t = Math.floor(e / 3600),
                o = e % 3600,
                s = Math.floor(o / 60),
                i = o % 60,
                n = Math.ceil(i);
            return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00/00:00" : 0 < t ? t + ":" + s + ":" + n : s + ":" + n
        }, FWDRAP.getAudioFormats = function () {
            var e = document.createElement("audio");
            if (e.canPlayType) {
                var t = "",
                    o = [];
                return "probably" != e.canPlayType("audio/mpeg") && "maybe" != e.canPlayType("audio/mpeg") || (t += ".mp3"), "probably" != e.canPlayType("audio/ogg") && "maybe" != e.canPlayType("audio/ogg") || (t += ".ogg"), "probably" != e.canPlayType("audio/mp4") && "maybe" != e.canPlayType("audio/mp4") || (t += ".webm"), (o = t.split(".")).shift(), e = null, o
            }
        }(), FWDRAP.instaces_ar = [], FWDRAP.YOUTUBE = "youtube", FWDRAP.VIDEO = "video", FWDRAP.AUDIO = "audio", FWDRAP.READY = "ready", FWDRAP.START_TO_LOAD_PLAYLIST = "startToLoadPlaylist", FWDRAP.LOAD_PLAYLIST_COMPLETE = "loadPlaylistComplete", FWDRAP.STOP = "stop", FWDRAP.PLAY = "play", FWDRAP.PAUSE = "pause", FWDRAP.UPDATE = "update", FWDRAP.UPDATE_TIME = "updateTime", FWDRAP.ERROR = "error", FWDRAP.PLAY_COMPLETE = "playComplete", FWDRAP.POPUP = "popup", FWDRAP.START = "start", FWDRAP.HLS = "hls_flash", window.FWDRAP = FWDRAP
    }(window), function (window) {
        var FWDRAPAudioData = function (props, playListElement, parent) {
            var self = this,
                prototype = FWDRAPAudioData.prototype;
            this.xhr = null, this.emailXHR = null, this.playlist_ar = null, this.dlIframe = null, this.mainPreloader_img = null, this.bk_img = null, this.thumbnail_img = null, this.separator1_img = null, this.separator2_img = null, this.prevN_img = null, this.playN_img = null, this.pauseN_img = null, this.nextN_img = null, this.mainScrubberBkLeft_img = null, this.mainScrubberBkRight_img = null, this.mainScrubberDragLeft_img = null, this.mainScrubberLine_img = null, this.mainScrubberLeftProgress_img = null, this.volumeScrubberBkLeft_img = null, this.volumeScrubberBkRight_img = null, this.volumeScrubberDragLeft_img = null, this.volumeScrubberLine_img = null, this.volumeN_img = null, this.volumeS_img = null, this.volumeD_img = null, this.progressLeft_img = null, this.titleBarLeft_img = null, this.titleBarRigth_img = null, this.categoriesN_img = null, this.replayN_img = null, this.playlistN_img = null, this.shuffleN_img = null, this.facebookN_img = null, this.popupN_img = null, this.downloaderN_img = null, this.titlebarAnimBkPath_img = null, this.titlebarLeftPath_img = null, this.titlebarRightPath_img = null, this.soundAnimationPath_img = null, this.playlistItemBk1_img = null, this.playlistItemBk2_img = null, this.playlistSeparator_img = null, this.playlistScrBkTop_img = null, this.playlistScrBkMiddle_img = null, this.playlistScrBkBottom_img = null, this.playlistScrDragTop_img = null, this.playlistScrDragMiddle_img = null, this.playlistScrDragBottom_img = null, this.playlistScrLines_img = null, this.playlistScrLinesOver_img = null, this.playlistPlayButtonN_img = null, this.playlistItemGrad1_img = null, this.playlistItemGrad2_img = null, this.playlistItemProgress1_img = null, this.playlistItemProgress2_img = null, this.playlistDownloadButtonN_img = null, this.catNextN_img = null, this.catPrevN_img = null, this.catPrevD_img = null, this.categories_el = null, this.scs_el = null, this.props_obj = props, this.skinPaths_ar = [], this.images_ar = [], this.cats_ar = [], this.scClientId_str = this.props_obj.soundCloudAPIKey, this.hubhopperAPIKey = "QiZ66BeNFQFluOlXvAmI34WQZWqb0ykazSWUGwe2", this.flashPath_str = null, this.mp3DownloaderPath_str = null, this.proxyPath_str = null, this.proxyFolderPath_str = null, this.mailPath_str = null, this.skinPath_str = null, this.controllerBkPath_str = null, this.thumbnailBkPath_str = null, this.playlistIdOrPath_str = null, this.mainScrubberBkMiddlePath_str = null, this.volumeScrubberBkMiddlePath_str = null, this.mainScrubberDragMiddlePath_str = null, this.volumeScrubberDragMiddlePath_str = null, this.timeColor_str = null, this.titleColor_str = null, this.progressMiddlePath_str = null, this.sourceURL_str = null, this.titlebarBkMiddlePattern_str = null, this.playlistPlayButtonN_str = null, this.playlistPlayButtonS_str = null, this.playlistPauseButtonN_str = null, this.playlistPauseButtonS_str = null, this.trackTitleNormalColor_str = null, this.trackTitleSelected_str = null, this.trackDurationColor_str = null, this.categoriesId_str = null, this.thumbnailSelectedType_str = null, this.facebookAppId_str = null, this.pauseSPath_str = null, this.playSPath_str = null, this.prevSPath_str = null, this.nextSPath_str = null, this.volumeSPath_str = null, this.volumeDPath_str = null, this.categoriesSPath_str = null, this.replaySPath_str = null, this.toopTipBk_str = null, this.toolTipsButtonFontColor_str = null, this.toopTipPointer_str = null, this.toopTipPointerUp_str = null, this.prevId = -1, this.totalCats = 0, this.countLoadedSkinImages = 0, this.volume = 1, this.startSpaceBetweenButtons = 0, this.spaceBetweenButtons = 0, this.mainScrubberOffsetTop = 0, this.spaceBetweenMainScrubberAndTime = 0, this.startTimeSpace = 0, this.scrubbersOffsetWidth = 0, this.scrubbersOffestTotalWidth = 0, this.volumeButtonAndScrubberOffsetTop = 0, this.maxPlaylistItems = 0, this.separatorOffsetOutSpace = 0, this.separatorOffsetInSpace = 0, this.lastButtonsOffsetTop = 0, this.allButtonsOffsetTopAndBottom = 0, this.controllerHeight = 0, this.titleBarOffsetTop = 0, this.scrubberOffsetBottom = 0, this.equlizerOffsetLeft = 0, this.nrOfVisiblePlaylistItems = 0, this.trackTitleOffsetLeft = 0, this.playPauseButtonOffsetLeftAndRight = 0, this.durationOffsetRight = 0, this.downloadButtonOffsetRight = 0, this.scrollbarOffestWidth = 0, this.resetLoadIndex = -1, this.startAtPlaylist = 0, this.startAtTrack = 0, this.totalCategories = 0, this.thumbnailMaxWidth = 0, this.buttonsMargins = 0, this.thumbnailMaxHeight = 0, this.horizontalSpaceBetweenThumbnails = 0, this.verticalSpaceBetweenThumbnails = 0, this.countID3 = 0, this.toolTipsButtonsHideDelay = 0, this.JSONPRequestTimeoutId_to, this.showLoadPlaylistErrorId_to, this.dispatchPlaylistLoadCompleteWidthDelayId_to, this.loadImageId_to, this.dispatchLoadSkinCompleteWithDelayId_to, this.loadPreloaderId_to, this.isPlaylistDispatchingError_bl = !1, this.allowToChangeVolume_bl = !0, this.showContextMenu_bl = !1, this.showButtonsToolTips_bl = !1, this.autoPlay_bl = !1, this.loop_bl = !1, this.playlistLoop_bl = !0, this.shuffle_bl = !1, this.showLoopButton_bl = !1, this.showShuffleButton_bl = !1, this.showDownloadMp3Button_bl = !1, this.showBuyButton_bl = !1, this.showPlaylistsButtonAndPlaylists_bl = !1, this.showPlaylistsByDefault_bl = !1, this.showPlayListButtonAndPlaylist_bl = !1, this.showFacebookButton_bl = !1, this.showPopupButton_bl = !1, this.expandControllerBackground_bl = !1, this.animateOnIntro_bl = !1, this.showNextAndPrevButtons_bl = !1, this.showPlayListByDefault_bl = !1, this.isDataLoaded_bl = !1, this.useDeepLinking_bl = !1, this.showSoundCloudUserNameInTitle_bl = !1, this.showThumbnail_bl = !1, this.showSoundAnimation_bl = !1, this.showPlaylistItemPlayButton_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, self.init = function () {
                self.parseProperties()
            }, self.parseProperties = function () {
                if (this.useYoutube_bl = self.props_obj.useYoutube || "no", this.useYoutube_bl = "yes" == self.useYoutube_bl, this.useVideo_bl = self.props_obj.useVideo || "no", this.useVideo_bl = "yes" == self.useVideo_bl, self.useHEXColorsForSkin_bl = self.props_obj.useHEXColorsForSkin, self.useHEXColorsForSkin_bl = "yes" == self.useHEXColorsForSkin_bl, -1 != location.protocol.indexOf("file:") && (self.useHEXColorsForSkin_bl = !1), self.categoriesId_str = self.props_obj.playlistsId, self.categoriesId_str)
                    if (self.mainFolderPath_str = self.props_obj.mainFolderPath, self.mainFolderPath_str)
                        if (self.mainFolderPath_str.lastIndexOf("/") + 1 != self.mainFolderPath_str.length && (self.mainFolderPath_str += "/"), self.skinPath_str = self.props_obj.skinPath, self.skinPath_str) {
                            self.skinPath_str.lastIndexOf("/") + 1 != self.skinPath_str.length && (self.skinPath_str += "/"), self.skinPath_str = self.mainFolderPath_str + self.skinPath_str, self.flashPath_str = self.mainFolderPath_str + "flashlsChromeless.swf", self.proxyPath_str = self.mainFolderPath_str + "proxy.php", self.proxyFolderPath_str = self.mainFolderPath_str + "proxyFolder.php", self.mailPath_str = self.mainFolderPath_str + "sendMail.php", self.mp3DownloaderPath_str = self.mainFolderPath_str + "downloader.php", self.hlsPath_str = self.mainFolderPath_str + "hls.js", self.categories_el = document.getElementById(self.categoriesId_str);
                            var e = FWDRAPUtils.getChildren(self.categories_el);
                            if (self.totalCats = e.length, 0 != self.totalCats) {
                                for (var t = 0; t < self.totalCats; t++) {
                                    var o = {};
                                    if (child = e[t], !FWDRAPUtils.hasAttribute(child, "data-source")) return void setTimeout(function () {
                                        null != self && self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                                            text: "Attribute <font color='#FF0000'>data-source</font> is required in the categories html element at position <font color='#FF0000'>" + (t + 1)
                                        })
                                    }, 50);
                                    if (!FWDRAPUtils.hasAttribute(child, "data-thumbnail-path")) return void setTimeout(function () {
                                        null != self && self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                                            text: "Attribute <font color='#FF0000'>data-thumbnail-path</font> is required in the categories html element at position <font color='#FF0000'>" + (t + 1)
                                        })
                                    }, 50);
                                    o.source = FWDRAPUtils.getAttributeValue(child, "data-source"), o.playlistsName = FWDRAPUtils.getAttributeValue(child, "data-playlist-name"), o.thumbnailPath = FWDRAPUtils.getAttributeValue(child, "data-thumbnail-path"), o.htmlContent = child.innerHTML, o.htmlText_str = child.innerText, self.cats_ar[t] = o
                                }
                                self.facebookAppId_str = self.props_obj.facebookAppId || void 0, self.totalCategories = self.cats_ar.length, self.playlistIdOrPath_str = self.props_obj.playlistIdOrPath || void 0, self.timeColor_str = self.props_obj.timeColor || "#FF0000", self.trackTitleNormalColor_str = self.props_obj.trackTitleNormalColor || "#FF0000", self.trackTitleSelected_str = self.props_obj.trackTitleSelectedColor || "#FF0000", self.trackDurationColor_str = self.props_obj.trackDurationColor || "#FF0000", self.titleColor_str = self.props_obj.titleColor || "#FF0000", self.thumbnailSelectedType_str = self.props_obj.thumbnailSelectedType || "opacity", "blackAndWhite" != self.thumbnailSelectedType_str && "threshold" != self.thumbnailSelectedType_str && "opacity" != self.thumbnailSelectedType_str && (self.thumbnailSelectedType_str = "opacity"), (self.isMobile_bl || FWDRAPUtils.isIEAndLessThen9) && (self.thumbnailSelectedType_str = "opacity"), "file:" == document.location.protocol && (self.thumbnailSelectedType_str = "opacity"), self.startAtPlaylist = self.props_obj.startAtPlaylist || 0, isNaN(self.startAtPlaylist) && (self.startAtPlaylist = 0), self.startAtPlaylist < 0 ? self.startAtPlaylist = 0 : self.startAtPlaylist > self.totalCats - 1 && (self.startAtPlaylist = self.totalCats - 1), self.startAtRandomTrack_bl = self.props_obj.startAtRandomTrack, self.startAtRandomTrack_bl = "no" != self.startAtRandomTrack_bl, self.startAtTrack = self.props_obj.startAtTrack || 0, self.volume = self.props_obj.volume, self.volume || (self.volume = 1), isNaN(self.volume) && (volume = 1), 1 < self.volume ? self.volume = 1 : self.volume < 0 && (self.volume = 0), self.toolTipsButtonFontColor_str = self.props_obj.toolTipsButtonFontColor || "#FF0000", self.buttonsMargins = self.props_obj.buttonsMargins || 0, self.thumbnailMaxWidth = self.props_obj.thumbnailMaxWidth || 330, self.thumbnailMaxHeight = self.props_obj.thumbnailMaxHeight || 330, self.horizontalSpaceBetweenThumbnails = self.props_obj.horizontalSpaceBetweenThumbnails, null == self.horizontalSpaceBetweenThumbnails && (self.horizontalSpaceBetweenThumbnails = 40), self.verticalSpaceBetweenThumbnails = parseInt(self.props_obj.verticalSpaceBetweenThumbnails), null == self.verticalSpaceBetweenThumbnails && (self.verticalSpaceBetweenThumbnails = 40), self.toolTipsButtonsHideDelay = self.props_obj.toolTipsButtonsHideDelay || 1.5, self.inputSearchTextOffsetTop = self.props_obj.inputSearchTextOffsetTop, self.inputSearchOffsetLeft = self.props_obj.inputSearchOffsetLeft, self.startSpaceBetweenButtons = self.props_obj.startSpaceBetweenButtons || 0, self.spaceBetweenButtons = self.props_obj.spaceBetweenButtons || 0, self.mainScrubberOffsetTop = self.props_obj.mainScrubberOffsetTop || 100, self.spaceBetweenMainScrubberAndTime = self.props_obj.spaceBetweenMainScrubberAndTime, self.startTimeSpace = self.props_obj.startTimeSpace, self.scrubbersOffsetWidth = self.props_obj.scrubbersOffsetWidth || 0, self.scrubbersOffestTotalWidth = self.props_obj.scrubbersOffestTotalWidth || 0, self.volumeButtonAndScrubberOffsetTop = self.props_obj.volumeButtonAndScrubberOffsetTop || 0, self.spaceBetweenVolumeButtonAndScrubber = self.props_obj.spaceBetweenVolumeButtonAndScrubber || 0, self.volumeScrubberOffestWidth = self.props_obj.volumeScrubberOffestWidth || 0, self.scrubberOffsetBottom = self.props_obj.scrubberOffsetBottom || 0, self.equlizerOffsetLeft = self.props_obj.equlizerOffsetLeft || 0, self.nrOfVisiblePlaylistItems = self.props_obj.nrOfVisiblePlaylistItems || 0, self.trackTitleOffsetLeft = self.props_obj.trackTitleOffsetLeft || 0, self.playPauseButtonOffsetLeftAndRight = self.props_obj.playPauseButtonOffsetLeftAndRight || 0, self.durationOffsetRight = self.props_obj.durationOffsetRight || 0, self.downloadButtonOffsetRight = self.props_obj.downloadButtonOffsetRight || 0, self.scrollbarOffestWidth = self.props_obj.scrollbarOffestWidth || 0, self.maxPlaylistItems = self.props_obj.maxPlaylistItems || 200, self.controllerHeight = self.props_obj.controllerHeight || 200, self.titleBarOffsetTop = self.props_obj.titleBarOffsetTop || 0, self.separatorOffsetInSpace = self.props_obj.separatorOffsetInSpace || 0, self.lastButtonsOffsetTop = self.props_obj.lastButtonsOffsetTop || 0, self.allButtonsOffsetTopAndBottom = self.props_obj.allButtonsOffsetTopAndBottom || 0, self.separatorOffsetOutSpace = self.props_obj.separatorOffsetOutSpace || 0, self.searchBarHeight = self.props_obj.searchBarHeight || 50, self.inputOffestTop = self.props_obj.inputOffestTop || 50, self.volumeScrubberWidth = self.props_obj.volumeScrubberWidth || 10, 200 < self.volumeScrubberWidth && (self.volumeScrubberWidth = 200), self.playbackRateWindowTextColor_str = self.props_obj.playbackRateWindowTextColor || "#FF0000", this.addKeyboardSupport_bl = self.props_obj.addKeyboardSupport || "no", this.addKeyboardSupport_bl = "yes" == self.addKeyboardSupport_bl, self.showPlaylistsSearchInput_bl = self.props_obj.showPlaylistsSearchInput, self.showPlaylistsSearchInput_bl = "yes" == self.showPlaylistsSearchInput_bl, self.randomizePlaylist_bl = self.props_obj.randomizePlaylist, self.randomizePlaylist_bl = "yes" == self.randomizePlaylist_bl, self.showPlaybackRateButton_bl = self.props_obj.showPlaybackRateButton, self.showPlaybackRateButton_bl = "yes" == self.showPlaybackRateButton_bl, self.playTrackAfterPlaylistLoad_bl = self.props_obj.playTrackAfterPlaylistLoad, self.playTrackAfterPlaylistLoad_bl = "yes" == self.playTrackAfterPlaylistLoad_bl, self.normalButtonsColor_str = self.props_obj.normalHEXButtonsColor || "#FFFFFF", self.selectedButtonsColor_str = self.props_obj.selectedHEXButtonsColor || "#999999", self.secondaryLabelsColor_str = self.props_obj.secondaryLabelsColor || "#FF0000", self.mainLabelsColor_str = self.props_obj.mainLabelsColor || "#FF0000", self.borderColor_str = self.props_obj.borderColor || "#FF0000", self.textColor_str = self.props_obj.textColor_str || "#FF0000", self.inputBackgroundColor_str = self.props_obj.inputBackgroundColor || "#FF0000", self.inputColor_str = self.props_obj.inputColor || "#FF0000", self.defaultPlaybackRate = self.props_obj.defaultPlaybackRate || 1, self.defaultPlaybackRate = parseFloat(self.defaultPlaybackRate), isNaN(self.defaultPlaybackRate) && (self.defaultPlaybackRate = 1), self.defaultPlaybackRate < .5 ? self.defaultPlaybackRate = .5 : 2 < self.defaultPlaybackRate && (self.defaultPlaybackRate = 2), self.rightClickContextMenu_str = self.props_obj.rightClickContextMenu || "developer", test = "developer" == self.rightClickContextMenu_str || "disabled" == self.rightClickContextMenu_str || "default" == self.rightClickContextMenu_str, test || (self.rightClickContextMenu_str = "developer"), self.playlistBackgroundColor_str = self.props_obj.playlistBackgroundColor || "transparent", self.searchInputColor_str = self.props_obj.searchInputColor || "#FF0000", self.shareWindowBackgroundColor_str = self.props_obj.shareWindowBackgroundColor || "transparent", self.shareWindowBackgroundColor_str = self.props_obj.shareWindowBackgroundColor_str, self.showButtonsToolTips_bl = self.props_obj.showButtonsToolTips, self.showButtonsToolTips_bl = "no" != self.showButtonsToolTips_bl, self.isMobile_bl && (self.showButtonsToolTips_bl = !1), self.autoPlay_bl = self.props_obj.autoPlay, self.autoPlay_bl = "yes" == self.autoPlay_bl, self.disableScrubber_bl = self.props_obj.disableAudioScrubbar, self.disableScrubber_bl = "yes" == self.disableScrubber_bl, self.showVideoFullScreenButton_bl = self.props_obj.showFullScreenButton, self.showVideoFullScreenButton_bl = "yes" == self.showVideoFullScreenButton_bl, self.showShareButton_bl = self.props_obj.showShareButton, self.showShareButton_bl = "yes" == self.showShareButton_bl, self.showSortButtons_bl = self.props_obj.showSortButtons, self.showSortButtons_bl = "no" != self.showSortButtons_bl, self.loop_bl = self.props_obj.loop, self.loop_bl = "yes" == self.loop_bl, self.playVideoOnlyWhenLoggedIn_bl = self.props_obj.playTrackOnlyWhenLoggedIn, self.playVideoOnlyWhenLoggedIn_bl = "yes" == self.playVideoOnlyWhenLoggedIn_bl, self.isLoggedIn_bl = self.props_obj.isLoggedIn, self.isLoggedIn_bl = "yes" == self.isLoggedIn_bl, self.loggedInMessage_str = self.props_obj.loggedInMessage || "Only loggedin users can view this video", self.playlistLoop_bl = self.props_obj.playlistLoop, self.playlistLoop_bl = "yes" == self.playlistLoop_bl, self.shuffle_bl = self.props_obj.shuffle, self.shuffle_bl = "yes" == self.shuffle_bl, self.useDeepLinking_bl = self.props_obj.useDeepLinking, self.useDeepLinking_bl = "yes" == self.useDeepLinking_bl, self.showSoundCloudUserNameInTitle_bl = self.props_obj.showSoundCloudUserNameInTitle, self.showSoundCloudUserNameInTitle_bl = "yes" == self.showSoundCloudUserNameInTitle_bl, self.showThumbnail_bl = self.props_obj.showThumbnail, self.showThumbnail_bl = "yes" == self.showThumbnail_bl, self.showLoopButton_bl = self.props_obj.showLoopButton, self.showLoopButton_bl = "no" != self.props_obj.showLoopButton, self.showPlayListButtonAndPlaylist_bl = self.props_obj.showPlayListButtonAndPlaylist, self.showPlayListButtonAndPlaylist_bl = "no" != self.showPlayListButtonAndPlaylist_bl, FWDRAPUtils.isAndroid && self.showPlayListButtonAndPlaylist_bl && "no" == self.props_obj.showPlayListOnAndroid && (self.showPlayListButtonAndPlaylist_bl = !1), self.privateVideoPassword_str = self.props_obj.privatePassword, self.showPlaylistsButtonAndPlaylists_bl = self.props_obj.showPlaylistsButtonAndPlaylists, self.showPlaylistsButtonAndPlaylists_bl = "no" != self.showPlaylistsButtonAndPlaylists_bl, self.showPlaylistsByDefault_bl = self.props_obj.showPlaylistsByDefault, self.showPlaylistsByDefault_bl = "yes" == self.showPlaylistsByDefault_bl, self.showShuffleButton_bl = self.props_obj.showShuffleButton, self.showShuffleButton_bl = "no" != self.props_obj.showShuffleButton, self.showDownloadMp3Button_bl = self.props_obj.showDownloadMp3Button, self.showDownloadMp3Button_bl = "no" != self.showDownloadMp3Button_bl, self.showBuyButton_bl = self.props_obj.showBuyButton, self.showBuyButton_bl = "no" != self.showBuyButton_bl, self.showFacebookButton_bl = self.props_obj.showFacebookButton, self.showFacebookButton_bl = "no" != self.props_obj.showFacebookButton, self.showPopupButton_bl = self.props_obj.showPopupButton, self.showPopupButton_bl = "no" != self.showPopupButton_bl, self.expandControllerBackground_bl = self.props_obj.expandBackground, self.expandControllerBackground_bl = "yes" == self.expandControllerBackground_bl, self.showPlaylistItemPlayButton_bl = self.props_obj.showPlaylistItemPlayButton, self.showPlaylistItemPlayButton_bl = "no" != self.showPlaylistItemPlayButton_bl, self.showPlaylistItemDownloadButton_bl = self.props_obj.showPlaylistItemDownloadButton, self.showPlaylistItemDownloadButton_bl = "no" != self.showPlaylistItemDownloadButton_bl, self.showPlaylistItemBuyButton_bl = self.props_obj.showPlaylistItemBuyButton, self.showPlaylistItemBuyButton_bl = "no" != self.showPlaylistItemBuyButton_bl, self.forceDisableDownloadButtonForPodcast_bl = self.props_obj.forceDisableDownloadButtonForPodcast, self.forceDisableDownloadButtonForPodcast_bl = "yes" == self.forceDisableDownloadButtonForPodcast_bl, self.forceDisableDownloadButtonForOfficialFM_bl = self.props_obj.forceDisableDownloadButtonForOfficialFM, self.forceDisableDownloadButtonForOfficialFM_bl = "yes" == self.forceDisableDownloadButtonForOfficialFM_bl, self.forceDisableDownloadButtonForFolder_bl = self.props_obj.forceDisableDownloadButtonForFolder, self.forceDisableDownloadButtonForFolder_bl = "yes" == self.forceDisableDownloadButtonForFolder_bl, self.showTracksNumbers_bl = self.props_obj.showTracksNumbers, self.showTracksNumbers_bl = "yes" == self.showTracksNumbers_bl, self.disableAudioScrubbar_bl = self.props_obj.disableAudioScrubbar, self.disableAudioScrubbar_bl = "no" != self.disableAudioScrubbar_bl, self.animateOnIntro_bl = self.props_obj.animateOnIntro, self.animateOnIntro_bl = "yes" == self.animateOnIntro_bl, self.showNextAndPrevButtons_bl = self.props_obj.showNextAndPrevButtons, self.showNextAndPrevButtons_bl = "yes" == self.showNextAndPrevButtons_bl, self.showPlayListByDefault_bl = self.props_obj.showPlayListByDefault, self.showPlayListByDefault_bl = "no" != self.showPlayListByDefault_bl, self.showSoundAnimation_bl = self.props_obj.showSoundAnimation, self.showSoundAnimation_bl = "yes" == self.showSoundAnimation_bl, self.showPlaylistItemPlayButton_bl = self.props_obj.showPlaylistItemPlayButton, self.showPlaylistItemPlayButton_bl = "no" != self.showPlaylistItemPlayButton_bl, self.addScrollBarMouseWheelSupport_bl = self.props_obj.addScrollBarMouseWheelSupport, self.addScrollBarMouseWheelSupport_bl = "no" != self.addScrollBarMouseWheelSupport_bl, self.showMainScrubberToolTipLabel_bl = self.props_obj.showMainScrubberAndVolumeScrubberToolTipLabel, self.showMainScrubberToolTipLabel_bl = "yes" == self.showMainScrubberToolTipLabel_bl, self.showSearchBar_bl = self.props_obj.showSearchBar, self.showSearchBar_bl = "no" != self.showSearchBar_bl, self.usePlaylistsSelectBox_bl = self.props_obj.usePlaylistsSelectBox, self.usePlaylistsSelectBox_bl = "yes" == self.usePlaylistsSelectBox_bl, self.showPlaylistsSelectBoxNumbers_bl = self.props_obj.showPlaylistsSelectBoxNumbers, self.showPlaylistsSelectBoxNumbers_bl = "yes" == self.showPlaylistsSelectBoxNumbers_bl, self.mainSelectorBackgroundSelectedColor = self.props_obj.mainSelectorBackgroundSelectedColor || "#FFFFFF", self.mainSelectorTextNormalColor = self.props_obj.mainSelectorTextNormalColor || "#FFFFFF", self.mainSelectorTextSelectedColor = self.props_obj.mainSelectorTextSelectedColor || "#000000", self.mainButtonBackgroundNormalColor = self.props_obj.mainButtonBackgroundNormalColor || "#212021", self.mainButtonBackgroundSelectedColor = self.props_obj.mainButtonBackgroundSelectedColor || "#FFFFFF", self.mainButtonTextNormalColor = self.props_obj.mainButtonTextNormalColor || "#FFFFFF", self.mainButtonTextSelectedColor = self.props_obj.mainButtonTextSelectedColor || "#000000", self.atbTimeBackgroundColor = self.props_obj.atbTimeBackgroundColor || "transparent", self.atbTimeTextColorNormal = self.props_obj.atbTimeTextColorNormal || "#888888", self.atbTimeTextColorSelected = self.props_obj.atbTimeTextColorSelected || "#FFFFFF", self.atbButtonTextNormalColor = self.props_obj.atbButtonTextNormalColor || "#888888", self.atbButtonTextSelectedColor = self.props_obj.atbButtonTextSelectedColor || "#FFFFFF", self.atbButtonBackgroundNormalColor = self.props_obj.atbButtonBackgroundNormalColor || "#FFFFFF", self.atbButtonBackgroundSelectedColor = self.props_obj.atbButtonBackgroundSelectedColor || "#000000", self.scrubbersToolTipLabelBackgroundColor = self.props_obj.scrubbersToolTipLabelBackgroundColor || "#FFFFFF", self.scrubbersToolTipLabelFontColor = self.props_obj.scrubbersToolTipLabelFontColor || "#000000", self.preloaderPath_str = self.skinPath_str + "logo.png", self.mainPreloader_img = new Image, self.mainPreloader_img.onerror = self.onSkinLoadErrorHandler, self.mainPreloader_img.onload = self.onPreloaderLoadHandler, self.mainPreloader_img.src = self.skinPath_str + "preloader.png", self.arrowN_str = self.skinPath_str + "combobox-arrow-normal.png", self.arrowS_str = self.skinPath_str + "combobox-arrow-selected.png", self.comboboxBk1_str = self.skinPath_str + "combobox-item-background1.png", self.comboboxBk2_str = self.skinPath_str + "combobox-item-background2.png", self.shareBkPath_str = self.skinPath_str + "categories-background.png", self.skinPaths_ar = [{
                                    img: self.controllerBk_img = new Image,
                                    src: self.skinPath_str + "controller-background.png"
                                }, {
                                    img: self.separator1_img = new Image,
                                    src: self.skinPath_str + "separator.png"
                                }, {
                                    img: self.separator2_img = new Image,
                                    src: self.skinPath_str + "separator.png"
                                }, {
                                    img: self.prevN_img = new Image,
                                    src: self.skinPath_str + "prev-button.png"
                                }, {
                                    img: self.playN_img = new Image,
                                    src: self.skinPath_str + "play-button.png"
                                }, {
                                    img: self.pauseN_img = new Image,
                                    src: self.skinPath_str + "pause-button.png"
                                }, {
                                    img: self.nextN_img = new Image,
                                    src: self.skinPath_str + "next-button.png"
                                }, {
                                    img: self.mainScrubberBkLeft_img = new Image,
                                    src: self.skinPath_str + "scrubber-left-background.png"
                                }, {
                                    img: self.mainScrubberBkRight_img = new Image,
                                    src: self.skinPath_str + "scrubber-right-background.png"
                                }, {
                                    img: self.mainScrubberDragLeft_img = new Image,
                                    src: self.skinPath_str + "scrubber-left-drag.png"
                                }, {
                                    img: self.mainScrubberLine_img = new Image,
                                    src: self.skinPath_str + "scrubber-line.png"
                                }, {
                                    img: self.mainScrubberLeftProgress_img = new Image,
                                    src: self.skinPath_str + "progress-left.png"
                                }, {
                                    img: self.volumeScrubberDragLeft_img = new Image,
                                    src: self.skinPath_str + "scrubber-left-drag.png"
                                }, {
                                    img: self.volumeN_img = new Image,
                                    src: self.skinPath_str + "volume-icon.png"
                                }, {
                                    img: self.progressLeft_img = new Image,
                                    src: self.skinPath_str + "progress-left.png"
                                }, {
                                    img: self.categoriesN_img = new Image,
                                    src: self.skinPath_str + "categories-button.png"
                                }, {
                                    img: self.replayN_img = new Image,
                                    src: self.skinPath_str + "replay-button.png"
                                }, {
                                    img: self.playlistN_img = new Image,
                                    src: self.skinPath_str + "playlist-button.png"
                                }, {
                                    img: self.shuffleN_img = new Image,
                                    src: self.skinPath_str + "shuffle-button.png"
                                }, {
                                    img: self.shareN_img = new Image,
                                    src: self.skinPath_str + "share.png"
                                }, {
                                    img: self.popupN_img = new Image,
                                    src: self.skinPath_str + "popup-button.png"
                                }, {
                                    img: self.downloaderN_img = new Image,
                                    src: self.skinPath_str + "download-button.png"
                                }, {
                                    img: self.buyN_img = new Image,
                                    src: self.skinPath_str + "buy-button.png"
                                }, {
                                    img: self.titlebarAnimBkPath_img = new Image,
                                    src: self.skinPath_str + "titlebar-equlizer-background.png"
                                }, {
                                    img: self.titlebarLeftPath_img = new Image,
                                    src: self.skinPath_str + "titlebar-grad-left.png"
                                }, {
                                    img: self.playbackRateNormal_img = new Image,
                                    src: self.skinPath_str + "playback-rate-normal.png"
                                }, {
                                    img: self.soundAnimationPath_img = new Image,
                                    src: self.skinPath_str + "equalizer.png"
                                }, {
                                    img: self.titleBarLeft_img = new Image,
                                    src: self.skinPath_str + "titlebar-left-pattern.png"
                                }, {
                                    img: self.passColoseN_img = new Image,
                                    src: self.skinPath_str + "categories-close-button.png"
                                }, {
                                    img: self.titleBarRigth_img = new Image,
                                    src: self.skinPath_str + "titlebar-right-pattern.png"
                                }, {
                                    img: self.atbNPath_img = new Image,
                                    src: self.skinPath_str + "a-to-b-button.png"
                                }, {
                                    img: self.closeClooseN_img = new Image,
                                    src: self.skinPath_str + "categories-close-button.png"
                                }], self.skinPaths_ar.push({
                                    img: self.fullScreenN_img = new Image,
                                    src: self.skinPath_str + "full-screen.png"
                                }, {
                                    img: self.normalScreenN_img = new Image,
                                    src: self.skinPath_str + "normal-screen.png"
                                }, {
                                    img: self.largePlayN_img = new Image,
                                    src: self.skinPath_str + "large-play.png"
                                }), self.atbSPath_str = self.skinPath_str + "a-to-b-button-over.png", self.playbackRateSelectedPath_str = self.skinPath_str + "playback-rate-selected.png", self.largePlayS_str = self.skinPath_str + "large-play-over.png", self.fullScreenS_str = self.skinPath_str + "full-screen-over.png", self.normalScreenS_str = self.skinPath_str + "normal-screen-over.png", self.prevSPath_str = self.skinPath_str + "prev-button-over.png", self.playSPath_str = self.skinPath_str + "play-button-over.png", self.pauseSPath_str = self.skinPath_str + "pause-button-over.png", self.nextSPath_str = self.skinPath_str + "next-button-over.png", self.controllerBkPath_str = self.skinPath_str + "controller-background.png", self.thumbnailBkPath_str = self.skinPath_str + "thumbnail-background.png", self.mainScrubberBkMiddlePath_str = self.skinPath_str + "scrubber-middle-background.png", self.mainScrubberDragMiddlePath_str = self.skinPath_str + "scrubber-middle-drag.png", self.volumeScrubberBkMiddlePath_str = self.skinPath_str + "scrubber-middle-background.png", self.volumeScrubberDragMiddlePath_str = self.skinPath_str + "scrubber-middle-drag.png", self.volumeSPath_str = self.skinPath_str + "volume-icon-over.png", self.volumeDPath_str = self.skinPath_str + "volume-icon-disabled.png", self.progressMiddlePath_str = self.skinPath_str + "progress-middle.png", self.categoriesSPath_str = self.skinPath_str + "categories-button-over.png", self.replaySPath_str = self.skinPath_str + "replay-button-over.png", self.toopTipBk_str = self.skinPath_str + "tooltip-background.png", self.toopTipPointer_str = self.skinPath_str + "tooltip-pointer-down.png", self.toopTipPointerUp_str = self.skinPath_str + "tooltip-pointer-up.png", self.playlistSPath_str = self.skinPath_str + "playlist-button-over.png", self.shuffleSPath_str = self.skinPath_str + "shuffle-button-over.png", self.shareSPath_str = self.skinPath_str + "share-over.png", self.popupSPath_str = self.skinPath_str + "popup-button-over.png", self.downloaderSPath_str = self.skinPath_str + "download-button-over.png", self.buySPath_str = self.skinPath_str + "buy-button-over.png", self.titlebarRightPath_str = self.skinPath_str + "titlebar-grad-right.png", self.titlebarBkMiddlePattern_str = self.skinPath_str + "titlebar-middle-pattern.png", self.passButtonNPath_str = self.skinPath_str + "pass-button.png", self.passButtonSPath_str = self.skinPath_str + "pass-button-over.png", self.showPlayListButtonAndPlaylist_bl && (self.skinPaths_ar.push({
                                    img: self.playlistItemBk1_img = new Image,
                                    src: self.skinPath_str + "playlist-item-background1.png"
                                }, {
                                    img: self.playlistItemBk2_img = new Image,
                                    src: self.skinPath_str + "playlist-item-background2.png"
                                }, {
                                    img: self.playlistSeparator_img = new Image,
                                    src: self.skinPath_str + "playlist-separator.png"
                                }, {
                                    img: self.playlistScrBkTop_img = new Image,
                                    src: self.skinPath_str + "playlist-scrollbar-background-top.png"
                                }, {
                                    img: self.playlistScrDragTop_img = new Image,
                                    src: self.skinPath_str + "playlist-scrollbar-drag-bottom.png"
                                }, {
                                    img: self.playlistScrLines_img = new Image,
                                    src: self.skinPath_str + "playlist-scrollbar-lines.png"
                                }, {
                                    img: self.playlistPlayButtonN_img = new Image,
                                    src: self.skinPath_str + "playlist-play-button.png"
                                }, {
                                    img: self.playlistItemGrad1_img = new Image,
                                    src: self.skinPath_str + "playlist-item-grad1.png"
                                }, {
                                    img: self.playlistItemGrad2_img = new Image,
                                    src: self.skinPath_str + "playlist-item-grad2.png"
                                }, {
                                    img: self.playlistItemProgress1_img = new Image,
                                    src: self.skinPath_str + "playlist-item-progress1.png"
                                }, {
                                    img: self.playlistItemProgress2_img = new Image,
                                    src: self.skinPath_str + "playlist-item-progress2.png"
                                }, {
                                    img: self.playlistDownloadButtonN_img = new Image,
                                    src: self.skinPath_str + "playlist-download-button.png"
                                }, {
                                    img: self.playlistBuyButtonN_img = new Image,
                                    src: self.skinPath_str + "playlist-buy-button.png"
                                }), self.playlistDownloadButtonS_str = self.skinPath_str + "playlist-download-button-over.png", self.playlistBuyButtonS_str = self.skinPath_str + "playlist-buy-button-over.png", self.scrBkMiddlePath_str = self.skinPath_str + "playlist-scrollbar-background-middle.png", self.scrBkBottomPath_str = self.skinPath_str + "playlist-scrollbar-background-bottom.png", self.scrDragMiddlePath_str = self.skinPath_str + "playlist-scrollbar-drag-middle.png", self.scrDragBottomPath_str = self.skinPath_str + "playlist-scrollbar-drag-top.png", self.scrLinesSPath_str = self.skinPath_str + "playlist-scrollbar-lines-over.png", self.playlistPlayButtonN_str = self.skinPath_str + "playlist-play-button.png", self.playlistPlayButtonS_str = self.skinPath_str + "playlist-play-button-over.png", self.playlistPauseButtonN_str = self.skinPath_str + "playlist-pause-button.png", self.playlistPauseButtonS_str = self.skinPath_str + "playlist-pause-button-over.png"), self.showSearchBar_bl && (self.skinPaths_ar.push({
                                    img: self.sortAN_img = new Image,
                                    src: self.skinPath_str + "sort-alphabetical-button.png"
                                }, {
                                    img: self.sortNN_img = new Image,
                                    src: self.skinPath_str + "sort-numerical-button.png"
                                }, {
                                    img: self.ascendingN_img = new Image,
                                    src: self.skinPath_str + "ascending-button.png"
                                }, {
                                    img: self.decendingN_img = new Image,
                                    src: self.skinPath_str + "descending-button.png"
                                }), self.sortASPath_str = self.skinPath_str + "sort-alphabetical-button-over.png", self.sortNSPath_str = self.skinPath_str + "sort-numerical-button-over.png", self.ascendingSpath_str = self.skinPath_str + "ascending-button-over.png", self.decendingSpath_str = self.skinPath_str + "descending-button-over.png", self.inputArrowPath_str = self.skinPath_str + "input-arrow.png"), self.showPlaylistsButtonAndPlaylists_bl && (self.skinPaths_ar.push({
                                    img: self.catNextN_img = new Image,
                                    src: self.skinPath_str + "categories-next-button.png"
                                }, {
                                    img: self.catPrevN_img = new Image,
                                    src: self.skinPath_str + "categories-prev-button.png"
                                }, {
                                    img: self.catCloseN_img = new Image,
                                    src: self.skinPath_str + "categories-close-button.png"
                                }, {
                                    img: new Image,
                                    src: self.skinPath_str + "categories-background.png"
                                }), self.catBkPath_str = self.skinPath_str + "categories-background.png", self.catThumbBkPath_str = self.skinPath_str + "categories-thumbnail-background.png", self.catThumbBkTextPath_str = self.skinPath_str + "categories-thumbnail-text-backgorund.png", self.catNextSPath_str = self.skinPath_str + "categories-next-button-over.png", self.catNextDPath_str = self.skinPath_str + "categories-next-button-disabled.png", self.catPrevSPath_str = self.skinPath_str + "categories-prev-button-over.png", self.catPrevDPath_str = self.skinPath_str + "categories-prev-button-disabled.png", self.catCloseSPath_str = self.skinPath_str + "categories-close-button-over.png"), self.showShareButton_bl && (self.skinPaths_ar.push({
                                    img: self.shareClooseN_img = new Image,
                                    src: self.skinPath_str + "embed-close-button.png"
                                }, {
                                    img: self.facebookN_img = new Image,
                                    src: self.skinPath_str + "facebook.png"
                                }, {
                                    img: self.googleN_img = new Image,
                                    src: self.skinPath_str + "google-plus.png"
                                }, {
                                    img: self.twitterN_img = new Image,
                                    src: self.skinPath_str + "twitter.png"
                                }, {
                                    img: self.likedInkN_img = new Image,
                                    src: self.skinPath_str + "likedin.png"
                                }, {
                                    img: self.bufferkN_img = new Image,
                                    src: self.skinPath_str + "buffer.png"
                                }, {
                                    img: self.diggN_img = new Image,
                                    src: self.skinPath_str + "digg.png"
                                }, {
                                    img: self.redditN_img = new Image,
                                    src: self.skinPath_str + "reddit.png"
                                }, {
                                    img: self.thumbrlN_img = new Image,
                                    src: self.skinPath_str + "thumbrl.png"
                                }), self.facebookSPath_str = self.skinPath_str + "facebook-over.png", self.googleSPath_str = self.skinPath_str + "google-plus-over.png", self.twitterSPath_str = self.skinPath_str + "twitter-over.png", self.likedInSPath_str = self.skinPath_str + "likedin-over.png", self.bufferSPath_str = self.skinPath_str + "buffer-over.png", self.diggSPath_str = self.skinPath_str + "digg-over.png", self.redditSPath_str = self.skinPath_str + "reddit-over.png", self.thumbrlSPath_str = self.skinPath_str + "thumbrl-over.png"), self.embedWindowClosePathS_str = self.skinPath_str + "embed-close-button-over.png", self.showPlaybackRateButton_bl && (self.skinPaths_ar.push({
                                    img: self.playbackRateWindowClooseN_img = new Image,
                                    src: self.skinPath_str + "embed-close-button.png"
                                }), self.playbackRateClosePathS_str = self.skinPath_str + "embed-close-button-over.png"), self.totalGraphics = self.skinPaths_ar.length, self.loadSkin()
                            } else setTimeout(function () {
                                null != self && (errorMessage_str = "At least one category is required!", self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                                    text: errorMessage_str
                                }))
                            }, 50)
                        } else setTimeout(function () {
                            null != self && (errorMessage_str = "The <font color='#FF0000'>skinPath</font> property is not defined in the constructor function!", self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                                text: errorMessage_str
                            }))
                        }, 50);
                else setTimeout(function () {
                    null != self && (errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!", self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                else setTimeout(function () {
                    null != self && (errorMessage_str = "The <font color='#FF0000'>playlistsId</font> property is not defined in the constructor function!", self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50)
            }, this.onPreloaderLoadHandler = function () {
                setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PRELOADER_LOAD_DONE)
                }, 50)
            }, self.loadSkin = function () {
                for (var e, t, o = 0; o < self.totalGraphics; o++) e = self.skinPaths_ar[o].img, t = self.skinPaths_ar[o].src, e.onload = self.onSkinLoadHandler, e.onerror = self.onSkinLoadErrorHandler, e.src = t
            }, this.onSkinLoadHandler = function (e) {
                self.countLoadedSkinImages++, self.countLoadedSkinImages == self.totalGraphics && setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.SKIN_LOAD_COMPLETE)
                }, 50)
            }, self.onSkinLoadErrorHandler = function (e) {
                message = FWDRAPUtils.isIEAndLessThen9 ? "Graphics image not found!" : "The skin icon with label <font color='#FF0000'>" + e.target.src + "</font> can't be loaded, check path!", window.console && console.log(e);
                var t = {
                    text: message
                };
                setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, t)
                }, 50)
            }, self.showPropertyError = function (e) {
                self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "The property called <font color='#FF0000'>" + e + "</font> is not defined."
                })
            }, this.downloadMp3 = function (e, t) {
                if ("file:" == document.location.protocol) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Downloading mp3 files local is not allowed or possible!. To function properly please test online."
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50));
                var o = location.origin,
                    s = location.pathname;
                if (-1 != s.indexOf(".") && (s = s.substr(0, s.lastIndexOf("/") + 1)), -1 == e.indexOf("http:") && -1 == e.indexOf("https:") && (e = o + s + e), t) {
                    t = t.replace(/[^A-Z0-9\-\_\.]+/gi, "_"), /\.(mp3)$/i.test(t) || (t += ".mp3"), e = e;
                    var i = self.mp3DownloaderPath_str;
                    if (self.dlIframe || (self.dlIframe = document.createElement("IFRAME"), self.dlIframe.style.display = "none", document.documentElement.appendChild(self.dlIframe)), self.isMobile_bl && FWDRAPUtils.isIOS) {
                        var n = self.getValidEmail();
                        if (!n) return;
                        if (null != self.emailXHR) {
                            try {
                                self.emailXHR.abort()
                            } catch (e) {}
                            self.emailXHR.onreadystatechange = null, self.emailXHR.onerror = null, self.emailXHR = null
                        }
                        return self.emailXHR = new XMLHttpRequest, self.emailXHR.onreadystatechange = function (e) {
                            4 == self.emailXHR.readyState && (200 == self.emailXHR.status ? "sent" == self.emailXHR.responseText ? alert("Email sent.") : alert("Error sending email, this is a server side error, the php file can't send the email!") : alert("Error sending email: " + self.emailXHR.status + ": " + self.emailXHR.statusText))
                        }, self.emailXHR.onerror = function (e) {
                            try {
                                window.console && console.log(e), window.console && console.log(e.message)
                            } catch (e) {}
                            alert("Error sending email: " + e.message)
                        }, self.emailXHR.open("get", self.mailPath_str + "?mail=" + n + "&name=" + t + "&path=" + e, !0), void self.emailXHR.send()
                    } - 1 != e.indexOf("soundcloud.com") ? self.dlIframe.src = e : self.dlIframe.src = i + "?path=" + e + "&name=" + t
                }
            }, this.getValidEmail = function () {
                for (var e = prompt("Please enter your email address where the mp3 download link will be sent:"), t = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; !t.test(e) || "" == e;) {
                    if (null === e) return;
                    e = prompt("Please enter a valid email address:")
                }
                return e
            }, this.loadPlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to);
                    var t = self.cats_ar[e].source;
                    if (!t) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "<font color='#FF0000'>loadPlaylist()</font> - Please specify an html elementid, podcast link, soudcloud link or xml path"
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    if (!isNaN(t)) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "<font color='#FF0000'>loadPlaylist()</font> - The parameter must be of type string!"
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    self.closeData(), self.resetYoutubePlaylistLoader(), self.isYoutbe_bl = !1, -1 != t.indexOf("soundcloud.com") ? self.loadSoundCloudList(t) : -1 != t.indexOf("hubhopper.") ? self.loadHubhopperPlaylist(t) : -1 != t.indexOf("list=") && self.useYoutube_bl ? (self.isYoutbe_bl = !0, self.loadYoutubePlaylist(t)) : -1 != t.indexOf("official.fm") ? self.loadOfficialFmList(t) : -1 != t.indexOf("folder:") ? self.loadFolderPlaylist(t) : -1 != t.indexOf(".xml") || -1 != t.indexOf("http:") || -1 != t.indexOf("https:") || -1 != t.indexOf("www.") ? self.loadXMLPlaylist(t) : self.parseDOMPlaylist(t), self.prevId = e
                }
            }, this.loadYoutubePlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl || self.isYoutbe_bl) {
                    self.youtubeUrl_str || (e = e.substr(e.indexOf("=") + 1), self.youtubeUrl_str = e), self.loadFromFolder_bl = !0, self.nextPageToken_str ? self.sourceURL_str = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&pageToken=" + self.nextPageToken_str + "&playlistId=" + self.youtubeUrl_str + "&key=AIzaSyAlyhJ-C5POyo4hofPh3b7ECAxWy6t6lyg&maxResults=50&callback=" + parent.instanceName_str + ".data.parseYoutubePlaylist" : self.sourceURL_str = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" + self.youtubeUrl_str + "&key=AIzaSyAlyhJ-C5POyo4hofPh3b7ECAxWy6t6lyg&maxResults=50&callback=" + parent.instanceName_str + ".data.parseYoutubePlaylist";
                    try {
                        self.scs_el = document.createElement("script"), self.scs_el.src = self.sourceURL_str, self.scs_el.id = parent.instanceName_str + ".data.parseYoutubePlaylist", document.documentElement.appendChild(self.scs_el)
                    } catch (e) {}
                    self.JSONPRequestTimeoutId_to = setTimeout(self.JSONPRequestTimeoutError, 6e3)
                }
            }, this.JSONPRequestTimeoutError = function () {
                self.closeData(), self.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPData.LOAD_ERROR, {
                        text: "Error loading youtube playlist!<font color='#ff0000'>" + self.youtubeUrl_str + "</font>"
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50)
            }, this.resetYoutubePlaylistLoader = function () {
                self.isYoutbe_bl = !1, self.youtubeObject_ar = null, self.nextPageToken_str = null, self.youtubeUrl_str = null
            }, this.parseYoutubePlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl && self.isYoutbe_bl) {
                    if (e.error) return self.JSONPRequestTimeoutError(), void(console && console.dir(e));
                    var t, o;
                    self.playlist_ar = [], self.youtubeObject_ar || (self.youtubeObject_ar = []);
                    for (var s = 0; s < e.items.length; s++) self.youtubeObject_ar.push(e.items[s]);
                    if (t = self.youtubeObject_ar.length, self.closeData(), e.nextPageToken && t < self.maxPlaylistItems) return self.nextPageToken_str = e.nextPageToken, void self.loadYoutubePlaylist();
                    for (s = 0; s < t && !(s > self.maxPlaylistItems - 1); s++) {
                        var i = {};
                        o = self.youtubeObject_ar[s], i.source = o.snippet.resourceId.videoId, i.buy = void 0;
                        var n = "";
                        self.showTracksNumbers_bl ? (s < 9 && (n = "0"), n = n + (s + 1) + ". ", i.title = n + "<span style='font-weight:bold;'>" + o.snippet.title + "</span>") : i.title = "<span style='font-weight:bold;'>" + o.snippet.title + "</span>", i.titleText = o.snippet.title, i.title = i.title.replace(/\(Official Video\)/gi, ""), i.title = i.title.replace(/\( Official Video \)/gi, ""), i.title = i.title.replace(/Official Video/gi, ""), i.downloadable = !1;
                        try {
                            i.thumbPath = o.snippet.thumbnails.default.url
                        } catch (e) {}
                        i.posterSource = "none", -1 == o.snippet.title.indexOf("eleted video") && -1 == o.snippet.title.indexOf("his video is unavailable") && self.playlist_ar.push(i)
                    }
                    clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                    }, 50), self.isDataLoaded_bl = !0
                }
            }, this.loadSoundCloudList = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    self.closeXHR(), self.sourceURL_str = e, -1 != self.sourceURL_str.indexOf("likes") && (self.sourceURL_str = self.sourceURL_str.replace(/\/likes$/, "/favorites")), e = -1 == self.sourceURL_str.indexOf("api.soundcloud.") ? "https://api.soundcloud.com/resolve?format=json&url=" + self.sourceURL_str + "&limit=100&client_id=" + self.scClientId_str : self.sourceURL_str + "?format=json&client_id=" + self.scClientId_str + "&limit=100", self.loadFromFolder_bl = !1, self.sourceURL_str = e, self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.ajaxOnLoadHandler, self.xhr.onerror = self.ajaxOnErrorHandler;
                    try {
                        self.xhr.open("GET", self.sourceURL_str, !0), self.xhr.send()
                    } catch (e) {
                        var t = e;
                        e && e.message && (t = e.message), self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "Soundclud playlist can't be loaded! <font color='#FF0000'>" + self.sourceURL_str + "</font>. " + t
                        })
                    }
                }
            }, this.JSONPRequestTimeoutError = function () {
                self.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading playlist !<font color='#FF0000'>" + self.sourceURL_str + "</font>"
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50)
            }, this.loadOfficialFmList = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    self.closeXHR();
                    e = "http://api.official.fm/playlists/" + (self.sourceURL_str = e).substr(e.indexOf("/") + 1) + "/tracks?format=jsonp&fields=streaming&api_version=2&callback=" + parent.instanceName_str + ".data.parseOfficialFM";
                    if (null == self.scs_el) try {
                        self.scs_el = document.createElement("script"), self.scs_el.src = e, self.scs_el.id = parent.instanceName_str + ".data.parseOfficialFM", document.documentElement.appendChild(self.scs_el)
                    } catch (e) {}
                    self.JSONPRequestTimeoutId_to = setTimeout(self.JSONPRequestTimeoutError, 8e3)
                }
            }, this.JSONPRequestTimeoutError = function () {
                self.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading <font color='#FF0000'>" + self.sourceURL_str + "</font>"
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50)
            }, this.startToUpdateIcecastName = function () {
                self.closeJsonPLoader(), self.getIcecastRadioNameAndStream(self.sourceURL_str, !0)
            }, this.getIcecastRadioNameAndStream = function (e, t) {
                self.isPlaylistDispatchingError_bl || (self.sourceURL_str = e, "/" == self.sourceURL_str.substr(self.sourceURL_str.length - 1) && (self.sourceURL_str = self.sourceURL_str.substr(0, self.sourceURL_str.length - 1)), "/" != self.sourceURL_str.substr(self.sourceURL_str.length - 1) && (self.sourceURL_str += "/"), e = "https://cors-anywhere.herokuapp.com/" + self.sourceURL_str + "status-json.xsl", self.originalSourceURL_str = self.sourceURL_str, self.icecastxmlHttp = new XMLHttpRequest, self.icecastxmlHttp.onreadystatechange = function () {
                    4 == self.icecastxmlHttp.readyState && 200 == self.icecastxmlHttp.status && self.parseIcecastRadioURL(self.icecastxmlHttp.responseText)
                }, self.icecastxmlHttp.open("GET", e, !0), self.icecastxmlHttp.send(null), t || (self.JSONPRequestTimeoutId_to = setTimeout(self.parseRadioErrorURL, 5e3)))
            }, this.parseIcecastRadioURL = function (e) {
                if ("/" == self.sourceURL_str.substr(self.sourceURL_str.length - 1) && (self.sourceURL_str = self.sourceURL_str.substr(0, self.sourceURL_str.length - 1)), e = JSON.parse(e), self.closeJsonPLoader(), e.icestats.source[0]) var t = e.icestats.source[0].listenurl,
                    o = e.icestats.source[0].title;
                else t = e.icestats.source.listenurl, o = e.icestats.source.title;
                if (o = o || "title not defined", e.icestats.source[0]) self.stationLabelClassName, self.stationClassName, e.icestats.source[0].server_name, self.genreLabelClassName, self.genreClassName, e.icestats.source[0].genre, self.currentListenersLabelClassName, self.currentListenersClassName, e.icestats.source[0].listeners, self.bitrateLabelClassName, self.bitrateClassName, e.icestats.source[0].bitrate;
                else self.stationLabelClassName, self.stationClassName, e.icestats.source.server_name, self.genreLabelClassName, self.genreClassName, e.icestats.source.genre, self.currentListenersLabelClassName, self.currentListenersClassName, e.icestats.source.listeners, self.bitrateLabelClassName, self.bitrateClassName, e.icestats.source.bitrate;
                self.dispatchEvent(FWDRAPAudioData.RADIO_TRACK_READY, {
                    source: t,
                    songTitle: o
                }), self.updateRadioTitleId_to = setTimeout(function () {
                    parent.isIcecast_bl && self.startToUpdateIcecastName()
                }, 5e3);
                var s = o,
                    i = s.substr(0, s.indexOf("-") - 1),
                    n = s.substr(s.indexOf("-") + 2);
                self.getImage(i, n)
            }, this.startToUpdateShoutcast = function () {
                self.closeJsonPLoader(), self.getShoutcastRadioNameAndStream(self.sourceURL_str, !0)
            }, this.getShoutcastRadioNameAndStream = function (e, t) {
                if (!self.isPlaylistDispatchingError_bl) {
                    if (self.sourceURL_str = e, self.originalSourceURL_str = e, "/" == self.sourceURL_str.substr(self.sourceURL_str.length - 1) && (self.sourceURL_str = self.sourceURL_str.substr(0, self.sourceURL_str.length - 1)), 1 == self.shoutcastVersion) e = "https://cors-anywhere.herokuapp.com/" + self.sourceURL_str + "/7.html", self.originalSourceURL_str = e, self.shoutcastxmlHttp = new XMLHttpRequest, self.shoutcastxmlHttp.onreadystatechange = function () {
                        if (4 == self.shoutcastxmlHttp.readyState && 200 == self.shoutcastxmlHttp.status) {
                            var e = self.shoutcastxmlHttp.responseText.match(/<body>.*?<\/body>/im)[0];
                            e = (e = (e = (e = e.replace("<body>", "")).replace("<body> ", "")).replace(" </body>", "")).replace("</body> ", "");
                            var t = {
                                streampath: "/;type=mp3",
                                servertitle: "Shoutcast v1",
                                servergenre: "Shoutcast v1"
                            };
                            t.songtitle = e.split(",")[6], t.currentlisteners = e.split(",")[0], t.bitrate = e.split(",")[5], self.parseShoutcastRadioURL(t)
                        }
                    }, self.shoutcastxmlHttp.open("GET", e, !0), self.shoutcastxmlHttp.send(null);
                    else {
                        e = self.sourceURL_str + "/stats?sid=1&json=1&callback=" + parent.instanceName_str + ".data.parseShoutcastRadioURL";
                        try {
                            document.documentElement.removeChild(self.scs_el)
                        } catch (e) {}
                        try {
                            document.documentElement.removeChild(self.scs_el)
                        } catch (e) {}
                        try {
                            self.scs_el = document.createElement("script"), self.scs_el.src = e, self.scs_el.id = parent.instanceName_str + ".data.parseRadioErrorURL", document.documentElement.appendChild(self.scs_el)
                        } catch (e) {}
                    }
                    t || (self.JSONPRequestTimeoutId_to = setTimeout(self.parseRadioErrorURL, 5e3))
                }
            }, this.parseShoutcastRadioURL = function (e) {
                var t;
                if (parent.isShoutcast_bl || parent.isIcecast_bl)
                    if (self.closeJsonPLoader(), e.streampath) {
                        t = self.sourceURL_str + e.streampath, "/" == e.streampath && (t += "/"), songTitle = e.songtitle, self.prevSongTitle != songTitle && self.getSoutcastHistory();
                        self.stationLabelClassName, self.stationClassName, e.servertitle, self.genreLabelClassName, self.genreClassName, e.servergenre, self.currentListenersLabelClassName, self.currentListenersClassName, e.currentlisteners, self.bitrateLabelClassName, self.bitrateClassName, e.bitrate;
                        var o = songTitle.substr(0, songTitle.indexOf("-") - 1),
                            s = songTitle.substr(songTitle.indexOf("-") + 2);
                        self.getImage(o, s), self.dispatchEvent(FWDRAPAudioData.RADIO_TRACK_READY, {
                            source: t,
                            songTitle: songTitle
                        }), self.updateRadioTitleId_to = setTimeout(function () {
                            parent.isShoutcast_bl && self.startToUpdateShoutcast()
                        }, 5e3)
                    } else self.parseRadioErrorURL()
            }, this.parseRadioErrorURL = function () {
                (parent.isShoutcast_bl || parent.isIcecast_bl) && (self.closeJsonPLoader(), self.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading radio track url!<font color='#FF0000'>" + self.sourceURL_str + "</font>"
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50), parent.isShoutcast_bl && self.startToUpdateShoutcast())
            }, this.getSoutcastHistory = function () {
                if (parent.isShoutcast_bl || parent.isIcecast_bl) {
                    "/" != self.sourceURL_str.substr(self.sourceURL_str.length - 1) && (self.sourceURL_str = self.sourceURL_str + "/"), url = self.sourceURL_str + "played?sid=1&type=json&callback=" + parent.instanceName_str + ".data.parseShoutcastRadioHisotry";
                    try {
                        document.documentElement.removeChild(self.scs2_el)
                    } catch (e) {}
                    try {
                        self.scs2_el = document.createElement("script"), self.scs2_el.src = url, document.documentElement.appendChild(self.scs2_el)
                    } catch (e) {}
                }
            }, this.parseShoutcastRadioHisotry = function (e) {
                if (self.prevObj != e[0].title) {
                    var t;
                    self.history_ar = [];
                    for (var o = 0; o < e.length; o++) {
                        t = e[o];
                        var s = new Date(1e3 * t.playedat),
                            i = String(s.getHours());
                        1 == i.length && parseInt(i) <= 9 ? i = "0" + i : 1 == i.length && 9 < parseInt(i) && (i += "0");
                        var n = String(s.getMinutes());
                        1 == n.length && parseInt(n) <= 9 ? n = "0" + n : 1 == n.length && 9 < parseInt(n) && (n += "0");
                        var r = String(s.getSeconds());
                        1 == r.length && parseInt(r) <= 9 ? r = "0" + r : 1 == r.length && 9 < parseInt(r) && (r += "0"), s = i + ":" + n + ":" + r;
                        var l = t.title;
                        if (0 == o) var a = "<span class='" + self.titleClassNameSelected + "'>" + l + "</span><span class='" + self.lineClassNameSelected + "'> - </span><span class='" + self.playedAtClassNameSelected + "'>played at:</span> <span class='" + self.timeClassNameSelected + "'>" + s + "</span>";
                        else a = "<span class='" + self.titleClassName + "'>" + l + "</span><span class='" + self.lineClassName + "'> - </span><span class='" + self.playedAtClassName + "'>played at</span> <span class='" + self.timeClassName + "'>" + s + "</span>";
                        self.history_ar[o] = a, self.prevObj = e[0].title
                    }
                }
            }, this.getImage = function (e, t) {
                if (parent.isShoutcast_bl || parent.isIcecast_bl) {
                    var o = "http://itunes.apple.com/search?type=jsonp&term==" + (e = encodeURI(e)) + "-" + (t = encodeURI(t)) + "&media=music&limit=1&callback=" + parent.instanceName_str + ".data.parseImage";
                    try {
                        document.documentElement.removeChild(self.scs3_el)
                    } catch (e) {}
                    try {
                        self.scs3_el = document.createElement("script"), self.scs3_el.src = o, document.documentElement.appendChild(self.scs3_el)
                    } catch (e) {}
                }
            }, this.parseImage = function (e) {
                e.results && e.results[0] && self.dispatchEvent(FWDRAPAudioData.UPDATE_IMAGE, {
                    image: e.results[0].artworkUrl100
                })
            }, this.getSoundcloudUrl = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    try {
                        self.closeJsonPLoader()
                    } catch (e) {}
                    self.sourceURL_str = e, -1 != self.sourceURL_str.indexOf("likes") && (self.sourceURL_str = self.sourceURL_str.replace(/\/likes$/, "/favorites")), e = "https://api.soundcloud.com/resolve?format=json&url=" + self.sourceURL_str + "&limit=100&client_id=" + self.scClientId_str, self.isSCTrack = !0, self.loadFromFolder_bl = !1, self.sourceURL_str = e, self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.ajaxOnLoadHandler, self.xhr.onerror = self.ajaxOnErrorHandler;
                    try {
                        self.xhr.open("GET", self.sourceURL_str, !0), self.xhr.send()
                    } catch (e) {
                        var t = e;
                        e && e.message && (t = e.message), self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "Soundclud track can't be loaded! <font color='#FF0000'>" + self.sourceURL_str + "</font>. " + t
                        })
                    }
                }
            }, this.parseSoundCloudURL = function (e) {
                var t;
                self.closeJsonPLoader(), e.stream_url ? (t = e.stream_url + "?consumer_key=" + self.scClientId_str, self.dispatchEvent(FWDRAPAudioData.SOUNDCLOUD_TRACK_READY, {
                    source: t
                })) : self.loadSoundcloudTrackError()
            }, this.loadSoundcloudTrackError = function () {
                self.closeJsonPLoader(), self.isPlaylistDispatchingError_bl = !0, showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading soundcloud track url!<font color='#FF0000'>" + self.sourceURL_str + "</font>"
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 50)
            }, this.updateRadioName = function () {}, this.closeJsonPLoader = function () {
                self.isSCTrack = !1, self.isLoadingShoutcast_bl = !1, self.isLoadingIcecast_bl = !1, clearTimeout(self.JSONPRequestTimeoutId_to), clearTimeout(self.updateRadioTitleId_to);
                try {
                    self.icecastxmlHttp.abort()
                } catch (e) {}
                self.icecastxmlHttp = null;
                try {
                    self.shoutcastxmlHttp.abort()
                } catch (e) {}
                self.shoutcastxmlHttp = null;
                try {
                    document.documentElement.removeChild(self.scs_el)
                } catch (e) {}
                try {
                    document.documentElement.removeChild(self.scs2_el)
                } catch (e) {}
                try {
                    document.documentElement.removeChild(self.scs3_el)
                } catch (e) {}
            }, this.loadHubhopperPlaylist = function (e) {
                self.closeXHR();
                var t = e.match(/\/(\d)+(\/)?/g)[0].match(/\d+/)[0];
                self.loadFromFolder_bl = !1, self.sourceURL_str = e, self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.ajaxOnLoadHandler, self.xhr.onerror = self.ajaxOnErrorHandler2, self.xhr.open("get", "https://nwb3zg07k1.execute-api.ap-south-1.amazonaws.com/v4/podcasts/" + t + "/episodes?pageSize=" + self.maxPlaylistItems + "&rand=" + parseInt(99999999 * Math.random()), !0), self.xhr.setRequestHeader("x-api-key", self.hubhopperAPIKey), self.xhr.send(), self.showLoadPlaylistErrorId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading : <font color='#FF0000'>" + self.sourceURL_str + "</font>, Invalid API key."
                    }), self.isPlaylistDispatchingError_bl = !1
                }, 1e4)
            }, this.ajaxOnErrorHandler2 = function (e) {
                try {
                    window.console && console.log(e), window.console && console.log(e.message)
                } catch (e) {}
                self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "Error loading : <font color='#FF0000'>" + self.sourceURL_str + "</font>"
                })
            }, this.loadXMLPlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    if ("file:" == document.location.protocol && -1 == e.indexOf("official.fm")) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "Loading XML files local is not allowed or possible!. To function properly please test online."
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    self.closeXHR(), self.loadFromFolder_bl = !1, self.sourceURL_str = e, self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.ajaxOnLoadHandler, self.xhr.onerror = self.ajaxOnErrorHandler;
                    try {
                        self.xhr.open("get", self.proxyPath_str + "?url=" + self.sourceURL_str + "&rand=" + parseInt(99999999 * Math.random()), !0), self.xhr.send()
                    } catch (e) {
                        var t = e;
                        e && e.message && (t = e.message), self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "XML file can't be loaded! <font color='#FF0000'>" + self.sourceURL_str + "</font>. " + t
                        })
                    }
                }
            }, this.loadFolderPlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    if ("file:" == document.location.protocol && -1 == e.indexOf("official.fm")) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "Creating a mp3 playlist from a folder is not allowed or possible local! To function properly please test online."
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    self.closeXHR(), self.loadFromFolder_bl = !0, self.countID3 = 0, self.sourceURL_str = e.substr(e.indexOf(":") + 1), self.xhr = new XMLHttpRequest, self.xhr.onreadystatechange = self.ajaxOnLoadHandler, self.xhr.onerror = self.ajaxOnErrorHandler;
                    try {
                        self.xhr.open("get", self.proxyFolderPath_str + "?dir=" + encodeURIComponent(self.sourceURL_str) + "&rand=" + parseInt(9999999 * Math.random()), !0), self.xhr.send()
                    } catch (e) {
                        e && e.message && e.message, self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "Folder proxy file path is not found: <font color='#FF0000'>" + self.proxyFolderPath_str + "</font>"
                        })
                    }
                }
            }, this.ajaxOnLoadHandler = function (e) {
                var response, isXML = !1;
                if (4 == self.xhr.readyState)
                    if (clearTimeout(self.showLoadPlaylistErrorId_to), 404 == self.xhr.status) self.loadFromFolder_bl ? self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Folder proxy file path is not found: <font color='#FF0000'>" + self.proxyFolderPath_str + "</font>"
                    }) : self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Proxy file path is not found: <font color='#FF0000'>" + self.proxyPath_str + "</font>"
                    });
                    else if (408 == self.xhr.status) self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "Proxy file request load timeout!"
                });
                else if (200 == self.xhr.status) {
                    if (-1 != self.xhr.responseText.indexOf("<b>Warning</b>:")) return void self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading folder: <font color='#FF0000'>" + self.sourceURL_str + "</font>. Make sure that the folder path is correct!"
                    });
                    response = window.JSON ? JSON.parse(self.xhr.responseText) : eval("(" + self.xhr.responseText + ")"), -1 != self.xhr.responseText.indexOf("api.soundcloud.com") ? (self.isSCTrack ? self.parseSoundCloudURL(response) : self.parseSoundCloud(response), self.isSCTrack = !1) : response.episodes ? self.parseHubhopper(response) : response.channel ? self.parsePodcast(response) : response.folder ? self.parseFolderJSON(response) : response.li ? self.parseXML(response) : response.error && self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                        text: "Error loading file: <font color='#FF0000'>" + self.sourceURL_str + "</font>. Make sure the file path (xml or podcast) is correct and well formatted!"
                    })
                }
            }, this.ajaxOnErrorHandler = function (e) {
                try {
                    window.console && console.log(e), window.console && console.log(e.message)
                } catch (e) {}
                self.loadFromFolder_bl ? self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "Error loading file : <font color='#FF0000'>" + self.proxyFolderPath_str + "</font>. Make sure the path is correct"
                }) : self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "Error loading : <font color='#FF0000'>" + self.proxyPath_str + "</font>. Make sure the path is correct"
                })
            }, this.parseSoundCloud = function (e) {
                var t;
                if (self.closeJsonPLoader(), self.playlist_ar = [], e && e.uri) return "track" == e.kind ? void self.createSoundcloudPlaylist(e) : (t = -1 == e.uri.indexOf("/tracks") ? e.uri + "/tracks" : e.uri + "/favorites", void self.loadSoundCloudList(t));
                e.length || "track" == e.kind ? self.createSoundcloudPlaylist(e) : self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                    text: "Please provide a playlist or track URL : <font color='#FF0000'>" + self.sourceURL_str + "</font>."
                })
            }, this.createSoundcloudPlaylist = function (e) {
                if (e.length)
                    for (var t = 0; t < e.length; t++) {
                        if (track = e[t], obj = {}, obj.source = track.stream_url + "?consumer_key=" + self.scClientId_str, obj.downloadPath = 1 == track.downloadable ? track.download_url + "?consumer_key=" + self.scClientId_str : void 0, obj.downloadable = track.downloadable, obj.buy = void 0, obj.thumbPath = track.artwork_url, self.showSoundCloudUserNameInTitle_bl) {
                            var o = "";
                            self.showTracksNumbers_bl ? (t < 9 && (o = "0"), o = o + (t + 1) + ". ", obj.title = o + "<span style='font-weight:bold;'>" + track.user.username + "</span> - " + track.title) : obj.title = "<span style='font-weight:bold;'>" + track.user.username + "</span> - " + track.title, obj.titleText = track.user.username + " - " + track.title
                        } else {
                            o = "";
                            self.showTracksNumbers_bl ? (t < 9 && (o = "0"), o = o + (t + 1) + ". ", obj.title = o + track.title) : obj.title = track.title, obj.titleText = track.title
                        }
                        if (obj.duration = track.duration, track.streamable && self.playlist_ar.push(obj), t > self.maxPlaylistItems - 1) break
                    } else track = e, obj = {}, obj.source = track.stream_url + "?consumer_key=" + self.scClientId_str, obj.downloadPath = 1 == track.downloadable ? track.download_url + "?consumer_key=" + self.scClientId_str : void 0, obj.downloadable = track.downloadable, obj.buy = void 0, obj.thumbPath = track.artwork_url, self.showSoundCloudUserNameInTitle_bl ? (obj.title = "<span style='font-weight:bold;'>" + track.user.username + "</span> - " + track.title, obj.titleText = track.user.username + " - " + track.title) : (obj.title = track.title, obj.titleText = track.title), obj.duration = track.duration, track.streamable && self.playlist_ar.push(obj);
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parseOfficialFM = function (e) {
                var t, o;
                self.closeJsonPLoader(), self.playlist_ar = [];
                for (var s = e.tracks, i = 0; i < s.length; i++) {
                    o = e.tracks[i].track, (t = {}).id = i, t.source = encodeURI(o.streaming.http), t.downloadPath = t.source, t.downloadable = self.showDownloadMp3Button_bl, t.buy = void 0, self.forceDisableDownloadButtonForOfficialFM_bl && (t.downloadable = !1), t.thumbPath = void 0;
                    var n = "";
                    if (self.showTracksNumbers_bl ? (i < 9 && (n = "0"), n = n + (i + 1) + ". ", t.title = n + "<span style='font-weight:bold;'>" + o.artist + "</span> - " + o.title) : t.title = "<span style='font-weight:bold;'>" + o.artist + "</span> - " + o.title, t.titleText = o.artist + " - " + o.title, t.duration = 1e3 * o.duration, self.playlist_ar[i] = t, i > self.maxPlaylistItems - 1) break
                }
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parseHubhopper = function (e) {
                var t;
                self.playlist_ar = [];
                for (var o = e.episodes, s = 0; s < o.length; s++) {
                    (t = {}).source = encodeURI(o[s].play.url), t.downloadPath = t.source, t.thumbPath = o[s].image;
                    var i = "",
                        n = "";
                    1 < o[s].author.length && (n = o[s].author + " - "), self.showTracksNumbers_bl ? (s < 9 && (i = "0"), i = i + (s + 1) + ". ", t.title = i + n + o[s].title) : t.title = n + o[s].title, t.titleText = o[s].title, t.duration = void 0, self.playlist_ar[s] = t
                }
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parsePodcast = function (e) {
                var t;
                self.playlist_ar = [];
                var o = e.channel.item,
                    s = void 0;
                try {
                    s = e.channel.image.url
                } catch (e) {}
                for (var i = 0; i < o.length; i++) {
                    t = {}, o[i].enclosure ? t.source = encodeURI(o[i].enclosure["@attributes"].url) : t.source = encodeURI(o[i].link), t.downloadPath = t.source, t.downloadable = self.showDownloadMp3Button_bl, self.forceDisableDownloadButtonForPodcast_bl && (t.downloadable = !1), t.thumbPath = s;
                    var n = "";
                    if (self.showTracksNumbers_bl ? (i < 9 && (n = "0"), n = n + (i + 1) + ". ", t.title = n + o[i].title) : t.title = o[i].title, t.titleText = o[i].title, t.duration = void 0, self.playlist_ar[i] = t, i > self.maxPlaylistItems - 1) break
                }
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parseXML = function (e) {
                var t;
                self.playlist_ar = [];
                var o = e.li;
                o.length || (o = [o]);
                for (var s = 0; s < o.length; s++) {
                    (t = {}).source = o[s]["@attributes"]["data-path"], -1 != t.source.indexOf("encrypt:") && (t.source = atob(t.source.substr(8)));
                    encodeURI(t.source.substr(0, t.source.lastIndexOf("/") + 1)), t.source.substr(t.source.lastIndexOf("/") + 1);
                    if (-1 != t.source.indexOf("youtube.")) {
                        var i = t.source.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                        t.source = i[2]
                    } else t.source = FWDRAPUtils.getValidSource(t.source);
                    t.downloadPath = t.source, t.downloadable = "yes" == o[s]["@attributes"]["data-downloadable"], t.buy = o[s]["@attributes"]["data-buy-url"], o[s]["@attributes"]["data-buy-url"] && (t.buy = o[s]["@attributes"]["data-buy-url"]), t.thumbPath = o[s]["@attributes"]["data-thumbpath"];
                    var n = "";
                    if (self.showTracksNumbers_bl ? (s < 9 && (n = "0"), n = n + (s + 1) + ". ", t.title = n + o[s]["@attributes"]["data-title"]) : t.title = o[s]["@attributes"]["data-title"], t.isPrivate = o[s]["@attributes"]["data-is-private"], "yes" == t.isPrivate ? t.isPrivate = !0 : t.isPrivate = !1, t.privateVideoPassword_str = o[s]["@attributes"]["data-private-video-password"], t.startAtTime = o[s]["@attributes"]["data-start-at-time"], "00:00:00" != t.startAtTime && FWDRAPUtils.checkTime(t.startAtTime) || (t.startAtTime = void 0), t.stopAtTime = o[s]["@attributes"]["data-stop-at-time"], "00:00:00" != t.stopAtTime && FWDRAPUtils.checkTime(t.stopAtTime) || (t.stopAtTime = void 0), t.titleText = o[s]["@attributes"]["data-title"], t.duration = o[s]["@attributes"]["data-duration"], t.atb = o[s]["@attributes"]["data-use-a-to-b"], t.isShoutcast_bl = o[s]["@attributes"]["data-type"], t.isShoutcast_bl && (-1 != t.isShoutcast_bl.toLowerCase().indexOf("shoutcastv1") ? (t.shoutcastVersion = 1, t.isShoutcast_bl = !0) : -1 != t.isShoutcast_bl.toLowerCase().indexOf("shoutcastv2") ? (t.shoutcastVersion = 2, t.isShoutcast_bl = !0) : t.isShoutcast_bl = !1), t.isIcecast_bl = o[s]["@attributes"]["data-type"], t.isIcecast_bl && (-1 != t.isIcecast_bl.toLowerCase().indexOf("icecast") ? t.isIcecast_bl = !0 : t.isIcecast_bl = !1), self.playlist_ar[s] = t, s > self.maxPlaylistItems - 1) break
                }
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parseFolderJSON = function (e) {
                var t;
                self.playlist_ar = [];
                for (var o = e.folder, s = 0; s < o.length; s++) {
                    (t = {}).source = o[s]["@attributes"]["data-path"], -1 != t.source.indexOf("encrypt:") && (t.source = atob(t.source.substr(8)));
                    var i = encodeURI(t.source.substr(0, t.source.lastIndexOf("/") + 1)),
                        n = encodeURIComponent(t.source.substr(t.source.lastIndexOf("/") + 1));
                    if (t.source = i + n, t.downloadPath = t.source, t.downloadable = self.showDownloadMp3Button_bl, t.buy = void 0, self.forceDisableDownloadButtonForFolder_bl && (t.downloadable = !0), t.thumbPath = o[s]["@attributes"]["data-thumbpath"], t.title = "...", t.titleText = "...", FWDRAPUtils.isIEAndLessThen9) {
                        var r = "";
                        self.showTracksNumbers_bl ? (s < 9 && (r = "0"), r = r + (s + 1) + ". ", t.title = r + "track ", t.titleText = "track") : (s < 9 && (r = "0"), r += s + 1, t.title = "track " + r, t.titleText = "track " + r)
                    }
                    if (self.playlist_ar[s] = t, s > self.maxPlaylistItems - 1) break
                }
                clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                    self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                }, 50), self.isDataLoaded_bl = !0
            }, this.parseDOMPlaylist = function (e) {
                if (!self.isPlaylistDispatchingError_bl) {
                    var t;
                    if (self.closeXHR(), !(t = document.getElementById(e))) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "The playlist with id <font color='#FF0000'>" + e + "</font> is not found in the DOM."
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    var o, s = FWDRAPUtils.getChildren(t),
                        i = s.length;
                    if (self.playlist_ar = [], 0 == i) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                            text: "The playlist whit the id  <font color='#FF0000'>" + e + "</font> must contain at least one track."
                        }), self.isPlaylistDispatchingError_bl = !1
                    }, 50));
                    for (var n = 0; n < i; n++) {
                        var r = {};
                        if (o = s[n], !FWDRAPUtils.hasAttribute(o, "data-path")) return self.isPlaylistDispatchingError_bl = !0, void(showLoadPlaylistErrorId_to = setTimeout(function () {
                            self.dispatchEvent(FWDRAPAudioData.LOAD_ERROR, {
                                text: "Attribute <font color='#FF0000'>data-path</font> is required in the playlist at position <font color='#FF0000'>" + (n + 1)
                            })
                        }, 50));
                        if (n > self.maxPlaylistItems - 1) break;
                        if (r.isShoutcast_bl = FWDRAPUtils.getAttributeValue(o, "data-type"), r.isShoutcast_bl && (-1 != r.isShoutcast_bl.toLowerCase().indexOf("shoutcastv1") ? (r.shoutcastVersion = 1, r.isShoutcast_bl = !0) : -1 != r.isShoutcast_bl.toLowerCase().indexOf("shoutcastv2") ? (r.shoutcastVersion = 2, r.isShoutcast_bl = !0) : r.isShoutcast_bl = !1), r.isIcecast_bl = FWDRAPUtils.getAttributeValue(o, "data-type"), r.isIcecast_bl && (-1 != r.isIcecast_bl.toLowerCase().indexOf("icecast") ? r.isIcecast_bl = !0 : r.isIcecast_bl = !1), r.source = FWDRAPUtils.getAttributeValue(o, "data-path"), -1 != r.source.indexOf("encrypt:") && (r.source = atob(r.source.substr(8))), -1 != r.source.indexOf("youtube.")) {
                            var l = r.source.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                            r.source = l[2]
                        } else r.source = FWDRAPUtils.getValidSource(r.source);
                        r.downloadPath = r.source, FWDRAPUtils.hasAttribute(o, "data-thumbpath") ? r.thumbPath = FWDRAPUtils.getAttributeValue(o, "data-thumbpath") : r.thumbPath = void 0, FWDRAPUtils.hasAttribute(o, "data-video-poster-path") ? r.videoPosterPath = FWDRAPUtils.getAttributeValue(o, "data-video-poster-path") : r.videoPosterPath = void 0, FWDRAPUtils.hasAttribute(o, "data-downloadable") ? r.downloadable = "yes" == FWDRAPUtils.getAttributeValue(o, "data-downloadable") : r.downloadable = void 0, FWDRAPUtils.hasAttribute(o, "data-buy-url") ? r.buy = FWDRAPUtils.getAttributeValue(o, "data-buy-url") : r.buy = void 0, r.title = "not defined!";
                        try {
                            var a = "";
                            self.showTracksNumbers_bl ? (n < 9 && (a = "0"), a = a + (n + 1) + ". ", r.title = a + FWDRAPUtils.getChildren(o)[0].innerHTML) : r.title = FWDRAPUtils.getChildren(o)[0].innerHTML
                        } catch (e) {}
                        r.isPrivate = FWDRAPUtils.getAttributeValue(o, "data-is-private"), "yes" == r.isPrivate ? r.isPrivate = !0 : r.isPrivate = !1, r.privateVideoPassword_str = FWDRAPUtils.getAttributeValue(o, "data-private-video-password"), r.startAtTime = FWDRAPUtils.getAttributeValue(o, "data-start-at-time"), "00:00:00" != r.startAtTime && FWDRAPUtils.checkTime(r.startAtTime) || (r.startAtTime = void 0), r.stopAtTime = FWDRAPUtils.getAttributeValue(o, "data-stop-at-time"), "00:00:00" != r.stopAtTime && FWDRAPUtils.checkTime(r.stopAtTime) || (r.stopAtTime = void 0);
                        try {
                            r.titleText = FWDRAPUtils.getChildren(o)[0].textContent || FWDRAPUtils.getChildren(o)[0].innerText
                        } catch (e) {}
                        FWDRAPUtils.hasAttribute(o, "data-duration") && (r.duration = FWDRAPUtils.getAttributeValue(o, "data-duration")), FWDRAPUtils.hasAttribute(o, "data-use-a-to-b") && (r.atb = FWDRAPUtils.getAttributeValue(o, "data-use-a-to-b")), self.playlist_ar[n] = r
                    }
                    clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), self.dispatchPlaylistLoadCompleteWidthDelayId_to = setTimeout(function () {
                        self.dispatchEvent(FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE)
                    }, 50), self.isDataLoaded_bl = !0
                }
            }, this.closeXHR = function () {
                self.closeJsonPLoader();
                try {
                    document.documentElement.removeChild(self.scs_el), self.scs_el = null
                } catch (e) {}
                if (null != self.xhr) {
                    try {
                        self.xhr.abort()
                    } catch (e) {}
                    self.xhr.onreadystatechange = null, self.xhr.onerror = null, self.xhr = null
                }
                self.countID3 = 2e3
            }, this.closeData = function () {
                self.closeXHR(), clearTimeout(self.loadImageId_to), clearTimeout(self.showLoadPlaylistErrorId_to), clearTimeout(self.dispatchPlaylistLoadCompleteWidthDelayId_to), clearTimeout(self.loadImageId_to), clearTimeout(self.loadPreloaderId_to), self.image_img && (self.image_img.onload = null, self.image_img.onerror = null)
            }, self.init()
        };
        FWDRAPAudioData.setPrototype = function () {
            FWDRAPAudioData.prototype = new FWDRAPEventDispatcher
        }, FWDRAPAudioData.prototype = null, FWDRAPAudioData.UPDATE_IMAGE = "updateIamage", FWDRAPAudioData.RADIO_TRACK_UPDATE = "shoutcastTitleUpdate", FWDRAPAudioData.RADIO_TRACK_READY = "radioTrackReady", FWDRAPAudioData.SOUNDCLOUD_TRACK_READY = "soundcloudTrackready", FWDRAPAudioData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", FWDRAPAudioData.LOAD_DONE = "onLoadDone", FWDRAPAudioData.LOAD_ERROR = "onLoadError", FWDRAPAudioData.IMAGE_LOADED = "onImageLoaded", FWDRAPAudioData.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", FWDRAPAudioData.SKIN_PROGRESS = "onSkinProgress", FWDRAPAudioData.IMAGES_PROGRESS = "onImagesPogress", FWDRAPAudioData.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete", window.FWDRAPAudioData = FWDRAPAudioData
    }(window), function (o) {
        var i = function (e) {
            var r = this;
            i.prototype;
            this.audio_el = null, this.sourcePath_str = null, this.lastPercentPlayed = 0, this.volume = e, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.testShoutCastId_to, this.preload_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isShoutcast_bl = !1, this.isNormalMp3_bl = !1, this.init = function () {
                r.setupAudio(), r.setHeight(0)
            }, this.setupAudio = function () {
                null == r.audio_el && (r.audio_el = document.createElement("audio"), r.screen.appendChild(r.audio_el), r.audio_el.controls = !1, r.audio_el.preload = "auto", r.audio_el.volume = r.volume), r.audio_el.addEventListener("error", r.errorHandler), r.audio_el.addEventListener("canplay", r.safeToBeControlled), r.audio_el.addEventListener("canplaythrough", r.safeToBeControlled), r.audio_el.addEventListener("progress", r.updateProgress), r.audio_el.addEventListener("timeupdate", r.updateAudio), r.audio_el.addEventListener("pause", r.pauseHandler), r.audio_el.addEventListener("play", r.playHandler), r.audio_el.addEventListener("ended", r.endedHandler)
            }, this.destroyAudio = function () {
                r.audio_el && (r.audio_el.removeEventListener("error", r.errorHandler), r.audio_el.removeEventListener("canplay", r.safeToBeControlled), r.audio_el.removeEventListener("canplaythrough", r.safeToBeControlled), r.audio_el.removeEventListener("progress", r.updateProgress), r.audio_el.removeEventListener("timeupdate", r.updateAudio), r.audio_el.removeEventListener("pause", r.pauseHandler), r.audio_el.removeEventListener("play", r.playHandler), r.audio_el.removeEventListener("ended", r.endedHandler), r.audio_el.src = "", r.audio_el.load())
            }, this.errorHandler = function (e) {
                if (null != r.sourcePath_str && null != r.sourcePath_str) {
                    if (r.isNormalMp3_bl && r.countNormalMp3Errors <= r.maxNormalCountErrors) return r.stop(), r.testShoutCastId_to = setTimeout(r.play, 200), void r.countNormalMp3Errors++;
                    if (r.isShoutcast_bl && r.countShoutCastErrors <= r.maxShoutCastCountErrors && 0 == r.audio_el.networkState) return r.testShoutCastId_to = setTimeout(r.play, 200), void r.countShoutCastErrors++;
                    var t;
                    r.hasError_bl = !0, r.stop(), t = 0 == r.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 1 == r.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 2 == r.audio_el.networkState ? "'self.audio_el.networkState = 2'" : 3 == r.audio_el.networkState ? "source not found <font color='#FF0000'>" + r.sourcePath_str + "</font>" : e, o.console && o.console.log(r.audio_el.networkState), r.dispatchEvent(i.ERROR, {
                        text: t
                    })
                }
            }, this.setSource = function (e) {
                r.sourcePath_str = e, clearTimeout(r.testShoutCastId_to), -1 != r.sourcePath_str.indexOf(";") ? (r.isShoutcast_bl = !0, r.countShoutCastErrors = 0) : r.isShoutcast_bl = !1, -1 == r.sourcePath_str.indexOf(";") ? (r.isNormalMp3_bl = !0, r.countNormalMp3Errors = 0) : r.isNormalMp3_bl = !1, r.lastPercentPlayed = 0, r.audio_el && r.stop(!0)
            }, this.play = function (e) {
                if (r.isStopped_bl) r.isPlaying_bl = !1, r.hasError_bl = !1, r.allowScrubing_bl = !1, r.isStopped_bl = !1, r.setupAudio(), r.audio_el.src = r.sourcePath_str, r.play();
                else if (!r.audio_el.ended || e) try {
                    r.isPlaying_bl = !0, r.hasPlayedOnce_bl = !0, r.audio_el.play(), FWDRAPUtils.isIE && r.dispatchEvent(i.PLAY)
                } catch (e) {}
            }, this.pause = function () {
                if (null != r && null != r.audio_el && !r.audio_el.ended) try {
                    r.audio_el.pause(), r.isPlaying_bl = !1, FWDRAPUtils.isIE && r.dispatchEvent(i.PAUSE)
                } catch (e) {}
            }, this.pauseHandler = function () {
                r.allowScrubing_bl || r.dispatchEvent(i.PAUSE)
            }, this.playHandler = function () {
                r.allowScrubing_bl || (r.isStartEventDispatched_bl || (r.dispatchEvent(i.START), r.isStartEventDispatched_bl = !0), r.dispatchEvent(i.PLAY))
            }, this.endedHandler = function () {
                r.dispatchEvent(i.PLAY_COMPLETE)
            }, this.getDuration = function () {
                return r.formatTime(r.audio_el.duration)
            }, this.getCurrentTime = function () {
                return r.formatTime(r.audio_el.currentTime)
            }, this.stop = function (e) {
                r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0
                }), (null != r && null != r.audio_el && !r.isStopped_bl || e) && (r.isPlaying_bl = !1, r.isStopped_bl = !0, r.hasPlayedOnce_bl = !0, r.isSafeToBeControlled_bl = !1, r.isStartEventDispatched_bl = !1, clearTimeout(r.testShoutCastId_to), r.audio_el.pause(), r.destroyAudio(), r.dispatchEvent(i.STOP), r.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: 0
                }))
            }, this.togglePlayPause = function () {
                null != r && r.isSafeToBeControlled_bl && (r.isPlaying_bl ? r.pause() : r.play())
            }, this.safeToBeControlled = function () {
                r.isSafeToBeControlled_bl || (r.hasHours_bl = 0 < Math.floor(r.audio_el.duration / 3600), r.isPlaying_bl = !0, r.isSafeToBeControlled_bl = !0, r.dispatchEvent(i.SAFE_TO_SCRUBB), r.dispatchEvent(i.SAFE_TO_UPDATE_VOLUME))
            }, this.updateProgress = function () {
                var e = 0;
                0 < r.audio_el.buffered.length && (e = r.audio_el.buffered.end(r.audio_el.buffered.length - 1).toFixed(1) / r.audio_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && r.audio_el.removeEventListener("progress", r.updateProgress), r.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: e
                })
            }, this.updateAudio = function () {
                var e;
                r.allowScrubing_bl || (e = r.audio_el.currentTime / r.audio_el.duration, r.dispatchEvent(i.UPDATE, {
                    percent: e
                }));
                var t = r.formatTime(r.audio_el.duration),
                    o = r.formatTime(r.audio_el.currentTime);
                isNaN(r.audio_el.duration) ? r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0,
                    totalTimeInSeconds: 0
                }) : r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: Math.round(r.audio_el.currentTime),
                    totalTimeInSeconds: r.audio_el.duration
                }), r.lastPercentPlayed = e, r.curDuration = o
            }, this.startToScrub = function () {
                r.allowScrubing_bl = !0
            }, this.stopToScrub = function () {
                r.allowScrubing_bl = !1
            }, this.scrubbAtTime = function (e) {
                r.audio_el.currentTime = e;
                var t = FWDRAPUtils.formatTime(r.audio_el.duration),
                    o = FWDRAPUtils.formatTime(r.audio_el.currentTime);
                r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: e
                })
            }, this.scrub = function (e, t) {
                if (null != r.audio_el && r.audio_el.duration) {
                    t && r.startToScrub();
                    try {
                        r.audio_el.currentTime = r.audio_el.duration * e;
                        var o = r.formatTime(r.audio_el.duration),
                            s = r.formatTime(r.audio_el.currentTime);
                        r.dispatchEvent(i.UPDATE_TIME, {
                            curTime: s,
                            totalTime: o
                        })
                    } catch (t) {}
                }
            }, this.replay = function () {
                r.scrub(0), r.play()
            }, this.setVolume = function (e) {
                null != e && (r.volume = e), r.audio_el && (r.audio_el.volume = r.volume)
            }, this.formatTime = function (e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : r.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
            }, this.setPlaybackRate = function (e) {
                r.audio_el && (r.audio_el.defaultPlaybackRate = e, r.audio_el.playbackRate = e)
            }, this.init()
        };
        i.setPrototype = function () {
            i.prototype = new FWDRAPDisplayObject("div")
        }, i.ERROR = "error", i.UPDATE = "update", i.UPDATE = "update", i.UPDATE_TIME = "updateTime", i.SAFE_TO_SCRUBB = "safeToControll", i.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", i.LOAD_PROGRESS = "loadProgress", i.START = "start", i.PLAY = "play", i.PAUSE = "pause", i.STOP = "stop", i.PLAY_COMPLETE = "playComplete", o.FWDRAPAudioScreen = i
    }(window), function () {
        var t = function (o, e) {
            var p = this;
            t.prototype;
            this.image_img, this.catThumbBk_img = o.catThumbBk_img, this.catNextN_img = o.catNextN_img, this.catPrevN_img = o.catPrevN_img, this.catCloseN_img = o.catCloseN_img, this.mainHolder_do = null, this.closeButton_do = null, this.nextButton_do = null, this.prevButton_do = null, this.thumbs_ar = [], this.categories_ar = o.cats_ar, this.catBkPath_str = o.catBkPath_str, this.inputBackgroundColor_str = o.inputBackgroundColor_str, this.inputColor_str = o.searchInputColor_str, this.id = 0, this.mouseX = 0, this.mouseY = 0, this.dif = 0, this.tempId = p.id, this.stageWidth = 0, this.stageHeight = 0, this.thumbW = 0, this.thumbH = 0, this.buttonsMargins = o.buttonsMargins, this.thumbnailMaxWidth = o.thumbnailMaxWidth, this.thumbnailMaxHeight = o.thumbnailMaxHeight, this.spacerH = o.horizontalSpaceBetweenThumbnails, this.spacerV = o.verticalSpaceBetweenThumbnails, this.dl, this.howManyThumbsToDisplayH = 0, this.howManyThumbsToDisplayV = 0, this.categoriesOffsetTotalWidth = 2 * p.catNextN_img.width + 30, this.categoriesOffsetTotalHeight = p.catNextN_img.height + 30, this.totalThumbnails = p.categories_ar.length, this.delayRate = .06, this.countLoadedThumbs = 0, this.hideCompleteId_to, this.showCompleteId_to, this.loadThumbnailsId_to, this.preventMouseWheelNavigId_to, this.showSearchInput_bl = o.showPlaylistsSearchInput_bl, this.preventMouseWheelNavig_bl = !1, this.areThumbnailsCreated_bl = !1, this.areThumbnailsLoaded_bl = !1, this.isShowed_bl = !1, this.isOnDOM_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, p.init = function () {
                -1 != o.skinPath_str.indexOf("hex_white") ? p.selectedButtonsColor_str = "#FFFFFF" : p.selectedButtonsColor_str = o.selectedButtonsColor_str, p.getStyle().zIndex = 16777271, p.getStyle().msTouchAction = "none", p.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", p.getStyle().width = "100%", p.mainHolder_do = new FWDRAPDisplayObject("div"), p.mainHolder_do.getStyle().background = "url('" + p.catBkPath_str + "')", p.mainHolder_do.setY(-3e3), p.addChild(p.mainHolder_do), p.setupButtons(), p.setupDisable(), p.isMobile_bl && (p.setupMobileMove(), FWDRAPUtils.isChrome && (FWDRAPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(p.screen) : document.documentElement.appendChild(p.screen))), (!p.isMobile_bl || p.isMobile_bl && p.hasPointerEvent_bl) && p.setSelectable(!1), window.addEventListener ? (p.screen.addEventListener("mousewheel", p.mouseWheelDumyHandler), p.screen.addEventListener("DOMMouseScroll", p.mouseWheelDumyHandler)) : document.attachEvent && p.screen.attachEvent("onmousewheel", p.mouseWheelDumyHandler), p.showSearchInput_bl && p.setupInput()
            }, this.mouseWheelDumyHandler = function (e) {
                var t;
                if (FWDAnimation.isTweening(p.mainHolder_do)) return e.preventDefault && e.preventDefault(), !1;
                for (var o = 0; o < p.totalThumbnails; o++)
                    if (t = p.thumbs_ar[o], FWDAnimation.isTweening(t)) return e.preventDefault && e.preventDefault(), !1;
                var s = e.detail || e.wheelDelta;
                if (e.wheelDelta && (s *= -1), FWDRAPUtils.isOpera && (s *= -1), 0 < s) p.nextButtonOnMouseUpHandler();
                else if (s < 0) {
                    if (p.leftId <= 0) return;
                    p.prevButtonOnMouseUpHandler()
                }
                if (!e.preventDefault) return !1;
                e.preventDefault()
            }, this.setupInput = function () {
                p.input_do = new FWDRAPDisplayObject("input"), p.input_do.screen.maxLength = 20, p.input_do.getStyle().textAlign = "left", p.input_do.getStyle().outline = "none", p.input_do.getStyle().boxShadow = "none", p.input_do.getStyle().fontSmoothing = "antialiased", p.input_do.getStyle().webkitFontSmoothing = "antialiased", p.input_do.getStyle().textRendering = "optimizeLegibility", p.input_do.getStyle().fontFamily = "Arial", p.input_do.getStyle().fontSize = "12px", p.input_do.getStyle().padding = "6px", FWDRAPUtils.isIEAndLessThen9 || (p.input_do.getStyle().paddingRight = "-6px"), p.input_do.getStyle().paddingTop = "2px", p.input_do.getStyle().paddingBottom = "3px", p.input_do.getStyle().backgroundColor = p.inputBackgroundColor_str, p.input_do.getStyle().color = p.inputColor_str, p.input_do.getStyle().borderRadius = "6px", p.input_do.screen.value = "search", p.input_do.setHeight(20), p.input_do.setX(18), p.noSearchFound_do = new FWDRAPDisplayObject("div"), p.noSearchFound_do.setX(0), p.noSearchFound_do.getStyle().textAlign = "center", p.noSearchFound_do.getStyle().width = "100%", p.noSearchFound_do.getStyle().fontSmoothing = "antialiased", p.noSearchFound_do.getStyle().webkitFontSmoothing = "antialiased", p.noSearchFound_do.getStyle().textRendering = "optimizeLegibility", p.noSearchFound_do.getStyle().fontFamily = "Arial", p.noSearchFound_do.getStyle().fontSize = "12px", p.noSearchFound_do.getStyle().color = p.inputColor_str, p.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), p.noSearchFound_do.setVisible(!1), p.addChild(p.noSearchFound_do);
                var e = new Image;
                e.src = o.inputArrowPath_str, p.inputArrow_do = new FWDRAPDisplayObject("img"), p.inputArrow_do.setScreen(e), p.inputArrow_do.setWidth(14), p.inputArrow_do.setHeight(12), p.hasPointerEvent_bl ? p.input_do.screen.addEventListener("pointerdown", p.inputFocusInHandler) : p.input_do.screen.addEventListener && (p.input_do.screen.addEventListener("mousedown", p.inputFocusInHandler), p.input_do.screen.addEventListener("touchstart", p.inputFocusInHandler)), p.input_do.screen.addEventListener("keyup", p.keyUpHandler), p.mainHolder_do.addChild(p.input_do), p.mainHolder_do.addChild(p.inputArrow_do)
            }, this.inputFocusInHandler = function () {
                p.hasInputFocus_bl || (p.hasInputFocus_bl = !0, "search" == p.input_do.screen.value && (p.input_do.screen.value = ""), p.input_do.screen.focus(), setTimeout(function () {
                    p.hasPointerEvent_bl ? window.addEventListener("pointerdown", p.inputFocusOutHandler) : window.addEventListener && (window.addEventListener("mousedown", p.inputFocusOutHandler), window.addEventListener("touchstart", p.inputFocusOutHandler))
                }, 50))
            }, this.inputFocusOutHandler = function (e) {
                if (p.hasInputFocus_bl) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    return FWDRAPUtils.hitTest(p.input_do.screen, t.screenX, t.screenY) ? void 0 : (p.hasInputFocus_bl = !1, void("" == p.input_do.screen.value && (p.input_do.screen.value = "search", p.hasPointerEvent_bl ? window.removeEventListener("pointerdown", p.inputFocusOutHandler) : window.removeEventListener && (window.removeEventListener("mousedown", p.inputFocusOutHandler), window.removeEventListener("touchstart", p.inputFocusOutHandler)))))
                }
            }, this.keyUpHandler = function (e) {
                e.stopPropagation && e.stopPropagation(), p.prevInputValue_str != p.input_do.screen.value && (clearTimeout(p.keyPressedId_to), p.keyPressed_bl = !0, clearTimeout(p.rsId_to), p.rsId_to = setTimeout(function () {
                    p.resizeAndPositionThumbnails(!0), p.disableEnableNextAndPrevButtons()
                }, 400)), p.prevInputValue_str = p.input_do.screen.value, p.keyPressedId_to = setTimeout(function () {
                    p.keyPressed_bl = !1
                }, 450)
            }, this.showNothingFound = function () {
                p.isShowNothingFound_bl || (p.isShowNothingFound_bl = !0, p.noSearchFound_do.setVisible(!0), p.noSearchFound_do.setY(parseInt((p.stageHeight - p.noSearchFound_do.getHeight()) / 2)), p.noSearchFound_do.setAlpha(0), FWDAnimation.to(p.noSearchFound_do, .1, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 4
                }))
            }, this.hideNothingFound = function () {
                p.isShowNothingFound_bl && (p.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(p.noSearchFound_do), p.noSearchFound_do.setVisible(!1))
            }, this.setupDisable = function () {
                p.disable_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (p.disable_do.setBkColor("#FFFFFF"), p.disable_do.setAlpha(.01)), p.addChild(p.disable_do)
            }, this.showDisable = function () {
                p.disable_do.w != p.stageWidth && (p.disable_do.setWidth(p.stageWidth), p.disable_do.setHeight(p.stageHeight))
            }, this.hideDisable = function () {
                0 != p.disable_do.w && (p.disable_do.setWidth(0), p.disable_do.setHeight(0))
            }, p.resizeAndPosition = function (e) {
                if (p.isShowed_bl || e) {
                    var t = FWDRAPUtils.getScrollOffsets(),
                        o = FWDRAPUtils.getViewportSize();
                    p.stageWidth = o.w, p.stageHeight = o.h, FWDAnimation.killTweensOf(p.mainHolder_do), p.mainHolder_do.setX(0), p.mainHolder_do.setWidth(p.stageWidth), p.mainHolder_do.setHeight(p.stageHeight), p.setX(t.x), p.setY(t.y), p.setHeight(p.stageHeight), p.isMobile_bl && p.setWidth(p.stageWidth), p.positionButtons(), p.tempId = p.id, p.resizeAndPositionThumbnails(), p.disableEnableNextAndPrevButtons(), p.input_do && (p.input_do.setX(p.stageWidth - p.input_do.getWidth() - p.buttonsMargins), p.input_do.setY(p.stageHeight - p.input_do.getHeight() - p.buttonsMargins), p.inputArrow_do.setX(p.input_do.x + p.input_do.getWidth() - 20), p.inputArrow_do.setY(p.input_do.y + p.input_do.getHeight() / 2 - p.inputArrow_do.getHeight() / 2 - 1))
                }
            }, p.onScrollHandler = function () {
                var e = FWDRAPUtils.getScrollOffsets();
                p.setX(e.x), p.setY(e.y)
            }, this.setupDisable = function () {
                p.disable_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (p.disable_do.setBkColor("#FFFFFF"), p.disable_do.setAlpha(.01)), p.addChild(p.disable_do)
            }, this.showDisable = function () {
                p.disable_do.w != p.stageWidth && (p.disable_do.setWidth(p.stageWidth), p.disable_do.setHeight(p.stageHeight))
            }, this.hideDisable = function () {
                0 != p.disable_do.w && (p.disable_do.setWidth(0), p.disable_do.setHeight(0))
            }, this.setupButtons = function () {
                FWDRAPSimpleButton.setPrototype(), p.closeButton_do = new FWDRAPSimpleButton(p.catCloseN_img, o.catCloseSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, p.selectedButtonsColor_str), p.closeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.closeButtonOnMouseUpHandler), FWDRAPSimpleButton.setPrototype(), p.nextButton_do = new FWDRAPSimpleButton(p.catNextN_img, o.catNextSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, p.selectedButtonsColor_str), p.nextButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.nextButtonOnMouseUpHandler), FWDRAPSimpleButton.setPrototype(), p.prevButton_do = new FWDRAPSimpleButton(p.catPrevN_img, o.catPrevSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, p.selectedButtonsColor_str), p.prevButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.prevButtonOnMouseUpHandler)
            }, this.closeButtonOnMouseUpHandler = function () {
                p.hide()
            }, this.nextButtonOnMouseUpHandler = function () {
                var e = p.howManyThumbsToDisplayH * p.howManyThumbsToDisplayV;
                p.tempId += e, p.tempId > p.totalThumbnails - 1 && (p.tempId = p.totalThumbnails - 1);
                var t = Math.floor(p.tempId / e);
                p.tempId = t * e, p.resizeAndPositionThumbnails(!0, "next"), p.disableEnableNextAndPrevButtons(!1, !0)
            }, this.prevButtonOnMouseUpHandler = function () {
                var e = p.howManyThumbsToDisplayH * p.howManyThumbsToDisplayV;
                p.tempId -= e, p.tempId < 0 && (p.tempId = 0);
                var t = Math.floor(p.tempId / e);
                p.tempId = t * e, p.resizeAndPositionThumbnails(!0, "prev"), p.disableEnableNextAndPrevButtons(!0, !1)
            }, this.positionButtons = function () {
                p.closeButton_do.setX(p.stageWidth - p.closeButton_do.w - p.buttonsMargins), p.closeButton_do.setY(p.buttonsMargins), p.nextButton_do.setX(p.stageWidth - p.nextButton_do.w - p.buttonsMargins), p.nextButton_do.setY(parseInt((p.stageHeight - p.nextButton_do.h) / 2)), p.prevButton_do.setX(p.buttonsMargins), p.prevButton_do.setY(parseInt((p.stageHeight - p.prevButton_do.h) / 2))
            }, this.disableEnableNextAndPrevButtons = function (e, t) {
                var o = p.howManyThumbsToDisplayH * p.howManyThumbsToDisplayV,
                    s = Math.floor(p.tempId / o),
                    i = Math.ceil(p.totalThumbnails / o) - 1;
                p.howManyThumbsToDisplayH, p.howManyThumbsToDisplayH;
                o >= p.totalThumbnails ? (p.nextButton_do.disable(), p.prevButton_do.disable(), p.nextButton_do.setDisabledState(), p.prevButton_do.setDisabledState()) : 0 == s ? (p.nextButton_do.enable(), p.prevButton_do.disable(), p.nextButton_do.setEnabledState(), p.prevButton_do.setDisabledState()) : (s == i ? (p.nextButton_do.disable(), p.prevButton_do.enable(), p.nextButton_do.setDisabledState()) : (p.nextButton_do.enable(), p.prevButton_do.enable(), p.nextButton_do.setEnabledState()), p.prevButton_do.setEnabledState()), e || p.prevButton_do.setNormalState(), t || p.nextButton_do.setNormalState()
            }, this.setupMobileMove = function () {
                p.hasPointerEvent_bl ? p.screen.addEventListener("pointerdown", p.mobileDownHandler) : p.screen.addEventListener("touchstart", p.mobileDownHandler)
            }, this.mobileDownHandler = function (e) {
                if (!e.touches || 1 == e.touches.length) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    p.mouseX = t.screenX, p.mouseY = t.screenY, p.hasPointerEvent_bl ? (window.addEventListener("pointerup", p.mobileUpHandler), window.addEventListener("pointermove", p.mobileMoveHandler)) : (window.addEventListener("touchend", p.mobileUpHandler), window.addEventListener("touchmove", p.mobileMoveHandler))
                }
            }, this.mobileMoveHandler = function (e) {
                if (e.preventDefault && e.preventDefault(), !e.touches || 1 == e.touches.length) {
                    p.showDisable();
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    p.dif = p.mouseX - t.screenX, p.mouseX = t.screenX, p.mouseY = t.screenY
                }
            }, this.mobileUpHandler = function (e) {
                p.hideDisable(), 10 < p.dif ? p.nextButtonOnMouseUpHandler() : p.dif < -10 && p.prevButtonOnMouseUpHandler(), p.dif = 0, p.hasPointerEvent_bl ? (window.removeEventListener("pointerup", p.mobileUpHandler), window.removeEventListener("pointermove", p.mobileMoveHandler)) : (window.removeEventListener("touchend", p.mobileUpHandler), window.removeEventListener("touchmove", p.mobileMoveHandler))
            }, this.setupThumbnails = function () {
                if (!p.areThumbnailsCreated_bl) {
                    var e;
                    p.areThumbnailsCreated_bl = !0;
                    for (var t = 0; t < p.totalThumbnails; t++) FWDRAPCategoriesThumb.setPrototype(), (e = new FWDRAPCategoriesThumb(p, t, o.catThumbBkPath_str, o.catThumbBkTextPath_str, o.thumbnailSelectedType_str, p.categories_ar[t].htmlContent, p.categories_ar[t].htmlText_str)).addListener(FWDRAPCategoriesThumb.MOUSE_UP, p.thumbnailOnMouseUpHandler), p.thumbs_ar[t] = e, p.mainHolder_do.addChild(e);
                    p.mainHolder_do.addChild(p.closeButton_do), p.mainHolder_do.addChild(p.nextButton_do), p.mainHolder_do.addChild(p.prevButton_do)
                }
            }, this.thumbnailOnMouseUpHandler = function (e) {
                p.id = e.id, p.disableOrEnableThumbnails(), p.hide()
            }, this.resizeAndPositionThumbnails = function (e, t) {
                if (p.areThumbnailsCreated_bl) {
                    var o, s, i, n, r, l, a, d, u, c = [].concat(p.thumbs_ar);
                    if (p.isSearched_bl = !1, p.input_do && (inputValue = p.input_do.screen.value.toLowerCase(), "search" != inputValue))
                        for (var h = 0; h < c.length; h++) - 1 == (o = c[h]).htmlText_str.toLowerCase().indexOf(inputValue.toLowerCase()) && (FWDAnimation.killTweensOf(o), o.hide(), c.splice(h, 1), h--);
                    p.totalThumbnails = c.length, p.totalThumbnails != p.thumbs_ar.length && (p.isSearched_bl = !0), 0 == p.totalThumbnails ? p.showNothingFound() : p.hideNothingFound(), this.remainWidthSpace = this.stageWidth - n;
                    var _ = p.stageWidth - p.categoriesOffsetTotalWidth,
                        f = p.stageHeight - p.categoriesOffsetTotalHeight;
                    p.howManyThumbsToDisplayH = Math.ceil((_ - p.spacerH) / (p.thumbnailMaxWidth + p.spacerH)), p.thumbW = Math.floor((_ - p.spacerH * (p.howManyThumbsToDisplayH - 1)) / p.howManyThumbsToDisplayH), p.thumbW > p.thumbnailMaxWidth && (p.howManyThumbsToDisplayH += 1, p.thumbW = Math.floor((_ - p.spacerH * (p.howManyThumbsToDisplayH - 1)) / p.howManyThumbsToDisplayH)), p.thumbH = Math.floor(p.thumbW / p.thumbnailMaxWidth * p.thumbnailMaxHeight), p.howManyThumbsToDisplayV = Math.floor(f / (p.thumbH + p.spacerV)), p.howManyThumbsToDisplayV < 1 && (p.howManyThumbsToDisplayV = 1), n = Math.min(p.howManyThumbsToDisplayH, p.totalThumbnails) * (p.thumbW + p.spacerH) - p.spacerH, r = Math.min(Math.ceil(p.totalThumbnails / p.howManyThumbsToDisplayH), p.howManyThumbsToDisplayV) * (p.thumbH + p.spacerV) - p.spacerV, l = p.howManyThumbsToDisplayH > p.totalThumbnails ? 0 : _ - n, p.howManyThumbsToDisplayH > p.totalThumbnails && (p.howManyThumbsToDisplayH = p.totalThumbnails), u = p.howManyThumbsToDisplayH * p.howManyThumbsToDisplayV, s = Math.floor(p.tempId / u), p.isSearched_bl && (s = 0), d = p.howManyThumbsToDisplayH * s, firstId = s * u, (a = firstId + u) > p.totalThumbnails && (a = p.totalThumbnails);
                    for (h = 0; h < p.totalThumbnails; h++)(o = c[h]).finalW = p.thumbW, h % p.howManyThumbsToDisplayH == p.howManyThumbsToDisplayH - 1 && (o.finalW += l), o.finalH = p.thumbH, o.finalX = h % p.howManyThumbsToDisplayH * (p.thumbW + p.spacerH), o.finalX += Math.floor(h / u) * p.howManyThumbsToDisplayH * (p.thumbW + p.spacerH), o.finalX += (p.stageWidth - n) / 2, o.finalX = Math.floor(o.finalX - d * (p.thumbW + p.spacerH)), o.finalY = h % u, o.finalY = Math.floor(o.finalY / p.howManyThumbsToDisplayH) * (p.thumbH + p.spacerV), o.finalY += (f - r) / 2, o.finalY += p.categoriesOffsetTotalHeight / 2, o.finalY = Math.floor(o.finalY), s < (i = Math.floor(h / u)) ? o.finalX += 150 : i < s && (o.finalX -= 150), e ? h >= firstId && h < a ? (dl = "next" == t ? h % u * p.delayRate + .1 : (u - h % u) * p.delayRate + .1, p.keyPressed_bl && (dl = 0), o.resizeAndPosition(!0, dl)) : o.resizeAndPosition(!0, 0) : o.resizeAndPosition(), o.show();
                    p.howManyThumbsToDisplayH * p.howManyThumbsToDisplayV >= p.totalThumbnails ? (p.nextButton_do.setVisible(!1), p.prevButton_do.setVisible(!1)) : (p.nextButton_do.setVisible(!0), p.prevButton_do.setVisible(!0))
                }
            }, this.loadImages = function () {
                p.countLoadedThumbs > p.totalThumbnails - 1 || (p.image_img && (p.image_img.onload = null, p.image_img.onerror = null), p.image_img = new Image, p.image_img.onerror = p.onImageLoadError, p.image_img.onload = p.onImageLoadComplete, p.image_img.src = p.categories_ar[p.countLoadedThumbs].thumbnailPath)
            }, this.onImageLoadError = function (e) {}, this.onImageLoadComplete = function (e) {
                p.thumbs_ar[p.countLoadedThumbs].setImage(p.image_img), p.countLoadedThumbs++, p.loadWithDelayId_to = setTimeout(p.loadImages, 40)
            }, this.disableOrEnableThumbnails = function () {
                for (var e, t = 0; t < p.totalThumbnails; t++) e = p.thumbs_ar[t], t == p.id ? e.disable() : e.enable()
            }, this.show = function (e) {
                p.isShowed_bl || (p.isShowed_bl = !0, p.isOnDOM_bl = !0, p.id = e, FWDRAPUtils.isChrome && p.isMobile_bl ? p.setVisible(!0) : FWDRAPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].appendChild(p.screen) : document.documentElement.appendChild(p.screen), window.addEventListener ? window.addEventListener("scroll", p.onScrollHandler) : window.attachEvent && window.attachEvent("onscroll", p.onScrollHandler), p.setupThumbnails(), p.resizeAndPosition(!0), p.showDisable(), p.disableOrEnableThumbnails(), clearTimeout(p.hideCompleteId_to), clearTimeout(p.showCompleteId_to), p.mainHolder_do.setY(-p.stageHeight), p.isMobile_bl ? (p.showCompleteId_to = setTimeout(p.showCompleteHandler, 1200), FWDAnimation.to(p.mainHolder_do, .8, {
                    y: 0,
                    delay: .4,
                    ease: Expo.easeInOut
                })) : (p.showCompleteId_to = setTimeout(p.showCompleteHandler, 800), FWDAnimation.to(p.mainHolder_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                })))
            }, this.showCompleteHandler = function () {
                p.mainHolder_do.setY(0), p.hideDisable(), FWDRAPUtils.isIphone && (e.videoScreen_do && e.videoScreen_do.setY(-5e3), e.ytb_do && e.ytb_do.setY(-5e3)), p.resizeAndPosition(!0), p.areThumbnailsLoaded_bl || (p.loadImages(), p.areThumbnailsLoaded_bl = !0)
            }, this.hide = function () {
                p.isShowed_bl && (p.isShowed_bl = !1, FWDRAPUtils.isIphone && (e.videoScreen_do && e.videoScreen_do.setY(0), e.ytb_do && e.ytb_do.setY(0)), clearTimeout(p.hideCompleteId_to), clearTimeout(p.showCompleteId_to), p.showDisable(), p.hideCompleteId_to = setTimeout(p.hideCompleteHandler, 800), FWDAnimation.killTweensOf(p.mainHolder_do), FWDAnimation.to(p.mainHolder_do, .8, {
                    y: -p.stageHeight,
                    ease: Expo.easeInOut
                }), window.addEventListener ? window.removeEventListener("scroll", p.onScrollHandler) : window.detachEvent && window.detachEvent("onscroll", p.onScrollHandler), p.resizeAndPosition())
            }, this.hideCompleteHandler = function () {
                FWDRAPUtils.isChrome && p.isMobile_bl ? p.setVisible(!1) : FWDRAPUtils.isIEAndLessThen9 ? document.getElementsByTagName("body")[0].removeChild(p.screen) : document.documentElement.removeChild(p.screen), p.isOnDOM_bl = !1, p.dispatchEvent(t.HIDE_COMPLETE)
            }, this.updateHEXColors = function (e, t) {
                -1 != o.skinPath_str.indexOf("hex_white") ? p.selectedColor_str = "#FFFFFF" : p.selectedColor_str = t, p.closeButton_do.updateHEXColors(e, p.selectedColor_str), p.nextButton_do.updateHEXColors(e, p.selectedColor_str), p.prevButton_do.updateHEXColors(e, p.selectedColor_str)
            }, this.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDRAPDisplayObject("div")
        }, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, window.FWDRAPCategories = t
    }(), function (e) {
        var a = function (t, e, o, s, i, n, r) {
            var l = this;
            a.prototype;
            this.backgroundImagePath_str = o, this.catThumbTextBkPath_str = s, this.canvas_el = null, this.htmlContent = n, this.simpleText_do = null, this.effectImage_do = null, this.imageHolder_do = null, this.normalImage_do = null, this.effectImage_do = null, this.dumy_do = null, this.htmlText_str = r, this.thumbnailSelectedType_str = i, this.id = e, this.imageOriginalW, this.imageOriginalH, this.finalX, this.finalY, this.finalW, this.finalH, this.imageFinalX, this.imageFinalY, this.imageFinalW, this.imageFinalH, this.dispatchShowWithDelayId_to, this.isShowed_bl = !1, this.hasImage_bl = !1, this.isSelected_bl = !1, this.isDisabled_bl = !1, this.hasCanvas_bl = FWDRAP.hasCanvas, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.init = function () {
                l.getStyle().background = "url('" + l.backgroundImagePath_str + "')", l.setupMainContainers(), l.setupDescription(), l.setupDumy()
            }, this.setupMainContainers = function () {
                l.imageHolder_do = new FWDRAPDisplayObject("div"), l.addChild(l.imageHolder_do)
            }, this.setupDumy = function () {
                l.dumy_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (l.dumy_do.setBkColor("#FFFFFF"), l.dumy_do.setAlpha(0)), l.addChild(l.dumy_do)
            }, this.setupDescription = function () {
                l.simpleText_do = new FWDRAPDisplayObject("div"), l.simpleText_do.getStyle().background = "url('" + l.catThumbTextBkPath_str + "')", FWDRAPUtils.isFirefox && (l.simpleText_do.hasTransform3d_bl = !1, l.simpleText_do.hasTransform2d_bl = !1), l.simpleText_do.setBackfaceVisibility(), l.simpleText_do.getStyle().width = "100%", l.simpleText_do.getStyle().fontFamily = "Arial", l.simpleText_do.getStyle().fontSize = "12px", l.simpleText_do.getStyle().textAlign = "left", l.simpleText_do.getStyle().color = "#FFFFFF", l.simpleText_do.getStyle().fontSmoothing = "antialiased", l.simpleText_do.getStyle().webkitFontSmoothing = "antialiased", l.simpleText_do.getStyle().textRendering = "optimizeLegibility", l.simpleText_do.setInnerHTML(l.htmlContent), l.addChild(l.simpleText_do)
            }, this.positionDescription = function () {
                l.simpleText_do.setY(parseInt(l.finalH - l.simpleText_do.getHeight()))
            }, this.setupBlackAndWhiteImage = function (e) {
                if (l.hasCanvas_bl && "opacity" != l.thumbnailSelectedType_str) {
                    var t = document.createElement("canvas"),
                        o = t.getContext("2d");
                    t.width = l.imageOriginalW, t.height = l.imageOriginalH, o.drawImage(e, 0, 0);
                    var s = o.getImageData(0, 0, t.width, t.height),
                        i = s.data;
                    if ("threshold" == l.thumbnailSelectedType_str)
                        for (var n = 0; n < i.length; n += 4) {
                            var r = 150 <= .2126 * i[n] + .7152 * i[n + 1] + .0722 * i[n + 2] ? 255 : 0;
                            i[n] = i[n + 1] = i[n + 2] = r
                        } else if ("blackAndWhite" == l.thumbnailSelectedType_str)
                            for (n = 0; n < i.length; n += 4) {
                                r = .2126 * i[n] + .7152 * i[n + 1] + .0722 * i[n + 2];
                                i[n] = i[n + 1] = i[n + 2] = r
                            }
                    o.putImageData(s, 0, 0, 0, 0, s.width, s.height), l.effectImage_do = new FWDRAPDisplayObject("canvas"), l.effectImage_do.screen = t, l.effectImage_do.setAlpha(.9), l.effectImage_do.setMainProperties()
                }
            }, this.setImage = function (e) {
                l.normalImage_do = new FWDRAPDisplayObject("img"), l.normalImage_do.setScreen(e), l.imageOriginalW = l.normalImage_do.w, l.imageOriginalH = l.normalImage_do.h, l.setButtonMode(!0), l.setupBlackAndWhiteImage(e), l.resizeImage(), l.imageHolder_do.setX(parseInt(l.finalW / 2)), l.imageHolder_do.setY(parseInt(l.finalH / 2)), l.imageHolder_do.setWidth(0), l.imageHolder_do.setHeight(0), l.normalImage_do.setX(-parseInt(l.normalImage_do.w / 2)), l.normalImage_do.setY(-parseInt(l.normalImage_do.h / 2)), l.normalImage_do.setAlpha(0), l.effectImage_do && (l.effectImage_do.setX(-parseInt(l.normalImage_do.w / 2)), l.effectImage_do.setY(-parseInt(l.normalImage_do.h / 2)), l.effectImage_do.setAlpha(.01)), FWDAnimation.to(l.imageHolder_do, .8, {
                    x: 0,
                    y: 0,
                    w: l.finalW,
                    h: l.finalH,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(l.normalImage_do, .8, {
                    alpha: 1,
                    x: l.imageFinalX,
                    y: l.imageFinalY,
                    ease: Expo.easeInOut
                }), l.effectImage_do && FWDAnimation.to(l.effectImage_do, .8, {
                    x: l.imageFinalX,
                    y: l.imageFinalY,
                    ease: Expo.easeInOut
                }), l.isMobile_bl ? l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onMouseUp), l.screen.addEventListener("pointerover", l.onMouseOver), l.screen.addEventListener("pointerout", l.onMouseOut)) : l.screen.addEventListener("mouseup", l.onMouseUp) : l.screen.addEventListener ? (l.screen.addEventListener("mouseover", l.onMouseOver), l.screen.addEventListener("mouseout", l.onMouseOut), l.screen.addEventListener("mouseup", l.onMouseUp)) : l.screen.attachEvent && (l.screen.attachEvent("onmouseover", l.onMouseOver), l.screen.attachEvent("onmouseout", l.onMouseOut), l.screen.attachEvent("onmouseup", l.onMouseUp)), this.imageHolder_do.addChild(l.normalImage_do), l.effectImage_do && l.imageHolder_do.addChild(l.effectImage_do), this.hasImage_bl = !0, l.id == t.id && l.disable()
            }, l.onMouseOver = function (e, t) {
                l.isDisabled_bl || e.pointerType && e.pointerType != e.RAPOINTER_TYPE_MOUSE || l.setSelectedState(!0)
            }, l.onMouseOut = function (e) {
                l.isDisabled_bl || e.pointerType && e.pointerType != e.RAPOINTER_TYPE_MOUSE || l.setNormalState(!0)
            }, l.onMouseUp = function (e) {
                l.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), l.dispatchEvent(a.MOUSE_UP, {
                    id: l.id
                }))
            }, this.resizeAndPosition = function (e, t) {
                FWDAnimation.killTweensOf(l), FWDAnimation.killTweensOf(l.imageHolder_do), e ? FWDAnimation.to(l, .8, {
                    x: l.finalX,
                    y: l.finalY,
                    delay: t,
                    ease: Expo.easeInOut
                }) : (l.setX(l.finalX), l.setY(l.finalY)), l.setWidth(l.finalW), l.setHeight(l.finalH), l.imageHolder_do.setX(0), l.imageHolder_do.setY(0), l.imageHolder_do.setWidth(l.finalW), l.imageHolder_do.setHeight(l.finalH), l.dumy_do.setWidth(l.finalW), l.dumy_do.setHeight(l.finalH), l.resizeImage(), l.positionDescription()
            }, this.resizeImage = function (e) {
                if (l.normalImage_do) {
                    FWDAnimation.killTweensOf(l.normalImage_do);
                    var t, o = l.finalW / l.imageOriginalW,
                        s = l.finalH / l.imageOriginalH;
                    t = s <= o ? o : s, l.imageFinalW = Math.ceil(t * l.imageOriginalW), l.imageFinalH = Math.ceil(t * l.imageOriginalH), l.imageFinalX = Math.round((l.finalW - l.imageFinalW) / 2), l.imageFinalY = Math.round((l.finalH - l.imageFinalH) / 2), l.effectImage_do && (FWDAnimation.killTweensOf(l.effectImage_do), l.effectImage_do.setX(l.imageFinalX), l.effectImage_do.setY(l.imageFinalY), l.effectImage_do.setWidth(l.imageFinalW), l.effectImage_do.setHeight(l.imageFinalH), l.isDisabled_bl && l.setSelectedState(!1, !0)), l.normalImage_do.setX(l.imageFinalX), l.normalImage_do.setY(l.imageFinalY), l.normalImage_do.setWidth(l.imageFinalW), l.normalImage_do.setHeight(l.imageFinalH), l.isDisabled_bl ? l.normalImage_do.setAlpha(.3) : l.normalImage_do.setAlpha(1)
                }
            }, this.setNormalState = function (e) {
                l.isSelected_bl && (l.isSelected_bl = !1, "threshold" == l.thumbnailSelectedType_str || "blackAndWhite" == l.thumbnailSelectedType_str ? e ? FWDAnimation.to(l.effectImage_do, 1, {
                    alpha: .01,
                    ease: Quart.easeOut
                }) : l.effectImage_do.setAlpha(.01) : "opacity" == l.thumbnailSelectedType_str && (e ? FWDAnimation.to(l.normalImage_do, 1, {
                    alpha: 1,
                    ease: Quart.easeOut
                }) : l.normalImage_do.setAlpha(1)))
            }, this.setSelectedState = function (e, t) {
                l.isSelected_bl && !t || (l.isSelected_bl = !0, "threshold" == l.thumbnailSelectedType_str || "blackAndWhite" == l.thumbnailSelectedType_str ? e ? FWDAnimation.to(l.effectImage_do, 1, {
                    alpha: 1,
                    ease: Expo.easeOut
                }) : l.effectImage_do.setAlpha(1) : "opacity" == l.thumbnailSelectedType_str && (e ? FWDAnimation.to(l.normalImage_do, 1, {
                    alpha: .3,
                    ease: Expo.easeOut
                }) : l.normalImage_do.setAlpha(.3)))
            }, this.enable = function () {
                l.hasImage_bl && (l.isDisabled_bl = !1, l.setButtonMode(!0), l.setNormalState(!0))
            }, this.disable = function () {
                l.hasImage_bl && (l.isDisabled_bl = !0, l.setButtonMode(!1), l.setSelectedState(!0))
            }, this.show = function () {
                FWDAnimation.to(l, .8, {
                    scale: 1,
                    ease: Expo.easeInOut
                })
            }, this.hide = function () {
                FWDAnimation.to(l, .8, {
                    scale: 0,
                    ease: Expo.easeInOut
                })
            }, this.init()
        };
        a.setPrototype = function () {
            a.prototype = new FWDRAPTransformDisplayObject("div")
        }, a.MOUSE_UP = "onMouseUp", a.prototype = null, e.FWDRAPCategoriesThumb = a
    }(window), function (l) {
        var t = function (i, n) {
            var r = this,
                e = t.prototype;
            this.categories_ar = n.categories_ar, this.buttons_ar = [], this.mainHolder_do = null, this.selector_do = null, this.mainButtonsHolder_do = null, this.buttonsHolder_do = null, this.arrowW = n.arrowW, this.arrowH = n.arrowH, r.useHEXColorsForSkin_bl = i.data.useHEXColorsForSkin_bl, r.normalButtonsColor_str = i.data.normalButtonsColor_str, r.selectedButtonsColor_str = i.data.selectedButtonsColor_str, this.arrowN_str = n.arrowN_str, this.arrowS_str = n.arrowS_str, this.bk1_str = n.bk1_str, this.bk2_str = n.bk2_str, this.selectorLabel_str = n.selectorLabel, this.selectorBkColorN_str = n.selectorBackgroundNormalColor, this.selectorBkColorS_str = n.selectorBackgroundSelectedColor, this.selectorTextColorN_str = n.selectorTextNormalColor, this.selectorTextColorS_str = n.selectorTextSelectedColor, this.itemBkColorN_str = n.buttonBackgroundNormalColor, this.itemBkColorS_str = n.buttonBackgroundSelectedColor, this.itemTextColorN_str = n.buttonTextNormalColor, this.itemTextColorS_str = n.buttonTextSelectedColor, this.scrollBarHandlerFinalY = 0, this.finalX, this.finalY, this.totalButtons = r.categories_ar.length, this.curId = n.startAtPlaylist, this.buttonsHolderWidth = 0, this.buttonsHolderHeight = 0, this.totalWidth = i.stageWidth, this.buttonHeight = n.buttonHeight, this.totalButtonsHeight = 0, this.sapaceBetweenButtons = 0, this.thumbnailsFinalY = 0, this.vy = 0, this.vy2 = 0, this.friction = .9, this.hideMenuTimeOutId_to, this.getMaxWidthResizeAndPositionId_to, this.isShowed_bl = !1, this.addMouseWheelSupport_bl = i.data.addScrollBarMouseWheelSupport_bl, this.scollbarSpeedSensitivity = .5, this.isOpened_bl = !1, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                r.setOverflow("visible"), r.setupMainContainers(), r.setupScrollLogic(), r.getMaxWidthResizeAndPosition(), r.setupSeparator(), r.mainButtonsHolder_do.setVisible(!1), r.bk_do.setVisible(!1)
            }, this.setupSeparator = function () {
                r.separator_do = new FWDRAPDisplayObject("div"), r.separator_do.setBackfaceVisibility(), r.separator_do.hasTransform3d_bl = !1, r.separator_do.hasTransform2d_bl = !1, r.separator_do.getStyle().background = "url('" + i.playlistSeparator_img.src + "')", r.separator_do.setHeight(i.playlistSeparator_img.height), r.separator_do.setY(r.buttonHeight), r.addChild(r.separator_do)
            }, this.setupMainContainers = function () {
                var e;
                if (r.mainHolder_do = new FWDRAPDisplayObject("div"), r.mainHolder_do.setOverflow("visible"), r.addChild(r.mainHolder_do), r.bk_do = new FWDRAPDisplayObject("div"), r.bk_do.setY(r.buttonHeight), r.bk_do.setBkColor(i.playlistBackgroundColor_str), r.bk_do.setAlpha(0), r.mainHolder_do.addChild(r.bk_do), r.mainButtonsHolder_do = new FWDRAPDisplayObject("div"), r.mainButtonsHolder_do.setY(r.buttonHeight), r.mainHolder_do.addChild(r.mainButtonsHolder_do), i.expandPlaylistBackground_bl) {
                    r.dummyBk_do = new FWDRAPDisplayObject("img");
                    var t = new Image;
                    t.src = i.controllerBkPath_str, r.dummyBk_do.setScreen(t), r.dummyBk_do.getStyle().backgroundColor = "#000000"
                } else r.dummyBk_do = new FWDRAPDisplayObject("div"), r.dummyBk_do.getStyle().background = "url('" + i.controllerBkPath_str + "')";
                r.dummyBk_do.setHeight(r.buttonHeight), r.mainHolder_do.addChild(r.dummyBk_do), r.buttonsHolder_do = new FWDRAPDisplayObject("div"), r.mainButtonsHolder_do.addChild(r.buttonsHolder_do);
                var o = r.selectorLabel_str;
                "default" == r.selectorLabel_str && (o = r.categories_ar[r.curId]), FWDRAPComboBoxSelector.setPrototype(), r.selector_do = new FWDRAPComboBoxSelector(11, 6, n.arrowN_str, n.arrowS_str, o, r.selectorBkColorN_str, r.selectorBkColorS_str, r.selectorTextColorN_str, r.selectorTextColorS_str, r.buttonHeight, r.useHEXColorsForSkin_bl, r.normalButtonsColor_str, r.selectedButtonsColor_str), r.mainHolder_do.addChild(r.selector_do), r.selector_do.setNormalState(!1), r.selector_do.addListener(FWDRAPComboBoxSelector.MOUSE_DOWN, r.openMenuHandler);
                for (var s = 0; s < r.totalButtons; s++) FWDRAPComboBoxButton.setPrototype(), e = new FWDRAPComboBoxButton(r, r.categories_ar[s], r.bk1_str, r.bk2_str, r.itemBkColorN_str, r.itemBkColorS_str, r.itemTextColorN_str, r.itemTextColorS_str, s, r.buttonHeight), (r.buttons_ar[s] = e).addListener(FWDRAPComboBoxButton.MOUSE_DOWN, r.buttonOnMouseDownHandler), r.buttonsHolder_do.addChild(e)
            }, this.buttonOnMouseDownHandler = function (e) {
                r.curId = e.target.id, clearTimeout(r.hideMenuTimeOutId_to), r.hide(!1), r.selector_do.enable(), r.isMobile_bl ? r.hasPointerEvent_bl ? l.removeEventListener("RAPointerDown", r.checkOpenedMenu) : l.removeEventListener("touchstart", r.checkOpenedMenu) : l.addEventListener ? (l.removeEventListener("mousedown", r.checkOpenedMenu), l.removeEventListener("mousemove", r.checkOpenedMenu)) : document.attachEvent && document.detachEvent("onmousemove", r.checkOpenedMenu), i.data.showPlaylistsSelectBoxNumbers_bl ? r.selector_do.setText(r.buttons_ar[r.curId].label1_str.substr(4)) : r.selector_do.setText(r.buttons_ar[r.curId].label1_str), r.isButtonCliecked_bl = !0, r.dispatchEvent(t.BUTTON_PRESSED, {
                    id: r.curId
                })
            }, this.openMenuHandler = function (e) {
                FWDAnimation.isTweening(r.mainButtonsHolder_do) || (r.isShowed_bl ? r.checkOpenedMenu(e.e, !0) : (r.selector_do.disable(), r.show(!0), r.startToCheckOpenedMenu(), r.dispatchEvent(t.OPEN)))
            }, this.setButtonsStateBasedOnId = function (e) {
                r.curId = e;
                for (var t = 0; t < r.totalButtons; t++) button_do = r.buttons_ar[t], t == r.curId ? button_do.disable() : button_do.enable();
                i.data.showPlaylistsSelectBoxNumbers_bl ? r.selector_do.setText(r.buttons_ar[r.curId].label1_str.substr(4)) : r.selector_do.setText(r.buttons_ar[r.curId].label1_str), r.scrHandler_do ? (r.updateScrollBarSizeActiveAndDeactivate(), r.updateScrollBarHandlerAndContent(!1, !0)) : r.thumbnailsFinalY = 0
            }, this.setValue = function (e) {
                r.curId = e, r.setButtonsStateBasedOnId()
            }, this.startToCheckOpenedMenu = function (e) {
                r.isMobile_bl ? r.hasPointerEvent_bl ? l.addEventListener("RAPointerDown", r.checkOpenedMenu) : l.addEventListener("touchstart", r.checkOpenedMenu) : l.addEventListener ? l.addEventListener("mousedown", r.checkOpenedMenu) : document.attachEvent && document.attachEvent("onmousemove", r.checkOpenedMenu)
            }, this.checkOpenedMenu = function (e, t) {
                e.preventDefault && e.preventDefault();
                var o = FWDRAPUtils.getViewportMouseCoordinates(e),
                    s = 1e3;
                "mousedown" == e.type && (s = 0), !FWDRAPUtils.hitTest(r.screen, o.screenX, o.screenY) && !FWDRAPUtils.hitTest(r.mainButtonsHolder_do.screen, o.screenX, o.screenY) || t ? (r.isMobile_bl ? (r.hide(!0), r.selector_do.enable()) : (clearTimeout(r.hideMenuTimeOutId_to), r.hideMenuTimeOutId_to = setTimeout(function () {
                    r.hide(!0), r.selector_do.enable()
                }, s)), r.isMobile_bl ? r.hasPointerEvent_bl ? l.removeEventListener("RAPointerDown", r.checkOpenedMenu) : l.removeEventListener("touchstart", r.checkOpenedMenu) : l.addEventListener ? (l.removeEventListener("mousemove", r.checkOpenedMenu), l.removeEventListener("mousedown", r.checkOpenedMenu)) : document.attachEvent && document.detachEvent("onmousemove", r.checkOpenedMenu)) : clearTimeout(r.hideMenuTimeOutId_to)
            }, r.getMaxWidthResizeAndPosition = function () {
                for (var e, t = r.totalButtonsHeight = 0; t < r.totalButtons; t++)(e = r.buttons_ar[t]).setY(1 + t * (e.totalHeight + r.sapaceBetweenButtons)), r.allowToScrollAndScrollBarIsActive_bl && !r.isMobile_bl ? r.totalWidth = i.stageWidth - 6 : r.totalWidth = i.stageWidth, e.totalWidth = r.totalWidth, e.setWidth(r.totalWidth), e.centerText();
                r.totalButtonsHeight = e.getY() + e.totalHeight - r.sapaceBetweenButtons, r.dummyBk_do.setWidth(r.totalWidth + 6), r.setWidth(r.totalWidth), r.setHeight(r.buttonHeight), r.selector_do.totalWidth = r.totalWidth + 6, r.selector_do.setWidth(r.totalWidth + 6), r.selector_do.centerText(), r.buttonsHolder_do.setWidth(r.totalWidth), r.buttonsHolder_do.setHeight(r.totalButtonsHeight)
            }, this.position = function () {
                FWDRAPUtils.isAndroid ? (r.setX(Math.floor(r.finalX)), r.setY(Math.floor(r.finalY - 1)), setTimeout(r.poscombo - box, 100)) : (r.poscombo, box())
            }, this.resizeAndPosition = function () {
                r.stageWidth = i.stageWidth, r.stageHeight = i.stageHeight, r.bk_do.setWidth(r.stageWidth), r.bk_do.setHeight(r.stageHeight), r.mainButtonsHolder_do.setWidth(r.stageWidth), r.mainButtonsHolder_do.setHeight(r.stageHeight), r.totalButtonsHeight > r.mainButtonsHolder_do.h ? r.allowToScrollAndScrollBarIsActive_bl = !0 : r.allowToScrollAndScrollBarIsActive_bl = !1, !r.allowToScrollAndScrollBarIsActive_bl && r.scrMainHolder_do ? r.scrMainHolder_do.setVisible(!1) : r.allowToScrollAndScrollBarIsActive_bl && r.scrMainHolder_do && r.isShowed_bl && r.scrMainHolder_do.setVisible(!0), r.separator_do.setWidth(r.stageWidth), r.scrHandler_do && r.updateScrollBarSizeActiveAndDeactivate(), this.getMaxWidthResizeAndPosition(), r.updateScrollBarHandlerAndContent()
            }, this.hide = function (e, t) {
                (r.isShowed_bl || t) && (FWDAnimation.killTweensOf(this), r.isShowed_bl = !1, FWDAnimation.killTweensOf(r.mainButtonsHolder_do), FWDAnimation.killTweensOf(r.bk_do), e ? (FWDAnimation.to(r.mainButtonsHolder_do, .8, {
                    y: -r.totalButtonsHeight,
                    ease: Expo.easeInOut,
                    onComplete: r.hideComplete
                }), FWDAnimation.to(r.bk_do, .8, {
                    alpha: 0
                })) : (r.bk_do.setVisible(!1), r.mainButtonsHolder_do.setY(r.buttonHeight - r.totalButtonsHeight), r.bk_do.setAlpha(0), r.setHeight(r.buttonHeight), r.hideComplete()))
            }, this.hideComplete = function () {
                r.mainButtonsHolder_do.setVisible(!1), r.bk_do.setVisible(!1)
            }, this.show = function (e, t) {
                r.isShowed_bl && !t || (FWDAnimation.killTweensOf(this), r.mainButtonsHolder_do.setY(-r.totalButtonsHeight), r.isShowed_bl = !0, r.mainButtonsHolder_do.setVisible(!0), r.bk_do.setVisible(!0), r.resizeAndPosition(), FWDAnimation.killTweensOf(r.mainButtonsHolder_do), FWDAnimation.killTweensOf(r.bk_do), r.scrMainHolder_do && r.allowToScrollAndScrollBarIsActive_bl && r.scrMainHolder_do.setVisible(!0), e ? (FWDAnimation.to(r.bk_do, .8, {
                    alpha: 1
                }), FWDAnimation.to(r.mainButtonsHolder_do, .8, {
                    y: r.buttonHeight,
                    ease: Expo.easeInOut
                })) : (r.bk_do.setAlpha(1), r.mainButtonsHolder_do.setY(r.buttonHeight)))
            }, this.setupScrollLogic = function () {
                r.isMobile_bl ? r.setupMobileScrollbar() : (r.setupScrollbar(), r.addMouseWheelSupport_bl && r.addMouseWheelSupport())
            }, this.setupMobileScrollbar = function () {
                r.hasPointerEvent_bl ? r.mainButtonsHolder_do.screen.addEventListener("pointerdown", r.scrollBarTouchStartHandler) : r.mainButtonsHolder_do.screen.addEventListener("touchstart", r.scrollBarTouchStartHandler), r.mainButtonsHolder_do.screen.addEventListener("mousedown", r.scrollBarTouchStartHandler), r.updateMobileScrollBarId_int = setInterval(r.updateMobileScrollBar, 16)
            }, this.scrollBarTouchStartHandler = function (e) {
                e.preventDefault && e.preventDefault(), r.isScrollingOnMove_bl = !1, FWDAnimation.killTweensOf(r.buttonsHolder_do);
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                r.isDragging_bl = !0, r.lastPresedY = t.screenY, r.checkLastPresedY = t.screenY, r.hasPointerEvent_bl ? (l.addEventListener("pointerup", r.scrollBarTouchEndHandler), l.addEventListener("pointermove", r.scrollBarTouchMoveHandler)) : (l.addEventListener("touchend", r.scrollBarTouchEndHandler), l.addEventListener("touchmove", r.scrollBarTouchMoveHandler)), l.addEventListener("mouseup", r.scrollBarTouchEndHandler), l.addEventListener("mousemove", r.scrollBarTouchMoveHandler), clearInterval(r.updateMoveMobileScrollbarId_int), r.updateMoveMobileScrollbarId_int = setInterval(r.updateMoveMobileScrollbar, 20)
            }, this.scrollBarTouchMoveHandler = function (e) {
                if (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation(), !(r.totalButtonsHeight < r.mainButtonsHolder_do.h)) {
                    i.showDisable();
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    (t.screenY >= r.checkLastPresedY + 6 || t.screenY <= r.checkLastPresedY - 6) && (r.isScrollingOnMove_bl = !0);
                    var o = t.screenY - r.lastPresedY;
                    r.thumbnailsFinalY += o, r.thumbnailsFinalY = Math.round(r.thumbnailsFinalY), r.lastPresedY = t.screenY, r.vy = 2 * o
                }
            }, this.scrollBarTouchEndHandler = function (e) {
                r.isDragging_bl = !1, clearInterval(r.updateMoveMobileScrollbarId_int), clearTimeout(r.disableOnMoveId_to), r.disableOnMoveId_to = setTimeout(function () {
                    i.hideDisable()
                }, 100), r.hasPointerEvent_bl ? (l.removeEventListener("pointerup", r.scrollBarTouchEndHandler), l.removeEventListener("pointermove", r.scrollBarTouchMoveHandler)) : (l.removeEventListener("touchend", r.scrollBarTouchEndHandler), l.removeEventListener("touchmove", r.scrollBarTouchMoveHandler)), l.removeEventListener("mousemove", r.scrollBarTouchMoveHandler)
            }, this.updateMoveMobileScrollbar = function () {
                r.buttonsHolder_do.setY(r.thumbnailsFinalY)
            }, this.updateMobileScrollBar = function (e) {
                r.isDragging_bl || (r.totalButtonsHeight < r.mainButtonsHolder_do.h && (r.thumbnailsFinalY = .01), r.vy *= r.friction, r.thumbnailsFinalY += r.vy, 0 < r.thumbnailsFinalY ? (r.vy2 = .3 * (0 - r.thumbnailsFinalY), r.vy *= r.friction, r.thumbnailsFinalY += r.vy2) : r.thumbnailsFinalY < r.mainButtonsHolder_do.h - r.totalButtonsHeight && (r.vy2 = .3 * (r.mainButtonsHolder_do.h - r.totalButtonsHeight - r.thumbnailsFinalY), r.vy *= r.friction, r.thumbnailsFinalY += r.vy2), r.buttonsHolder_do.setY(Math.round(r.thumbnailsFinalY)))
            }, this.setupScrollbar = function () {
                r.scrMainHolder_do = new FWDRAPDisplayObject("div"), r.scrMainHolder_do.setVisible(!1), r.scrMainHolder_do.setWidth(i.scrWidth), r.scrTrack_do = new FWDRAPDisplayObject("div"), r.scrTrack_do.setWidth(i.scrWidth);
                var e = new Image;
                e.src = i.playlistScrBkTop_img.src, r.scrTrackTop_do = new FWDRAPDisplayObject("img"), r.scrTrackTop_do.setWidth(i.scrTrackTop_do.w), r.scrTrackTop_do.setHeight(i.scrTrackTop_do.h), r.scrTrackTop_do.setScreen(e), r.scrTrackMiddle_do = new FWDRAPDisplayObject("div"), r.scrTrackMiddle_do.getStyle().background = "url('" + i.data.scrBkMiddlePath_str + "')", r.scrTrackMiddle_do.setWidth(i.scrWidth), r.scrTrackMiddle_do.setY(r.scrTrackTop_do.h);
                var t = new Image;
                t.src = i.data.scrBkBottomPath_str, r.scrTrackBottom_do = new FWDRAPDisplayObject("img"), r.scrTrackBottom_do.setScreen(t), r.scrTrackBottom_do.setWidth(r.scrTrackTop_do.w), r.scrTrackBottom_do.setHeight(r.scrTrackTop_do.h), r.scrHandler_do = new FWDRAPDisplayObject("div"), r.scrHandler_do.setWidth(i.scrWidth), r.playlistScrDragTop_img = new Image, r.playlistScrDragTop_img.src = i.data.scrDragBottomPath_str, r.playlistScrDragTop_img.width = i.playlistScrDragTop_img.width, r.playlistScrDragTop_img.height = i.playlistScrDragTop_img.height, r.scrHandlerTop_do = new FWDRAPDisplayObject("img"), r.useHEXColorsForSkin_bl ? (r.scrHandlerTop_do = new FWDRAPDisplayObject("div"), r.scrHandlerTop_do.setWidth(r.playlistScrDragTop_img.width), r.scrHandlerTop_do.setHeight(r.playlistScrDragTop_img.height), r.mainScrubberDragTop_canvas = FWDRAPUtils.getCanvasWithModifiedColor(r.playlistScrDragTop_img, r.normalButtonsColor_str).canvas, r.scrHandlerTop_do.screen.appendChild(r.mainScrubberDragTop_canvas)) : (r.scrHandlerTop_do = new FWDRAPDisplayObject("img"), r.scrHandlerTop_do.setScreen(r.playlistScrDragTop_img)), r.scrHandlerMiddle_do = new FWDRAPDisplayObject("div"), r.middleImage = new Image, r.middleImage.src = i.data.scrDragMiddlePath_str, r.useHEXColorsForSkin_bl ? r.middleImage.onload = function () {
                    r.scrubberDragMiddle_canvas = FWDRAPUtils.getCanvasWithModifiedColor(r.middleImage, r.normalButtonsColor_str, !0), r.scrubberDragImage_img = r.scrubberDragMiddle_canvas.image, r.scrHandlerMiddle_do.getStyle().background = "url('" + r.scrubberDragImage_img.src + "') repeat-y"
                } : r.scrHandlerMiddle_do.getStyle().background = "url('" + i.data.scrDragMiddlePath_str + "')", r.scrHandlerMiddle_do.setWidth(i.scrWidth), r.scrHandlerMiddle_do.setY(r.scrHandlerTop_do.h), r.scrHandlerBottom_do = new FWDRAPDisplayObject("div"), r.bottomImage = new Image, r.bottomImage.src = i.data.scrDragMiddlePath_str, r.useHEXColorsForSkin_bl ? r.bottomImage.onload = function () {
                    r.scrubberDragBottom_canvas = FWDRAPUtils.getCanvasWithModifiedColor(r.bottomImage, r.normalButtonsColor_str, !0), r.scrubberDragBottomImage_img = r.scrubberDragBottom_canvas.image, r.scrHandlerBottom_do.getStyle().background = "url('" + r.scrubberDragBottomImage_img.src + "') repeat-y"
                } : r.scrHandlerBottom_do.getStyle().background = "url('" + i.playlistScrDragTop_img.src + "')", r.scrHandlerBottom_do.setWidth(i.scrWidth), r.scrHandlerBottom_do.setY(r.scrHandlerTop_do.h), console.log(), console.log(), r.scrHandlerBottom_do.setWidth(r.scrHandlerTop_do.w), r.scrHandlerBottom_do.setHeight(r.scrHandlerTop_do.h), r.scrHandler_do.setButtonMode(!0), r.playlistScrLines_img = new Image, r.playlistScrLines_img.src = i.playlistScrLines_img.src, r.playlistScrLines_img.width = i.playlistScrLines_img.width, r.playlistScrLines_img.height = i.playlistScrLines_img.height, r.useHEXColorsForSkin_bl ? (r.scrHandlerLinesN_do = new FWDRAPDisplayObject("div"), r.scrHandlerLinesN_do.setWidth(r.playlistScrLines_img.width), r.scrHandlerLinesN_do.setHeight(r.playlistScrLines_img.height), r.mainhandlerN_canvas = FWDRAPUtils.getCanvasWithModifiedColor(r.playlistScrLines_img, r.selectedButtonsColor_str).canvas, r.scrHandlerLinesN_do.screen.appendChild(r.mainhandlerN_canvas)) : (r.scrHandlerLinesN_do = new FWDRAPDisplayObject("img"), r.scrHandlerLinesN_do.setScreen(r.playlistScrLines_img)), r.scrHandlerLinesS_img = new Image, r.scrHandlerLinesS_img.src = i.data.scrLinesSPath_str, r.useHEXColorsForSkin_bl ? (r.scrHandlerLinesS_do = new FWDRAPDisplayObject("div"), r.scrHandlerLinesS_img.onload = function () {
                    r.scrHandlerLinesS_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLinesS_do.setHeight(r.scrHandlerLinesN_do.h), r.scrubberLines_s_canvas = FWDRAPUtils.getCanvasWithModifiedColor(r.scrHandlerLinesS_img, r.selectedButtonsColor_str, !0), r.scrubbelinesSImage_img = r.scrubberLines_s_canvas.image, r.scrHandlerLinesS_do.getStyle().background = "url('" + r.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (r.scrHandlerLinesS_do = new FWDRAPDisplayObject("img"), r.scrHandlerLinesS_do.setScreen(r.scrHandlerLinesS_img), r.scrHandlerLinesS_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLinesS_do.setHeight(r.scrHandlerLinesN_do.h)), r.scrHandlerLinesS_do.setAlpha(0), r.scrHandlerLines_do = new FWDRAPDisplayObject("div"), r.scrHandlerLines_do.setWidth(r.scrHandlerLinesN_do.w), r.scrHandlerLines_do.setHeight(r.scrHandlerLinesN_do.h), r.scrHandlerLines_do.setButtonMode(!0), r.scrTrack_do.addChild(r.scrTrackTop_do), r.scrTrack_do.addChild(r.scrTrackMiddle_do), r.scrTrack_do.addChild(r.scrTrackBottom_do), r.scrHandler_do.addChild(r.scrHandlerTop_do), r.scrHandler_do.addChild(r.scrHandlerMiddle_do), r.scrHandler_do.addChild(r.scrHandlerBottom_do), r.scrHandlerLines_do.addChild(r.scrHandlerLinesN_do), r.scrHandlerLines_do.addChild(r.scrHandlerLinesS_do), r.scrMainHolder_do.addChild(r.scrTrack_do), r.scrMainHolder_do.addChild(r.scrHandler_do), r.scrMainHolder_do.addChild(r.scrHandlerLines_do), r.mainButtonsHolder_do.addChild(r.scrMainHolder_do), r.scrHandler_do.screen.addEventListener ? (r.scrHandler_do.screen.addEventListener("mouseover", r.scrollBarHandlerOnMouseOver), r.scrHandler_do.screen.addEventListener("mouseout", r.scrollBarHandlerOnMouseOut), r.scrHandler_do.screen.addEventListener("mousedown", r.scrollBarHandlerOnMouseDown), r.scrHandlerLines_do.screen.addEventListener("mouseover", r.scrollBarHandlerOnMouseOver), r.scrHandlerLines_do.screen.addEventListener("mouseout", r.scrollBarHandlerOnMouseOut), r.scrHandlerLines_do.screen.addEventListener("mousedown", r.scrollBarHandlerOnMouseDown)) : r.scrHandler_do.screen.attachEvent && (r.scrHandler_do.screen.attachEvent("onmouseover", r.scrollBarHandlerOnMouseOver), r.scrHandler_do.screen.attachEvent("onmouseout", r.scrollBarHandlerOnMouseOut), r.scrHandler_do.screen.attachEvent("onmousedown", r.scrollBarHandlerOnMouseDown), r.scrHandlerLines_do.screen.attachEvent("onmouseover", r.scrollBarHandlerOnMouseOver), r.scrHandlerLines_do.screen.attachEvent("onmouseout", r.scrollBarHandlerOnMouseOut), r.scrHandlerLines_do.screen.attachEvent("onmousedown", r.scrollBarHandlerOnMouseDown))
            }, this.scrollBarHandlerOnMouseOver = function (e) {
                r.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))
            }, this.scrollBarHandlerOnMouseOut = function (e) {
                !r.isDragging_bl && r.allowToScrollAndScrollBarIsActive_bl && (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.scrollBarHandlerOnMouseDown = function (e) {
                if (r.allowToScrollAndScrollBarIsActive_bl) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    r.isDragging_bl = !0, r.yPositionOnPress = r.scrHandler_do.y, r.lastPresedY = t.screenY, FWDAnimation.killTweensOf(r.scrHandler_do), i.showDisable(), l.addEventListener ? (l.addEventListener("mousemove", r.scrollBarHandlerMoveHandler), l.addEventListener("mouseup", r.scrollBarHandlerEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", r.scrollBarHandlerMoveHandler), document.attachEvent("onmouseup", r.scrollBarHandlerEndHandler))
                }
            }, this.scrollBarHandlerMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDRAPUtils.getViewportMouseCoordinates(e),
                    o = r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2);
                r.scrollBarHandlerFinalY = Math.round(r.yPositionOnPress + t.screenY - r.lastPresedY), r.scrollBarHandlerFinalY >= r.scrTrack_do.h - r.scrHandler_do.h ? r.scrollBarHandlerFinalY = r.scrTrack_do.h - r.scrHandler_do.h : r.scrollBarHandlerFinalY <= 0 && (r.scrollBarHandlerFinalY = 0), r.scrHandler_do.setY(r.scrollBarHandlerFinalY), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                    y: o,
                    ease: Quart.easeOut
                }), r.updateScrollBarHandlerAndContent(!0)
            }, r.scrollBarHandlerEndHandler = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                r.isDragging_bl = !1, FWDRAPUtils.hitTest(r.scrHandler_do.screen, t.screenX, t.screenY) || (FWDAnimation.killTweensOf(r.scrHandlerLinesN_do), FWDAnimation.killTweensOf(r.scrHandlerLinesS_do), FWDAnimation.to(r.scrHandlerLinesN_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })), i.hideDisable(), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.to(r.scrHandler_do, .4, {
                    y: r.scrollBarHandlerFinalY,
                    ease: Quart.easeOut
                }), l.removeEventListener ? (l.removeEventListener("mousemove", r.scrollBarHandlerMoveHandler), l.removeEventListener("mouseup", r.scrollBarHandlerEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", r.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", r.scrollBarHandlerEndHandler))
            }, this.updateScrollBarSizeActiveAndDeactivate = function () {
                r.disableForAWhileAfterThumbClick_bl || (r.allowToScrollAndScrollBarIsActive_bl ? (r.allowToScrollAndScrollBarIsActive_bl = !0, r.scrMainHolder_do.setX(r.stageWidth - r.scrMainHolder_do.w), r.scrMainHolder_do.setHeight(r.mainButtonsHolder_do.h), r.scrTrack_do.setHeight(r.scrMainHolder_do.h), r.scrTrackMiddle_do.setHeight(r.scrTrack_do.h - 2 * r.scrTrackTop_do.h), r.scrTrackBottom_do.setY(r.scrTrackMiddle_do.y + r.scrTrackMiddle_do.h), r.scrMainHolder_do.setAlpha(1), r.scrHandler_do.setButtonMode(!0), r.scrHandlerLines_do.setButtonMode(!0)) : (r.allowToScrollAndScrollBarIsActive_bl = !1, r.scrMainHolder_do.setX(r.stageWidth - r.scrMainHolder_do.w), r.scrMainHolder_do.setHeight(r.mainButtonsHolder_do.h), r.scrTrack_do.setHeight(r.scrMainHolder_do.h), r.scrTrackMiddle_do.setHeight(r.scrTrack_do.h - 2 * r.scrTrackTop_do.h), r.scrTrackBottom_do.setY(r.scrTrackMiddle_do.y + r.scrTrackMiddle_do.h), r.scrMainHolder_do.setAlpha(.5), r.scrHandler_do.setY(0), r.scrHandler_do.setButtonMode(!1), r.scrHandlerLines_do.setButtonMode(!1)), r.scrHandler_do.setHeight(Math.max(30, Math.round(Math.min(1, r.scrMainHolder_do.h / r.totalButtonsHeight) * r.scrMainHolder_do.h))), r.scrHandlerMiddle_do.setHeight(r.scrHandler_do.h - 2 * r.scrHandlerTop_do.h), FWDAnimation.killTweensOf(r.scrHandlerLines_do), r.scrHandlerLines_do.setY(r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2)), r.scrHandlerBottom_do.setY(r.scrHandler_do.h - r.scrHandlerBottom_do.h - 1))
            }, this.addMouseWheelSupport = function () {
                r.screen.addEventListener ? (r.screen.addEventListener("DOMMouseScroll", r.mouseWheelHandler), r.screen.addEventListener("mousewheel", r.mouseWheelHandler)) : r.screen.attachEvent && r.screen.attachEvent("onmousewheel", r.mouseWheelHandler)
            }, r.mouseWheelHandler = function (e) {
                if (e.preventDefault && e.preventDefault(), r.disableMouseWheel_bl || r.isDragging_bl) return !1;
                var t = e.detail || e.wheelDelta;
                e.wheelDelta && (t *= -1), 0 < t ? r.scrollBarHandlerFinalY += Math.round(160 * r.scollbarSpeedSensitivity * (r.mainButtonsHolder_do.h / r.totalButtonsHeight)) : t < 0 && (r.scrollBarHandlerFinalY -= Math.round(160 * r.scollbarSpeedSensitivity * (r.mainButtonsHolder_do.h / r.totalButtonsHeight))), r.scrollBarHandlerFinalY >= r.scrTrack_do.h - r.scrHandler_do.h ? r.scrollBarHandlerFinalY = r.scrTrack_do.h - r.scrHandler_do.h : r.scrollBarHandlerFinalY <= 0 && (r.scrollBarHandlerFinalY = 0);
                var o = r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLines_do.h) / 2);
                if (FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.killTweensOf(r.scrHandlerLines_do), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                        y: o,
                        ease: Quart.easeOut
                    }), FWDAnimation.to(r.scrHandler_do, .5, {
                        y: r.scrollBarHandlerFinalY,
                        ease: Quart.easeOut
                    }), r.isDragging_bl = !0, r.updateScrollBarHandlerAndContent(!0), r.isDragging_bl = !1, !e.preventDefault) return !1;
                e.preventDefault()
            }, this.updateScrollBarHandlerAndContent = function (e, t) {
                if (!r.disableForAWhileAfterThumbClick_bl && (r.allowToScrollAndScrollBarIsActive_bl || t)) {
                    var o = 0;
                    r.isDragging_bl && !r.isMobile_bl ? ("Infinity" == (o = r.scrollBarHandlerFinalY / (r.scrMainHolder_do.h - r.scrHandler_do.h)) ? o = 0 : 1 <= o && (scrollPercent = 1), r.thumbnailsFinalY = -1 * Math.round(o * (r.totalButtonsHeight - r.mainButtonsHolder_do.h))) : (o = r.curId / (r.totalButtons - 1), r.thumbnailsFinalY = Math.min(0, -1 * Math.round(o * (r.totalButtonsHeight - r.mainButtonsHolder_do.h))), r.scrMainHolder_do && (r.scrollBarHandlerFinalY = Math.round((r.scrMainHolder_do.h - r.scrHandler_do.h) * o), r.scrollBarHandlerFinalY < 0 ? r.scrollBarHandlerFinalY = 0 : r.scrollBarHandlerFinalY > r.scrMainHolder_do.h - r.scrHandler_do.h - 1 && (r.scrollBarHandlerFinalY = r.scrMainHolder_do.h - r.scrHandler_do.h - 1), FWDAnimation.killTweensOf(r.scrHandler_do), FWDAnimation.killTweensOf(r.scrHandlerLines_do), e ? (FWDAnimation.to(r.scrHandler_do, .4, {
                        y: r.scrollBarHandlerFinalY,
                        ease: Quart.easeOut
                    }), FWDAnimation.to(r.scrHandlerLines_do, .8, {
                        y: r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLinesN_do.h) / 2),
                        ease: Quart.easeOut
                    })) : (r.scrHandler_do.setY(r.scrollBarHandlerFinalY), r.scrHandlerLines_do.setY(r.scrollBarHandlerFinalY + parseInt((r.scrHandler_do.h - r.scrHandlerLinesN_do.h) / 2))))), r.lastThumbnailFinalY != r.thumbnailsFinalY && (FWDAnimation.killTweensOf(r.buttonsHolder_do), e ? FWDAnimation.to(r.buttonsHolder_do, .5, {
                        y: r.thumbnailsFinalY,
                        ease: Quart.easeOut
                    }) : r.buttonsHolder_do.setY(r.thumbnailsFinalY)), r.lastThumbnailFinalY = r.thumbnailsFinalY
                }
            }, this.init(), this.destroy = function () {
                r.isMobile_bl ? (l.removeEventListener("RAPointerDown", r.checkOpenedMenu), l.removeEventListener("touchstart", r.checkOpenedMenu)) : l.removeEventListener ? l.removeEventListener("mousemove", r.checkOpenedMenu) : document.detachEvent && document.detachEvent("onmousemove", r.checkOpenedMenu), clearTimeout(r.hideMenuTimeOutId_to), clearTimeout(r.getMaxWidthResizeAndPositionId_to), FWDAnimation.killTweensOf(r), FWDAnimation.killTweensOf(r.mainHolder_do), FWDAnimation.killTweensOf(r.buttonsHolder_do), FWDAnimation.killTweensOf(r.mainButtonsHolder_do), r.mainHolder_do.destroy(), r.selector_do.destroy(), r.mainButtonsHolder_do.destroy(), r.buttonsHolder_do.destroy(), r.categories_ar = null, r.buttons_ar = null, r.mainHolder_do = null, r.selector_do = null, r.mainButtonsHolder_do = null, r.buttonsHolder_do = null, r.upArrowN_img = null, r.upArrowS_img = null, n = i = null, r.setInnerHTML(""), e.destroy(), e = r = null, t.prototype = null
            }
        };
        t.setPrototype = function () {
            t.prototype = new FWDRAPDisplayObject("div")
        }, t.OPEN = "open", t.HIDE_COMPLETE = "infoWindowHideComplete", t.BUTTON_PRESSED = "buttonPressed", t.prototype = null, l.FWDRAPComboBox = t
    }(window), function () {
        var h = function (t, e, o, s, i, n, r, l, a, d) {
            var u = this,
                c = h.prototype;
            this.bk_sdo = null, this.text_sdo = null, this.dumy_sdo = null, this.label1_str = e, this.backgroundNormalColor_str = i, this.backgroundSelectedColor_str = n, this.textNormalColor_str = r, this.textSelectedColor_str = l, this.bk1_str = o, this.bk2_str = s, this.totalWidth = 400, this.totalHeight = d, this.id = a, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.isMobile_bl = FWDRAPUtils.isMobile, this.isDisabled_bl = !1, u.init = function () {
                u.setBackfaceVisibility(), u.setButtonMode(!0), u.setupMainContainers(), u.setWidth(u.totalWidth), u.setHeight(u.totalHeight), u.setNormalState()
            }, u.setupMainContainers = function () {
                u.bk_sdo = new FWDRAPDisplayObject("div"), u.bk_sdo.setBkColor(u.backgroundNormalColor_str), u.id % 2 == 0 ? u.bk_sdo.getStyle().background = "url('" + u.bk1_str + "')" : (u.bk_sdo.getStyle().background = "url('" + u.bk2_str + "')", u.type = 2), u.addChild(u.bk_sdo), u.text_sdo = new FWDRAPDisplayObject("div"), u.text_sdo.getStyle().whiteSpace = "nowrap", u.text_sdo.setBackfaceVisibility(), u.text_sdo.setOverflow("visible"), u.text_sdo.setDisplay("inline-block"), u.text_sdo.getStyle().fontFamily = "Arial", u.text_sdo.getStyle().fontSize = "13px", u.text_sdo.getStyle().padding = "6px", u.text_sdo.getStyle().fontWeight = "100", u.text_sdo.getStyle().color = u.normalColor_str, u.text_sdo.getStyle().fontSmoothing = "antialiased", u.text_sdo.getStyle().webkitFontSmoothing = "antialiased", u.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDRAPUtils.isIEAndLessThen9 ? u.text_sdo.screen.innerText = u.label1_str : u.text_sdo.setInnerHTML(u.label1_str), u.addChild(u.text_sdo), u.dumy_sdo = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (u.dumy_sdo.setBkColor("#FF0000"), u.dumy_sdo.setAlpha(0)), u.addChild(u.dumy_sdo), u.isMobile_bl ? u.hasPointerEvent_bl ? (u.screen.addEventListener("MSPointerOver", u.onMouseOver), u.screen.addEventListener("MSPointerOut", u.onMouseOut), u.screen.addEventListener("MSPointerDown", u.onMouseDown), u.screen.addEventListener("MSPointerUp", u.onClick)) : u.screen.addEventListener("touchend", u.onMouseDown) : u.screen.addEventListener ? (u.screen.addEventListener("mouseover", u.onMouseOver), u.screen.addEventListener("mouseout", u.onMouseOut), u.screen.addEventListener("click", u.onMouseDown), u.screen.addEventListener("click", u.onClick)) : u.screen.attachEvent && (u.screen.attachEvent("onmouseover", u.onMouseOver), u.screen.attachEvent("onmouseout", u.onMouseOut), u.screen.attachEvent("onmousedown", u.onMouseDown), u.screen.attachEvent("onclick", u.onClick))
            }, u.onMouseOver = function (e) {
                u.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(u.text_sdo), u.setSelectedState(!0), u.dispatchEvent(h.MOUSE_OVER))
            }, u.onMouseOut = function (e) {
                u.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(u.text_sdo), u.setNormalState(!0), u.dispatchEvent(h.MOUSE_OUT))
            }, u.onClick = function (e) {
                u.isDisabled_bl || (e.preventDefault && e.preventDefault(), u.dispatchEvent(h.CLICK))
            }, u.onMouseDown = function (e) {
                u.isDisabled_bl || t.isScrollingOnMove_bl || (e.preventDefault && e.preventDefault(), u.dispatchEvent(h.MOUSE_DOWN, {
                    e: e
                }))
            }, this.setSelectedState = function (e) {
                e ? FWDAnimation.to(u.text_sdo.screen, .6, {
                    css: {
                        color: u.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                }) : u.text_sdo.getStyle().color = u.textSelectedColor_str
            }, this.setNormalState = function (e) {
                e ? FWDAnimation.to(u.text_sdo.screen, .6, {
                    css: {
                        color: u.textNormalColor_str
                    },
                    ease: Quart.easeOut
                }) : u.text_sdo.getStyle().color = u.textNormalColor_str
            }, u.centerText = function () {
                u.dumy_sdo.setWidth(u.totalWidth), u.dumy_sdo.setHeight(u.totalHeight), u.bk_sdo.setWidth(u.totalWidth), u.bk_sdo.setHeight(u.totalHeight), u.text_sdo.setX(4), u.text_sdo.setY(Math.round((u.totalHeight - u.text_sdo.getHeight()) / 2))
            }, u.getMaxTextWidth = function () {
                return u.text_sdo.getWidth()
            }, this.disable = function () {
                u.isDisabled_bl = !0, u.setButtonMode(!1), u.setSelectedState(!0)
            }, this.enable = function () {
                u.isDisabled_bl = !1, u.setNormalState(!0), u.setButtonMode(!0)
            }, u.destroy = function () {
                u.isMobile_bl ? u.hasPointerEvent_bl ? (u.screen.removeEventListener("MSPointerOver", u.onMouseOver), u.screen.removeEventListener("MSPointerOut", u.onMouseOut), u.screen.removeEventListener("MSPointerDown", u.onMouseDown), u.screen.removeEventListener("MSPointerUp", u.onClick)) : u.screen.removeEventListener("touchstart", u.onMouseDown) : u.screen.removeEventListener ? (u.screen.removeEventListener("mouseover", u.onMouseOver), u.screen.removeEventListener("mouseout", u.onMouseOut), u.screen.removeEventListener("mousedown", u.onMouseDown), u.screen.removeEventListener("click", u.onClick)) : u.screen.detachEvent && (u.screen.detachEvent("onmouseover", u.onMouseOver), u.screen.detachEvent("onmouseout", u.onMouseOut), u.screen.detachEvent("onmousedown", u.onMouseDown), u.screen.detachEvent("onclick", u.onClick)), FWDAnimation.killTweensOf(u.text_sdo.screen), FWDAnimation.killTweensOf(u.bk_sdo.screen), u.text_sdo.destroy(), u.bk_sdo.destroy(), u.dumy_sdo.destroy(), u.bk_sdo = null, u.text_sdo = null, u.dumy_sdo = null, u.label1_str = null, u.normalColor_str = null, u.textSelectedColor_str = null, u.disabledColor_str = null, u.setInnerHTML(""), c.destroy(), c = u = null, h.prototype = null
            }, u.init()
        };
        h.setPrototype = function () {
            h.prototype = new FWDRAPDisplayObject("div")
        }, h.FIRST_BUTTON_CLICK = "onFirstClick", h.SECOND_BUTTON_CLICK = "secondButtonOnClick", h.MOUSE_OVER = "onMouseOver", h.MOUSE_OUT = "onMouseOut", h.MOUSE_DOWN = "onMouseDown", h.CLICK = "onClick", h.prototype = null, window.FWDRAPComboBoxButton = h
    }(window), function () {
        var p = function (e, t, o, s, i, n, r, l, a, d, u, c, h) {
            var _ = this,
                f = p.prototype;
            this.arrow_do = null, this.arrowN_sdo = null, this.arrowS_sdo = null, this.arrowN_str = o, this.arrowS_str = s, this.label1_str = i, this.backgroundNormalColor_str = n, this.backgroundSelectedColor_str = r, this.textNormalColor_str = l, this.textSelectedColor_str = a, _.useHEXColorsForSkin_bl = u, _.normalButtonsColor_str = c, _.selectedButtonsColor_str = h, this.totalWidth = 400, this.totalHeight = d, this.arrowWidth = e, this.arrowHeight = t, this.bk_sdo = null, this.text_sdo = null, this.dumy_sdo = null, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.isMobile_bl = FWDRAPUtils.isMobile, this.isDisabled_bl = !1, _.init = function () {
                _.setBackfaceVisibility(), _.setButtonMode(!0), _.setupMainContainers(), _.setWidth(_.totalWidth), _.setHeight(_.totalHeight)
            }, _.setupMainContainers = function () {
                _.bk_sdo = new FWDRAPDisplayObject("div"), _.bk_sdo.getStyle().backgroundColor = _.backgroundNormalColor_str, _.addChild(_.bk_sdo), _.text_sdo = new FWDRAPDisplayObject("div"), _.text_sdo.getStyle().whiteSpace = "nowrap", _.text_sdo.setBackfaceVisibility(), _.text_sdo.setOverflow("visible"), _.text_sdo.setDisplay("inline-block"), _.text_sdo.getStyle().fontFamily = "Arial", _.text_sdo.getStyle().fontSize = "13px", _.text_sdo.getStyle().fontWeight = "100", _.text_sdo.getStyle().padding = "6px", _.text_sdo.getStyle().color = _.normalColor_str, _.text_sdo.getStyle().fontSmoothing = "antialiased", _.text_sdo.getStyle().webkitFontSmoothing = "antialiased", _.text_sdo.getStyle().textRendering = "optimizeLegibility", FWDRAPUtils.isIEAndLessThen9 ? _.text_sdo.screen.innerText = _.label1_str : _.text_sdo.setInnerHTML(_.label1_str), _.addChild(_.text_sdo), _.arrow_do = new FWDRAPDisplayObject("div"), _.arrow_do.setOverflow("visible"), _.useHEXColorsForSkin_bl ? (_.arrowN_img = new Image, _.arrowN_img.src = _.arrowN_str, _.arrowS_img = new Image, _.arrowS_img.src = _.arrowS_str, _.arrowN_sdo = new FWDRAPDisplayObject("div"), _.arrowS_sdo = new FWDRAPDisplayObject("div"), _.arrowN_img.onload = function () {
                    _.arrowN_sdo.setWidth(_.arrowN_img.width), _.arrowN_sdo.setHeight(_.arrowN_img.height), _.scrubberLines_n_canvas = FWDRAPUtils.getCanvasWithModifiedColor(_.arrowN_img, _.normalButtonsColor_str, !0), _.scrubbelinesNImage_img = _.scrubberLines_n_canvas.image, _.arrowN_sdo.getStyle().background = "url('" + _.scrubbelinesNImage_img.src + "') repeat-y", _.arrowS_sdo.setWidth(_.arrowS_img.width), _.arrowS_sdo.setHeight(_.arrowS_img.height), _.scrubberLines_s_canvas = FWDRAPUtils.getCanvasWithModifiedColor(_.arrowS_img, _.selectedButtonsColor_str, !0), _.scrubbelinesSImage_img = _.scrubberLines_s_canvas.image, _.arrowS_sdo.getStyle().background = "url('" + _.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (_.arrowN_sdo = new FWDRAPDisplayObject("div"), _.arrowN_sdo.screen.style.backgroundImage = "url(" + _.arrowN_str + ")", _.arrowS_sdo = new FWDRAPDisplayObject("div"), _.arrowS_sdo.screen.style.backgroundImage = "url(" + _.arrowS_str + ")"), _.arrowS_sdo.setAlpha(0), _.arrow_do.addChild(_.arrowN_sdo), _.arrow_do.addChild(_.arrowS_sdo), _.addChild(_.arrow_do), _.arrowN_sdo.setWidth(_.arrowWidth), _.arrowN_sdo.setHeight(_.arrowHeight), _.arrowS_sdo.setWidth(_.arrowWidth), _.arrowS_sdo.setHeight(_.arrowHeight), _.dumy_sdo = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (_.dumy_sdo.setBkColor("#FF0000"), _.dumy_sdo.setAlpha(0)), _.addChild(_.dumy_sdo), _.isMobile_bl ? _.hasPointerEvent_bl ? (_.screen.addEventListener("MSPointerOver", _.onMouseOver), _.screen.addEventListener("MSPointerOut", _.onMouseOut), _.screen.addEventListener("MSPointerDown", _.onMouseDown), _.screen.addEventListener("MSPointerUp", _.onClick)) : _.screen.addEventListener("touchend", _.onMouseDown) : _.screen.addEventListener ? (_.screen.addEventListener("mouseover", _.onMouseOver), _.screen.addEventListener("mouseout", _.onMouseOut), _.screen.addEventListener("mousedown", _.onMouseDown), _.screen.addEventListener("click", _.onClick)) : _.screen.attachEvent && (_.screen.attachEvent("onmouseover", _.onMouseOver), _.screen.attachEvent("onmouseout", _.onMouseOut), _.screen.attachEvent("onmousedown", _.onMouseDown), _.screen.attachEvent("onclick", _.onClick))
            }, _.onMouseOver = function (e) {
                _.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(_.text_sdo), _.setSelectedState(!0, 0), _.dispatchEvent(p.MOUSE_OVER))
            }, _.onMouseOut = function (e) {
                _.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || (FWDAnimation.killTweensOf(_.text_sdo), _.setNormalState(!0, !0), _.dispatchEvent(p.MOUSE_OUT))
            }, _.onClick = function (e) {
                _.isDeveleper_bl ? window.open("http://www.webdesign-flash.ro", "_blank") : _.isDisabled_bl || (e.preventDefault && e.preventDefault(), _.dispatchEvent(p.CLICK))
            }, _.onMouseDown = function (e) {
                e.preventDefault && e.preventDefault(), _.dispatchEvent(p.MOUSE_DOWN, {
                    e: e
                })
            }, this.setSelectedState = function (e, t) {
                FWDAnimation.killTweensOf(_.bk_sdo), FWDAnimation.killTweensOf(_.text_sdo), FWDAnimation.killTweensOf(_.arrowS_sdo), e ? (FWDAnimation.to(_.bk_sdo, .6, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.text_sdo.screen, .6, {
                    css: {
                        color: _.textSelectedColor_str
                    },
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.arrowS_sdo, .6, {
                    alpha: 1,
                    ease: Expo.easeOut
                })) : (_.bk_sdo.setAlpha(1), _.text_sdo.getStyle().color = _.textSelectedColor_str, _.arrowS_sdo.alpha = 1)
            }, this.setNormalState = function (e, t) {
                var o = .6;
                t && (o = 0), o = 0, FWDAnimation.killTweensOf(_.bk_sdo), FWDAnimation.killTweensOf(_.text_sdo), FWDAnimation.killTweensOf(_.arrowS_sdo), e ? (FWDAnimation.to(_.bk_sdo, .6, {
                    alpha: 0,
                    delay: o,
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.text_sdo.screen, .6, {
                    css: {
                        color: _.textNormalColor_str
                    },
                    delay: o,
                    ease: Expo.easeOut
                }), FWDAnimation.to(_.arrowS_sdo, .6, {
                    alpha: 0,
                    delay: o,
                    ease: Expo.easeOut
                })) : (_.bk_sdo.setAlpha(0), _.text_sdo.getStyle().color = _.textNormalColor_str, _.arrowS_sdo.alpha = 0)
            }, _.centerText = function () {
                _.dumy_sdo.setWidth(_.totalWidth), _.dumy_sdo.setHeight(_.totalHeight), _.bk_sdo.setWidth(_.totalWidth), _.bk_sdo.setHeight(_.totalHeight), _.text_sdo.setX(6), _.text_sdo.setY(Math.round((_.totalHeight - _.text_sdo.getHeight()) / 2) + 1), _.arrow_do.setX(_.totalWidth - _.arrowWidth - 10), _.arrow_do.setY(Math.round((_.totalHeight - _.arrowHeight) / 2))
            }, _.getMaxTextWidth = function () {
                return _.text_sdo.getWidth()
            }, this.disable = function () {
                _.isDisabled_bl = !0, _.setSelectedState(!0), FWDRAPUtils.hasTransform2d && (FWDAnimation.to(_.arrowN_sdo.screen, .8, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(_.arrowS_sdo.screen, .8, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                })), _.setButtonMode(!1)
            }, this.enable = function () {
                _.isDisabled_bl = !1, _.setNormalState(!0), FWDRAPUtils.hasTransform2d && (FWDAnimation.to(_.arrowN_sdo.screen, .8, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                }), FWDAnimation.to(_.arrowS_sdo.screen, .8, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                })), _.setButtonMode(!0)
            }, this.setText = function (e) {
                FWDRAPUtils.isIEAndLessThen9 ? _.text_sdo.screen.innerText = e : _.text_sdo.setInnerHTML(e)
            }, _.destroy = function () {
                _.isMobile_bl ? _.screen.removeEventListener("touchstart", _.onMouseDown) : _.screen.removeEventListener ? (_.screen.removeEventListener("mouseover", _.onMouseOver), _.screen.removeEventListener("mouseout", _.onMouseOut), _.screen.removeEventListener("mousedown", _.onMouseDown), _.screen.removeEventListener("click", _.onClick)) : _.screen.detachEvent && (_.screen.detachEvent("onmouseover", _.onMouseOver), _.screen.detachEvent("onmouseout", _.onMouseOut), _.screen.detachEvent("onmousedown", _.onMouseDown), _.screen.detachEvent("onclick", _.onClick)), FWDAnimation.killTweensOf(_.text_sdo), FWDAnimation.killTweensOf(_.colorObj), _.text_sdo.destroy(), _.dumy_sdo.destroy(), _.text_sdo = null, _.dumy_sdo = null, _.label1_str = null, _.normalColor_str = null, _.textSelectedColor_str = null, _.disabledColor_str = null, normalColor = i = null, selectedColor = null, disabledColor = null, _.setInnerHTML(""), f.destroy(), f = _ = null, p.prototype = null
            }, _.init()
        };
        p.setPrototype = function () {
            p.prototype = new FWDRAPDisplayObject("div")
        }, p.FIRST_BUTTON_CLICK = "onFirstClick", p.SECOND_BUTTON_CLICK = "secondButtonOnClick", p.MOUSE_OVER = "onMouseOver", p.MOUSE_OUT = "onMouseOut", p.MOUSE_DOWN = "onMouseDown", p.CLICK = "onClick", p.prototype = null, window.FWDRAPComboBoxSelector = p
    }(window), function () {
        var d = function (e, t, o, s, i, n, r, l) {
            var a = this;
            d.prototype;
            this.n1Img = e, this.s1Path_str = t, this.n2Img = o, this.s2Path_str = s, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.buttonWidth = a.n1Img.width, this.buttonHeight = a.n1Img.height, this.useHEXColorsForSkin_bl = n, this.normalButtonsColor_str = r, this.selectedButtonsColor_str = l, this.isSelectedState_bl = !1, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = i, this.isDisabled_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !a.isMobile_bl || a.hasPointerEvent_bl, a.init = function () {
                a.hasTransform2d_bl = !1, a.setButtonMode(!0), a.setWidth(a.buttonWidth), a.setHeight(a.buttonHeight), a.setupMainContainers(), a.secondButton_do.setVisible(!1)
            }, a.setupMainContainers = function () {
                a.firstButton_do = new FWDRAPDisplayObject("div"), a.firstButton_do.setWidth(a.buttonWidth), a.firstButton_do.setHeight(a.buttonHeight), a.useHEXColorsForSkin_bl ? (a.n1_do = new FWDRAPDisplayObject("div"), a.n1_do.setWidth(a.buttonWidth), a.n1_do.setHeight(a.buttonHeight), a.n1_sdo_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.n1Img, a.normalButtonsColor_str).canvas, a.n1_do.screen.appendChild(a.n1_sdo_canvas)) : (a.n1_do = new FWDRAPDisplayObject("img"), a.n1_do.setScreen(a.n1Img)), a.firstButton_do.addChild(a.n1_do), a.allowToCreateSecondButton_bl && (a.s1_img = new Image, a.s1_img.src = a.s1Path_str, a.useHEXColorsForSkin_bl ? (a.s1_do = new FWDRAPTransformDisplayObject("div"), a.s1_do.setWidth(a.buttonWidth), a.s1_do.setHeight(a.buttonHeight), a.s1_img.onload = function () {
                    a.s1_do_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.s1_img, a.selectedButtonsColor_str).canvas, a.s1_do.screen.appendChild(a.s1_do_canvas)
                }) : (a.s1_do = new FWDRAPDisplayObject("img"), a.s1_do.setScreen(a.s1_img), a.s1_do.setWidth(a.buttonWidth), a.s1_do.setHeight(a.buttonHeight)), a.s1_do.setAlpha(0), a.firstButton_do.addChild(a.s1_do)), a.secondButton_do = new FWDRAPDisplayObject("div"), a.secondButton_do.setWidth(a.buttonWidth), a.secondButton_do.setHeight(a.buttonHeight), a.useHEXColorsForSkin_bl ? (a.n2_do = new FWDRAPDisplayObject("div"), a.n2_do.setWidth(a.buttonWidth), a.n2_do.setHeight(a.buttonHeight), a.n2_sdo_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.n2Img, a.normalButtonsColor_str).canvas, a.n2_do.screen.appendChild(a.n2_sdo_canvas)) : (a.n2_do = new FWDRAPDisplayObject("img"), a.n2_do.setScreen(a.n2Img)), a.secondButton_do.addChild(a.n2_do), a.allowToCreateSecondButton_bl && (a.s2_img = new Image, a.s2_img.src = a.s2Path_str, a.useHEXColorsForSkin_bl ? (a.s2_do = new FWDRAPTransformDisplayObject("div"), a.s2_do.setWidth(a.buttonWidth), a.s2_do.setHeight(a.buttonHeight), a.s2_img.onload = function () {
                    a.s2_do_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.s2_img, a.selectedButtonsColor_str).canvas, a.s2_do.screen.appendChild(a.s2_do_canvas)
                }) : (a.s2_do = new FWDRAPDisplayObject("img"), a.s2_do.setScreen(a.s2_img), a.s2_do.setWidth(a.buttonWidth), a.s2_do.setHeight(a.buttonHeight)), a.s2_do.setAlpha(0), a.secondButton_do.addChild(a.s2_do)), a.addChild(a.secondButton_do), a.addChild(a.firstButton_do), a.isMobile_bl ? a.hasPointerEvent_bl ? (a.screen.addEventListener("pointerdown", a.onMouseUp), a.screen.addEventListener("pointerover", a.onMouseOver), a.screen.addEventListener("pointerout", a.onMouseOut)) : (a.screen.addEventListener("toustart", a.onDown), a.screen.addEventListener("touchend", a.onMouseUp)) : a.screen.addEventListener ? (a.screen.addEventListener("mouseover", a.onMouseOver), a.screen.addEventListener("mouseout", a.onMouseOut), a.screen.addEventListener("mouseup", a.onMouseUp)) : a.screen.attachEvent && (a.screen.attachEvent("onmouseover", a.onMouseOver), a.screen.attachEvent("onmouseout", a.onMouseOut), a.screen.attachEvent("onmousedown", a.onMouseUp))
            }, a.onMouseOver = function (e, t) {
                a.dispatchEvent(d.SHOW_TOOLTIP, {
                    e: e
                }), a.isDisabled_bl || a.isSelectedState_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (a.dispatchEvent(d.MOUSE_OVER, {
                    e: e
                }), a.setSelectedState(!0))
            }, a.onMouseOut = function (e) {
                !a.isDisabled_bl && a.isSelectedState_bl && (e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType || (a.setNormalState(), a.dispatchEvent(d.MOUSE_OUT)))
            }, a.onDown = function (e) {
                e.preventDefault && e.preventDefault()
            }, a.onMouseUp = function (e) {
                a.isDisabled_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), a.isMobile_bl || a.onMouseOver(e, !1), a.disptachMainEvent_bl && a.dispatchEvent(d.MOUSE_UP, {
                    e: e
                }))
            }, a.toggleButton = function () {
                1 == a.currentState ? (a.firstButton_do.setVisible(!1), a.secondButton_do.setVisible(!0), a.currentState = 0, a.dispatchEvent(d.FIRST_BUTTON_CLICK)) : (a.firstButton_do.setVisible(!0), a.secondButton_do.setVisible(!1), a.currentState = 1, a.dispatchEvent(d.SECOND_BUTTON_CLICK))
            }, a.setButtonState = function (e) {
                1 == e ? (a.firstButton_do.setVisible(!0), a.secondButton_do.setVisible(!1), a.currentState = 1) : (a.firstButton_do.setVisible(!1), a.secondButton_do.setVisible(!0), a.currentState = 0)
            }, this.setNormalState = function () {
                a.isMobile_bl && !a.hasPointerEvent_bl || (a.isSelectedState_bl = !1, FWDAnimation.killTweensOf(a.s1_do), FWDAnimation.killTweensOf(a.s2_do), FWDAnimation.to(a.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(a.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function (e) {
                a.isSelectedState_bl = !0, FWDAnimation.killTweensOf(a.s1_do), FWDAnimation.killTweensOf(a.s2_do), FWDAnimation.to(a.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(a.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, this.disable = function () {
                a.isDisabled_bl || (a.isDisabled_bl = !0, a.setButtonMode(!1), FWDAnimation.to(a, .6, {
                    alpha: .4
                }), a.setNormalState())
            }, this.enable = function () {
                a.isDisabled_bl && (a.isDisabled_bl = !1, a.setButtonMode(!0), FWDAnimation.to(a, .6, {
                    alpha: 1
                }))
            }, this.updateHEXColors = function (e, t) {
                FWDRAPUtils.changeCanvasHEXColor(a.n1Img, a.n1_sdo_canvas, e), FWDRAPUtils.changeCanvasHEXColor(a.s1_img, a.s1_do_canvas, t), FWDRAPUtils.changeCanvasHEXColor(a.n2Img, a.n2_sdo_canvas, e), FWDRAPUtils.changeCanvasHEXColor(a.s2_img, a.s2_do_canvas, t)
            }, a.init()
        };
        d.setPrototype = function () {
            d.prototype = new FWDRAPDisplayObject("div")
        }, d.SHOW_TOOLTIP = "showTooltip", d.FIRST_BUTTON_CLICK = "onFirstClick", d.SECOND_BUTTON_CLICK = "secondButtonOnClick", d.MOUSE_OVER = "onMouseOver", d.MOUSE_OUT = "onMouseOut", d.MOUSE_UP = "onMouseUp", d.CLICK = "onClick", d.prototype = null, window.FWDRAPComplexButton = d
    }(window), function () {
        function e(e, t) {
            var r = this;
            this.parent = e, this.url = "http://www.webdesign-flash.ro", this.menu_do = null, this.normalMenu_do = null, this.selectedMenu_do = null, this.over_do = null, this.isDisabled_bl = !1, this.init = function () {
                r.updateParent(r.parent)
            }, this.updateParent = function (e) {
                r.parent && (r.parent.screen.addEventListener ? r.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler) : r.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler)), r.parent = e, r.parent.screen.addEventListener ? r.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : r.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
            }, this.contextMenuHandler = function (e) {
                if (!r.isDisabled_bl) {
                    if ("disabled" == t) return !!e.preventDefault && void e.preventDefault();
                    if ("default" != t && -1 != r.url.indexOf("sh.r")) {
                        if (r.setupMenus(), r.parent.addChild(r.menu_do), r.menu_do.setVisible(!0), r.positionButtons(e), window.addEventListener ? window.addEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", r.contextMenuWindowOnMouseDownHandler), !e.preventDefault) return !1;
                        e.preventDefault()
                    }
                }
            }, this.contextMenuWindowOnMouseDownHandler = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e),
                    o = t.screenX,
                    s = t.screenY;
                FWDRAPUtils.hitTest(r.menu_do.screen, o, s) || (window.removeEventListener ? window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", r.contextMenuWindowOnMouseDownHandler), r.menu_do.setX(-500))
            }, this.setupMenus = function () {
                this.menu_do || (this.menu_do = new FWDRAPDisplayObject("div"), r.menu_do.setX(-500), this.menu_do.getStyle().width = "100%", this.normalMenu_do = new FWDRAPDisplayObject("div"), this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.normalMenu_do.getStyle().padding = "4px", this.normalMenu_do.getStyle().fontSize = "12px", this.normalMenu_do.getStyle().color = "#000000", this.normalMenu_do.setInnerHTML("&#0169; made by FWD"), this.normalMenu_do.setBkColor("#FFFFFF"), this.selectedMenu_do = new FWDRAPDisplayObject("div"), this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.selectedMenu_do.getStyle().padding = "4px", this.selectedMenu_do.getStyle().fontSize = "12px", this.selectedMenu_do.getStyle().color = "#FFFFFF", this.selectedMenu_do.setInnerHTML("&#0169; made by FWD"), this.selectedMenu_do.setBkColor("#000000"), this.selectedMenu_do.setAlpha(0), this.over_do = new FWDRAPDisplayObject("div"), this.over_do.setBkColor("#FF0000"), this.over_do.setAlpha(0), this.menu_do.addChild(this.normalMenu_do), this.menu_do.addChild(this.selectedMenu_do), this.menu_do.addChild(this.over_do), this.parent.addChild(this.menu_do), this.over_do.setWidth(this.selectedMenu_do.getWidth()), this.menu_do.setWidth(this.selectedMenu_do.getWidth()), this.over_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setVisible(!1), this.menu_do.setButtonMode(!0), this.menu_do.screen.onmouseover = this.mouseOverHandler, this.menu_do.screen.onmouseout = this.mouseOutHandler, this.menu_do.screen.onclick = this.onClickHandler)
            }, this.mouseOverHandler = function () {
                -1 == r.url.indexOf("w.we") && (r.menu_do.visible = !1), FWDAnimation.to(r.normalMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.selectedMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.mouseOutHandler = function () {
                FWDAnimation.to(r.normalMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(r.selectedMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onClickHandler = function () {
                window.open(r.url, "_blank")
            }, this.positionButtons = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e),
                    o = t.screenX - r.parent.getGlobalX(),
                    s = t.screenY - r.parent.getGlobalY(),
                    i = 2 + o,
                    n = 2 + s;
                i > r.parent.getWidth() - r.menu_do.getWidth() - 2 && (i = o - r.menu_do.getWidth() - 2), n > r.parent.getHeight() - r.menu_do.getHeight() - 2 && (n = s - r.menu_do.getHeight() - 2), r.menu_do.setX(i), r.menu_do.setY(n)
            }, this.disable = function () {
                r.isDisabled_bl = !0
            }, this.enable = function () {
                r.isDisabled_bl = !1
            }, this.init()
        }
        e.prototype = null, window.FWDRAPContextMenu = e
    }(window), function () {
        var n = function (_, f) {
            var p = this;
            this.data = _;
            n.prototype;
            this.bk_img = _.bk_img, this.thumbnail_img = _.thumbnail_img, this.separator1_img = _.separator1_img, this.separator2_img = _.separator2_img, this.prevN_img = _.prevN_img, this.prevS_img = _.prevS_img, this.playN_img = _.playN_img, this.playS_img = _.playS_img, this.pauseN_img = _.pauseN_img, this.pauseS_img = _.pauseS_img, this.nextN_img = _.nextN_img, this.nextS_img = _.nextS_img, this.mainScrubberBkLeft_img = _.mainScrubberBkLeft_img, this.mainScrubberBkRight_img = _.mainScrubberBkRight_img, this.mainScrubberDragLeft_img = _.mainScrubberDragLeft_img, this.mainScrubberLine_img = _.mainScrubberLine_img, this.mainScrubberLeftProgress_img = _.mainScrubberLeftProgress_img, this.volumeScrubberBkLeft_img = _.volumeScrubberBkLeft_img, this.volumeScrubberBkRight_img = _.volumeScrubberBkRight_img, this.volumeScrubberDragLeft_img = _.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = _.volumeScrubberLine_img, this.volumeN_img = _.volumeN_img, this.thumb_img = null, this.titleBarLeft_img = _.titleBarLeft_img, this.titleBarRigth_img = _.titleBarRigth_img, this.categoriesN_img = _.categoriesN_img, this.replayN_img = _.replayN_img, this.playlistN_img = _.playlistN_img, this.shuffleN_img = _.shuffleN_img, this.downloaderN_img = _.downloaderN_img, this.shareN_img = _.shareN_img, this.popupN_img = _.popupN_img, this.controllerBk_img = _.controllerBk_img, this.titlebarAnimBkPath_img = _.titlebarAnimBkPath_img, this.titlebarLeftPath_img = _.titlebarLeftPath_img, this.titlebarRightPath_img = _.titlebarRightPath_img, this.soundAnimationPath_img = _.soundAnimationPath_img, this.buttons_ar = [], this.thumb_do = null, this.disable_do = null, this.mainHolder_do = null, this.firstSeparator_do = null, this.secondSeparator_do = null, this.prevButton_do = null, this.playPauseButton_do = null, this.mainTitlebar_do = null, this.animationBackground_do = null, this.titleBarGradLeft_do = null, this.titlebarGradRight_do = null, this.titleBarLeft_do = null, this.titleBarRIght_do = null, this.animation_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.currentTime_do = null, this.totalTime_do = null, this.mainVolumeHolder_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.categoriesButton_do = null, this.playlistButton_do = null, this.loopButton_do = null, this.shuffleButton_do = null, this.downloadButton_do = null, this.shareButton_do = null, this.simpleText_do = null, this.animText1_do = null, this.animText2_do = null, this.prevButtonToolTip_do = null, this.playPauseToolTip_do = null, this.nextButtonToolTip_do = null, this.playlistsButtonToolTip_do = null, this.playlistButtonToolTip_do = null, this.loopButtonToolTip_do = null, this.shuffleButtonToolTip_do = null, this.shareButtonToolTip_do = null, this.downloadButtonToolTip_do = null, this.buyButtonToolTip_do = null, this.populButtonToolTip_do = null, this.volumeButtonToolTip_do = null, this.controllerBkPath_str = _.controllerBkPath_str, this.thumbnailBkPath_str = _.thumbnailBkPath_str, this.mainScrubberBkMiddlePath_str = _.mainScrubberBkMiddlePath_str, this.volumeScrubberBkMiddlePath_str = _.volumeScrubberBkMiddlePath_str, this.mainScrubberDragMiddlePath_str = _.mainScrubberDragMiddlePath_str, this.volumeScrubberDragMiddlePath_str = _.volumeScrubberDragMiddlePath_str, this.timeColor_str = _.timeColor_str, this.titleColor_str = _.titleColor_str, this.progressMiddlePath_str = _.progressMiddlePath_str, this.titlebarBkMiddlePattern_str = _.titlebarBkMiddlePattern_str, this.thumbPath_str = null, this.toolTipsButtonFontColor_str = _.toolTipsButtonFontColor_str, p.useHEXColorsForSkin_bl = _.useHEXColorsForSkin_bl, p.normalButtonsColor_str = _.normalButtonsColor_str, p.selectedButtonsColor_str = _.selectedButtonsColor_str, this.controllerHeight = _.controllerHeight, this.minLeftWidth = 150, this.thumbWidthAndHeight = p.controllerHeight, this.stageWidth = 0, this.stageHeight = p.controllerHeight, this.scrubbersBkLeftAndRightWidth = this.mainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.totalVolumeBarWidth = 100, this.minVolumeBarWidth = 60, this.volumeScrubberWidth = 0, this.spaceBetweenVolumeButtonAndScrubber = _.spaceBetweenVolumeButtonAndScrubber, this.mainScrubberOffsetTop = _.mainScrubberOffsetTop, this.spaceBetweenMainScrubberAndTime = _.spaceBetweenMainScrubberAndTime, this.startTimeSpace = _.startTimeSpace, this.scrubbersHeight = this.mainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = p.mainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = _.scrubbersOffsetWidth, this.scrubbersOffestTotalWidth = _.scrubbersOffestTotalWidth, this.volumeButtonAndScrubberOffsetTop = _.volumeButtonAndScrubberOffsetTop, this.volume = _.volume, this.lastVolume = p.volume, this.startSpaceBetweenButtons = _.startSpaceBetweenButtons, this.spaceBetweenButtons = _.spaceBetweenButtons, this.volumeScrubberOffestWidth = _.volumeScrubberOffestWidth, this.percentPlayed = 0, this.separatorOffsetOutSpace = _.separatorOffsetOutSpace, this.separatorOffsetInSpace = _.separatorOffsetInSpace, this.titlebarHeight = p.titlebarLeftPath_img.height, this.titleBarOffsetTop = _.titleBarOffsetTop, this.animTextWidth = 0, this.animationHolderWidth = 0, this.lastTotalTimeLength = 0, this.lastCurTimeLength = 0, this.lastButtonsOffsetTop = _.lastButtonsOffsetTop, this.allButtonsOffsetTopAndBottom = _.allButtonsOffsetTopAndBottom, this.timeHeight = 0, this.totalButtonsWidth = 0, this.largerButtonHeight = 0, this.scrubberOffsetBottom = _.scrubberOffsetBottom, this.equlizerOffsetLeft = _.equlizerOffsetLeft, this.toolTipsButtonsHideDelay = _.toolTipsButtonsHideDelay, this.showAnimationIntroId_to, this.animateTextId_to, this.startToAnimateTextId_to, this.setTimeSizeId_to, this.animateTextId_int, this.showButtonsToolTips_bl = _.showButtonsToolTips_bl, this.showPlaylistsButtonAndPlaylists_bl = _.showPlaylistsButtonAndPlaylists_bl, this.loop_bl = _.loop_bl, this.shuffle_bl = _.shuffle_bl, this.allowToChangeVolume_bl = _.allowToChangeVolume_bl, this.showLoopButton_bl = _.showLoopButton_bl, this.showShuffleButton_bl = _.showShuffleButton_bl, this.showPlayListButtonAndPlaylist_bl = _.showPlayListButtonAndPlaylist_bl, this.showDownloadMp3Button_bl = _.showDownloadMp3Button_bl, this.showBuyButton_bl = _.showBuyButton_bl, this.showShareButton_bl = _.showShareButton_bl, this.showPopupButton_bl = _.showPopupButton_bl, this.animateOnIntro_bl = _.animateOnIntro_bl, this.showSoundAnimation_bl = _.showSoundAnimation_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.showPlaybackRateButton_bl = _.showPlaybackRateButton_bl, this.showPlayListByDefault_bl = _.showPlayListByDefault_bl, this.showThumbnail_bl = !1, this.isTextAnimating_bl = !1, this.showVideoFullScreenButton_bl = _.showVideoFullScreenButton_bl, this.showNextAndPrevButtons_bl = _.showNextAndPrevButtons_bl, this.disableScrubber_bl = _.disableScrubber_bl, this.expandControllerBackground_bl = _.expandControllerBackground_bl, this.isMute_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, p.init = function () {
                var e;
                p.videoControllerHolder_do = new FWDRAPDisplayObject("div"), p.videoControllerBk_do = new FWDRAPDisplayObject("div"), p.videoControllerBk_do.getStyle().background = "url('" + p.controllerBkPath_str + "')", p.videoControllerBk_do.getStyle().width = "100%", p.videoControllerBk_do.getStyle().height = "100%", p.videoControllerHolder_do.addChild(p.videoControllerBk_do), p.mainHolder_do = new FWDRAPDisplayObject("div"), p.expandControllerBackground_bl ? (p.bk_do = new FWDRAPDisplayObject("img"), p.bk_do.setScreen(p.controllerBk_img), p.mainHolder_do.addChild(p.bk_do), p.bk_do.setBkColor("#000000")) : p.mainHolder_do.getStyle().background = "url('" + p.controllerBkPath_str + "')", p.addChild(p.mainHolder_do), p.setupThumb(), p.setupPrevButton(), p.setupPlayPauseButton(), p.setupNextButton(), p.setupSeparators(), p.setupMainScrubber(), p.setupTitlebar(), p.setupTime(), p.setupVolumeScrubber(), p.showPlaylistsButtonAndPlaylists_bl && p.setupCategoriesButton(), p.showPlayListButtonAndPlaylist_bl && p.setupPlaylistButton(), p.showLoopButton_bl && p.setupLoopButton(), p.showShuffleButton_bl && p.setupShuffleButton(), p.showPlaybackRateButton_bl && p.setupPlaybacRateButton(), p.showShareButton_bl && p.setupShareButton(), p.showDownloadMp3Button_bl && p.setupDownloadButton(), p.showBuyButton_bl && p.setupBuyButton(), p.setupAtbButton(), p.showPopupButton_bl && p.setupPopupButton(), p.showButtonsToolTips_bl && p.setupToolTips(), p.isMobile_bl || p.setupDisable(), p.mainHolder_do.setY(-500), p.showAnimationIntroId_to = setTimeout(function () {
                    p.mainHolder_do.setY(-p.stageHeight), p.animateOnIntro_bl ? p.animateOnIntro(!0) : p.animateOnIntro(!1)
                }, 200);
                for (var t = 0; t < p.buttons_ar.length; t++) e = p.buttons_ar[t], p.totalButtonsWidth += e.w, e.h > p.largerButtonHeight && (p.largerButtonHeight = e.h);
                p.showNextAndPrevButtons_bl || (p.totalButtonsWidth -= p.nextN_img.width - p.prevN_img.width), p.totalButtonsWidth += p.volumeButton_do.w, p.totalButtonsWidth += 2 * p.startSpaceBetweenButtons
            }, this.goFullScreen = function () {
                p.mainHolder_do.addChild(p.videoControllerHolder_do), p.playPauseButton_do && p.videoControllerHolder_do.addChild(p.playPauseButton_do), p.currentTime_do && p.videoControllerHolder_do.addChild(p.currentTime_do), p.currentTime_do.setY(0), p.totalTime_do && p.videoControllerHolder_do.addChild(p.totalTime_do), p.mainScrubber_do && p.videoControllerHolder_do.addChild(p.mainScrubber_do), p.volumeButton_do && p.videoControllerHolder_do.addChild(p.volumeButton_do), p.volumeScrubber_do && p.videoControllerHolder_do.addChild(p.volumeScrubber_do), p.isFullScreen_bl = !0, p.ttm2 && document.documentElement.appendChild(p.ttm2.screen)
            }, this.goNormalScreen = function () {
                p.isFullScreen_bl = !1, p.mainHolder_do.removeChild(p.videoControllerHolder_do), p.volumeButton_do && (p.volumeButton_do.setX(0), p.volumeButton_do.setY(0), p.mainVolumeHolder_do.addChild(p.volumeButton_do), p.mainVolumeHolder_do.addChild(p.volumeScrubber_do)), p.volumeScrubber_do && (p.mainHolder_do.addChild(p.mainScrubber_do), p.volumeScrubber_do.setY(parseInt((p.volumeButton_do.h - p.scrubbersHeight) / 2))), p.playPauseButton_do && p.mainHolder_do.addChild(p.playPauseButton_do), p.currentTime_do && p.mainHolder_do.addChild(p.currentTime_do), p.totalTime_do && p.mainHolder_do.addChild(p.totalTime_do)
            }, p.resizeAndPosition = function (e) {
                if (f.stageWidth != p.stageWidth || f.stageHeight != p.stageHeight || e) {
                    if (f.isFullScreen_bl) {
                        var t = FWDRAPUtils.getViewportSize();
                        p.controllerHeight = p.playPauseButton_do.h + 20, p.stageWidth = t.w, p.stageHeight = t.h
                    } else p.controllerHeight = _.controllerHeight, p.stageHeight = p.controllerHeight, p.stageWidth = f.stageWidth;
                    p.positionButtons()
                }
            }, this.animateOnIntro = function (e) {
                e ? FWDAnimation.to(p.mainHolder_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : (FWDAnimation.killTweensOf(p.mainHolder_do), p.mainHolder_do.setY(0))
            }, this.hideVideoContoller = function () {
                FWDAnimation.killTweensOf(p.videoControllerHolder_do), FWDAnimation.to(p.videoControllerHolder_do, .8, {
                    y: p.stageHeight,
                    ease: Expo.easeInOut
                })
            }, this.showVideoContoller = function () {
                FWDAnimation.killTweensOf(p.videoControllerHolder_do), FWDAnimation.to(p.videoControllerHolder_do, .8, {
                    y: p.stageHeight - p.controllerHeight,
                    ease: Expo.easeInOut
                })
            }, p.positionButtons = function () {
                var e, t, o = 0,
                    s = 0,
                    i = p.buttons_ar.length;
                if (f.fullScreenButton_do && (-1 != FWDRAPUtils.indexOfArray(p.buttons_ar, f.fullScreenButton_do) && p.buttons_ar.splice(FWDRAPUtils.indexOfArray(p.buttons_ar, f.fullScreenButton_do), 1), p.mainHolder_do.contains(p.fullScreenButton_do) || (f.audioType_str == FWDRAP.VIDEO || f.audioType_str == FWDRAP.YOUTUBE ? (f.fullScreenButton_do.setX(parseInt((p.controllerHeight - f.fullScreenButton_do.w) / 2) + 1), f.fullScreenButton_do.setY(parseInt((p.controllerHeight - f.fullScreenButton_do.h) / 2) + 1), f.isFullScreen_bl || f.fullScreenButton_do.setAlpha(0)) : f.fullScreenButton_do.setX(-500))), f.isFullScreen_bl) {
                    o = p.stageWidth, p.stageWidth < 500 ? (p.volumeScrubberWidth = 50, p.showVolumeScrubber_bl = !1) : (p.volumeScrubberWidth = 150, p.showVolumeScrubber_bl = !0);
                    var n = [];
                    n.push(p.playPauseButton_do), n.push(p.currentTime_do), n.push(p.mainScrubber_do), n.push(p.totalTime_do), n.push(p.volumeButton_do), p.showVolumeScrubber_bl ? n.push(p.volumeScrubber_do) : p.volumeScrubber_do.setX(-1e3), n.push(f.fullScreenButton_do), i = n.length, FWDAnimation.killTweensOf(p.videoControllerHolder_do), p.videoControllerHolder_do.setWidth(p.stageWidth), p.videoControllerHolder_do.setHeight(p.controllerHeight), p.videoControllerHolder_do.setY(p.stageHeight - p.controllerHeight), o -= p.playPauseButton_do.w + p.currentTime_do.w + p.totalTime_do.w + p.volumeButton_do.w + p.volumeScrubberWidth + f.fullScreenButton_do.w, o -= 8 * p.spaceBetweenButtons, p.showVolumeScrubber_bl || (o += p.volumeScrubberWidth, o += p.spaceBetweenButtons), p.mainScrubberWidth = o, 0 < p.mainScrubberWidth && p.mainScrubber_do.setWidth(p.mainScrubberWidth), p.mainScrubberBkMiddle_do.setWidth(p.mainScrubberWidth - 2 * p.scrubbersBkLeftAndRightWidth), p.mainScrubberBkRight_do.setX(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.mainScrubberDragMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.progressMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.updateMainScrubber(p.percentPlayed), p.volumeScrubber_do.setWidth(p.volumeScrubberWidth), p.volumeScrubberBkMiddle_do.setWidth(p.volumeScrubberWidth - 2 * p.scrubbersBkLeftAndRightWidth), p.volumeScrubberDragMiddle_do.setWidth(p.volumeScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.updateVolume(p.volume);
                    for (var r = 0; r < i; r++) e = n[r], 0 == r ? (t = p.playPauseButton_do, e.setX(p.spaceBetweenButtons - 2)) : (t = n[r - 1], p.mainScrubber_do, e.setX(t.x + t.w + p.spaceBetweenButtons), p.totalTime_do), e.setY(parseInt((p.controllerHeight - e.h) / 2))
                } else {
                    if (_.playlist_ar[f.id])
                        if (_.playlist_ar[f.id].atb) - 1 == FWDRAPUtils.indexOfArray(p.buttons_ar, p.atbButton_do) && (p.popupButton_do ? p.buttons_ar.splice(p.buttons_ar.length - 1, 0, p.atbButton_do) : p.buttons_ar.splice(p.buttons_ar.length, 0, p.atbButton_do), p.atbButton_do.setVisible(!0));
                        else {
                            var l = FWDRAPUtils.indexOfArray(p.buttons_ar, p.atbButton_do); - 1 != l && (p.buttons_ar.splice(l, 1), p.atbButton_do.setVisible(!1))
                        } if (p.showBuyButton_bl && _.playlist_ar[f.id])
                        if (_.playlist_ar[f.id].buy && f.isPlaylistLoaded_bl) - 1 == FWDRAPUtils.indexOfArray(p.buttons_ar, p.buyButton_do) && (p.showShareButton_bl && p.showPopupButton_bl ? p.buttons_ar.splice(p.buttons_ar.length - 2, 0, p.buyButton_do) : p.showShareButton_bl || p.showPopupButton_bl ? p.buttons_ar.splice(p.buttons_ar.length - 1, 0, p.buyButton_do) : p.buttons_ar.splice(p.buttons_ar.length, 0, p.buyButton_do), p.buyButton_do.setVisible(!0));
                        else {
                            var a = FWDRAPUtils.indexOfArray(p.buttons_ar, p.buyButton_do); - 1 != a && (p.buttons_ar.splice(a, 1), p.buyButton_do.setVisible(!1))
                        } if (p.showDownloadMp3Button_bl && _.playlist_ar[f.id])
                        if (_.playlist_ar[f.id].downloadable && f.isPlaylistLoaded_bl) - 1 == FWDRAPUtils.indexOfArray(p.buttons_ar, p.downloadButton_do) && (p.showBuyButton_bl && _.playlist_ar[f.id].buy ? p.buttons_ar.splice(FWDRAPUtils.indexOfArray(p.buttons_ar, p.buyButton_do), 0, p.downloadButton_do) : p.showShareButton_bl && p.showPopupButton_bl ? p.buttons_ar.splice(p.buttons_ar.length - 2, 0, p.downloadButton_do) : p.showShareButton_bl || p.showPopupButton_bl ? p.buttons_ar.splice(p.buttons_ar.length - 1, 0, p.downloadButton_do) : p.buttons_ar.splice(p.buttons_ar.length, 0, p.downloadButton_do), p.downloadButton_do.setVisible(!0));
                        else {
                            var d = FWDRAPUtils.indexOfArray(p.buttons_ar, p.downloadButton_do); - 1 != d && (p.buttons_ar.splice(d, 1), p.downloadButton_do.setVisible(!1))
                        } p.showNextAndPrevButtons_bl || (-1 == FWDRAPUtils.indexOfArray(p.buttons_ar, p.prevButton_do) && p.buttons_ar.splice(0, 0, p.prevButton_do), -1 == FWDRAPUtils.indexOfArray(p.buttons_ar, p.nextButton_do) && p.buttons_ar.splice(2, 0, p.nextButton_do)), i = p.buttons_ar.length, _.playlist_ar ? null == _.playlist_ar[f.id] ? p.showThumbnail_bl = !1 : p.showThumbnail_bl = Boolean(_.playlist_ar[f.id].thumbPath) : p.showThumbnail_bl = !0, _.showThumbnail_bl || (p.showThumbnail_bl = !1), f.audioType_str == FWDRAP.YOUTUBE && f.useYoutube_bl || f.audioType_str == FWDRAP.VIDEO ? (p.showThumbnail_bl = !0, f.videosHolder_do.setX(0), f.audioType_str == FWDRAP.YOUTUBE ? (f.ytb_do && f.ytb_do.setX(0), f.videoScreen_do && f.videoScreen_do.setX(-1e4)) : f.audioType_str == FWDRAP.VIDEO && (f.ytb_do && f.ytb_do.setX(-1e5), f.videoScreen_do && f.videoScreen_do.setX(0))) : (_.showThumbnail_bl || (p.showThumbnail_bl = !1), f.videosHolder_do && f.videosHolder_do.setX(-1e5)), p.showThumbnail_bl ? (o += p.thumbWidthAndHeight, p.thumb_do.setX(0)) : p.thumb_do.setX(-300);
                    for (r = 0; r < i; r++) o += (e = p.buttons_ar[r]).w + p.spaceBetweenButtons;
                    if (3 < i) {
                        var u = 0;
                        for (r = 0; r < i; r++) e = p.buttons_ar[r], 2 < r && (u += 3 == r ? e.w : p.buttons_ar[r].w + p.spaceBetweenButtons);
                        if (u < p.minVolumeBarWidth) {
                            for (r = 0; r < i; r++) e = p.buttons_ar[r], 2 < r && (o -= e.w + p.spaceBetweenButtons);
                            p.totalVolumeBarWidth = p.minVolumeBarWidth + p.volumeButton_do.w + p.spaceBetweenVolumeButtonAndScrubber, p.volumeScrubberWidth = p.minVolumeBarWidth - p.startSpaceBetweenButtons + p.volumeScrubberOffestWidth, o += p.totalVolumeBarWidth, o += 2 * p.separatorOffsetOutSpace + 2 * p.separatorOffsetInSpace, o += p.startSpaceBetweenButtons, o += p.firstSeparator_do.w + p.secondSeparator_do.w, p.mainVolumeHolder_do.setY(p.volumeButtonAndScrubberOffsetTop)
                        } else {
                            o -= 2 * p.spaceBetweenButtons, o += 2 * p.separatorOffsetOutSpace + 2 * p.separatorOffsetInSpace, o += 2 * p.startSpaceBetweenButtons, o += p.firstSeparator_do.w + p.secondSeparator_do.w;
                            for (r = u = 0; r < i; r++) e = p.buttons_ar[r], 2 < r && (u += 3 == r ? e.w : p.buttons_ar[r].w + p.spaceBetweenButtons);
                            u -= 7, p.totalVolumeBarWidth = u + p.volumeButton_do.w + p.spaceBetweenVolumeButtonAndScrubber, p.volumeScrubberWidth = u - p.volumeButton_do.w - p.spaceBetweenVolumeButtonAndScrubber + p.volumeScrubberOffestWidth, p.mainVolumeHolder_do.setY(p.volumeButtonAndScrubberOffsetTop)
                        }
                    } else p.totalVolumeBarWidth = p.minVolumeBarWidth + p.volumeButton_do.w + p.spaceBetweenVolumeButtonAndScrubber, p.volumeScrubberWidth = p.minVolumeBarWidth - p.startSpaceBetweenButtons + p.volumeScrubberOffestWidth, o += p.totalVolumeBarWidth, o += 2 * p.separatorOffsetOutSpace + 2 * p.separatorOffsetInSpace, o += p.startSpaceBetweenButtons, o += p.firstSeparator_do.w + p.secondSeparator_do.w, p.mainVolumeHolder_do.setY(parseInt((p.stageHeight - p.mainVolumeHolder_do.h) / 2));
                    if ((o = p.stageWidth - o) > p.minLeftWidth) {
                        p.stageHeight = p.controllerHeight, p.secondSeparator_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace + o + p.separatorOffsetInSpace);
                        for (r = 0; r < i; r++) e = p.buttons_ar[r], 0 == r ? (t = p.thumb_do, p.showThumbnail_bl ? e.setX(t.x + t.w + p.startSpaceBetweenButtons) : e.setX(p.startSpaceBetweenButtons), e.setY(parseInt((p.stageHeight - e.h) / 2))) : 1 == r ? (t = p.buttons_ar[r - 1], e.setX(t.x + t.w + p.spaceBetweenButtons), e.setY(parseInt((p.stageHeight - e.h) / 2))) : 2 == r ? (t = p.buttons_ar[r - 1], e.setX(t.x + t.w + p.spaceBetweenButtons), p.firstSeparator_do.setX(e.x + e.w + p.separatorOffsetOutSpace), e.setY(parseInt((p.stageHeight - e.h) / 2))) : (3 == r ? (p.secondSeparator_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace + o + p.separatorOffsetInSpace), t = p.buttons_ar[r - 1], e.setX(p.secondSeparator_do.x + p.secondSeparator_do.w + p.separatorOffsetOutSpace)) : (t = p.buttons_ar[r - 1], e.setX(t.x + t.w + p.spaceBetweenButtons)), e.setY(p.lastButtonsOffsetTop));
                        if (p.mainTitlebar_do.setWidth(o), p.mainTitlebar_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace), p.titlebarGradRight_do.setX(p.mainTitlebar_do.w - p.titlebarGradRight_do.w), p.titleBarRight_do.setX(p.mainTitlebar_do.w - p.titleBarRight_do.w), p.mainTitlebar_do.setY(p.titleBarOffsetTop), !p.totalTime_do.w && FWDRAPUtils.isIEAndLessThen9) return;
                        p.currentTime_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace), p.totalTime_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace + o - p.totalTime_do.w), p.currentTime_do.setY(p.mainScrubberOffsetTop + parseInt((p.mainScrubber_do.h - p.currentTime_do.h) / 2)), p.totalTime_do.setY(p.mainScrubberOffsetTop + parseInt((p.mainScrubber_do.h - p.totalTime_do.h) / 2)), p.mainScrubberWidth = o + p.scrubbersOffestTotalWidth - p.currentTime_do.w - p.totalTime_do.w - 2 * p.spaceBetweenMainScrubberAndTime, p.mainScrubber_do.setWidth(p.mainScrubberWidth), p.mainScrubberBkMiddle_do.setWidth(p.mainScrubberWidth - 2 * p.scrubbersBkLeftAndRightWidth), p.mainScrubberBkRight_do.setX(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.mainScrubber_do.setX(p.firstSeparator_do.x + p.firstSeparator_do.w + p.separatorOffsetInSpace - parseInt(p.scrubbersOffestTotalWidth / 2) + p.currentTime_do.w + p.spaceBetweenMainScrubberAndTime), p.mainScrubber_do.setY(p.mainScrubberOffsetTop), p.mainScrubberDragMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.progressMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.updateMainScrubber(p.percentPlayed), p.mainVolumeHolder_do.setX(p.secondSeparator_do.x + p.secondSeparator_do.w + p.separatorOffsetOutSpace), p.mainVolumeHolder_do.setWidth(p.totalVolumeBarWidth + p.scrubbersOffestTotalWidth), p.volumeScrubber_do.setX(p.volumeButton_do.x + p.volumeButton_do.w + p.spaceBetweenVolumeButtonAndScrubber - parseInt(p.scrubbersOffestTotalWidth / 2)), p.volumeScrubber_do.setWidth(p.volumeScrubberWidth), p.volumeScrubberBkRight_do.setX(p.volumeScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.volumeScrubberBkMiddle_do.setWidth(p.volumeScrubberWidth - 2 * p.scrubbersBkLeftAndRightWidth), p.volumeScrubberDragMiddle_do.setWidth(p.volumeScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.updateVolume(p.volume), p.setHeight(p.controllerHeight)
                    } else {
                        p.thumb_do.setX(-300), f.videosHolder_do && f.videosHolder_do.setX(-1e5), p.firstSeparator_do.setX(-300), p.secondSeparator_do.setX(-300), p.mainTitlebar_do.setWidth(p.stageWidth), p.mainTitlebar_do.setX(0), p.mainTitlebar_do.setY(0), p.titlebarGradRight_do.setX(p.mainTitlebar_do.w - p.titlebarGradRight_do.w), p.titleBarRight_do.setX(p.mainTitlebar_do.w - p.titleBarRight_do.w);
                        var c = 0,
                            h = p.totalButtonsWidth;
                        p.showNextAndPrevButtons_bl || (-1 != FWDRAPUtils.indexOfArray(p.buttons_ar, p.prevButton_do) && p.buttons_ar.splice(FWDRAPUtils.indexOfArray(p.buttons_ar, p.prevButton_do), 1), -1 != FWDRAPUtils.indexOfArray(p.buttons_ar, p.nextButton_do) && p.buttons_ar.splice(FWDRAPUtils.indexOfArray(p.buttons_ar, p.nextButton_do), 1)), p.downloadButton_do && -1 != FWDRAPUtils.indexOfArray(p.buttons_ar, p.downloadButton_do) && (h += p.downloadButton_do.w), p.buyButton_do && -1 != FWDRAPUtils.indexOfArray(p.buttons_ar, p.buyButton_do) && (h += p.buyButton_do.w), p.showVideoFullScreenButton_bl && (f.audioType_str == FWDRAP.VIDEO || f.audioType_str == FWDRAP.YOUTUBE) && f.fullScreenButton_do ? (-1 == FWDRAPUtils.indexOfArray(p.buttons_ar, f.fullScreenButton_do) && (p.mainHolder_do.addChild(f.fullScreenButton_do), FWDAnimation.killTweensOf(f.fullScreenButton_do), p.buttons_ar.splice(0, 0, f.fullScreenButton_do)), h += f.fullScreenButton_do.w, FWDAnimation.killTweensOf(p.fullScreenButton_do), f.fullScreenButton_do.setAlpha(1)) : -1 != FWDRAPUtils.indexOfArray(p.buttons_ar, f.fullScreenButton_do) && (p.buttons_ar.splice(FWDRAPUtils.indexOfArray(p.buttons_ar, f.fullScreenButton_do), 1), f.fullScreenButton_do.setX(-500)), i = p.buttons_ar.length, s = parseInt((p.stageWidth - h) / i);
                        for (r = 0; r < i; r++) c += (e = p.buttons_ar[r]).w + s;
                        c += p.volumeButton_do.w, o = parseInt((p.stageWidth - c) / 2) - p.startSpaceBetweenButtons;
                        for (r = 0; r < i; r++)(e = p.buttons_ar[r]).setY(p.titleBarGradLeft_do.h + p.allButtonsOffsetTopAndBottom + parseInt((p.largerButtonHeight - e.h) / 2)), 0 == r ? e.setX(o + p.startSpaceBetweenButtons) : (t = p.buttons_ar[r - 1], e.setX(Math.round(t.x + t.w + s)));
                        if (p.mainVolumeHolder_do.setX(e.x + e.w + s), p.mainVolumeHolder_do.setY(p.titleBarGradLeft_do.h + p.allButtonsOffsetTopAndBottom + parseInt((p.largerButtonHeight - p.volumeButton_do.h) / 2)), !p.totalTime_do.w && FWDRAPUtils.isIEAndLessThen9) return;
                        p.currentTime_do.setX(p.startTimeSpace), p.currentTime_do.setY(p.playPauseButton_do.y + p.playPauseButton_do.h + p.allButtonsOffsetTopAndBottom), p.totalTime_do.setX(p.stageWidth - p.startTimeSpace - p.totalTime_do.w), p.totalTime_do.setY(p.playPauseButton_do.y + p.playPauseButton_do.h + p.allButtonsOffsetTopAndBottom), p.mainScrubber_do.setX(p.currentTime_do.x + p.currentTime_do.w + p.spaceBetweenMainScrubberAndTime - parseInt(p.scrubbersOffestTotalWidth / 2)), p.mainScrubber_do.setY(p.currentTime_do.y + parseInt((p.currentTime_do.h - p.mainScrubber_do.h) / 2)), p.mainScrubberWidth = p.stageWidth + p.scrubbersOffestTotalWidth - p.currentTime_do.w - p.totalTime_do.w - 2 * p.spaceBetweenMainScrubberAndTime - 2 * p.startTimeSpace, p.mainScrubber_do.setWidth(p.mainScrubberWidth), p.mainScrubberBkMiddle_do.setWidth(p.mainScrubberWidth - 2 * p.scrubbersBkLeftAndRightWidth), p.mainScrubberBkRight_do.setX(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth), p.mainScrubberDragMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.progressMiddle_do.setWidth(p.mainScrubberWidth - p.scrubbersBkLeftAndRightWidth - p.scrubbersOffsetWidth), p.updateMainScrubber(p.percentPlayed), p.totalVolumeBarWidth = p.volumeButton_do.w, p.mainVolumeHolder_do.setWidth(p.totalVolumeBarWidth), p.updateVolume(p.volume), p.stageHeight = p.mainTitlebar_do.h + p.largerButtonHeight + 2 * p.allButtonsOffsetTopAndBottom + p.mainScrubber_do.h + p.scrubberOffsetBottom
                    }
                    p.startToCheckIfAnimTitle(), p.bk_do && (p.bk_do.setWidth(p.stageWidth), p.bk_do.setHeight(p.stageHeight)), p.setWidth(p.stageWidth), p.setHeight(p.stageHeight), p.mainHolder_do.setWidth(p.stageWidth), p.mainHolder_do.setHeight(p.stageHeight)
                }
            }, this.setupAtbButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.atbButton_do = new FWDRAPSimpleButton(_.atbNPath_img, _.atbSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.atbButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.atbButtonShowTooltipHandler), p.atbButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.atbButtonMouseUpHandler), p.atbButton_do.setX(-5e3), p.atbButton_do.setY(parseInt((p.stageHeight - p.atbButton_do.h) / 2)), p.mainHolder_do.addChild(p.atbButton_do)
            }, this.atbButtonShowTooltipHandler = function (e) {
                p.showToolTip(p.atbButton_do, p.atbButtonToolTip_do, e.e)
            }, this.atbButtonMouseUpHandler = function () {
                p.dispatchEvent(n.SHOW_ATOB)
            }, this.disableAtbButton = function () {
                p.atbButton_do && p.atbButton_do.disable()
            }, this.enableAtbButton = function () {
                p.atbButton_do && p.atbButton_do.enable()
            }, this.setupToolTips = function () {
                FWDRAPToolTip.setPrototype(), p.prevButtonToolTip_do = new FWDRAPToolTip(p.prevButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "previous track", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.prevButtonToolTip_do.screen), FWDRAPToolTip.setPrototype(), p.playPauseToolTip_do = new FWDRAPToolTip(p.playPauseButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "play / pause", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.playPauseToolTip_do.screen), FWDRAPToolTip.setPrototype(), p.nextButtonToolTip_do = new FWDRAPToolTip(p.nextButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "next track", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.nextButtonToolTip_do.screen), p.showPlaylistsButtonAndPlaylists_bl && (FWDRAPToolTip.setPrototype(), p.playlistsButtonToolTip_do = new FWDRAPToolTip(p.categoriesButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "show playlists", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.playlistsButtonToolTip_do.screen)), p.showPlayListButtonAndPlaylist_bl && (FWDRAPToolTip.setPrototype(), p.playlistButtonToolTip_do = new FWDRAPToolTip(p.playlistButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "show / hide playlist", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.playlistButtonToolTip_do.screen)), p.showLoopButton_bl && (FWDRAPToolTip.setPrototype(), p.loopButtonToolTip_do = new FWDRAPToolTip(p.loopButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "loop", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.loopButtonToolTip_do.screen)), p.showShuffleButton_bl && (FWDRAPToolTip.setPrototype(), p.shuffleButtonToolTip_do = new FWDRAPToolTip(p.shuffleButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "shuffle", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.shuffleButtonToolTip_do.screen)), p.showPlaybackRateButton_bl && (FWDRAPToolTip.setPrototype(), p.playbackRateButtonToolTip_do = new FWDRAPToolTip(p.playbackRateButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "playback rate / speed", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.playbackRateButtonToolTip_do.screen)), FWDRAPToolTip.setPrototype(), p.atbButtonToolTip_do = new FWDRAPToolTip(p.atbButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "a to b loop", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.atbButtonToolTip_do.screen), p.showShareButton_bl && (FWDRAPToolTip.setPrototype(), p.shareButtonToolTip_do = new FWDRAPToolTip(p.shareButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "share", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.shareButtonToolTip_do.screen)), p.showDownloadMp3Button_bl && (FWDRAPToolTip.setPrototype(), p.downloadButtonToolTip_do = new FWDRAPToolTip(p.downloadButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "download track", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.downloadButtonToolTip_do.screen)), this.showBuyButton_bl && (FWDRAPToolTip.setPrototype(), p.buyButtonToolTip_do = new FWDRAPToolTip(p.buyButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "buy track", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.buyButtonToolTip_do.screen)), p.showPopupButton_bl && (FWDRAPToolTip.setPrototype(), p.populButtonToolTip_do = new FWDRAPToolTip(p.popupButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "popup", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.populButtonToolTip_do.screen)), FWDRAPToolTip.setPrototype(), p.volumeButtonToolTip_do = new FWDRAPToolTip(p.volumeButton_do, _.toopTipBk_str, _.toopTipPointer_str, _.toopTipPointerUp_str, "mute / unmute", p.toolTipsButtonFontColor_str, p.toolTipsButtonsHideDelay), document.documentElement.appendChild(p.volumeButtonToolTip_do.screen)
            }, this.showToolTip = function (e, t, o) {
                if (p.showButtonsToolTips_bl) {
                    var s = FWDRAPUtils.getViewportSize(),
                        i = (FWDRAPUtils.getViewportMouseCoordinates(o), parseInt(e.getGlobalX() + e.w / 2 - t.w / 2)),
                        n = parseInt(e.getGlobalY() - t.h - 6),
                        r = 0;
                    i < 0 ? (r = i, i = 0) : i + t.w > s.w && (i += -1 * (r = -1 * (s.w - (i + t.w)))), n < 0 ? (n += e.h + t.h + 12, t.positionPointer(r, !0)) : t.positionPointer(r, !1), t.setX(i), t.setY(n), t.show()
                }
            }, this.setupThumb = function () {
                p.thumb_do = new FWDRAPDisplayObject("div"), p.thumb_do.getStyle().background = "url('" + p.thumbnailBkPath_str + "')", p.thumb_do.setWidth(p.thumbWidthAndHeight), p.thumb_do.setHeight(p.thumbWidthAndHeight), p.mainHolder_do.addChild(p.thumb_do)
            }, this.loadThumb = function (e) {
                if (p.positionButtons(), _.showThumbnail_bl) return e ? void(p.thumbPath_str != e && (p.thumbPath_str = e, p.thumb_img && (p.thumb_img.onload = null, p.thumb_img.onerror = null, p.thumb_img = null), p.thumbPath_str && (p.thumb_img = new Image, p.thumb_img.onload = p.thumbImageLoadComplete, p.thumb_img.onerror = p.thumbImageLoadError, p.thumb_img.src = p.thumbPath_str))) : (p.cleanThumbnails(!0), void(p.thumbPath_str = "none"))
            }, this.thumbImageLoadError = function () {
                p.cleanThumbnails(!0)
            }, this.thumbImageLoadComplete = function () {
                var e = new FWDRAPDisplayObject("img");
                e.setScreen(p.thumb_img);
                var t = p.thumb_img.width,
                    o = p.thumb_img.height,
                    s = p.thumbWidthAndHeight / t,
                    i = p.thumbWidthAndHeight / o,
                    n = 0;
                i <= s ? n = s : s <= i && (n = i), e.setWidth(parseInt(t * n)), e.setHeight(parseInt(o * n)), e.setX(parseInt((p.thumbWidthAndHeight - e.w) / 2)), e.setY(parseInt((p.thumbWidthAndHeight - e.h) / 2)), e.setAlpha(0);
                for (var r = 0; r < p.thumb_do.getNumChildren(); r++) child = p.thumb_do.getChildAt(r), FWDAnimation.killTweensOf(child);
                FWDAnimation.to(e, .8, {
                    alpha: 1,
                    delay: .2,
                    ease: Expo.easeOut,
                    onComplete: p.cleanThumbnails
                }), p.thumb_do.addChild(e)
            }, this.cleanThumbnails = function (e) {
                for (var t, o = e ? 0 : 1; p.thumb_do.getNumChildren() > o;) t = p.thumb_do.getChildAt(0), FWDAnimation.killTweensOf(t), p.thumb_do.removeChild(t), t.destroy()
            }, this.setupDisable = function () {
                p.disable_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (p.disable_do.setBkColor("#FFFFFF"), p.disable_do.setAlpha(0))
            }, this.setupPrevButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.prevButton_do = new FWDRAPSimpleButton(p.prevN_img, _.prevSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.prevButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.prevButtonShowToolTipHandler), p.prevButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.prevButtonOnMouseUpHandler), p.buttons_ar.push(p.prevButton_do), p.mainHolder_do.addChild(p.prevButton_do), p.showNextAndPrevButtons_bl || this.prevButton_do.setWidth(0)
            }, this.prevButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.prevButton_do, p.prevButtonToolTip_do, e.e)
            }, this.prevButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.PLAY_PREV)
            }, this.setupPlayPauseButton = function () {
                FWDRAPComplexButton.setPrototype(), p.playPauseButton_do = new FWDRAPComplexButton(p.playN_img, _.playSPath_str, p.pauseN_img, _.pauseSPath_str, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.buttons_ar.push(p.playPauseButton_do), p.playPauseButton_do.addListener(FWDRAPComplexButton.SHOW_TOOLTIP, p.playButtonShowToolTipHandler), p.playPauseButton_do.addListener(FWDRAPComplexButton.MOUSE_UP, p.playButtonMouseUpHandler), p.mainHolder_do.addChild(p.playPauseButton_do)
            }, this.playButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.playPauseButton_do, p.playPauseToolTip_do, e.e)
            }, this.showPlayButton = function () {
                p.playPauseButton_do && p.playPauseButton_do.setButtonState(1)
            }, this.showPauseButton = function () {
                p.playPauseButton_do && p.playPauseButton_do.setButtonState(0)
            }, this.playButtonMouseUpHandler = function () {
                0 == p.playPauseButton_do.currentState ? p.dispatchEvent(n.PAUSE) : p.dispatchEvent(n.PLAY)
            }, this.setupNextButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.nextButton_do = new FWDRAPSimpleButton(p.nextN_img, _.nextSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.nextButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.nextButtonShowToolTipHandler), p.nextButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.nextButtonOnMouseUpHandler), p.nextButton_do.setY(parseInt((p.stageHeight - p.nextButton_do.h) / 2)), p.buttons_ar.push(p.nextButton_do), p.mainHolder_do.addChild(p.nextButton_do), p.showNextAndPrevButtons_bl || p.nextButton_do.setWidth(0)
            }, this.nextButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.nextButton_do, p.nextButtonToolTip_do, e.e)
            }, this.nextButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.PLAY_NEXT)
            }, this.setupSeparators = function () {
                p.firstSeparator_do = new FWDRAPDisplayObject("img"), p.firstSeparator_do.setScreen(p.separator1_img), p.secondSeparator_do = new FWDRAPDisplayObject("img"), p.secondSeparator_do.setScreen(p.separator2_img), p.firstSeparator_do.setX(-10), p.secondSeparator_do.setX(-10), p.firstSeparator_do.setY(parseInt((p.stageHeight - p.firstSeparator_do.h) / 2)), p.secondSeparator_do.setY(parseInt((p.stageHeight - p.secondSeparator_do.h) / 2)), p.mainHolder_do.addChild(p.firstSeparator_do), p.mainHolder_do.addChild(p.secondSeparator_do)
            }, this.setupTitlebar = function () {
                p.mainTitlebar_do = new FWDRAPDisplayObject("div"), p.mainTitlebar_do.getStyle().background = "url('" + p.titlebarBkMiddlePattern_str + "')", p.mainTitlebar_do.setHeight(p.titlebarHeight), p.titleBarLeft_do = new FWDRAPDisplayObject("img"), p.titleBarLeft_do.setScreen(p.titleBarLeft_img), p.titleBarRight_do = new FWDRAPDisplayObject("img"), p.titleBarRight_do.setScreen(p.titleBarRigth_img), p.simpleText_do = new FWDRAPDisplayObject("div"), p.simpleText_do.setOverflow("visible"), p.simpleText_do.hasTransform3d_bl = !1, p.simpleText_do.hasTransform2d_bl = !1, p.simpleText_do.setBackfaceVisibility(), p.simpleText_do.getStyle().fontFamily = "Arial", p.simpleText_do.getStyle().fontSize = "12px", p.simpleText_do.getStyle().whiteSpace = "nowrap", p.simpleText_do.getStyle().textAlign = "left", p.simpleText_do.getStyle().color = p.titleColor_str, p.simpleText_do.getStyle().fontSmoothing = "antialiased", p.simpleText_do.getStyle().webkitFontSmoothing = "antialiased", p.simpleText_do.getStyle().textRendering = "optimizeLegibility", p.animText1_do = new FWDRAPDisplayObject("div"), p.animText1_do.setOverflow("visible"), p.animText1_do.hasTransform3d_bl = !1, p.animText1_do.hasTransform2d_bl = !1, p.animText1_do.setBackfaceVisibility(), p.animText1_do.getStyle().fontFamily = "Arial", p.animText1_do.getStyle().fontSize = "12px", p.animText1_do.getStyle().whiteSpace = "nowrap", p.animText1_do.getStyle().textAlign = "left", p.animText1_do.getStyle().color = p.titleColor_str, p.animText1_do.getStyle().fontSmoothing = "antialiased", p.animText1_do.getStyle().webkitFontSmoothing = "antialiased", p.animText1_do.getStyle().textRendering = "optimizeLegibility", p.animText2_do = new FWDRAPDisplayObject("div"), p.animText2_do.setOverflow("visible"), p.animText2_do.hasTransform3d_bl = !1, p.animText2_do.hasTransform2d_bl = !1, p.animText2_do.setBackfaceVisibility(), p.animText2_do.getStyle().fontFamily = "Arial", p.animText2_do.getStyle().fontSize = "12px", p.animText2_do.getStyle().whiteSpace = "nowrap", p.animText2_do.getStyle().textAlign = "left", p.animText2_do.getStyle().color = p.titleColor_str, p.animText2_do.getStyle().fontSmoothing = "antialiased", p.animText2_do.getStyle().webkitFontSmoothing = "antialiased", p.animText2_do.getStyle().textRendering = "optimizeLegibility", p.titleBarGradLeft_do = new FWDRAPDisplayObject("img"), p.titleBarGradLeft_do.setScreen(p.titlebarLeftPath_img), p.titleBarGradLeft_do.setX(-50);
                var e = new Image;
                e.src = _.titlebarRightPath_str, p.titlebarGradRight_do = new FWDRAPDisplayObject("img"), p.titlebarGradRight_do.setScreen(e), p.titlebarGradRight_do.setWidth(p.titleBarGradLeft_do.w), p.titlebarGradRight_do.setHeight(p.titleBarGradLeft_do.h), p.showSoundAnimation_bl ? (p.animationBackground_do = new FWDRAPDisplayObject("img"), p.animationBackground_do.setScreen(p.titlebarAnimBkPath_img), p.animationHolderWidth = p.animationBackground_do.w, p.simpleText_do.setX(p.animationBackground_do.w + 5), FWDRAPPreloader.setPrototype(), p.animation_do = new FWDRAPPreloader(_.soundAnimationPath_img, 29, 22, 31, 80, !0), p.animation_do.setX(p.equlizerOffsetLeft), p.animation_do.setY(0), p.animation_do.show(!0), p.animation_do.stop()) : p.simpleText_do.setX(5), p.simpleText_do.setAlpha(0), p.positionTitleId_to = setTimeout(function e() {
                    if (null == p) return;
                    clearTimeout(p.positionTitleId_to);
                    0 == p.simpleText_do.getHeight() ? p.positionTitleId_to = setTimeout(e, 400) : (p.simpleText_do.setY(parseInt((p.mainTitlebar_do.h - p.simpleText_do.getHeight()) / 2) + 1), p.animText1_do.setY(parseInt((p.mainTitlebar_do.h - p.simpleText_do.getHeight()) / 2) + 1), p.animText2_do.setY(parseInt((p.mainTitlebar_do.h - p.simpleText_do.getHeight()) / 2) + 1), FWDAnimation.to(p.simpleText_do, .5, {
                        alpha: 1
                    }))
                }, 400), p.mainTitlebar_do.addChild(p.titleBarLeft_do), p.mainTitlebar_do.addChild(p.titleBarRight_do), p.mainTitlebar_do.addChild(p.simpleText_do), p.mainTitlebar_do.addChild(p.animText1_do), p.mainTitlebar_do.addChild(p.animText2_do), p.showSoundAnimation_bl && (p.mainTitlebar_do.addChild(p.animationBackground_do), p.mainTitlebar_do.addChild(p.animation_do)), p.mainTitlebar_do.addChild(p.titleBarGradLeft_do), p.mainTitlebar_do.addChild(p.titlebarGradRight_do), p.mainHolder_do.addChild(p.mainTitlebar_do)
            }, this.setTitle = function (e) {
                p.simpleText_do.setInnerHTML(e), p.animText1_do.setInnerHTML(e + "***"), p.animText2_do.setInnerHTML(e + "***"), p.animText1_do.setX(-1e3), p.animText2_do.setX(-1e3), p.startToCheckIfAnimTitle(!0)
            }, this.startToCheckIfAnimTitle = function (e) {
                e && p.stopToAnimateText(), clearTimeout(p.animateTextId_to), clearTimeout(p.startToAnimateTextId_to), p.animateTextId_to = setTimeout(p.checkIfAnimTitle, 10)
            }, this.checkIfAnimTitle = function () {
                var e = p.mainTitlebar_do.w - 5 - p.titlebarGradRight_do.w;
                if (e -= p.animationHolderWidth, p.simpleText_do.getWidth() > e) {
                    if (p.isTextAnimating_bl) return;
                    p.showSoundAnimation_bl ? p.titleBarGradLeft_do.setX(p.animationHolderWidth) : p.titleBarGradLeft_do.setX(0), p.titlebarGradRight_do.setY(0), clearTimeout(p.startToAnimateTextId_to), p.startToAnimateTextId_to = setTimeout(p.startToAnimateText, 300)
                } else p.titleBarGradLeft_do.setX(-50), p.titlebarGradRight_do.setY(-50), p.stopToAnimateText()
            }, this.startToAnimateText = function () {
                p.isTextAnimating_bl || (p.isTextAnimating_bl = !0, p.animTextWidth = p.animText1_do.getWidth(), p.simpleText_do.setX(-1e3), p.animText1_do.setX(p.animationHolderWidth + 5), p.animText2_do.setX(p.animationHolderWidth + p.animTextWidth + 10), clearInterval(p.animateTextId_int), p.animateTextId_int = setInterval(p.animateText, 40))
            }, this.stopToAnimateText = function () {
                p.isTextAnimating_bl && (p.isTextAnimating_bl = !1, p.simpleText_do.setX(p.animationHolderWidth + 5), p.animText1_do.setX(-1e3), p.animText2_do.setX(-1e3), clearInterval(p.animateTextId_int))
            }, this.animateText = function () {
                p.animText1_do.setX(p.animText1_do.x - 1), p.animText2_do.setX(p.animText2_do.x - 1), p.animText1_do.x < -(p.animTextWidth - p.animationHolderWidth) && p.animText1_do.setX(p.animText2_do.x + p.animTextWidth + 5), p.animText2_do.x < -(p.animTextWidth - p.animationHolderWidth) && p.animText2_do.setX(p.animText1_do.x + p.animTextWidth + 5)
            }, this.stopEqulizer = function () {
                p.animation_do && p.animation_do.stop()
            }, this.startEqulizer = function () {
                p.animation_do && p.animation_do.start()
            }, this.setupMainScrubber = function () {
                p.mainScrubber_do = new FWDRAPDisplayObject("div"), p.mainScrubber_do.setY(parseInt((p.stageHeight - p.scrubbersHeight) / 2)), p.mainScrubber_do.setHeight(p.scrubbersHeight), p.mainScrubberBkLeft_do = new FWDRAPDisplayObject("img"), p.mainScrubberBkLeft_do.setScreen(p.mainScrubberBkLeft_img), p.mainScrubberBkRight_do = new FWDRAPDisplayObject("img"), p.mainScrubberBkRight_do.setScreen(p.mainScrubberBkRight_img);
                var e = new Image;
                e.src = p.mainScrubberBkMiddlePath_str, p.mainScrubberBkMiddle_do = new FWDRAPDisplayObject("div"), p.mainScrubberBkMiddle_do.getStyle().background = "url('" + p.mainScrubberBkMiddlePath_str + "')", p.mainScrubberBkMiddle_do.setHeight(p.scrubbersHeight), p.mainScrubberBkMiddle_do.setX(p.scrubbersBkLeftAndRightWidth), p.mainProgress_do = new FWDRAPDisplayObject("div"), p.mainProgress_do.setHeight(p.scrubbersHeight), p.progressLeft_do = new FWDRAPDisplayObject("img"), p.progressLeft_do.setScreen(p.mainScrubberLeftProgress_img), (e = new Image).src = p.progressMiddlePath_str, p.progressMiddle_do = new FWDRAPDisplayObject("div"), p.progressMiddle_do.getStyle().background = "url('" + p.progressMiddlePath_str + "')", p.progressMiddle_do.setHeight(p.scrubbersHeight), p.progressMiddle_do.setX(p.mainScrubberDragLeftWidth), p.mainScrubberDrag_do = new FWDRAPDisplayObject("div"), p.mainScrubberDrag_do.setHeight(p.scrubbersHeight), p.useHEXColorsForSkin_bl ? (p.mainScrubberDragLeft_do = new FWDRAPDisplayObject("div"), p.mainScrubberDragLeft_do.setWidth(p.mainScrubberDragLeft_img.width), p.mainScrubberDragLeft_do.setHeight(p.mainScrubberDragLeft_img.height), p.mainScrubberDragLeft_canvas = FWDRAPUtils.getCanvasWithModifiedColor(p.mainScrubberDragLeft_img, p.normalButtonsColor_str).canvas, p.mainScrubberDragLeft_do.screen.appendChild(p.mainScrubberDragLeft_canvas)) : (p.mainScrubberDragLeft_do = new FWDRAPDisplayObject("img"), p.mainScrubberDragLeft_do.setScreen(p.mainScrubberDragLeft_img)), p.mainScrubberMiddleImage = new Image, p.mainScrubberMiddleImage.src = p.mainScrubberDragMiddlePath_str, p.volumeScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), p.useHEXColorsForSkin_bl ? (p.mainScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), p.mainScrubberMiddleImage.onload = function () {
                    var e = FWDRAPUtils.getCanvasWithModifiedColor(p.mainScrubberMiddleImage, p.normalButtonsColor_str, !0);
                    p.mainSCrubberMiddleCanvas = e.canvas, p.mainSCrubberDragMiddleImageBackground = e.image, p.mainScrubberDragMiddle_do.getStyle().background = "url('" + p.mainSCrubberDragMiddleImageBackground.src + "') repeat-x", setTimeout(function () {
                        p.volumeScrubberDragMiddle_do.getStyle().background = "url('" + p.mainSCrubberDragMiddleImageBackground.src + "') repeat-x"
                    }, 50)
                }) : (p.mainScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), p.mainScrubberDragMiddle_do.getStyle().background = "url('" + p.mainScrubberDragMiddlePath_str + "') repeat-x"), p.mainScrubberDragMiddle_do.setHeight(p.scrubbersHeight), p.mainScrubberDragMiddle_do.setX(p.mainScrubberDragLeftWidth), p.mainScrubberBarLine_do = new FWDRAPDisplayObject("img"), p.mainScrubberBarLine_do.setScreen(p.mainScrubberLine_img), p.mainScrubberBarLine_do.setAlpha(0), p.mainScrubberBarLine_do.hasTransform3d_bl = !1, p.mainScrubberBarLine_do.hasTransform2d_bl = !1, p.mainScrubber_do.addChild(p.mainScrubberBkLeft_do), p.mainScrubber_do.addChild(p.mainScrubberBkMiddle_do), p.mainScrubber_do.addChild(p.mainScrubberBkRight_do), p.mainScrubberDrag_do.addChild(p.mainScrubberDragLeft_do), p.mainScrubberDrag_do.addChild(p.mainScrubberDragMiddle_do), p.mainProgress_do.addChild(p.progressLeft_do), p.mainProgress_do.addChild(p.progressMiddle_do), p.mainScrubber_do.addChild(p.mainProgress_do), p.mainScrubber_do.addChild(p.mainScrubberDrag_do), p.mainScrubber_do.addChild(p.mainScrubberBarLine_do), p.mainHolder_do.addChild(p.mainScrubber_do), p.disableScrubber_bl || (p.hasPointerEvent_bl ? (p.mainScrubber_do.screen.addEventListener("pointerover", p.mainScrubberOnOverHandler), p.mainScrubber_do.screen.addEventListener("pointerout", p.mainScrubberOnOutHandler), p.mainScrubber_do.screen.addEventListener("pointerdown", p.mainScrubberOnDownHandler)) : p.screen.addEventListener && (p.isMobile_bl || (p.mainScrubber_do.screen.addEventListener("mouseover", p.mainScrubberOnOverHandler), p.mainScrubber_do.screen.addEventListener("mousemove", p.updateTooltipOnMove), p.mainScrubber_do.screen.addEventListener("mouseout", p.mainScrubberOnOutHandler), p.mainScrubber_do.screen.addEventListener("mousedown", p.mainScrubberOnDownHandler)), p.mainScrubber_do.screen.addEventListener("touchstart", p.mainScrubberOnDownHandler))), p.disableMainScrubber(), _.showMainScrubberToolTipLabel_bl && (FWDRAPScrubberTooltip.setPrototype(), p.ttm = new FWDRAPScrubberTooltip(p.mainScrubber_do, _.scrubbersToolTipLabelBackgroundColor, _.scrubbersToolTipLabelFontColor, "00:00"), p.addChild(p.ttm))
            }, this.updateToolTip = function (e, t) {
                var o;
                _.showMainScrubberToolTipLabel_bl && (p.ttm.setLabel(FWDRAPUtils.formatTime(Math.round(f.totalDuration * t))), p.ttm.setX(Math.round(p.mainScrubber_do.x + e - p.ttm.getWidth() / 2)), o = p.isFullScreen_bl ? p.videoControllerHolder_do.y + p.mainScrubber_do.y - p.ttm2.h - 2 : p.mainScrubber_do.y - p.ttm.h - 2, p.ttm.setY(o))
            }, this.updateTooltipOnMove = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.mainScrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > p.mainScrubberWidth - p.scrubbersOffsetWidth && (t = p.mainScrubberWidth - p.scrubbersOffsetWidth);
                var o = t / p.mainScrubberWidth;
                p.updateToolTip(t, o)
            }, this.mainScrubberOnOverHandler = function (e) {
                if (!p.isMainScrubberDisabled_bl) {
                    _.showMainScrubberToolTipLabel_bl && 0 != f.totalDuration && p.ttm.show(), !p.isMobile_bl && p.ttm && window.addEventListener("mousemove", p.mainScrubberWMouseMove);
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.mainScrubber_do.getGlobalX();
                    t < 0 ? t = 0 : t > p.mainScrubberWidth - p.scrubbersOffsetWidth && (t = p.mainScrubberWidth - p.scrubbersOffsetWidth);
                    var o = t / p.mainScrubberWidth;
                    p.updateToolTip(t, o)
                }
            }, p.mainScrubberWMouseMove = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                p.vcX = t.screenX, p.vcY = t.screenY, FWDRAPUtils.hitTest(p.mainScrubber_do.screen, p.vcX, p.vcY) || p.isMainScrubberScrubbing_bl || (window.removeEventListener("mousemove", p.mainScrubberWMouseMove), p.ttm.hide());
                var o = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.mainScrubber_do.getGlobalX();
                o < 0 ? o = 0 : o > p.mainScrubberWidth - p.scrubbersOffsetWidth && (o = p.mainScrubberWidth - p.scrubbersOffsetWidth);
                var s = o / p.mainScrubberWidth;
                p.updateToolTip(o, s)
            }, this.mainScrubberOnOutHandler = function (e) {
                p.isMainScrubberDisabled_bl || p.isMainScrubberScrubbing_bl || p.ttm && p.ttm.hide()
            }, this.mainScrubberOnDownHandler = function (e) {
                if (!p.isMainScrubberDisabled_bl) {
                    e.preventDefault && e.preventDefault(), p.isMainScrubberScrubbing_bl = !0;
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.mainScrubber_do.getGlobalX();
                    t < 0 ? t = 0 : t > p.mainScrubberWidth - p.scrubbersOffsetWidth && (t = p.mainScrubberWidth - p.scrubbersOffsetWidth);
                    var o = t / p.mainScrubberWidth;
                    !FWDRAP.hasHTML5Audio && t >= p.mainProgress_do.w && (t = p.mainProgress_do.w);
                    var s = t / p.mainScrubberWidth;
                    p.disable_do && p.addChild(p.disable_do), _.showMainScrubberToolTipLabel_bl && p.ttm.show(), p.updateMainScrubber(o), p.updateToolTip(t, o), p.dispatchEvent(n.START_TO_SCRUB), p.dispatchEvent(n.SCRUB_PLAYLIST_ITEM, {
                        percent: s
                    }), p.dispatchEvent(n.SCRUB, {
                        percent: o
                    }), p.hasPointerEvent_bl ? (window.addEventListener("pointermove", p.mainScrubberMoveHandler), window.addEventListener("pointerup", p.mainScrubberEndHandler)) : (window.addEventListener("mousemove", p.mainScrubberMoveHandler), window.addEventListener("mouseup", p.mainScrubberEndHandler), window.addEventListener("touchmove", p.mainScrubberMoveHandler), window.addEventListener("touchend", p.mainScrubberEndHandler))
                }
            }, this.mainScrubberMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                p.vcX = t.screenX, p.vcY = t.screenY, FWDRAPUtils.hitTest(p.mainScrubber_do.screen, p.vcX, p.vcY) || p.isMainScrubberScrubbing_bl || (window.removeEventListener("mousemove", p.mainScrubberWMouseMove), p.ttm.hide());
                var o = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.mainScrubber_do.getGlobalX();
                o < 0 ? o = 0 : o > p.mainScrubberWidth - p.scrubbersOffsetWidth && (o = p.mainScrubberWidth - p.scrubbersOffsetWidth);
                var s = o / p.mainScrubberWidth;
                !FWDRAP.hasHTML5Audio && o >= p.mainProgress_do.w && (o = p.mainProgress_do.w);
                var i = o / p.mainScrubberWidth;
                p.updateToolTip(o, s), p.updateMainScrubber(s), p.dispatchEvent(n.SCRUB_PLAYLIST_ITEM, {
                    percent: i
                }), p.dispatchEvent(n.SCRUB, {
                    percent: s
                })
            }, this.mainScrubberEndHandler = function (e) {
                if (p.disable_do && p.contains(p.disable_do) && p.removeChild(p.disable_do), p.isMainScrubberScrubbing_bl = !1, e) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    FWDRAPUtils.hitTest(p.mainScrubber_do.screen, t.screenX, t.screenY) || p.ttm && p.ttm.hide()
                }
                p.dispatchEvent(n.STOP_TO_SCRUB), p.hasPointerEvent_bl ? (window.removeEventListener("pointermove", p.mainScrubberMoveHandler), window.removeEventListener("pointerup", p.mainScrubberEndHandler)) : (window.removeEventListener("mousemove", p.mainScrubberMoveHandler), window.removeEventListener("mouseup", p.mainScrubberEndHandler), window.removeEventListener("touchmove", p.mainScrubberMoveHandler), window.removeEventListener("touchend", p.mainScrubberEndHandler))
            }, this.disableMainScrubber = function () {
                p.mainScrubber_do && (p.isMainScrubberDisabled_bl = !0, p.mainScrubber_do.setButtonMode(!1), p.updateMainScrubber(0), p.updatePreloaderBar(0), p.mainScrubberEndHandler())
            }, this.enableMainScrubber = function () {
                p.mainScrubber_do && (p.isMainScrubberDisabled_bl = !1, p.disableScrubber_bl || p.mainScrubber_do.setButtonMode(!0), p.enableAtbButton())
            }, this.updateMainScrubber = function (e) {
                if (p.mainScrubber_do && !isNaN(e)) {
                    var t = parseInt(e * p.mainScrubberWidth);
                    p.percentPlayed = e, !FWDRAP.hasHTML5Audio && t >= p.mainProgress_do.w && (t = p.mainProgress_do.w), t < 1 && p.isMainScrubberLineVisible_bl ? (p.isMainScrubberLineVisible_bl = !1, FWDAnimation.to(p.mainScrubberBarLine_do, .5, {
                        alpha: 0
                    })) : 2 < t && !p.isMainScrubberLineVisible_bl && (p.isMainScrubberLineVisible_bl = !0, FWDAnimation.to(p.mainScrubberBarLine_do, .5, {
                        alpha: 1
                    })), p.mainScrubberDrag_do.setWidth(t), t > p.mainScrubberWidth - p.scrubbersOffsetWidth && (t = p.mainScrubberWidth - p.scrubbersOffsetWidth), FWDAnimation.to(p.mainScrubberBarLine_do, .8, {
                        x: t,
                        ease: Expo.easeOut
                    })
                }
            }, this.updatePreloaderBar = function (e) {
                if (p.mainProgress_do) {
                    var t = parseInt(e * p.mainScrubberWidth);
                    1 == e ? p.mainProgress_do.setY(-30) : 0 != p.mainProgress_do.y && 1 != e && p.mainProgress_do.setY(0), t > p.mainScrubberWidth - p.scrubbersOffsetWidth && (t = p.mainScrubberWidth - p.scrubbersOffsetWidth), t < 0 && (t = 0), p.mainProgress_do.setWidth(t)
                }
            }, this.setupTime = function () {
                p.currentTime_do = new FWDRAPDisplayObject("div"), p.currentTime_do.hasTransform3d_bl = !1, p.currentTime_do.hasTransform2d_bl = !1, p.currentTime_do.getStyle().fontFamily = "Arial", p.currentTime_do.getStyle().fontSize = "12px", p.currentTime_do.getStyle().whiteSpace = "nowrap", p.currentTime_do.getStyle().textAlign = "left", p.currentTime_do.getStyle().color = p.timeColor_str, p.currentTime_do.getStyle().fontSmoothing = "antialiased", p.currentTime_do.getStyle().webkitFontSmoothing = "antialiased", p.currentTime_do.getStyle().textRendering = "optimizeLegibility", p.currentTime_do.setInnerHTML("00"), p.mainHolder_do.addChild(p.currentTime_do), p.totalTime_do = new FWDRAPDisplayObject("div"), p.totalTime_do.hasTransform3d_bl = !1, p.totalTime_do.hasTransform2d_bl = !1, p.totalTime_do.getStyle().fontFamily = "Arial", p.totalTime_do.getStyle().fontSize = "12px", p.totalTime_do.getStyle().whiteSpace = "nowrap", p.totalTime_do.getStyle().textAlign = "right", p.totalTime_do.getStyle().color = p.timeColor_str, p.totalTime_do.getStyle().fontSmoothing = "antialiased", p.totalTime_do.getStyle().webkitFontSmoothing = "antialiased", p.totalTime_do.getStyle().textRendering = "optimizeLegibility", p.mainHolder_do.addChild(p.totalTime_do), p.updateTime(), setTimeout(function () {
                    null != p && (p.timeHeight = p.currentTime_do.getHeight(), p.currentTime_do.h = p.timeHeight, p.totalTime_do.h = p.timeHeight, p.stageWidth = f.stageWidth, p.positionButtons())
                }, 100)
            }, this.updateTime = function (e, t) {
                if (p.currentTime_do && t && ("00:00" == t && (t = e), p.currentTime_do.setInnerHTML(e), p.totalTime_do.setInnerHTML(t), e.length != p.lastTotalTimeLength || t.length != p.lastCurTimeLength)) {
                    var o = p.currentTime_do.offsetWidth,
                        s = p.totalTime_do.offsetWidth;
                    p.currentTime_do.w = o, p.totalTime_do.w = s, p.positionButtons(), setTimeout(function () {
                        p.currentTime_do.w = p.currentTime_do.getWidth(), p.totalTime_do.w = p.totalTime_do.getWidth(), p.positionButtons()
                    }, 50), p.lastCurTimeLength = e.length, p.lastTotalTimeLength = t.length
                }
            }, this.setupVolumeScrubber = function () {
                p.mainVolumeHolder_do = new FWDRAPDisplayObject("div"), p.mainVolumeHolder_do.setHeight(p.volumeN_img.height), p.mainHolder_do.addChild(p.mainVolumeHolder_do), FWDRAPSimpleButton.setPrototype(), p.volumeButton_do = new FWDRAPSimpleButton(p.volumeN_img, _.volumeSPath_str, _.volumeDPath_str, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.volumeButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.volumeButtonShowToolTipHandler), p.volumeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.volumeButtonOnMouseUpHandler), p.allowToChangeVolume_bl || p.volumeButton_do.disable(), p.volumeScrubber_do = new FWDRAPDisplayObject("div"), p.volumeScrubber_do.setHeight(p.scrubbersHeight), p.volumeScrubber_do.setX(p.volumeButton_do.w), p.volumeScrubber_do.setY(parseInt((p.volumeButton_do.h - p.scrubbersHeight) / 2)), p.volumeScrubberBkLeft_do = new FWDRAPDisplayObject("img");
                var e = new Image;
                e.src = p.mainScrubberBkLeft_do.screen.src, p.volumeScrubberBkLeft_do.setScreen(e), p.volumeScrubberBkLeft_do.setWidth(p.mainScrubberBkLeft_do.w), p.volumeScrubberBkLeft_do.setHeight(p.mainScrubberBkLeft_do.h), p.volumeScrubberBkRight_do = new FWDRAPDisplayObject("img");
                var t = new Image;
                t.src = p.mainScrubberBkRight_do.screen.src, p.volumeScrubberBkRight_do.setScreen(t), p.volumeScrubberBkRight_do.setWidth(p.mainScrubberBkRight_do.w), p.volumeScrubberBkRight_do.setHeight(p.mainScrubberBkRight_do.h), (new Image).src = p.volumeScrubberBkMiddlePath_str, p.volumeScrubberBkMiddle_do = new FWDRAPDisplayObject("div"), p.volumeScrubberBkMiddle_do.getStyle().background = "url('" + p.volumeScrubberBkMiddlePath_str + "')", p.volumeScrubberBkMiddle_do.setHeight(p.scrubbersHeight), p.volumeScrubberBkMiddle_do.setX(p.scrubbersBkLeftAndRightWidth), p.volumeScrubberDrag_do = new FWDRAPDisplayObject("div"), p.volumeScrubberDrag_do.setHeight(p.scrubbersHeight), p.useHEXColorsForSkin_bl ? (p.volumeScrubberDragLeft_do = new FWDRAPDisplayObject("div"), p.volumeScrubberDragLeft_do.setWidth(p.volumeScrubberDragLeft_img.width), p.volumeScrubberDragLeft_do.setHeight(p.volumeScrubberDragLeft_img.height), p.volumeScrubberDragLeft_canvas = FWDRAPUtils.getCanvasWithModifiedColor(p.volumeScrubberDragLeft_img, p.normalButtonsColor_str).canvas, p.volumeScrubberDragLeft_do.screen.appendChild(p.volumeScrubberDragLeft_canvas)) : (p.volumeScrubberDragLeft_do = new FWDRAPDisplayObject("img"), p.volumeScrubberDragLeft_do.setScreen(p.volumeScrubberDragLeft_img)), p.useHEXColorsForSkin_bl || (p.volumeScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), p.volumeScrubberDragMiddle_do.getStyle().background = "url('" + p.volumeScrubberDragMiddlePath_str + "') repeat-x"), p.volumeScrubberDragMiddle_do.setHeight(p.scrubbersHeight), p.volumeScrubberDragMiddle_do.setX(p.mainScrubberDragLeftWidth), p.volumeScrubberBarLine_do = new FWDRAPDisplayObject("img");
                var o = new Image;
                o.src = p.mainScrubberBarLine_do.screen.src, p.volumeScrubberBarLine_do.setScreen(o), p.volumeScrubberBarLine_do.setWidth(p.mainScrubberBarLine_do.w), p.volumeScrubberBarLine_do.setHeight(p.mainScrubberBarLine_do.h), p.volumeScrubberBarLine_do.setAlpha(0), p.volumeScrubberBarLine_do.hasTransform3d_bl = !1, p.volumeScrubberBarLine_do.hasTransform2d_bl = !1, p.volumeScrubber_do.addChild(p.volumeScrubberBkLeft_do), p.volumeScrubber_do.addChild(p.volumeScrubberBkMiddle_do), p.volumeScrubber_do.addChild(p.volumeScrubberBkRight_do), p.volumeScrubber_do.addChild(p.volumeScrubberBarLine_do), p.volumeScrubberDrag_do.addChild(p.volumeScrubberDragLeft_do), p.volumeScrubberDrag_do.addChild(p.volumeScrubberDragMiddle_do), p.volumeScrubber_do.addChild(p.volumeScrubberDrag_do), p.volumeScrubber_do.addChild(p.volumeScrubberBarLine_do), p.mainVolumeHolder_do.addChild(p.volumeButton_do), p.mainVolumeHolder_do.addChild(p.volumeScrubber_do), p.allowToChangeVolume_bl && (p.isMobile_bl ? p.hasPointerEvent_bl ? (p.volumeScrubber_do.screen.addEventListener("pointerover", p.volumeScrubberOnOverHandler), p.volumeScrubber_do.screen.addEventListener("pointerout", p.volumeScrubberOnOutHandler), p.volumeScrubber_do.screen.addEventListener("pointerdown", p.volumeScrubberOnDownHandler)) : p.volumeScrubber_do.screen.addEventListener("touchstart", p.volumeScrubberOnDownHandler) : p.screen.addEventListener ? (p.volumeScrubber_do.screen.addEventListener("mouseover", p.volumeScrubberOnOverHandler), p.volumeScrubber_do.screen.addEventListener("mouseout", p.volumeScrubberOnOutHandler), p.volumeScrubber_do.screen.addEventListener("mousedown", p.volumeScrubberOnDownHandler)) : p.screen.attachEvent && (p.volumeScrubber_do.screen.attachEvent("onmouseover", p.volumeScrubberOnOverHandler), p.volumeScrubber_do.screen.attachEvent("onmouseout", p.volumeScrubberOnOutHandler), p.volumeScrubber_do.screen.attachEvent("onmousedown", p.volumeScrubberOnDownHandler))), _.showMainScrubberToolTipLabel_bl && (FWDRAPScrubberTooltip.setPrototype(), p.ttm2 = new FWDRAPScrubberTooltip(p.volumeScrubber_do, _.scrubbersToolTipLabelBackgroundColor, _.scrubbersToolTipLabelFontColor, "10"), document.documentElement.appendChild(p.ttm2.screen)), p.enableVolumeScrubber(), p.updateVolumeScrubber(p.volume)
            }, this.updateVolumeToolTip = function () {
                var e;
                _.showMainScrubberToolTipLabel_bl && (p.ttm2.setLabel(Math.round(100 * p.volume)), p.ttm2.setX(t()), e = p.isFullScreen_bl ? p.videoControllerHolder_do.y + p.volumeScrubber_do.y - p.ttm2.h - 2 : p.getGlobalY() + FWDRAPUtils.getScrollOffsets().y + p.mainVolumeHolder_do.y - p.ttm2.h - 2, p.ttm2.setY(e), clearTimeout(p.setVolTooltipId_to), p.setVolTooltipId_to = setTimeout(function () {
                    p.ttm2.setX(t())
                }, 200));

                function t() {
                    var e;
                    return e = p.isFullScreen_bl ? p.volumeScrubber_do.x + f.main_do.getGlobalX() : p.mainVolumeHolder_do.x + p.volumeScrubber_do.x + f.main_do.getGlobalX(), e = Math.round(e + p.volume * p.volumeScrubberWidth - p.ttm2.getWidth() / 2)
                }
            }, this.volumeButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.volumeButton_do, p.volumeButtonToolTip_do, e)
            }, this.volumeButtonOnMouseUpHandler = function () {
                var e = p.lastVolume;
                p.isMute_bl ? (e = p.lastVolume, p.isMute_bl = !1) : (e = 1e-6, p.isMute_bl = !0), p.updateVolume(e)
            }, this.volumeScrubberOnOverHandler = function (e) {
                p.isVolumeScrubberDisabled_bl || (_.showMainScrubberToolTipLabel_bl && p.ttm2.show(), p.updateVolumeToolTip())
            }, this.volumeScrubberOnOutHandler = function (e) {
                p.isVolumeScrubberDisabled_bl || p.isVolumeScrubberScrubbing_bl || p.ttm2 && p.ttm2.hide()
            }, this.volumeScrubberOnDownHandler = function (e) {
                if (!p.isVolumeScrubberDisabled_bl) {
                    e.preventDefault && e.preventDefault();
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.volumeScrubber_do.getGlobalX();
                    p.isVolumeScrubberScrubbing_bl = !0, t < 0 ? t = 0 : t > p.volumeScrubberWidth - p.scrubbersOffsetWidth && (t = p.volumeScrubberWidth - p.scrubbersOffsetWidth);
                    var o = t / p.volumeScrubberWidth;
                    p.disable_do && p.addChild(p.disable_do), p.lastVolume = o, p.updateVolume(o), _.showMainScrubberToolTipLabel_bl && p.ttm2.show(), p.updateVolumeToolTip(), p.dispatchEvent(n.VOLUME_START_TO_SCRUB), p.isMobile_bl ? p.hasPointerEvent_bl ? (window.addEventListener("pointermove", p.volumeScrubberMoveHandler), window.addEventListener("pointerup", p.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", p.volumeScrubberMoveHandler), window.addEventListener("touchend", p.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", p.volumeScrubberMoveHandler), window.addEventListener("mouseup", p.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", p.volumeScrubberMoveHandler), document.attachEvent("onmouseup", p.volumeScrubberEndHandler))
                }
            }, this.volumeScrubberMoveHandler = function (e) {
                if (!p.isVolumeScrubberDisabled_bl) {
                    e.preventDefault && e.preventDefault();
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - p.volumeScrubber_do.getGlobalX();
                    t < 0 ? t = 0 : t > p.volumeScrubberWidth - p.scrubbersOffsetWidth && (t = p.volumeScrubberWidth - p.scrubbersOffsetWidth);
                    var o = t / p.volumeScrubberWidth;
                    p.lastVolume = o, p.updateVolume(o), p.updateVolumeToolTip()
                }
            }, this.volumeScrubberEndHandler = function (e) {
                if (p.dispatchEvent(n.VOLUME_STOP_TO_SCRUB), p.isVolumeScrubberScrubbing_bl = !1, p.disable_do && p.contains(p.disable_do) && p.removeChild(p.disable_do), e) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    FWDRAPUtils.hitTest(p.volumeScrubber_do.screen, t.screenX, t.screenY) || p.ttm2 && p.ttm2.hide()
                }
                p.isMobile_bl ? p.hasPointerEvent_bl ? (window.removeEventListener("pointermove", p.volumeScrubberMoveHandler), window.removeEventListener("pointerup", p.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", p.volumeScrubberMoveHandler), window.removeEventListener("touchend", p.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", p.volumeScrubberMoveHandler), window.removeEventListener("mouseup", p.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", p.volumeScrubberMoveHandler), document.detachEvent("onmouseup", p.volumeScrubberEndHandler))
            }, this.disableVolumeScrubber = function () {
                p.isVolumeScrubberDisabled_bl = !0, p.volumeScrubber_do.setButtonMode(!1), p.volumeScrubberEndHandler()
            }, this.enableVolumeScrubber = function () {
                p.isVolumeScrubberDisabled_bl = !1, p.volumeScrubber_do.setButtonMode(!0)
            }, this.updateVolumeScrubber = function (e) {
                var t = parseInt(e * p.volumeScrubberWidth);
                p.volume = e, p.volumeScrubberDrag_do.setWidth(t), t < 1 && p.isVolumeScrubberLineVisible_bl ? (p.isVolumeScrubberLineVisible_bl = !1, FWDAnimation.to(p.volumeScrubberBarLine_do, .5, {
                    alpha: 0
                })) : 1 < t && !p.isVolumeScrubberLineVisible_bl && (p.isVolumeScrubberLineVisible_bl = !0, FWDAnimation.to(p.volumeScrubberBarLine_do, .5, {
                    alpha: 1
                })), t > p.volumeScrubberWidth - p.scrubbersOffsetWidth && (t = p.volumeScrubberWidth - p.scrubbersOffsetWidth), FWDAnimation.to(p.volumeScrubberBarLine_do, .8, {
                    x: t,
                    ease: Expo.easeOut
                })
            }, this.updateVolume = function (e, t) {
                p.volume = e, p.volume <= 1e-6 ? (p.isMute_bl = !0, p.volume = 1e-6) : .989 <= p.volume ? (p.isMute_bl = !1, p.volume = 1) : p.isMute_bl = !1, 1e-6 == p.volume ? p.volumeButton_do && p.volumeButton_do.setDisabledState() : p.volumeButton_do && p.volumeButton_do.setEnabledState(), p.volumeScrubberBarLine_do && p.updateVolumeScrubber(p.volume), t || p.dispatchEvent(n.CHANGE_VOLUME, {
                    percent: p.volume
                })
            }, this.setupPlaylistButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.playlistButton_do = new FWDRAPSimpleButton(p.playlistN_img, _.playlistSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.playlistButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.playlistButtonShowToolTipHandler), p.playlistButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.playlistButtonOnMouseUpHandler), p.playlistButton_do.setY(parseInt((p.stageHeight - p.playlistButton_do.h) / 2)), p.buttons_ar.push(p.playlistButton_do), p.mainHolder_do.addChild(p.playlistButton_do), p.showPlayListByDefault_bl && p.setPlaylistButtonState("selected")
            }, this.playlistButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.playlistButton_do, p.playlistButtonToolTip_do, e.e)
            }, this.playlistButtonOnMouseUpHandler = function () {
                p.playlistButton_do.isSelectedFinal_bl ? p.dispatchEvent(n.HIDE_PLAYLIST) : p.dispatchEvent(n.SHOW_PLAYLIST)
            }, this.setPlaylistButtonState = function (e) {
                p.playlistButton_do && ("selected" == e ? p.playlistButton_do.setSelected() : "unselected" == e && p.playlistButton_do.setUnselected())
            }, this.setupCategoriesButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.categoriesButton_do = new FWDRAPSimpleButton(p.categoriesN_img, _.categoriesSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.categoriesButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.categoriesButtonShowTooltipHandler), p.categoriesButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.categoriesButtonOnMouseUpHandler), p.categoriesButton_do.setY(parseInt((p.stageHeight - p.categoriesButton_do.h) / 2)), p.buttons_ar.push(p.categoriesButton_do), p.mainHolder_do.addChild(p.categoriesButton_do)
            }, this.categoriesButtonShowTooltipHandler = function (e) {
                p.showToolTip(p.categoriesButton_do, p.playlistsButtonToolTip_do, e.e)
            }, this.categoriesButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.SHOW_CATEGORIES)
            }, this.setCategoriesButtonState = function (e) {
                p.categoriesButton_do && ("selected" == e ? p.categoriesButton_do.setSelected() : "unselected" == e && p.categoriesButton_do.setUnselected())
            }, this.setupLoopButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.loopButton_do = new FWDRAPSimpleButton(p.replayN_img, _.replaySPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.loopButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.loopButtonShowTooltipHandler), p.loopButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.loopButtonOnMouseUpHandler), p.loopButton_do.setY(parseInt((p.stageHeight - p.loopButton_do.h) / 2)), p.buttons_ar.push(p.loopButton_do), p.mainHolder_do.addChild(p.loopButton_do), p.loop_bl && p.setLoopStateButton("selected")
            }, this.loopButtonShowTooltipHandler = function (e) {
                p.showToolTip(p.loopButton_do, p.loopButtonToolTip_do, e.e)
            }, this.loopButtonOnMouseUpHandler = function () {
                p.loopButton_do.isSelectedFinal_bl ? p.dispatchEvent(n.DISABLE_LOOP) : p.dispatchEvent(n.ENABLE_LOOP)
            }, this.setLoopStateButton = function (e) {
                p.loopButton_do && ("selected" == e ? p.loopButton_do.setSelected() : "unselected" == e && p.loopButton_do.setUnselected())
            }, this.setupDownloadButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.downloadButton_do = new FWDRAPSimpleButton(p.downloaderN_img, _.downloaderSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.downloadButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.downloadButtonShowToolTipHandler), p.downloadButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.downloadButtonOnMouseUpHandler), p.downloadButton_do.setX(-300), p.downloadButton_do.setY(parseInt((p.stageHeight - p.downloadButton_do.h) / 2)), p.mainHolder_do.addChild(p.downloadButton_do)
            }, this.downloadButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.downloadButton_do, p.downloadButtonToolTip_do, e.e)
            }, this.downloadButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.DOWNLOAD_MP3)
            }, this.setupBuyButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.buyButton_do = new FWDRAPSimpleButton(_.buyN_img, _.buySPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.buyButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.buyButtonShowToolTipHandler), p.buyButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.buyButtonOnMouseUpHandler), p.buyButton_do.setX(-300), p.buyButton_do.setY(parseInt((p.stageHeight - p.buyButton_do.h) / 2)), p.mainHolder_do.addChild(p.buyButton_do)
            }, this.buyButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.buyButton_do, p.buyButtonToolTip_do, e.e)
            }, this.buyButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.BUY)
            }, this.setupPlaybacRateButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.playbackRateButton_do = new FWDRAPSimpleButton(_.playbackRateNormal_img, _.playbackRateSelectedPath_str, null, !0, _.useHEXColorsForSkin_bl, _.normalButtonsColor_str, _.selectedButtonsColor_str), p.playbackRateButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.playbacRateButtonShowToolTipHandler), p.playbackRateButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.playbacRateButtonOnMouseUpHandler), p.buttons_ar.push(p.playbackRateButton_do), p.mainHolder_do.addChild(p.playbackRateButton_do)
            }, this.playbacRateButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.playbackRateButton_do, p.playbackRateButtonToolTip_do, e.e)
            }, this.playbacRateButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.SHOW_PLAYBACKRATE)
            }, this.setupShuffleButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.shuffleButton_do = new FWDRAPSimpleButton(p.shuffleN_img, _.shuffleSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.shuffleButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.shuffleButtonShowToolTipHandler), p.shuffleButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.shuffleButtonOnMouseUpHandler), p.shuffleButton_do.setY(parseInt((p.stageHeight - p.shuffleButton_do.h) / 2)), p.buttons_ar.push(p.shuffleButton_do), p.mainHolder_do.addChild(p.shuffleButton_do), !p.loop_bl && p.shuffle_bl && p.setShuffleButtonState("selected")
            }, this.shuffleButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.shuffleButton_do, p.shuffleButtonToolTip_do, e.e)
            }, this.shuffleButtonOnMouseUpHandler = function () {
                p.shuffleButton_do.isSelectedFinal_bl ? p.dispatchEvent(n.DISABLE_SHUFFLE) : p.dispatchEvent(n.ENABLE_SHUFFLE)
            }, this.setShuffleButtonState = function (e) {
                p.shuffleButton_do && ("selected" == e ? p.shuffleButton_do.setSelected() : "unselected" == e && p.shuffleButton_do.setUnselected())
            }, this.setupShareButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.shareButton_do = new FWDRAPSimpleButton(p.shareN_img, _.shareSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.shareButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.shareButtonShowToolTipHandler), p.shareButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.faceboolButtonOnMouseUpHandler), p.shareButton_do.setY(parseInt((p.stageHeight - p.shareButton_do.h) / 2)), p.buttons_ar.push(p.shareButton_do), p.mainHolder_do.addChild(p.shareButton_do)
            }, this.shareButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.shareButton_do, p.shareButtonToolTip_do, e.e)
            }, this.faceboolButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.SHARE)
            }, this.setupPopupButton = function () {
                FWDRAPSimpleButton.setPrototype(), p.popupButton_do = new FWDRAPSimpleButton(p.popupN_img, _.popupSPath_str, void 0, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), p.popupButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, p.popupButtonShowToolTipHandler), p.popupButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, p.popupButtonOnMouseUpHandler), p.popupButton_do.setY(parseInt((p.stageHeight - p.popupButton_do.h) / 2)), p.buttons_ar.push(p.popupButton_do), p.mainHolder_do.addChild(p.popupButton_do)
            }, this.popupButtonShowToolTipHandler = function (e) {
                p.showToolTip(p.popupButton_do, p.populButtonToolTip_do, e.e)
            }, this.popupButtonOnMouseUpHandler = function () {
                p.dispatchEvent(n.POPUP)
            }, this.disableControllerWhileLoadingPlaylist = function () {
                p.prevButton_do.disable(), p.playPauseButton_do.disable(), p.nextButton_do.disable(), p.downloadButton_do && p.downloadButton_do.disable(), p.buyButton_do && p.buyButton_do.disable(), p.playlistButton_do && p.playlistButton_do.disable(!0), p.shareButton_do && p.shareButton_do.disable(), p.updateTime("...", "..."), p.setTitle("...")
            }, this.enableControllerWhileLoadingPlaylist = function () {
                p.prevButton_do.enable(), p.playPauseButton_do.enable(), p.nextButton_do.enable(), p.downloadButton_do && p.downloadButton_do.enable(), p.buyButton_do && p.buyButton_do.enable(), p.playlistButton_do && p.playlistButton_do.enable(), p.shareButton_do && p.shareButton_do.enable()
            }, p.updateHEXColors = function (e, t) {
                p.normalColor_str = e, p.selectedColor_str = t, FWDRAPUtils.changeCanvasHEXColor(p.mainScrubberDragLeft_img, p.mainScrubberDragLeft_canvas, e);
                try {
                    FWDRAPUtils.changeCanvasHEXColor(p.volumeScrubberDragBottom_img, p.volumeScrubberDragBottom_canvas, e)
                } catch (e) {}
                var o = FWDRAPUtils.changeCanvasHEXColor(p.mainScrubberMiddleImage, p.mainSCrubberMiddleCanvas, e, !0);
                p.mainScrubberDragMiddle_do.getStyle().background = "url('" + o.src + "') repeat-x";
                try {
                    FWDRAPUtils.changeCanvasHEXColor(p.volumeScrubberDragLeft_img, p.volumeScrubberDragLeft_canvas, e), p.volumeScrubberDragMiddle_do.getStyle().background = "url('" + o.src + "') repeat-x"
                } catch (e) {}
                if (p.playPauseButton_do.updateHEXColors(e, t), p.volumeButton_do && p.volumeButton_do.updateHEXColors(e, t), p.playlistButton_do && p.playlistButton_do.updateHEXColors(e, t), p.downloadButton_do && p.downloadButton_do.updateHEXColors(e, t), p.infoButton_do && p.infoButton_do.updateHEXColors(e, t), p.categoriesButton_do && p.categoriesButton_do.updateHEXColors(e, t), p.nextButton_do && p.nextButton_do.updateHEXColors(e, t), p.shareButton_do && p.shareButton_do.updateHEXColors(e, t), p.prevButton_do && p.prevButton_do.updateHEXColors(e, t), f.fullScreenButton_do && f.fullScreenButton_do.updateHEXColors(e, t), p.loopButton_do && p.loopButton_do.updateHEXColors(e, t), p.shuffleButton_do && p.shuffleButton_do.updateHEXColors(e, t), p.buyButton_do && p.buyButton_do.updateHEXColors(e, t), p.popupButton_do && p.popupButton_do.updateHEXColors(e, t), p.playbackRateButton_do && p.playbackRateButton_do.updateHEXColors(e, t), p.currentTime_do && (p.currentTime_do.getStyle().color = e), p.totalTime_do && (p.totalTime_do.getStyle().color = e), p.ytbButtons_ar)
                    for (var s = 0; s < p.totalYtbButtons; s++) {
                        var i = p.ytbButtons_ar[s];
                        i.normalColor_str = e, i.selectedColor_str = t, i.isSelected_bl ? i.isSelected_bl || i.setSelectedState() : i.setNormalState()
                    }
            }, this.init()
        };
        n.setPrototype = function () {
            n.prototype = new FWDRAPDisplayObject("div")
        }, n.SHOW_ATOB = "showAToB", n.SHOW_PLAYBACKRATE = "showPlaybackRate", n.SHARE = "shareShare", n.PLAY_NEXT = "playNext", n.PLAY_PREV = "playPrev", n.PLAY = "play", n.PAUSE = "pause", n.VOLUME_START_TO_SCRUB = "volumeStartToScrub", n.VOLUME_STOP_TO_SCRUB = "volumeStopToScrub", n.START_TO_SCRUB = "startToScrub", n.SCRUB = "scrub", n.SCRUB_PLAYLIST_ITEM = "scrubPlaylistItem", n.STOP_TO_SCRUB = "stopToScrub", n.CHANGE_VOLUME = "changeVolume", n.SHOW_CATEGORIES = "showCategories", n.SHOW_PLAYLIST = "showPlaylist", n.HIDE_PLAYLIST = "hidePlaylist", n.ENABLE_LOOP = "enableLoop", n.DISABLE_LOOP = "disableLoop", n.ENABLE_SHUFFLE = "enableShuffle", n.DISABLE_SHUFFLE = "disableShuffle", n.POPUP = "popup", n.DOWNLOAD_MP3 = "downloadMp3", n.BUY = "buy", n.prototype = null, window.FWDRAPController = n
    }(), window.FWDRAPDisplayObject = function (e, t, o, s) {
        var i = this;
        i.listeners = {
            events_ar: []
        }, i.type = e, this.children_ar = [], this.style, this.screen, this.transform, this.position = t || "absolute", this.overflow = o || "hidden", this.display = s || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDRAPUtils.hasTransform3d, this.hasTransform2d_bl = FWDRAPUtils.hasTransform2d, (FWDRAPUtils.isIE || FWDRAPUtils.isIE11 && !FWDRAPUtils.isMobile) && (i.hasTransform3d_bl = !1, i.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, i.init = function () {
            i.setScreen()
        }, i.getTransform = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== i.screen.style[e]) return e;
            return !1
        }, i.getOpacityType = function () {
            return void 0 !== i.screen.style.opacity ? "opacity" : "filter"
        }, i.setScreen = function (e) {
            "img" == i.type && e ? i.screen = e : i.screen = document.createElement(i.type), i.setMainProperties()
        }, i.setMainProperties = function () {
            i.transform = i.getTransform(), i.setPosition(i.position), i.setOverflow(i.overflow), i.opacityType = i.getOpacityType(), "opacity" == i.opacityType && (i.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), i.screen.style.left = "0px", i.screen.style.top = "0px", i.screen.style.margin = "0px", i.screen.style.padding = "0px", i.screen.style.maxWidth = "none", i.screen.style.maxHeight = "none", i.screen.style.border = "none", i.screen.style.lineHeight = "1", i.screen.style.backgroundColor = "transparent", i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden", i.screen.style.MozImageRendering = "optimizeSpeed", i.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (i.setWidth(i.screen.width), i.setHeight(i.screen.height))
        }, i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.setSelectable = function (e) {
            e || (i.screen.style.userSelect = "none", i.screen.style.MozUserSelect = "none", i.screen.style.webkitUserSelect = "none", i.screen.style.khtmlUserSelect = "none", i.screen.style.oUserSelect = "none", i.screen.style.msUserSelect = "none", i.screen.msUserSelect = "none", i.screen.ondragstart = function (e) {
                return !1
            }, i.screen.onselectstart = function () {
                return !1
            }, i.screen.ontouchstart = function () {
                return !1
            }, i.screen.style.webkitTouchCallout = "none", i.hasBeenSetSelectable_bl = !0)
        }, i.getScreen = function () {
            return i.screen
        }, i.setVisible = function (e) {
            i.visible = e, 1 == i.visible ? i.screen.style.visibility = "visible" : i.screen.style.visibility = "hidden"
        }, i.getVisible = function () {
            return i.visible
        }, i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%", i.screen.style.height = "100%"
        }, i.getStyle = function () {
            return i.screen.style
        }, i.setOverflow = function (e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, i.setPosition = function (e) {
            i.position = e, i.screen.style.position = i.position
        }, i.setDisplay = function (e) {
            i.display = e, i.screen.style.display = i.display
        }, i.setButtonMode = function (e) {
            i.buttonMode = e, 1 == i.buttonMode ? i.screen.style.cursor = "pointer" : i.screen.style.cursor = "default"
        }, i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        }, i.setInnerHTML = function (e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, i.getInnerHTML = function () {
            return i.innerHTML
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.setAlpha = function (e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, i.getAlpha = function () {
            return i.alpha
        }, i.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, i.getGlobalX = function () {
            return i.getRect().left
        }, i.getGlobalY = function () {
            return i.getRect().top
        }, i.setX = function (e) {
            i.x = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.left = i.x + "px"
        }, i.getX = function () {
            return i.x
        }, i.setY = function (e) {
            i.y = e, i.hasTransform3d_bl ? i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)" : i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)" : i.screen.style.top = i.y + "px"
        }, i.getY = function () {
            return i.y
        }, i.setWidth = function (e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, i.getWidth = function () {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function (e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, i.getHeight = function () {
            return "div" == i.type || "input" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, i.addChild = function (e) {
            i.contains(e) && i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 1), i.children_ar.push(e), i.screen.appendChild(e.screen)
        }, i.removeChild = function (e) {
            if (!i.contains(e)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
            i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 1), i.screen.removeChild(e.screen)
        }, i.contains = function (e) {
            return -1 != FWDRAPUtils.indexOfArray(i.children_ar, e)
        }, i.addChildAt = function (e, t) {
            if (0 == i.getNumChildren()) i.children_ar.push(e), i.screen.appendChild(e.screen);
            else if (1 == t) i.screen.insertBefore(e.screen, i.children_ar[0].screen), i.screen.insertBefore(i.children_ar[0].screen, e.screen), i.contains(e) ? i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 0, e);
            else {
                if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                i.screen.insertBefore(e.screen, i.children_ar[t].screen), i.contains(e) ? i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 1, e) : i.children_ar.splice(FWDRAPUtils.indexOfArray(i.children_ar, e), 0, e)
            }
        }, i.getChildAt = function (e) {
            if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == i.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        }, i.removeChildAtZero = function () {
            i.screen.removeChild(i.children_ar[0].screen), i.children_ar.shift()
        }, i.getNumChildren = function () {
            return i.children_ar.length
        }, i.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, i.dispatchEvent = function (e, t) {
            if (null != this.listeners) {
                if (null == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                    if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                        if (t)
                            for (var i in t) this.listeners.events_ar[o][i] = t[i];
                        this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                    }
            }
        }, i.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, i.disposeImage = function () {
            "img" == i.type && (i.screen.src = null)
        }, i.destroy = function () {
            i.hasBeenSetSelectable_bl && (i.screen.ondragstart = null, i.screen.onselectstart = null, i.screen.ontouchstart = null), i.screen.removeAttribute("style"), i.listeners = [], i.listeners = null, i.children_ar = [], i.children_ar = null, i.style = null, i.screen = null, i.transform = null, i.position = null, i.overflow = null, i.display = null, i.visible = null, i.buttonMode = null, i.x = null, i.y = null, i.w = null, i.h = null, i.rect = null, i.alpha = null, i.innerHTML = null, i.opacityType = null, i.isHtml5_bl = null, i.hasTransform3d_bl = null, i.hasTransform2d_bl = null, i = null
        }, i.init()
    }, void 0 === asual) var asual = {};
void 0 === asual.util && (asual.util = {}), asual.util.Browser = new function () {
    var e = navigator.userAgent.toLowerCase(),
        t = /webkit/.test(e),
        o = /opera/.test(e),
        s = /msie/.test(e) && !/opera/.test(e),
        i = /mozilla/.test(e) && !/(compatible|webkit)/.test(e),
        n = parseFloat(s ? e.substr(e.indexOf("msie") + 4) : (e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function () {
        return "[class Browser]"
    }, this.getVersion = function () {
        return n
    }, this.isMSIE = function () {
        return s
    }, this.isSafari = function () {
        return t
    }, this.isOpera = function () {
        return o
    }, this.isMozilla = function () {
        return i
    }
}, asual.util.Events = new function () {
    var n = "DOMContentLoaded",
        t = "onstop",
        o = window,
        s = document,
        r = [],
        i = asual.util,
        e = i.Browser,
        l = e.isMSIE(),
        a = e.isSafari();
    this.toString = function () {
        return "[class Events]"
    }, this.addListener = function (e, t, o) {
        r.push({
            o: e,
            t: t,
            l: o
        }), t == n && (l || a) || (e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o))
    }, this.removeListener = function (e, t, o) {
        for (var s, i = 0; s = r[i]; i++)
            if (s.o == e && s.t == t && s.l == o) {
                r.splice(i, 1);
                break
            } t == n && (l || a) || (e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent && e.detachEvent("on" + t, o))
    };

    function d() {
        for (var e, t = 0; e = r[t]; t++) e.t != n && i.Events.removeListener(e.o, e.t, e.l)
    }(l || a) && function () {
        try {
            (l && s.body || !/loaded|complete/.test(s.readyState)) && s.documentElement.doScroll("left")
        } catch (e) {
            return setTimeout(arguments.callee, 0)
        }
        for (var e, t = 0; e = r[t]; t++) e.t == n && e.l.call(null)
    }(), l && o.attachEvent && o.attachEvent("onbeforeunload", function () {
        if ("interactive" == s.readyState) {
            function e() {
                s.detachEvent(t, e), d()
            }
            s.attachEvent(t, e), o.setTimeout(function () {
                s.detachEvent(t, e)
            }, 0)
        }
    }), this.addListener(o, "unload", d)
}, asual.util.Functions = new function () {
    this.toString = function () {
        return "[class Functions]"
    }, this.bind = function (e, t, o) {
        for (var s, i = 2, n = []; s = arguments[i]; i++) n.push(s);
        return function () {
            return e.apply(t, n)
        }
    }
};
var FWDAddressEvent = function (e) {
    this.toString = function () {
        return "[object FWDAddressEvent]"
    }, this.type = e, this.target = [FWDAddress][0], this.value = FWDAddress.getValue(), this.path = FWDAddress.getPath(), this.pathNames = FWDAddress.getPathNames(), this.parameters = {};
    for (var t = FWDAddress.getParameterNames(), o = 0, s = t.length; o < s; o++) this.parameters[t[o]] = FWDAddress.getParameter(t[o]);
    this.parameterNames = t
};
FWDAddressEvent.INIT = "init", FWDAddressEvent.CHANGE = "change", FWDAddressEvent.INTERNAL_CHANGE = "internalChange", FWDAddressEvent.EXTERNAL_CHANGE = "externalChange";
var FWDAddress = new function () {
    var _getHash = function () {
            var e = _l.href.indexOf("#");
            return -1 != e ? _ec(_dc(_l.href.substr(e + 1))) : ""
        },
        _getWindow = function () {
            try {
                return top.document, top
            } catch (e) {
                return window
            }
        },
        _strictCheck = function (e, t) {
            return _opts.strict && (e = t ? "/" != e.substr(0, 1) ? "/" + e : e : "" == e ? "/" : e), e
        },
        _ieLocal = function (e, t) {
            return _msie && "file:" == _l.protocol ? t ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?") : e
        },
        _searchScript = function (e) {
            if (e.childNodes)
                for (var t, o = 0, s = e.childNodes.length; o < s; o++)
                    if (e.childNodes[o].src && (_url = String(e.childNodes[o].src)), t = _searchScript(e.childNodes[o])) return t
        },
        _titleCheck = function () {
            _d.title != _title && -1 != _d.title.indexOf("#") && (_d.title = _title)
        },
        _listen = function () {
            if (!_silent) {
                var e = _getHash(),
                    t = !(_value == e);
                _safari && _version < 523 ? _length != _h.length && (_length = _h.length, typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1)) : _msie && t ? _version < 7 ? _l.reload() : this.setValue(e) : t && (_value = e, _update.call(this, !1)), _msie && _titleCheck.call(this)
            }
        },
        _bodyClick = function (e) {
            if (0 < _popup.length) {
                var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
                typeof _popup[3] != UNDEFINED && eval(_popup[3])
            }
            _popup = []
        },
        _swfChange = function () {
            for (var e, t, o = 0, s = FWDAddress.getValue(), i = "setFWDAddressValue"; e = _ids[o]; o++)
                if (t = document.getElementById(e))
                    if (t.parentNode && typeof t.parentNode.so != UNDEFINED) t.parentNode.so.call(i, s);
                    else {
                        if (!t || typeof t[i] == UNDEFINED) {
                            var n = t.getElementsByTagName("object"),
                                r = t.getElementsByTagName("embed");
                            t = n[0] && typeof n[0][i] != UNDEFINED ? n[0] : r[0] && typeof r[0][i] != UNDEFINED ? r[0] : null
                        }
                        t && t[i](s)
                    }
            else(t = document[e]) && typeof t[i] != UNDEFINED && t[i](s)
        },
        _jsDispatch = function (e) {
            this.dispatchEvent(new FWDAddressEvent(e)), typeof this["on" + (e = e.substr(0, 1).toUpperCase() + e.substr(1))] == FUNCTION && this["on" + e]()
        },
        _jsInit = function () {
            _util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
        },
        _jsChange = function () {
            _swfChange(), _jsDispatch.call(this, "change")
        },
        _update = function (e) {
            _jsChange.call(this), e ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
        },
        _track = function () {
            var e = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
                t = _t[_opts.tracker];
            typeof t == FUNCTION ? t(e) : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION ? _t.pageTracker._trackPageview(e) : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(e)
        },
        _htmlWrite = function () {
            var e = _frame.contentWindow.document;
            e.open(), e.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";<\/script></head></html>'), e.close()
        },
        _htmlLoad = function () {
            var e = _frame.contentWindow;
            e.location.href;
            (_value = typeof e[ID] != UNDEFINED ? e[ID] : "") != _getHash() && (_update.call(FWDAddress, !1), _l.hash = _ieLocal(_value, TRUE))
        },
        _load = function () {
            if (!_loaded) {
                if (_loaded = TRUE, _msie && _version < 8) {
                    var e = _d.getElementsByTagName("frameset")[0];
                    _frame = _d.createElement((e ? "" : "i") + "frame"), e ? (e.insertAdjacentElement("beforeEnd", _frame), e[e.cols ? "cols" : "rows"] += ",0", _frame.src = "javascript:false", _frame.noResize = !0, _frame.frameBorder = _frame.frameSpacing = 0) : (_frame.src = "javascript:false", _frame.style.display = "none", _d.body.insertAdjacentElement("afterBegin", _frame)), _st(function () {
                        _events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
                    }, 50)
                } else _safari && (_version < 418 && (_d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>', _form = _d.getElementById(ID)), typeof _l[ID] == UNDEFINED && (_l[ID] = {}), typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(",")));
                _st(_functions.bind(function () {
                    _jsInit.call(this), _jsChange.call(this), _track.call(this)
                }, this), 1), _msie && 8 <= _version ? (_d.body.onhashchange = _functions.bind(_listen, this), _si(_functions.bind(_titleCheck, this), 50)) : _si(_functions.bind(_listen, this), 50)
            }
        },
        ID = "swfaddress",
        FUNCTION = "function",
        UNDEFINED = "undefined",
        TRUE = !0,
        FALSE = !1,
        _util = asual.util,
        _browser = _util.Browser,
        _events = _util.Events,
        _functions = _util.Functions,
        _version = _browser.getVersion(),
        _msie = _browser.isMSIE(),
        _mozilla = _browser.isMozilla(),
        _opera = _browser.isOpera(),
        _safari = _browser.isSafari(),
        _supported = FALSE,
        _t = _getWindow(),
        _d = _t.document,
        _h = _t.history,
        _l = _t.location,
        _si = setInterval,
        _st = setTimeout,
        _dc = decodeURI,
        _ec = encodeURI,
        _frame, _form, _url, _title = _d.title,
        _length = _h.length,
        _silent = FALSE,
        _loaded = FALSE,
        _justset = TRUE,
        _juststart = TRUE,
        _ref = this,
        _stack = [],
        _ids = [],
        _popup = [],
        _listeners = {},
        _value = _getHash(),
        _opts = {
            history: TRUE,
            strict: TRUE
        };
    if (_msie && _d.documentMode && _d.documentMode != _version && (_version = 8 != _d.documentMode ? 7 : 8), _supported = _mozilla && 1 <= _version || _msie && 6 <= _version || _opera && 9.5 <= _version || _safari && 312 <= _version, _supported) {
        _opera && (history.navigationMode = "compatible");
        for (var i = 1; i < _length; i++) _stack.push("");
        _stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document);
        var _qi = _url ? _url.indexOf("?") : -1;
        if (-1 != _qi)
            for (var param, params = _url.substr(_qi + 1).split("&"), i = 0, p; p = params[i]; i++) param = p.split("="), /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])), /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1]);
        _msie && _titleCheck.call(this), window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)), _events.addListener(_t, "load", _functions.bind(_load, this))
    } else !_supported && -1 != _l.href.indexOf("#") || _safari && _version < 418 && -1 != _l.href.indexOf("#") && "" != _l.search ? (_d.open(), _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>'), _d.close()) : _track();
    this.toString = function () {
            return "[class FWDAddress]"
        }, this.back = function () {
            _h.back()
        }, this.forward = function () {
            _h.forward()
        }, this.up = function () {
            var e = this.getPath();
            this.setValue(e.substr(0, e.lastIndexOf("/", e.length - 2) + ("/" == e.substr(e.length - 1) ? 1 : 0)))
        }, this.go = function (e) {
            _h.go(e)
        }, this.href = function (e, t) {
            "_self" == (t = typeof t != UNDEFINED ? t : "_self") ? self.location.href = e: "_top" == t ? _l.href = e : "_blank" == t ? window.open(e) : _t.frames[t].location.href = e
        }, this.popup = function (url, name, options, handler) {
            try {
                var popup = window.open(url, name, eval(options));
                typeof handler != UNDEFINED && eval(handler)
            } catch (e) {}
            _popup = arguments
        }, this.getIds = function () {
            return _ids
        }, this.getId = function (e) {
            return _ids[0]
        }, this.setId = function (e) {
            _ids[0] = e
        }, this.addId = function (e) {
            this.removeId(e), _ids.push(e)
        }, this.removeId = function (e) {
            for (var t = 0; t < _ids.length; t++)
                if (e == _ids[t]) {
                    _ids.splice(t, 1);
                    break
                }
        }, this.addEventListener = function (e, t) {
            typeof _listeners[e] == UNDEFINED && (_listeners[e] = []), _listeners[e].push(t)
        }, this.removeEventListener = function (e, t) {
            if (typeof _listeners[e] != UNDEFINED) {
                for (var o, s = 0;
                    (o = _listeners[e][s]) && o != t; s++);
                _listeners[e].splice(s, 1)
            }
        }, this.dispatchEvent = function (e) {
            if (this.hasEventListener(e.type)) {
                e.target = this;
                for (var t, o = 0; t = _listeners[e.type][o]; o++) t(e);
                return TRUE
            }
            return FALSE
        }, this.hasEventListener = function (e) {
            return typeof _listeners[e] != UNDEFINED && 0 < _listeners[e].length
        }, this.getBaseURL = function () {
            var e = _l.href;
            return -1 != e.indexOf("#") && (e = e.substr(0, e.indexOf("#"))), "/" == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1)), e
        }, this.getStrict = function () {
            return _opts.strict
        }, this.setStrict = function (e) {
            _opts.strict = e
        }, this.getHistory = function () {
            return _opts.history
        }, this.setHistory = function (e) {
            _opts.history = e
        }, this.getTracker = function () {
            return _opts.tracker
        }, this.setTracker = function (e) {
            _opts.tracker = e
        }, this.getTitle = function () {
            return _d.title
        }, this.setTitle = function (e) {
            if (!_supported) return null;
            typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), _st(function () {
                _title = _d.title = e, _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && (_frame.contentWindow.document.title = e, _juststart = FALSE), !_justset && _mozilla && _l.replace(-1 != _l.href.indexOf("#") ? _l.href : _l.href + "#"), _justset = FALSE
            }, 10))
        }, this.getStatus = function () {
            return _t.status
        }, this.setStatus = function (e) {
            if (!_supported) return null;
            if (typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), !_safari)) {
                if ("/" == (e = _strictCheck("null" != e ? e : "", TRUE)) && (e = ""), !/http(s)?:\/\//.test(e)) {
                    var t = _l.href.indexOf("#");
                    e = (-1 == t ? _l.href : _l.href.substr(0, t)) + "#" + e
                }
                _t.status = e
            }
        }, this.resetStatus = function () {
            _t.status = ""
        }, this.getValue = function () {
            return _supported ? _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE)) : null
        }, this.setValue = function (e) {
            if (!_supported) return null;
            if (typeof e != UNDEFINED && ("null" == e && (e = ""), "/" == (e = _ec(_dc(_strictCheck(e, TRUE)))) && (e = ""), _value != e)) {
                if (_value = e, _silent = _justset = TRUE, _update.call(FWDAddress, !0), _stack[_h.length] = _value, _safari)
                    if (_opts.history)
                        if (_l[ID][_l.pathname] = _stack.toString(), _length = _h.length + 1, _version < 418) "" == _l.search && (_form.action = "#" + _value, _form.submit());
                        else if (_version < 523 || "" == _value) {
                    var t = _d.createEvent("MouseEvents");
                    t.initEvent("click", TRUE, TRUE);
                    var o = _d.createElement("a");
                    o.href = "#" + _value, o.dispatchEvent(t)
                } else _l.hash = "#" + _value;
                else _l.replace("#" + _value);
                else _value != _getHash() && (_opts.history ? _l.hash = "#" + _dc(_ieLocal(_value, TRUE)) : _l.replace("#" + _dc(_value)));
                _msie && _version < 8 && _opts.history && _st(_htmlWrite, 50), _safari ? _st(function () {
                    _silent = FALSE
                }, 1) : _silent = FALSE
            }
        }, this.getPath = function () {
            var e = this.getValue();
            return -1 != e.indexOf("?") ? e.split("?")[0] : -1 != e.indexOf("#") ? e.split("#")[0] : e
        }, this.getPathNames = function () {
            var e = this.getPath(),
                t = e.split("/");
            return "/" != e.substr(0, 1) && 0 != e.length || t.splice(0, 1), "/" == e.substr(e.length - 1, 1) && t.splice(t.length - 1, 1), t
        }, this.getQueryString = function () {
            var e = this.getValue(),
                t = e.indexOf("?");
            if (-1 != t && t < e.length) return e.substr(t + 1)
        }, this.getParameter = function (e) {
            var t = this.getValue(),
                o = t.indexOf("?");
            if (-1 != o) {
                for (var s, i = (t = t.substr(o + 1)).split("&"), n = i.length, r = []; n--;)(s = i[n].split("="))[0] == e && r.push(s[1]);
                if (0 != r.length) return 1 != r.length ? r : r[0]
            }
        }, this.getParameterNames = function () {
            var e = this.getValue(),
                t = e.indexOf("?"),
                o = [];
            if (-1 != t && "" != (e = e.substr(t + 1)) && -1 != e.indexOf("="))
                for (var s = e.split("&"), i = 0; i < s.length;) o.push(s[i].split("=")[0]), i++;
            return o
        }, this.onInit = null, this.onChange = null, this.onInternalChange = null, this.onExternalChange = null,
        function () {
            var o;
            if (typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
                var t = SWFObject.prototype.write;
                SWFObject.prototype.write = function () {
                    var e;
                    return o = arguments, this.getAttribute("version").major < 8 && (this.addVariable("$swfaddress", FWDAddress.getValue()), ("string" == typeof o[0] ? document.getElementById(o[0]) : o[0]).so = this), (e = t.apply(this, o)) && _ref.addId(this.getAttribute("id")), e
                }
            }
            if (typeof swfobject != UNDEFINED) {
                var e = swfobject.registerObject;
                swfobject.registerObject = function () {
                    o = arguments, e.apply(this, o), _ref.addId(o[0])
                };
                var s = swfobject.createSWF;
                swfobject.createSWF = function () {
                    o = arguments;
                    var e = s.apply(this, o);
                    return e && _ref.addId(o[0].id), e
                };
                var i = swfobject.embedSWF;
                swfobject.embedSWF = function () {
                    typeof (o = arguments)[8] == UNDEFINED && (o[8] = {}), typeof o[8].id == UNDEFINED && (o[8].id = o[1]), i.apply(this, o), _ref.addId(o[8].id)
                }
            }
            if (typeof UFO != UNDEFINED) {
                var n = UFO.create;
                UFO.create = function () {
                    o = arguments, n.apply(this, o), _ref.addId(o[0].id)
                }
            }
            if (typeof AC_FL_RunContent != UNDEFINED) {
                var r = AC_FL_RunContent;
                AC_FL_RunContent = function () {
                    o = arguments, r.apply(this, o);
                    for (var e = 0, t = o.length; e < t; e++) "id" == o[e] && _ref.addId(o[e + 1])
                }
            }
        }()
};
window, window.FWDRAPEventDispatcher = function () {
    this.listeners = {
        events_ar: []
    }, this.addListener = function (e, t) {
        if (null == e) throw Error("type is required.");
        if ("object" == typeof e) throw Error("type must be of type String.");
        if ("function" != typeof t) throw Error("listener must be of type Function.");
        var o = {};
        o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
    }, this.dispatchEvent = function (e, t) {
        if (null != this.listeners) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                    if (t)
                        for (var i in t) this.listeners.events_ar[o][i] = t[i];
                    this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
                }
        }
    }, this.removeListener = function (e, t) {
        if (null == e) throw Error("type is required.");
        if ("object" == typeof e) throw Error("type must be of type String.");
        if ("function" != typeof t) throw Error("listener must be of type Function." + e);
        for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
            if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                this.listeners.events_ar.splice(o, 1);
                break
            }
    }, this.destroy = function () {
        this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
    }
};
var FWDRAPFlashTest = function () {
    var u = "undefined",
        c = "object",
        h = "Shockwave Flash",
        _ = "application/x-shockwave-flash",
        f = window,
        p = document,
        m = navigator,
        s = function () {
            var e = typeof p.getElementById != u && typeof p.getElementsByTagName != u && typeof p.createElement != u,
                t = m.userAgent.toLowerCase(),
                o = m.platform.toLowerCase(),
                s = /win/.test(o || t),
                i = /mac/.test(o || t),
                n = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                r = !1,
                l = [0, 0, 0],
                a = null;
            if (typeof m.plugins != u && typeof m.plugins[h] == c) !(a = m.plugins[h].description) || typeof m.mimeTypes != u && m.mimeTypes[_] && !m.mimeTypes[_].enabledPlugin || (r = !!0, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), l[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), l[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), l[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof f.ActiveXObject != u) try {
                var d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                d && (a = d.GetVariable("$version")) && (r = !0, a = a.split(" ")[1].split(","), l = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)])
            } catch (e) {}
            return {
                w3: e,
                pv: l,
                wk: n,
                ie: r,
                win: s,
                mac: i
            }
        }();

    function e(e) {
        var t = s.pv,
            o = e.split(".");
        return o[0] = parseInt(o[0], 10), o[1] = parseInt(o[1], 10) || 0, o[2] = parseInt(o[2], 10) || 0, t[0] > o[0] || t[0] == o[0] && t[1] > o[1] || t[0] == o[0] && t[1] == o[1] && t[2] >= o[2]
    }
    return {
        hasFlashPlayerVersion: e
    }
}();

function A(t, e, o) {
    var s = e || 0,
        i = 0;
    "string" == typeof t ? (i = o || t.length, this.a = function (e) {
        return 255 & t.charCodeAt(e + s)
    }) : "unknown" == typeof t && (i = o || IEBinary_getLength(t), this.a = function (e) {
        return IEBinary_getByteAt(t, e + s)
    }), this.l = function (e, t) {
        for (var o = Array(t), s = 0; s < t; s++) o[s] = this.a(e + s);
        return o
    }, this.h = function () {
        return i
    }, this.d = function (e, t) {
        return 0 != (this.a(e) & 1 << t)
    }, this.w = function (e) {
        return (e = (this.a(e + 1) << 8) + this.a(e)) < 0 && (e += 65536), e
    }, this.i = function (e) {
        var t = this.a(e);
        return (t = (((t << 8) + this.a(e + 1) << 8) + this.a(e + 2) << 8) + (e = this.a(e + 3))) < 0 && (t += 4294967296), t
    }, this.o = function (e) {
        var t = this.a(e);
        return (t = ((t << 8) + this.a(e + 1) << 8) + (e = this.a(e + 2))) < 0 && (t += 16777216), t
    }, this.c = function (e, t) {
        for (var o = [], s = e, i = 0; s < e + t; s++, i++) o[i] = String.fromCharCode(this.a(s));
        return o.join("")
    }, this.e = function (e, t, o) {
        switch (e = this.l(e, t), o.toLowerCase()) {
        case "utf-16":
        case "utf-16le":
        case "utf-16be":
            t = o;
            var s, i = 0,
                n = 1;
            o = 0, s = Math.min(s || e.length, e.length), 254 == e[0] && 255 == e[1] ? (t = !0, i = 2) : 255 == e[0] && 254 == e[1] && (t = !1, i = 2), t && (n = 0, o = 1), t = [];
            for (var r = 0; i < s; r++) {
                var l = e[i + n],
                    a = (l << 8) + e[i + o];
                i = i + 2;
                if (0 == a) break;
                l < 216 || 224 <= l ? t[r] = String.fromCharCode(a) : (l = (e[i + n] << 8) + e[i + o], i += 2, t[r] = String.fromCharCode(a, l))
            }(e = new String(t.join(""))).g = i;
            break;
        case "utf-8":
            for (s = 0, i = Math.min(i || e.length, e.length), 239 == e[0] && 187 == e[1] && 191 == e[2] && (s = 3), n = [], o = 0; s < i && 0 != (t = e[s++]); o++) t < 128 ? n[o] = String.fromCharCode(t) : 194 <= t && t < 224 ? (r = e[s++], n[o] = String.fromCharCode(((31 & t) << 6) + (63 & r))) : 224 <= t && t < 240 ? (r = e[s++], a = e[s++], n[o] = String.fromCharCode(((255 & t) << 12) + ((63 & r) << 6) + (63 & a))) : 240 <= t && t < 245 && (t = ((7 & t) << 18) + ((63 & (r = e[s++])) << 12) + ((63 & (a = e[s++])) << 6) + (63 & (l = e[s++])) - 65536, n[o] = String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
            (e = new String(n.join(""))).g = s;
            break;
        default:
            for (i = [], n = n || e.length, s = 0; s < n && 0 != (o = e[s++]);) i[s - 1] = String.fromCharCode(o);
            (e = new String(i.join(""))).g = s
        }
        return e
    }, this.f = function (e, t) {
        t()
    }
}

function B(t, o, p) {
    function m() {
        var e = null;
        return window.XMLHttpRequest ? e = new XMLHttpRequest : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e
    }

    function s(u, c) {
        var h, o;

        function s(e) {
            var t = ~~(e[0] / h) - o;
            return t < 0 && (t = 0), (e = 1 + ~~(e[1] / h) + o) >= blockTotal && (e = blockTotal - 1), [t, e]
        }

        function i(o, s) {
            for (; f[o[0]];)
                if (o[0]++, o[0] > o[1]) return void(s && s());
            for (; f[o[1]];)
                if (o[1]--, o[0] > o[1]) return void(s && s());
            var e, t, i, n, r, l, a, d = [o[0] * h, (o[1] + 1) * h - 1];
            e = u, t = function (e) {
                parseInt(e.getResponseHeader("Content-Length"), 10) == c && (o[0] = 0, o[1] = blockTotal - 1, d[0] = 0, d[1] = c - 1), e = {
                    data: e.N || e.responseText,
                    offset: d[0]
                };
                for (var t = o[0]; t <= o[1]; t++) f[t] = e;
                s && s()
            }, i = p, n = d, r = _, l = !!s, (a = m()) ? (void 0 === l && (l = !0), t && (void 0 !== a.onload ? a.onload = function () {
                "200" == a.status || "206" == a.status ? (a.fileSize = r || a.getResponseHeader("Content-Length"), t(a)) : i && i(), a = null
            } : a.onreadystatechange = function () {
                4 == a.readyState && ("200" == a.status || "206" == a.status ? (a.fileSize = r || a.getResponseHeader("Content-Length"), t(a)) : i && i(), a = null)
            }), a.open("GET", e, l), a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined"), n && a.setRequestHeader("Range", "bytes=" + n[0] + "-" + n[1]), a.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"), a.send(null)) : i && i()
        }
        var _, e = new A("", 0, c),
            f = [];
        for (var t in o = void 0 === o ? 0 : o, blockTotal = 1 + ~~((c - 1) / (h = h || 2048)), e) e.hasOwnProperty(t) && "function" == typeof e[t] && (this[t] = e[t]);
        this.a = function (e) {
            var t;
            return i(s([e, e])), "string" == typeof (t = f[~~(e / h)]).data ? 255 & t.data.charCodeAt(e - t.offset) : "unknown" == typeof t.data ? IEBinary_getByteAt(t.data, e - t.offset) : void 0
        }, this.f = function (e, t) {
            i(s(e), t)
        }
    }
    var e, i, n;
    e = t, i = function (e) {
        e = parseInt(e.getResponseHeader("Content-Length"), 10) || -1, o(new s(t, e))
    }, (n = m()) && (i && (void 0 !== n.onload ? n.onload = function () {
        "200" == n.status && i(this), n = null
    } : n.onreadystatechange = function () {
        4 == n.readyState && ("200" == n.status && i(this), n = null)
    }), n.open("HEAD", e, !0), n.send(null))
}! function (n) {
    var r = function (e, t, o) {
        var s = this,
            i = r.prototype;
        this.screenToTest = e, this.screenToTest2 = t, this.hideDelay = o, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.hideCompleteId_to, this.hasInitialTestEvents_bl = !1, this.addSecondTestEvents_bl = !1, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isStopped_bl = !0, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, s.init = function () {}, s.start = function () {
            s.currentTime = (new Date).getTime(), clearInterval(s.checkIntervalId_int), s.checkIntervalId_int = setInterval(s.update, 100), s.addMouseOrTouchCheck(), s.isStopped_bl = !1
        }, s.stop = function () {
            clearInterval(s.checkIntervalId_int), s.isStopped_bl = !0, s.removeMouseOrTouchCheck(), s.removeMouseOrTouchCheck2()
        }, s.addMouseOrTouchCheck = function () {
            s.hasInitialTestEvents_bl || (s.hasInitialTestEvents_bl = !0, s.isMobile_bl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.addEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.addEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.addEventListener("touchstart", s.onMouseOrTouchUpdate) : n.addEventListener ? n.addEventListener("mousemove", s.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", s.onMouseOrTouchUpdate))
        }, s.removeMouseOrTouchCheck = function () {
            s.hasInitialTestEvents_bl && (s.hasInitialTestEvents_bl = !1, s.isMobile_bl ? s.hasPointerEvent_bl ? (s.screenToTest.screen.removeEventListener("pointerdown", s.onMouseOrTouchUpdate), s.screenToTest.screen.removeEventListener("MSPointerMove", s.onMouseOrTouchUpdate)) : s.screenToTest.screen.removeEventListener("touchstart", s.onMouseOrTouchUpdate) : n.removeEventListener ? n.removeEventListener("mousemove", s.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", s.onMouseOrTouchUpdate))
        }, s.addMouseOrTouchCheck2 = function () {
            s.addSecondTestEvents_bl || (s.addSecondTestEvents_bl = !0, s.screenToTest.screen.addEventListener ? s.screenToTest.screen.addEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.attachEvent && s.screenToTest.screen.attachEvent("onmousemove", s.secondTestMoveDummy))
        }, s.removeMouseOrTouchCheck2 = function () {
            s.addSecondTestEvents_bl && (s.addSecondTestEvents_bl = !1, s.screenToTest.screen.removeEventListener ? s.screenToTest.screen.removeEventListener("mousemove", s.secondTestMoveDummy) : s.screenToTest.screen.detachEvent && s.screenToTest.screen.detachEvent("onmousemove", s.secondTestMoveDummy))
        }, this.secondTestMoveDummy = function () {
            s.removeMouseOrTouchCheck2(), s.addMouseOrTouchCheck()
        }, s.onMouseOrTouchUpdate = function (e) {
            var t = FWDRAPUtils.getViewportMouseCoordinates(e);
            s.globalX != t.screenX && s.globalY != t.screenY && (s.currentTime = (new Date).getTime()), s.globalX = t.screenX, s.globalY = t.screenY, s.isMobile_bl || FWDRAPUtils.hitTest(s.screenToTest.screen, s.globalX, s.globalY) || (s.removeMouseOrTouchCheck(), s.addMouseOrTouchCheck2())
        }, s.update = function (e) {
            (new Date).getTime() > s.currentTime + s.hideDelay ? s.dispatchOnceShow_bl && (s.dispatchOnceHide_bl = !0, s.dispatchOnceShow_bl = !1, s.dispatchEvent(r.HIDE), clearTimeout(s.hideCompleteId_to), s.hideCompleteId_to = setTimeout(function () {
                s.dispatchEvent(r.HIDE_COMPLETE)
            }, 1e3)) : s.dispatchOnceHide_bl && (clearTimeout(s.hideCompleteId_to), s.dispatchOnceHide_bl = !1, s.dispatchOnceShow_bl = !0, s.dispatchEvent(r.SHOW))
        }, s.reset = function () {
            clearTimeout(s.hideCompleteId_to), s.currentTime = (new Date).getTime(), s.dispatchEvent(r.SHOW)
        }, s.destroy = function () {
            s.removeMouseOrTouchCheck(), clearInterval(s.checkIntervalId_int), s.screenToTest = null, e = null, s.init = null, s.start = null, s.stop = null, s.addMouseOrTouchCheck = null, s.removeMouseOrTouchCheck = null, s.onMouseOrTouchUpdate = null, s.update = null, s.reset = null, s.destroy = null, i.destroy(), s = i = null, r.prototype = null
        }, s.init()
    };
    r.HIDE = "hide", r.SHOW = "show", r.HIDE_COMPLETE = "hideComplete", r.setPrototype = function () {
        r.prototype = new FWDRAPEventDispatcher
    }, n.FWDRAPHider = r
}(window), document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n<\/script>\r\n"),
    function (e) {
        e.FileAPIReader = function (s, i) {
            return function (e, t) {
                var o = i || new FileReader;
                o.onload = function (e) {
                    t(new A(e.target.result))
                }, o.readAsBinaryString(s)
            }
        }
    }(this),
    function (e) {
        var t = e.p = {},
            a = {},
            o = [0, 7];
        t.t = function (e) {
            delete a[e]
        }, t.s = function () {
            a = {}
        }, t.B = function (n, r, l) {
            ((l = l || {}).dataReader || B)(n, function (i) {
                i.f(o, function () {
                    var s = "ftypM4A" == i.c(4, 7) ? ID4 : "ID3" == i.c(0, 3) ? ID3v2 : ID3v1;
                    s.m(i, function () {
                        var e, t = l.tags,
                            o = s.n(i, t);
                        t = a[n] || {};
                        for (e in o) o.hasOwnProperty(e) && (t[e] = o[e]);
                        a[n] = t, r && r()
                    })
                })
            })
        }, t.v = function (e) {
            if (!a[e]) return null;
            var t, o = {};
            for (t in a[e]) a[e].hasOwnProperty(t) && (o[t] = a[e][t]);
            return o
        }, t.A = function (e, t) {
            return a[e] ? a[e][t] : null
        }, e.ID3 = e.p, t.loadTags = t.B, t.getAllTags = t.v, t.getTag = t.A, t.clearTags = t.t, t.clearAll = t.s
    }(this),
    function (e) {
        var t = e.q = {},
            a = "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
        t.m = function (e, t) {
            var o = e.h();
            e.f([o - 128 - 1, o], t)
        }, t.n = function (e) {
            var t = e.h() - 128;
            if ("TAG" != e.c(t, 3)) return {};
            var o = e.c(3 + t, 30).replace(/\0/g, ""),
                s = e.c(33 + t, 30).replace(/\0/g, ""),
                i = e.c(63 + t, 30).replace(/\0/g, ""),
                n = e.c(93 + t, 4).replace(/\0/g, "");
            if (0 == e.a(97 + t + 28)) var r = e.c(97 + t, 28).replace(/\0/g, ""),
                l = e.a(97 + t + 29);
            else r = "", l = 0;
            return {
                version: "1.1",
                title: o,
                artist: s,
                album: i,
                year: n,
                comment: r,
                track: l,
                genre: (e = e.a(97 + t + 30)) < 255 ? a[e] : ""
            }
        }, e.ID3v1 = e.q
    }(this),
    function (e) {
        function g(e, t) {
            var o = t.a(e),
                s = t.a(e + 1),
                i = t.a(e + 2);
            return 127 & t.a(e + 3) | (127 & i) << 7 | (127 & s) << 14 | (127 & o) << 21
        }
        var y = e.D = {};
        y.b = {}, y.frames = {
            BUF: "Recommended buffer size",
            CNT: "Play counter",
            COM: "Comments",
            CRA: "Audio encryption",
            CRM: "Encrypted meta frame",
            ETC: "Event timing codes",
            EQU: "Equalization",
            GEO: "General encapsulated object",
            IPL: "Involved people list",
            LNK: "Linked information",
            MCI: "Music CD Identifier",
            MLL: "MPEG location lookup table",
            PIC: "Attached picture",
            POP: "Popularimeter",
            REV: "Reverb",
            RVA: "Relative volume adjustment",
            SLT: "Synchronized lyric/text",
            STC: "Synced tempo codes",
            TAL: "Album/Movie/Show title",
            TBP: "BPM (Beats Per Minute)",
            TCM: "Composer",
            TCO: "Content type",
            TCR: "Copyright message",
            TDA: "Date",
            TDY: "Playlist delay",
            TEN: "Encoded by",
            TFT: "File type",
            TIM: "Time",
            TKE: "Initial key",
            TLA: "Language(s)",
            TLE: "Length",
            TMT: "Media type",
            TOA: "Original artist(s)/performer(s)",
            TOF: "Original filename",
            TOL: "Original Lyricist(s)/text writer(s)",
            TOR: "Original release year",
            TOT: "Original album/Movie/Show title",
            TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
            TP2: "Band/Orchestra/Accompaniment",
            TP3: "Conductor/Performer refinement",
            TP4: "Interpreted, remixed, or otherwise modified by",
            TPA: "Part of a set",
            TPB: "Publisher",
            TRC: "ISRC (International Standard Recording Code)",
            TRD: "Recording dates",
            TRK: "Track number/Position in set",
            TSI: "Size",
            TSS: "Software/hardware and settings used for encoding",
            TT1: "Content group description",
            TT2: "Title/Songname/Content description",
            TT3: "Subtitle/Description refinement",
            TXT: "Lyricist/text writer",
            TXX: "User defined text information frame",
            TYE: "Year",
            UFI: "Unique file identifier",
            ULT: "Unsychronized lyric/text transcription",
            WAF: "Official audio file webpage",
            WAR: "Official artist/performer webpage",
            WAS: "Official audio source webpage",
            WCM: "Commercial information",
            WCP: "Copyright/Legal information",
            WPB: "Publishers official webpage",
            WXX: "User defined URL link frame",
            AENC: "Audio encryption",
            APIC: "Attached picture",
            COMM: "Comments",
            COMR: "Commercial frame",
            ENCR: "Encryption method registration",
            EQUA: "Equalization",
            ETCO: "Event timing codes",
            GEOB: "General encapsulated object",
            GRID: "Group identification registration",
            IPLS: "Involved people list",
            LINK: "Linked information",
            MCDI: "Music CD identifier",
            MLLT: "MPEG location lookup table",
            OWNE: "Ownership frame",
            PRIV: "Private frame",
            PCNT: "Play counter",
            POPM: "Popularimeter",
            POSS: "Position synchronisation frame",
            RBUF: "Recommended buffer size",
            RVAD: "Relative volume adjustment",
            RVRB: "Reverb",
            SYLT: "Synchronized lyric/text",
            SYTC: "Synchronized tempo codes",
            TALB: "Album/Movie/Show title",
            TBPM: "BPM (beats per minute)",
            TCOM: "Composer",
            TCON: "Content type",
            TCOP: "Copyright message",
            TDAT: "Date",
            TDLY: "Playlist delay",
            TENC: "Encoded by",
            TEXT: "Lyricist/Text writer",
            TFLT: "File type",
            TIME: "Time",
            TIT1: "Content group description",
            TIT2: "Title/songname/content description",
            TIT3: "Subtitle/Description refinement",
            TKEY: "Initial key",
            TLAN: "Language(s)",
            TLEN: "Length",
            TMED: "Media type",
            TOAL: "Original album/movie/show title",
            TOFN: "Original filename",
            TOLY: "Original lyricist(s)/text writer(s)",
            TOPE: "Original artist(s)/performer(s)",
            TORY: "Original release year",
            TOWN: "File owner/licensee",
            TPE1: "Lead performer(s)/Soloist(s)",
            TPE2: "Band/orchestra/accompaniment",
            TPE3: "Conductor/performer refinement",
            TPE4: "Interpreted, remixed, or otherwise modified by",
            TPOS: "Part of a set",
            TPUB: "Publisher",
            TRCK: "Track number/Position in set",
            TRDA: "Recording dates",
            TRSN: "Internet radio station name",
            TRSO: "Internet radio station owner",
            TSIZ: "Size",
            TSRC: "ISRC (international standard recording code)",
            TSSE: "Software/Hardware and settings used for encoding",
            TYER: "Year",
            TXXX: "User defined text information frame",
            UFID: "Unique file identifier",
            USER: "Terms of use",
            USLT: "Unsychronized lyric/text transcription",
            WCOM: "Commercial information",
            WCOP: "Copyright/Legal information",
            WOAF: "Official audio file webpage",
            WOAR: "Official artist/performer webpage",
            WOAS: "Official audio source webpage",
            WORS: "Official internet radio station homepage",
            WPAY: "Payment",
            WPUB: "Publishers official webpage",
            WXXX: "User defined URL link frame"
        };
        var v = {
                title: ["TIT2", "TT2"],
                artist: ["TPE1", "TP1"],
                album: ["TALB", "TAL"],
                year: ["TYER", "TYE"],
                comment: ["COMM", "COM"],
                track: ["TRCK", "TRK"],
                genre: ["TCON", "TCO"],
                picture: ["APIC", "PIC"],
                lyrics: ["USLT", "ULT"]
            },
            S = ["title", "artist", "album", "track"];
        y.m = function (e, t) {
            e.f([0, g(6, e)], t)
        }, y.n = function (e, t) {
            var o = 0;
            if (4 < (d = e.a(o + 3))) return {
                version: ">2.4"
            };
            var s = e.a(o + 4),
                i = e.d(o + 5, 7),
                n = e.d(o + 5, 6),
                r = e.d(o + 5, 5),
                l = g(o + 6, e);
            o += 10;
            if (n) o = o + ((c = e.i(o)) + 4);
            var a, d = {
                version: "2." + d + "." + s,
                major: d,
                revision: s,
                flags: {
                    unsynchronisation: i,
                    extended_header: n,
                    experimental_indicator: r
                },
                size: l
            };
            if (i) a = {};
            else {
                l = l - 10, i = e, s = t, n = {}, r = d.major;
                for (var u, c = [], h = 0; u = (s || S)[h]; h++) c = c.concat(v[u] || [u]);
                for (s = c; o < l;) {
                    h = i, u = o;
                    var _ = c = null;
                    switch (r) {
                    case 2:
                        a = h.c(u, 3);
                        var f = h.o(u + 3),
                            p = 6;
                        break;
                    case 3:
                        a = h.c(u, 4), f = h.i(u + 4), p = 10;
                        break;
                    case 4:
                        a = h.c(u, 4), f = g(u + 4, h), p = 10
                    }
                    if ("" == a) break;
                    o += p + f, s.indexOf(a) < 0 || (2 < r && (_ = {
                        message: {
                            P: h.d(u + 8, 6),
                            I: h.d(u + 8, 5),
                            M: h.d(u + 8, 4)
                        },
                        k: {
                            K: h.d(u + 8 + 1, 7),
                            F: h.d(u + 8 + 1, 3),
                            H: h.d(u + 8 + 1, 2),
                            C: h.d(u + 8 + 1, 1),
                            u: h.d(u + 8 + 1, 0)
                        }
                    }), u += p, _ && _.k.u && (g(u, h), u += 4, f -= 4), _ && _.k.C || (a in y.b ? c = y.b[a] : "T" == a[0] && (c = y.b["T*"]), c = c ? c(u, f, h, _) : void 0, c = {
                        id: a,
                        size: f,
                        description: a in y.frames ? y.frames[a] : "Unknown",
                        data: c
                    }, a in n ? (n[a].id && (n[a] = [n[a]]), n[a].push(c)) : n[a] = c))
                }
                a = n
            }
            for (var m in v)
                if (v.hasOwnProperty(m)) {
                    e: {
                        for ("string" == typeof (f = v[m]) && (f = [f]), o = void(p = 0); o = f[p]; p++)
                            if (o in a) {
                                e = a[o].data;
                                break e
                            } e = void 0
                    }
                    e && (d[m] = e)
                } for (var b in a) a.hasOwnProperty(b) && (d[b] = a[b]);
            return d
        }, e.ID3v2 = y
    }(this),
    function () {
        function l(e) {
            var t;
            switch (e) {
            case 0:
                t = "iso-8859-1";
                break;
            case 1:
                t = "utf-16";
                break;
            case 2:
                t = "utf-16be";
                break;
            case 3:
                t = "utf-8"
            }
            return t
        }
        var a = "32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
        ID3v2.b.APIC = function (e, t, o, s, i) {
            i = i || "3", s = e;
            var n = l(o.a(e));
            switch (i) {
            case "2":
                var r = o.c(e + 1, 3);
                e += 4;
                break;
            case "3":
            case "4":
                e += 1 + (r = o.e(e + 1, t - (e - s), n)).g
            }
            return i = o.a(e, 1), i = a[i], e += 1 + (n = o.e(e + 1, t - (e - s), n)).g, {
                format: r.toString(),
                type: i,
                description: n.toString(),
                data: o.l(e, s + t - e)
            }
        }, ID3v2.b.COMM = function (e, t, o) {
            var s = e,
                i = l(o.a(e)),
                n = o.c(e + 1, 3),
                r = o.e(e + 4, t - 4, i);
            return e += 4 + r.g, e = o.e(e, s + t - e, i), {
                language: n,
                O: r.toString(),
                text: e.toString()
            }
        }, ID3v2.b.COM = ID3v2.b.COMM, ID3v2.b.PIC = function (e, t, o, s) {
            return ID3v2.b.APIC(e, t, o, s, "2")
        }, ID3v2.b.PCNT = function (e, t, o) {
            return o.J(e)
        }, ID3v2.b.CNT = ID3v2.b.PCNT, ID3v2.b["T*"] = function (e, t, o) {
            var s = l(o.a(e));
            return o.e(e + 1, t - 1, s).toString()
        }, ID3v2.b.TCON = function (e, t, o) {
            return ID3v2.b["T*"].apply(this, arguments).replace(/^\(\d+\)/, "")
        }, ID3v2.b.TCO = ID3v2.b.TCON, ID3v2.b.USLT = function (e, t, o) {
            var s = e,
                i = l(o.a(e)),
                n = o.c(e + 1, 3),
                r = o.e(e + 4, t - 4, i);
            return e += 4 + r.g, e = o.e(e, s + t - e, i), {
                language: n,
                G: r.toString(),
                L: e.toString()
            }
        }, ID3v2.b.ULT = ID3v2.b.USLT
    }(),
    function (e) {
        var _ = e.r = {};
        _.types = {
            0: "uint8",
            1: "text",
            13: "jpeg",
            14: "png",
            21: "uint8"
        }, _.j = {
            "Â©alb": ["album"],
            "Â©art": ["artist"],
            "Â©ART": ["artist"],
            aART: ["artist"],
            "Â©day": ["year"],
            "Â©nam": ["title"],
            "Â©gen": ["genre"],
            trkn: ["track"],
            "Â©wrt": ["composer"],
            "Â©too": ["encoder"],
            cprt: ["copyright"],
            covr: ["picture"],
            "Â©grp": ["grouping"],
            keyw: ["keyword"],
            "Â©lyr": ["lyrics"],
            "Â©cmt": ["comment"],
            tmpo: ["tempo"],
            cpil: ["compilation"],
            disk: ["disc"]
        }, _.m = function (e, t) {
            e.f([0, 7], function () {
                ! function e(t, o, s, i) {
                    var n = t.i(o);
                    if (0 == n) i();
                    else {
                        var r = t.c(o + 4, 4); - 1 < ["moov", "udta", "meta", "ilst"].indexOf(r) ? ("meta" == r && (o += 4), t.f([o + 8, o + 8 + 8], function () {
                            e(t, o + 8, n - 8, i)
                        })) : t.f([o + (r in _.j ? 0 : n), o + n + 8], function () {
                            e(t, o + n, s, i)
                        })
                    }
                }(e, 0, e.h(), t)
            })
        }, _.n = function (e) {
            var t = {};
            return function e(t, o, s, i, n) {
                n = void 0 === n ? "" : n + "  ";
                for (var r = s; r < s + i;) {
                    var l = o.i(r);
                    if (0 == l) break;
                    var a = o.c(r + 4, 4);
                    if (-1 < ["moov", "udta", "meta", "ilst"].indexOf(a)) {
                        "meta" == a && (r += 4), e(t, o, r + 8, l - 8, n);
                        break
                    }
                    if (_.j[a]) {
                        var d = o.o(r + 16 + 1),
                            u = _.j[a];
                        if (d = _.types[d], "trkn" == a) t[u[0]] = o.a(r + 16 + 11), t.count = o.a(r + 16 + 13);
                        else {
                            a = r + 16 + 4 + 4;
                            var c, h = l - 16 - 4 - 4;
                            switch (d) {
                            case "text":
                                c = o.e(a, h, "UTF-8");
                                break;
                            case "uint8":
                                c = o.w(a);
                                break;
                            case "jpeg":
                            case "png":
                                c = {
                                    k: "image/" + d,
                                    data: o.l(a, h)
                                }
                            }
                            t[u[0]] = "comment" === u[0] ? {
                                text: c
                            } : c
                        }
                    }
                    r += l
                }
            }(t, e, 0, e.h()), t
        }, e.ID4 = e.r
    }(this),
    function (e) {
        var t = function (i, e) {
            var n = this;
            t.prototype;
            this.bk_do = null, this.textHolder_do = null, this.warningIconPath_str = e, this.show_to = null, this.isShowed_bl = !1, this.isShowedOnce_bl = !1, this.allowToRemove_bl = !0, this.init = function () {
                n.setResizableSizeAfterParent(), n.bk_do = new FWDRAPDisplayObject("div"), n.bk_do.setAlpha(.6), n.bk_do.setBkColor("#000000"), n.addChild(n.bk_do), n.textHolder_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIEAndLessThen9 || (n.textHolder_do.getStyle().font = "Arial"), n.textHolder_do.getStyle().wordWrap = "break-word", n.textHolder_do.getStyle().padding = "10px", n.textHolder_do.getStyle().paddingLeft = "42px", n.textHolder_do.getStyle().lineHeight = "18px", n.textHolder_do.getStyle().color = "#000000", n.textHolder_do.setBkColor("#EEEEEE");
                var e = new Image;
                e.src = this.warningIconPath_str, this.img_do = new FWDRAPDisplayObject("img"), this.img_do.setScreen(e), this.img_do.setWidth(28), this.img_do.setHeight(28), n.addChild(n.textHolder_do), n.addChild(n.img_do)
            }, this.showText = function (e) {
                n.isShowedOnce_bl || (n.screen.addEventListener ? n.screen.addEventListener("click", n.closeWindow) : n.screen.attachEvent && n.screen.attachEvent("onclick", n.closeWindow), n.isShowedOnce_bl = !0), n.setVisible(!1), n.textHolder_do.getStyle().paddingBottom = "10px", n.textHolder_do.setInnerHTML(e), clearTimeout(n.show_to), n.show_to = setTimeout(n.show, 60), setTimeout(function () {
                    n.positionAndResize()
                }, 10)
            }, this.show = function () {
                var e = Math.min(640, i.stageWidth - 120);
                n.isShowed_bl = !0, n.textHolder_do.setWidth(e), setTimeout(function () {
                    n.setVisible(!0), n.positionAndResize()
                }, 100)
            }, this.positionAndResize = function () {
                var e = n.textHolder_do.getWidth(),
                    t = n.textHolder_do.getHeight(),
                    o = parseInt((i.stageWidth - e) / 2),
                    s = parseInt((i.stageHeight - t) / 2);
                n.bk_do.setWidth(i.stageWidth), n.bk_do.setHeight(i.stageHeight), n.textHolder_do.setX(o), n.textHolder_do.setY(s), n.img_do.setX(o + 6), n.img_do.setY(s + parseInt((n.textHolder_do.getHeight() - n.img_do.h) / 2))
            }, this.closeWindow = function () {
                if (n.allowToRemove_bl) {
                    n.isShowed_bl = !1, clearTimeout(n.show_to);
                    try {
                        i.main_do.removeChild(n)
                    } catch (e) {}
                }
            }, this.init()
        };
        t.setPrototype = function () {
            t.prototype = new FWDRAPDisplayObject("div", "relative")
        }, t.prototype = null, e.FWDRAPInfo = t
    }(window),
    function (e) {
        var s = function (e, t) {
            var o = this;
            s.prototype;
            this.xhr = null, this.passColoseN_img = e.passColoseN_img, this.privateVideoPassword_str = e.privateVideoPassword_str, this.bk_do = null, this.mainHolder_do = null, this.passMainHolder_do = null, this.passMainHolderBk_do = null, this.passLabel_do = null, this.passInput_do = null, this.closeButton_do = null, this.backgrondPath_str = e.shareBkPath_str, this.secondaryLabelsColor_str = e.secondaryLabelsColor_str, this.inputColor_str = e.inputColor_str, this.mainLabelsColor_str = e.mainLabelsColor_str, this.passButtonNPath_str = e.passButtonNPath_str, this.passButtonSPath_str = e.passButtonSPath_str, this.inputBackgroundColor_str = e.inputBackgroundColor_str, this.borderColor_str = e.borderColor_str, this.maxTextWidth = 0, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.buttonWidth = 28, this.buttonHeight = 19, this.embedWindowCloseButtonMargins = e.buttonsMargins, this.finalEmbedPath_str = null, this.isShowed_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                o.setBackfaceVisibility(), o.mainHolder_do = new FWDRAPDisplayObject("div"), o.mainHolder_do.hasTransform3d_bl = !1, o.mainHolder_do.hasTransform2d_bl = !1, o.mainHolder_do.setBackfaceVisibility(), o.bk_do = new FWDRAPDisplayObject("div"), o.bk_do.getStyle().width = "100%", o.bk_do.getStyle().height = "100%", o.bk_do.setAlpha(.9), o.bk_do.getStyle().background = "url('" + o.backgrondPath_str + "')", o.passMainHolder_do = new FWDRAPDisplayObject("div"), o.passMainHolderBk_do = new FWDRAPDisplayObject("div"), o.passMainHolderBk_do.getStyle().background = "url('" + o.backgrondPath_str + "')", o.passMainHolderBk_do.getStyle().borderStyle = "solid", o.passMainHolderBk_do.getStyle().borderWidth = "1px", o.passMainHolderBk_do.getStyle().borderColor = o.borderColor_str, o.passLabel_do = new FWDRAPDisplayObject("div"), o.passLabel_do.setBackfaceVisibility(), o.passLabel_do.getStyle().fontFamily = "Arial", o.passLabel_do.getStyle().fontSize = "12px", o.passLabel_do.getStyle().color = o.secondaryLabelsColor_str, o.passLabel_do.getStyle().whiteSpace = "nowrap", o.passLabel_do.getStyle().fontSmoothing = "antialiased", o.passLabel_do.getStyle().webkitFontSmoothing = "antialiased", o.passLabel_do.getStyle().textRendering = "optimizeLegibility", o.passLabel_do.getStyle().padding = "0px", o.passLabel_do.setInnerHTML("Please enter password:"), o.passInput_do = new FWDRAPDisplayObject("input"), o.passInput_do.setBackfaceVisibility(), o.passInput_do.getStyle().fontFamily = "Arial", o.passInput_do.getStyle().fontSize = "12px", o.passInput_do.getStyle().backgroundColor = o.inputBackgroundColor_str, o.passInput_do.getStyle().color = o.inputColor_str, o.passInput_do.getStyle().outline = 0, o.passInput_do.getStyle().whiteSpace = "nowrap", o.passInput_do.getStyle().fontSmoothing = "antialiased", o.passInput_do.getStyle().webkitFontSmoothing = "antialiased", o.passInput_do.getStyle().textRendering = "optimizeLegibility", o.passInput_do.getStyle().padding = "6px", o.passInput_do.getStyle().paddingTop = "4px", o.passInput_do.getStyle().paddingBottom = "4px", o.passInput_do.screen.setAttribute("type", "password"), o.passInput_do.getStyle().webkitBoxShadow = "0 0 0 1000px" + o.inputBackgroundColor_str + " inset", FWDRAPSimpleSizeButton.setPrototype(), o.passButton_do = new FWDRAPSimpleSizeButton(o.passButtonNPath_str, o.passButtonSPath_str, o.buttonWidth, o.buttonHeight, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), o.passButton_do.addListener(FWDRAPSimpleSizeButton.CLICK, o.passClickHandler), FWDRAPSimpleButton.setPrototype(), o.closeButton_do = new FWDRAPSimpleButton(o.passColoseN_img, e.embedWindowClosePathS_str, void 0, !0, e.useHEXColorsForSkin_bl, e.normalButtonsColor_str, e.selectedButtonsColor_str), o.closeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, o.closeButtonOnMouseUpHandler), o.addChild(o.mainHolder_do), o.mainHolder_do.addChild(o.bk_do), o.passMainHolder_do.addChild(o.passMainHolderBk_do), o.passMainHolder_do.addChild(o.passLabel_do), o.passMainHolder_do.addChild(o.passInput_do), o.passMainHolder_do.addChild(o.passButton_do), o.mainHolder_do.addChild(o.passMainHolder_do), o.mainHolder_do.addChild(o.closeButton_do)
            }, this.closeButtonOnMouseUpHandler = function () {
                o.isShowed_bl && o.hide()
            }, this.positionAndResize = function () {
                o.stageWidth = t.stageWidth, o.stageHeight = t.stageHeight, o.maxTextWidth = Math.min(o.stageWidth - 150, 300), o.totalWidth = o.maxTextWidth + o.buttonWidth, o.positionFinal(), o.closeButton_do.setX(o.stageWidth - o.closeButton_do.w - o.embedWindowCloseButtonMargins), o.closeButton_do.setY(o.embedWindowCloseButtonMargins), o.setY(0), o.setWidth(o.stageWidth), o.setHeight(o.stageHeight), o.mainHolder_do.setWidth(o.stageWidth), o.mainHolder_do.setHeight(o.stageHeight)
            }, this.positionFinal = function () {
                var e, t = o.passLabel_do.getHeight();
                o.passLabel_do.setX(12), o.passLabel_do.setY(14), o.passInput_do.setX(10), o.passInput_do.setWidth(parseInt(o.totalWidth - 40 - o.buttonWidth)), o.passInput_do.setY(o.passLabel_do.y + t + 5), o.passButton_do.setX(10 + o.passInput_do.w + 20), o.passButton_do.setY(o.passLabel_do.y + t + 6), o.passMainHolderBk_do.setY(o.passLabel_do.y - 9), o.passMainHolderBk_do.setWidth(o.totalWidth - 2), o.passMainHolderBk_do.setHeight(o.passButton_do.y + o.passButton_do.h + 2), o.passMainHolder_do.setWidth(o.totalWidth), o.passMainHolder_do.setHeight(o.passButton_do.y + o.passButton_do.h + 14), o.passMainHolder_do.setX(Math.round((o.stageWidth - o.totalWidth) / 2)), e = o.passMainHolderBk_do.getHeight(), o.passMainHolder_do.setY(Math.round((o.stageHeight - e) / 2) - 6)
            }, this.passClickHandler = function () {
                o.privateVideoPassword_str = e.privateVideoPassword_str, e.playlist_ar[t.id].privateVideoPassword_str && (o.privateVideoPassword_str = e.playlist_ar[t.id].privateVideoPassword_str), o.privateVideoPassword_str == FWDRAPUtils.MD5(o.passInput_do.screen.value) ? o.dispatchEvent(s.CORRECT) : FWDAnimation.isTweening(o.passInput_do.screen) || FWDAnimation.to(o.passMainHolderBk_do.screen, .1, {
                    css: {
                        borderColor: "#FF0000"
                    },
                    yoyo: !0,
                    repeat: 3
                })
            }, this.updateHEXColors = function (e, t) {
                o.passButton_do.updateHEXColors(e, t), o.closeButton_do.updateHEXColors(e, t)
            }, this.showInfo = function (e, t) {
                o.infoText_do.setInnerHTML(e), o.passMainHolder_do.addChild(o.infoText_do), o.infoText_do.setWidth(o.buttonWidth), o.infoText_do.setHeight(o.buttonHeight - 4), o.infoText_do.setX(o.passButton_do.x), o.infoText_do.setY(o.passButton_do.y - 23), o.infoText_do.setAlpha(0), o.infoText_do.getStyle().color = t ? "#FF0000" : o.mainLabelsColor_str, FWDAnimation.killTweensOf(o.infoText_do), FWDAnimation.to(o.infoText_do, .16, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 7
                })
            }, this.show = function (e) {
                o.isShowed_bl || (o.isShowed_bl = !0, t.main_do.addChild(o), o.positionAndResize(), o.passButton_do.setSelectedState(), o.passInput_do.setInnerHTML(""), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && t.main_do.setSelectable(!0), clearTimeout(o.hideCompleteId_to), clearTimeout(o.showCompleteId_to), o.mainHolder_do.setY(-o.stageHeight), o.showCompleteId_to = setTimeout(o.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(o.mainHolder_do, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, this.showCompleteHandler = function () {}, this.hide = function () {
                o.isShowed_bl && (o.isShowed_bl = !1, t.customContextMenu_do && t.customContextMenu_do.enable(), o.positionAndResize(), clearTimeout(o.hideCompleteId_to), clearTimeout(o.showCompleteId_to), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && t.main_do.setSelectable(!1), o.hideCompleteId_to = setTimeout(o.hideCompleteHandler, 800), FWDAnimation.killTweensOf(o.mainHolder_do), FWDAnimation.to(o.mainHolder_do, .8, {
                    y: -o.stageHeight,
                    ease: Expo.easeInOut
                }))
            }, this.hideCompleteHandler = function () {
                t.main_do.removeChild(o), o.dispatchEvent(s.HIDE_COMPLETE)
            }, this.init()
        };
        s.setPrototype = function () {
            s.prototype = new FWDRAPDisplayObject("div")
        }, s.ERROR = "error", s.CORRECT = "correct", s.HIDE_COMPLETE = "hideComplete", s.prototype = null, e.FWDRAPPassword = s
    }(window),
    function (n) {
        var r = function (s, o) {
            var i = this;
            r.prototype;
            this.embedColoseN_img = s.embedColoseN_img, this.bk_do = null, this.mainHolder_do = null, this.closeButton_do = null, this.buttons_ar = [], this.embedWindowBackground_str = s.shareBkPath_str, this.embedWindowCloseButtonMargins = s.buttonsMargins, this.scrubbersHeight = s.mainScrubberBkLeft_img.height, this.scrubberBkMiddlePath_str = s.mainScrubberBkMiddlePath_str, this.scrubbersBkLeftAndRightWidth = s.mainScrubberBkLeft_img.width, this.useHEXColorsForSkin_bl = s.useHEXColorsForSkin_bl, this.normalButtonsColor_str = s.normalButtonsColor_str, this.selectedButtonsColor_str = s.selectedButtonsColor_str, this.mainScrubberDragMiddlePath_str = s.mainScrubberDragMiddlePath_str, this.scrubberDragLeftWidth = s.mainScrubberDragLeft_img.width, this.playbackRateWindowTextColor_str = s.playbackRateWindowTextColor_str, this.defaultPlaybackRate = s.defaultPlaybackRate, this.toolTipsButtonFontColor_str = s.toolTipsButtonFontColor_str, this.toopTipPointerUp_str = s.toopTipPointer_str, this.toopTipBk_str = s.toopTipBk_str, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.minMarginXSpace = 20, this.hSpace = 20, this.minHSpace = 10, this.vSpace = 15, this.minValue = .5, this.maxValue = 3, this.pointerWidth = 7, this.pointerHeight = 4, this.percent = 0, this.toolTip_do, this.isScrubbing_bl = !1, this.isShowed_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                i.setBackfaceVisibility(), i.mainHolder_do = new FWDRAPDisplayObject("div"), i.mainHolder_do.hasTransform3d_bl = !1, i.mainHolder_do.hasTransform2d_bl = !1, i.mainHolder_do.setBackfaceVisibility(), i.bk_do = new FWDRAPDisplayObject("div"), i.bk_do.getStyle().width = "100%", i.bk_do.getStyle().height = "100%", i.bk_do.setAlpha(.9), i.bk_do.getStyle().background = "url('" + i.embedWindowBackground_str + "')", FWDRAPSimpleButton.setPrototype(), i.closeButton_do = new FWDRAPSimpleButton(s.playbackRateWindowClooseN_img, s.playbackRateClosePathS_str, void 0, !0, s.useHEXColorsForSkin_bl, s.normalButtonsColor_str, s.selectedButtonsColor_str), i.closeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, i.closeButtonOnMouseUpHandler), i.addChild(i.mainHolder_do), i.mainHolder_do.addChild(i.bk_do), i.mainHolder_do.addChild(i.closeButton_do), this.setupScrubber(), this.setupTooltip()
            }, this.closeButtonOnMouseUpHandler = function () {
                i.isShowed_bl && i.hide(!0)
            }, this.positionAndResize = function () {
                i.stageWidth = o.stageWidth, i.stageHeight = o.stageHeight;
                var e = i.stageWidth - i.closeButton_do.w - i.embedWindowCloseButtonMargins,
                    t = i.embedWindowCloseButtonMargins;
                i.closeButton_do.setX(e), i.closeButton_do.setY(t), i.setY(0), i.setWidth(i.stageWidth), i.setHeight(i.stageHeight), i.mainHolder_do.setWidth(i.stageWidth), i.mainHolder_do.setHeight(i.stageHeight), i.positionScruber(), i.updateScrubber(i.percent)
            }, this.setupTooltip = function () {
                i.mainToolTip_do = new FWDRAPDisplayObject("div"), i.mainToolTip_do.setOverflow("visible"), i.mainToolTip_do.getStyle().background = "url('" + i.toopTipBk_str + "')", i.mainToolTip_do.setBkColor("#FF0000"), i.text_do = new FWDRAPDisplayObject("div"), i.text_do.hasTransform3d_bl = !1, i.text_do.hasTransform2d_bl = !1, i.text_do.setBackfaceVisibility(), i.text_do.setDisplay("inline"), i.text_do.getStyle().fontFamily = "Arial", i.text_do.getStyle().fontSize = "12px", i.text_do.getStyle().color = i.toolTipsButtonFontColor_str, i.text_do.getStyle().whiteSpace = "nowrap", i.text_do.getStyle().fontSmoothing = "antialiased", i.text_do.getStyle().webkitFontSmoothing = "antialiased", i.text_do.getStyle().textRendering = "optimizeLegibility", i.text_do.getStyle().padding = "6px", i.text_do.getStyle().paddingTop = "4px", i.text_do.getStyle().paddingBottom = "4px";
                var e = new Image;
                e.src = i.toopTipPointerUp_str, i.pointerUp_do = new FWDRAPDisplayObject("img"), i.pointerUp_do.setScreen(e), i.pointerUp_do.setWidth(i.pointerWidth), i.pointerUp_do.setHeight(i.pointerHeight), i.mainToolTip_do.addChild(i.pointerUp_do), i.mainToolTip_do.addChild(i.text_do), i.mainHolder_do.addChild(i.mainToolTip_do)
            }, this.setTooltipLabel = function (e) {
                if (1 == e && (e = "1.0"), e && i.text_do.setInnerHTML(e), 0 != i.mainToolTip_do.w) {
                    var t = parseInt((i.mainToolTip_do.w - i.pointerWidth) / 2),
                        o = i.mainToolTip_do.h;
                    return i.pointerUp_do.setX(t), void i.pointerUp_do.setY(o)
                }
                setTimeout(function () {
                    i.mainToolTip_do.setWidth(i.text_do.getWidth()), i.mainToolTip_do.setHeight(i.text_do.getHeight());
                    var e = parseInt((i.mainToolTip_do.w - i.pointerWidth) / 2),
                        t = i.mainToolTip_do.h;
                    i.pointerUp_do.setX(e), i.pointerUp_do.setY(t)
                }, 50)
            }, this.setupScrubber = function () {
                i.scrubber_do = new FWDRAPDisplayObject("div"), i.scrubber_do.setHeight(i.scrubbersHeight), i.scrubber_do.setButtonMode(!0), i.scrubberBkLeft_do = new FWDRAPDisplayObject("img");
                var e = new Image;
                e.src = s.mainScrubberBkLeft_img.src, i.scrubberBkLeft_do.setScreen(e), i.scrubberBkLeft_do.setWidth(s.mainScrubberBkLeft_img.wideth), i.scrubberBkLeft_do.setHeight(s.mainScrubberBkLeft_img.height), i.scrubberBkRight_do = new FWDRAPDisplayObject("img");
                var t = new Image;
                t.src = s.mainScrubberBkRight_img.src, i.scrubberBkRight_do.setScreen(t), i.scrubberBkRight_do.setWidth(s.mainScrubberBkRight_img.width), i.scrubberBkRight_do.setHeight(s.mainScrubberBkRight_img.height), (new Image).src = i.scrubberBkMiddlePath_str, i.scrubberBkMiddle_do = new FWDRAPDisplayObject("div"), i.scrubberBkMiddle_do.getStyle().background = "url('" + i.scrubberBkMiddlePath_str + "')", i.scrubberBkMiddle_do.setHeight(i.scrubbersHeight), i.scrubberBkMiddle_do.setX(i.scrubbersBkLeftAndRightWidth), i.scrubberDrag_do = new FWDRAPDisplayObject("div"), i.scrubberDrag_do.setHeight(i.scrubbersHeight), i.useHEXColorsForSkin_bl ? (i.scrubberDragLeft_do = new FWDRAPDisplayObject("div"), i.scrubberDragLeft_do.setWidth(s.mainScrubberDragLeft_img.width), i.scrubberDragLeft_do.setHeight(s.mainScrubberDragLeft_img.height), i.scrubberDragLeft_canvas = FWDRAPUtils.getCanvasWithModifiedColor(s.mainScrubberDragLeft_img, i.normalButtonsColor_str).canvas, i.scrubberDragLeft_do.screen.appendChild(i.scrubberDragLeft_canvas)) : (i.mainScrubberDragLeft_img = new Image, i.mainScrubberDragLeft_img.src = s.mainScrubberDragLeft_img.src, i.mainScrubberDragLeft_img.width = s.mainScrubberDragLeft_img.width, i.mainScrubberDragLeft_img.height = s.mainScrubberDragLeft_img.height, i.scrubberDragLeft_do = new FWDRAPDisplayObject("img"), i.scrubberDragLeft_do.setScreen(i.mainScrubberDragLeft_img)), i.mainScrubberMiddleImage = new Image, i.mainScrubberMiddleImage.src = s.mainScrubberDragMiddlePath_str, i.useHEXColorsForSkin_bl ? (i.mainScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), i.mainScrubberMiddleImage.onload = function () {
                    i.mainScrubberDragMiddle_canvas = FWDRAPUtils.getCanvasWithModifiedColor(i.mainScrubberMiddleImage, i.normalButtonsColor_str, !0), i.mainSCrubberMiddleCanvas = i.mainScrubberDragMiddle_canvas.canvas, i.mainSCrubberDragMiddleImageBackground = i.mainScrubberDragMiddle_canvas.image, i.mainScrubberDragMiddle_do.getStyle().background = "url('" + i.mainSCrubberDragMiddleImageBackground.src + "') repeat-x"
                }) : (i.mainScrubberDragMiddle_do = new FWDRAPDisplayObject("div"), i.mainScrubberDragMiddle_do.getStyle().background = "url('" + i.mainScrubberDragMiddlePath_str + "') repeat-x"), i.mainScrubberDragMiddle_do.setHeight(i.scrubbersHeight), i.mainScrubberDragMiddle_do.setX(i.scrubberDragLeftWidth), i.scrubberBarLine_do = new FWDRAPDisplayObject("img");
                var o = new Image;
                o.src = s.mainScrubberLine_img.src, i.scrubberBarLine_do.setScreen(o), i.scrubberBarLine_do.setWidth(s.mainScrubberLine_img.width), i.scrubberBarLine_do.setHeight(s.mainScrubberLine_img.height), i.scrubberBarLine_do.setAlpha(0), i.scrubberBarLine_do.hasTransform3d_bl = !1, i.scrubberBarLine_do.hasTransform2d_bl = !1, i.minTime_do = new FWDRAPDisplayObject("div"), i.minTime_do.hasTransform3d_bl = !1, i.minTime_do.hasTransform2d_bl = !1, i.minTime_do.getStyle().fontFamily = "Arial", i.minTime_do.getStyle().fontSize = "12px", i.minTime_do.getStyle().whiteSpace = "nowrap", i.minTime_do.getStyle().textAlign = "left", i.minTime_do.getStyle().color = i.playbackRateWindowTextColor_str, i.minTime_do.getStyle().fontSmoothing = "antialiased", i.minTime_do.getStyle().webkitFontSmoothing = "antialiased", i.minTime_do.getStyle().textRendering = "optimizeLegibility", i.minTime_do.setInnerHTML("0.5"), i.mainHolder_do.addChild(i.minTime_do), i.maxTime_do = new FWDRAPDisplayObject("div"), i.maxTime_do.hasTransform3d_bl = !1, i.maxTime_do.hasTransform2d_bl = !1, i.maxTime_do.getStyle().fontFamily = "Arial", i.maxTime_do.getStyle().fontSize = "12px", i.maxTime_do.getStyle().whiteSpace = "nowrap", i.maxTime_do.getStyle().textAlign = "left", i.maxTime_do.getStyle().color = i.playbackRateWindowTextColor_str, i.maxTime_do.getStyle().fontSmoothing = "antialiased", i.maxTime_do.getStyle().webkitFontSmoothing = "antialiased", i.maxTime_do.getStyle().textRendering = "optimizeLegibility", i.maxTime_do.setInnerHTML("3.0"), i.mainHolder_do.addChild(i.maxTime_do), i.scrubber_do.addChild(i.scrubberBkLeft_do), i.scrubber_do.addChild(i.scrubberBkMiddle_do), i.scrubber_do.addChild(i.scrubberBkRight_do), i.scrubber_do.addChild(i.scrubberBarLine_do), i.scrubberDrag_do.addChild(i.scrubberDragLeft_do), i.scrubberDrag_do.addChild(i.mainScrubberDragMiddle_do), i.scrubber_do.addChild(i.scrubberDrag_do), i.scrubber_do.addChild(i.scrubberBarLine_do), i.mainHolder_do.addChild(i.scrubber_do), i.isMobile_bl ? i.hasPointerEvent_bl ? (i.scrubber_do.screen.addEventListener("pointerover", i.mainScrubberOnOverHandler), i.scrubber_do.screen.addEventListener("pointerout", i.mainScrubberOnOutHandler), i.scrubber_do.screen.addEventListener("pointerdown", i.mainScrubberOnDownHandler)) : i.scrubber_do.screen.addEventListener("touchstart", i.mainScrubberOnDownHandler) : i.screen.addEventListener ? (i.scrubber_do.screen.addEventListener("mouseover", i.mainScrubberOnOverHandler), i.scrubber_do.screen.addEventListener("mouseout", i.mainScrubberOnOutHandler), i.scrubber_do.screen.addEventListener("mousedown", i.mainScrubberOnDownHandler)) : i.screen.attachEvent && (i.scrubber_do.screen.attachEvent("onmouseover", i.mainScrubberOnOverHandler), i.scrubber_do.screen.attachEvent("onmouseout", i.mainScrubberOnOutHandler), i.scrubber_do.screen.attachEvent("onmousedown", i.mainScrubberOnDownHandler))
            }, this.mainScrubberOnOverHandler = function (e) {}, this.mainScrubberOnOutHandler = function (e) {}, this.mainScrubberOnDownHandler = function (e) {
                e.preventDefault && e.preventDefault(), i.isScrubbing_bl = !0;
                var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - i.scrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > i.scruberWidth - i.scrubbersOffsetWidth && (t = i.scruberWidth - i.scrubbersOffsetWidth);
                var o = t / i.scruberWidth,
                    s = t / i.scruberWidth;
                i.disable_do && i.addChild(i.disable_do), i.updateScrubber(o), i.dispatchEvent(FWDRAPController.START_TO_SCRUB), i.dispatchEvent(FWDRAPController.SCRUB_PLAYLIST_ITEM, {
                    percent: s
                }), i.dispatchEvent(FWDRAPController.SCRUB, {
                    percent: o
                }), i.isMobile_bl ? i.hasPointerEvent_bl ? (n.addEventListener("pointermove", i.mainScrubberMoveHandler), n.addEventListener("pointerup", i.mainScrubberEndHandler)) : (n.addEventListener("touchmove", i.mainScrubberMoveHandler), n.addEventListener("touchend", i.mainScrubberEndHandler)) : n.addEventListener ? (n.addEventListener("mousemove", i.mainScrubberMoveHandler), n.addEventListener("mouseup", i.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", i.mainScrubberMoveHandler), document.attachEvent("onmouseup", i.mainScrubberEndHandler))
            }, this.mainScrubberMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDRAPUtils.getViewportMouseCoordinates(e).screenX - i.scrubber_do.getGlobalX();
                t < 0 ? t = 0 : t > i.scruberWidth - i.scrubbersOffsetWidth && (t = i.scruberWidth - i.scrubbersOffsetWidth);
                var o = t / i.scruberWidth,
                    s = t / i.scruberWidth;
                i.updateScrubber(o), i.dispatchEvent(FWDRAPController.SCRUB_PLAYLIST_ITEM, {
                    percent: s
                }), i.dispatchEvent(FWDRAPController.SCRUB, {
                    percent: o
                })
            }, this.mainScrubberEndHandler = function (e) {
                i.isScrubbing_bl = !1, i.disable_do && i.contains(i.disable_do) && i.removeChild(i.disable_do), i.updateScrubber(), i.dispatchEvent(FWDRAPController.STOP_TO_SCRUB), i.isMobile_bl ? i.hasPointerEvent_bl ? (n.removeEventListener("pointermove", i.mainScrubberMoveHandler), n.removeEventListener("pointerup", i.mainScrubberEndHandler)) : (n.removeEventListener("touchmove", i.mainScrubberMoveHandler), n.removeEventListener("touchend", i.mainScrubberEndHandler)) : n.removeEventListener ? (n.removeEventListener("mousemove", i.mainScrubberMoveHandler), n.removeEventListener("mouseup", i.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", i.mainScrubberMoveHandler), document.detachEvent("onmouseup", i.mainScrubberEndHandler))
            }, this.updateScrubber = function (e, t) {
                (i.percent = e) < 0 ? e = 0 : 1 < e && (e = 1);
                var o = parseInt(e * i.scruberWidth);
                i.isScrubbing_bl || t ? i.defaultPlaybackRate = Number(i.minValue + (i.maxValue - i.minValue) * o / i.scruberWidth).toFixed(1) : o = (i.defaultPlaybackRate - i.minValue) / (i.maxValue - i.minValue) * i.scruberWidth, o < 1 && i.isMainScrubberLineVisible_bl ? (i.isMainScrubberLineVisible_bl = !1, FWDAnimation.to(i.scrubberBarLine_do, .5, {
                    alpha: 0
                })) : 2 < o && !i.isMainScrubberLineVisible_bl && (i.isMainScrubberLineVisible_bl = !0, FWDAnimation.to(i.scrubberBarLine_do, .5, {
                    alpha: 1
                })), i.scrubberDrag_do.setWidth(o), i.setTooltipLabel(i.defaultPlaybackRate), i.mainToolTip_do.setX(i.scrubber_do.x + o - Math.round(i.mainToolTip_do.w / 2) + 1), i.mainToolTip_do.setY(i.scrubber_do.y - i.mainToolTip_do.h - 5), o > i.scruberWidth - i.scrubbersOffsetWidth && (o = i.scruberWidth - i.scrubbersOffsetWidth), FWDAnimation.to(i.scrubberBarLine_do, .8, {
                    x: o,
                    ease: Expo.easeOut
                }), i.dispatchEvent(r.SET_PLAYBACK_RATE, {
                    rate: i.defaultPlaybackRate
                })
            }, this.positionScruber = function () {
                i.scruberWidth = Math.min(600, i.stageWidth - 100), i.scrubber_do.setWidth(i.scruberWidth), i.scrubber_do.setX(Math.round((i.stageWidth - i.scruberWidth) / 2)), i.scrubber_do.setY(Math.round((i.stageHeight - i.scrubbersHeight) / 2)), i.scrubberBkMiddle_do.setWidth(i.scruberWidth - 2 * i.scrubbersBkLeftAndRightWidth), i.scrubberBkRight_do.setX(i.scruberWidth - i.scrubbersBkLeftAndRightWidth), i.mainScrubberDragMiddle_do.setWidth(i.scruberWidth - i.scrubbersBkLeftAndRightWidth), i.minTime_do.setX(i.scrubber_do.x - 26), i.minTime_do.setY(i.scrubber_do.y + 4), i.maxTime_do.setX(i.scrubber_do.x + i.scrubber_do.w + 8), i.maxTime_do.setY(i.scrubber_do.y + 4)
            }, this.show = function (e) {
                i.isShowed_bl || (i.isShowed_bl = !0, o.main_do.addChild(i), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && o.main_do.setSelectable(!0), i.positionAndResize(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), i.mainHolder_do.setY(-i.stageHeight), i.positionScruber(), setTimeout(function () {
                    i.updateScrubber(i.percent)
                }, 200), i.showCompleteId_to = setTimeout(i.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(i.mainHolder_do, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, this.showCompleteHandler = function () {}, this.hide = function (e) {
                i.isShowed_bl && (i.isShowed_bl = !1, o.customContextMenu_do && o.customContextMenu_do.enable(), clearTimeout(i.hideCompleteId_to), clearTimeout(i.showCompleteId_to), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && o.main_do.setSelectable(!1), i.hideCompleteId_to = setTimeout(i.hideCompleteHandler, 800), FWDAnimation.killTweensOf(i.mainHolder_do), e ? FWDAnimation.to(i.mainHolder_do, .8, {
                    y: -i.stageHeight,
                    ease: Expo.easeInOut
                }) : i.hideCompleteHandler())
            }, this.hideCompleteHandler = function () {
                o.main_do.contains(i) && o.main_do.removeChild(i), i.dispatchEvent(r.HIDE_COMPLETE)
            }, this.updateHEXColors = function (e, t) {
                -1 != s.skinPath_str.indexOf("hex_white") ? i.selectedColor_str = "#FFFFFF" : i.selectedColor_str = t, i.closeButton_do.updateHEXColors(e, i.selectedColor_str), FWDRAPUtils.changeCanvasHEXColor(i.mainScrubberDragLeft_img, i.scrubberDragLeft_canvas, e);
                var o = FWDRAPUtils.changeCanvasHEXColor(i.mainScrubberMiddleImage, i.mainSCrubberMiddleCanvas, e, !0);
                i.mainScrubberDragMiddle_do.getStyle().background = "url('" + o.src + "') repeat-x"
            }, this.init()
        };
        r.setPrototype = function () {
            r.prototype = new FWDRAPDisplayObject("div")
        }, r.HIDE_COMPLETE = "hideComplete", r.SET_PLAYBACK_RATE = "setPlaybackRate", r.prototype = null, n.FWDRAPPlaybackRateWindow = r
    }(window),
    function () {
        var r = function (p, m) {
            var b = this;
            b.data = p;
            r.prototype;
            this.playlist_ar = null, this.items_ar = null, this.searchBarButtons_ar, this.playlistItemBk1_img = p.playlistItemBk1_img, this.playlistItemBk2_img = p.playlistItemBk2_img, this.playlistSeparator_img = p.playlistSeparator_img, this.playlistScrBkTop_img = p.playlistScrBkTop_img, this.playlistScrBkMiddle_img = p.playlistScrBkMiddle_img, this.playlistScrBkBottom_img = p.playlistScrBkBottom_img, this.playlistScrDragTop_img = p.playlistScrDragTop_img, this.playlistScrDragMiddle_img = p.playlistScrDragMiddle_img, this.playlistScrDragBottom_img = p.playlistScrDragBottom_img, this.playlistPlayButtonN_img = p.playlistPlayButtonN_img, this.playlistScrLines_img = p.playlistScrLines_img, this.playlistScrLinesOver_img = p.playlistScrLinesOver_img, this.playlistDownloadButtonN_img = p.playlistDownloadButtonN_img, this.playlistBuyButtonN_img = p.playlistBuyButtonN_img, this.searchBar_do = null, this.disable_do = null, this.separator_do = null, this.itemsHolder_do = null, this.curItem_do = null, this.scrMainHolder_do = null, this.scrTrack_do = null, this.scrTrackTop_do = null, this.scrTrackMiddle_do = null, this.scrTrackBottom_do = null, this.scrHandler_do = null, this.scrHandlerTop_do = null, this.scrHandlerMiddle_do = null, this.scrHandlerBottom_do = null, this.scrHandlerLines_do = null, this.scrHandlerLinesN_do = null, this.scrHandlerLinesS_do = null, this.playlistPlayButtonN_str = p.playlistPlayButtonN_str, this.playlistPlayButtonS_str = p.playlistPlayButtonS_str, this.playlistPauseButtonN_str = p.playlistPauseButtonN_str, this.playlistPauseButtonS_str = p.playlistPauseButtonS_str, this.controllerBkPath_str = p.controllerBkPath_str, this.playlistBackgroundColor_str = p.playlistBackgroundColor_str, this.searchInputColor_str = p.searchInputColor_str, this.toolTipsButtonFontColor_str = p.toolTipsButtonFontColor_str, b.useHEXColorsForSkin_bl = p.useHEXColorsForSkin_bl, b.normalButtonsColor_str = p.normalButtonsColor_str, b.selectedButtonsColor_str = p.selectedButtonsColor_str, this.inputSearchTextOffsetTop = p.inputSearchTextOffsetTop, this.inputSearchOffsetLeft = p.inputSearchOffsetLeft, this.startSpaceBetweenButtons = p.startSpaceBetweenButtons, this.spaceBetweenButtons = p.spaceBetweenButtons, 15 < this.spaceBetweenButtons && (this.spaceBetweenButtons = 10), this.countID3 = 0, this.countTrack = 0, this.id = 0, this.stageWidth = 0, this.stageHeight = 0, this.itemsTotalHeight = 0, this.scrollbarOffestWidth = p.scrollbarOffestWidth, this.scrWidth = b.playlistScrBkTop_img.width, this.trackTitleOffsetLeft = p.trackTitleOffsetLeft, this.downloadButtonOffsetRight = p.downloadButtonOffsetRight, this.itemHeight = b.playlistItemBk1_img.height, this.playPuaseIconWidth = b.playlistPlayButtonN_img.width, this.playPuaseIconHeight = b.playlistPlayButtonN_img.height, this.nrOfVisiblePlaylistItems = p.nrOfVisiblePlaylistItems, this.durationOffsetRight = p.durationOffsetRight, this.toolTipsButtonsHideDelay = p.toolTipsButtonsHideDelay, this.totalPlayListItems = 0, this.visibleNrOfItems = 0, this.yPositionOnPress = 0, this.lastPresedY = 0, this.lastListY = 0, this.playListFinalY = 0, this.scrollBarHandlerFinalY = 0, this.scrollBarHandlerFinalY = 0, this.vy = 0, this.vy2 = 0, this.friction = .9, this.searchBarHeight = p.searchBarHeight, this.comboboxHeight = 31, this.updateMobileScrollBarId_int, this.updateMoveMobileScrollbarId_int, this.disableOnMoveId_to, this.updateMobileScrollbarOnPlaylistLoadId_to, this.populateNextItemId_to, this.usePlaylistsSelectBox_bl = p.usePlaylistsSelectBox_bl, this.showButtonsToolTips_bl = p.showButtonsToolTips_bl, this.showSortButtons_bl = p.showSortButtons_bl, this.isSortedNumerical_bl = !0, this.srotAscending_bl = !0, this.isShowNothingFound_bl = !1, this.expandPlaylistBackground_bl = p.expandControllerBackground_bl, this.showSearchBar_bl = p.showSearchBar_bl, this.addScrollBarMouseWheelSupport_bl = p.addScrollBarMouseWheelSupport_bl, this.showPlaylistItemDownloadButton_bl = p.showPlaylistItemDownloadButton_bl, this.showPlaylistItemBuyButton_bl = p.showPlaylistItemBuyButton_bl, this.allowToScrollAndScrollBarIsActive_bl = !1, this.isDragging_bl = !1, this.showPlaylistItemPlayButton_bl = p.showPlaylistItemPlayButton_bl, this.isShowed_bl = p.showPlayListByDefault_bl, this.isShowedFirstTime_bl = !1, this.animateOnIntro_bl = p.animateOnIntro_bl, this.isListCreated_bl = !1, this.allowToTweenPlaylistItems_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, b.init = function () {
                if (b.mainHolder_do = new FWDRAPDisplayObject("div"), b.itemsHolder_do = new FWDRAPDisplayObject("div"), b.itemsHolder_do.setOverflow("visible"), b.itemsHolder_do.setY(0), b.setupSeparator(), b.mainHolder_do.addChild(b.itemsHolder_do), b.addChild(b.mainHolder_do), b.isMobile_bl ? (b.setupMobileScrollbar(), b.hasPointerEvent_bl && b.setupDisable()) : (b.setupDisable(), b.setupScrollbar(), b.addScrollBarMouseWheelSupport_bl && b.addMouseWheelSupport()), b.usePlaylistsSelectBox_bl && b.setupcomboBox(), b.showSearchBar_bl) {
                    if (b.searchBar_do = new FWDRAPDisplayObject("div"), b.searchBar_do.setOverflow("visible"), b.expandPlaylistBackground_bl) {
                        b.controllerBk_do = new FWDRAPDisplayObject("img");
                        var e = new Image;
                        e.src = b.controllerBkPath_str, b.controllerBk_do.setScreen(e)
                    } else b.controllerBk_do = new FWDRAPDisplayObject("div"), b.controllerBk_do.getStyle().background = "url('" + b.controllerBkPath_str + "')";
                    b.controllerBk_do.getStyle().width = "100%", b.searchSeparator_do = new FWDRAPDisplayObject("div"), b.searchSeparator_do.setBackfaceVisibility(), b.searchSeparator_do.hasTransform3d_bl = !1, b.searchSeparator_do.hasTransform2d_bl = !1, b.searchSeparator_do.getStyle().background = "url('" + b.playlistSeparator_img.src + "')", b.searchSeparator_do.setHeight(b.playlistSeparator_img.height), b.searchBar_do.setHeight(b.searchBarHeight + b.searchSeparator_do.h), b.controllerBk_do.setHeight(b.searchBar_do.h + 1), b.searchBar_do.addChild(b.controllerBk_do), b.searchBar_do.addChild(b.searchSeparator_do), b.setupInput(), b.showSortButtons_bl && (b.setupButtons(), b.showButtonsToolTips_bl && b.setupToolTips()), b.mainHolder_do.addChild(b.searchBar_do)
                }
                b.addChild(b.separator_do)
            }, this.setupcomboBox = function () {
                b.labels_ar = [];
                for (var e = 0; e < p.cats_ar.length; e++) {
                    b.labels_ar[e] = p.cats_ar[e].playlistsName;
                    var t = "";
                    p.showPlaylistsSelectBoxNumbers_bl ? (e < 9 && (t = "0"), t = t + (e + 1) + ". ", b.labels_ar[e] = t + p.cats_ar[e].playlistsName) : b.labels_ar[e] = p.cats_ar[e].playlistsName
                }
                var o = {
                    categories_ar: b.labels_ar,
                    selectorLabel: b.labels_ar[0],
                    bk1_str: p.comboboxBk1_str,
                    bk2_str: p.comboboxBk2_str,
                    selectorBackgroundNormalColor: p.mainSelectorBackgroundSelectedColor,
                    selectorTextNormalColor: p.mainSelectorTextNormalColor,
                    selectorTextSelectedColor: p.mainSelectorTextSelectedColor,
                    buttonBackgroundNormalColor: p.mainButtonBackgroundNormalColor,
                    buttonBackgroundSelectedColor: p.mainButtonBackgroundSelectedColor,
                    buttonTextNormalColor: p.mainButtonTextNormalColor,
                    buttonTextSelectedColor: p.mainButtonTextSelectedColor,
                    buttonHeight: b.comboboxHeight,
                    arrowN_str: p.arrowN_str,
                    arrowS_str: p.arrowS_str,
                    arrowW: 11,
                    arrowH: 6
                };
                FWDRAPComboBox.setPrototype(), b.comboBox_do = new FWDRAPComboBox(b, o), b.comboBox_do.addListener(FWDRAPComboBox.BUTTON_PRESSED, b.changePlaylistOnClick), b.comboBox_do.setY(-b.comboBox_do.h - 2), b.addChild(b.comboBox_do)
            }, this.changePlaylistOnClick = function (e) {
                b.dispatchEvent(r.CHANGE_PLAYLIST, {
                    id: e.id
                })
            }, b.disableSearchBar = function () {
                b.isSearchBarDisabled_bl || (b.isSearchBarDisabled_bl = !0, b.input_do.screen.value = "Search will be available when all tracks data is loaded!", b.input_do.screen.disabled = !0, b.sortNButton_do && (b.sortNButton_do.disable(), b.sortAButton_do.disable(), b.ascDscButton_do.disable()))
            }, b.enableSearchBar = function () {
                b.isSearchBarDisabled_bl && (b.isSearchBarDisabled_bl = !1, b.input_do.screen.value = "Search for track", b.input_do.screen.disabled = !1, b.sortNButton_do && (b.sortNButton_do.enable(), b.sortAButton_do.enable(), b.ascDscButton_do.enable()))
            }, b.resizeAndPosition = function () {
                m.stageWidth == b.stageWidth && m.stageHeight == b.stageHeight || b.isListCreated_bl && (b.stageWidth = m.stageWidth, b.searchBar_do && b.positionSearchBar(), b.positionList(), b.comboBox_do && b.comboBox_do.resizeAndPosition(), b.scrMainHolder_do && b.allowToScrollAndScrollBarIsActive_bl && b.scrMainHolder_do.setX(b.stageWidth - b.scrWidth))
            }, b.positionList = function (e) {
                if (b.isListCreated_bl) {
                    var t;
                    if (b.copy_ar = [].concat(b.items_ar), b.isSearched_bl = !1, b.input_do && (inputValue = b.input_do.screen.value, "Search for track" != inputValue && !b.isSearchBarDisabled_bl)) {
                        inputValue = b.input_do.screen.value.toLowerCase();
                        for (var o = 0; o < b.copy_ar.length; o++) - 1 == (t = b.copy_ar[o]).titleText_str.toLowerCase().indexOf(inputValue.toLowerCase()) && (FWDAnimation.killTweensOf(t), 1 != t.alpha && t.setAlpha(1), t.setX(-t.w), b.copy_ar.splice(o, 1), o--)
                    }
                    for (o = 0; o < b.copy_ar.length; o++)(t = b.copy_ar[o]).changeSource(o % 2);
                    var s = b.copy_ar.length;
                    b.totalSearchedItems = s, b.itemsTotalHeight = s * b.itemHeight, b.visibleNrOfItems >= s ? b.allowToScrollAndScrollBarIsActive_bl = !1 : b.allowToScrollAndScrollBarIsActive_bl = !0;
                    for (o = 0; o < s; o++) t = b.copy_ar[o], b.allowToTweenPlaylistItems_bl && t.x < 0 && !b.isMobile_bl ? FWDAnimation.isTweening(t) || FWDAnimation.to(t, .8, {
                        x: 0,
                        ease: Expo.easeInOut
                    }) : (FWDAnimation.killTweensOf(t), t.setX(0)), t.setY(b.itemHeight * o), b.allowToScrollAndScrollBarIsActive_bl && b.scrMainHolder_do ? t.resize(b.stageWidth - b.scrollbarOffestWidth, b.itemHeight) : t.resize(b.stageWidth, b.itemHeight), 1 != t.alpha && t.setAlpha(1);
                    b.allowToScrollAndScrollBarIsActive_bl && b.scrMainHolder_do ? b.itemsHolder_do.setWidth(b.stageWidth - b.scrollbarOffestWidth) : b.itemsHolder_do.setWidth(b.stageWidth), b.input_do && (0 == s ? b.showNothingFound() : b.hideNothingFound()), b.scrHandler_do && b.updateScrollBarSizeActiveAndDeactivate(), b.separator_do.setWidth(b.stageWidth), b.mainHolder_do.setWidth(b.stageWidth), b.mainHolder_do.setHeight(b.stageHeight), b.setWidth(b.stageWidth), b.usePlaylistsSelectBox_bl ? b.setHeight(b.stageHeight + b.comboboxHeight) : b.setHeight(b.stageHeight)
                }
            }, this.updatePlaylist = function (e) {
                if (!b.isListCreated_bl) {
                    b.playlist_ar = e;
                    var t = b.isShowedFirstTime_bl ? 50 : 600;
                    b.isShowedFirstTime_bl = !0, b.countTrack = 0, b.isListCreated_bl = !0, b.input_do && (b.input_do.screen.value = "Search for track"), b.allowToScrollAndScrollBarIsActive_bl = !1, b.visibleNrOfItems = b.nrOfVisiblePlaylistItems, b.totalPlayListItems = b.playlist_ar.length, b.totalSearchedItems = o, b.nrOfVisiblePlaylistItems > b.totalPlayListItems && (b.visibleNrOfItems = b.totalPlayListItems), b.stageHeight = b.visibleNrOfItems * b.itemHeight + b.separator_do.h, b.searchBar_do && (b.stageHeight += b.separator_do.h + b.searchBarHeight), b.itemsTotalHeight = b.totalPlayListItems * b.itemHeight, b.searchBar_do ? b.mainHolder_do.setY(-b.stageHeight - b.searchBarHeight) : b.mainHolder_do.setY(-b.stageHeight), b.itemsHolder_do.setY(0), b.countID3, b.sortNButton_do && (b.disableSortNButton(), b.ascDscButton_do.setButtonState(1), b.srotAscending_bl = !0), b.showSearchBar_bl && b.enableSearchBar(), b.createPlayList(), b.loadId3();
                    var o = b.items_ar.length;
                    clearTimeout(b.updateMobileScrollbarOnPlaylistLoadId_to), b.updateMobileScrollbarOnPlaylistLoadId_to = setTimeout(b.updateScrollBarHandlerAndContent, 900), clearTimeout(b.showAnimationIntroId_to), b.showAnimationIntroId_to = setTimeout(function () {
                        for (var e = 0; e < o; e++) b.items_ar[e].setTextSizes();
                        b.isListCreated_bl = !0, b.visibleNrOfItems >= b.totalPlayListItems ? b.allowToScrollAndScrollBarIsActive_bl = !1 : b.allowToScrollAndScrollBarIsActive_bl = !0, b.scrHandler_do && b.updateScrollBarSizeActiveAndDeactivate(), b.positionList(), m.resizeHandler(), b.animateOnIntro_bl ? b.isShowed_bl && b.show(!0, !0) : b.isShowed_bl && b.show(!1, !0), b.allowToTweenPlaylistItems_bl = !0
                    }, t)
                }
            }, this.destroyPlaylist = function () {
                if (b.isListCreated_bl) {
                    var e, t = b.items_ar.length;
                    b.isListCreated_bl = !1, b.allowToTweenPlaylistItems_bl = !1, clearTimeout(b.showAnimationIntroId_to), clearTimeout(b.resetItemsAddOrderId_to);
                    for (var o = 0; o < t; o++) e = b.items_ar[o], b.itemsHolder_do.removeChild(e), e.destroy(), e = null;
                    b.items_ar = null, b.stageHeight = 0, FWDAnimation.killTweensOf(b.separator_do), FWDAnimation.killTweensOf(b.mainHolder_do), FWDAnimation.killTweensOf(m.main_do), FWDAnimation.killTweensOf(m.stageContainer), b.separator_do.setY(-b.separator_do.h), b.mainHolder_do.setY(-b.h), m.main_do.setHeight(m.controller_do.h), m.stageContainer.style.height = m.controller_do.h + "px"
                }
            }, this.createPlayList = function () {
                var e, t;
                b.itemsHolder_do.setHeight(b.totalPlayListItems * b.itemHeight), b.mainHolder_do.setBkColor(b.playlistBackgroundColor_str), b.items_ar = [];
                for (var o = 0; o < b.totalPlayListItems; o++) {
                    t = null == b.playlist_ar[o].duration ? void 0 : FWDRAP.formatTotalTime(b.playlist_ar[o].duration);
                    var s = b.playlist_ar[o].downloadable;
                    b.showPlaylistItemDownloadButton_bl || (s = !1);
                    var i = Boolean(b.playlist_ar[o].buy);
                    b.showPlaylistItemBuyButton_bl || (i = !1), FWDRAPPlaylistItem.setPrototype(), (e = new FWDRAPPlaylistItem(b.playlist_ar[o].title, b.playlist_ar[o].titleText, b.playlistDownloadButtonN_img, p.playlistDownloadButtonS_str, b.playlistBuyButtonN_img, p.playlistBuyButtonS_str, p.playlistItemGrad1_img, p.playlistItemGrad2_img, p.playlistItemProgress1_img, p.playlistItemProgress2_img, p.playlistPlayButtonN_img, p.playlistItemBk1_img.src, p.playlistItemBk2_img.src, b.playlistPlayButtonN_str, b.playlistPlayButtonS_str, b.playlistPauseButtonN_str, b.playlistPauseButtonS_str, p.trackTitleNormalColor_str, p.trackTitleSelected_str, p.trackDurationColor_str, o, p.playPauseButtonOffsetLeftAndRight, b.trackTitleOffsetLeft, b.durationOffsetRight, b.downloadButtonOffsetRight, b.showPlaylistItemPlayButton_bl, s, i, t, b.useHEXColorsForSkin_bl, b.normalButtonsColor_str, b.selectedButtonsColor_str, b)).addListener(FWDRAPPlaylistItem.MOUSE_UP, b.itemOnUpHandler), e.addListener(FWDRAPPlaylistItem.DOWNLOAD, b.downloadHandler), e.addListener(FWDRAPPlaylistItem.BUY, b.buyHandler), b.items_ar[o] = e, b.itemsHolder_do.addChild(e)
                }
            }, this.addTrack = function (e, t, o, s, i, n, r) {
                var l;
                b.isSortedNumerical_bl = !0, b.srotAscending_bl = !0, b.ascDscButton_do.setButtonState(1), b.disableSortNButton(), b.sortList();
                var a, d = 0;
                b.addAtThePlaylistEnd_bl = !1, b.addAtThePlaylistBeggingin_bl = !1, a = i ? (b.addAtThePlaylistBeggingin_bl = !0, 0) : (b.addAtThePlaylistEnd_bl = !0, b.totalPlayListItems + 1), clearTimeout(b.resetItemsAddOrderId_to), b.resetItemsAddOrderId_to = setTimeout(function () {
                    b.addAtThePlaylistEnd_bl = !1, b.addAtThePlaylistBeggingin_bl = !1
                }, 100);
                var u = Boolean(r);
                b.showPlaylistItemBuyButton_bl || (u = !1), l = t = p.showTracksNumbers_bl ? (a < 9 && (d = "0" + (a + 1)), d + ". " + t) : t, FWDRAPPlaylistItem.setPrototype();
                var c = new FWDRAPPlaylistItem(t, l, b.playlistDownloadButtonN_img, p.playlistDownloadButtonS_str, b.playlistBuyButtonN_img, p.playlistBuyButtonS_str, p.playlistItemGrad1_img, p.playlistItemGrad2_img, p.playlistItemProgress1_img, p.playlistItemProgress2_img, p.playlistPlayButtonN_img, p.playlistItemBk1_img.src, p.playlistItemBk2_img.src, b.playlistPlayButtonN_str, b.playlistPlayButtonS_str, b.playlistPauseButtonN_str, b.playlistPauseButtonS_str, p.trackTitleNormalColor_str, p.trackTitleSelected_str, p.trackDurationColor_str, a, p.playPauseButtonOffsetLeftAndRight, b.trackTitleOffsetLeft, b.durationOffsetRight, b.downloadButtonOffsetRight, b.showPlaylistItemPlayButton_bl, n, u, s, b.useHEXColorsForSkin_bl, b.normalButtonsColor_str, b.selectedButtonsColor_str, b),
                    h = {};
                h.title = t, h.titleText = t, h.source = e, h.duration = s, h.thumbPath = o, h.downloadable = n, h.buy = r, u && (h.buy = r), b.playlist_ar.splice(a, 0, h), b.totalPlayListItems = b.playlist_ar.length, b.items_ar.splice(a, 0, c), b.itemsHolder_do.addChild(c), m.totalAudio = b.totalPlayListItems;
                for (var _ = 0; _ < b.totalPlayListItems; _++) {
                    var f = b.items_ar[_];
                    f.id = f.sortId = _, t = (t = b.playlist_ar[_].title).substr(t.indexOf(".") + 1), t = p.showTracksNumbers_bl ? (d = _ < 9 ? "0" + (_ + 1) : _ + 1) + ". " + t : t, f.title_str = t, f.updateTitle(), f.setTextSizes(!0)
                }
                setTimeout(function () {
                    c && (c.setTextSizes(!0), b.allowToScrollAndScrollBarIsActive_bl && b.scrMainHolder_do ? c.resize(b.stageWidth - b.scrollbarOffestWidth, b.itemHeight) : c.resize(b.stageWidth, b.itemHeight), FWDAnimation.to(c, .1, {
                        alpha: 1,
                        ease: Expo.easeOut,
                        overwrite: !1
                    }), FWDAnimation.to(c, .1, {
                        alpha: .5,
                        delay: .1,
                        ease: Expo.easeOut,
                        overwrite: !1
                    }), FWDAnimation.to(c, .1, {
                        alpha: 1,
                        delay: .2,
                        ease: Expo.easeOut,
                        overwrite: !1
                    }), FWDAnimation.to(c, .1, {
                        alpha: .5,
                        delay: .3,
                        ease: Expo.easeOut,
                        overwrite: !1
                    }), FWDAnimation.to(c, .1, {
                        alpha: 1,
                        delay: .4,
                        ease: Expo.easeOut,
                        overwrite: !1
                    }))
                }, 50), c.addListener(FWDRAPPlaylistItem.MOUSE_UP, b.itemOnUpHandler), c.addListener(FWDRAPPlaylistItem.DOWNLOAD, b.downloadHandler), c.addListener(FWDRAPPlaylistItem.BUY, b.buyHandler), b.positionList(), b.updateScrollBarHandlerAndContent(!0, !0), c.setAlpha(0)
            }, this.itemOnUpHandler = function (e) {
                b.dispatchEvent(FWDRAPPlaylistItem.MOUSE_UP, {
                    id: e.id
                })
            }, this.downloadHandler = function (e) {
                b.dispatchEvent(FWDRAPPlaylistItem.DOWNLOAD, {
                    id: e.id
                })
            }, this.buyHandler = function (e) {
                b.dispatchEvent(FWDRAPPlaylistItem.BUY, {
                    id: e.id
                })
            }, this.loadId3 = function () {
                clearTimeout(b.populateNextItemId_to);
                for (var e = 0; e < b.totalPlayListItems; e++)
                    if ("..." != b.playlist_ar[e].title) return void(b.countID3 = 2001);
                b.showSearchBar_bl && b.disableSearchBar(), b.countID3 = 0, b.loadID3AndPopulate()
            }, this.loadID3AndPopulate = function () {
                if (b.items_ar)
                    if (b.playlist_ar[b.countID3]) {
                        var t = "",
                            o = b.items_ar[b.countID3],
                            s = b.playlist_ar[b.countID3].source,
                            i = s + "?rand=" + parseInt(99999999 * Math.random()),
                            n = b.playlist_ar[b.countID3];
                        ID3.loadTags(i, function () {
                            if (b.countID3 > b.playlist_ar.length || 2001 == b.countID3) clearTimeout(b.populateNextItemId_to);
                            else {
                                var e = ID3.getAllTags(i);
                                e.artist ? (n.titleText_str = e.artist + " - " + e.title, n.titleText = n.titleText_str, p.showTracksNumbers_bl ? (b.countTrack < 9 && (t = "0"), t = t + (b.countTrack + 1) + ". ", n.title = t + n.titleText_str) : n.title = n.titleText_str, b.countTrack++) : n.title = decodeURIComponent(s.substr(s.lastIndexOf("/") + 1)), o.title_str = '<span class="fwdrap-track">' + n.title + "</apsn>", o.titleText_str = n.title, b.playlist_ar[b.countID3].titleText = n.title, b.countID3 == b.id && b.dispatchEvent(r.UPDATE_TRACK_TITLE_if_FOLDER, {
                                    title: o.title_str
                                }), o.updateTitle(), setTimeout(function () {
                                    o && (o.setTextSizes(!0), b.allowToScrollAndScrollBarIsActive_bl && b.scrMainHolder_do ? o.resize(b.stageWidth - b.scrollbarOffestWidth, b.itemHeight) : o.resize(b.stageWidth, b.itemHeight))
                                }, 50), b.countID3++, b.populateNextItemId_to = setTimeout(b.loadID3AndPopulate, 150)
                            }
                        })
                    } else b.showSearchBar_bl && b.enableSearchBar()
            }, this.activateItems = function (e, t) {
                var o;
                if (b.id = e, b.items_ar) {
                    for (var s = 0; s < b.totalPlayListItems; s++)
                        if ((o = b.items_ar[s]).id == b.id) {
                            b.sortId = o.sortId;
                            break
                        } b.curItem_do = b.items_ar[b.sortId], b.id = b.curItem_do.id;
                    for (s = 0; s < b.totalPlayListItems; s++) o = b.items_ar[s], s == b.sortId ? o.setActive() : o.setInActive();
                    t || setTimeout(function () {
                        b.updateScrollBarHandlerAndContent(!0)
                    }, 50)
                }
            }, this.setCurItemPlayState = function () {
                b.curItem_do && b.curItem_do.showPlayButton()
            }, this.setCurItemPauseState = function () {
                b.curItem_do && b.curItem_do.showPauseButton()
            }, this.updateCurItemProgress = function (e) {
                b.curItem_do && b.curItem_do.updateProgressPercent(e)
            }, this.setupButtons = function () {
                b.searchBarButtons_ar = [], FWDRAPSimpleButton.setPrototype(), b.sortNButton_do = new FWDRAPSimpleButton(p.sortNN_img, p.sortNSPath_str, null, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), b.searchBarButtons_ar.push(b.sortNButton_do), b.sortNButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, b.sortNButtonShowTooltipHandler), b.sortNButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, b.sortNButtonOnMouseUpHandler), b.searchBar_do.addChild(b.sortNButton_do), b.sortNButton_do.setX(410), FWDRAPSimpleButton.setPrototype(), b.sortAButton_do = new FWDRAPSimpleButton(p.sortAN_img, p.sortASPath_str, null, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), b.searchBarButtons_ar.push(b.sortAButton_do), b.sortAButton_do.addListener(FWDRAPSimpleButton.SHOW_TOOLTIP, b.sortAButtonShowTooltipHandler), b.sortAButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, b.sortAButtonOnMouseUpHandler), b.searchBar_do.addChild(b.sortAButton_do), b.sortAButton_do.setX(450), FWDRAPComplexButton.setPrototype(), b.ascDscButton_do = new FWDRAPComplexButton(p.ascendingN_img, p.ascendingSpath_str, p.decendingN_img, p.decendingSpath_str, !0, p.useHEXColorsForSkin_bl, p.normalButtonsColor_str, p.selectedButtonsColor_str), b.ascDscButton_do.setX(500), b.searchBarButtons_ar.push(b.ascDscButton_do), b.ascDscButton_do.addListener(FWDRAPComplexButton.SHOW_TOOLTIP, b.ascDscShowToolTipHandler), b.ascDscButton_do.addListener(FWDRAPComplexButton.MOUSE_UP, b.ascDscMouseUpHandler), b.searchBar_do.addChild(b.ascDscButton_do), b.isSortedNumerical_bl ? b.disableSortNButton() : b.disableSortAButton()
            }, this.ascDscShowToolTipHandler = function (e) {
                b.showToolTip(b.ascDscButton_do, b.ascDscButtonToolTip_do, e.e)
            }, this.ascDscMouseUpHandler = function () {
                b.srotAscending_bl ? (b.ascDscButton_do.setButtonState(0), b.srotAscending_bl = !1) : (b.ascDscButton_do.setButtonState(1), b.srotAscending_bl = !0), b.sortList()
            }, this.sortAButtonShowTooltipHandler = function (e) {
                b.showToolTip(b.sortAButton_do, b.sortAButtonToolTip_do, e.e)
            }, this.sortAButtonOnMouseUpHandler = function () {
                b.disableSortAButton(), b.sortList()
            }, this.sortNButtonShowTooltipHandler = function (e) {
                b.showToolTip(b.sortNButton_do, b.sortNButtonToolTip_do, e.e)
            }, this.sortNButtonOnMouseUpHandler = function () {
                b.disableSortNButton(), b.sortList()
            }, this.disableSortAButton = function () {
                b.sortAButton_do.disableForGood(), b.sortAButton_do.setSelectedState(), b.sortNButton_do.enableForGood(), b.sortNButton_do.setNormalState(), b.isSortedNumerical_bl = !1
            }, this.disableSortNButton = function () {
                b.sortNButton_do.disableForGood(), b.sortNButton_do.setSelectedState(), b.sortAButton_do.enableForGood(), b.sortAButton_do.setNormalState(), b.isSortedNumerical_bl = !0
            }, this.sortList = function () {
                b.isSortedNumerical_bl ? b.items_ar.sort(function (e, t) {
                    return e.id < t.id ? -1 : e.id > t.id ? 1 : 0
                }) : b.items_ar.sort(function (e, t) {
                    return e.titleText_str < t.titleText_str ? -1 : e.titleText_str > t.titleText_str ? 1 : 0
                }), b.srotAscending_bl || b.items_ar.reverse();
                for (var e = 0; e < b.items_ar.length; e++) b.items_ar[e].sortId = e;
                b.positionList(), b.updateScrollBarHandlerAndContent(!1)
            }, this.setupInput = function () {
                b.titlebarHeight = p.titlebarLeftPath_img.height, b.mainSearchInput_do = new FWDRAPDisplayObject("div"), b.mainSearchInput_do.getStyle().background = "url('" + p.titlebarBkMiddlePattern_str + "')", b.mainSearchInput_do.setHeight(b.titlebarHeight);
                var e = new Image;
                e.src = p.titleBarLeft_img.src, b.titleBarLeft_do = new FWDRAPDisplayObject("img"), b.titleBarLeft_do.setScreen(e), b.titleBarLeft_do.setWidth(p.titleBarLeft_img.width), b.titleBarLeft_do.setHeight(p.titleBarLeft_img.height);
                var t = new Image;
                t.src = p.titleBarRigth_img.src, b.titleBarRight_do = new FWDRAPDisplayObject("img"), b.titleBarRight_do.setScreen(t), b.titleBarRight_do.setWidth(p.titleBarRigth_img.width), b.titleBarRight_do.setHeight(p.titleBarRigth_img.height), b.input_do = new FWDRAPDisplayObject("input"), b.input_do.screen.maxLength = 20, b.input_do.getStyle().textAlign = "left", b.input_do.getStyle().outline = "none", b.input_do.getStyle().boxShadow = "none", b.input_do.getStyle().fontSmoothing = "antialiased", b.input_do.getStyle().webkitFontSmoothing = "antialiased", b.input_do.getStyle().textRendering = "optimizeLegibility", b.input_do.getStyle().fontFamily = "Arial", b.input_do.getStyle().fontSize = "12px", b.input_do.getStyle().padding = "6px", b.input_do.getStyle().paddingLeft = "7px", FWDRAPUtils.isIEAndLessThen9 || (b.input_do.getStyle().paddingRight = "-6px"), b.input_do.getStyle().paddingTop = "2px", b.input_do.getStyle().paddingBottom = "3px", b.input_do.getStyle().color = b.searchInputColor_str, b.input_do.getStyle().webkitBoxShadow = "0 0 0 1000px transparent inset", b.input_do.screen.value = "Search for track", b.noSearchFound_do = new FWDRAPDisplayObject("div"), b.noSearchFound_do.setX(0), b.noSearchFound_do.getStyle().textAlign = "center", b.noSearchFound_do.getStyle().width = "100%", b.noSearchFound_do.getStyle().fontSmoothing = "antialiased", b.noSearchFound_do.getStyle().webkitFontSmoothing = "antialiased", b.noSearchFound_do.getStyle().textRendering = "optimizeLegibility", b.noSearchFound_do.getStyle().fontFamily = "Arial", b.noSearchFound_do.getStyle().fontSize = "12px", b.noSearchFound_do.getStyle().color = b.searchInputColor_str, b.noSearchFound_do.setInnerHTML("NOTHING FOUND!"), b.noSearchFound_do.setVisible(!1), b.mainHolder_do.addChild(b.noSearchFound_do), b.input_do.screen.addEventListener ? (b.input_do.screen.addEventListener("focus", b.inputFocusInHandler), b.input_do.screen.addEventListener("blur", b.inputFocusOutHandler), b.input_do.screen.addEventListener("keyup", b.keyUpHandler)) : b.input_do.screen.attachEvent && (b.input_do.screen.attachEvent("onfocus", b.inputFocusInHandler), b.input_do.screen.attachEvent("onblur", b.inputFocusOutHandler), b.input_do.screen.attachEvent("onkeyup", b.keyUpHandler)), b.inputArrow_img = new Image, b.inputArrow_img.src = p.inputArrowPath_str, b.useHEXColorsForSkin_bl ? (b.inputArrow_do = new FWDRAPDisplayObject("div"), b.inputArrow_img.onload = function () {
                    b.mainScrubberDragLeft_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.inputArrow_img, b.normalButtonsColor_str).canvas, b.inputArrow_do.setWidth(b.inputArrow_img.width), b.inputArrow_do.setHeight(b.inputArrow_img.height), b.inputArrow_do.screen.appendChild(b.mainScrubberDragLeft_canvas)
                }) : (b.inputArrow_do = new FWDRAPDisplayObject("img"), b.inputArrow_do.setScreen(b.inputArrow_img), b.inputArrow_do.setWidth(14), b.inputArrow_do.setHeight(12)), setTimeout(function () {
                    b.input_do.setY(parseInt((b.titlebarHeight - b.input_do.getHeight()) / 2) + b.inputSearchTextOffsetTop)
                }, 50), b.mainSearchInput_do.addChild(b.titleBarLeft_do), b.mainSearchInput_do.addChild(b.titleBarRight_do), b.mainSearchInput_do.addChild(b.input_do), b.searchBar_do.addChild(b.inputArrow_do), b.searchBar_do.addChild(b.mainSearchInput_do)
            }, this.inputFocusInHandler = function () {
                b.hasInputFocus_bl || (b.hasInputFocus_bl = !0, b.isSearchBarDisabled_bl ? b.input_do.screen.value : "Search for track" == b.input_do.screen.value && (b.input_do.screen.value = ""))
            }, this.inputFocusOutHandler = function (e) {
                if (b.hasInputFocus_bl) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    return FWDRAPUtils.hitTest(b.input_do.screen, t.screenX, t.screenY) ? void 0 : (b.hasInputFocus_bl = !1, void("" == b.input_do.screen.value && (b.input_do.screen.value = "Search for track")))
                }
            }, this.keyUpHandler = function (e) {
                e.stopPropagation && e.stopPropagation(), b.prevInputValue_str != b.input_do.screen.value && (b.isMobile_bl, b.positionList()), b.prevInputValue_str = b.input_do.screen.value, b.scrHandler_do && (b.updateScrollBarSizeActiveAndDeactivate(), b.updateScrollBarHandlerAndContent(!1))
            }, this.showNothingFound = function () {
                b.isShowNothingFound_bl || (b.isShowNothingFound_bl = !0, b.noSearchFound_do.setVisible(!0), b.noSearchFound_do.setY(parseInt((b.stageHeight - b.noSearchFound_do.getHeight() - b.searchBarHeight) / 2)), b.noSearchFound_do.setAlpha(0), FWDAnimation.to(b.noSearchFound_do, .1, {
                    alpha: 1,
                    yoyo: !0,
                    repeat: 4
                }))
            }, this.hideNothingFound = function () {
                b.isShowNothingFound_bl && (b.isShowNothingFound_bl = !1, FWDAnimation.killTweensOf(b.noSearchFound_do), b.noSearchFound_do.setVisible(!1))
            }, b.positionSearchBar = function () {
                var e, t = 0;
                if (inputWidth = b.stageWidth - 2 * b.startSpaceBetweenButtons - b.inputArrow_do.w - 12, 430 < inputWidth && (inputWidth = 430), this.showSortButtons_bl)
                    for (var o = b.searchBarButtons_ar.length - 1; 0 <= o; o--) e = b.searchBarButtons_ar[o], o == b.searchBarButtons_ar.length - 1 ? e.setX(b.stageWidth - e.w - b.startSpaceBetweenButtons) : e.setX(b.searchBarButtons_ar[o + 1].x - e.w - b.spaceBetweenButtons), e.setY(b.searchSeparator_do.h + parseInt((b.searchBar_do.h - b.searchSeparator_do.h - e.h) / 2)), t += e.w + b.spaceBetweenButtons;
                t += b.startSpaceBetweenButtons, inputWidth -= t, b.mainSearchInput_do.setWidth(inputWidth), b.input_do.setWidth(inputWidth), b.mainSearchInput_do.setX(b.startSpaceBetweenButtons + b.inputSearchOffsetLeft), b.mainSearchInput_do.setY(parseInt(b.searchSeparator_do.h + parseInt((b.searchBar_do.h - b.searchSeparator_do.h - b.mainSearchInput_do.h) / 2))), b.titleBarRight_do.setX(b.mainSearchInput_do.w - b.titleBarRight_do.w), b.inputArrow_do.setX(parseInt(b.mainSearchInput_do.x + inputWidth) + 4), b.inputArrow_do.setY(b.searchSeparator_do.h + parseInt((b.searchBar_do.h - b.searchSeparator_do.h - b.inputArrow_do.h) / 2)), b.searchSeparator_do.setWidth(b.stageWidth), b.searchBar_do.setWidth(b.stageWidth), b.searchBar_do.setY(b.stageHeight - b.searchSeparator_do.h - b.searchBar_do.h)
            }, this.setupToolTips = function () {
                FWDRAPToolTip.setPrototype(), b.sortNButtonToolTip_do = new FWDRAPToolTip(b.sortNButton_do, p.toopTipBk_str, p.toopTipPointer_str, p.toopTipPointerUp_str, "numeric sort", b.toolTipsButtonFontColor_str, b.toolTipsButtonsHideDelay), document.documentElement.appendChild(b.sortNButtonToolTip_do.screen), FWDRAPToolTip.setPrototype(), b.sortAButtonToolTip_do = new FWDRAPToolTip(b.sortAButton_do, p.toopTipBk_str, p.toopTipPointer_str, p.toopTipPointerUp_str, "alphabetic sort", b.toolTipsButtonFontColor_str, b.toolTipsButtonsHideDelay), document.documentElement.appendChild(b.sortAButtonToolTip_do.screen), FWDRAPToolTip.setPrototype(), b.ascDscButtonToolTip_do = new FWDRAPToolTip(b.ascDscButton_do, p.toopTipBk_str, p.toopTipPointer_str, p.toopTipPointerUp_str, "ascending / decending sort", b.toolTipsButtonFontColor_str, b.toolTipsButtonsHideDelay), document.documentElement.appendChild(b.ascDscButtonToolTip_do.screen)
            }, this.showToolTip = function (e, t, o) {
                if (b.showButtonsToolTips_bl) {
                    var s = FWDRAPUtils.getViewportSize(),
                        i = (FWDRAPUtils.getViewportMouseCoordinates(o), parseInt(e.getGlobalX() + e.w / 2 - t.w / 2)),
                        n = parseInt(e.getGlobalY() - t.h - 6),
                        r = 0;
                    i < 0 ? (r = i, i = 0) : i + t.w > s.w && (i += -1 * (r = -1 * (s.w - (i + t.w)))), n < 0 ? (n += e.h + t.h + 12, t.positionPointer(r, !0)) : t.positionPointer(r, !1), t.setX(i), t.setY(n), t.show()
                }
            }, this.setupDisable = function () {
                b.disable_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isIE && (b.disable_do.setBkColor("#FFFFFF"), b.disable_do.setAlpha(0)), b.addChild(b.disable_do)
            }, this.showDisable = function () {
                b.disable_do && 0 == b.disable_do.w && (b.scrMainHolder_do ? b.disable_do.setWidth(b.stageWidth - b.scrollbarOffestWidth) : b.disable_do.setWidth(b.stageWidth), b.disable_do.setHeight(b.stageHeight))
            }, this.hideDisable = function () {
                b.disable_do && 0 != b.disable_do.w && (b.disable_do.setWidth(0), b.disable_do.setHeight(0))
            }, this.setupSeparator = function () {
                b.separator_do = new FWDRAPDisplayObject("div"), b.separator_do.setBackfaceVisibility(), b.separator_do.hasTransform3d_bl = !1, b.separator_do.hasTransform2d_bl = !1, b.separator_do.getStyle().background = "url('" + b.playlistSeparator_img.src + "')", b.separator_do.setHeight(b.playlistSeparator_img.height), b.separator_do.setY(-b.separator_do.h)
            }, this.setupScrollbar = function () {
                b.scrMainHolder_do = new FWDRAPDisplayObject("div"), b.scrMainHolder_do.setWidth(b.scrWidth), b.scrTrack_do = new FWDRAPDisplayObject("div"), b.scrTrack_do.setWidth(b.scrWidth), b.scrTrackTop_do = new FWDRAPDisplayObject("img"), b.scrTrackTop_do.setScreen(b.playlistScrBkTop_img), b.scrTrackMiddle_do = new FWDRAPDisplayObject("div"), b.scrTrackMiddle_do.getStyle().background = "url('" + p.scrBkMiddlePath_str + "')", b.scrTrackMiddle_do.setWidth(b.scrWidth), b.scrTrackMiddle_do.setY(b.scrTrackTop_do.h);
                var e = new Image;
                e.src = p.scrBkBottomPath_str, b.scrTrackBottom_do = new FWDRAPDisplayObject("img"), b.scrTrackBottom_do.setScreen(e), b.scrTrackBottom_do.setWidth(b.scrTrackTop_do.w), b.scrTrackBottom_do.setHeight(b.scrTrackTop_do.h), b.scrHandler_do = new FWDRAPDisplayObject("div"), b.scrHandler_do.setWidth(b.scrWidth), b.scrHandlerTop_do = new FWDRAPDisplayObject("img"), b.useHEXColorsForSkin_bl ? (b.scrHandlerTop_do = new FWDRAPDisplayObject("div"), b.scrHandlerTop_do.setWidth(b.playlistScrDragTop_img.width), b.scrHandlerTop_do.setHeight(b.playlistScrDragTop_img.height), b.mainScrubberDragTop_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.playlistScrDragTop_img, b.normalButtonsColor_str).canvas, b.scrHandlerTop_do.screen.appendChild(b.mainScrubberDragTop_canvas)) : (b.scrHandlerTop_do = new FWDRAPDisplayObject("img"), b.scrHandlerTop_do.setScreen(b.playlistScrDragTop_img)), b.scrHandlerMiddle_do = new FWDRAPDisplayObject("div"), b.middleImage = new Image, b.middleImage.src = p.scrDragMiddlePath_str, b.useHEXColorsForSkin_bl ? b.middleImage.onload = function () {
                    b.scrubberDragMiddle_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.middleImage, b.normalButtonsColor_str, !0), b.scrubberDragImage_img = b.scrubberDragMiddle_canvas.image, b.scrHandlerMiddle_do.getStyle().background = "url('" + b.scrubberDragImage_img.src + "') repeat-y"
                } : b.scrHandlerMiddle_do.getStyle().background = "url('" + p.scrDragMiddlePath_str + "')", b.scrHandlerMiddle_do.setWidth(b.scrWidth), b.scrHandlerMiddle_do.setY(b.scrHandlerTop_do.h), b.scrHandlerBottom_do = new FWDRAPDisplayObject("div"), b.scrHandlerBottom_img = new Image, b.scrHandlerBottom_img.src = p.scrDragMiddlePath_str, b.useHEXColorsForSkin_bl ? b.scrHandlerBottom_img.onload = function () {
                    b.scrubberDragBottom_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.scrHandlerBottom_img, b.normalButtonsColor_str, !0), b.scrubberDragBottomImage_img = b.scrubberDragBottom_canvas.image, b.scrHandlerBottom_do.getStyle().background = "url('" + b.scrubberDragBottomImage_img.src + "') repeat-y"
                } : b.scrHandlerBottom_do.getStyle().background = "url('" + p.scrDragBottomPath_str + "')", b.scrHandlerBottom_do.setWidth(b.scrWidth), b.scrHandlerBottom_do.setWidth(b.scrHandlerTop_do.w), b.scrHandlerBottom_do.setHeight(b.scrHandlerTop_do.h), b.scrHandler_do.setButtonMode(!0), b.useHEXColorsForSkin_bl ? (b.scrHandlerLinesN_do = new FWDRAPDisplayObject("div"), b.scrHandlerLinesN_do.setWidth(b.playlistScrLines_img.width), b.scrHandlerLinesN_do.setHeight(b.playlistScrLines_img.height), b.mainhandlerN_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.playlistScrLines_img, b.selectedButtonsColor_str).canvas, b.scrHandlerLinesN_do.screen.appendChild(b.mainhandlerN_canvas)) : (b.scrHandlerLinesN_do = new FWDRAPDisplayObject("img"), b.scrHandlerLinesN_do.setScreen(b.playlistScrLines_img)), b.scrHandlerLinesS_img = new Image, b.scrHandlerLinesS_img.src = p.scrLinesSPath_str, b.useHEXColorsForSkin_bl ? (b.scrHandlerLinesS_do = new FWDRAPDisplayObject("div"), b.scrHandlerLinesS_img.onload = function () {
                    b.scrHandlerLinesS_do.setWidth(b.scrHandlerLinesN_do.w), b.scrHandlerLinesS_do.setHeight(b.scrHandlerLinesN_do.h), b.scrubberLines_s_canvas = FWDRAPUtils.getCanvasWithModifiedColor(b.scrHandlerLinesS_img, b.selectedButtonsColor_str, !0), b.scrubbelinesSImage_img = b.scrubberLines_s_canvas.image, b.scrHandlerLinesS_do.getStyle().background = "url('" + b.scrubbelinesSImage_img.src + "') repeat-y"
                }) : (b.scrHandlerLinesS_do = new FWDRAPDisplayObject("img"), b.scrHandlerLinesS_do.setScreen(b.scrHandlerLinesS_img), b.scrHandlerLinesS_do.setWidth(b.scrHandlerLinesN_do.w), b.scrHandlerLinesS_do.setHeight(b.scrHandlerLinesN_do.h)), b.scrHandlerLinesS_do.setAlpha(0), b.scrHandlerLines_do = new FWDRAPDisplayObject("div"), b.scrHandlerLines_do.hasTransform3d_bl = !1, b.scrHandlerLines_do.hasTransform2d_bl = !1, b.scrHandlerLines_do.setBackfaceVisibility(), b.scrHandlerLines_do.setWidth(b.scrHandlerLinesN_do.w), b.scrHandlerLines_do.setHeight(b.scrHandlerLinesN_do.h), b.scrHandlerLines_do.setButtonMode(!0), b.scrTrack_do.addChild(b.scrTrackTop_do), b.scrTrack_do.addChild(b.scrTrackMiddle_do), b.scrTrack_do.addChild(b.scrTrackBottom_do), b.scrHandler_do.addChild(b.scrHandlerTop_do), b.scrHandler_do.addChild(b.scrHandlerMiddle_do), b.scrHandler_do.addChild(b.scrHandlerBottom_do), b.scrHandlerLines_do.addChild(b.scrHandlerLinesN_do), b.scrHandlerLines_do.addChild(b.scrHandlerLinesS_do), b.scrMainHolder_do.addChild(b.scrTrack_do), b.scrMainHolder_do.addChild(b.scrHandler_do), b.scrMainHolder_do.addChild(b.scrHandlerLines_do), b.mainHolder_do.addChild(b.scrMainHolder_do), b.scrHandler_do.screen.addEventListener ? (b.scrHandler_do.screen.addEventListener("mouseover", b.scrollBarHandlerOnMouseOver), b.scrHandler_do.screen.addEventListener("mouseout", b.scrollBarHandlerOnMouseOut), b.scrHandler_do.screen.addEventListener("mousedown", b.scrollBarHandlerOnMouseDown), b.scrHandlerLines_do.screen.addEventListener("mouseover", b.scrollBarHandlerOnMouseOver), b.scrHandlerLines_do.screen.addEventListener("mouseout", b.scrollBarHandlerOnMouseOut), b.scrHandlerLines_do.screen.addEventListener("mousedown", b.scrollBarHandlerOnMouseDown)) : b.scrHandler_do.screen.attachEvent && (b.scrHandler_do.screen.attachEvent("onmouseover", b.scrollBarHandlerOnMouseOver), b.scrHandler_do.screen.attachEvent("onmouseout", b.scrollBarHandlerOnMouseOut), b.scrHandler_do.screen.attachEvent("onmousedown", b.scrollBarHandlerOnMouseDown), b.scrHandlerLines_do.screen.attachEvent("onmouseover", b.scrollBarHandlerOnMouseOver), b.scrHandlerLines_do.screen.attachEvent("onmouseout", b.scrollBarHandlerOnMouseOut), b.scrHandlerLines_do.screen.attachEvent("onmousedown", b.scrollBarHandlerOnMouseDown))
            }, this.scrollBarHandlerOnMouseOver = function (e) {
                FWDAnimation.to(b.scrHandlerLinesS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.scrollBarHandlerOnMouseOut = function (e) {
                b.isDragging_bl || FWDAnimation.to(b.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.scrollBarHandlerOnMouseDown = function (e) {
                if (b.allowToScrollAndScrollBarIsActive_bl) {
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    b.isDragging_bl = !0, b.yPositionOnPress = b.scrHandler_do.y, b.lastPresedY = t.screenY, FWDAnimation.killTweensOf(b.scrHandler_do), b.showDisable(), window.addEventListener ? (window.addEventListener("mousemove", b.scrollBarHandlerMoveHandler), window.addEventListener("mouseup", b.scrollBarHandlerEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", b.scrollBarHandlerMoveHandler), document.attachEvent("onmouseup", b.scrollBarHandlerEndHandler)), b.prevSortId = -1
                }
            }, this.scrollBarHandlerMoveHandler = function (e) {
                e.preventDefault && e.preventDefault();
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                b.scrollBarHandlerFinalY = Math.round(b.yPositionOnPress + t.screenY - b.lastPresedY), b.scrollBarHandlerFinalY >= b.scrTrack_do.h - b.scrHandler_do.h - 1 ? b.scrollBarHandlerFinalY = b.scrTrack_do.h - b.scrHandler_do.h - 1 : b.scrollBarHandlerFinalY <= 0 && (b.scrollBarHandlerFinalY = 0), b.scrHandler_do.setY(b.scrollBarHandlerFinalY), FWDAnimation.to(b.scrHandlerLines_do, .8, {
                    y: b.scrollBarHandlerFinalY + parseInt((b.scrHandler_do.h - b.scrHandlerLines_do.h) / 2),
                    ease: Quart.easeOut
                }), b.updateScrollBarHandlerAndContent(!0, !0)
            }, b.scrollBarHandlerEndHandler = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                b.isDragging_bl = !1, FWDRAPUtils.hitTest(b.scrHandler_do.screen, t.screenX, t.screenY) || FWDAnimation.to(b.scrHandlerLinesS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), b.scrollBarHandlerFinalY = -1 * parseInt((b.scrTrack_do.h - b.scrHandler_do.h) * (b.playListFinalY / ((b.totalSearchedItems - b.nrOfVisiblePlaylistItems) * b.itemHeight))), b.scrollBarHandlerFinalY.y < 0 ? b.scrollBarHandlerFinalY = 0 : b.scrollBarHandlerFinalY > b.scrTrack_do.h - b.scrHandler_do.h - 1 && (b.scrollBarHandlerFinalY = b.scrTrack_do.h - b.scrHandler_do.h - 1), b.hideDisable(), FWDAnimation.killTweensOf(b.scrHandler_do), FWDAnimation.to(b.scrHandler_do, .5, {
                    y: b.scrollBarHandlerFinalY,
                    ease: Quart.easeOut
                }), window.removeEventListener ? (window.removeEventListener("mousemove", b.scrollBarHandlerMoveHandler), window.removeEventListener("mouseup", b.scrollBarHandlerEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", b.scrollBarHandlerMoveHandler), document.detachEvent("onmouseup", b.scrollBarHandlerEndHandler))
            }, this.updateScrollBarSizeActiveAndDeactivate = function () {
                if (b.allowToScrollAndScrollBarIsActive_bl) {
                    var e = 0;
                    b.allowToScrollAndScrollBarIsActive_bl = !0, b.searchBar_do && (e = b.searchBar_do.h), b.scrMainHolder_do.setHeight(b.stageHeight - b.separator_do.h - e), b.scrTrack_do.setHeight(b.stageHeight - b.separator_do.h - e), b.scrTrackMiddle_do.setHeight(b.scrTrack_do.h - 2 * b.scrTrackTop_do.h), b.scrTrackBottom_do.setY(b.scrTrackMiddle_do.y + b.scrTrackMiddle_do.h), b.scrHandler_do.setHeight(Math.min(b.stageHeight - b.separator_do.h - e, Math.round((b.stageHeight - b.separator_do.h - e) / b.itemsTotalHeight * b.stageHeight))), b.scrHandlerMiddle_do.setHeight(b.scrHandler_do.h - 2 * b.scrHandlerTop_do.h), b.scrHandlerTop_do.setY(b.scrHandlerMiddle_do.y + b.scrHandlerMiddle_do.h), b.scrHandlerLines_do.setY(b.scrollBarHandlerFinalY + parseInt((b.scrHandler_do.h - b.scrHandlerLines_do.h) / 2)), b.scrMainHolder_do.setX(b.stageWidth - b.scrWidth), b.updateScrollBarHandlerAndContent()
                } else b.allowToScrollAndScrollBarIsActive_bl = !1, b.scrMainHolder_do.setX(-500), b.scrHandler_do.setY(0)
            }, this.updateScrollBarHandlerAndContent = function (e, t) {
                if (b.curItem_do && b.allowToScrollAndScrollBarIsActive_bl && (b.curItem_do && (b.sortId = b.curItem_do.sortId), b.prevSortId != b.sortId || t)) {
                    var o = 0,
                        s = 0;
                    b.addAtThePlaylistEnd_bl ? b.sortId = b.totalPlayListItems - 1 : b.addAtThePlaylistBeggingin_bl && (b.sortId = 0), b.prevSortId = b.sortId, b.isDragging_bl && !b.isMobile_bl ? ("Infinity" == (o = b.scrHandler_do.y / (b.scrMainHolder_do.h - b.scrHandler_do.h)) ? o = 0 : 1 <= o && (scrollPercent = 1), b.playListFinalY = Math.round(o * (b.totalSearchedItems - b.nrOfVisiblePlaylistItems)) * b.itemHeight * -1) : ((s = b.totalSearchedItems != b.totalPlayListItems ? 0 : parseInt(b.sortId / b.nrOfVisiblePlaylistItems) * b.nrOfVisiblePlaylistItems) + b.nrOfVisiblePlaylistItems >= b.totalPlayListItems && (s = b.totalPlayListItems - b.nrOfVisiblePlaylistItems), s < 0 && (s = 0), b.playListFinalY = parseInt(s * b.itemHeight * -1), b.scrMainHolder_do && (b.scrollBarHandlerFinalY = -1 * Math.round((b.scrMainHolder_do.h - b.scrHandler_do.h) * (b.playListFinalY / ((b.totalSearchedItems - b.nrOfVisiblePlaylistItems) * b.itemHeight))), b.scrollBarHandlerFinalY < 0 ? b.scrollBarHandlerFinalY = 0 : b.scrollBarHandlerFinalY > b.scrMainHolder_do.h - b.scrHandler_do.h - 1 && (b.scrollBarHandlerFinalY = b.scrMainHolder_do.h - b.scrHandler_do.h - 1), FWDAnimation.killTweensOf(b.scrHandler_do), FWDAnimation.killTweensOf(b.scrHandlerLines_do), e ? (FWDAnimation.to(b.scrHandler_do, .5, {
                        y: b.scrollBarHandlerFinalY,
                        ease: Quart.easeOut
                    }), FWDAnimation.to(b.scrHandlerLines_do, .8, {
                        y: b.scrollBarHandlerFinalY + parseInt((b.scrHandler_do.h - b.scrHandlerLinesN_do.h) / 2),
                        ease: Quart.easeOut
                    })) : (b.scrHandler_do.setY(b.scrollBarHandlerFinalY), b.scrHandlerLines_do.setY(b.scrollBarHandlerFinalY + parseInt((b.scrHandler_do.h - b.scrHandlerLinesN_do.h) / 2))))), b.prevPlaylistY != b.playListFinalY && (b.prevPlaylistY = b.playListFinalY, isNaN(b.playListFinalY) || (b.lastListY != b.playListFinalY && (FWDAnimation.killTweensOf(b.itemsHolder_do), e ? FWDAnimation.to(b.itemsHolder_do, .5, {
                        y: b.playListFinalY,
                        ease: Quart.easeOut
                    }) : b.itemsHolder_do.setY(b.playListFinalY)), b.lastListY = b.playListFinalY))
                }
            }, this.addMouseWheelSupport = function () {
                window.addEventListener ? (b.screen.addEventListener("mousewheel", b.mouseWheelHandler), b.screen.addEventListener("DOMMouseScroll", b.mouseWheelHandler)) : document.attachEvent && b.screen.attachEvent("onmousewheel", b.mouseWheelHandler)
            }, this.mouseWheelHandler = function (e) {
                if (b.allowToScrollAndScrollBarIsActive_bl && !b.isDragging_bl && (!b.comboBox_do || !b.comboBox_do.isShowed_bl)) {
                    var t = e.detail || e.wheelDelta;
                    if (e.wheelDelta && (t *= -1), FWDRAPUtils.isOpera && (t *= -1), 0 < t ? b.playListFinalY -= b.itemHeight : b.playListFinalY += b.itemHeight, leftId = parseInt(b.playListFinalY / b.itemHeight), 0 <= leftId ? leftId = 0 : Math.abs(leftId) + b.nrOfVisiblePlaylistItems >= b.totalSearchedItems && (leftId = -1 * (b.totalSearchedItems - b.nrOfVisiblePlaylistItems)), b.prevSortId = -1, b.prevPlaylistY = -100, b.playListFinalY = leftId * b.itemHeight, b.lastListY != b.playListFinalY) {
                        if (b.scrollBarHandlerFinalY = -1 * Math.round((b.scrMainHolder_do.h - b.scrHandler_do.h) * (b.playListFinalY / ((b.totalSearchedItems - b.nrOfVisiblePlaylistItems) * b.itemHeight))), b.scrollBarHandlerFinalY < 0 ? b.scrollBarHandlerFinalY = 0 : b.scrollBarHandlerFinalY > b.scrMainHolder_do.h - b.scrHandler_do.h - 1 && (b.scrollBarHandlerFinalY = b.scrMainHolder_do.h - b.scrHandler_do.h - 1), FWDAnimation.killTweensOf(b.itemsHolder_do), FWDAnimation.to(b.itemsHolder_do, .5, {
                                y: b.playListFinalY,
                                ease: Expo.easeOut
                            }), FWDAnimation.killTweensOf(b.scrHandler_do), FWDAnimation.to(b.scrHandler_do, .5, {
                                y: b.scrollBarHandlerFinalY,
                                ease: Expo.easeOut
                            }), FWDAnimation.to(b.scrHandlerLines_do, .8, {
                                y: b.scrollBarHandlerFinalY + parseInt((b.scrHandler_do.h - b.scrHandlerLinesN_do.h) / 2),
                                ease: Quart.easeOut
                            }), b.lastListY = b.playListFinalY, !e.preventDefault) return !1;
                        e.preventDefault()
                    }
                }
            }, b.setupMobileScrollbar = function () {
                b.hasPointerEvent_bl ? b.screen.addEventListener("pointerdown", b.scrollBarTouchStartHandler) : b.screen.addEventListener("touchstart", b.scrollBarTouchStartHandler), b.updateMobileScrollBarId_int = setInterval(b.updateMobileScrollBar, 16)
            }, b.scrollBarTouchStartHandler = function (e) {
                if (!(b.stageHeight > b.itemsTotalHeight || b.comboBox_do && b.comboBox_do.isShowed_bl)) {
                    e.preventDefault && e.preventDefault(), FWDAnimation.killTweensOf(b.itemsHolder_do);
                    var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                    b.isDragging_bl = !0, b.isScrollingOnMove_bl = !1, b.lastPresedY = t.screenY, b.checkLastPresedY = t.screenY, b.hasPointerEvent_bl ? (window.addEventListener("pointerup", b.scrollBarTouchEndHandler), window.addEventListener("pointermove", b.scrollBarTouchMoveHandler)) : (window.addEventListener("touchend", b.scrollBarTouchEndHandler), window.addEventListener("touchmove", b.scrollBarTouchMoveHandler)), clearInterval(b.updateMoveMobileScrollbarId_int), b.updateMoveMobileScrollbarId_int = setInterval(b.updateMoveMobileScrollbar, 20)
                }
            }, b.scrollBarTouchMoveHandler = function (e) {
                e.preventDefault && e.preventDefault(), b.showDisable();
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                (t.screenY >= b.checkLastPresedY + 6 || t.screenY <= b.checkLastPresedY - 6) && (b.isScrollingOnMove_bl = !0);
                var o = t.screenY - b.lastPresedY;
                b.playListFinalY += o, b.playListFinalY = Math.round(b.playListFinalY), b.lastPresedY = t.screenY, b.vy = 2 * o
            }, b.scrollBarTouchEndHandler = function (e) {
                b.isDragging_bl = !1, clearInterval(b.updateMoveMobileScrollbarId_int), clearTimeout(b.disableOnMoveId_to), b.disableOnMoveId_to = setTimeout(function () {
                    b.hideDisable()
                }, 50), b.hasPointerEvent_bl ? (window.removeEventListener("pointerup", b.scrollBarTouchEndHandler), window.removeEventListener("pointermove", b.scrollBarTouchMoveHandler)) : (window.removeEventListener("touchend", b.scrollBarTouchEndHandler), window.removeEventListener("touchmove", b.scrollBarTouchMoveHandler))
            }, b.updateMoveMobileScrollbar = function () {
                b.itemsHolder_do.setY(b.playListFinalY)
            }, b.updateMobileScrollBar = function (e) {
                b.isDragging_bl || FWDAnimation.isTweening(b.itemsHolder_do) || (b.vy *= b.friction, b.playListFinalY += b.vy, 0 < b.playListFinalY ? (b.vy2 = .3 * (0 - b.playListFinalY), b.vy *= b.friction, b.playListFinalY += b.vy2) : b.playListFinalY < b.stageHeight - b.separator_do.h - b.itemsTotalHeight - b.searchBar_do.h && (b.vy2 = .3 * (b.stageHeight - b.separator_do.h - b.itemsTotalHeight - b.searchBar_do.h - b.playListFinalY), b.vy *= b.friction, b.playListFinalY += b.vy2), b.stageHeight > b.itemsTotalHeight && (b.playListFinalY = 0), b.itemsHolder_do.setY(Math.round(b.playListFinalY)))
            }, this.hide = function (e, t) {
                !b.isShowed_bl && !t || m.openInPopup_bl || (b.isShowed_bl = !1, e ? (b.comboBox_do && FWDAnimation.to(b.comboBox_do, .8, {
                    y: -b.comboBox_do.h,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(b.separator_do, .8, {
                    y: -b.separator_do.h,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(b.mainHolder_do, .8, {
                    y: -b.h,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(m.main_do, .8, {
                    height: m.controller_do.h,
                    ease: Expo.easeInOut
                }), FWDAnimation.to(m.stageContainer, .8, {
                    css: {
                        height: m.controller_do.h
                    },
                    ease: Expo.easeInOut
                })) : (b.comboBox_do && FWDAnimation.killTweensOf(b.comboBox_do), FWDAnimation.killTweensOf(b.separator_do), FWDAnimation.killTweensOf(b.mainHolder_do), FWDAnimation.killTweensOf(m.main_do), FWDAnimation.killTweensOf(m.stageContainer), b.comboBox_do.setY(-b.comboBox_do.h), b.separator_do.setY(-b.separator_do.h), b.mainHolder_do.setY(-b.h), m.main_do.setHeight(m.controller_do.h), m.stageContainer.style.height = m.controller_do.h + "px"))
            }, this.show = function (e, t) {
                if (!b.isShowed_bl || t) {
                    b.isShowed_bl = !0;
                    var o = 0;
                    b.usePlaylistsSelectBox_bl && (o = b.comboboxHeight), e ? (b.comboBox_do && FWDAnimation.to(b.comboBox_do, .8, {
                        y: 0,
                        ease: Expo.easeInOut
                    }), FWDAnimation.to(b.separator_do, .8, {
                        y: 0,
                        ease: Expo.easeInOut
                    }), FWDAnimation.to(b.mainHolder_do, .8, {
                        y: b.separator_do.h + o,
                        ease: Expo.easeInOut
                    }), m.openInPopup_bl || FWDAnimation.to(m.main_do, .8, {
                        h: m.controller_do.h + b.stageHeight,
                        ease: Expo.easeInOut
                    }), FWDAnimation.to(m.stageContainer, .8, {
                        css: {
                            height: m.controller_do.h + b.stageHeight + o
                        },
                        ease: Expo.easeInOut
                    })) : (b.comboBox_do && FWDAnimation.killTweensOf(b.comboBox_do), FWDAnimation.killTweensOf(b.separator_do), FWDAnimation.killTweensOf(b.mainHolder_do), FWDAnimation.killTweensOf(m.main_do), FWDAnimation.killTweensOf(m.stageContainer), b.comboBox_do.setY(0), b.separator_do.setY(0), b.mainHolder_do.setY(b.separator_do.h + o), m.openInPopup_bl || m.main_do.setHeight(m.controller_do.h + b.stageHeight), m.stageContainer.style.height = m.controller_do.h + b.stageHeight + o + "px")
                }
            }, b.updateHEXColors = function (e, t) {
                b.normalColor_str = e, b.selectedColor_str = t, b.sortNButton_do && b.sortNButton_do.updateHEXColors(e, t), b.sortAButton_do && b.sortAButton_do.updateHEXColors(e, t), b.ascDscButton_do && b.ascDscButton_do.updateHEXColors(e, t), FWDRAPUtils.changeCanvasHEXColor(b.inputArrow_img, b.mainScrubberDragLeft_canvas, e);
                for (var o = 0; o < b.items_ar.length; o++) b.items_ar[o].updateHEXColors(e, t)
            }, this.init()
        };
        r.setPrototype = function () {
            r.prototype = new FWDRAPDisplayObject("div")
        }, r.CHANGE_PLAYLIST = "changePlaylist", r.PLAY = "play", r.PAUSE = "pause", r.UPDATE_TRACK_TITLE_if_FOLDER = "pause", r.PLAY_PREV_VIDEO = "playNextVideo", r.PLAY_NEXT_VIDEO = "playPrevVideo", r.prototype = null, window.FWDRAPPlaylist = r
    }(),
    function () {
        var O = function (e, t, o, s, i, n, r, l, a, d, u, c, h, _, f, p, m, b, g, y, v, S, T, P, w, D, B, A, F, H, W, C, R) {
            var E = this;
            O.prototype;
            this.playlistItemGrad1_img = r, this.playlistItemGrad2_img = l, this.playlistItemProgress_img = a, this.playlistItemProgress2_img = d, this.playlistPlayButtonN_img = u, this.playlistDownloadButtonN_img = o, this.playlistDownloadButtonS_str = s, this.playlistBuyButtonN_img = i, this.playlistBuyButtonS_str = n, this.progress_do = null, this.playPause_do = null, this.playN_do = null, this.playS_do = null, this.pauseN_do = null, this.pauseS_do = null, this.titleText_do = null, this.grad_do = null, this.durationText_do = null, this.dumy_do = null, this.title_str = e, this.titleText_str = t, E.useHEXColorsForSkin_bl = H, E.normalButtonsColor_str = W, E.selectedButtonsColor_str = C, this.playlistItemBk1Path_str = c, this.playlistItemBk2Path_str = h, this.playlistPlayButtonN_str = _, this.playlistPlayButtonS_str = f, this.playlistPauseButtonN_str = p, this.playlistPauseButtonS_str = m, this.titleNormalColor_str = b, this.trackTitleSelected_str = g, this.durationColor_str = y, this.itemHeight = E.playlistItemGrad1_img.height, this.id = v, this.sortId = v, this.playPauseButtonOffsetLeftAndRight = S, this.trackTitleOffsetLeft = T, this.duration = F, this.durationOffsetRight = P, this.textHeight, this.durationWidth = 0, this.titleWidth = 0, this.playPauseButtonWidth = E.playlistPlayButtonN_img.width, this.playPauseButtonHeight = E.playlistPlayButtonN_img.height, this.progressPercent = 0, this.stageWidth = 0, this.downloadButtonOffsetRight = w, this.type = -1, this.setTextsSizeId_to, this.showDownloadButton_bl = B, this.showBuyButton_bl = A, this.showPlayPauseButton_bl = D, this.showDuration_bl = F, this.isActive_bl = !1, this.isSelected_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, E.init = function () {
                E.setupProgress(), E.setupTitle(), E.showPlayPauseButton_bl && E.setupPlayPauseButton(), E.setupGrad(), E.showDuration_bl && E.setupDuration(), E.setNormalState(!1, !0), E.setupDumy(), E.showDownloadButton_bl && E.setupDownloadButton(), E.showBuyButton_bl && E.setupBuyButton(), E.id % 2 == 0 ? (E.getStyle().background = "url('" + E.playlistItemBk1Path_str + "')", E.grad_do.getStyle().background = "url('" + E.playlistItemGrad1_img.src + "')", E.progress_do.getStyle().background = "url('" + E.playlistItemProgress_img.src + "')", E.type = 1) : (E.getStyle().background = "url('" + E.playlistItemBk2Path_str + "')", E.grad_do.getStyle().background = "url('" + E.playlistItemGrad2_img.src + "')", E.progress_do.getStyle().background = "url('" + E.playlistItemProgress2_img.src + "')", E.type = 2), E.isMobile_bl ? E.hasPointerEvent_bl ? (E.dumy_do.screen.addEventListener("pointerup", E.onMouseUp), E.dumy_do.screen.addEventListener("pointerover", E.onMouseOver), E.dumy_do.screen.addEventListener("pointerout", E.onMouseOut)) : E.dumy_do.screen.addEventListener("touchend", E.onMouseUp) : E.dumy_do.screen.addEventListener ? (E.dumy_do.screen.addEventListener("mouseover", E.onMouseOver), E.dumy_do.screen.addEventListener("mouseout", E.onMouseOut), E.dumy_do.screen.addEventListener("mouseup", E.onMouseUp)) : E.screen.attachEvent && (E.dumy_do.screen.attachEvent("onmouseover", E.onMouseOver), E.dumy_do.screen.attachEvent("onmouseout", E.onMouseOut), E.dumy_do.screen.attachEvent("onmouseup", E.onMouseUp))
            }, E.onMouseOver = function (e, t) {
                E.isActive_bl || e.pointerType && "mouse" != e.pointerType || E.setSelectedState(!0)
            }, E.onMouseOut = function (e) {
                E.isActive_bl || e.pointerType && "mouse" != e.pointerType || E.setNormalState(!0)
            }, E.onMouseUp = function (e) {
                R.isScrollingOnMove_bl || 2 == e.button || (e.preventDefault && e.preventDefault(), E.dispatchEvent(O.MOUSE_UP, {
                    id: E.id
                }))
            }, E.changeSource = function (e) {
                0 == e ? 1 != E.type && (E.grad_do.getStyle().background = "url('" + E.playlistItemGrad1_img.src + "')", E.getStyle().background = "url('" + E.playlistItemBk1Path_str + "')", E.progress_do.getStyle().background = "url('" + E.playlistItemProgress_img.src + "')", E.type = 1) : 2 != E.type && (E.grad_do.getStyle().background = "url('" + E.playlistItemGrad2_img.src + "')", E.getStyle().background = "url('" + E.playlistItemBk2Path_str + "')", E.progress_do.getStyle().background = "url('" + E.playlistItemProgress2_img.src + "')", E.type = 2)
            }, E.resize = function (e, t) {
                if ((!FWDRAPUtils.isIEAndLessThen9 || E.textHeight) && null != E) {
                    E.stageWidth = e;
                    var o = 0,
                        s = parseInt((t - E.textHeight) / 2) + 1;
                    E.playPause_do ? (E.titleText_do.setX(2 * E.playPauseButtonOffsetLeftAndRight + E.playPause_do.w + E.trackTitleOffsetLeft - 2), E.playPause_do.setY(parseInt((t - E.playPause_do.h) / 2))) : E.titleText_do.setX(E.trackTitleOffsetLeft), E.titleText_do.setY(s), E.buyButton_do && E.downloadButton_do ? (o = E.durationText_do ? (E.durationText_do.setX(e - E.durationWidth - E.durationOffsetRight + 1), E.durationText_do.setY(s), E.durationText_do.x) : e, E.downloadButton_do.setX(o - E.downloadButton_do.w - E.downloadButtonOffsetRight + 3), E.downloadButton_do.setY(parseInt((t - E.downloadButton_do.h) / 2)), E.buyButton_do.setX(E.downloadButton_do.x - E.buyButton_do.w - 4), E.buyButton_do.setY(parseInt((t - E.buyButton_do.h) / 2)), E.titleText_do.x + E.titleWidth + E.downloadButton_do.w + E.buyButton_do.w + E.downloadButtonOffsetRight + 4 > o ? E.grad_do.setX(E.buyButton_do.x - E.downloadButtonOffsetRight + 2) : E.grad_do.setX(-300)) : E.downloadButton_do ? (o = E.durationText_do ? (E.durationText_do.setX(e - E.durationWidth - E.durationOffsetRight + 1), E.durationText_do.setY(s), E.durationText_do.x) : e, E.downloadButton_do.setX(o - E.downloadButton_do.w - E.downloadButtonOffsetRight + 3), E.downloadButton_do.setY(parseInt((t - E.downloadButton_do.h) / 2)), E.titleText_do.x + E.titleWidth + E.downloadButton_do.w + E.downloadButtonOffsetRight > o ? E.grad_do.setX(E.downloadButton_do.x - E.downloadButtonOffsetRight + 2) : E.grad_do.setX(-300)) : E.buyButton_do ? (o = E.durationText_do ? (E.durationText_do.setX(e - E.durationWidth - E.durationOffsetRight + 1), E.durationText_do.setY(s), E.durationText_do.x) : e, E.buyButton_do.setX(o - E.buyButton_do.w - E.downloadButtonOffsetRight + 3), E.buyButton_do.setY(parseInt((t - E.buyButton_do.h) / 2)), E.titleText_do.x + E.titleWidth + E.buyButton_do.w + E.downloadButtonOffsetRight > o ? E.grad_do.setX(E.buyButton_do.x - E.downloadButtonOffsetRight + 2) : E.grad_do.setX(-300)) : E.durationText_do ? (E.durationText_do.setX(e - E.durationWidth - E.durationOffsetRight + 1), E.durationText_do.setY(s), E.titleText_do.x + E.titleWidth > E.durationText_do.x ? E.grad_do.setX(E.durationText_do.x - E.durationOffsetRight + 2) : E.grad_do.setX(-300)) : E.downloadButton_do ? (E.downloadButton_do.setX(e - E.downloadButton_do.w - E.downloadButtonOffsetRight + 2), E.titleText_do.x + E.titleWidth > E.downloadButton_do.x ? E.grad_do.setX(E.downloadButton_do.x - E.downloadButtonOffsetRight + 2) : E.grad_do.setX(-300), E.downloadButton_do.setY(parseInt((t - E.downloadButton_do.h) / 2))) : E.titleText_do.x + E.titleWidth > e - 10 ? E.grad_do.setX(e - 15) : E.grad_do.setX(-300), E.dumy_do.setWidth(e), E.dumy_do.setHeight(t), E.setWidth(e), E.setHeight(t)
                }
            }, this.setupDownloadButton = function () {
                FWDRAPSimpleSizeButton.setPrototype(), E.downloadButton_do = new FWDRAPSimpleSizeButton(E.playlistDownloadButtonS_str, E.playlistDownloadButtonN_img.src, E.playlistDownloadButtonN_img.width, E.playlistDownloadButtonN_img.height, E.useHEXColorsForSkin_bl, E.normalButtonsColor_str, E.selectedButtonsColor_str), E.downloadButton_do.getStyle().position = "absolute", E.downloadButton_do.addListener(FWDRAPSimpleSizeButton.CLICK, E.dwButtonClickHandler), E.addChild(E.downloadButton_do)
            }, this.dwButtonClickHandler = function () {
                E.dispatchEvent(O.DOWNLOAD, {
                    id: E.id
                })
            }, this.setupBuyButton = function () {
                FWDRAPSimpleSizeButton.setPrototype(), E.buyButton_do = new FWDRAPSimpleSizeButton(E.playlistBuyButtonS_str, E.playlistBuyButtonN_img.src, E.playlistBuyButtonN_img.width, E.playlistBuyButtonN_img.height, E.useHEXColorsForSkin_bl, E.normalButtonsColor_str, E.selectedButtonsColor_str), E.buyButton_do.getStyle().position = "absolute", E.buyButton_do.addListener(FWDRAPSimpleSizeButton.CLICK, E.buyButtonClickHandler), E.addChild(E.buyButton_do)
            }, this.buyButtonClickHandler = function () {
                E.dispatchEvent(O.BUY, {
                    id: E.id
                })
            }, this.setupProgress = function () {
                E.progress_do = new FWDRAPDisplayObject("div"), E.progress_do.setBackfaceVisibility(), E.progress_do.setHeight(a.height), E.addChild(E.progress_do)
            }, this.updateProgressPercent = function (e) {
                null != E && E.progressPercent != e && (E.progressPercent = e, E.progress_do.setWidth(parseInt(E.stageWidth * e)))
            }, this.setupPlayPauseButton = function () {
                E.playPause_do = new FWDRAPDisplayObject("div"), E.playPause_do.setWidth(E.playPauseButtonWidth), E.playPause_do.setHeight(E.playPauseButtonHeight), E.playN_do = new FWDRAPDisplayObject("div"), E.useHEXColorsForSkin_bl ? (E.playNImage_img = new Image, E.playNImage_img.src = E.playlistPlayButtonN_str, E.playNImage_img.onload = function () {
                    var e = FWDRAPUtils.getCanvasWithModifiedColor(E.playNImage_img, E.normalButtonsColor_str, !0);
                    E.playNImageCanvas = e.canvas, E.playNImageBackground = e.image, E.playN_do.getStyle().background = "url('" + E.playNImageBackground.src + "')"
                }) : E.playN_do.getStyle().background = "url('" + E.playlistPlayButtonN_str + "') no-repeat", E.playN_do.setWidth(E.playPauseButtonWidth), E.playN_do.setHeight(E.playPauseButtonHeight), E.playS_do = new FWDRAPDisplayObject("div"), E.useHEXColorsForSkin_bl ? (E.playSImage_img = new Image, E.playSImage_img.src = E.playlistPlayButtonS_str, E.playSImage_img.onload = function () {
                    var e = FWDRAPUtils.getCanvasWithModifiedColor(E.playSImage_img, E.selectedButtonsColor_str, !0);
                    E.playSImageCanvas = e.canvas, E.playSImageBackground = e.image, E.playS_do.getStyle().background = "url('" + E.playSImageBackground.src + "')"
                }) : E.playS_do.getStyle().background = "url('" + E.playlistPlayButtonS_str + "') no-repeat", E.playS_do.setWidth(E.playPauseButtonWidth), E.playS_do.setHeight(E.playPauseButtonHeight), E.playS_do.setAlpha(0), E.pauseN_do = new FWDRAPDisplayObject("div"), E.useHEXColorsForSkin_bl ? (E.pauseNImage_img = new Image, E.pauseNImage_img.src = E.playlistPauseButtonN_str, E.pauseNImage_img.onload = function () {
                    var e = FWDRAPUtils.getCanvasWithModifiedColor(E.pauseNImage_img, E.normalButtonsColor_str, !0);
                    E.pauseNImageCanvas = e.canvas, E.pauseNImageBackground = e.image, E.pauseN_do.getStyle().background = "url('" + E.pauseNImageBackground.src + "')"
                }) : E.pauseN_do.getStyle().background = "url('" + E.playlistPauseButtonN_str + "') no-repeat", E.pauseN_do.setWidth(E.playPauseButtonWidth), E.pauseN_do.setHeight(E.playPauseButtonHeight), E.pauseS_do = new FWDRAPDisplayObject("div"), E.useHEXColorsForSkin_bl ? (E.pauseSImage_img = new Image, E.pauseSImage_img.src = E.playlistPauseButtonS_str, E.pauseSImage_img.onload = function () {
                    var e = FWDRAPUtils.getCanvasWithModifiedColor(E.pauseSImage_img, E.selectedButtonsColor_str, !0);
                    E.pauseSImageCanvas = e.canvas, E.pauseSImageBackground = e.image, E.pauseS_do.getStyle().background = "url('" + E.pauseSImageBackground.src + "')"
                }) : E.pauseS_do.getStyle().background = "url('" + E.playlistPauseButtonS_str + "') no-repeat", E.pauseS_do.setWidth(E.playPauseButtonWidth), E.pauseS_do.setHeight(E.playPauseButtonHeight), E.pauseN_do.setX(-300), E.pauseS_do.setX(-300), E.pauseS_do.setAlpha(0), E.playPause_do.setX(E.playPauseButtonOffsetLeftAndRight), E.playPause_do.addChild(E.playN_do), E.playPause_do.addChild(E.playS_do), E.playPause_do.addChild(E.pauseN_do), E.playPause_do.addChild(E.pauseS_do), E.addChild(E.playPause_do)
            }, this.setupTitle = function () {
                E.titleText_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isApple && (E.titleText_do.hasTransform3d_bl = !1, E.titleText_do.hasTransform2d_bl = !1), E.titleText_do.setOverflow("visible"), E.titleText_do.setBackfaceVisibility(), E.titleText_do.getStyle().fontFamily = "Arial", E.titleText_do.getStyle().fontSize = "12px", E.titleText_do.getStyle().whiteSpace = "nowrap", E.titleText_do.getStyle().textAlign = "left", E.titleText_do.getStyle().fontSmoothing = "antialiased", E.titleText_do.getStyle().webkitFontSmoothing = "antialiased", E.titleText_do.getStyle().textRendering = "optimizeLegibility", E.titleText_do.setInnerHTML(E.title_str), E.addChild(E.titleText_do)
            }, this.updateTitle = function () {
                null != E && E.titleText_do.setInnerHTML(E.title_str)
            }, this.setTextSizes = function (e) {
                null != E && (E.textHeight && !e || (E.titleWidth = E.titleText_do.screen.offsetWidth, E.textHeight = E.titleText_do.screen.offsetHeight, E.durationText_do && (E.durationWidth = E.durationText_do.screen.offsetWidth), E.grad_do.setWidth(150)))
            }, this.setupGrad = function () {
                E.grad_do = new FWDRAPDisplayObject("div"), E.grad_do.setOverflow("visible"), FWDRAPUtils.isApple && (E.grad_do.hasTransform3d_bl = !1, E.grad_do.hasTransform2d_bl = !1), E.grad_do.setBackfaceVisibility(), E.grad_do.setHeight(E.itemHeight), E.addChild(E.grad_do)
            }, this.setupDuration = function () {
                E.durationText_do = new FWDRAPDisplayObject("div"), FWDRAPUtils.isApple && (E.durationText_do.hasTransform3d_bl = !1, E.durationText_do.hasTransform2d_bl = !1), E.durationText_do.setOverflow("visible"), E.durationText_do.setBackfaceVisibility(), E.durationText_do.getStyle().fontFamily = "Arial", E.durationText_do.getStyle().fontSize = "12px", E.durationText_do.getStyle().whiteSpace = "nowrap", E.durationText_do.getStyle().textAlign = "left", E.durationText_do.getStyle().color = E.titleColor_str, E.durationText_do.getStyle().fontSmoothing = "antialiased", E.durationText_do.getStyle().webkitFontSmoothing = "antialiased", E.durationText_do.getStyle().textRendering = "optimizeLegibility", E.durationText_do.getStyle().color = E.durationColor_str, E.durationText_do.setInnerHTML(E.duration), E.addChild(E.durationText_do)
            }, this.setupDumy = function () {
                E.dumy_do = new FWDRAPDisplayObject("div"), E.dumy_do.setButtonMode(!0), FWDRAPUtils.isIE && (E.dumy_do.setBkColor("#FFFFFF"), E.dumy_do.setAlpha(.001)), E.addChild(E.dumy_do)
            }, this.setNormalState = function (e, t) {
                (E.isSelected_bl || t) && (E.isSelected_bl = !1, e ? (FWDAnimation.to(E.titleText_do.screen, .8, {
                    css: {
                        color: E.titleNormalColor_str
                    },
                    ease: Expo.easeOut
                }), E.durationText_do && FWDAnimation.to(E.durationText_do.screen, .8, {
                    css: {
                        color: E.durationColor_str
                    },
                    ease: Expo.easeOut
                }), E.playPause_do && (FWDAnimation.to(E.pauseS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDAnimation.to(E.playS_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))) : (FWDAnimation.killTweensOf(E.titleText_do), E.titleText_do.getStyle().color = E.titleNormalColor_str, E.durationText_do && (E.durationText_do.getStyle().color = E.durationColor_str), E.playPause_do && (FWDAnimation.killTweensOf(E.pauseS_do), FWDAnimation.killTweensOf(E.playS_do), E.pauseS_do.setAlpha(0), E.playS_do.setAlpha(0))))
            }, this.setSelectedState = function (e) {
                E.isSelected_bl || (E.isSelected_bl = !0, e ? (FWDAnimation.to(E.titleText_do.screen, .8, {
                    css: {
                        color: E.trackTitleSelected_str
                    },
                    ease: Expo.easeOut
                }), E.durationText_do && FWDAnimation.to(E.durationText_do.screen, .8, {
                    css: {
                        color: E.trackTitleSelected_str
                    },
                    ease: Expo.easeOut
                }), E.playPause_do && (FWDAnimation.to(E.pauseS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDAnimation.to(E.playS_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }))) : (FWDAnimation.killTweensOf(E.titleText_do), E.durationText_do && (E.durationText_do.getStyle().color = E.trackTitleSelected_str), E.titleText_do.getStyle().color = E.trackTitleSelected_str, E.playPause_do && (FWDAnimation.killTweensOf(E.pauseS_do), FWDAnimation.killTweensOf(E.playS_do), E.pauseS_do.setAlpha(1), E.playS_do.setAlpha(1))))
            }, this.setActive = function () {
                E.isActive_bl || (E.isActive_bl = !0, E.setSelectedState(!0))
            }, this.setInActive = function () {
                E.isActive_bl && (E.isActive_bl = !1, E.setNormalState(!0), E.updateProgressPercent(0), E.showPlayButton())
            }, this.showPlayButton = function () {
                E && E.playN_do && (E.playN_do.setX(0), E.playS_do.setX(0), E.pauseN_do.setX(-300), E.pauseS_do.setX(-300))
            }, this.showPauseButton = function () {
                E.playN_do && (E.playN_do.setX(-300), E.playS_do.setX(-300), E.pauseN_do.setX(0), E.pauseS_do.setX(0))
            }, this.destroy = function () {
                this.playlistItemGrad1_img = null, this.playlistItemProgress_img = null, this.playlistPlayButtonN_img = null, this.playlistDownloadButtonN_img = null, this.playlistDownloadButtonS_str = null, this.playlistBuyButtonN_img = null, this.playlistBuyButtonS_str = null, this.progress_do = null, this.playPause_do = null, this.playN_do = null, this.playS_do = null, this.pauseN_do = null, this.pauseS_do = null, this.titleText_do = null, this.grad_do = null, this.durationText_do = null, this.dumy_do = null, this.title_str = null, this.playlistItemBk1Path_str = null, this.playlistItemBk2Path_str = null, this.playlistPlayButtonN_str = null, this.playlistPlayButtonS_str = null, this.playlistPauseButtonN_str = null, this.playlistPauseButtonS_str = null, this.titleNormalColor_str = null, this.trackTitleSelected_str = null, this.durationColor_str = y, E.setInnerHTML(""), E = null, O.prototype = null
            }, E.updateHEXColors = function (e, t) {
                if (E.normalColor_str = e, E.selectedColor_str = t, E.buyButton_do && E.buyButton_do.updateHEXColors(e, t), E.downloadButton_do && E.downloadButton_do.updateHEXColors(e, t), E.playNImage_img) {
                    var o = FWDRAPUtils.changeCanvasHEXColor(E.playNImage_img, E.playNImageCanvas, e, !0),
                        s = FWDRAPUtils.changeCanvasHEXColor(E.playSImage_img, E.playSImageCanvas, t, !0);
                    E.playN_do.getStyle().background = "url('" + o.src + "')", E.playS_do.getStyle().background = "url('" + s.src + "')";
                    var i = FWDRAPUtils.changeCanvasHEXColor(E.pauseNImage_img, E.pauseNImageCanvas, e, !0),
                        n = FWDRAPUtils.changeCanvasHEXColor(E.pauseSImage_img, E.pauseSImageCanvas, t, !0);
                    E.pauseN_do.getStyle().background = "url('" + i.src + "')", E.pauseS_do.getStyle().background = "url('" + n.src + "')"
                }
            }, this.init()
        };
        O.setPrototype = function () {
            O.prototype = new FWDRAPDisplayObject("div")
        }, O.PLAY = "play", O.PAUSE = "pause", O.MOUSE_UP = "mouseUp", O.DOWNLOAD = "download", O.BUY = "buy", O.prototype = null, window.FWDRAPPlaylistItem = O
    }(),
    function (e) {
        var l = function (e, t, o, s, i, n) {
            var r = this;
            l.prototype;
            this.imageSource_img = e, this.image_sdo = null, this.segmentWidth = t, this.segmentHeight = o, this.totalSegments = s, this.animDelay = i || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !1, this.skipFirstFrame_bl = n, this.init = function () {
                r.getStyle().zIndex = 1, r.setWidth(r.segmentWidth), r.setHeight(r.segmentHeight), r.getStyle().pointerEvents = "none", r.image_sdo = new FWDRAPDisplayObject("img"), r.image_sdo.setScreen(r.imageSource_img), r.image_sdo.hasTransform3d_bl = !1, r.image_sdo.hasTransform2d_bl = !1, r.addChild(this.image_sdo), r.hide(!1)
            }, this.start = function () {
                null != r && (clearInterval(r.delayTimerId_int), r.delayTimerId_int = setInterval(r.updatePreloader, r.animDelay))
            }, this.stop = function () {
                clearInterval(r.delayTimerId_int), r.image_sdo.setX(0)
            }, this.updatePreloader = function () {
                if (null != r) {
                    r.count++, r.count > r.totalSegments - 1 && (r.skipFirstFrame_bl ? r.count = 1 : r.count = 0);
                    var e = r.count * r.segmentWidth;
                    r.image_sdo.setX(-e)
                }
            }, this.show = function () {
                this.setVisible(!0), this.start(), FWDAnimation.killTweensOf(this), FWDAnimation.to(this, 1, {
                    alpha: 1
                }), this.isShowed_bl = !0
            }, this.hide = function (e) {
                this.isShowed_bl && (FWDAnimation.killTweensOf(this), e ? FWDAnimation.to(this, 1, {
                    alpha: 0,
                    onComplete: this.onHideComplete
                }) : (this.setVisible(!1), this.setAlpha(0)), this.isShowed_bl = !1)
            }, this.onHideComplete = function () {
                r.stop(), r.setVisible(!1), r.dispatchEvent(l.HIDE_COMPLETE)
            }, this.init()
        };
        l.setPrototype = function () {
            l.prototype = new FWDRAPDisplayObject("div")
        }, l.HIDE_COMPLETE = "hideComplete", l.prototype = null, e.FWDRAPPreloader = l
    }(window),
    function (e) {
        var r = function (e, t, o, s, i) {
            var n = this;
            r.prototype;
            this.buttonRef_do = e, this.bkColor = t, this.text_do = null, this.pointer_do = null, this.fontColor_str = o, this.toolTipLabel_str = s, this.toolTipsButtonsHideDelay = 1e3 * i, this.pointerWidth = 7, this.pointerHeight = 4, this.showWithDelayId_to, this.isMobile_bl = FWDRAPUtils.isMobile, this.isShowed_bl = !0, this.init = function () {
                n.setOverflow("visible"), n.setupMainContainers(), n.setLabel(s), n.hide(), n.setVisible(!1), n.getStyle().backgroundColor = n.bkColor, n.getStyle().zIndex = 9999999999999, n.getStyle().pointerEvents = "none"
            }, this.setupMainContainers = function () {
                n.pointerHolder_do = new FWDRAPDisplayObject("div"), n.pointerHolder_do.setOverflow("visible"), n.addChild(n.pointerHolder_do), n.text_do = new FWDRAPDisplayObject("div"), n.text_do.hasTransform3d_bl = !1, n.text_do.hasTransform2d_bl = !1, n.text_do.setBackfaceVisibility(), n.text_do.setDisplay("inline-block"), n.text_do.getStyle().fontFamily = "Arial", n.text_do.getStyle().fontSize = "12px", n.text_do.getStyle().color = n.fontColor_str, n.text_do.getStyle().whiteSpace = "nowrap", n.text_do.getStyle().fontSmoothing = "antialiased", n.text_do.getStyle().webkitFontSmoothing = "antialiased", n.text_do.getStyle().textRendering = "optimizeLegibility", n.text_do.getStyle().padding = "6px", n.text_do.getStyle().paddingTop = "4px", n.text_do.getStyle().paddingBottom = "4px", n.addChild(n.text_do), n.pointer_do = new FWDRAPDisplayObject("div"), n.pointer_do.setBkColor(n.bkColor), n.pointer_do.screen.style = "border: 4px solid transparent; border-top-color: " + n.bkColor + ";", n.pointerHolder_do.addChild(n.pointer_do)
            }, this.setLabel = function (e) {
                void 0 !== e && (n.text_do.setInnerHTML(e), setTimeout(function () {
                    null != n && (n.setWidth(n.text_do.getWidth()), n.setHeight(n.text_do.getHeight()), n.positionPointer())
                }, 20))
            }, this.positionPointer = function (e) {
                var t, o;
                e = e || 0, t = parseInt((n.w - 8) / 2) + e, o = n.h, n.pointerHolder_do.setX(t), n.pointerHolder_do.setY(o)
            }, this.show = function () {
                n.isShowed_bl = !0, clearTimeout(n.hideWithDelayId_to), FWDAnimation.killTweensOf(n), clearTimeout(n.showWithDelayId_to), n.showWithDelayId_to = setTimeout(n.showFinal, n.toolTipsButtonsHideDelay)
            }, this.showFinal = function () {
                n.setVisible(!0), FWDAnimation.to(n, .4, {
                    alpha: 1,
                    onComplete: function () {
                        n.setVisible(!0)
                    },
                    ease: Quart.easeOut
                })
            }, this.hide = function () {
                n.isShowed_bl && (clearTimeout(n.showWithDelayId_to), clearTimeout(n.hideWithDelayId_to), n.hideWithDelayId_to = setTimeout(function () {
                    FWDAnimation.killTweensOf(n), n.setVisible(!1), n.isShowed_bl = !1, n.setAlpha(0)
                }, 100))
            }, this.init()
        };
        r.setPrototype = function () {
            r.prototype = null, r.prototype = new FWDRAPDisplayObject("div")
        }, r.CLICK = "onClick", r.MOUSE_DOWN = "onMouseDown", r.prototype = null, e.FWDRAPScrubberTooltip = r
    }(window),
    function (s) {
        var e = function (o, t) {
            var f = this;
            e.prototype;
            this.embedColoseN_img = o.embedColoseN_img, this.bk_do = null, this.mainHolder_do = null, this.closeButton_do = null, this.buttons_ar = [], this.embedWindowBackground_str = o.shareBkPath_str, this.embedWindowCloseButtonMargins = o.buttonsMargins, this.totalWidth = 0, this.stageWidth = 0, this.stageHeight = 0, this.minMarginXSpace = 20, this.hSpace = 20, this.minHSpace = 10, this.vSpace = 15, this.isShowed_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                -1 != o.skinPath_str.indexOf("hex_white") ? f.selectedButtonsColor_str = "#FFFFFF" : f.selectedButtonsColor_str = o.selectedButtonsColor_str, f.setBackfaceVisibility(), f.mainHolder_do = new FWDRAPDisplayObject("div"), f.mainHolder_do.hasTransform3d_bl = !1, f.mainHolder_do.hasTransform2d_bl = !1, f.mainHolder_do.setBackfaceVisibility(), f.bk_do = new FWDRAPDisplayObject("div"), f.bk_do.getStyle().width = "100%", f.bk_do.getStyle().height = "100%", f.bk_do.setAlpha(.9), f.bk_do.getStyle().background = "url('" + f.embedWindowBackground_str + "')", FWDRAPSimpleButton.setPrototype(), f.closeButton_do = new FWDRAPSimpleButton(o.shareClooseN_img, o.embedWindowClosePathS_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, f.selectedButtonsColor_str), f.closeButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.closeButtonOnMouseUpHandler), f.addChild(f.mainHolder_do), f.mainHolder_do.addChild(f.bk_do), f.mainHolder_do.addChild(f.closeButton_do), this.setupButtons()
            }, this.closeButtonOnMouseUpHandler = function () {
                f.isShowed_bl && f.hide()
            }, this.positionAndResize = function () {
                f.stageWidth = t.stageWidth, f.stageHeight = t.stageHeight, f.closeButton_do.setX(f.stageWidth - f.closeButton_do.w - f.embedWindowCloseButtonMargins), f.closeButton_do.setY(f.embedWindowCloseButtonMargins), f.setWidth(f.stageWidth), f.setHeight(f.stageHeight), f.mainHolder_do.setWidth(f.stageWidth), f.mainHolder_do.setHeight(f.stageHeight), f.positionButtons()
            }, this.setupButtons = function () {
                FWDRAPSimpleButton.setPrototype(), f.facebookButton_do = new FWDRAPSimpleButton(o.facebookN_img, o.facebookSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.facebookButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.facebookOnMouseUpHandler), this.buttons_ar.push(f.facebookButton_do), FWDRAPSimpleButton.setPrototype(), f.googleButton_do = new FWDRAPSimpleButton(o.googleN_img, o.googleSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.googleButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.googleOnMouseUpHandler), this.buttons_ar.push(f.googleButton_do), FWDRAPSimpleButton.setPrototype(), f.twitterButton_do = new FWDRAPSimpleButton(o.twitterN_img, o.twitterSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.twitterButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.twitterOnMouseUpHandler), this.buttons_ar.push(f.twitterButton_do), FWDRAPSimpleButton.setPrototype(), f.likedinButton_do = new FWDRAPSimpleButton(o.likedInkN_img, o.likedInSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.likedinButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.likedinOnMouseUpHandler), this.buttons_ar.push(f.likedinButton_do), FWDRAPSimpleButton.setPrototype(), f.bufferButton_do = new FWDRAPSimpleButton(o.bufferkN_img, o.bufferSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.bufferButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.bufferOnMouseUpHandler), this.buttons_ar.push(f.bufferButton_do), FWDRAPSimpleButton.setPrototype(), f.diggButton_do = new FWDRAPSimpleButton(o.diggN_img, o.diggSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.diggButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.diggOnMouseUpHandler), this.buttons_ar.push(f.diggButton_do), FWDRAPSimpleButton.setPrototype(), f.redditButton_do = new FWDRAPSimpleButton(o.redditN_img, o.redditSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.redditButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.redditOnMouseUpHandler), this.buttons_ar.push(f.redditButton_do), FWDRAPSimpleButton.setPrototype(), f.thumbrlButton_do = new FWDRAPSimpleButton(o.thumbrlN_img, o.thumbrlSPath_str, void 0, !0, o.useHEXColorsForSkin_bl, o.normalButtonsColor_str, o.selectedButtonsColor_str), f.thumbrlButton_do.addListener(FWDRAPSimpleButton.MOUSE_UP, f.thumbrlOnMouseUpHandler), this.buttons_ar.push(f.thumbrlButton_do), f.mainHolder_do.addChild(f.facebookButton_do), f.mainHolder_do.addChild(f.googleButton_do), f.mainHolder_do.addChild(f.twitterButton_do), f.mainHolder_do.addChild(f.likedinButton_do), f.mainHolder_do.addChild(f.bufferButton_do), f.mainHolder_do.addChild(f.diggButton_do), f.mainHolder_do.addChild(f.redditButton_do), f.mainHolder_do.addChild(f.thumbrlButton_do)
            }, this.facebookOnMouseUpHandler = function () {
                var e = "http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.googleOnMouseUpHandler = function () {
                var e = "https://plus.google.com/share?url=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.twitterOnMouseUpHandler = function () {
                var e = "http://twitter.com/home?status=" + encodeURIComponent(location.href);
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.likedinOnMouseUpHandler = function () {
                var e = "https://www.linkedin.com/cws/share?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.bufferOnMouseUpHandler = function () {
                var e = "https://buffer.com/add?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.diggOnMouseUpHandler = function () {
                var e = "http://digg.com/submit?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.redditOnMouseUpHandler = function () {
                var e = "https://www.reddit.com/?submit=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.thumbrlOnMouseUpHandler = function () {
                var e = "http://www.tumblr.com/share/link?url=" + location.href;
                s.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600")
            }, this.positionButtons = function () {
                var e, t, o, s = [],
                    i = [],
                    n = [],
                    r = 0,
                    l = 0,
                    a = 0;
                s[a] = [0], i[a] = f.buttons_ar[0].totalWidth, n[a] = f.buttons_ar[0].totalWidth, f.totalButtons = f.buttons_ar.length;
                for (var d = 1; d < f.totalButtons; d++) e = f.buttons_ar[d], i[a] + e.totalWidth + f.minHSpace > f.stageWidth - f.minMarginXSpace ? (s[++a] = [], s[a].push(d), i[a] = e.totalWidth, n[a] = e.totalWidth) : (s[a].push(d), i[a] += e.totalWidth + f.minHSpace, n[a] += e.totalWidth);
                r = parseInt((f.stageHeight - ((a + 1) * (e.totalHeight + f.vSpace) - f.vSpace)) / 2);
                for (d = 0; d < a + 1; d++) {
                    var u, c = 0;
                    if (1 < s[d].length) {
                        u = Math.min((f.stageWidth - f.minMarginXSpace - n[d]) / (s[d].length - 1), f.hSpace);
                        var h = n[d] + u * (s[d].length - 1);
                        c = parseInt((f.stageWidth - h) / 2)
                    } else c = parseInt((f.stageWidth - i[d]) / 2);
                    0 < d && (r += e.h + f.vSpace);
                    for (var _ = 0; _ < s[d].length; _++) e = f.buttons_ar[s[d][_]], o = 0 == _ ? c : (t = f.buttons_ar[s[d][_] - 1]).finalX + t.totalWidth + u, e.finalX = o, e.finalY = r, l < e.finalY && (l = e.finalY), f.buttonsBarTotalHeight = l + e.totalHeight + f.startY, e.setX(e.finalX), e.setY(e.finalY)
                }
            }, this.show = function (e) {
                f.isShowed_bl || (f.isShowed_bl = !0, t.main_do.addChild(f), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && t.main_do.setSelectable(!0), f.positionAndResize(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), f.mainHolder_do.setY(-f.stageHeight), f.showCompleteId_to = setTimeout(f.showCompleteHandler, 900), setTimeout(function () {
                    FWDAnimation.to(f.mainHolder_do, .8, {
                        y: 0,
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                }, 100))
            }, this.showCompleteHandler = function () {}, this.hide = function () {
                f.isShowed_bl && (f.isShowed_bl = !1, t.customContextMenu_do && t.customContextMenu_do.enable(), clearTimeout(f.hideCompleteId_to), clearTimeout(f.showCompleteId_to), (!FWDRAPUtils.isMobile || FWDRAPUtils.isMobile && FWDRAPUtils.hasPointerEvent) && t.main_do.setSelectable(!1), f.hideCompleteId_to = setTimeout(f.hideCompleteHandler, 800), FWDAnimation.killTweensOf(f.mainHolder_do), FWDAnimation.to(f.mainHolder_do, .8, {
                    y: -f.stageHeight,
                    ease: Expo.easeInOut
                }))
            }, this.hideCompleteHandler = function () {
                t.main_do.removeChild(f), f.dispatchEvent(e.HIDE_COMPLETE)
            }, this.updateHEXColors = function (e, t) {
                -1 != o.skinPath_str.indexOf("hex_white") ? f.selectedColor_str = "#FFFFFF" : f.selectedColor_str = t, f.closeButton_do.updateHEXColors(e, f.selectedColor_str), f.facebookButton_do.updateHEXColors(e, t), f.googleButton_do.updateHEXColors(e, t), f.twitterButton_do.updateHEXColors(e, t), f.likedinButton_do.updateHEXColors(e, t), f.bufferButton_do.updateHEXColors(e, t), f.diggButton_do.updateHEXColors(e, t), f.redditButton_do.updateHEXColors(e, t), f.thumbrlButton_do.updateHEXColors(e, t)
            }, this.init()
        };
        e.setPrototype = function () {
            e.prototype = new FWDRAPDisplayObject("div")
        }, e.HIDE_COMPLETE = "hideComplete", e.prototype = null, s.FWDRAPShareWindow = e
    }(window),
    function (e) {
        var d = function (e, t, o, s, i, n, r, l) {
            var a = this;
            d.prototype;
            this.nImg = e, this.sPath_str = t, this.dPath_str = o, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.useHEXColorsForSkin_bl = i, this.normalButtonsColor_str = n, this.selectedButtonsColor_str = r, this.inverseHEXColors_bl = l, this.isShowed_bl = !0, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isDisabledForGood_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !a.isMobile_bl || a.hasPointerEvent_bl || s, a.init = function () {
                a.setupMainContainers()
            }, a.setupMainContainers = function () {
                if (a.useHEXColorsForSkin_bl ? (a.n_sdo = new FWDRAPTransformDisplayObject("div"), a.n_sdo.setWidth(a.totalWidth), a.n_sdo.setHeight(a.totalHeight), a.n_sdo_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.nImg, a.normalButtonsColor_str).canvas, a.n_sdo.screen.appendChild(a.n_sdo_canvas)) : (a.n_sdo = new FWDRAPTransformDisplayObject("img"), a.n_sdo.setScreen(a.nImg)), a.addChild(a.n_sdo), a.allowToCreateSecondButton_bl) {
                    a.img1 = new Image, a.img1.src = a.sPath_str;
                    var e = new Image;
                    a.sImg = e, a.useHEXColorsForSkin_bl ? (a.s_sdo = new FWDRAPTransformDisplayObject("div"), a.s_sdo.setWidth(a.totalWidth), a.s_sdo.setHeight(a.totalHeight), a.img1.onload = function () {
                        a.inverseHEXColors_bl ? a.s_sdo_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.img1, a.normalButtonsColor_str).canvas : a.s_sdo_canvas = FWDRAPUtils.getCanvasWithModifiedColor(a.img1, a.selectedButtonsColor_str).canvas, a.s_sdo.screen.appendChild(a.s_sdo_canvas)
                    }) : (a.s_sdo = new FWDRAPDisplayObject("img"), a.s_sdo.setScreen(a.img1), a.s_sdo.setWidth(a.totalWidth), a.s_sdo.setHeight(a.totalHeight)), a.s_sdo.setAlpha(0), a.addChild(a.s_sdo), a.dPath_str && (e.src = a.dPath_str, a.d_sdo = new FWDRAPDisplayObject("img"), a.d_sdo.setScreen(e), a.d_sdo.setWidth(a.totalWidth), a.d_sdo.setHeight(a.totalHeight), a.d_sdo.setX(-100), a.addChild(a.d_sdo))
                }
                a.setWidth(a.totalWidth), a.setHeight(a.totalHeight), a.setButtonMode(!0), a.screen.style.yellowOverlayPointerEvents = "none", a.isMobile_bl ? a.hasPointerEvent_bl ? (a.screen.addEventListener("pointerup", a.onMouseUp), a.screen.addEventListener("pointerover", a.onMouseOver), a.screen.addEventListener("pointerout", a.onMouseOut)) : a.screen.addEventListener("touchend", a.onMouseUp) : a.screen.addEventListener ? (a.screen.addEventListener("mouseover", a.onMouseOver), a.screen.addEventListener("mouseout", a.onMouseOut), a.screen.addEventListener("mouseup", a.onMouseUp)) : a.screen.attachEvent && (a.screen.attachEvent("onmouseover", a.onMouseOver), a.screen.attachEvent("onmouseout", a.onMouseOut), a.screen.attachEvent("onmouseup", a.onMouseUp))
            }, a.onMouseOver = function (e) {
                if (a.dispatchEvent(d.SHOW_TOOLTIP, {
                        e: e
                    }), !(a.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                    if (a.isDisabled_bl || a.isSelectedFinal_bl) return;
                    a.dispatchEvent(d.MOUSE_OVER, {
                        e: e
                    }), a.setSelectedState()
                }
            }, a.onMouseOut = function (e) {
                if (!(a.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                    if (a.isDisabled_bl || a.isSelectedFinal_bl) return;
                    a.dispatchEvent(d.MOUSE_OUT, {
                        e: e
                    }), a.setNormalState()
                }
            }, a.onMouseUp = function (e) {
                a.isDisabledForGood_bl || (e.preventDefault && e.preventDefault(), a.isDisabled_bl || 2 == e.button || a.dispatchEvent(d.MOUSE_UP, {
                    e: e
                }))
            }, a.setSelected = function () {
                a.isSelectedFinal_bl = !0, a.s_sdo && (FWDAnimation.killTweensOf(a.s_sdo), FWDAnimation.to(a.s_sdo, .8, {
                    alpha: 1,
                    ease: Expo.easeOut,
                    overwrite: !1
                }))
            }, a.setUnselected = function () {
                a.isSelectedFinal_bl = !1, a.s_sdo && (FWDAnimation.killTweensOf(a.s_sdo), FWDAnimation.to(a.s_sdo, .8, {
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeOut,
                    overwrite: !1
                }))
            }, this.setNormalState = function () {
                FWDAnimation.killTweensOf(a.s_sdo), FWDAnimation.to(a.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.setSelectedState = function () {
                FWDAnimation.killTweensOf(a.s_sdo), FWDAnimation.to(a.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, this.setDisabledState = function () {
                a.isSetToDisabledState_bl || (a.isSetToDisabledState_bl = !0, a.d_sdo && a.d_sdo.setX(0))
            }, this.setEnabledState = function () {
                a.isSetToDisabledState_bl && (a.isSetToDisabledState_bl = !1, a.d_sdo && a.d_sdo.setX(-100))
            }, this.disable = function () {
                a.isDisabledForGood_bl || a.isDisabled_bl || (a.isDisabled_bl = !0, a.setButtonMode(!1), FWDAnimation.to(a, .6, {
                    alpha: .4
                }), a.setNormalState())
            }, this.enable = function () {
                !a.isDisabledForGood_bl && a.isDisabled_bl && (a.isDisabled_bl = !1, a.setButtonMode(!0), FWDAnimation.to(a, .6, {
                    alpha: 1
                }))
            }, this.disableForGood = function () {
                a.isDisabledForGood_bl = !0, a.setButtonMode(!1)
            }, this.disableForGood = function () {
                a.isDisabledForGood_bl = !0, a.setButtonMode(!1)
            }, this.enableForGood = function () {
                a.isDisabledForGood_bl = !1, a.setButtonMode(!0)
            }, this.showDisabledState = function () {
                0 != a.d_sdo.x && a.d_sdo.setX(0)
            }, this.hideDisabledState = function () {
                -100 != a.d_sdo.x && a.d_sdo.setX(-100)
            }, this.show = function () {
                a.isShowed_bl || (a.isShowed_bl = !0, FWDAnimation.killTweensOf(a), FWDRAPUtils.isIEAndLessThen9 ? (FWDRAPUtils.isIEAndLessThen9 || (a.setAlpha(0), FWDAnimation.to(a, .4, {
                    alpha: 1,
                    delay: .4
                })), a.setVisible(!0)) : FWDRAPUtils.isIEWebKit ? (FWDAnimation.killTweensOf(a.n_sdo), a.n_sdo.setScale2(0), FWDAnimation.to(a.n_sdo, .8, {
                    scale: 1,
                    delay: .4,
                    onStart: function () {
                        a.setVisible(!0)
                    },
                    ease: Elastic.easeOut
                })) : (a.setScale2(0), FWDAnimation.to(a, .8, {
                    scale: 1,
                    delay: .4,
                    onStart: function () {
                        a.setVisible(!0)
                    },
                    ease: Elastic.easeOut
                })))
            }, this.hide = function (e) {
                a.isShowed_bl && (a.isShowed_bl = !1, FWDAnimation.killTweensOf(a), FWDAnimation.killTweensOf(a.n_sdo), a.setVisible(!1))
            }, a.updateHEXColors = function (e, t) {
                FWDRAPUtils.changeCanvasHEXColor(a.nImg, a.n_sdo_canvas, e), FWDRAPUtils.changeCanvasHEXColor(a.img1, a.s_sdo_canvas, t)
            }, a.init()
        };
        d.setPrototype = function () {
            d.prototype = null, d.prototype = new FWDRAPTransformDisplayObject("div")
        }, d.CLICK = "onClick", d.MOUSE_OVER = "onMouseOver", d.SHOW_TOOLTIP = "showTooltip", d.MOUSE_OUT = "onMouseOut", d.MOUSE_UP = "onMouseDown", d.prototype = null, e.FWDRAPSimpleButton = d
    }(window),
    function (e) {
        var a = function (e, t, o, s, i, n, r) {
            var l = this;
            a.prototype;
            this.nImg_img = null, this.sImg_img = null, this.n_do, this.s_do, this.useHEXColorsForSkin_bl = i, this.normalButtonsColor_str = r, this.selectedButtonsColor_str = n, this.nImgPath_str = e, this.sImgPath_str = t, this.buttonWidth = o, this.buttonHeight = s, this.isMobile_bl = FWDRAPUtils.isMobile, this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent, this.isDisabled_bl = !1, this.init = function () {
                l.setupMainContainers(), l.setWidth(l.buttonWidth), l.setHeight(l.buttonHeight), l.setButtonMode(!0)
            }, this.setupMainContainers = function () {
                l.nImg = new Image, l.nImg.src = l.nImgPath_str, l.useHEXColorsForSkin_bl ? (l.n_do = new FWDRAPTransformDisplayObject("div"), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight), l.nImg.onload = function () {
                    l.n_do_canvas = FWDRAPUtils.getCanvasWithModifiedColor(l.nImg, l.normalButtonsColor_str).canvas, l.n_do.screen.appendChild(l.n_do_canvas)
                }) : (l.n_do = new FWDRAPDisplayObject("img"), l.n_do.setScreen(l.nImg), l.n_do.setWidth(l.buttonWidth), l.n_do.setHeight(l.buttonHeight)), l.addChild(l.n_do), l.sImg = new Image, l.sImg.src = l.sImgPath_str, l.useHEXColorsForSkin_bl ? (l.s_do = new FWDRAPTransformDisplayObject("div"), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight), l.sImg.onload = function () {
                    l.s_do_canvas = FWDRAPUtils.getCanvasWithModifiedColor(l.sImg, l.selectedButtonsColor_str).canvas, l.s_do.screen.appendChild(l.s_do_canvas)
                }) : (l.s_do = new FWDRAPDisplayObject("img"), l.s_do.setScreen(l.sImg), l.s_do.setWidth(l.buttonWidth), l.s_do.setHeight(l.buttonHeight)), l.addChild(l.s_do), l.hasPointerEvent_bl ? (l.screen.addEventListener("pointerup", l.onMouseUp), l.screen.addEventListener("pointerover", l.setNormalState), l.screen.addEventListener("pointerout", l.setSelectedState)) : l.screen.addEventListener && (l.isMobile_bl || (l.screen.addEventListener("mouseover", l.setNormalState), l.screen.addEventListener("mouseout", l.setSelectedState), l.screen.addEventListener("mouseup", l.onMouseUp)), l.screen.addEventListener("touchend", l.onMouseUp))
            }, this.setNormalState = function (e) {
                FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.setSelectedState = function (e) {
                FWDAnimation.killTweensOf(l.s_do), FWDAnimation.to(l.s_do, .5, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.onMouseUp = function (e) {
                l.dispatchEvent(a.CLICK)
            }, l.updateHEXColors = function (e, t) {
                FWDRAPUtils.changeCanvasHEXColor(l.nImg, l.n_do_canvas, t), FWDRAPUtils.changeCanvasHEXColor(l.sImg, l.s_do_canvas, e)
            }, this.destroy = function () {
                FWDAnimation.killTweensOf(l.n_do), l.n_do.destroy(), this.s_do.destroy(), l.screen.onmouseover = null, l.screen.onmouseout = null, l.screen.onclick = null, l.nImg_img = null, l.sImg_img = null, l = null, a.prototype = null
            }, l.init()
        };
        a.setPrototype = function () {
            a.prototype = null, a.prototype = new FWDRAPTransformDisplayObject("div", "relative")
        }, a.CLICK = "onClick", a.prototype = null, e.FWDRAPSimpleSizeButton = a
    }(window),
    function (a) {
        var d = function (e, t, o, s, i, n, r) {
            var l = this;
            d.prototype;
            this.buttonRef_do = e, this.bkPath_str = t, this.pointerPath_str = o, this.text_do = null, this.pointer_do = null, this.pointerUp_do = null, this.fontColor_str = n, this.toolTipLabel_str = i, this.toopTipPointerUp_str = s, this.toolTipsButtonsHideDelay = 1e3 * r, this.pointerWidth = 7, this.pointerHeight = 4, this.showWithDelayId_to, this.isMobile_bl = FWDRAPUtils.isMobile, this.isShowed_bl = !0, this.init = function () {
                l.setOverflow("visible"), l.setupMainContainers(), l.setLabel(l.toolTipLabel_str), l.hide(), l.getStyle().background = "url('" + l.bkPath_str + "')", l.getStyle().zIndex = 9999999999
            }, this.setupMainContainers = function () {
                l.text_do = new FWDRAPDisplayObject("div"), l.text_do.hasTransform3d_bl = !1, l.text_do.hasTransform2d_bl = !1, l.text_do.setBackfaceVisibility(), l.text_do.setDisplay("inline"), l.text_do.getStyle().fontFamily = "Arial", l.text_do.getStyle().fontSize = "12px", l.text_do.getStyle().color = l.fontColor_str, l.text_do.getStyle().whiteSpace = "nowrap", l.text_do.getStyle().fontSmoothing = "antialiased", l.text_do.getStyle().webkitFontSmoothing = "antialiased", l.text_do.getStyle().textRendering = "optimizeLegibility", l.text_do.getStyle().padding = "6px", l.text_do.getStyle().paddingTop = "4px", l.text_do.getStyle().paddingBottom = "4px", l.setLabel(), l.addChild(l.text_do);
                var e = new Image;
                e.src = l.pointerPath_str, l.pointer_do = new FWDRAPDisplayObject("img"), l.pointer_do.setScreen(e), l.pointer_do.setWidth(l.pointerWidth), l.pointer_do.setHeight(l.pointerHeight), l.addChild(l.pointer_do);
                var t = new Image;
                t.src = l.toopTipPointerUp_str, l.pointerUp_do = new FWDRAPDisplayObject("img"), l.pointerUp_do.setScreen(t), l.pointerUp_do.setWidth(l.pointerWidth), l.pointerUp_do.setHeight(l.pointerHeight), l.addChild(l.pointerUp_do)
            }, this.setLabel = function (e) {
                l.text_do.setInnerHTML(i), setTimeout(function () {
                    null != l && (l.setWidth(l.text_do.getWidth()), l.setHeight(l.text_do.getHeight()), l.positionPointer())
                }, 50)
            }, this.positionPointer = function (e, t) {
                var o, s;
                e = e || 0, o = parseInt((l.w - l.pointerWidth) / 2) + e, t ? (s = -3, l.pointerUp_do.setX(o), l.pointerUp_do.setY(s), l.pointer_do.setX(0), l.pointer_do.setY(0)) : (s = l.h, l.pointer_do.setX(o), l.pointer_do.setY(s), l.pointerUp_do.setX(0), l.pointerUp_do.setY(0))
            }, this.show = function () {
                l.isShowed_bl || (l.isShowed_bl = !0, FWDAnimation.killTweensOf(l), clearTimeout(l.showWithDelayId_to), l.showWithDelayId_to = setTimeout(l.showFinal, l.toolTipsButtonsHideDelay), a.addEventListener ? a.addEventListener("mousemove", l.moveHandler) : document.attachEvent && (document.detachEvent("onmousemove", l.moveHandler), document.attachEvent("onmousemove", l.moveHandler)))
            }, this.showFinal = function () {
                l.setVisible(!0), l.setAlpha(0), FWDAnimation.to(l, .4, {
                    alpha: 1,
                    onComplete: function () {
                        l.setVisible(!0)
                    },
                    ease: Quart.easeOut
                })
            }, this.moveHandler = function (e) {
                var t = FWDRAPUtils.getViewportMouseCoordinates(e);
                FWDRAPUtils.hitTest(l.buttonRef_do.screen, t.screenX, t.screenY) || l.hide()
            }, this.hide = function () {
                l.isShowed_bl && (clearTimeout(l.showWithDelayId_to), a.removeEventListener ? a.removeEventListener("mousemove", l.moveHandler) : document.detachEvent && document.detachEvent("onmousemove", l.moveHandler), FWDAnimation.killTweensOf(l), l.setVisible(!1), l.isShowed_bl = !1)
            }, this.init()
        };
        d.setPrototype = function () {
            d.prototype = null, d.prototype = new FWDRAPDisplayObject("div", "fixed")
        }, d.CLICK = "onClick", d.MOUSE_DOWN = "onMouseDown", d.prototype = null, a.FWDRAPToolTip = d
    }(window), window.FWDRAPTransformDisplayObject = function (e, t, o, s) {
        this.listeners = {
            events_ar: []
        };
        var i = this;
        if ("div" != e && "img" != e && "canvas" != e) throw Error("Type is not valid! " + e);
        this.type = e, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = t || "absolute", this.overflow = o || "hidden", this.display = s || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform2d_bl = FWDRAPUtils.hasTransform2d, this.init = function () {
            this.setScreen()
        }, this.getTransform = function () {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if (void 0 !== this.screen.style[e]) return e;
            return !1
        }, this.getOpacityType = function () {
            return void 0 !== this.screen.style.opacity ? "opacity" : "filter"
        }, this.setScreen = function (e) {
            "img" == this.type && e ? this.screen = e : this.screen = document.createElement(this.type), this.setMainProperties()
        }, this.setMainProperties = function () {
            this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == i.opacityType && (i.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed", "img" == e && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function (e) {
                return !1
            })
        }, i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible", i.screen.style.webkitBackfaceVisibility = "visible", i.screen.style.MozBackfaceVisibility = "visible"
        }, i.removeBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "hidden", i.screen.style.webkitBackfaceVisibility = "hidden", i.screen.style.MozBackfaceVisibility = "hidden"
        }, this.setSelectable = function (e) {
            if (!e) {
                try {
                    this.screen.style.userSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch (e) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch (e) {}
                this.screen.ondragstart = function (e) {
                    return !1
                }, this.screen.onselectstart = function () {
                    return !1
                }, this.screen.style.webkitTouchCallout = "none"
            }
        }, this.getScreen = function () {
            return i.screen
        }, this.setVisible = function (e) {
            this.visible = e, 1 == this.visible ? this.screen.style.visibility = "visible" : this.screen.style.visibility = "hidden"
        }, this.getVisible = function () {
            return this.visible
        }, this.setResizableSizeAfterParent = function () {
            this.screen.style.width = "100%", this.screen.style.height = "100%"
        }, this.getStyle = function () {
            return this.screen.style
        }, this.setOverflow = function (e) {
            i.overflow = e, i.screen.style.overflow = i.overflow
        }, this.setPosition = function (e) {
            i.position = e, i.screen.style.position = i.position
        }, this.setDisplay = function (e) {
            this.display = e, this.screen.style.display = this.display
        }, this.setButtonMode = function (e) {
            this.buttonMode = e, 1 == this.buttonMode ? this.screen.style.cursor = "pointer" : this.screen.style.cursor = "default"
        }, this.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        }, this.setInnerHTML = function (e) {
            i.innerHTML = e, i.screen.innerHTML = i.innerHTML
        }, this.getInnerHTML = function () {
            return i.innerHTML
        }, this.getRect = function () {
            return i.screen.getBoundingClientRect()
        }, this.setAlpha = function (e) {
            i.alpha = e, "opacity" == i.opacityType ? i.screen.style.opacity = i.alpha : "filter" == i.opacityType && (i.screen.style.filter = "alpha(opacity=" + 100 * i.alpha + ")", i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * i.alpha) + ")")
        }, this.getAlpha = function () {
            return i.alpha
        }, this.getRect = function () {
            return this.screen.getBoundingClientRect()
        }, this.getGlobalX = function () {
            return this.getRect().left
        }, this.getGlobalY = function () {
            return this.getRect().top
        }, this.setX = function (e) {
            i.x = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.left = i.x + "px"
        }, this.getX = function () {
            return i.x
        }, this.setY = function (e) {
            i.y = e, i.hasTransform2d_bl ? i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)" : i.screen.style.top = i.y + "px"
        }, this.getY = function () {
            return i.y
        }, this.setScale2 = function (e) {
            i.scale = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, this.getScale = function () {
            return i.scale
        }, this.setRotation = function (e) {
            i.rotation = e, i.hasTransform2d_bl && (i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ") rotate(" + i.rotation + "deg)")
        }, i.setWidth = function (e) {
            i.w = e, "img" == i.type && (i.screen.width = i.w), i.screen.style.width = i.w + "px"
        }, this.getWidth = function () {
            return "div" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : "img" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : 0 != i.screen.width ? i.screen.width : i._w : "canvas" == i.type ? 0 != i.screen.offsetWidth ? i.screen.offsetWidth : i.w : void 0
        }, i.setHeight = function (e) {
            i.h = e, "img" == i.type && (i.screen.height = i.h), i.screen.style.height = i.h + "px"
        }, this.getHeight = function () {
            return "div" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : "img" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : 0 != i.screen.height ? i.screen.height : i.h : "canvas" == i.type ? 0 != i.screen.offsetHeight ? i.screen.offsetHeight : i.h : void 0
        }, this.getNumChildren = function () {
            return i.children_ar.length
        }, this.addChild = function (e) {
            this.contains(e) && this.children_ar.splice(FWDRAPUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.push(e), this.screen.appendChild(e.screen)
        }, this.removeChild = function (e) {
            if (!this.contains(e)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            this.children_ar.splice(FWDRAPUtils.indexOfArray(this.children_ar, e), 1), this.screen.removeChild(e.screen)
        }, this.contains = function (e) {
            return -1 != FWDRAPUtils.indexOfArray(this.children_ar, e)
        }, this.addChildAtZero = function (e) {
            0 == this.numChildren ? (this.children_ar.push(e), this.screen.appendChild(e.screen)) : (this.screen.insertBefore(e.screen, this.children_ar[0].screen), this.contains(e) && this.children_ar.splice(FWDRAPUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.unshift(e))
        }, this.getChildAt = function (e) {
            if (e < 0 || e > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[e]
        }, this.removeChildAtZero = function () {
            this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
        }, this.addListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var o = {};
            o.type = e, o.listener = t, (o.target = this).listeners.events_ar.push(o)
        }, this.dispatchEvent = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                    if (t)
                        for (var i in t) this.listeners.events_ar[o][i] = t[i];
                    this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o]);
                    break
                }
        }, this.removeListener = function (e, t) {
            if (null == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var o = 0, s = this.listeners.events_ar.length; o < s; o++)
                if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
                    this.listeners.events_ar.splice(o, 1);
                    break
                }
        }, this.disposeImage = function () {
            "img" == this.type && (this.screen.src = null)
        }, this.destroy = function () {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch (e) {}
            this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, i = null
        }, this.init()
    },
    function (o) {
        var i = function (t, e) {
            var r = this;
            i.prototype;
            this.video_el = null, this.sourcePath_str = null, this.bk_do = null, this.controllerHeight = t.data.controllerHeight, this.stageWidth = 0, this.stageHeight = 0, this.lastPercentPlayed = 0, this.volume = e, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.disableClickForAWhileId_to, this.showErrorWithDelayId_to, this.playWithDelayId_to, this.disableClick_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                r.getStyle().width = "100%", r.getStyle().height = "100%", r.setBkColor(t.videoBackgroundColor_str), r.setupVideo()
            }, this.setupVideo = function () {
                null == r.video_el && (r.video_el = document.createElement("video"), r.video_el.controls = !1, r.video_el.volume = r.volume, r.video_el.WebKitPlaysInline = !0, r.video_el.playsinline = !0, r.video_el.setAttribute("playsinline", ""), r.video_el.setAttribute("webkit-playsinline", ""), r.video_el.style.position = "relative", r.video_el.style.left = "0px", r.video_el.style.top = "0px", r.video_el.style.width = "100%", r.video_el.style.height = "100%", r.video_el.style.margin = "0px", r.video_el.style.padding = "0px", r.video_el.style.maxWidth = "none", r.video_el.style.maxHeight = "none", r.video_el.style.border = "none", r.video_el.style.lineHeight = "0", r.video_el.style.msTouchAction = "none", r.screen.appendChild(r.video_el)), r.video_el.addEventListener("error", r.errorHandler), r.video_el.addEventListener("canplay", r.safeToBeControlled), r.video_el.addEventListener("canplaythrough", r.safeToBeControlled), r.video_el.addEventListener("progress", r.updateProgress), r.video_el.addEventListener("timeupdate", r.updateVideo), r.video_el.addEventListener("pause", r.pauseHandler), r.video_el.addEventListener("play", r.playHandler), FWDRAPUtils.isIE || r.video_el.addEventListener("waiting", r.startToBuffer), r.video_el.addEventListener("playing", r.stopToBuffer), r.video_el.addEventListener("ended", r.endedHandler), r.resizeAndPosition()
            }, this.destroyVideo = function () {
                clearTimeout(r.showErrorWithDelayId_to), r.video_el && (r.video_el.removeEventListener("error", r.errorHandler), r.video_el.removeEventListener("canplay", r.safeToBeControlled), r.video_el.removeEventListener("canplaythrough", r.safeToBeControlled), r.video_el.removeEventListener("progress", r.updateProgress), r.video_el.removeEventListener("timeupdate", r.updateVideo), r.video_el.removeEventListener("pause", r.pauseHandler), r.video_el.removeEventListener("play", r.playHandler), FWDRAPUtils.isIE || r.video_el.removeEventListener("waiting", r.startToBuffer), r.video_el.removeEventListener("playing", r.stopToBuffer), r.video_el.removeEventListener("ended", r.endedHandler), r.isMobile_bl ? (r.screen.removeChild(r.video_el), r.video_el = null) : (r.video_el.style.visibility = "hidden", r.video_el.src = "", r.video_el.load()))
            }, this.startToBuffer = function (e) {
                r.dispatchEvent(i.START_TO_BUFFER)
            }, this.stopToBuffer = function () {
                r.dispatchEvent(i.STOP_TO_BUFFER)
            }, this.errorHandler = function (e) {
                var t;
                r.hasError_bl = !0, t = 0 == r.video_el.networkState ? "error 'self.video_el.networkState = 0'" : 1 == r.video_el.networkState ? "error 'self.video_el.networkState = 1'" : 2 == r.video_el.networkState ? "'self.video_el.networkState = 2'" : 3 == r.video_el.networkState ? "source not found <font color='#ff0000'>" + r.sourcePath_str + "</font>" : e, o.console && o.console.log(r.video_el.networkState), clearTimeout(r.showErrorWithDelayId_to), r.showErrorWithDelayId_to = setTimeout(function () {
                    r.dispatchEvent(i.ERROR, {
                        text: t
                    })
                }, 200)
            }, this.resizeAndPosition = function (e, t, o, s) {}, this.setSource = function (e) {
                r.sourcePath_str = e, t.is360 && r.video_el && (r.video_el.style.visibility = "hidden"), r.video_el && r.stop(), r.video_el && FWDRAPUtils.isIphone && (r.video_el.src = e)
            }, this.play = function (e) {
                if (clearTimeout(r.playWithDelayId_to), FWDRAP.curInstance = t, r.isStopped_bl) r.initVideo(), r.setVolume(), r.video_el.src = r.sourcePath_str, r.isMobile_bl ? r.play() : r.playWithDelayId_to = setTimeout(r.play, 1e3), r.hastStaredToPlayHLS_bl = !0, r.startToBuffer(!0), r.isPlaying_bl = !0;
                else if (!r.video_el.ended || e) try {
                    r.hastStaredToPlayHLS_bl = !0, r.isPlaying_bl = !0, r.hasPlayedOnce_bl = !0, r.video_el.play(), r.safeToBeControlled(), FWDRAPUtils.isIE && r.dispatchEvent(i.PLAY)
                } catch (e) {}
                t.is360 && r.add360Vid()
            }, this.initVideo = function () {
                r.isPlaying_bl = !1, r.hasError_bl = !1, r.allowScrubing_bl = !1, r.isStopped_bl = !1, r.setupVideo(), r.setVolume(), r.video_el.src = r.sourcePath_str
            }, this.pause = function () {
                if (null != r && !r.isStopped_bl && !r.hasError_bl && !r.video_el.ended) try {
                    r.video_el.pause(), r.isPlaying_bl = !1, FWDRAPUtils.isIE && r.dispatchEvent(i.PAUSE)
                } catch (e) {}
            }, this.togglePlayPause = function () {
                null != r && r.isSafeToBeControlled_bl && (r.isPlaying_bl ? r.pause() : r.play())
            }, this.resume = function () {
                r.isStopped_bl || r.play()
            }, this.pauseHandler = function () {
                r.allowScrubing_bl || r.dispatchEvent(i.PAUSE)
            }, this.playHandler = function () {
                r.allowScrubing_bl || (r.isStartEventDispatched_bl || (r.dispatchEvent(i.START), r.isStartEventDispatched_bl = !0), t.is360 && r.start360Render(), r.dispatchEvent(i.PLAY))
            }, this.endedHandler = function () {
                r.dispatchEvent(i.PLAY_COMPLETE)
            }, this.stop = function (e) {
                (null != r && null != r.video_el && !r.isStopped_bl || e) && (r.isPlaying_bl = !1, r.isStopped_bl = !0, r.hasPlayedOnce_bl = !0, r.hastStaredToPlayHLS_bl = !1, r.isSafeToBeControlled_bl = !1, r.isStartEventDispatched_bl = !1, clearTimeout(r.playWithDelayId_to), r.stop360Render(), r.destroyVideo(), r.dispatchEvent(i.LOAD_PROGRESS, {
                    percent: 0
                }), r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }), r.dispatchEvent(i.STOP), r.stopToBuffer())
            }, this.safeToBeControlled = function () {
                t.videoType_str == FWDRAP.HLS_JS && !r.hastStaredToPlayHLS_bl || (r.stopToScrub(), r.isSafeToBeControlled_bl || (r.hasHours_bl = 0 < Math.floor(r.video_el.duration / 3600), r.isPlaying_bl = !0, r.isSafeToBeControlled_bl = !0, t.is360 || (r.video_el.style.visibility = "visible"), setTimeout(function () {
                    r.renderer && (r.renderer.domElement.style.left = "0px")
                }, 1e3), r.dispatchEvent(i.SAFE_TO_SCRUBB)))
            }, this.updateProgress = function () {
                if (t.videoType_str != FWDRAP.HLS_JS || r.hastStaredToPlayHLS_bl) {
                    var e = 0;
                    0 < r.video_el.buffered.length && (e = r.video_el.buffered.end(r.video_el.buffered.length - 1).toFixed(1) / r.video_el.duration.toFixed(1), !isNaN(e) && e || (e = 0)), 1 == e && r.video_el.removeEventListener("progress", r.updateProgress), r.dispatchEvent(i.LOAD_PROGRESS, {
                        percent: e
                    })
                }
            }, this.updateVideo = function () {
                var e;
                r.allowScrubing_bl || (e = r.video_el.currentTime / r.video_el.duration, r.dispatchEvent(i.UPDATE, {
                    percent: e
                }));
                var t = i.formatTime(r.video_el.duration),
                    o = i.formatTime(r.video_el.currentTime);
                isNaN(r.video_el.duration) ? r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00",
                    seconds: 0,
                    totalTimeInSeconds: 0
                }) : r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t,
                    seconds: parseInt(r.video_el.currentTime),
                    totalTimeInSeconds: r.video_el.duration,
                    totalTimeInSeconds: r.video_el.duration
                }), r.lastPercentPlayed = e, r.curDuration = o
            }, this.startToScrub = function () {
                r.allowScrubing_bl = !0
            }, this.stopToScrub = function () {
                r.allowScrubing_bl = !1
            }, this.scrubbAtTime = function (e) {
                r.video_el.currentTime = e;
                var t = i.formatTime(r.video_el.duration),
                    o = i.formatTime(r.video_el.currentTime);
                r.dispatchEvent(i.UPDATE_TIME, {
                    curTime: o,
                    totalTime: t
                })
            }, this.scrub = function (e, t) {
                t && r.startToScrub();
                try {
                    r.video_el.currentTime = r.video_el.duration * e;
                    var o = i.formatTime(r.video_el.duration),
                        s = i.formatTime(r.video_el.currentTime);
                    r.dispatchEvent(i.UPDATE_TIME, {
                        curTime: s,
                        totalTime: o
                    })
                } catch (t) {}
            }, this.replay = function () {
                r.scrub(0), r.play()
            }, this.setVolume = function (e) {
                null != e && (r.volume = e), r.video_el && (r.video_el.volume = r.volume)
            }, this.setPlaybackRate = function (e) {
                r.video_el && (r.video_el.defaultPlaybackRate = e, r.video_el.playbackRate = e)
            }, this.add360Vid = function () {
                r.renderer ? r.screen.appendChild(r.renderer.domElement) : null != o.THREE && (r.renderer = new THREE.WebGLRenderer({
                    antialias: !0
                }), r.renderer.setSize(r.stageWidth, r.stageHeight), r.renderer.domElement.style.position = "absolute", r.renderer.domElement.style.left = "0px", r.renderer.domElement.style.top = "0px", r.renderer.domElement.style.margin = "0px", r.renderer.domElement.style.padding = "0px", r.renderer.domElement.style.maxWidth = "none", r.renderer.domElement.style.maxHeight = "none", r.renderer.domElement.style.border = "none", r.renderer.domElement.style.lineHeight = "1", r.renderer.domElement.style.backgroundColor = "transparent", r.renderer.domElement.style.backfaceVisibility = "hidden", r.renderer.domElement.style.webkitBackfaceVisibility = "hidden", r.renderer.domElement.style.MozBackfaceVisibility = "hidden", r.renderer.domElement.style.MozImageRendering = "optimizeSpeed", r.renderer.domElement.style.WebkitImageRendering = "optimizeSpeed", r.screen.appendChild(r.renderer.domElement), r.scene = new THREE.Scene, r.video_el.setAttribute("crossorigin", "anonymous"), r.canvas = document.createElement("canvas"), r.context = r.canvas.getContext("2d"), FWDRAPUtils.isFirefox ? r.videoTexture = new THREE.Texture(r.video_el) : r.videoTexture = new THREE.Texture(r.canvas), r.videoTexture.minFilter = THREE.LinearFilter, r.videoTexture.magFilter = THREE.LinearFilter, r.videoTexture.format = THREE.RGBFormat, r.cubeGeometry = new THREE.SphereGeometry(500, 60, 40), r.sphereMat = new THREE.MeshBasicMaterial({
                    map: r.videoTexture
                }), r.sphereMat.side = THREE.BackSide, r.cube = new THREE.Mesh(r.cubeGeometry, r.sphereMat), r.scene.add(r.cube), r.camera = new THREE.PerspectiveCamera(45, r.stageWidth / r.stageHeight, .1, 1e4), r.camera.position.y = 0, r.camera.position.z = 500, r.camera.position.x = 0, r.scene.add(r.camera), r.controls = new THREE.OrbitControls(r.camera, t.dumyClick_do.screen), r.controls.enableDamping = !0, r.controls.enableZoom = !1, r.controls.dampingFactor = .25, r.controls.maxDistance = 500, r.controls.minDistance = 500, r.controls.rotateLeft(90 * Math.PI / 180), r.controls.enabled = !0, r.render())
            }, this.start360Render = function () {
                r.is360Rendering_bl = !0, cancelAnimationFrame(r.requestId), r.requestId = requestAnimationFrame(r.render)
            }, this.stop360Render = function () {
                if (r.is360Rendering_bl = !1, r.camera) {
                    r.camera.position.y = 0, r.camera.position.z = 500, r.camera.position.x = 0, r.renderer.domElement.style.left = "-10000px", cancelAnimationFrame(r.requestId);
                    try {
                        r.screen.removeChild(r.renderer.domElement)
                    } catch (e) {}
                }
            }, this.render = function () {
                r.is360Rendering_bl && r.camera && t.is360 ? (r.video_el.readyState === r.video_el.HAVE_ENOUGH_DATA && (r.videoTexture.needsUpdate = !0), FWDRAPUtils.isFirefox || !r.context || r.isStopped_bl || (0 != r.video_el.videoWidth && (r.canvas.width = r.video_el.videoWidth, r.canvas.height = r.video_el.videoHeight), r.context.save(), r.context.scale(-1, 1), r.context.drawImage(r.video_el, 0, 0, -1 * r.canvas.width, r.canvas.height), r.context.restore()), r.controls.update(), r.renderer.render(r.scene, r.camera), r.requestId = requestAnimationFrame(r.render)) : cancelAnimationFrame(r.requestId)
            }, this.getDuration = function () {
                return i.formatTime(r.video_el.duration)
            }, this.getCurrentTime = function () {
                return i.formatTime(r.video_el.currentTime)
            }, i.formatTime = function (e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : r.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
            }, this.init()
        };
        i.setPrototype = function () {
            i.prototype = new FWDRAPDisplayObject("div")
        }, i.ERROR = "error", i.UPDATE = "update", i.UPDATE_TIME = "updateTime", i.SAFE_TO_SCRUBB = "safeToControll", i.LOAD_PROGRESS = "loadProgress", i.START = "start", i.PLAY = "play", i.PAUSE = "pause", i.STOP = "stop", i.PLAY_COMPLETE = "playComplete", i.START_TO_BUFFER = "startToBuffer", i.STOP_TO_BUFFER = "stopToBuffer", o.FWDRAPVideoScreen = i
    }(window),
    function (e) {
        var s = function (t, e) {
            var r = this;
            s.prototype;
            this.videoHolder_do = null, this.ytb = null, this.lastQuality_str = "auto", this.volume = e, this.updateVideoId_int, this.updatePreloadId_int, this.controllerHeight = t.data.controllerHeight, this.hasHours_bl = !1, this.hasBeenCreatedOnce_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !1, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isPausedInEvent_bl = !0, this.isShowed_bl = !0, this.isReady_bl = !1, this.isQualityArrayDisapatched_bl = !1, this.isMobile_bl = FWDRAPUtils.isMobile, this.init = function () {
                r.getStyle().width = "100%", r.getStyle().height = "100%", r.hasTransform3d_bl = !1, r.hasTransform2d_bl = !1, r.setBkColor("#000000"), r.setBackfaceVisibility(), r.id = "youtubePlayer", t.main_do.addChild(r), r.resizeAndPosition(), r.setupVideo()
            }, this.setupVideo = function () {
                r.ytb || (r.videoHolder_do = new FWDRAPDisplayObject("div"), r.videoHolder_do.hasTransform3d_bl = !1, r.videoHolder_do.hasTransform2d_bl = !1, r.videoHolder_do.screen.setAttribute("id", t.instanceName_str + "youtube"), r.videoHolder_do.getStyle().width = "100%", r.videoHolder_do.getStyle().height = "100%", r.videoHolder_do.setBackfaceVisibility(), r.addChild(r.videoHolder_do), r.ytb = new YT.Player(t.instanceName_str + "youtube", {
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        controls: 0,
                        disablekb: 0,
                        loop: 0,
                        autoplay: 0,
                        wmode: "opaque",
                        showinfo: 0,
                        rel: 0,
                        modestbranding: 1,
                        iv_load_policy: 3,
                        cc_load_policy: 0,
                        fs: 0,
                        html5: 0
                    },
                    events: {
                        onReady: r.playerReadyHandler,
                        onError: r.playerErrorHandler,
                        onStateChange: r.stateChangeHandler,
                        onPlaybackQualityChange: r.qualityChangeHandler
                    }
                }))
            }, this.playerReadyHandler = function () {
                r.isReady_bl = !0, r.resizeAndPosition(), r.dispatchEvent(s.READY), r.hasBeenCreatedOnce_bl = !0
            }, this.stateChangeHandler = function (e) {
                if (-1 == e.data && r.isCued_bl && r.isMobile_bl && (r.isStopped_bl = !1, FWDRAP.stopAllAudio(t)), e.data == YT.PlayerState.PLAYING) r.isSafeToBeControlled_bl || (r.isStopped_bl = !1, r.isSafeToBeControlled_bl = !0, r.isPlaying_bl = !0, r.hasHours_bl = 0 < Math.floor(r.ytb.getDuration() / 3600), r.setVolume(r.volume), r.startToUpdate(), r.startToPreload(), r.scrub(1e-5), r.isMobile_bl || r.setQuality(r.lastQuality_str), r.ytb.getAvailableQualityLevels() && 0 != r.ytb.getAvailableQualityLevels().length && r.dispatchEvent(s.QUALITY_CHANGE, {
                    qualityLevel: r.ytb.getPlaybackQuality(),
                    levels: r.ytb.getAvailableQualityLevels()
                }), r.setPlaybackRate(), r.dispatchEvent(s.SAFE_TO_SCRUBB)), r.isPausedInEvent_bl && r.dispatchEvent(s.PLAY), r.isPausedInEvent_bl = !1, r.hasError_bl = !1;
                else if (e.data == YT.PlayerState.PAUSED) {
                    if (!r.isSafeToBeControlled_bl) return;
                    r.isStopped_bl = !1, r.isPausedInEvent_bl || r.dispatchEvent(s.PAUSE), r.isPausedInEvent_bl = !0
                } else e.data == YT.PlayerState.ENDED ? r.ytb.getCurrentTime() && 0 < r.ytb.getCurrentTime() && (r.isStopped_bl = !1, setTimeout(function () {
                    r.dispatchEvent(s.PLAY_COMPLETE)
                }, 100)) : e.data == YT.PlayerState.CUED && (r.isStopped_bl || r.dispatchEvent(s.CUED), r.isCued_bl = !0, r.isStopped_bl = !1)
            }, this.qualityChangeHandler = function (e) {
                r.ytb.getAvailableQualityLevels() && 0 != r.ytb.getAvailableQualityLevels().length && r.dispatchEvent(s.QUALITY_CHANGE, {
                    qualityLevel: r.ytb.getPlaybackQuality()
                })
            }, this.playerErrorHandler = function (e) {
                if (r.isPausedInEvent_bl = !0, !r.isStopped_bl && !r.hasError_bl && r.isReady_bl) {
                    var t = "";
                    r.hasError_bl = !0, 2 == e.data ? t = "The youtube id is not well formatted, make sure it has exactly 11 characters and that it dosn't contain invalid characters such as exclamation points or asterisks." : 5 == e.data ? t = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred." : 100 == e.data ? t = "The youtube video request was not found, probably the video ID is incorrect." : 101 != e.data && 150 != e.data || (t = "The owner of the requested video does not allow it to be played in embedded players."), r.dispatchEvent(s.ERROR, {
                        text: t
                    })
                }
            }, this.resizeAndPosition = function () {}, this.setSource = function (e) {
                e && (r.sourcePath_str = e), r.ytb.cueVideoById(r.sourcePath_str), r.isStopped_bl = !1
            }, this.play = function (e) {
                FWDRAP.curInstance = t, r.isPlaying_bl = !0, r.hasError_bl = !1;
                try {
                    r.ytb.playVideo(), r.startToUpdate()
                } catch (e) {}
                r.isStopped_bl = !1
            }, this.pause = function () {
                if (!r.isStopped_bl && !r.hasError_bl) {
                    r.isPlaying_bl = !1;
                    try {
                        r.ytb.pauseVideo()
                    } catch (e) {}
                    r.stopToUpdate()
                }
            }, this.togglePlayPause = function () {
                r.isPlaying_bl ? r.pause() : r.play()
            }, this.resume = function () {
                r.isStopped_bl || r.play()
            }, this.togglePlayPause = function () {
                r.isPlaying_bl ? r.pause() : r.play()
            }, this.startToUpdate = function () {
                clearInterval(r.updateVideoId_int), r.updateVideoId_int = setInterval(r.updateVideo, 500)
            }, this.stopToUpdate = function () {
                clearInterval(r.updateVideoId_int)
            }, this.updateVideo = function () {
                var e;
                if (r.ytb) {
                    r.allowScrubing_bl || (e = r.ytb.getCurrentTime() / r.ytb.getDuration(), r.dispatchEvent(s.UPDATE, {
                        percent: e
                    }));
                    var t = r.formatTime(r.ytb.getDuration()),
                        o = r.formatTime(r.ytb.getCurrentTime());
                    r.dispatchEvent(s.UPDATE_TIME, {
                        curTime: o,
                        totalTime: t,
                        seconds: Math.round(r.ytb.getCurrentTime()),
                        totalTimeInSeconds: r.ytb.getDuration()
                    })
                } else stopToUpdate()
            }, this.getDuration = function () {
                return r.formatTime(r.ytb.getDuration())
            }, this.getCurrentTime = function () {
                return r.formatTime(r.ytb.getCurrentTime())
            }, this.startToPreload = function () {
                clearInterval(r.preloadVideoId_int), r.updatePreloadId_int = setInterval(r.updateProgress, 500)
            }, this.stopToPreload = function () {
                clearInterval(r.updatePreloadId_int)
            }, this.updateProgress = function () {
                if (r.ytb) {
                    var e = r.ytb.getVideoLoadedFraction();
                    r.dispatchEvent(s.LOAD_PROGRESS, {
                        percent: e
                    })
                } else stopToPreload()
            }, this.stop = function () {
                r.isStopped_bl || (r.isPlaying_bl = !1, r.isStopped_bl = !0, r.isCued_bl = !1, r.allowScrubing_bl = !1, r.isSafeToBeControlled_bl = !1, r.isQualityArrayDisapatched_bl = !1, r.isPausedInEvent_bl = !0, r.stopToUpdate(), r.stopToPreload(), r.stopVideo(), r.dispatchEvent(s.STOP), r.dispatchEvent(s.LOAD_PROGRESS, {
                    percent: 0
                }), r.dispatchEvent(s.UPDATE_TIME, {
                    curTime: "00:00",
                    totalTime: "00:00"
                }))
            }, this.destroyYoutube = function () {
                r.videoHolder_do && (r.videoHolder_do.screen.removeAttribute("id", t.instanceName_str + "youtube"), r.videoHolder_do.destroy(), r.videoHolder_do = null), r.ytb && r.ytb.destroy(), r.ytb = null
            }, this.stopVideo = function () {
                r.ytb.cueVideoById(r.sourcePath_str)
            }, this.startToScrub = function () {
                r.isSafeToBeControlled_bl && (r.allowScrubing_bl = !0)
            }, this.stopToScrub = function () {
                r.isSafeToBeControlled_bl && (r.allowScrubing_bl = !1)
            }, this.scrubbAtTime = function (e) {
                r.isSafeToBeControlled_bl && r.ytb.seekTo(e)
            }, this.scrub = function (e) {
                r.isSafeToBeControlled_bl && r.ytb.seekTo(e * r.ytb.getDuration())
            }, this.setVolume = function (e) {
                r.ytb && (null != e && (r.volume = e), r.ytb && r.ytb.setVolume(100 * e))
            }, this.setQuality = function (e) {
                r.lastQuality_str = e, r.ytb.setPlaybackQuality(e)
            }, this.formatTime = function (e) {
                var t = Math.floor(e / 3600),
                    o = e % 3600,
                    s = Math.floor(o / 60),
                    i = o % 60,
                    n = Math.ceil(i);
                return s = 10 <= s ? s : "0" + s, n = 10 <= n ? n : "0" + n, isNaN(n) ? "00:00" : r.hasHours_bl ? t + ":" + s + ":" + n : s + ":" + n
            }, this.setPlaybackRate = function (e) {
                r.ytb && !r.isMobile_bl && (e && (r.rate = e), r.ytb.setPlaybackRate(r.rate))
            }, this.init()
        };
        s.setPrototype = function () {
            s.prototype = new FWDRAPDisplayObject("div")
        }, s.READY = "ready", s.ERROR = "error", s.UPDATE = "update", s.UPDATE_TIME = "updateTime", s.SAFE_TO_SCRUBB = "safeToControll", s.LOAD_PROGRESS = "loadProgress", s.PLAY = "play", s.PAUSE = "pause", s.STOP = "stop", s.PLAY_COMPLETE = "playComplete", s.CUED = "cued", s.QUALITY_CHANGE = "qualityChange", e.FWDRAPYoutubeScreen = s
    }(window);
