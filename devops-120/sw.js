const cacheName = 'career-academy-v1';
const core = ['./', './index.html', './curriculum.js', './foundations.js', './scenarios.js',
  './command-labs.js', './academy.js', './modules.js', './manifest.webmanifest', '../icons/icon-192.png', '../icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(core.map(asset =>
    new Request(new URL(asset, self.registration.scope), { cache: 'reload' })
  ))));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith('career-academy-') && key !== cacheName)
    .map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !core.some(asset =>
    new URL(asset, self.registration.scope).href === event.request.url)) return;
  event.respondWith(caches.open(cacheName).then(async cache => {
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      return (await cache.match(event.request)) || Response.error();
    }
  }));
});
