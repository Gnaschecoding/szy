// Audio Player Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggleButton = document.getElementById('musicToggleButton');

// Initialize audio
backgroundMusic.volume = 0.3; // Set volume to 30% for subtle background music

// Autoplay on page load
window.addEventListener('load', () => {
  backgroundMusic.play().catch((error) => {
    console.log('Autoplay prevented:', error);
    // If autoplay is blocked, try playing muted and wait for user interaction
    backgroundMusic.muted = true;
    backgroundMusic.play().catch(() => {
      // Still blocked, wait for user click
    });
  });
});

// Toggle music play/pause
musicToggleButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggleButton.classList.remove('muted', 'paused');
  } else {
    backgroundMusic.pause();
    musicToggleButton.classList.add('muted', 'paused');
  }
});

// Update button state when music ends (if not looping)
backgroundMusic.addEventListener('ended', () => {
  musicToggleButton.classList.add('muted', 'paused');
});