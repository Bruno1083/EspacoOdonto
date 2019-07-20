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

    $("#menu-mobile-mask, #mobile a").on("click", function () {
        $("header").removeClass("open-menu");
    });
}); 

$(document).ready(function(){
    var containerBtn = $(".btn-top");
    var link = $(".btn-top-link");

    // mostrar botao
    $(window).scroll(function(){
        if($(this).scrollTop() > 90){
           containerBtn.fadeIn(500); 
        }else{
           containerBtn.fadeOut(0); 
        }
    });
    
    //Trocar a cor do butão ao passar o mause
    $(function(){
        $(containerBtn).hover(
            function(){$(this).css("background","#017FCA")},
            function(){$(this).css("background","rgba(47, 155, 194, .8)")}
        );
    });
    // clicar para o topo

    containerBtn.click(function(){
        $("html, body").animate({scrollTop: 0},800);

        return false;
    });
});

$(document).ready(function(){
    $(".btn-top").mouseover(function(){
        $(".btn-top").css("background","#017FCA");
    });
    $(".btn-top").mouseout(function(){
        $(".btn-top").css("background","rgba(47, 155, 194, .8)");
    });
})