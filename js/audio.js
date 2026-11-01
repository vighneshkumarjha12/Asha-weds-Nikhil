/**
 * Royal Indian Wedding Music Player (Vivah Geet Continuous Loop Engine)
 * Automatically plays the sacred Vivah Geet audio on page load.
 * Gracefully handles browser autoplay policies with robust gesture unlock.
 */

class WeddingAudioPlayer {
  constructor() {
    this.audioElement = null;
    this.isPlaying = false;
    this.targetVolume = 0.75;
    this.fadeInterval = null;
    this.gestureBound = false;
    this.promptElement = null;

    this.onUserGesture = this.onUserGesture.bind(this);

    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.init());
      } else {
        this.init();
      }
    }
  }

  init() {
    if (this.audioElement) return;

    this.audioElement = document.getElementById('wedding-bg-music');
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.id = 'wedding-bg-music';
      this.audioElement.src = 'assets/vivah_geet.mp3';
      this.audioElement.loop = true;
      document.body.appendChild(this.audioElement);
    }

    this.audioElement.loop = true;
    this.audioElement.preload = 'auto';

    // Synchronize play state with visual equalizer bars in UI
    this.audioElement.addEventListener('play', () => {
      this.isPlaying = true;
      this.hidePrompt();
      if (typeof window.updateMusicButtonUI === 'function') {
        window.updateMusicButtonUI(true);
      }
    });

    this.audioElement.addEventListener('pause', () => {
      this.isPlaying = false;
      if (typeof window.updateMusicButtonUI === 'function') {
        window.updateMusicButtonUI(false);
      }
    });

    // Enforce smooth continuous loop when playback reaches end
    this.audioElement.addEventListener('ended', () => {
      this.audioElement.currentTime = 0;
      this.audioElement.play().catch(() => {});
    });

    // Attempt playback immediately upon page load
    this.start();
  }

  start() {
    if (!this.audioElement) this.init();
    if (!this.audioElement) return false;

    this.audioElement.muted = false;
    this.audioElement.volume = this.targetVolume;

    const playPromise = this.audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.removeGestureListeners();
          this.hidePrompt();
          if (typeof window.updateMusicButtonUI === 'function') {
            window.updateMusicButtonUI(true);
          }
        })
        .catch((err) => {
          // Autoplay restricted by browser policy; wait for first user activation
          this.isPlaying = false;
          if (typeof window.updateMusicButtonUI === 'function') {
            window.updateMusicButtonUI(false);
          }
          this.setupGestureUnlock();
          this.showPrompt();
        });
    }

    return true;
  }

  onUserGesture(e) {
    if (!this.audioElement) return;
    this.audioElement.muted = false;
    this.audioElement.volume = this.targetVolume;

    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.removeGestureListeners();
          this.hidePrompt();
          if (typeof window.updateMusicButtonUI === 'function') {
            window.updateMusicButtonUI(true);
          }
        })
        .catch(() => {
          // If this gesture was not accepted, keep listeners active for next gesture
        });
    }
  }

  setupGestureUnlock() {
    if (this.gestureBound) return;
    this.gestureBound = true;

    const validGestures = ['pointerdown', 'click', 'touchstart', 'touchend', 'keydown'];
    validGestures.forEach(evt => {
      window.addEventListener(evt, this.onUserGesture, { capture: true, passive: true });
      document.addEventListener(evt, this.onUserGesture, { capture: true, passive: true });
    });
  }

  removeGestureListeners() {
    if (!this.gestureBound) return;
    const validGestures = ['pointerdown', 'click', 'touchstart', 'touchend', 'keydown'];
    validGestures.forEach(evt => {
      window.removeEventListener(evt, this.onUserGesture, { capture: true });
      document.removeEventListener(evt, this.onUserGesture, { capture: true });
    });
    this.gestureBound = false;
  }

  showPrompt() {
    if (this.promptElement) {
      this.promptElement.classList.remove('hidden');
      return;
    }
    const prompt = document.createElement('div');
    prompt.className = 'music-autoplay-prompt';
    prompt.innerHTML = `
      <span style="font-size: 1.15rem;">🪔</span>
      <span>मांगलिक धुन चालू करने के लिए कहीं भी स्पर्श करें 🎵</span>
      <span style="font-size: 0.8rem; opacity: 0.8;">(Tap for Music)</span>
    `;
    prompt.addEventListener('click', (e) => {
      e.stopPropagation();
      this.onUserGesture();
    });
    document.body.appendChild(prompt);
    this.promptElement = prompt;
  }

  hidePrompt() {
    if (this.promptElement) {
      this.promptElement.classList.add('hidden');
      setTimeout(() => {
        if (this.promptElement && this.promptElement.parentNode) {
          this.promptElement.parentNode.removeChild(this.promptElement);
          this.promptElement = null;
        }
      }, 450);
    }
  }

  stop() {
    if (!this.audioElement) return false;
    this.fadeOut(() => {
      if (this.audioElement) {
        this.audioElement.pause();
      }
      this.isPlaying = false;
      if (typeof window.updateMusicButtonUI === 'function') {
        window.updateMusicButtonUI(false);
      }
    });
    return false;
  }

  toggle() {
    if (!this.audioElement) this.init();
    if (!this.audioElement) return false;

    if (this.audioElement.paused || !this.isPlaying) {
      this.start();
      return true;
    } else {
      this.stop();
      return false;
    }
  }

  fadeIn() {
    if (!this.audioElement) return;
    clearInterval(this.fadeInterval);
    this.audioElement.volume = 0.2;
    let vol = 0.2;
    this.fadeInterval = setInterval(() => {
      vol += 0.08;
      if (vol >= this.targetVolume) {
        if (this.audioElement) this.audioElement.volume = this.targetVolume;
        clearInterval(this.fadeInterval);
      } else {
        if (this.audioElement) this.audioElement.volume = vol;
      }
    }, 40);
  }

  fadeOut(callback) {
    if (!this.audioElement) {
      if (callback) callback();
      return;
    }
    clearInterval(this.fadeInterval);
    let vol = this.audioElement.volume;
    this.fadeInterval = setInterval(() => {
      vol -= 0.12;
      if (vol <= 0.05) {
        if (this.audioElement) this.audioElement.volume = 0;
        clearInterval(this.fadeInterval);
        if (callback) callback();
      } else {
        if (this.audioElement) this.audioElement.volume = vol;
      }
    }, 30);
  }
}

// Global instance
window.weddingAudio = new WeddingAudioPlayer();
