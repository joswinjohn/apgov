$(document).ready(function() {
      let open = false;
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
      $("#title").css('opacity', '1')
});

// Scrolling Effect
var sections_loaded = 0;

$(window).on("scroll", function() {
      var scrollPos = $(document).scrollTop();
      var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      var objects = document.getElementsByClassName('fade-in');


      if ((objects[0].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 0)) {
            fade_in(0);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[1].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 1)) {
            fade_in(1);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[2].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 2)) {
            fade_in(2);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[3].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 3)) {
            fade_in(3);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[4].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 4)) {
            fade_in(4);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[5].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 5)) {
            fade_in(5);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[6].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 6)) {
            fade_in(6);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[7].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 7)) {
            fade_in(7);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      } else if ((objects[8].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == 8)) {
            fade_in(8);
            sections_loaded++;
            console.log("sections_loaded: " + sections_loaded);
      }
})



function fade_in(index) {
      var objects = $(".fade-in");
      console.log(objects);
      objects.eq(index).toggleClass('show');
}

