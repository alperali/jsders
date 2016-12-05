window.addEventListener("load", function() {
	var süre;
	function zmnSay() { 
		document.getElementById("sayaç").innerHTML = ++süre;
	}
	
	function worker_ile_yap(taban, üs) {
		"use strict";
		var sonuç, krono, wrkr;
		
		wrkr = new Worker("wrkrBigInt.js");
		wrkr.addEventListener("message", function (e) {
			clearInterval(krono);
			document.getElementById("rslt").value = e.data[0];
			document.getElementById("bsmk").innerHTML = e.data[1] + " bsmk";
			wrkr.terminate();
			son();
		});
		
		ilk();
		süre = 0;
		krono = setInterval(zmnSay, 1000);
		wrkr.postMessage([taban, üs]);
	}
	
	document.getElementById("hesapla").addEventListener("click", function() {
		"use strict";
		var taban, üs, sonuç, krono;
		
		if (document.getElementById("worker").checked) {
			if (window.Worker)
				worker_ile_yap(document.getElementById("taban").value, document.getElementById("üs").value);
			else
				document.getElementById("rslt").value = "tarayıcı Worker desteklemiyor.";
			
			return;
		}
		
		ilk();
		try {
			taban = bigInt(document.getElementById("taban").value);			
		}
		catch(e) {
			document.getElementById("rslt").value = e.message;
			son();
			return;
		}
		
		süre = 0;
		krono = setInterval(zmnSay, 1000);
		try {
			sonuç = taban.pow(document.getElementById("üs").value);
		}
		catch(e) {
			document.getElementById("rslt").value = e.message;
			clearInterval(krono);
			son();
			return;
		}
		
		clearInterval(krono);
		document.getElementById("rslt").value = sonuç.toString();
		document.getElementById("bsmk").innerHTML = sonuç.toString().length + " bsmk";
		son();
	});
	
	function ilk() {
		document.getElementById("bsmk").innerHTML = document.getElementById("rslt").value = "";
		document.getElementById("sayaç").innerHTML = "00";
		document.getElementById("taban").disabled = document.getElementById("üs").disabled = document.getElementById("worker").disabled = true;
	}
	
	function son() {
		document.getElementById("taban").disabled = document.getElementById("üs").disabled = document.getElementById("worker").disabled = false;
	}
});
