/*
NE?
rakamla yazılmış bir sayıyı yazıyla ifade etmek
- 30 basamaklı olacak
- pozitif tamsayılar olacak
- biryüz, birbin olmayacak
- sıfır okunmaz, sessiz

NASIL?
bir fonksiyon, bir parametre alacak ve sonucu return edecek
*/

function sayı_yaz(sayı)
{
  const BSMK = 30;
  var N = ["", "bin", "milyon", "milyar", "trilyon", "katrilyon", "kentilyon", "seksilyon", "septilyon", "oktilyon"];
  var sıfırek = ["", "00", "0"];
  var i, b, boy, sonuç="";
          
  if (typeof sayı != "string")
    throw new TypeError("Parametre string olmalıdır.");
    
  for (i=0; i<sayı.length; ++i)
    if (sayı[i] < "0" || sayı[i] > "9")
      throw new Error("Sayı sadece rakamlardan oluşmalıdır.");
  
  if (sayı.length > BSMK)
    throw new RangeError("En fazla " + BSMK + " basamaklı olabilir.");
      
  sayı = sıfırek[sayı.length % 3] + sayı;
  
  for(i=sayı.length, b=0; i>0; i-=3, ++b) {
    boy = BOY(sayı.substr(i-3, 3));
    if (boy != "")
      sonuç =  boy + " " + N[b] + " " + sonuç;
  }
  
  if (sonuç.substr(0, 7) == "bir bin")
    return sonuç.substr(4);
  else if (sonuç == "")
    return "sıfır";
  else
    return sonuç;
  
  function BOY(üçlü)
  {
     var B = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
     var O = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
     var Y = ["", "yüz", "ikiyüz", "üçyüz", "dörtyüz", "beşyüz", "altıyüz", "yediyüz", "sekizyüz", "dokuzyüz"];
    
     return Y[üçlü[0]] + O[üçlü[1]] + B[üçlü[2]];
  }
  
}
