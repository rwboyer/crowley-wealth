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