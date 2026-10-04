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
    var det = s.detection || {};
    var n = function (v) { return Math.round(v).toLocaleString('en-CA'); };
    // Every figure is built through num()/str(), which return undefined when the
    // payload does not carry that key. An older or newer analyzer build then
    // leaves the hardcoded fallback in place instead of printing NaN -- or
    // throwing, which is what an earlier version did when the analyzer renamed
    // a summary field and took the rest of this script down with it.
    var num = function (v, f) {
      return (typeof v === 'number' && isFinite(v)) ? f(v) : undefined;
    };
    var figures = {
      spend_m:        num(s.spend, function (v) { return 'CAD ' + (v / 1e6).toFixed(1) + 'M'; }),
      spend_cad:      num(s.spend, function (v) { return 'CAD ' + (v / 1e6).toFixed(2) + 'm'; }),
      placements:     num(s.placements, n),
      delivery_rows:  num(s.delivery_rows, n),
      live_issues:    num(s.live_issues, n),
      completed:      num(s.completed_shortfalls, n),
      flagged:        num((s.live_issues + s.completed_shortfalls), n),
      flagged_pct:    num((s.live_issues + s.completed_shortfalls) / s.placements * 100,
                          function (v) { return v.toFixed(1) + '%'; }),
      billed_short:   num(s.billed_shortfall, function (v) { return 'CAD ' + n(v); }),
      preventable:    num(s.preventable_exposure, function (v) { return 'CAD ' + n(v); }),
      gross_short:    num(s.gross_shortfall, function (v) { return (v / 1e6).toFixed(1) + 'm'; }),
      masking_pct:    num(s.masking_pct, function (v) { return Math.round(v) + '%'; }),
      behind:         num(s.placements_behind, n),
      detect_days:    num(det.median_detection_delay_days, function (v) { return v.toFixed(1); }),
      recon_days:     num(det.median_reconciliation_delay_days, function (v) { return v.toFixed(0); }),
      blended_cpm:    num(s.blended_cpm, function (v) { return 'CAD ' + v.toFixed(2); }),
      as_of:          typeof s.as_of === 'string' ? s.as_of : undefined
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

  /* ---- progressive disclosure ------------------------------------------
   * Panels are authored OPEN in the markup and closed here on load, so a
   * reader with JavaScript disabled or broken gets the full content rather
   * than a button that does nothing. Nothing is ever trapped behind a script.
   */
  document.querySelectorAll('.disc').forEach(function (d) {
    var btn = d.querySelector('.disc-t');
    var panel = d.querySelector('.disc-p');
    if (!btn || !panel) return;
    var open = d.classList.contains('on');
    var openLabel = btn.dataset.open || 'Hide details';
    var shutLabel = btn.dataset.shut || 'View details';
    var chev = '<span class="chev" aria-hidden="true">\u2193</span>';

    function paint() {
      d.classList.toggle('on', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.innerHTML = (open ? openLabel : shutLabel) + ' ' + chev;
    }
    open = false;
    paint();
    btn.addEventListener('click', function () { open = !open; paint(); });
  });

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
