

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.getElementById("player1");
  
  video.autoplay = false;
  video.loop = false;

  video.load(); 
//   document.getElementById("volume").innerText = video.volume * 100 + "%";
});

//play video
document.querySelector("#play").addEventListener("click", function () {
  video.play();
  document.getElementById("volume").innerText = video.volume * 100 + "%";
  console.log("video started");
});

//pause video
document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
  console.log("video paused");
});

//slow down button
document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("New speed:", video.playbackRate);
});

//speed up button
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate /= 0.9;
  console.log("New speed:", video.playbackRate);
});

//skip ahead button
document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime += 10;
  }
  console.log("Current timestamp:", video.currentTime);
});

//mute/unmute button
document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  this.innerText = video.muted ? "Unmute" : "Mute";
});

//volume slider
document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.getElementById("volume").innerText = video.volume * 100 + "%";
});

//adds oldSchool
document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
});

//removes oldSchool 
document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
});
