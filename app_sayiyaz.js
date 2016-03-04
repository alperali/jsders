window.addEventListener("load", başla);

function başla() {
  document.getElementById("yaz").onclick = hesapla;
}

function hesapla() {
  var sayı = document.getElementById("sayı").value;
  var e;
  
  try {
	document.getElementById("çıktı").value = sayı_yaz(sayı);
  }
  catch(e) {
    document.getElementById("çıktı").value = e.message;
  }
}
