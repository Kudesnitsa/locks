
jQuery(document).ready(function () {
    jQuery('.seo_text .more_see').on('click', function () {
        jQuery('.seo_text').toggleClass('hidden');

    });
    jQuery('.goods .item .dbtn').on('click', function () {
        jQuery('.popup .goods .photo').html(jQuery(this).parents('.o_goods').find('.photo').html());
        jQuery('.popup .goods .info').html(jQuery(this).parents('.o_goods').find('.info').html());
        jQuery('.popup .goods .pris').html(jQuery(this).parents('.o_goods').find('.pris').html());
        jQuery('.popup').toggleClass('hidden');
    });
    jQuery('.popup .hid_popup').on('click', function () {
        jQuery('.popup').addClass('hidden');
    });
    jQuery('.popup .del').on('click', function () {
        jQuery('.popup .title').toggle();
        jQuery('.popup .goods').html('<h2 class="title_del">Товар удален из корзины</h2>');
    }
    );
});
