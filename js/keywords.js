Array.prototype.unset = function(value) {
    if(this.indexOf(value) != -1) { // Make sure the value exists
        this.splice(this.indexOf(value), 1);
		saveKeywords();
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
	saveKeywords();
}

$("#keywordform").on('submit', function(e){
	e.preventDefault();
	var new_tag = $("#keywordinput").val();
	$("#keywordinput").val("");
	addKeyword(new_tag);
})

var key_arr_gl = new Array();


//// for google trends
function setKeywordsGoogleTrends(keywords) {
	var t_str = '';
	for(var i=0; i<keywords.length; i++) {
		t_str +=  "<span class='radius label'>" + keywords[i] + "</span> ";
	}
	$("#keywordsGoogleTrends").html(t_str);
}

function setKeywordsGoogleTrendsString(keywords_string) {
	keywords = keywords_string.split(',');
	setKeywordsGoogleTrends(keywords);
}
