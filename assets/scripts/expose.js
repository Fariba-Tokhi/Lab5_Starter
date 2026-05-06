window.addEventListener('DOMContentLoaded', init);

function init() {
  // Select elements
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  const playButton = document.querySelector('button');

  // Change horn
  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;

    hornImage.src = `assets/images/${selectedHorn}.svg`;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Change volume
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);

    // Set actual audio volume (0–1)
    audio.volume = volume / 100;

    // Change volume icon
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } 
    else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } 
    else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } 
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play sound
  playButton.addEventListener('click', () => {
    audio.play();

    // Party horn = confetti
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}