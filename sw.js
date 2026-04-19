const CACHE_NAME = 'tiendaerp-v2';
const assets = [
  'https://haroldco45.github.io/tiendaERP/',
  'https://haroldco45.github.io/tiendaERP/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
