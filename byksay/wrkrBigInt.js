importScripts('BigInteger.min.js');
self.addEventListener("message", function(e) {
	var taban, sonuç;
	try {
		taban = bigInt(e.data[0]);
	}
	catch(x) {
		postMessage([x.message, ""]);
		return;
	}
	
	try {
		sonuç = taban.pow(e.data[1]);
	}
	catch(x) {
		postMessage([x.message, ""]);
		return;
	}
	
	postMessage([sonuç.toString(), sonuç.toString().length]);
});