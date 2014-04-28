// trying to create an object instead

function keywords () {
    this.keywords = new Array();
    this.setKeywords = function() {
        toTitleCaseArray();

		key_arr_gl.length = 0;
		for(var i=0; i<keywords.length; i++) {
			key_arr_gl.push(keywords[i]);
		}
		drawKeywords(key_arr_gl);
    };
    this.toTitleCaseArray = function() {
    	for(var i = 0; i<keywords.length; i++) {
			keywords[i] = toTitleCase(array[i]);
		}
    };
    this.toTitleCase = function() {
    	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
}

// testing with object

function apple () {
	this.fruit = new Array();
	this.setFruits = function(arr) {
		fruit = arr;
	};
	this.printFruits = function() {
		console.log(fruit);
	};
}

// old version below

Array.prototype.unset = function(value) {
    if(this.indexOf(value) != -1) { // Make sure the value exists
        this.splice(this.indexOf(value), 1);
    }   
}

function setKeywords(keywords) {		
	keywords = toTitleCaseArray(keywords);

	key_arr_gl.length = 0;
	for(var i=0; i<keywords.length; i++) {
		key_arr_gl.push(keywords[i]);
	}
	drawKeywords(key_arr_gl);
}

function getKeywords() {
	return key_arr_gl;
}

function drawKeywords(keywords) {
	var t_str = '';
	for(var i=0; i<keywords.length; i++) {
		t_str +=  "<span class='keyword'>" + keywords[i] + "</span> ";
	}
	$("#keywords").html(t_str);
	
	$('.keyword').off('click.keyword');
		$(".keyword").on('click.keyword', function (e) {
	    key_arr_gl.unset($(this).html());
	    drawKeywords(key_arr_gl);
	});
}

function addKeyword(new_tag) {
	new_tag = toTitleCase(new_tag);
	key_arr_gl.push(new_tag);
	drawKeywords(key_arr_gl);
}

function toTitleCase(str){
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function toTitleCaseArray(array){
	for(var i = 0; i<array.length; i++) {
		array[i] = toTitleCase(array[i]);
	}

	return array;
}

var key_arr_gl = new Array();


// bugtesting
var t = ["test1", "test2", "test3", "test4"];
setKeywords(t);

var count = 0;
while(true) {
	addKeyword("hfa");
	count++;
	if(count > 1) break;
}

var p = new keywords();
var a = new apple();
a.setFruits(["apple", "pear"]);
a.printFruits();
