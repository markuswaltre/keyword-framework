/*
*	Keyword framework 
*	Markus Waltre @ 2014
*	markuswaltre.com
*/

function keywords () {
	// keyword array
    this.keywords = new Array();
	var self = this;

    // options
    this.titleCase = true;
    this.clickable = true;
    this.spanName = 'keyword';
    this.idName = 'keywords';

    // functions for setting options
    this.setTitleCase = function(bool) {
    	if(bool === true || bool === false) {
    		this.titleCase = bool;
    	}
    };
    this.setClickable = function(bool) {
    	if(bool === true || bool === false) {
    		this.clickable = bool;
    		this.drawKeywords();
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
			// doesnt work atm document.body.addEventListener('click', this.eventHandler, false);
			$('.' + this.spanName).on('click.' + this.spanName, function (e) {
				self.deleteKeyword($(this).html());
			    self.drawKeywords();
			});
		}
    };

    // add & delete and set an array
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
    this.addKeywords = function(arr_input) {
    	for(var i=0; i<arr_input.length; i++) {
    		this.addKeyword(arr_input[i]);
    	}
    };
    this.deleteKeyword = function(value) {
        if(this.titleCase) {
            value = this.toTitleCase(value);
        }
    	if(this.keywords.indexOf(value) != -1) { // Make sure the value exists
	        this.keywords.splice(this.keywords.indexOf(value), 1);
	    } 
    };
    this.setKeywords = function(arr_input) {
    	if(this.titleCase) {
    		arr_input = this.toTitleCaseArray(arr_input);
    	}
        // clear array
		this.keywords.length = 0;
		for(var i=0; i<arr_input.length; i++) {
			this.keywords.push(arr_input[i]);
		}
		this.drawKeywords();
    };

    // return keyword array & length
    this.getKeywords = function() {
    	return this.keywords;
    };
    this.getSize = function() {
    	return this.keywords.length;
    };

    // help functions
    this.toTitleCaseArray = function(arr) {
    	for(var i = 0; i<arr.length; i++) {
			arr[i] = this.toTitleCase(arr[i]);
		}

		return arr;
    };
    this.toTitleCase = function(word) {
    	return word.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    /* doesn't work. only finds div outside.. 
	this.eventHandler= function(e) {
		e = e || window.event;
	    var target = e.target || e.srcElement;
	    if (target.className.match(/keyword/))
	    {
	    	var t_str = target.innerHTML;
	    	self.deleteKeyword(t_str);
	    }
	}; */
};
