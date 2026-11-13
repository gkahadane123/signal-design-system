/* Signal docs shell: loads docs/nav.json and one HTML fragment per article (docs/<key>.html). */
(function () {
  var REPO = 'https://github.com/gkahadane123/signal-design-system/blob/main/';
  var side = document.getElementById('side'), doc = document.getElementById('doc'), menu = document.getElementById('menu'), toast = document.getElementById('toast');
  var NAV = [], cache = {}, current = null, spy = null;

  // links from earlier versions of the site keep working
  var LEGACY = { overview: 'introduction', 'brand-voice': 'voice-and-content', 'brand-claims': 'voice-and-content', 'brand-logo': 'logo-and-imagery', 'brand-photography': 'logo-and-imagery',
    'spacing-scale': 'layout', 'radius-borders': 'layout', 'grid-line': 'layout', 'motion-pulse': 'motion' };
  function legacy(k) {
    if (LEGACY[k]) return LEGACY[k];
    if (/^colors-/.test(k)) return 'color';
    if (/^type-/.test(k)) return 'typography';
    if (/^gradients-/.test(k)) return 'gradients';
    if (/^icons-/.test(k)) return 'iconography';
    if (/^components-/.test(k)) return 'c-' + k.slice(11);
    return k;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function parse() { var h = (location.hash || '#introduction').slice(1).split('/'); return { key: legacy(h[0] || 'introduction'), sec: h[1] || '' }; }
  function find(k) { for (var i = 0; i < NAV.length; i++) if (NAV[i].key === k) return i; return -1; }

  function buildSide() {
    var groups = [], h = '<label class="sfilter"><span class="sr">Filter pages</span><input id="sf" type="search" placeholder="Filter pages" autocomplete="off"></label><div id="slist">';
    NAV.forEach(function (n) { if (groups.indexOf(n.group) < 0) groups.push(n.group); });
    groups.forEach(function (g) {
      h += '<section data-g="' + esc(g) + '"><h4>' + esc(g) + '</h4>';
      NAV.filter(function (n) { return n.group === g; }).forEach(function (n) { h += '<a href="#' + n.key + '" data-k="' + n.key + '">' + esc(n.title) + '</a>'; });
      h += '</section>';
    });
    side.innerHTML = h + '</div>';
    document.getElementById('sf').addEventListener('input', function (e) {
      var q = e.target.value.trim().toLowerCase();
      [].forEach.call(side.querySelectorAll('section'), function (s) {
        var any = false;
        [].forEach.call(s.querySelectorAll('a'), function (a) { var m = !q || a.textContent.toLowerCase().indexOf(q) >= 0 || s.getAttribute('data-g').toLowerCase().indexOf(q) >= 0; a.style.display = m ? '' : 'none'; if (m) any = true; });
        s.style.display = any ? '' : 'none';
      });
    });
  }

  function load(key) {
    if (cache[key]) return Promise.resolve(cache[key]);
    return fetch('docs/' + key + '.html').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) { cache[key] = t; return t; });
  }

  function render(key, sec) {
    var i = find(key);
    if (i < 0) { key = 'introduction'; i = 0; }
    var n = NAV[i];
    load(key).then(function (body) {
      var prev = NAV[i - 1], next = NAV[i + 1];
      doc.innerHTML =
        '<section class="banner"><div><p class="crumb">' + esc(n.group) + '</p><h1>' + esc(n.title) + '</h1><p>' + esc(n.lede) + '</p></div>' +
        '<div class="art ' + esc(n.cover) + '" aria-hidden="true"><span>' + esc(n.group) + '</span></div></section>' +
        '<div class="doc-wrap"><article class="prose" id="article">' + body +
        '<div class="pn">' + (prev ? '<a href="#' + prev.key + '"><small>Previous</small><b>' + esc(prev.title) + '</b></a>' : '<span></span>') +
        (next ? '<a href="#' + next.key + '" class="r"><small>Next</small><b>' + esc(next.title) + '</b></a>' : '<span></span>') + '</div>' +
        '<p class="edit"><a href="' + REPO + 'docs/' + key + '.html" target="_blank" rel="noopener">Edit this page on GitHub ↗</a></p></article>' +
        '<nav class="toc" aria-label="On this page"></nav></div>';
      document.title = n.title + ' · Signal';
      [].forEach.call(side.querySelectorAll('a[data-k]'), function (a) { if (a.getAttribute('data-k') === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
      side.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
      buildToc(key); iconBrowser(); fitFrames();
      current = key;
      if (sec) goto(sec); else window.scrollTo(0, 0);
    }).catch(function () { doc.innerHTML = '<div class="doc-wrap"><article class="prose"><h2>Page not found</h2><p><a href="#introduction">Back to the introduction</a></p></article></div>'; });
  }

  function goto(id) {
    var el = document.getElementById(id);
    if (el) { var y = el.getBoundingClientRect().top + window.scrollY - 88; window.scrollTo({ top: y, behavior: 'smooth' }); }
  }

  function buildToc(key) {
    var toc = doc.querySelector('.toc'), hs = [].slice.call(doc.querySelectorAll('.prose h2[id]'));
    if (spy) { spy.disconnect(); spy = null; }
    if (!hs.length) { toc.style.display = 'none'; return; }
    toc.innerHTML = '<h5>On this page</h5>' + hs.map(function (h) { return '<a href="#' + key + '/' + h.id + '" data-id="' + h.id + '">' + esc(h.textContent) + '</a>'; }).join('');
    toc.addEventListener('click', function (e) { var a = e.target.closest('a'); if (!a) return; e.preventDefault(); history.replaceState(null, '', a.getAttribute('href')); goto(a.getAttribute('data-id')); });
    if ('IntersectionObserver' in window) {
      spy = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { [].forEach.call(toc.querySelectorAll('a'), function (a) { a.classList.toggle('on', a.getAttribute('data-id') === en.target.id); }); } });
      }, { rootMargin: '-90px 0px -65% 0px' });
      hs.forEach(function (h) { spy.observe(h); });
    }
  }

  // size each specimen frame to its content (same-origin); React specimens render late, so retry briefly
  function fitFrames() {
    [].forEach.call(doc.querySelectorAll('.stage iframe'), function (f) {
      function fit() {
        try {
          var d = f.contentDocument; if (!d || !d.body) return;
          var h = Math.max(d.documentElement.scrollHeight, d.body.scrollHeight);
          if (h > 40 && Math.abs(h - f.clientHeight) > 2) f.style.height = h + 'px';
        } catch (e) {}
      }
      f.addEventListener('load', function () { var n = 0, t = setInterval(function () { fit(); if (++n > 16) clearInterval(t); }, 250); fit(); });
    });
  }

  function say(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove('show'); }, 1800); }

  function iconBrowser() {
    var host = doc.querySelector('[data-icons]'); if (!host) return;
    host.innerHTML = '<div class="ib-bar"><input type="search" placeholder="Search 151 icons" aria-label="Search icons" id="ibq"><div class="ib-cats" id="ibc"></div></div><p class="ib-count" id="ibn"></p><div class="ib-grid" id="ibg"></div>';
    fetch('assets/icons/index.json').then(function (r) { return r.json(); }).then(function (d) {
      var cats = ['All'].concat(Object.keys(d.categories)), cat = 'All', q = '';
      var cwrap = host.querySelector('#ibc'), grid = host.querySelector('#ibg'), count = host.querySelector('#ibn');
      cwrap.innerHTML = cats.map(function (c, i) { return '<button type="button" class="chipbtn' + (i === 0 ? ' on' : '') + '" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }).join('');
      function draw() {
        var list = d.icons.filter(function (x) { return (cat === 'All' || x.cat === cat) && (!q || (x.slug + ' ' + x.tags + ' ' + x.cat).toLowerCase().indexOf(q) >= 0); });
        count.textContent = list.length + ' of ' + d.icons.length + ' icons';
        grid.innerHTML = list.map(function (x) { return '<button type="button" class="ib-cell" data-s="' + x.slug + '" title="Copy name"><img src="assets/icons/' + x.slug + '.svg" alt="" width="48" height="48" loading="lazy"><span>' + x.slug + '</span></button>'; }).join('') || '<p class="ib-empty">No icons match.</p>';
      }
      host.querySelector('#ibq').addEventListener('input', function (e) { q = e.target.value.trim().toLowerCase(); draw(); });
      cwrap.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; cat = b.getAttribute('data-c'); [].forEach.call(cwrap.children, function (c) { c.classList.toggle('on', c === b); }); draw(); });
      grid.addEventListener('click', function (e) {
        var b = e.target.closest('.ib-cell'); if (!b) return; var s = b.getAttribute('data-s');
        (navigator.clipboard ? navigator.clipboard.writeText(s) : Promise.reject()).then(function () { say('Copied “' + s + '”'); }, function () { say(s); });
      });
      draw();
    }).catch(function () { host.querySelector('#ibn').textContent = 'The icon index could not be loaded.'; });
  }

  menu.addEventListener('click', function () { var o = side.classList.toggle('open'); menu.setAttribute('aria-expanded', o); });
  addEventListener('hashchange', function () { var p = parse(); if (p.key === current) { if (p.sec) goto(p.sec); } else render(p.key, p.sec); });
  fetch('docs/nav.json').then(function (r) { return r.json(); }).then(function (n) { NAV = n; buildSide(); var p = parse(); render(p.key, p.sec); });
})();
