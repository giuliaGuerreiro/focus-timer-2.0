
import {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from "./elements.js"


export default function Controls({ sounds }) {

  function resetSoundButton() {
    buttonRain.classList.remove('active');
    buttonForest.classList.remove('active');
    buttonCoffeeShop.classList.remove('active');
    buttonFireplace.classList.remove('active'); 

    sounds.pauseSounds();
  }

  function active(element) {
    resetSoundButton();
    element.classList.add('active');
    sounds.pressSound();
  }

  return {
    resetSoundButton,
    active
  }
}