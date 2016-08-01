function calculate () {
	var rectangleLenght = document.getElementById('rectangle-lenght').value;
	rectangleLenght = parseInt(rectangleLenght);

	var rectangleWidth = document.getElementById('rectangle-width').value;
	rectangleWidth = parseInt(rectangleWidth);

	var resultInput = document.getElementById('result');

	var result = rectangleLenght * rectangleWidth;
	resultInput.value = result;
} 