

$('.carousel-indicators li').on('click', function() {
  $('.carousel').carousel(parseInt(this.getAttribute('data-to')));
});