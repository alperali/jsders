window.addEventListener("load", function() {
  var colorize = ["", "alert alert-success", "alert alert-info", "alert alert-warning", "alert alert-danger"], colidx = 0;
  var qcat = ["famous", "famous", "famous", "movies", "movies"];
  
  var xhr = new XMLHttpRequest();
  if (xhr) {
    xhr.onload = function() {
        var resp = JSON.parse(xhr.responseText);
        document.getElementById("quotext").innerHTML = resp.quote;
        document.getElementById("quotauth").innerHTML = resp.author + 
		    (qcat[colidx] == "movies" ? " <em>(movie)</em>" : "");
        document.getElementById("twt-btn").setAttribute("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + encodeURIComponent('"' + resp.quote + '" ' + resp.author));
        document.getElementById("quoblock").className = "animated fadeInDown " + colorize[colidx];
        document.getElementById("ref-btn").removeAttribute("disabled");
		document.getElementById("twt-btn").removeAttribute("disabled");
    };
    
    function fetchQuote() {
        document.getElementById("ref-btn").setAttribute("disabled","");
	    document.getElementById("twt-btn").setAttribute("disabled","");
        document.getElementById("quoblock").className = "animated bounceOutRight " + colorize[colidx];
        xhr.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/");
        xhr.setRequestHeader("X-Mashape-Key", "J9dkz2e1ZXmsh6ZY0r6qlgGylCnXp1SRlASjsnp50bXfHppOas");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Accept", "application/json");
		colidx = (colidx+1) % 5;
        xhr.send("cat=" + qcat[colidx]);
      }
    
    document.getElementById("ref-btn").onclick = fetchQuote;
    fetchQuote();
  }
  else {
    document.getElementById("quotext").innerHTML = "";
    document.getElementById("quotauth").innerHTML = "AJAX unsupported.";
  }
});
