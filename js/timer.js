import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

export default function Timer({
controls,
sounds
}) {

  let timeOutID;
  let minutes = Number(minutesDisplay.textContent);

  function countdown() {
    buttonPlay.classList.add('clicked');
    
    timeOutID = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if(minutes <= 0 && seconds <= 0) {
        resetTimerDisplay();
        controls.resetSoundButton();
        buttonPlay.classList.remove('clicked');
        sounds.timeEnd();
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

  function resetTimerDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(0).padStart(2, "0");
    buttonPlay.classList.remove('clicked');
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