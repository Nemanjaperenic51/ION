

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
      
  autoplayTimeout: 3000,
    
    AnimatIn: "fabrOut",
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

var onTop = $(".onTop");

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        console.log("Skrolam Dole: " + $(window).scrollTop());
        onTop.fadeIn(600).css("cursor", "pointer");
        onTop.click(function () {
            $(window).scrollTop(0);
        });
    } else (
         onTop.fadeOut(600)
    )
})

$(document).ready(function () {
    $("form").addClass("form-slideIn");
})
