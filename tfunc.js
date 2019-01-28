var myInt;
var secs;
var numPoms = 0;
var paused = false; 
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function startTimer() {
	if (paused == true) {
		paused = false;
		myInt = setInterval(function ()
			{ 
				console.log(secs);
				secs--;
				updateClock();
				if (secs == 0) {
					clearInterval(myInt);
					numPoms++;
					console.log(numPoms);
				}
			}, 1000);
	} else {
		console.log(numPoms);
		secs = 1400;
		myInt = setInterval(function ()
			{ 
				console.log(secs);
				secs--;
				updateClock();
				if (secs == 0) {
					clearInterval(myInt);
					numPoms++;
					console.log(numPoms);
				}
			}, 1000);
	}
}

function stopTimer() {
	clearInterval(myInt);
	paused = true;
}

function resetTimer() {
	clearInterval(myInt);
	secs = 1500;
	minutes.innerText = '25';
	seconds.innerText = '00';
}

function updateClock() {
	var time = secs;
	var mins = Math.floor(time / 60);
	var sec = time - (mins * 60);
	minutes.innerText = mins;
	if (sec < 10) {
			seconds.innerText = "0" + sec;
	} else {
			seconds.innerText = sec;
	}
}