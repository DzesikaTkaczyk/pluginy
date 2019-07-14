'use strict';
(function(){ 
	var carouselCell = document.getElementById('carousel-cell-js').innerHTML;
	Mustache.parse(carouselCell);
	var dataList = '';
	for(var i = 0; i < dataTable.length; i++){
		console.log(dataTable);
		dataList += Mustache.render(carouselCell, dataTable[i]);
	}
	console.log(dataList)
	var carouselJs = document.getElementById('carousel-js');
	
	carouselJs.innerHTML = dataList;


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
resetButton.addEventListener('click', function(){
	flkty.select(0)
})

})();

