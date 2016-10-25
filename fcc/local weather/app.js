window.addEventListener("load", function() {
  
  if (! navigator.geolocation) {
	  /* geolocation unavailable */
	  return;
  }
  
  var xhr = new XMLHttpRequest();
  if (! xhr) {
	  /* AJAX support not found. */
	  return;
  }
  
  xhr.onload = function() {
	// var resp = JSON.parse(xhr.responseText);
	console.log("xhr success");
	document.getElementById("testout").innerHTML = xhr.responseText;
  };
  
  const GEO_TOUT = 4000;  // in ms
  navigator.geolocation.getCurrentPosition(
	function(pos) {
		console.log("geo success.");
		fetchWeather(pos.coords.latitude, pos.coords.longitude, pos.coords.altitude);
	},
	function(poserr) {
		console.log("geo error.");
		if (poserr.code == poserr.TIMEOUT) 
			document.getElementById("testout").innerHTML = "Geolocation timeout.";
		else
			document.getElementById("testout").innerHTML = "Geolocation unavailable.";
	});
	// ,
	// {enableHighAccuracy: false, timeout: GEO_TOUT, maximumAge: 0});
	    
    function fetchWeather(lat, lon, alt) {
        xhr.open("GET", "http://api.openweathermap.org/data/2.5/forecast/city?APPID=29b618357346ae44688eac2b035dfe38&units=metric&lat=" + lat + "&lon=" + lon);
        xhr.send(null);
    }
    
});
