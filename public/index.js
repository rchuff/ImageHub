//jshint esversion: 6

let photos = document.querySelectorAll("img");

photos.forEach(function(photo){
  photo.addEventListener("click", function(){
    let myAudio = new Audio("audio/michael.mp3");
    myAudio.play();
  });
});
