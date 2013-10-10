var seconds = 0;
var minutes = 0;
var hours = 0;

var counter = false;
var chrono = document.getElementById("chronoText");

function chronoTick(){
	addSecond();
	chrono.textContent = formatChronoText();
	
}
function resetChrono(){
	seconds = 0;
	minutes = 0;
	hours = 0;
	chrono.textContent = formatChronoText();
}
function startChrono(){
	counter = setInterval(chronoTick, 1000);
}
function stopChrono(){
	clearInterval(counter);
	counter = false;
}
function toggleStartButtonFunction(){
	if(!(counter===false)){
		stopChrono();
		resetChrono();
		toggleStartButtonText();
	}
	else if(seconds ==0 && minutes == 0 && hours == 0){
		resetChrono();
		startChrono();
		toggleStartButtonText();
	}
}
function togglePauseButtonFunction(){
	if(!(counter===false)){
		stopChrono();
		togglePauseButtonText();
	}
	else if(seconds > 0 || minutes > 0 || hours > 0){
		startChrono();
		togglePauseButtonText();
	}
}
function startButtonOnClick(){
	toggleStartButtonFunction();
}
function pauseButtonOnClick(){
	togglePauseButtonFunction();
}
function addSecond(){
	if(seconds  < 59){
		seconds++;
	}else{
		seconds =0;
		if(minutes < 59){
			minutes++;
		}else{
			minutes = 0;
			hours++;
		}
	}
}
function formatChronoText(){
	var sec = seconds;
	var min = minutes;
	var h = hours;
	
	if(sec < 10){
		sec = "0"+sec;
	}
	if(min < 10){
		min = "0"+min;
	}
	if(h < 10){
		h = "0"+h;
	}
	
	return h + ":" + min + ":" + sec;
}
function toggleStartButtonText(){
	var startB = document.getElementById("startButton");
	if(!(counter===false)){
		startB.textContent  = "Reset";
	}
	else{
		startB.textContent  = "Start";
	}
}
function togglePauseButtonText(){
	var pauseB = document.getElementById("pauseButton");
	if(!(counter===false)){
		pauseB.textContent = "Pause";
	}
	else{
		pauseB.textContent  = "Continue";
	}
}


