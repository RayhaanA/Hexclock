function update() {
	var curTime = new Date();

	var mins = curTime.getMinutes().toString();
	var seconds = curTime.getSeconds().toString();
	var hours = curTime.getHours().toString();

	if(mins < 10) { mins = "0" + mins; }
	if(hours < 10) { hours = "0" + hours; }
	if(seconds < 10) { seconds = "0" + seconds; }

	var hexCode = '#'+hours+mins+seconds;
	var time = hours+':'+mins+':'+seconds;

	document.getElementById('clock');clock.innerHTML = time;

	document.getElementById('container').style.backgroundColor = hexCode;
}

setInterval(update, 1000);
