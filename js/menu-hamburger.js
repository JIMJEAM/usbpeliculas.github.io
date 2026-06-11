/* Futurist hamburger menu — auto-injects a toggle button into every nav.menu.
   Shared across all pages; no per-page markup required. */
(function () {
  function init() {
    document.querySelectorAll('nav.menu').forEach(function (menu) {
      if (menu.querySelector('.hamburger')) return; // already initialized
      var list = menu.querySelector('.opciones');
      if (!list) return;

      var btn = document.createElement('button');
      btn.className = 'hamburger';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Abrir menú');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<span></span><span></span><span></span>';

      btn.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      });

      // Close the menu after tapping a link (mobile UX)
      list.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          menu.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          btn.setAttribute('aria-label', 'Abrir menú');
        }
      });

      menu.insertBefore(btn, list);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
