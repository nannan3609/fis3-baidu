var arr = {
    init: function () {
        var me = this;
        me.render();
        me.bind();
    },
    render: function () {
        var me = this;
        me.btn = $('.arr');
    },
    bind: function () {
        var me = this;
        me.btn.click(function () {
            changeIcon($(this));
            $('.ontop').toggle();
            $('.one').toggle();
            $('.two').toggle();
            $('.three').toggle();
            $('.four').toggle();
            $('.five').toggle();
            $('.six').toggle();
            $('.seven').toggle();
        });
    }
};
arr.init();
function changeIcon(mainNode) {
    if (mainNode) {
        if (mainNode.attr('src').indexOf('arrdown.jpg') >= 0) {
            mainNode.attr('src', 'images/arrleft.jpg');
        } else {
            mainNode.attr('src', 'images/arrdown.jpg');
        }
    }
}
