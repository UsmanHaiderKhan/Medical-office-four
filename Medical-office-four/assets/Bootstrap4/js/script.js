//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 330;
    var moretext = "More About Us &nbsp; <b style='font-size:34px'>&#8594;</b>";
    var lesstext = "Read Less  &nbsp;<b style='font-size:34px'>&#8592;</b>";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<a href="" class="morelinksss read-more-btn" style="display:block;margin-top:5px;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 3,
        showItems: 3

    });

});

/*===================== Date Picker Function ======================*/
$(function () {
    $("#datepicker").datepicker();
});
/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});
/*===================== Slick Slider ======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-strike");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});
/*===================== 3D Slider Script ======================*/
jQuery(document).ready(function () {

    function detect_active() {
        // get active
        var get_active = $("#dp-slider .dp_item:first-child").data("class");
        $("#dp-dots li").removeClass("active");
        $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
        detect_active();

    });

    $("#dp-prev").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
    });

    $("#dp-dots li").click(function () {
        $("#dp-dots li").removeClass("active");
        $(this).addClass("active");
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });
    });


    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
        var get_slide = $(this).attr('data-class');
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
        $.each($('.dp_item'), function (index, dp_item) {
            $(dp_item).attr('data-position', index + 1);
        });

        detect_active();
    });
});
/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 270) {
                $("nav").addClass("fixed-top sleep");
            } else {
                $("nav").removeClass("fixed-top sleep");
            }
        }
        else if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep");
        } else {
            $("nav").removeClass("fixed-top sleep");
        }
    });
});
