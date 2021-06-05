// VARIABLES
let audio = new Audio("sifflet1.wav")
let startTime = 0
let start = 0
let end = 0
let diff = 0
let timerID = 0

// Création du chrono
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	let msec = diff.getMilliseconds()
	let sec = diff.getSeconds()
	let min = diff.getMinutes()
	let hr = diff.getHours()-1
	// siffle toutes les minutes + 20 sec
	if (sec === 20){
		audio.play()
		console.log("Je siffle")
	}
	if (min < 10){
		min = "0" +min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = `${hr}:${min}:${sec}:${msec}` //hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}

function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}
// Fonction pour jouer le son 

function PlaySound() {
	audio.play; 
	console.log("Le sifflet est joué")
}

