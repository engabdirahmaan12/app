// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on link click (mobile)
  navMenu.addEventListener('click', (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove('open');
      navToggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Scroll to top button
const scrollTopButton = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (!scrollTopButton) return;
  const show = window.scrollY > 400;
  scrollTopButton.classList.toggle('show', show);
});

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Contact form (demo only)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    alert(`Mahadsanid ${name}! Fariintaada waan helnay, waan kula soo xiriiri doonaa.`);
    contactForm.reset();
  });
}