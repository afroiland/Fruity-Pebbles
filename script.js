function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function(){
	var totalAvailableCash = 20;
	$('h1').append('<h1><span></span>' + totalAvailableCash + '</h1>');

	$('#fruits').append('<div id="apples"></div>');
	$('#fruits').append('<div id="oranges"></div>');
	$('#fruits').append('<div id="bananas"></div>');
	$('#fruits').append('<div id="grapes"></div>');

	$('#apples').append('<img src="fruit-pics/apple.jpg" alt="apple">');
	$('#oranges').append('<img src="fruit-pics/oranges.jpg" alt="orange">');
	$('#bananas').append('<img src="fruit-pics/bananas.jpg" alt="banana">');
	$('#grapes').append('<img src="fruit-pics/grapes.png" alt="grapes">');

	$('#fruitPrice').append('<p id="applePrice">"Price: "+apples.price</p>');
	$('#fruitPrice').append('<p id="orangePrice">"Price: "</p>');
	$('#fruitPrice').append('<p id="bananaPrice">"Price: "</p>');
	$('#fruitPrice').append('<p id="grapesPrice">"Price: "</p>');


var apples = {
	name:"Apples",
	price:0
};

var oranges = {
	name:"Oranges",
	price:0
};

var bananas = {
	name:"Bananas",
	price:0
};

var grapes = {
	name:"Grapes",
	price:0
};

var fruits = [apples, oranges, bananas, grapes];
apples.price=5;
console.log(fruits);



});
