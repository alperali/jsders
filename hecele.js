/*

il
ol
on
at
---------------
i-liş-kin
a-ra-sın-dan
e-di-len
ö-de-me
e-mir

iş-le-min
em-ri-nin

üst-te
alt-lık
alt
ilk
====================================

şu
ve
bu
---------------
ve-rir
ma-hi-ye-ti-ne
sa-ğır
ta-ra-fın-dan
ta-li-mat

sa-at
fi-il
ka-i-de
me-sa-i
 
bil-gi
müş-te-ri
ger-çek-leş-ti-ril-me-si-ne
sağ-lam
kal
bit
son
 
borç-lan-mak
fark-lı-laş-tır
borç
fark
 
Trak-ya
prog-ram-cı
spor
spor-a
spor-cu
tren
tren-e
kral-lık
kral-a
kral-i-çe 
*/



function hecele(klme)
{
  
  if (klme.length < 3)
    return klme;
  
  const hc = [
    { ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][aeiouöüıİ]/i,  uzn: 1 },
    { ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9][aeiouöüıİ]/i,  uzn: 2 },
    { ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,  uzn: 3 },
    
    { ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9][aeiouöüıİ]/i,  uzn: 2 },
    { ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][aeiouöüıİ]/i,  uzn: 2 },
    { ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9][aeiouöüıİ])/i,  uzn: 3 },
    { ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,  uzn: 4 },
    { ptrn: /^[^aeiouöüıİ0-9][^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,  uzn: 4 }          
  ];
  
    var i = -1;
    while (++i < hc.length) 
        if (hc[i].ptrn.test(klme))
            if (klme.length > hc[i].uzn)
                return klme.substr(0, hc[i].uzn) + "-" + hecele(klme.substr(hc[i].uzn));
            else
                return klme;

    return klme; // hiç match yok, olduğu gibi döndür
}


"İşleyen DEMİR IŞILdar farklılıklarımız Trakyada havalar nasıl".split(" ").map(hecele).join(" ")