// Tapngage site interactions
document.documentElement.classList.add('js');

(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header shadow on scroll
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal-on-scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form: compose an email in the visitor's mail app.
  // Replace this block if you connect the form to a server endpoint.
  var form = document.getElementById('contact-form');
  if (form && form.getAttribute('action').indexOf('mailto:') === 0) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var to = form.getAttribute('action').replace('mailto:', '');
      var subject = encodeURIComponent('[Tapngage] ' + d.get('topic') + ' from ' + d.get('name'));
      var body = encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + '\n' + d.get('email'));
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
      form.querySelector('.form-note').textContent = 'Opening your email app...';
    });
  }
})();
