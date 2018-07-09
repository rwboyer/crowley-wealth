$(function () {
  var $el = $('#parallax-bg');
  $(window).on('scroll', function () {
    var scroll = $(document).scrollTop();
    $el.css({
      'background-position': '50% ' + (.4 * scroll) + 'px'
    });
  });
});

function showdiv (d) {
  $('#'+d).toggleClass('o-0');
}

function showdiv_wwd (d) {
  $('#what-we-do article').addClass('o-0');
  $('#'+d).toggleClass('o-0');
}

function contact_slide(){
  $('#contact').toggleClass('contact-slide-up');  
}

var header = null;
var sticky = null;

$(function (){
  window.onscroll = function () { myFunction() };

  // Get the header
  header = document.getElementById("nav");

  // Get the offset position of the navbar
  sticky = header.offsetTop;

});


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(function (){
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $('#nav').height()
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          //$target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //$target.focus(); // Set focus again
          };
        });
      }
    }
  });
});