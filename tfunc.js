var myInt;
var secs;
var numPoms = 0;
var paused = false; 
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
document.getElementById("resetTime").addEventListener("click", resetTimer);
document.getElementById("stopTime").addEventListener("click", stopTimer);
document.getElementById("startTime").addEventListener("click", startTimer);

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
			secs = 1500;
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

function shortBreak() {
	secs = 300;
	myInt = setInterval(function ()
			{ 
				console.log(secs);
				secs--;
				updateClock();
				if (secs == 0) {
					clearInterval(myInt);
				}
			}, 1000);
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

	if (mins < 10) {
		minutes.innerText = "0" + mins;
	} else {
		minutes.innerText = mins;
	}

	if (sec < 10) {
		seconds.innerText = "0" + sec;
	} else {
		seconds.innerText = sec;
	}
}