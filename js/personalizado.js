window.sr = ScrollReveal({reset: true});
sr.reveal('.anim_left', {
    duration:2000,
    origin: 'left',
    distance: '20px'
});
sr.reveal('.anim_bottom', {
    duration:2000,
    origin: 'bottom',
    distance: '20px'
});
sr.reveal('.anim_right', {
    duration:2000,
    origin: 'right',
    distance: '20px'
});
sr.reveal('.anim_top', {
    duration:2000,
    origin: 'top',
    distance: '20px'
});

$(document).ready(function(){
 
    $("#btn-bars").on("click", function () {
        $("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask").on("click", function () {
        $("header").removeClass("open-menu");
    });
}); 