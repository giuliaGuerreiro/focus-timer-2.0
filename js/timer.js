import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

export default function Timer({
resetSoundButton
}) {

  let timeOutID;
  let minutes = Number(minutesDisplay.textContent);

  function countdown() {
    timeOutID = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if(minutes <= 0 && seconds <= 0) {
        resetTimerDisplay();
        resetSoundButton();
        buttonPlay.classList.remove('clicked');
        return
      }
  
      if(seconds <= 0) {
        seconds = 2;
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

  function resetTimerDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(0).padStart(2, "0");
  }

  function hold() {
    clearTimeout(timeOutID);
  }

  return {
    countdown,
    increaseMinutes,
    decreaseMinutes,
    resetTimerDisplay,
    hold
  }
}