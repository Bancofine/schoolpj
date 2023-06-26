function fullset() {
    var pageindex = $("#fullpage > .fullsection").size();
    for (var i = 1; i <= pageindex; i++) {
        $("#fullpage > .quick > ul").append("<li></li>");
    }
    $("#fullpage .quick ul :first-child").addClass("on");

    $(window).bind("mousewheel", function (event) {
        var page = $(".quick ul li.on");

        if ($("body").find("#fullpage:animated").length >= 1) return false;

        if (event.originalEvent.wheelDelta >= 0) {
            var before = page.index();
            if (page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");
            var pagelength = 0;
            for (var i = 1; i < (before); i++) {
                pagelength += $(".full" + i).height();
            }
            if (page.index() > 0) {
                page = page.index() - 1;
                $("#fullpage").animate({ "top": -pagelength + "px" }, 1000, "swing");
            }
        } else {
            var nextPage = parseInt(page.index() + 1);
            var lastPageNum = parseInt($(".quick ul li").size());
            if (page.index() <= $(".quick ul li").size() - 1) {
                page.next().addClass("on").siblings(".on").removeClass("on");
            }

            if (nextPage < lastPageNum) {
                var pagelength = 0;
                for (var i = 1; i < (nextPage + 1); i++) {
                    pagelength += $(".full" + i).height();
                }
                $("#fullpage").animate({ "top": -pagelength + "px" }, 1000, "swing");
            }
            else {
                alert("마지막 페이지 입니다!");
            };

        }
    });
    $(window).resize(function () {
        var resizeindex = $(".quick ul li.on").index() + 1;

        var pagelength = 0;
        for (var i = 1; i < resizeindex; i++) {
            pagelength += $(".full" + i).height();
        }

        $("#fullpage").animate({ "top": -pagelength + "px" }, 0);
    });
}
function quickClick() {
    $(".quick li").click(function () {
        var gnbindex = $(this).index() + 1;
        var length = 0;
        for (var i = 1; i < (gnbindex); i++) {
            length += $(".full" + i).height();
        }
        if ($("body").find("#fullpage:animated").length >= 1) return false;
        $(this).addClass("on").siblings("li").removeClass("on");

        $("#fullpage").animate({ "top": -length + "px" }, 800, "swing");
        return false;
    });
}