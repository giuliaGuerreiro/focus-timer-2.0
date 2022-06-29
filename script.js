const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
const buttonRain = document.querySelector('.rain-sound');
const buttonForest = document.querySelector('.forest-sound');
const buttonCoffeeShop = document.querySelector('.coffee-shop-sound');
const buttonFireplace = document.querySelector('.fireplace-sound');

function resetSoundButton() {
  buttonRain.classList.remove('active');
  buttonForest.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');
  buttonFireplace.classList.remove('active');
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('clicked');
  resetSoundButton();
  buttonForest.classList.add('active');
})

buttonStop.addEventListener('click', function() {
  resetSoundButton();
  buttonPlay.classList.remove('clicked');
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