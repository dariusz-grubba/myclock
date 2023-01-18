function odliczajDoSwiat() {
	var czasKoncowy = new Date("6 April 2023 00:00:00 GMT+01:00");
	czasKoncowy = (Date.parse(czasKoncowy) / 1000);
	var wyswietlSekcjeSwieta = document.getElementById("wrap4");
	var teraz = new Date();
	teraz = (Date.parse(teraz) / 1000);

	var timeLeft = czasKoncowy - teraz;

	var dni = Math.floor(timeLeft / 86400);
	var godziny = Math.floor((timeLeft - (dni * 86400)) / 3600);
	var minuty = Math.floor((timeLeft - (dni * 86400) - (godziny * 3600)) / 60);
	var sekundy = Math.floor((timeLeft - (dni * 86400) - (godziny * 3600) - (minuty * 60)));

	if (godziny < "10") { godziny = "0" + godziny; }
	if (minuty < "10") { minuty = "0" + minuty; }
	if (sekundy < "10") { sekundy = "0" + sekundy; }

	if (dni > 1) {
		document.getElementById('doSwiatPozostalo').innerHTML = (dni + " days" + " and " + godziny + ":" + minuty + ":" + sekundy);
	} else if (dni === 1) {
		document.getElementById('doSwiatPozostalo').innerHTML = (dni + " day " + " and " + godziny + ":" + minuty + ":" + sekundy);
	} else if (dni === 0) {
		document.getElementById('doSwiatPozostalo').innerHTML = (godziny + ":" + minuty + ":" + sekundy);
	} else {
		wyswietlSekcjeSwieta.style.display = "none";
	}
}

setInterval(function () { odliczajDoSwiat(); }, 1000);