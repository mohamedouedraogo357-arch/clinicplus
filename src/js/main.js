/* ============================================================
   CLINICPLUS — JavaScript principal
   Interactions légères, accessibilité et animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── FAQ Accordion ────────────────────────────────────── */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (!btn) { return; }
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) { item.classList.add('open'); }
    });
  });

  /* ── Formulaire RDV — succès simulé ──────────────────── */
  var rdvForm   = document.getElementById('rdv-form');
  var successMsg= document.getElementById('success-msg');
  if (rdvForm && successMsg) {
    rdvForm.addEventListener('submit', function (e) {
      e.preventDefault();
      rdvForm.style.display    = 'none';
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ── Formulaire Contact — succès simulé ──────────────── */
  var contactForm    = document.getElementById('contact-form');
  var contactSuccess = document.getElementById('contact-success');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display    = 'none';
      contactSuccess.style.display = 'block';
      contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ── Animation au scroll ──────────────────────────────── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  var animated = document.querySelectorAll(
    '.service-card, .doctor-card, .review-card, .info-card, .faq-item'
  );
  animated.forEach(function (el, i) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease ' + (i * 0.06) + 's, transform .5s ease ' + (i * 0.06) + 's';
    observer.observe(el);
  });

  /* ── Navbar active link ───────────────────────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.navbar__links a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});
