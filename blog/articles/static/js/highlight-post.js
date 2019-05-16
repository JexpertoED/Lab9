$(document).ready(function () {
    $('.one-post').hover(function (event) {
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0.3'}, 100);
        },
        function (event) {
            $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'}, 100);
        });
    $('#logo').hover(function (event) {
            $(event.currentTarget).animate({width: '20%'}, 200);
        },
        function (event) {
            $(event.currentTarget).animate({width: '15%'}, 200);
        });
});
