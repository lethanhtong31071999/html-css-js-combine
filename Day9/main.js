const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsEl = document.querySelector(".buttons");
sounds.forEach((sound) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = sound.toUpperCase();
  // add event
  btnEl.addEventListener("click", () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  buttonsEl.appendChild(btnEl);
});

function stopAudio() {
  sounds.forEach((sound) => {
    const audioEl = document.getElementById(sound);
    audioEl.pause();
    audioEl.currentTime = 0;
  });
}
