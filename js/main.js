$( document ).ready(function() {
	promptForNumber();	

});

function fizzbuzz(finalNumber){
	var i;
    for (i=1; i<=finalNumber; i++ ){
    	if ((i % 3 === 0) && (i % 5 === 0)){
    		$("#output").append("<div>fizz buzz</div>");
    	} else if (i % 3 === 0){
    		$("#output").append("<div>fizz</div>");
    	} else if (i % 5 === 0){
    		$("#output").append("<div>buzz</div>");
    	} else {
    		$("#output").append("<div>" + i + "</div>");
    	}
	}
	$("#output").append("<button id='tryAgain'>Try Again</button>");
	$("#tryAgain").click(promptForNumber);	
}

function promptForNumber(){
	$("#output").empty();
	var maxNum = prompt("Please enter the maximum number", "100");
	while (maxNum == null || maxNum % 1 !== 0){
		maxNum = prompt("Please enter the maximum number", "100");
	}
	fizzbuzz(maxNum);
}
