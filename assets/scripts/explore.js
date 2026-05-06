// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  // Load voices into dropdown
  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  // Some browsers load voices asynchronously
  speechSynthesis.onvoiceschanged = loadVoices;

  // Button click → speak text
  button.addEventListener('click', () => {
    const text = textArea.value;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Change face while speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    // Speak text
    speechSynthesis.speak(utterance);
  });
}