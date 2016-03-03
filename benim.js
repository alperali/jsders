function parametrik_say (x,y) {
  // Ver. 1.3.2:
  // - ilk parametre poztif olmalı.
  // Ver. 1.3.1:
  // - string türü sayıların döngüye girmeden number çevrimi sağlandı.
  // Ver. 1.3:
  // - sayı harici parametreler durumunda istisna üretip atması sağlandı.
  // Ver. 1.2:
  // - boş dönmesi engellendi.
  // Ver. 1.1:
	// - değişkenler global kapsamdan fonksiyon kapsamına alındı.
	// Ver. 1:
	// - adım ve bitiş parametreleri eklendi.
	// - kimlik değişti.
	// Versiyon 0:
	// - ilk sürüm
  
  
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  if (isNaN(x) || isNaN(y))
    throw "parametrik_say(): Parametreler sayı olmalıdır.";
    
  if (x >= y)
    return "** Liste boştur **";
  
  if (x < 0)
    throw "parametrik_say(): İlk parametre pozitif olmalıdır.";
  
  var sonuç="";
  for (var a=x; a<y; a=a+x)
    sonuç = sonuç+a+",";

  return sonuç;
}

