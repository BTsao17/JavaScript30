//Get Elements
const player = document.querySelector('.player');
//All other elements are within
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Declare functions
function togglePlay() {
  //paused is a property on video
  //console.log(video.paused)
  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

function updateButton() {
  //use 'this' because it's bound to the video
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  //console.log('update the button')
}

//Hook up Event Listeners
//invoke togglePlay() when video is clicked and when the play button is clicked
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
//to change the toggle icon when paused/playing
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
