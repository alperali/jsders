window.addEventListener("load", function() {
	'use strict';
	var dilTur = false, i;
	var enlst = Array.prototype.slice.call(document.getElementsByClassName("dilEn"));
	enlst.disp = enlst.map(function(v) { return getComputedStyle(v).display;});
	var trlst = Array.prototype.slice.call(document.querySelectorAll('[lang="tr"]'));
	
    document.getElementById("resm").addEventListener("click", function() {
		if (dilTur) {
			document.title = "A Tribute Page: Fisherman of Halicarnassus";
			for (i=0; i < enlst.length; ++i) {
				trlst[i].style.display = "none";
				enlst[i].style.display = enlst.disp[i];
			}
			dilTur = false;
		}
		else {
			document.title = "Bir Anı Sayfası: Halikarnas Balıkçısı"
			for (i=0; i < enlst.length; ++i) {
				enlst[i].style.display = "none";
				trlst[i].style.display = enlst.disp[i];
			}			
			dilTur = true;
		}
		
	});
});