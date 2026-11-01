/**
 * Royal Indian Wedding Invitation - Interactive Core Engine
 * Couples: Asha Jha & Nikhil Kumar Jha
 */

// Bilingual Translation Dictionary
const i18nData = {
  hi: {
    navBrand: "आशा संग निखिल",
    navBlessings: "मंगलाचरण",
    navCouple: "वर-वधू",
    navMuhurat: "लग्न मुहूर्त",
    navEvents: "कार्यक्रम",
    navBlessingsWall: "शुभाशीष",
    navRsvp: "आर.एस.वी.पी",
    curtainTitle: "॥ शुभ विवाह आमंत्रण पत्र ॥",
    curtainPrompt: "शाही निमंत्रण पत्र खोलें",
    curtainSub: "स्पर्श करें एवं मांगलिक धुन का आनंद लें",
    omGanesh: "॥ श्री गणेशाय नमः ॥",
    shlokaText: "ॐ गजाननं भूतगणादि सेवितं कपित्थजम्बूफलसार भक्षितम्।\nउमासुतं शोकविनाशकारणं नमामि विघ्नेश्वर पादपङ्कजम् ॥",
    mainTitle: "॥ शुभ विवाह आमंत्रण ॥",
    brideTag: "वधू",
    groomTag: "वर",
    daughterOf: "सुपुत्री —",
    grandDaughterOf: "सुपौत्री —",
    sonOf: "सुपुत्र —",
    grandSonOf: "सुपौत्र —",
    cordialMessage: "आप सभी सपरिवार सादर आमंत्रित हैं। नवयुगल को अपना स्नेह एवं शुभाशीष प्रदान कर इस मंगलमय अवसर की शोभा बढ़ाएँ।",
    countdownTitle: "शुभ लग्न मुहूर्त उल्टी गिनती",
    daysLabel: "दिन",
    hoursLabel: "घंटे",
    minsLabel: "मिनट",
    secsLabel: "सेकंड",
    eventsTitle: "मांगलिक कार्यक्रम",
    eventsSub: "Auspicious Wedding Ceremonies",
    shagunTitle: "शगुन समारोह",
    shagunDate: "२२ नवम्बर २०२६ (रविवार)",
    shagunTimeTitle: "शुभ समय :",
    shagunTimeVal: "दोपहर १२:०० बजे से",
    shagunVenueTitle: "स्थान :",
    shagunVenueVal: "ग्राम एवं डाकघर — नवादा, बहेरा, दरभंगा, बिहार — ८४७२०१",
    haldiTitle: "हल्दी एवं मेहंदी कार्यक्रम",
    haldiDate: "२३ नवम्बर २०२६ (सोमवार)",
    haldiTimeTitle: "शुभ समय :",
    haldiTimeVal: "हल्दी: प्रातः १०:०० बजे | मेहंदी: सायं ०५:०० बजे",
    haldiVenueTitle: "स्थान :",
    haldiVenueVal: "दक्षिणवारी टोला, हनुमान मंदिर के निकट, एन.एच. २२७, श्रीखंडी भिट्ठा, सुरसंड, जिला सीतामढ़ी, बिहार — ८४३३३१",
    vivahTitle: "शुभ विवाह समारोह",
    vivahDate: "२५ नवम्बर २०२६ (बुधवार)",
    vivahTimeTitle: "शुभ मुहूर्त :",
    vivahTimeVal: "बारात आगमन: सायं ०७:०० बजे | जयमाला: रात्रि ०८:३० बजे | शुभ लग्न: रात्रि ११:१५ बजे",
    vivahVenueTitle: "स्थान :",
    vivahVenueVal: "दक्षिणवारी टोला, हनुमान मंदिर के निकट, एन.एच. २२७, श्रीखंडी भिट्ठा, सुरसंड, जिला सीतामढ़ी, बिहार — ८४३३३१",
    btnAddToCal: "कैलेंडर में जोड़ें",
    btnMaps: "गूगल मैप्स दिशा-निर्देश",
    closingMessage: "आपकी गरिमामयी उपस्थिति एवं शुभाशीष हमारे लिए अमूल्य होंगे।",
    closingFamily: "सादर — समस्त झा परिवार",
    blessingWallTitle: "शुभाशीष एवं मंगलकामनाएं",
    blessingWallSub: "नवदंपति के लिए अपने पवित्र शुभाशीष प्रेषित करें",
    btnOriginalScroll: "मूल पत्रिका देखें",
    btnShareWhatsApp: "व्हाट्सएप पर शेयर करें",
    btnPushpaShower: "पुष्प वर्षा करें 🌸",
    scrollPrompt: "शाही निमंत्रण पत्र खोलने के लिए नीचे स्क्रॉल करें ↓",
    scrollSubPrompt: "Scroll down to unroll the royal invitation"
  },
  en: {
    navBrand: "Asha & Nikhil",
    navBlessings: "Invocation",
    navCouple: "The Couple",
    navMuhurat: "Auspicious Muhurat",
    navEvents: "Itinerary",
    navBlessingsWall: "Blessings",
    navRsvp: "RSVP",
    curtainTitle: "|| Royal Wedding Invitation ||",
    curtainPrompt: "Unroll Royal Invitation",
    curtainSub: "Tap to unroll & immerse in celebratory music",
    omGanesh: "|| Shree Ganeshay Namah ||",
    shlokaText: "O Lord Ganesha, attended by celestials, savorer of sacred fruits,\nSon of Goddess Uma, destroyer of all sorrows, I bow at your lotus feet.",
    mainTitle: "|| Wedding Invitation ||",
    brideTag: "The Bride",
    groomTag: "The Groom",
    daughterOf: "Daughter of —",
    grandDaughterOf: "Granddaughter of —",
    sonOf: "Son of —",
    grandSonOf: "Grandson of —",
    cordialMessage: "You and your family are cordially invited to grace this auspicious union with your warm presence, blessings, and affection for the newlyweds.",
    countdownTitle: "Countdown to the Auspicious Muhurat",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minsLabel: "Minutes",
    secsLabel: "Seconds",
    eventsTitle: "Ceremonial Itinerary",
    eventsSub: "Celebrating Auspicious Traditions",
    shagunTitle: "Shagun Ceremony",
    shagunDate: "22 November 2026 (Sunday)",
    shagunTimeTitle: "Timing :",
    shagunTimeVal: "From 12:00 PM onwards",
    shagunVenueTitle: "Venue :",
    shagunVenueVal: "Village & Post — Nawada, Bahera, Darbhanga, Bihar — 847201",
    haldiTitle: "Haldi & Mehndi Ceremony",
    haldiDate: "23 November 2026 (Monday)",
    haldiTimeTitle: "Timing :",
    haldiTimeVal: "Haldi: 10:00 AM | Mehndi: 05:00 PM onwards",
    haldiVenueTitle: "Venue :",
    haldiVenueVal: "Dakshinwari Tola, Near Hanuman Mandir, NH 227, Srikhandi Bhittha, Sursand, Sitamarhi, Bihar — 843331",
    vivahTitle: "The Grand Wedding Ceremony",
    vivahDate: "25 November 2026 (Wednesday)",
    vivahTimeTitle: "Auspicious Muhurat :",
    vivahTimeVal: "Baraat Arrival: 07:00 PM | Jaimala: 08:30 PM | Sacred Phere: 11:15 PM",
    vivahVenueTitle: "Venue :",
    vivahVenueVal: "Dakshinwari Tola, Near Hanuman Mandir, NH 227, Srikhandi Bhittha, Sursand, Sitamarhi, Bihar — 843331",
    btnAddToCal: "Add to Calendar",
    btnMaps: "View on Google Maps",
    closingMessage: "Your gracious presence and heartfelt blessings will be the greatest gift to our family.",
    closingFamily: "Warm Regards — The Entire Jha Family",
    blessingWallTitle: "Guest Blessings & Wishes",
    blessingWallSub: "Send your warm prayers and blessings to Asha & Nikhil",
    btnOriginalScroll: "View Original Patrika",
    btnShareWhatsApp: "Share on WhatsApp",
    btnPushpaShower: "Shower Flowers 🌸",
    scrollPrompt: "Scroll Down to Unroll the Royal Invitation ↓",
    scrollSubPrompt: "Experience the grand proclamation of Asha & Nikhil"
  }
};

