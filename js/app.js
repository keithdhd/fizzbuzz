//for every number from 1 to 100

//if number is divisible by 3 and 5 FIZZBUZZ

//else if number is divisble by 3 FIZZ

//else if number is divisible by 5 BUZZ

$(document).ready(function(){

	var counter = 1;

	for(counter; counter <= 100; counter++){

		if ((counter % 3) == 0 && (counter % 5) == 0 ) {
			$('body').append("<div>" + counter + "  FizzBuzz</div>");
			console.log(counter);
		}
		else if( (counter % 3) == 0 ){
			$('body').append("<div>" + counter + "  Fizz</div>");
		}
		else if( (counter % 5) == 0 ){
			$('body').append("<div>" + counter + "  Buzz</div>");
		}
		else{			
			$('body').append("<div>" + counter + "  </div>");
		}

	};

})