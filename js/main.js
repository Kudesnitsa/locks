
jQuery(document).ready(function () {
    jQuery('.seo_text .more_see').on('click', function () {
        jQuery('.seo_text').toggleClass('hidden');

    });
    jQuery('.goods .dbtn').on('click', function () {
        jQuery(this).parents('.item').toggleClass('Pop-up');
    });




});
