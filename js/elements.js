const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
const buttonRain = document.querySelector('.rain-sound');
const buttonForest = document.querySelector('.forest-sound');
const buttonCoffeeShop = document.querySelector('.coffee-shop-sound');
const buttonFireplace = document.querySelector('.fireplace-sound');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const lightModeButton = document.querySelector('.light-mode-button');
const darkModeButton = document.querySelector('.dark-mode-button');
const bodyElement = document.querySelector('body');
const forestSoundInput = document.querySelector('#forest-volume');
const rainSoundInput = document.querySelector('#rain-volume');
const coffeShopSoundInput = document.querySelector('#coffee-shop-volume');
const fireplaceSoundInput = document.querySelector('#fireplace-volume');

export {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,
  minutesDisplay,
  secondsDisplay,
  lightModeButton,
  darkModeButton,
  bodyElement,
  forestSoundInput,
  rainSoundInput,
  coffeShopSoundInput,
  fireplaceSoundInput
}