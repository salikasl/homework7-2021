var video = document.getElementById("player1");
video.loop = true
var vidVolume = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime > 15)
		video.currentTime += 15;
	else
		video.currentTime = 0
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted
	document.querySelector("#mute").innerHTML = (video.muted) ? "Unmute" : "Mute"
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100
	console.log(video.volume)
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")	
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")	
});