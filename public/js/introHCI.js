'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	ga("send", "event", 'like', "click");
	console.log("send click");
}

$(".likeBtn").click(function(){ga('send', 'event', 'like', "click");});
// $(".likeBtn").click(ga('send', 'event', 'like', "click"));
// $(".likeBtn").click(function(){console.log("send click");});
