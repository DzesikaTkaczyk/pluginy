window.addEventListener('DOMContentLoaded', function() {
	var elem = document.querySelector('.carousel');
	var flkty = new Flickity( elem, {
	  // options
	  freeScroll: true,
	  wrapAround: true,
	  contain: true,
	  hash: true,
	});

	var progressBar = document.querySelector('.progress-bar')

	flkty.on( 'scroll', function( progress ) {
	  progress = Math.max( 0, Math.min( 1, progress ) );
	  progressBar.style.width = progress * 100 + '%';
	});

	var resetButton = document.querySelector('.restart-button');
	resetButton.addEventListener('click', function() {
		flkty.select(0)
	})
});

