/*
*	Keyword framework 
*	for simple uses
*	@ Markus Waltre 2014
*/

//function keywords (keywords, idName) {
function keywords () {
	// keyword array
    this.keywords = new Array();

    // options
    this.titleCase = true;
    this.clickable = true;
    this.spanName = 'keyword';
    this.idName = 'keywords';

    // check input parameter (this does not work)
    
	// if(idName===undefined) {
	// 	/* no idName parameter in call */ 
	// }
	// else if(typeof(idName) === 'string') {
	// 	this.idName = idName;
	// }
	// if(keywords===undefined) {
	// 	no keywords parameter in call  
	// }
	// else if(keywords instanceof Array) {
	// 	this.setKeywords(keywords);
	// } else if(typeof(keywords) === 'string') {
	// 	this.addKeyword(keywords);
	// }


    // functions for setting options
    this.setTitleCase = function(bool) {
    	if(bool === true || bool === false) {
    		this.titleCase = bool;
    	}
    };
    this.setClickable = function(bool) {
    	console.log(bool);
    	if(bool === true || bool === false) {
    		this.clickable = bool;
    	}
    };
    this.setIdName = function(idName) {
    	this.idName = idName;
    };

    // draw keywords
    this.drawKeywords = function() {
    	var t_str = '';
		for(var i=0; i<this.keywords.length; i++) {
			// appends a span class named by spanName with a keyword
			t_str +=  "<span class=" + this.spanName + ">" + this.keywords[i] + "</span> ";
		}
		// appends to the div given by idName
		$('#' + this.idName).html(t_str);
		
		// reset the listener for keyword clicks
		if(this.clickable) {
			// to be able to use self-reference
			// inside jquery $(this)
			var self = this;

			$('.' + this.spanName).off('click.' + this.spanName);
			$('.' + this.spanName).on('click.' + this.spanName, function (e) {
					self.deleteKeyword($(this).html());
				    self.drawKeywords();
			});
		}
    };

    // add / delelete and set an array
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
    this.deleteKeyword = function(value) {
    	if(this.keywords.indexOf(value) != -1) { // Make sure the value exists
	        this.keywords.splice(this.keywords.indexOf(value), 1);
	    } 
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



    // return keyword array
    this.getKeywords = function() {
    	return this.keywords;
    };

    // help functions
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
p.setTitleCase(false);
p.setKeywords(["aaSa", "aa b", "AAH bbb AA", "hello", "you"]);

var l = new keywords();
l.setIdName("extra");
l.setClickable(false);
l.setKeywords(["adsadsadsadasdas", "adsa", "asd"]);

//var r = new keywords(["hey", "dude"], "parameter");

// debugging

$("#test").submit(function (event) {
	event.preventDefault();
	p.addKeyword($("#text").val());
	$("#text").val("");
});