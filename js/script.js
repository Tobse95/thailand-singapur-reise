// =========================================================
// Thailand & Singapur 2026 – Interaktivität
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Menü schließen, wenn ein Link angeklickt wird (mobil)
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // --- Scroll-Reveal Animation ---
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // --- Countdown bis Abflug (20.09.2026, 21:40 Uhr FRA-Zeit) ---
  const countdownNum = document.getElementById('countdown-num');
  const countdownLabel = document.getElementById('countdown-label');

  if (countdownNum && countdownLabel) {
    const departure = new Date('2026-09-20T21:40:00+02:00');
    const now = new Date();
    const diffMs = departure - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffMs <= 0) {
      countdownNum.textContent = '✈️';
      countdownLabel.textContent = 'Gute Reise!';
    } else {
      countdownNum.textContent = diffDays;
      countdownLabel.textContent = diffDays === 1 ? 'Tag bis Abflug' : 'Tage bis Abflug';
    }
  }

});
