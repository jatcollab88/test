// Links stylesheet
let lnk = document.createElement('link');
lnk.setAttribute('href', 'https://jatcollab88.github.io/test/style.css');
lnk.setAttribute('rel', 'stylesheet');
document.head.appendChild(lnk);

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