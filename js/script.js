import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"

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

const sounds = Sounds()

const controls = Controls({ sounds })

const timer = Timer({
  controls,
  sounds
})

// COLOCAR ALGUMA ANIMAÇÃO

buttonPlay.addEventListener('click', function() {
  timer.countdown();
  sounds.pressButton();
})

buttonStop.addEventListener('click', function() {
  timer.resetTimerDisplay();
  controls.resetSoundButton();
  timer.hold();
  sounds.pressButton();
})

buttonIncrease.addEventListener('click', function() {
  timer.increaseMinutes();
  sounds.pressButton();
})

buttonDecrease.addEventListener('click', function() {
  timer.decreaseMinutes();
  sounds.pressButton();
})

buttonForest.addEventListener('click', function() {
  controls.active(buttonForest);
  sounds.pressForestButton();
})

buttonRain.addEventListener('click', function() {
  controls.active(buttonRain);
  sounds.pressRainButton();
})

buttonCoffeeShop.addEventListener('click', function() {
  controls.active(buttonCoffeeShop);
  sounds.pressCoffeShopButton();
})

buttonFireplace.addEventListener('click', function() {
  controls.active(buttonFireplace);
  sounds.pressFireplaceButton();
})