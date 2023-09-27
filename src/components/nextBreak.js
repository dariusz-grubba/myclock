function countdownHolidays() {
	var endingTime = new Date("23 December 2023 08:00:00 GMT+02:00");
	endingTime = (Date.parse(endingTime) / 1000);
	var displayCountdown = document.getElementById("wrap4");
	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endingTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	if (days > 1) {
		document.getElementById('timeTillHolidays').innerHTML = (days + " days" + " and " + hours + ":" + minutes + ":" + seconds);
	} else if (days === 1) {
		document.getElementById('timeTillHolidays').innerHTML = (days + " day " + " and " + hours + ":" + minutes + ":" + seconds);
	} else if (days === 0) {
		document.getElementById('timeTillHolidays').innerHTML = (hours + ":" + minutes + ":" + seconds);
	} else {
		displayCountdown.style.display = "none";
	}
}

setInterval(function () { countdownHolidays(); }, 1000);