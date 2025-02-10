// public/service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Here you might pre-cache resources
  });
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
  });
  self.addEventListener('fetch', (event) => {
    // Optionally intercept network requests for caching
  });
  