import Timer from "./timer.js"

import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js"

const timer = Timer({
  resetSoundButton
})

function resetSoundButton() {
  buttonRain.classList.remove('active');
  buttonForest.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');
  buttonFireplace.classList.remove('active');
}


buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('clicked');
  timer.countdown();
})

buttonStop.addEventListener('click', function() {
  timer.resetTimerDisplay();
  resetSoundButton();  
  buttonPlay.classList.remove('clicked');
  timer.hold();
})

buttonIncrease.addEventListener('click', function() {
  timer.increaseMinutes();
})

buttonDecrease.addEventListener('click', function() {
  timer.decreaseMinutes();
})

buttonForest.addEventListener('click', function() {
  resetSoundButton();
  buttonForest.classList.add('active');
})

buttonRain.addEventListener('click', function() {
  resetSoundButton();
  buttonRain.classList.add('active');
})

buttonCoffeeShop.addEventListener('click', function() {
  resetSoundButton();
  buttonCoffeeShop.classList.add('active');
})

buttonFireplace.addEventListener('click', function() {
  resetSoundButton();
  buttonFireplace.classList.add('active');
})