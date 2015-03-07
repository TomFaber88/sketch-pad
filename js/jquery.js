

var row
var column
var divWidth
var divHeight




$(document).ready(function () {
	$('#button').click(function () {
		$('.container').empty();
		row = prompt("Number of rows")
		column = prompt("Number of columns")
		for (i = 0; i < row; i++) {
			for (j = 0; j < column; j++) {
				$('.container').append('<div class="grid"></div>');
			}
		}
		divWidth = (960 / column) - 2
		divHeight = (960 / row) - 2

		if (divWidth < divHeight) {
			divHeight = divWidth
		}
		else if (divHeight < divWidth) {
			divWidth = divHeight
		}
		
		$('.grid').height(divHeight + "px");
		$('.grid').width(divWidth + "px");
		
		$('.grid').mouseenter(function () {
			$(this).addClass('blue');
		})
		$('.grid').mouseleave(function () {
			$(this).removeClass('blue');
		})
	})
})




