$(document).ready(function() {
      let open = false;
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
      });
      
});

// Scrolling Effect
var sections_loaded = 0;

$(window).on("scroll", function() {
      var scrollPos = $(document).scrollTop();
      var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      var objects = document.getElementsByClassName('fade-in');

      for (var i = 0; i < objects.length; i++) {
            if ((objects[i].getBoundingClientRect().top <= vh/1.3) && (sections_loaded == i)) {
                  fade_in(i);
                  sections_loaded++;
                  console.log("sections_loaded: " + sections_loaded);
            }
      }
})



function fade_in(index) {
      var objects = $(".fade-in");
      console.log(objects);
      objects.eq(index).toggleClass('show');
}

