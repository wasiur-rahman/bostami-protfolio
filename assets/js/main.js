(function ($) {
    "use strict";
    $('.menu-btn').click(function () { 
        $(this).toggleClass('active');
        $('.menu-area').toggleClass('active');
    });
})(jQuery);