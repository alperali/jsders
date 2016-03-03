window.addEventListener("load", başla);


function başla() {
  document.getElementById("hesap").onclick = hesapla;
  document.getElementById("temiz").onclick = temizle;
}


function hesapla() {
  var x = document.getElementById("p1").value;
  var y = document.getElementById("p2").value;
  var e;
  
  try {
  document.getElementById("çıktı").value = parametrik_say(x, y);
  }
  catch(e) {
    document.getElementById("çıktı").value = e;
  }
}


function temizle() {
   document.getElementById("çıktı").value =
   document.getElementById("p1").value =
   document.getElementById("p2").value = "";
}