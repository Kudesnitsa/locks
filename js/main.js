
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

    jQuery('.tab_categ').on('click', function () {
        jQuery('.mob_but_kat').toggleClass('hidden');
    });
    jQuery('.show_li').on('click', function () {
        jQuery('.continue_menu').toggleClass('hidd_list');
    });
    jQuery('.popup .hid_popup').on('click', function () {
        jQuery('.popup').addClass('hidden');
    });
    jQuery('.popup .del').on('click', function () {
        jQuery('.popup .title').toggle();
        jQuery('.popup .goods').html('<h2 class="title_del">Товар удален из корзины</h2>');
    }
    );
    jQuery('.mob_but_kat button').on('click', function () {
        jQuery('.main_left_menu').toggleClass('hid_menu');

    });
    jQuery('.main_left_menu .have_sub_item').on('click', function () {
        jQuery('.have_sub_item .sub_menu').toggleClass('sec_sub_menu');

    });

});
