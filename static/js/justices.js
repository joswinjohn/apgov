$(window).resize(function() {
    var justices = $(".justice_imgs");
    var texts = $("justice_texts");

    for (i=0; i < 3; i++) {
        $(".justice_imgs").height(texts.eq(i).height())
    }
});

$(document).ready(function() {
    let open = false;
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
    $("#title").css('opacity', '1')
});