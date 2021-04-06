var video = document.getElementById("player1");
var vidVolume = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// function play() {
// 	console.log("Play Video");
// 	video.play();
// }

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
	
	video.currentTime += 15

	if (video.currentTime = video.duration) {
		video.currentTime = 0
		video.play()
	}

	console.log(video.currentTime)
});

