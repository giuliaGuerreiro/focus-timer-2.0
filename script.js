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
let minutes = Number(minutesDisplay.textContent);
let timeOutID;

function countdown() {
  timeOutID = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if(minutes <= 0 && seconds <= 0) {
      resetTimerDisplay()
      resetSoundButton();
      buttonPlay.classList.remove('clicked');
      return
    }

    if(seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    countdown();
  }, 1000)
}

function increaseMinutes() {
  
  if(minutes >= 50) {
    return
  }

  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
}

function decreaseMinutes() {

  if(minutes < 5) {
    return
  }

  minutes -= 5;

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
}

function resetSoundButton() {
  buttonRain.classList.remove('active');
  buttonForest.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');
  buttonFireplace.classList.remove('active');
}

function resetTimerDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(0).padStart(2, "0");
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('clicked');
  countdown();
})

buttonStop.addEventListener('click', function() {
  resetTimerDisplay();
  resetSoundButton();  
  buttonPlay.classList.remove('clicked');
  clearTimeout(timeOutID);
})

buttonIncrease.addEventListener('click', function() {
  increaseMinutes();
})

buttonDecrease.addEventListener('click', function() {
  decreaseMinutes();
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