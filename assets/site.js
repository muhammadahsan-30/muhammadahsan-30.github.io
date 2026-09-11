// shared behaviour — sticky bar hairline, scroll reveal, year stamp,
// analyzer-derived figures
(function () {
  document.querySelectorAll('.yr').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- figures read from the analyzer -------------------------------------
   * Anything marked data-ooh="<key>" is sourced from window.OOH_DATA, which
   * analyzer/data.js sets. Every one of those elements also carries the
   * current correct number as its hardcoded text, so if data.js is blocked,
   * missing, or an older build, the page still shows a real figure — never a
   * blank, a zero, or a loading state. Regenerating the analyzer updates them.
   *
   * Only figures the analyzer actually produces live here. WACC, the 12,000+
   * Katalyst sites and the 292,800 trees come from other work and stay static.
   */
  var payload = window.OOH_DATA;
  if (payload && payload.summary) {
    var s = payload.summary;
    var n = function (v) { return Math.round(v).toLocaleString('en-CA'); };
    var figures = {
      spend_m:       '$' + (s.spend / 1e6).toFixed(1) + 'M',
      spend_cad:     'CAD ' + (s.spend / 1e6).toFixed(2) + 'm',
      placements:    n(s.placements),
      delivery_rows: n(s.delivery_rows),
      under_count:   n(s.under_count),
      under_pct:     s.under_pct.toFixed(1) + '%',
      value_at_risk: 'CAD ' + n(s.value_at_risk),
      blended_cpm:   'CAD ' + s.blended_cpm.toFixed(2),
      as_of:         s.as_of
    };
    document.querySelectorAll('[data-ooh]').forEach(function (el) {
      var v = figures[el.getAttribute('data-ooh')];
      // Only ever replace with a non-empty value. A key we cannot resolve
      // leaves the hardcoded fallback exactly as published.
      if (v !== undefined && v !== null && v !== '') el.textContent = v;
    });
  }

  var bar = document.getElementById('topbar');
  if (bar) {
    var onScroll = function () { bar.classList.toggle('stuck', window.scrollY > 8); };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  var targets = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  targets.forEach(function (el) { io.observe(el); });
})();
