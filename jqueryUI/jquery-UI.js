$(document).ready(function(){

	$(".draggable").draggable({
		containment: ".drag-parent",
		grid:[50,40],
		handle: ".handle",
		// drag:function(event, ui){
		// 	console.log(ui.position)
		// }
	});


	$(".drag-drop").draggable();

	$(".target").droppable({
		accept: ".drag-drop",
		drop: function(event, ui){
			$(this).addClass("accepted");
			$(".circle").addClass("accepted")
		},
		out: function(event, ui){
			$(this).removeClass("accepted")
			$(".circle").removeClass("accepted")
		}
	});

	$('#selectable').selectable({
		selected: function(event, ui){
			console.log("selected:", ui.selected.innerText);
		}
	})

	$("#sortable").sortable();

	$('#trigger').click(function(e){
		e.preventDefault();

		var list = $('#sortable').sortable("toArray");
		console.log(list)
	})

	$("#accordion").accordion({
		active: null,
		animate: 200,
		collapsible: true,
	});

	$("#datepicker").datepicker({
		minDate: 0,
		maxDate: 30
	});

})
