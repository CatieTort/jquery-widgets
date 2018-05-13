

$(document).ready(function(){

	$('.tab__header .item').on("click", function(){
		var number = $(this).data('opt');

		// remove all actives
		$('.tab__header .item').removeClass('active');

		// add active
		$(this).addClass('active');

		// display correct container__item
		$('.tab__container .container__item').hide();
		$('div[data-item="' + number +'"]').show();

	})
});
