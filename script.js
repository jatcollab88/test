// Custom stylesheet
let lnk = document.createElement('link');
lnk.setAttribute('href', 'https://jatcollab88.github.io/test/style.css');
lnk.setAttribute('rel', 'stylesheet');
document.head.appendChild(lnk);


// Accordion
$(document).on('click', '.myContainer .myTrigger', function() {
	var container = $(this).closest('.myContainer');
	container.find('.myContent').stop().slideToggle(350);
});