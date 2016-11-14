window.addEventListener("load", function() {
	var mtn = "İşlemin mahiyetine göre yukarıdaki bilgiler arasından Banka tarafından talep edilen bilgileri verir. Müşteri tarafından ödeme işleminin gerçekleştirilmesine ilişkin talimat bankaya ulaştırıldığında veya uzaktan iletişim araçları aracılığı ile onay verildiğinde Banka yetkilendirilmiş sayılır. Müşteri tarafından bankanın yetkilendirilmesinden sonra işlem banka tarafından gerçekleştirilmediği müddetçe geri alınabilir. Ancak otomatik ödeme talimatları gibi doğrudan borçlandırma yöntemiyle yapılan ödeme işleminde, müşteri ödeme emrini en geç ilgili ödemenin vade gününden bir önceki iş günü sonuna kadar geri alabilir. Müşteri Bankaya ödeme emrine ilişkin yetkilendirmeyi işgünü saat 10.30’a kadar yapabilir. Bu saatten sonra yapılan yetkilendirme ertesi iş günü gerçekleştirilecektir. Ödeme emrinin belirli bir günde, belirli bir dönemin sonunda veya müşterinin ödemeye ilişkin fonları banka tasarrufuna bıraktığı günde gerçekleştirilmesinin kararlaştırılması halinde, ödeme için kararlaştırılan gün ödeme emrinin alınma zamanı olarak kabul edilir. Kararlaştırılan günün iş günü olmaması halinde, ödeme emri izleyen ilk iş günü alınmış sayılır."
		var xmtn = "Müşteri tarafından bankanın yetkilendirilmesinden sonra işlem banka tarafından gerçekleştirilmediği müddetçe geri alınabilir. Ancak otomatik ödeme talimatları gibi doğrudan borçlandırma yöntemiyle yapılan ödeme işleminde, müşteri ödeme emrini en geç ilgili ödemenin vade gününden bir önceki iş günü sonuna kadar geri alabilir."

	var selected = null;
	
	document.getElementById("sola-yasla").onclick = function() { 
		selected = this;
		// document.getElementById("btn-hecele").setAttribute("disabled","");
		document.getElementById("metin").style.width = parseInt(document.getElementById("str-uzn").value, 10) * 0.57 + "em";
		document.getElementById("metin").innerHTML = mtn;
		document.getElementById("metin").className = "lead daktilo text-left";
	};
	
	document.getElementById("tam-yasla").onclick = function() { 
		selected = this;
		document.getElementById("metin").style.width = parseInt(document.getElementById("str-uzn").value, 10) * 0.57 + "em";
		// document.getElementById("btn-hecele").setAttribute("disabled","");
		document.getElementById("metin").innerHTML = mtn;
		document.getElementById("metin").className = "lead daktilo text-justify";
	};

	document.getElementById("btn-hecele").onclick = function() {
		selected.click();
	};
	
	document.getElementById("hecele").onclick = function() { 
		// document.getElementById("btn-hecele").removeAttribute("disabled");
		selected = this;
		var satUzn = parseInt(document.getElementById("str-uzn").value, 10);
		document.getElementById("metin").style.width = satUzn * 0.57 + "em";
		
		var i = 0, snc = "", j, k, hcl;
		while (i < mtn.length)
			if (mtn.charAt(i+satUzn) === " ") {
				snc += mtn.substr(i, satUzn) + "<br />";
				i += satUzn;
			}
			else if (mtn.charAt(i+satUzn) === "")  {  // belge sonu
				snc += mtn.substr(i);
				break;
			}
			else {  // hecele
				j = i + satUzn;
				while (mtn.charAt(--j) !== " ");
				k = mtn.substr(j+1).search(/[\.?!,; ]/);
				//console.log("j: "+ j +", k: "+k);
				//console.log(mtn.substring(j+1, j+k+1));
				hcl = hecele(mtn.substring(j+1, j+1+k)).split("-");
				
				var inword = false;
				while (hcl.length > 0)
					if (j + hcl[0].length  <  i + satUzn) {
						inword = true;
						j += hcl[0].length;
						hcl.shift();
					}
					else {
						if (inword)
							snc += mtn.substring(i, j+1) + "- ";
						else
							snc += mtn.substring(i, j) + " ";
						
						i = j+1;
						break;
					}
					
				if (hcl.length == 0) {
					j++;
					while (/[\.?!,;]/.test(mtn.charAt(j)))  ++j;
					snc += mtn.substring(i, j) + " ";
					i = j+1;
				}
					
			}
				
		document.getElementById("metin").innerHTML = snc;
		document.getElementById("metin").className = "lead daktilo text-justify";	
	};
	
	document.getElementById("sola-yasla").click();
  
	function hecele(klme)	{
    const hc = [
        {
            ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][aeiouöüıİ]/i,
            uzn: 1
        }, 
        {
            ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9][aeiouöüıİ]/i,
            uzn: 2
        }, 
        {
            ptrn: /^[aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,
            uzn: 3
        }, 

        {
            ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9][aeiouöüıİ]/i,
            uzn: 2
        },
	    {
            ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9][aeiouöüıİ])/i,
            uzn: 3
        },
		{
            ptrn: /^[^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,
            uzn: 4
        },
		{
            ptrn: /^[^aeiouöüıİ0-9][^aeiouöüıİ0-9][aeiouöüıİ][^aeiouöüıİ0-9]($|[^aeiouöüıİ0-9])/i,
            uzn: 4
        }		
    ];
    
	if (klme.length < 3)
		return klme;
	
	var i = -1;
    while (++i < hc.length) 
		if (hc[i].ptrn.test(klme))
			if (klme.length > hc[i].uzn)
				return klme.substr(0, hc[i].uzn) + "-" + hecele(klme.substr(hc[i].uzn));
			else
				return klme.substr(0, hc[i].uzn);
			
	return klme;
	}
});
