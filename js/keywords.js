// trying to create an object instead

function keywords () {
	// to be able to use self-reference
	// inside jquery $(this)
	var self = this;
    this.keywords = new Array();
    this.titleCase = true;
    this.spanName = 'keyword';

    this.setTitleCase = function(bool) {
    	// check if true or false here..
    	this.titleCase = bool;
    }
    this.deleteKeyword = function(value) {
    	//this.keywords.unset(val);
    	console.log(value);
    	if(this.keywords.indexOf(value) != -1) { // Make sure the value exists
	        this.keywords.splice(this.keywords.indexOf(value), 1);
	    } 
    };
    this.drawKeywords = function() {
    	var t_str = '';
		for(var i=0; i<this.keywords.length; i++) {
			t_str +=  "<span class='keyword'>" + this.keywords[i] + "</span> ";
		}
		$("#keywords").html(t_str);
		
		$('.keyword').off('click.keyword');
		$(".keyword").on('click.keyword', function (e) {
				self.deleteKeyword($(this).html());
			    self.drawKeywords();
		});
    };
    this.setKeywords = function(keywords_input) {
    	if(this.titleCase) {
    		keywords_input = this.toTitleCaseArray(keywords_input);
    	}
        // does this really clear the array?
		this.keywords.length = 0;
		for(var i=0; i<keywords_input.length; i++) {
			this.keywords.push(keywords_input[i]);
		}
		this.drawKeywords();
    };
    this.getKeywords = function() {
    	return this.keywords;
    };
    this.addKeyword = function(input) {
    	input = $.trim(input); // delete whites
		if(this.titleCase) {
    		input = this.toTitleCase(input);
    	}
    	if(input.length > 0) { // simple check for length
			this.keywords.push(input);
			this.drawKeywords();
		}
    };
    this.toTitleCaseArray = function(arr) {
    	for(var i = 0; i<arr.length; i++) {
			arr[i] = this.toTitleCase(arr[i]);
		}

		return arr;
    };
    this.toTitleCase = function(keyword) {
    	return keyword.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
};

// testing

var p = new keywords();
p.setTitleCase(true);
p.setKeywords(["aaSa", "aa b", "AAH bbb AA", "hello", "you"]);

// debugging

$("#test").submit(function (event) {
	event.preventDefault();
	p.addKeyword($("#text").val());
	$("#text").val("");
});