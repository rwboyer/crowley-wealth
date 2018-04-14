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
  $(d).toggleClass('o-0');
}

function contact_slide(){
  $('#contact').toggleClass('contact-slide-up');
  
}