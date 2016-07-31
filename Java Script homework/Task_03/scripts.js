function DivideNumber () {

	var divideByFour = 4;
	var divideBySeven = 7;
    var inputNumber = document.getElementById("inputNumber").value;

    if (inputNumber!= " "){
	    if (inputNumber%divideByFour == 0){
	    	if (inputNumber%divideBySeven == 0){
	   			alert("Your number is divisible by " + divideByFour + " and " + divideBySeven);
	    } else{
	    		alert("Your number is not divisible by " + divideByFour + " and " + divideBySeven);
	    } 
	}
}
}