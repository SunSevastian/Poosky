/**
 * Created by JetBrains PhpStorm.
 * User: Alexandr
 * Date: 11/23/14
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var ink, d, x, y;
    $(".ripplelink").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }

        ink = $(this).find(".ink");
        ink.removeClass("animate");

        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }

        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;

        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    });
});