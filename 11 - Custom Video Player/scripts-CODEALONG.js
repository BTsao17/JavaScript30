//Get Elements
const player = document.querySelector('.player');
//All other elements are within 
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build functions

//Hook up Event Listeners