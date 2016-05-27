$('.topline').hover(function() {
    $('#childmenu').slideDown();
    $('.topline').css({
        'background-color': '#F8F8F8',
        'width': '90px',
        'height': '40px',
        'line-height': '23px',
        'margin-left': '18px'
    });
    $('.top').css('height', '35px');
    $('.more').css({ 'color': '#666', 'position': 'relative', 'top': '15px' });
}, function() {
    $('.topline').css({
        'background-color': '#38f',
        'width': '60px',
        'height': '24px',
        'line-height': '23px',
        'margin-left': '40px'
    });
    $('.top').css('height', '35px');
    $('.more').css({ 'color': 'white', 'position': 'relative', 'top': '0px' });
});
$('#childmenu').mouseleave(function() {
    $(this).slideUp();
});
//更多产品
$(".weather").hover(
    function() {
        $("#childmenu1").show();
    },
    function() {
        $("#childmenu1").mouseenter(function() {
            $(".weatherli").hover(
                function() {
                    $(this).css("color", "#38f");
                }
            );
        });
        $("#childmenu1").mouseleave(function() {
            $("#childmenu1").hide();
        });
    }
);
//天气
$('.realcontent').load("myfa.html");
$('.tab li').each(function(index) {
    var liNode = $(this);
    $(this).click(function() {
        $('ul .tabin').removeClass('tabin');
        liNode.addClass('tabin');
        if (index != 0) {
            $('.tab .myfocus').css({
                'color': '#333',
                'position': 'relative',
                'top': '-8px'
            });
            $('.user').attr("src", "images/usertaba.jpg");
            $('.user').css({
                'position': 'relative',
                'top': '-2px'
            });
        } else {
            $('.tab .myfocus').css({
                'color': 'white',
                'position': 'relative',
                'top': '-3px'
            });
            $('.user').attr("src", "images/usertab.jpg");
            $('.user').css("position", "relative");
        };
        if (index == 0) {
            $('.realcontent').load("myfa.html");
        } else if (index == 1) {
            $('.realcontent').load("nav.html");
        } else if (index == 2) {
            $('.realcontent').load("news.html");
        } else if (index == 3) {
            $('.realcontent').load("vedio.html");
        } else {
            $('.realcontent').load("shop.html");
        };
    });
});
//tab页面加载

//换肤
function changeopa() {
    $(".box").css({
        "background-color": "#ccc",
        "opacity": 0.8
    });
}
//显示换肤界面
$(".pifu").hover(function() {
    $(".skin").slideDown();
}, function() {});
//改变下面tab的透明度和颜色
function changeBack(value) {
    $("body").css({
        "background": "url(./images/" + value + ".jpg)",
        "background-size": "cover"
    });
    $(".pic").css({
        "width": "270px",
        "height": "129px",
        "margin-left": "-135px",
        "margin-top": "35px"
    });
    //百度logo设置
    $(".so").css({
        "color": "black",
        "-webkit-box-shadow": "1px 1px 3px rgba(0,0,0,0.2)",
        "background-image": "url(./images/niu.jpg)",
        "background-size": "100px 34px",
        "border-bottom": "none"
    });
    //搜索按钮设置
    $(".message").css({
        "color": "white"
    });
    $(".onleft").css({
        "color": "white"
    });
    $(".bao").css({
        "color": "white"
    });
    $(".pifu").css({
        "color": "white"
    });
    $(".onright").css({
        "color": "white"
    });
    //链接样式设置
}
//改变背景图片
function changBaidu() {
    $(".pic").attr("src", "images/pifubaidu.jpg");
}
//改变百度logo
var storage = window.localStorage;
if (storage.getItem("theme") == "normal" || storage.getItem("theme") == null) {
    $("body").css({
        "background": "none"
    });
    $(".box").css({
        "background-color": "white",
        "opacity": 1
    });
    $(".pic").attr("src", "images/baidu.jpg");
    $(".pic").css({
        "width": "250px",
        "height": "75px",
        "margin-left": "-125px",
        "margin-top": "70px"
    });
    $(".so").css({
        "width": "100px",
        "height": "34px",
        "color": "white",
        "font-size": "15px",
        "background": "#3385ff",
        "border": "0",
        "border-bottom": "1px solid #2d78f4",
        "outline": "medium",
        "cursor": "pointer",
        "float": "left"
    });
    $(".message").css({
        "color": "black"
    });
    $(".onleft").css({
        "color": "black"
    });
    $(".bao").css({
        "color": "#333"
    });
    $(".pifu").css({
        "color": "#333"
    });
    $(".onright").css({
        "color": "#333"
    });
} else {
    changeBack(storage.getItem("theme"));
    changeopa();
    changBaidu();
};
$("#normal").click(function() {
    $("body").css({
        "background": "none"
    });
    $(".box").css({
        "background-color": "white",
        "opacity": 1
    });
    $(".pic").attr("src", "images/baidu.jpg");
    $(".pic").css({
        "width": "250px",
        "height": "75px",
        "margin-left": "-125px",
        "margin-top": "70px"
    });
    $(".so").css({
        "width": "100px",
        "height": "34px",
        "color": "white",
        "font-size": "15px",
        "background": "#3385ff",
        "border": "0",
        "border-bottom": "1px solid #2d78f4",
        "outline": "medium",
        "cursor": "pointer",
        "float": "left"
    });
    $(".message").css({
        "color": "black"
    });
    $(".onleft").css({
        "color": "black"
    });
    $(".bao").css({
        "color": "#333"
    });
    $(".pifu").css({
        "color": "#333"
    });
    $(".onright").css({
        "color": "#333"
    });
    storage.setItem("theme", "normal");
});
//不使用皮肤
$("#up").click(function() {
    $(".skin").slideUp();
});
//收起
$("#one").click(function() {
    changeBack("skin1");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin1");
    // 设置localStorge并保存
});
$("#two").click(function() {
    changeBack("skin2");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin2");
    // 设置localStorge并保存
});
$("#three").click(function() {
    changeBack("skin3");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin3");
    // 设置localStorge并保存
});
$("#four").click(function() {
    changeBack("skin4");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin4");
    // 设置localStorge并保存
});
$("#five").click(function() {
    changeBack("skin5");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin5");
    // 设置localStorge并保存
});
$("#six").click(function() {
    changeBack("skin6");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin6");
    // 设置localStorge并保存
});
$("#seven").click(function() {
    changeBack("skin7");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin7");
    // 设置localStorge并保存
});
$("#eight").click(function() {
    changeBack("skin8");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin8");
    // 设置localStorge并保存
});
$("#nine").click(function() {
    changeBack("skin9");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin9");
    // 设置localStorge并保存
});
$("#ten").click(function() {
    changeBack("skin10");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin10");
    // 设置localStorge并保存
});
$("#eleven").click(function() {
    changeBack("skin11");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin11");
    // 设置localStorge并保存
});
$("#twelve").click(function() {
    changeBack("skin12");
    changeopa();
    changBaidu();
    storage.setItem("theme", "skin12");
    // 设置localStorge并保存
});