let currentLang = 'hi';

// Sample Blessings Database
const defaultBlessings = [
  {
    author: "श्री विनय कांत झा एवं परिवार",
    badge: "🪔",
    text: "आशा और निखिल को वैवाहिक जीवन की अनंत शुभकामनाएं। भगवान गणेश और माता जानकी का आशीर्वाद आप दोनों पर सदैव बना रहे।"
  },
  {
    author: "रमेश झा (मामा जी)",
    badge: "🌸",
    text: "सदा मुस्कुराते रहो और जीवन के हर मोड़ पर एक-दूजे का संबल बनो। बहुत-बहुत प्यार और शुभाशीष!"
  },
  {
    author: "डॉ. अनिमेष एवं श्वेता",
    badge: "🥥",
    text: "बधाई हो आशा और निखिल! आपका यह नया सफर प्रेम, सामंजस्य और असीम खुशियों से भरा हो।"
  },
  {
    author: "समस्त मिथिला बंधु",
    badge: "📿",
    text: "सिया-राम जैसी जोड़ी बने, मिथिला की पावन संस्कृति और झा परिवार की परंपरा को नमन। सादर मंगलकामनाएं!"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  if (window.weddingAudio) {
    window.weddingAudio.start();
  }
  initScrollUnroll();
  initMusicControl();
  initLanguageToggle();
  initCountdown();
  initBlessingsWall();
  initModals();
  initScrollAnimations();
});

