let loader = document.querySelector(".loader-container");
let page = document.querySelector(".main-content");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
  page.classList.add("visible");
});
function toggleAudio() {
  var audio = document.getElementById("audioPlayer");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
