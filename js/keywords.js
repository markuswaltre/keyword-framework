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
		t_str +=  "<span class='radius label'>" + keywords[i] + "</span> ";
	}
	$("#keywords").html(t_str);
	
	$('.label').off('click.label');
		$(".label").on('click.label', function (e) {
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

var t = ["test1", "test2", "test3", "test4"];
setKeywords(t);

var count = 0;
while(true) {
	addKeyword("hfa");
	count++;
	if(count > 1) break;
}
