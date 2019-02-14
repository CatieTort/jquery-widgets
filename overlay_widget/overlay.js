$(document).ready(function () {

	function openOverlay(overlayId){
		$(".overlay-veil").fadeTo("500", "0.8", function(){
			var el = $('div[data-overlayItem="'+ overlayId +'"]');
			console.log(el)
			el.fadeIn("400");

			el.addClass('active');
		})

	}

	function closeOverlay(overlayId){
		$(".overlay-component").each(function(){
			if($(this).hasClass("active")){
				$(".overlay-veil").fadeOut();
				$(this).fadeOut("300", function(){
					$(this).removeClass('active');
				})
			}
		});

		if(overlayId !== false){
			openOverlay(overlayId);
		}
	}

	$(".closeOverlay").on("click", function(){
		closeOverlay(false)
	})

	$(".overlay-item_click").on("click", function(e){
		e.preventDefault();

		var overlayId = $(this).data("overlay");

		closeOverlay(overlayId);
	})
})
