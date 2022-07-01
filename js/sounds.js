export default function Sounds() {

  const rainSound = new Audio("../audio/rain.wav");
  const forestSound = new Audio("../audio/forest.wav");
  const coffeeShopSound = new Audio("../audio/coffee-shop.wav");
  const fireplaceSound = new Audio("../audio/fireplace.wav");
  const alarmSound = new Audio("../audio/alarm.mp3")
  const buttonSound = new Audio("../audio/button.wav")
  const soundButton = new Audio("../audio/soundButton.wav")


  function pressRainButton() {
    rainSound.play();
    rainSound.loop = true;
  }

  function pressForestButton() {
    forestSound.play();
    forestSound.loop = true;
  }

  function pressCoffeShopButton() {
    coffeeShopSound.play();
    coffeeShopSound.loop = true;
  }

  function pressFireplaceButton() {
    fireplaceSound.play();
    fireplaceSound.loop = true;
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