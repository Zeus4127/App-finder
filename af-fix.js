/* App Finder phone fix (19 Nov 2026). Added at upload time by the old laptop.
   On My apps, Ask and All apps the stats cards move below the page's own content,
   so each page starts with its plain line and then its own detail. Top picks is unchanged. */
(function () {
  var MOVE = { mine: 1, ask: 1, items: 1 };
  var home = null;                       // where the cards normally sit
  function place() {
    var strip = document.getElementById('strip'), main = document.getElementById('main');
    if (!strip || !main) return;
    if (!home) home = strip.nextSibling;
    var page = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0];
    var other = !!MOVE[page];
    document.documentElement.setAttribute('data-afpage', other ? 'other' : 'top');
    if (other) main.parentNode.insertBefore(strip, main.nextSibling);
    else main.parentNode.insertBefore(strip, home);
  }
  window.addEventListener('hashchange', place);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();
})();
