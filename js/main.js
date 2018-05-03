
jQuery(document).ready(function () {
    jQuery('.icon_nav').on('click', function () {
        jQuery('.menu_mob').toggleClass('mob');
    });
    jQuery('.select.date .sub_btn').click(function () {
        var chosen = jQuery('.select.date .chosen');
        chosen.html(jQuery(this).html());
        jQuery(this).html(chosen.html());
    });



    jQuery('.select.infar .sub_btn').click(function () {
        var chosen = jQuery('.select.infar .chosen');
        chosen.html(jQuery(this).html());
        jQuery(this).html(chosen.html());
    });



});
