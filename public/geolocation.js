(function(){
	if ("geolocation" in navigator) {
	  	navigator.geolocation.getCurrentPosition(position => {
		  	const lat = position.coords.latitude,
		  		long = position.coords.longitude;

		  	$('#latitude').text(lat);
		  	$('#longitude').text(long);
		});
	} else {
	  console.log("geolocation not available")
	}
})();