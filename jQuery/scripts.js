/*Task_01*/
$(document).ready(function(){
	var h1 = $('.text')[0];

	$(h1).hide();

	var btn = $('#show-title');

	var showTitle = function(){
		$(h1).show();
	}
	var hideTitle = function(){
		$(h1).hide();
	}
	$(btn).click(showTitle);
});

/*Task_02*/
var imgAnimate = $("#imgAnimate")[0];
var imgFlower = $('#imgOne');

$(document).ready(function(){
	    
		$(imgFlower).animate({
			width: '900px',
			height: '720px',
		}, 1000);
});

/*Task_03_04*/
var imgFlr = $('#img-white');

	var fadeImg = function() {
		$(imgFlr).fadeIn(2000);
	}
	var fadeOutImg = function(){
		$(imgFlr).fadeOut(3000);
	}

	$('#fade').click(fadeImg);
	$('#fade-out').click(fadeOutImg);

/*Task_05*/

/*Task_06*/
var btnHover = $('#slide-down');
var slideDown = function(){
	$(box).slideToggle();
}
$(btnHover).on('click', slideDown);

	
