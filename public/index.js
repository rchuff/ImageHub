//jshint esversion: 6
document.querySelector(".user-profile").addEventListener("click", () => {
  let myAudio = new Audio("audio/nature.mp3");
  myAudio.play();
});

const sounds = [
  "audio/bird_rain.mp3",
  "audio/geese.mp3",
  "audio/meadow.mp3",
  "audio/nature.mp3",
  "audio/sunny_day.mp3",
  "audio/water.mp3"
];

let userPhotos = document.querySelectorAll(".user-image");


//assigns sound to each picture, checking if one of them is of IASP
for (i = 0; i < userPhotos.length; i++) {
  userPhotos[i].addEventListener("click", (eve) => {
    let picNum = eve.srcElement.classList[1];
    let source = eve.srcElement.src;
    if (source == "./images/IASP.jpg") {
      let myAudio = new Audio("audio/mac.mp3");
      myAudio.play();
    } else {
      let myAudio = new Audio(sounds[picNum]);
      myAudio.play();
    }
  });
}
