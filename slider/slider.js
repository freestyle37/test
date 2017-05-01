jQuery(document).ready(function() {
	var variable;
	variable=2;		
	jQuery(".wrapper-for-button button:nth-of-type(1)").on('click',function() {
		
		var number;
		number=jQuery('[value]').val();
		alert(number);

	});


	
});