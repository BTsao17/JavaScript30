//Get Elements
const player = document.querySelector('.player');
//All other elements are within
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Declare functions
function togglePlay() {
  //paused is a property on video
  //can also use this.paused
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

function skip() {
  //how much the video is going to skip by looking at data-skip value on the buttons
  // console.log('skipping');
  // console.log(this.dataset);
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  //console.log(this.name); // -> volume or playbackRate, which are properties of video element
  //console.log(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  //change progress-filled css
  const percent = video.currentTime / video.duration * 100;
  progress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // console.log(e);
  //console.log(progressBar.offsetWidth);
  const scrubTime = e.offsetX / progressBar.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

//Hook up Event Listeners
//invoke togglePlay() when video is clicked and when the play button is clicked
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

//to change the toggle icon when paused/playing
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//skip ahead or backtrack
skipButtons.forEach((button) => button.addEventListener('click', skip));

//changes in the ranges - volume and playback rate
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

//progress updates as video plays
video.addEventListener('timeupdate', handleProgress);

//clicking/dragging mouse over progress bar will jump to different sections of video
let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => (mousedown = true));
progressBar.addEventListener('mouseup', () => (mousedown = false));