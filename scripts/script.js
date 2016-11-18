$(function() {
	var slidesLenght = $('.carousel__item').length
	var widthSlide = $('.carousel__item').width()
	var actualPosition = 0
	var contentWidth = (slidesLenght-1)*widthSlide

	var $leftButton = $('.left-cursor')
	var $rightButton = $('.right-cursor')

	var $overflowContent = $('.content')

	$rightButton.on('click', function(){
		console.log(actualPosition)
		if (actualPosition>=contentWidth) return

		actualPosition+=widthSlide
		$overflowContent.animate({scrollLeft: actualPosition}, 400)
	})

	$leftButton.on('click', function(){
		console.log(actualPosition)
		if (actualPosition == 0) return

		actualPosition-=widthSlide
		$overflowContent.animate({scrollLeft: actualPosition}, 400)
	})
	
})