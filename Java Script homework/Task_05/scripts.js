function calculate () {
	var trapeziumLength = document.getElementById('trapezium-length').value;
	trapeziumLength = parseInt(trapeziumLength);

	var trapeziumWidth = document.getElementById('trapezium-width').value;
	trapeziumleWidth = parseInt(trapeziumWidth);

	var trapeziumHeight = document.getElementById('trapezium-height').value;
	trapeziumHeight = parseInt(trapeziumHeight);

	var resultInput = document.getElementById('result');

	var result = (trapeziumLength + trapeziumWidth)/2 * trapeziumHeight;
	resultInput.value = result;
} 