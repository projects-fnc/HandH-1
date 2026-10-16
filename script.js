(() => {
  const root = document.documentElement;
  const body = document.body;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress span');
  const loader = document.querySelector('#preloader');
  const year = document.querySelector('#year');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    document.addEventListener('click', (event) => {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
  }

  // Brief branded preloader with a hard timeout so it cannot trap visitors.
  if (loader) {
    let closed = false;
    const closeLoader = () => {
      if (closed) return;
      closed = true;
      loader.classList.add('is-leaving');
      window.setTimeout(() => { loader.hidden = true; body.classList.add('intro-complete'); }, reduceMotion ? 0 : 650);
    };
    const minimumIntro = new Promise((resolve) => window.setTimeout(resolve, reduceMotion ? 0 : 1250));
    const loaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });
    Promise.race([Promise.all([minimumIntro, loaded]), new Promise((resolve) => window.setTimeout(resolve, 2600))]).then(closeLoader);
  }

  let scrollQueued = false;
  const updateScrollUI = () => {
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const percentage = Math.min(100, Math.max(0, ((window.scrollY || root.scrollTop) / maxScroll) * 100));
    if (progress) progress.style.width = `${percentage}%`;
    if (header) header.classList.toggle('is-scrolled', (window.scrollY || root.scrollTop) > 18);
    scrollQueued = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollQueued) { scrollQueued = true; window.requestAnimationFrame(updateScrollUI); }
  }, { passive: true });
  window.addEventListener('resize', updateScrollUI, { passive: true });
  updateScrollUI();

  const revealMap = [
    ['#about .section-kicker','from-left'], ['#about .intro-copy','rise'], ['#about .intro-image-stack','clip'],
    ['#services-overview .section-heading','rise'], ['#services-overview .offering-card','tilt-up'],
    ['#ayurveda .split-heading > div','from-left'], ['#ayurveda .split-heading > p','from-right'], ['#ayurveda .treatment-photo','clip'], ['#ayurveda .treatment-list','from-right'],
    ['#pain-joint-care .focused-copy','from-left'], ['#pain-joint-care .focused-item','rise'],
    ['#packages .section-heading','scale'], ['#packages .package-card','tilt-up'],
    ['#cosmetology .cosmetology-intro > div:first-child','from-left'], ['#cosmetology .cosmetology-intro-right','clip'], ['#cosmetology .combo-card','tilt-up'], ['#cosmetology .catalog-group','rise'], ['#cosmetology .spa-prices','scale'],
    ['.brand-promise .promise-inner','rise'], ['#contact .contact-heading','scale'], ['#contact .contact-sanctuary','from-left'], ['#contact .appointment-panel','from-right']
  ];
  revealMap.forEach(([selector,effect]) => {
    document.querySelectorAll(selector).forEach((element,index) => {
      element.dataset.reveal = effect;
      element.classList.add('reveal-item');
      if (element.matches('.offering-card,.focused-item,.package-card,.combo-card,.catalog-group')) element.style.setProperty('--reveal-delay', `${Math.min(index,5)*85}ms`);
    });
  });

  const footer = document.querySelector('.site-footer');
  if ('IntersectionObserver' in window && !reduceMotion) {
    body.classList.add('reveal-enabled');
    const revealObserver = new IntersectionObserver((entries,observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .14, rootMargin: '0px 0px -42px 0px' });
    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));
    if (footer) {
      const footerObserver = new IntersectionObserver((entries,observer) => {
        if (entries.some((entry) => entry.isIntersecting)) { footer.classList.add('is-curtain-open'); observer.disconnect(); }
      }, { threshold: .16 });
      footerObserver.observe(footer);
    }
  } else {
    document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
    if (footer) footer.classList.add('is-curtain-open');
  }

  // Optional static-site mailto handoff. Leave blank until the clinic confirms its email.
  const appointmentRecipient = '';
  const form = document.querySelector('#appointment-form');
  const status = document.querySelector('#appointment-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      if (!appointmentRecipient.trim()) {
        status.textContent = 'Your form is working as a preview, but no request was sent. Add the clinic’s verified email address in script.js to enable email enquiries.';
        status.classList.add('is-warning');
        return;
      }
      const subject = encodeURIComponent(`Appointment enquiry — ${values.name || 'Website visitor'}`);
      const emailBody = [
        `Name: ${values.name || ''}`, `Phone: ${values.phone || ''}`,
        `Email: ${values.email || 'Not provided'}`, `Preferred date: ${values.date || 'Not specified'}`,
        `Service/package: ${values.service || ''}`, '', 'Request / notes:', values.message || 'None provided'
      ].join('\n');
      window.location.href = `mailto:${appointmentRecipient}?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
      status.textContent = 'Your email app should open with the enquiry prepared. Send it from your email app to complete the request.';
      status.classList.remove('is-warning');
    });
  }
})();
