(function(){
	if ("geolocation" in navigator) {
	  	navigator.geolocation.getCurrentPosition(position => {
		  	const lat = position.coords.latitude,
		  		lon = position.coords.longitude;

		  	$('#latitude').text(lat);
		  	$('#longitude').text(lon);

		  	const data = { lat, lon },
		  	options = {
		  		method: 'POST',
		  		mode: 'cors',
		  		headers: {
		  			'Content-Type': 'application/json'
		  		},
		  		body: JSON.stringify(data)
		  	}

		  	fetch('/api', options).then(response => {
		  		console.log(response.json());
		  	});
		});
	} else {
	  console.log("geolocation not available")
	}
})();