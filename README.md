Keyword framework
=================

I built this framework since I found it unnecessary to use a large framework such as foundation or bootstrap if you only needed the extra keyword tagging features. The object handling the keyword is pretty straight forward and shouldn't be difficult to edit to your needs for more features.


## Setup

You need to add `keyword.js` and `keyword.css` to your document.
```html
<link rel="stylesheet" href="css/keyword.css">
<script src="js/keywords.js"></script>
```

## Create keywords

First off you need to create your div in your html document so we have something to append our keywords upon.
```html
<div id="keywords"></div>
```

The framework works by appending `span` of a keyword inside a `div` Id. (default div #id is `keywords`)
```javascript
var k = new keywords();
k.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);
```

And this will give us

![Image not found](https://raw.githubusercontent.com/markuswaltre/keyword-framework/master/images/demo.png "Example of keywords")

Notice that the keywords are capitalized, if you don't want this you can simply turn it off
```javascript
var k = new keywords();
k.setTitleCase(false);
k.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);
```

If you need to append to a specific div, not the default one, you use `setIdName`
```javascript
var k = new keywords();
k.setIdName("otherdivid");
k.setKeywords(["Milk", "Eggs", "ham", "potato", "french fries"]);
```

## Other options

All keywords are by default clickable and will result in deleting upon clicked. You can turn this off by

```javascript
k.setClickable(false);
```

Append an extra keyword

```javascript
k.addKeyword("Hamburger");
```

Append multiple extra keywords 

```javascript
k.addKeywords(["Flour", "Pizza", "Wine"]);
```

Delete a specific keyword

```javascript
k.deleteKeyword("Pizza"); // who would delete pizza?
```

Retrieve array of keywords

```javascript
k.getKeywords();
```

Retrieve length of array of keywords

```javascript
k.getSize();
```

## Notes

Hopefully you find this tool useful!
Any questions, comments or suggestions just ask!

Thank you!
