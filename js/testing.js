// testing

var p = new keywords();
p.setTitleCase(true);
p.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);
p.setClickable(false);

var l = new keywords();
l.setIdName("extra");
l.setClickable(false);
l.setKeywords(["Court", "Judge", "Jail", "Oh no!"]);

var d = new keywords();
d.setIdName("hola");
d.setKeywords(["Some", "people", "say", "its", "too", "much"]);

var f = new keywords();
f.setIdName("parameter");
f.setKeywords(["1", "2", "3", "4", "5"]);

// debugging

$("#test").submit(function (event) {
	event.preventDefault();
	p.addKeyword($("#text").val());
	$("#text").val("");
});