jQuery(document).ready(function() {
	var variable = 2;		
	jQuery(".wrapper-for-button button").on('click',function() {
		console.log(jQuery('[value]'));
		var number = jQuery(this).val();
		alert(number);
		jQuery(".a1").css('z-index', 10);
		jQuery("body").css({'background':'red', 'border':'1px solid black'});




	});


	
});