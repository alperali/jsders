window.addEventListener("load", başla);

function başla() {
  document.getElementById("yaz").onclick = hesapla;
  
  document.forms[0].onsubmit = function () {
    document.getElementById("yaz").click();
    return false;
  }
}

function hesapla() {
  var sayı = document.getElementById("sayı").value;
  var e;
  
  try {
	document.getElementById("çıktı").innerHTML = "&nbsp; " + sayı_yaz(sayı);
  }
  catch(e) {
    document.getElementById("çıktı").innerHTML = "&nbsp; " + e.message;
  }
}
