//使用单例模式。保证一个类只有一个实例，阻止其他对象实例化其自己的单例对象的副本，从而确保所有对象都访问唯一实例，减少消耗的内存。
var topline = {
    init: function () {
        var me = this;
        me.render(); //绑定元素
        me.bind(); //绑定事件
    },
    render: function () {
        var me = this;
        me.btn = $('.topline');
    },
    bind: function () {
        var me = this;
        me.btn.hover(function () {
            $('#childmenu').slideDown();
            $('.topline').css({
                'background-color': '#F8F8F8',
                'width': '90px',
                'height': '40px',
                'line-height': '23px',
                'margin-left': '18px'
            });
            $('.top').css('height', '35px');
            $('.more').css({'color': '#666', 'position': 'relative', 'top': '15px'});
        }, function () {
            $('.topline').css({
                'background-color': '#38f',
                'width': '60px',
                'height': '24px',
                'line-height': '23px',
                'margin-left': '40px'
            });
            $('.top').css('height', '35px');
            $('.more').css({'color': 'white', 'position': 'relative', 'top': '0px'});
        });
    }
};
topline.init();
var childmenu = {
    init: function () {
        var me = this;
        me.render(); //绑定元素
        me.bind(); //绑定事件
    },
    render: function () {
        var me = this;
        me.btn = $('#childmenu');
    },
    bind: function () {
        var me = this;
        me.btn.mouseleave(function () {
            $(this).slideUp();
        });
    }
};
childmenu.init();
//更多产品
var weatherli = {
    init: function () {
        var me = this;
        me.render(); //绑定元素
        me.bind(); //绑定事件
    },
    render: function () {
        var me = this;
        me.btn = $(".weatherli");
    },
    bind: function () {
        var me = this;
        me.btn.hover(function () {
            $(this).css("color", "#38f");
        });
    }
};
var childmenu1 = {
    init: function () {
        var me = this;
        me.render(); //绑定元素
        me.bind(); //绑定事件
    },
    render: function () {
        var me = this;
        me.btn = $('#childmenu1');
    },
    bind: function () {
        var me = this;
        me.btn.mouseenter(function () {
            weatherli.init();
        });
        me.btn.mouseleave(function () {
            $(this).hide();
        });
    }
};
var weather = {
    init: function () {
        var me = this;
        me.render(); //绑定元素
        me.bind(); //绑定事件
    },
    render: function () {
        var me = this;
        me.btn = $(".weather");
    },
    bind: function () {
        var me = this;
        me.btn.hover(
            function () {
                $("#childmenu1").show();
            },
            function () {
                childmenu1.init();
            });
    }
};
weather.init();
//天气
//var liNode = {
//    init: function(index) {
//        var me = this;
//        me.render();
//        me.bind(index);
//    },
//    render: function() {
//        var me = this;
//        me.btn = $(this);
//    },
//    bind: function(index) {
//        var me = this;
//        me.btn.click(function() {
//            $('ul .tabin').removeClass('tabin');
//            me.btn.addClass('tabin');
//            if (index != 0) {
//                $('.tab .myfocus').css({
//                    'color': '#333',
//                    'position': 'relative',
//                    'top': '-8px'
//                });
//                $('.user').attr("src", "images/usertaba.jpg");
//                $('.user').css({
//                    'position': 'relative',
//                    'top': '-2px'
//                });
//            } else {
//                $('.tab .myfocus').css({
//                    'color': 'white',
//                    'position': 'relative',
//                    'top': '-3px'
//                });
//                $('.user').attr("src", "images/usertab.jpg");
//                $('.user').css("position", "relative");
//            };
//            if (index == 0) {
//                $('.realcontent').load("myfa.html");
//            } else if (index == 1) {
//                $('.realcontent').load("nav.html");
//            } else if (index == 2) {
//                $('.realcontent').load("news.html");
//            } else if (index == 3) {
//                $('.realcontent').load("vedio.html");
//            } else {
//                $('.realcontent').load("shop.html");
//            };
//        });
//    }
//}

$('.realcontent').load("myfa.html");
$('.tab li').each(function (index) {
    var liNode = $(this);
    //liNode.init(index);
    liNode.click(function () {
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
        }
        ;
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
        }
        ;
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
var pifu = {
    init: function () {
        var me = this;
        me.render();
        me.bind();
    },
    render: function () {
        var me = this;
        me.btn = $(".pifu");
    },
    bind: function () {
        var me = this;
        me.btn.hover(function () {
            $(".skin").slideDown();
        }, function () {
        });
    }
};

pifu.init();
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
}
;
var normal = {
    init: function () {
        var me = this;
        me.render();
        me.bind();
    },
    render: function () {
        var me = this;
        me.btn = $("#normal");
    },
    bind: function () {
        var me = this;
        me.btn.click(function () {
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
    }
};
normal.init();

//不使用皮肤

var up = {
    init: function () {
        var me = this;
        me.render();
        me.bind();
    },
    render: function () {
        var me = this;
        me.btn = $("#up");
    },
    bind: function () {
        var me = this;
        me.btn.click(function () {
            $(".skin").slideUp();
        });
    }
};
up.init();
//收起
var pic = {
    init: function (arg) {
        var me = this;
        me.render(arg);
        me.bind(arg);
    },
    render: function (arg) {
        var me = this;
        me.btn = $("#" + arg);
    },
    bind: function (arg) {
        var me = this;
        me.btn.click(function () {
            changeBack(arg);
            changeopa();
            changBaidu();
            storage.setItem("theme", arg);
            // 设置localStorge并保存
        });
    }
};
pic.init("skin1");
pic.init("skin2");
pic.init("skin3");
pic.init("skin4");
pic.init("skin5");
pic.init("skin6");
pic.init("skin7");
pic.init("skin8");
pic.init("skin9");
pic.init("skin10");
pic.init("skin11");
pic.init("skin12");
