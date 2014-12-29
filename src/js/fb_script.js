//Added a listen on the document body. 
//Whenever an AJAX call that changes the view execute the following code.
document.body.addEventListener("DOMSubtreeModified", function(event){
	//stop the click listener for all the likes
	//currently this is hard coded; maybe find a better solution
	$('.UFILikeLink').click(function(event){
		event.stopPropagation();
		// console.log('shouldve stopped the event from changing the like', event);
	});
}, false);
