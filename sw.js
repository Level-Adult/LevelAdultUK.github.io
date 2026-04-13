// sw.js - Basic Service Worker for Level-AdultUK PWA

const CACHE_NAME = 'level-adultuk-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch from cache when offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
