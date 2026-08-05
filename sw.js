const CACHE_NAME = 'kontainer-v3';
const ASSETS = [
  'index.html',
  'agendamento.html',
  'manifest.json',
  'manifest-agendamento.json',
  'favicon.ico',
  'apple-touch-icon.png',
  'icons/favicon-16x16.png',
  'icons/favicon-32x32.png',
  'icons/favicon-48x48.png',
  'icons/apple-touch-icon-152x152.png',
  'icons/apple-touch-icon-167x167.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-192.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// ═══════════════════════════════════════════
//  WEB PUSH — notificações da fila (cliente) e
//  de novos agendamentos (painel do admin)
// ═══════════════════════════════════════════
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch(e) {
    data = { title: 'Kontainer do Imperador', body: event.data ? event.data.text() : '' };
  }
  const title = data.title || 'Kontainer do Imperador';
  const options = {
    body: data.body || '',
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    vibrate: [100, 50, 100],
    data: { url: data.url || '/' },
    tag: data.tag || 'kontainer-push',
    renotify: true,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || '/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes(targetUrl.replace('/', '')) && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});
