function resizeThumb(e, n) {
    for (var t = document.getElementById(e).getElementsByTagName("img"), a = 0; a < t.length; a++) t[a].src = t[a].src.replace(/\/s72\-c/, "/s" + n + "-c")
}
window.labelfx = function () {
        var e = function (e) {
            var n = e || {},
                t = n.url_blog || window.location.host,
                a = n.id_labelcontent || "#labelfxn";
            $.ajax({
                url: "https://" + t + "/feeds/posts/summary?max-results=0&alt=json-in-script",
                type: "get",
                dataType: "jsonp",
                success: function (e) {
                    var n = e.feed.category,
                        t = "";
                    if (void 0 !== n) {
                        t = "<ul class='labelx'>";
                        for (var i = 0; i < n.length; i++) t += '<li><a href="/search/label/' + encodeURIComponent(n[i].term) + '" target="_blank">' + n[i].term + "</a></li>";
                        t += "</ul>", $(a).html(t)
                    } else $(a).html("<span>No Label!</span>")
                },
                error: function () {
                    $(a).html("<strong>Error Loading Feed!</strong>")
                }
            })
        };
        return function (n) {
            e(n)
        }
    }(), resizeThumb("main", 250), labelfx(),
    function (e) {
        function n(n) {
            e.getScript("http://" + n + ".disqus.com/blogger_index.js")
        }

        function t() {
            s || (s = !0, o ? (r.find("a").hide(), r.find("img").show(), e.ajax(o, {
                dataType: "html"
            }).done(function (t) {
                var a = e("<div></div>").append(t.replace(l, "")),
                    i = a.find("a.blog-pager-older-link");
                i ? o = i.attr("href") : (o = "", r.hide());
                var p = a.find(d).children(".date-outer");
                e(d).append(p), resizeThumb("main", 250), window._gaq && window._gaq.push(["_trackPageview", o]), window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go(), window.disqus_shortname && n(window.disqus_shortname), window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse(), window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load(), r.find("img").hide(), r.find("a").show(), s = !1
            })) : r.hide())
        }

        function a() {
            if ("item" != _WidgetManager._GetAllData().blog.pageType && (o = e("a.blog-pager-older-link").attr("href"))) {
                var n = e('<div class="sayfa-yukleyici"><a href="javascript:void(0);"><i class="fa fa-refresh"></i> DAHA FAZLA GÖSTER</a></div>');
                n.click(t);
                var a = e('<img src="' + i + '" style="display: none;">');
                (r = e('<div style="display:block;text-align:center;margin:20px auto;"></div>')).append(n), r.append(a), r.insertBefore(e("#blog-pager")), e("#blog-pager").hide()
            }
        }
        var i = "https://1.bp.blogspot.com/-6_Eha7PSRy0/WXI6jskHE9I/AAAAAAAAMB0/6iFQ2qywS2kaNA2evWgsUb51zjRFf69cQCLcBGAs/s1600/loader.gif",
            o = "",
            r = null,
            d = "div.blog-posts",
            s = !1,
            l = (e(window), e(document), /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
        e(document).ready(a)
    }(jQuery);