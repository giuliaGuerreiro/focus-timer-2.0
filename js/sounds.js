import {
  forestSoundInput,
  rainSoundInput,
  coffeShopSoundInput,
  fireplaceSoundInput
} from "./elements.js"

export default function Sounds() {

  const rainSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/rain.wav");
  const forestSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/forest.wav");
  const coffeeShopSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/coffee-shop.wav");
  const fireplaceSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/fireplace.wav");
  const alarmSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/alarm.mp3")
  const buttonSound = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/button.wav")
  const soundButton = new Audio("https://github.com/giuliaGuerreiro/focus-timer-2.0/raw/main/audio/soundButton.wav")


  function pressRainButton() {
    rainSound.play();
    rainSound.loop = true;
    rainSound.volume = rainSoundInput.value;
  }

  function pressForestButton() {
    forestSound.play();
    forestSound.loop = true;
    forestSound.volume = forestSoundInput.value;
  }

  function pressCoffeShopButton() {
    coffeeShopSound.play();
    coffeeShopSound.loop = true;
    coffeeShopSound.volume = coffeShopSoundInput.value;
  }

  function pressFireplaceButton() {
    fireplaceSound.play();
    fireplaceSound.loop = true;
    fireplaceSound.volume = fireplaceSoundInput.value;
  }

  function pauseSounds() {
    rainSound.pause();
    forestSound.pause();
    coffeeShopSound.pause();
    fireplaceSound.pause();

  }

  function pressButton() {
    buttonSound.play();
  }

  function timeEnd() {
    alarmSound.play();
  }

  function pressSound() {
    soundButton.play();
  }

  return {
    pressRainButton,
    pressForestButton,
    pressCoffeShopButton,
    pressFireplaceButton,
    pauseSounds,
    timeEnd, 
    pressButton,
    pressSound
  }
}