// Minimal service worker — just enough to make the app installable.
// It doesn't cache anything itself (the app needs live data from Firebase
// every time), it just passes requests straight through to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
