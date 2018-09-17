/**
 * Created by Administrator on 2015/11/10 0010.
 */
$('#moreLink').click(function(e) {
    e.preventDefault(); //阻止默认动作：跳转到指定的锚点
    $('body').animate({
        scrollTop: $('#first-content').offset().top
    }, 500);
});

$(window).scroll(function() {
    if(document.body.scrollTop > 50){
        $("nav").addClass("newNav");
    }
    else {
        $("nav").removeClass("newNav");
    }
});
$(".menu > a").click(function(e) {
    console.log($(window).height());
    e.preventDefault();
    if($("#subMenu").hasClass("showSubMenu")){
        $("#subMenu").removeClass("showSubMenu");
        $("#subMenu").fadeOut("fast");
        $("#myHover").fadeOut("fast");
        document.body.onmousewheel = function(){return true;}
    }else {
        document.getElementById("subMenu").style.height=$(window).height() + "px";
        document.getElementById("myHover").style.width=($(window).width() - 320) + "px";
        document.getElementById("myHover").style.height=$(window).height() + "px";

        $("#subMenu").addClass("showSubMenu");
        $("#subMenu").fadeIn("fast");
        $("#myHover").fadeIn("fast");
        document.body.onmousewheel = function(){return false;}
    }


});