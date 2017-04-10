var images = [	"/images/Screen%20Shot%202017-04-09%20at%2011.42.03%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.42.20%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.42.32%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.42.47%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.50.26%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.50.48%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.51.12%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.51.23%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.52.34%20PM.png", 
				"/images/Screen%20Shot%202017-04-09%20at%2011.52.54%20PM.png"
				];

function openArcade() {
	var cardBuilder = "";
	cardBuilder += `<div class="row">`;
	for (var i = 0; i < images.length; i++) {
		cardBuilder += `<div class="col-md-4">`;
		cardBuilder += `<img src="${images[i]}">`;
		cardBuilder += `</div>`;	
		if (((i + 1) % 3) === 0) {
			cardBuilder += `</div>`
			//write cards to DOM
			$(".arcade").append(cardBuilder);
			//clear cardBuilder and get ready to make next row of cards
			cardBuilder = "";
			cardBuilder += `<div class="row">`			
		}
		if (i + 1 === images.length) {
			cardBuilder += `</div>`
			//write cards to DOM
			$(".arcade").append(cardBuilder);
		}
	}
}

openArcade();
