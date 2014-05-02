// testing

var p = new keywords();
p.setTitleCase(true);
p.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);
p.setClickable(false);

var l = new keywords();
l.setIdName("extra");
l.setClickable(false);
l.setKeywords(["Court", "Judge", "Jail", "Oh no!"]);

// debugging

$("#test").submit(function (event) {
	event.preventDefault();
	p.addKeyword($("#text").val());
	$("#text").val("");
});