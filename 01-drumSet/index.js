window.onload = () => {
  function playSound(event) {
    // es6 const declarations and stringtemplates
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if a key doesn't have a sound mapped, don't do anything
    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; // allows rapid-fire retriggering
    audio.play();
  }

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');

  window.addEventListener('keydown', playSound)
  // arrow function- same as anonymous callback function
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}
