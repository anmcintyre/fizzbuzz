$( document ).ready(function() {
	var i;
	var finalNumber = 100;
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
});