/* ==========================================================================
   1. On-Scroll Unrolling Message Board
   ========================================================================== */
function initScrollUnroll() {
  const stage = document.getElementById('scroll-stage');
  const seal = document.getElementById('rolled-wax-seal');
  const prompt = document.getElementById('scroll-unroll-prompt');
  let audioStarted = false;
  let isUnrolling = false;

  function startCelebration() {
    if (!audioStarted) {
      audioStarted = true;
      if (window.weddingAudio) {
        window.weddingAudio.start();
        updateMusicButtonUI(true);
      }
      if (window.particleCanvas) {
        window.particleCanvas.triggerFlowerShower(20);
      }
    }
  }

  function setUnrollProgress(progress) {
    if (!stage) return;
    const clamped = Math.min(1, Math.max(0, progress));
    stage.style.setProperty('--unroll-progress', clamped);

    if (clamped >= 0.90) {
      stage.classList.add('unrolled');
    } else {
      stage.classList.remove('unrolled');
    }
  }

  // Smoothly animated unroll sequence
  function animateToFullUnroll(targetScroll = 0) {
    if (!stage) return;
    if (stage.classList.contains('unrolled')) {
      if (targetScroll > 0) {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
      return;
    }

    startCelebration();
    if (isUnrolling) return;
    isUnrolling = true;

    let start = null;
    const currentProg = parseFloat(stage.style.getPropertyValue('--unroll-progress')) || 0;
    const duration = 650; // ms

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      const prog = currentProg + (1 - currentProg) * ease;
      setUnrollProgress(prog);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setUnrollProgress(1);
        stage.classList.add('unrolled');
        isUnrolling = false;
        if (targetScroll > 0) {
          setTimeout(() => {
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
          }, 60);
        }
      }
    }
    requestAnimationFrame(step);
  }

  // 1. Native Window Scroll handler
  function updateUnrollProgress() {
    if (isUnrolling) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = 320;
    const progress = Math.min(1, Math.max(0, scrollY / threshold));

    setUnrollProgress(progress);

    if (scrollY > 20) {
      startCelebration();
    }
  }

  window.addEventListener('scroll', updateUnrollProgress, { passive: true });
  updateUnrollProgress();

  // 2. Mouse Wheel Handler - Unrolls instantly on wheel down
  window.addEventListener('wheel', (e) => {
    if (!stage || stage.classList.contains('unrolled')) return;
    if (e.deltaY > 0) {
      // User is scrolling down
      startCelebration();
      const currentProg = parseFloat(stage.style.getPropertyValue('--unroll-progress')) || 0;
      const nextProg = currentProg + Math.max(0.22, Math.abs(e.deltaY) * 0.0035);
      if (nextProg >= 0.85) {
        animateToFullUnroll();
      } else {
        setUnrollProgress(nextProg);
      }
    }
  }, { passive: true });

  // 3. Touch Gestures (Mobile Swipe)
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!stage || stage.classList.contains('unrolled')) return;
    if (e.touches && e.touches.length > 0) {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (deltaY > 15) {
        // Swiping up to scroll down
        animateToFullUnroll();
      }
    }
  }, { passive: true });

  // 4. Keyboard Navigation (Down, PageDown, Space)
  window.addEventListener('keydown', (e) => {
    if (!stage || stage.classList.contains('unrolled')) return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      animateToFullUnroll();
    }
  });

  // 5. Click or tap on wax seal, prompt, or scroll to unroll
  const triggerUnroll = () => animateToFullUnroll();
  if (seal) seal.addEventListener('click', triggerUnroll);
  if (prompt) prompt.addEventListener('click', triggerUnroll);
  if (stage) {
    stage.addEventListener('click', (e) => {
      if (!stage.classList.contains('unrolled')) {
        triggerUnroll();
      }
    });
  }

  // 6. Navigation links should instantly unroll and scroll to target section
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          if (stage && !stage.classList.contains('unrolled')) {
            setUnrollProgress(1);
            stage.classList.add('unrolled');
            startCelebration();
          }
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    });
  });

  window.unrollRoyalScroll = animateToFullUnroll;
}

