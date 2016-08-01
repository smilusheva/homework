function DivideNumber () {

	var divideByThree = 3;
    var inputNumber = document.getElementById("inputNumber").value;

    if(inputNumber!= " "){
	    if (inputNumber%divideByThree == 0){
	   			alert("Yes, your number is divisible by " + divideByThree);
	    } else{
	    		alert("No, your number is not divisible by " + divideByThree);
	    }
	}
}