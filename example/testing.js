/*
*	Keyword example framework 
*	Markus Waltre @ 2014
*	markuswaltre.com
*/

// 1
var k = new keywords();
k.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);


// 2
var l = new keywords();
l.setIdName("carbrands");
l.setClickable(false);
l.setKeywords(["Bmw", "mercedes", "ferrari", "keoenggeegisegg"]);

// 3
var d = new keywords();
d.setIdName("parameters");
d.setTitleCase(false);
d.setKeywords(["12 degrees", "123983.21", "zh12^12"]);


// 4 form

$("#test").submit(function (event) {
	event.preventDefault();
	k.addKeyword($("#text").val());
	$("#text").val("");
});