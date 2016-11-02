function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function(){
	var totalAvailableCash = 20;

	var apples = {
		name:"Apples",
		price:1
	};

	var oranges = {
		name:"Oranges",
		price:2
	};

	var bananas = {
		name:"Bananas",
		price:3
	};

	var grapes = {
		name:"Grapes",
		price:4
	};

	var fruits = [apples, oranges, bananas, grapes];
	apples.price=5;
	console.log(fruits);

	$('h1').append('<h1><span></span>' + totalAvailableCash + '</h1>');

	$('#fruits').append('<div id="apples"></div>');
	$('#fruits').append('<div id="oranges"></div>');
	$('#fruits').append('<div id="bananas"></div>');
	$('#fruits').append('<div id="grapes"></div>');

	$('#apples').append('<img src="fruit-pics/apple.jpg" alt="apple">');
	$('#oranges').append('<img src="fruit-pics/oranges.jpg" alt="orange">');
	$('#bananas').append('<img src="fruit-pics/bananas.jpg" alt="banana">');
	$('#grapes').append('<img src="fruit-pics/grapes.png" alt="grapes">');

	$('#fruitPrice').append('<p id="applePrice">Price: '+apples.price+'</p>');
	$('#fruitPrice').append('<p id="orangePrice">Price: '+oranges.price+'</p>');
	$('#fruitPrice').append('<p id="bananaPrice">Price: '+bananas.price+'</p>');
	$('#fruitPrice').append('<p id="grapesPrice">Price: '+grapes.price+'</p>');



});