/* ==========================================================================
   2. Music Controls
   ========================================================================== */
function initMusicControl() {
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    if (window.weddingAudio) {
      const isPlaying = window.weddingAudio.toggle();
      updateMusicButtonUI(isPlaying);
    }
  });
}

function updateMusicButtonUI(isPlaying) {
  const musicBtn = document.getElementById('music-toggle-btn');
  if (!musicBtn) return;
  if (isPlaying) {
    musicBtn.classList.add('playing');
    musicBtn.setAttribute('title', 'संगीत रोकें / Pause Music');
  } else {
    musicBtn.classList.remove('playing');
    musicBtn.setAttribute('title', 'विवाह गीत चलाएं / Play Vivah Geet');
  }
}
window.updateMusicButtonUI = updateMusicButtonUI;

/* ==========================================================================
   3. Language Switcher
   ========================================================================== */
function initLanguageToggle() {
  const toggleBtn = document.getElementById('lang-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    toggleBtn.textContent = currentLang === 'hi' ? 'EN' : 'हिन्दी';
    applyTranslations(currentLang);
  });
}

function applyTranslations(lang) {
  const dict = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Toggle English translation of Shloka
  const shlokaTrans = document.getElementById('shloka-translation-box');
  if (shlokaTrans) {
    shlokaTrans.style.display = lang === 'en' ? 'block' : 'none';
  }
}

/* ==========================================================================
   4. Countdown Timer to November 25, 2026 19:00 (Sitamarhi Baraat)
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date('2026-11-25T19:00:00+05:30').getTime();

  function updateClock() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('count-days');
    const hoursEl = document.getElementById('count-hours');
    const minsEl = document.getElementById('count-mins');
    const secsEl = document.getElementById('count-secs');

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minsEl) minsEl.textContent = minutes.toString().padStart(2, '0');
    if (secsEl) secsEl.textContent = seconds.toString().padStart(2, '0');
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   5. Blessings Wall & Guestbook
   ========================================================================== */
function initBlessingsWall() {
  const container = document.getElementById('blessings-list');
  const form = document.getElementById('blessing-form');
  const tokenBtns = document.querySelectorAll('.shagun-token-btn');
  let selectedToken = '🌸';

  // Load from LocalStorage or default
  let stored = localStorage.getItem('asha_nikhil_blessings');
  let blessings = stored ? JSON.parse(stored) : defaultBlessings;

  function renderBlessings() {
    if (!container) return;
    container.innerHTML = '';
    blessings.slice().reverse().forEach(b => {
      const card = document.createElement('div');
      card.className = 'blessing-card';
      card.innerHTML = `
        <div class="blessing-card-header">
          <span class="blessing-author">${escapeHtml(b.author)}</span>
          <span class="blessing-badge">${b.badge || '🌸'}</span>
        </div>
        <p class="blessing-text">"${escapeHtml(b.text)}"</p>
      `;
      container.appendChild(card);
    });
  }

  tokenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tokenBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedToken = btn.getAttribute('data-badge') || '🌸';
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const authorInput = document.getElementById('blessing-author-input');
      const textInput = document.getElementById('blessing-text-input');

      const author = authorInput.value.trim();
      const text = textInput.value.trim();

      if (!author || !text) return;

      const newBlessing = { author, text, badge: selectedToken };
      blessings.push(newBlessing);
      localStorage.setItem('asha_nikhil_blessings', JSON.stringify(blessings));

      renderBlessings();
      authorInput.value = '';
      textInput.value = '';

      if (window.particleCanvas) {
        window.particleCanvas.triggerFlowerShower(20);
      }

      alert('शुभाशीष प्रेषित करने हेतु हार्दिक धन्यवाद! आपका आशीर्वाद नवदंपति तक पहुंच गया है।');
    });
  }

  renderBlessings();

  // Shower flowers button
  const showerBtn = document.getElementById('btn-shower-flowers');
  if (showerBtn) {
    showerBtn.addEventListener('click', () => {
      if (window.particleCanvas) {
        window.particleCanvas.triggerFlowerShower(20);
      }
    });
  }
}

/* ==========================================================================
   6. Modals (Original Patrika & RSVP)
   ========================================================================== */
