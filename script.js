// Links stylesheet
let lnk = document.createElement('link');
lnk.setAttribute('href', 'https://jatcollab88.github.io/test/style.css');
lnk.setAttribute('rel', 'stylesheet');
document.head.appendChild(lnk);

// Links jquery
let src = document.createElement('script');
src.setAttribute('src', 'https://code.jquery.com/jquery-3.7.1.slim.min.js');
src.setAttribute('integrity', 'sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=');
src.setAttribute('crossorigin', 'anonymous');
document.head.appendChild(src);

// Checks jquery has loaded
var jqReady = setInterval(function(){
	if (typeof $ != 'undefined') {
		clearInterval(jqReady);
		runJqFuncs();
	}
}, 50);

// Functions that are reliant on jquery
function runJqFuncs() {
	// Accordion
	$(document).on('click', '.myContainer .myTrigger', function() {
		var container = $(this).closest('.myContainer');
		container.find('.myContent').stop().slideToggle(350);
	});
};