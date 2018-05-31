jQuery(document).ready(function () {
    jQuery('.seo_text .more_see').on('click', function () {
        jQuery('.seo_text').toggleClass('hidden');

    });
    jQuery('.goods .item .dbtn').on('click', function () {
        jQuery('.good_add .goods .photo').html(jQuery(this).parents('.o_goods').find('.photo').html());
        jQuery('.good_add .goods .info').html(jQuery(this).parents('.o_goods').find('.info').html());
        jQuery('.good_add .goods .pris').html(jQuery(this).parents('.o_goods').find('.pris').html());
        jQuery('body').toggleClass('show_goods_add show_pop_up');
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
    jQuery('.close_popup').on('click', function () {
        jQuery('body').removeClass();
    });

    jQuery('.head .callback').on('click', function () {
        jQuery('body').toggleClass('show_coll_back  show_pop_up').removeClass('mob_menu_show');
    });

    jQuery('.katalog_footer .callback').on('click', function () {
        jQuery('body').toggleClass('show_coll_back  show_pop_up');
    });

    jQuery('.my_account').on('click', function () {
        jQuery('body').toggleClass('show_login show_pop_up').removeClass('mob_menu_show');
    });

    jQuery('.mob.icon').on('click', function () {
        jQuery('body').toggleClass('mob_menu_show');
    });
    jQuery('.in_stock_btn.confirm-order').on('click', function () {
        jQuery('body').toggleClass('show_thank  show_pop_up');
    });


});