function initModals() {
  // Original Scroll Modal
  const openScrollBtn = document.getElementById('btn-view-scroll');
  const scrollModal = document.getElementById('modal-original-scroll');

  // RSVP Modal
  const openRsvpBtn = document.getElementById('btn-open-rsvp');
  const rsvpModal = document.getElementById('modal-rsvp');

  // Close triggers
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(closer => {
    closer.addEventListener('click', (e) => {
      if (e.target === closer) {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      }
    });
  });

  if (openScrollBtn && scrollModal) {
    openScrollBtn.addEventListener('click', () => {
      scrollModal.classList.add('active');
    });
  }

  if (openRsvpBtn && rsvpModal) {
    openRsvpBtn.addEventListener('click', () => {
      rsvpModal.classList.add('active');
    });
  }

  // RSVP Form Submit
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value;
      const count = document.getElementById('rsvp-guests').value;

      if (window.particleCanvas) {
        window.particleCanvas.triggerFlowerShower(20);
      }

      alert(`सादर धन्यवाद ${name} जी! आपकी ${count} सदस्यों की उपस्थिति दर्ज कर ली गई है। हम आपके स्वागत हेतु अत्यंत उत्सुक हैं।`);
      if (rsvpModal) rsvpModal.classList.remove('active');
      rsvpForm.reset();
    });
  }
}

/* ==========================================================================
   7. Calendar & Maps & WhatsApp Share Utilities
   ========================================================================== */
// Add to Google Calendar helper
window.addToGoogleCalendar = function(eventKey) {
  let title = "";
  let details = "";
  let location = "";
  let startDate = "";
  let endDate = "";

  if (eventKey === 'shagun') {
    title = "Shagun Samaroh - Asha & Nikhil Wedding";
    details = "Shagun Ceremony of Chi. Sau. Ayu. Asha Jha & Chi. Nikhil Kumar Jha. Village & Post - Nawada, Bahera, Darbhanga, Bihar.";
    location = "Nawada, Bahera, Darbhanga, Bihar 847201";
    startDate = "20261122T063000Z"; // 12:00 PM IST
    endDate = "20261122T123000Z";
  } else if (eventKey === 'haldi') {
    title = "Haldi & Mehndi Ceremony - Asha & Nikhil Wedding";
    details = "Haldi & Mehndi Celebration of Asha & Nikhil. Sitamarhi, Bihar.";
    location = "Dakshinwari Tola, Hanuman Mandir, NH 227, Srikhandi Bhittha, Sursand, Sitamarhi, Bihar 843331";
    startDate = "20261123T043000Z"; // 10:00 AM IST
    endDate = "20261123T153000Z";
  } else if (eventKey === 'vivah') {
    title = "Shubh Vivah Samaroh - Asha Jha weds Nikhil Kumar Jha";
    details = "The Grand Wedding Ceremony of Chi. Sau. Ayu. Asha Jha with Chi. Nikhil Kumar Jha. Jha Parivar invites you with family.";
    location = "Dakshinwari Tola, Near Hanuman Mandir, NH 227, Srikhandi Bhittha, Sursand, Sitamarhi, Bihar 843331";
    startDate = "20261125T133000Z"; // 7:00 PM IST
    endDate = "20261126T003000Z";
  }

  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
  window.open(calUrl, '_blank');
};

// WhatsApp Sharing helper
window.shareOnWhatsApp = function() {
  const text = `✨ *॥ शुभ विवाह आमंत्रण ॥* ✨\n\nपरम आदरणीय,\nभगवान श्री गणेश एवं जानकी जी की असीम कृपा से हमारे परिवार के:\n\n👰 *चि. सौ. आयु. आशा झा*\nसुपुत्री — श्री विनय कुमार झा एवं स्वर्गीय श्रीमती ललिता विनय झा\n\nसंग\n\n🤵 *चि. निखिल कुमार झा*\nसुपुत्र — श्री शंकर झा एवं श्रीमती सुनयना देवी\n\nका शुभ विवाह संस्कार दिनांक *२५ नवम्बर २०२६* को सीतामढ़ी (बिहार) में संपन्न होने जा रहा है।\n\nआप सभी सपरिवार सादर आमंत्रित हैं। डिजिटल निमंत्रण पत्र यहाँ देखें:\n${window.location.href}\n\nसादर — *समस्त झा परिवार*`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

/* ==========================================================================
   8. Scroll Animations (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.person-card, .event-card, .countdown-section, .cordial-invitation-box, .blessings-wall-section').forEach(el => {
    observer.observe(el);
  });
}

// Utility: HTML Escaping
function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
