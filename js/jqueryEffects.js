/**
 * Created by khanjan on 6/7/2016.
 */
jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 0) {
            jQuery("#header").addClass("headerglow");
        } else {
            jQuery("#header").removeClass("headerglow");
        }
    });
});