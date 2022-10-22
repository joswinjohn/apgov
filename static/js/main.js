$(document).ready(function() {
      let open = false;
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
            open = !open;
            if (open == false) {
                  $("#vl").css('transition', '0.5s');
            } else {
                  $("#vl").css('transition', '2s');
            }
            $(".vl").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

$('.slide').on('click', function(){
      $('#fade-in').toggleClass('show');
});
  
$('.spin').on('click', function(){
      $('#spin-in').toggleClass('show2');
});

$('h1.spacing').on('mouseenter', function(){
      $(this).toggleClass('spaced');
});