$( document ).ready(function() {
	$("#signup").click(function() {
		
	 
		 
		$("#loginForm")[0].reset();
		$(".alert").html("").hide();
		$("#first").fadeOut("fast", function() {
		
		$("#second").fadeIn("fast");
		});
		});

		$("#signin").click(function() {
		
		$("#registration")[0].reset();	
		$(".alert").html("").hide();
		$("#globalError").html("").hide();
		$("#passwordR").trigger('keyup');
		grecaptcha.reset();
		$("#second").fadeOut("fast", function() {
		
		$("#first").fadeIn("fast");
		});
		});
});
 
