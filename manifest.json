const CACHE_NAME = 'vibras-erp-v1';

// No listamos archivos aquí para evitar errores de carga inicial
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Obliga al SW nuevo a activarse
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Toma el control de la página de inmediato
});

self.addEventListener('fetch', (event) => {
    // Estrategia: Ir a la red, y si falla, buscar en caché
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
