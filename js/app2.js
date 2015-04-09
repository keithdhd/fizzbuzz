$(document).ready(function(){

	$(document).keyup(function(e){
		if(e.keyCode == 13){

			var totalCount = $("#totalCount").val().trim();

			if( isNaN(totalCount) || totalCount.length <= 0 || totalCount % 1 != 0){
				alert("Please enter a whole number");
			}
			else{	
				fizzBuzzer(totalCount);
			}	
		}
		
	});
	
})

function fizzBuzzer(totalCount){

	var counter = 1;
	var fizzOrBuzz = "";
	$('div').empty();

	for(counter; counter <= totalCount; counter++){
		fizzOrBuzz = "";

		if ((counter % 3) == 0 && (counter % 5) == 0 ) {
			fizzOrBuzz = "FizzBuzz";
			console.log(counter);
		}
		else if( (counter % 3) == 0 ){
			fizzOrBuzz = "Fizz";
		}
		else if( (counter % 5) == 0 ){
			fizzOrBuzz = "Buzz";
		}

		$('body').append("<div>" + counter + " " + fizzOrBuzz + "</div>");
	};
}