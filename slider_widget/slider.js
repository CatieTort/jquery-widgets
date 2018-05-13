$(document).ready(function(){

	var cardLength = $('.cards .card').length;
	var current = 1;

	$('.arrow-right.next').on("click", function(){
		if (current !== cardLength){
			current = current + 1;
			showSlide(current);
			showDot(current);
		} else {
			current = 1;
			showSlide(current);
			showDot(current);
		}

	});

	$('.arrow-left.prev').on("click", function(){

		if (current > current){
			current = current - 1;
			showSlide(current);
			showDot(current);
		} else {
			current = cardLength;
			showSlide(current);
			showDot(current);
		}
	});

	function showSlide(){
		$('.cards .card').removeClass('active');
		$('.card[data-item="'+ current +'"]').addClass('active');
	}

	function showDot(){
		$('.dots .dot').removeClass('active');
		$('.dot[data-id="dot-'+ current +'"]').addClass('active');

	}

});
