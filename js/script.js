var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  //cellAlign: 'center',
  freeScroll: true,
  wrapAround: true,
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {

  // options
});