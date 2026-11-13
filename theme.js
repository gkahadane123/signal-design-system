/* Signal site theme: light (default) or dark, remembered per browser, follows the OS until the user chooses.
   Sets data-theme on <html> (the token files already define [data-theme="dark"]).
   Specimen iframes are deliberately left alone: they depict the system on Paper and several hard-code Ink text. */
(function () {
  var KEY = 'signal-theme', root = document.documentElement, mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function current() { var s = stored(); return s === 'dark' || s === 'light' ? s : (mq && mq.matches ? 'dark' : 'light'); }
  function apply(t) {
    root.setAttribute('data-theme', t);
    [].forEach.call(document.querySelectorAll('[data-theme-toggle]'), function (b) {
      b.setAttribute('aria-pressed', t === 'dark');
      b.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      b.title = t === 'dark' ? 'Light theme' : 'Dark theme';
    });
  }
  apply(current());
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-theme-toggle]'); if (!b) return;
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; save(t); apply(t);
  });
  document.addEventListener('DOMContentLoaded', function () { apply(root.getAttribute('data-theme')); });
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (!stored()) apply(current()); });
})();
