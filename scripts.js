// ===== MAIN PAGE FUNCTIONALITY =====

// 🔥 Name control (change here only)
const NAME = "Riya";

// Replace function (auto replace everywhere)
function replaceName(text) {
  return text.replace(/riya/g, riya);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
  
  setTimeout(() => {
    const video = document.querySelector('.bg-video');
    if (video && video.paused) {
      video.play().catch(() => {});
    }
  }, 500);
});

// Initialize all page functionality
function initializePage() {
  setupVideo();
  setupLoadingScreen();
  setupAnimations();
  setupMobileOptimizations();
  setupAccessibility();
  setupPerformanceOptimizations();
}

// ===== VIDEO HANDLING =====
function setupVideo() {
  const video = document.querySelector('.bg-video');
  if (!video) return;

  video.volume = 0.5;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;

  video.addEventListener('loadeddata', function() {
    video.play().then(() => {
      setTimeout(() => {
        video.muted = false;
        video.volume = 0.5;
      }, 100);
      hideLoadingScreen();
    }).catch(() => {});
  });

  video.addEventListener('error', handleVideoError);
  setupMobileVideoPlayback(video);
}

// ===== MOBILE VIDEO =====
function setupMobileVideoPlayback(video) {
  setupSoundControl(video);

  const tryPlayVideo = () => {
    if (video.paused) {
      video.muted = true;
      video.play().then(() => {
        setTimeout(() => {
          video.muted = false;
          video.volume = 0.5;
        }, 200);
      }).catch(() => {});
    }
  };

  tryPlayVideo();

  document.addEventListener('click', tryPlayVideo, { once: true });
  setTimeout(tryPlayVideo, 1000);
}

// ===== SOUND CONTROL =====
function setupSoundControl(video) {
  const soundBtn = document.getElementById('soundBtn');
  if (!soundBtn) return;

  soundBtn.innerHTML = '🔇';

  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundBtn.innerHTML = video.muted ? '🔇' : '🔊';
  });
}

function handleVideoError() {
  const videoTrack = document.querySelector('.video-track');
  if (videoTrack) {
    videoTrack.style.background =
      'linear-gradient(135deg, #ff4f9e, #ff9bc9, #ffd6ec)';
  }
  hideLoadingScreen();
}

// ===== LOADING =====
function setupLoadingScreen() {
  setTimeout(hideLoadingScreen, 1500);
}

function hideLoadingScreen() {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 500);
  }
}

// ===== ANIMATIONS =====
function setupAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.chip, .title, .accent').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });
}

// ===== MOBILE =====
function setupMobileOptimizations() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) event.preventDefault();
    lastTouchEnd = now;
  });
}

// ===== ACCESSIBILITY =====
function setupAccessibility() {
  const skip = document.createElement('a');
  skip.href = '#content';
  skip.textContent = 'Skip to content';
  skip.style.cssText = 'position:absolute;top:-40px;';
  document.body.prepend(skip);
}

// ===== PERFORMANCE =====
function setupPerformanceOptimizations() {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// ===== SPECIAL TEXT FIX =====
const specialMessage = replaceName(
  "WAIT riya, something special is coming for you… stay tuned! 🌹\nYou are more beautiful than the stars..."
);

// ===== CHAT FIX EXAMPLE =====
function replyFor(raw) {
  let response = "Hi riya 💖 You are amazing!";
  return replaceName(response);
}