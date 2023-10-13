self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting(); // Activate the service worker immediately
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(self.clients.claim()); // Take control of all open pages
  });
  
  self.addEventListener('fetch', (event) => {
    // Cache-first strategy
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });