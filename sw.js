/* Service worker: aplikacja ma działać na siłowni bez zasięgu.
   Strategia: najpierw sieć (żeby po aktualizacji od razu był nowy kod),
   a gdy sieci nie ma — wersja z pamięci podręcznej. */

var CACHE = "stos-obciazen-v6";
var CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  e.respondWith(
    fetch(req).then(function (res) {
      // zapisujemy kopię także dla fontów z Google Fonts
      if (res && res.status === 200 && (res.type === "basic" || res.type === "cors")) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || caches.match("index.html");
      });
    })
  );
});
