window.addEventListener("load", function() {
    document.getElementById("hcl-btn").onclick = function() {
        var klme = document.getElementById("kelime").value;
        if (/[^a-zşğçöüİı]/i.test(klme))
            document.getElementById("heceli").innerHTML = "Sadece harflerden oluşan bir kelime girin."
        else
            document.getElementById("heceli").innerHTML = hecele(klme);
    }

    function hecele(klme) {
      
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
        { ptrn: /^[^aeiouöüıİ0-9][^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9]/i,  uzn: 4 }          
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
    
    document.forms[0].onsubmit = function () {
        document.getElementById("hcl-btn").click();
        return false;
    }

});
