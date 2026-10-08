// Service worker fyrir Travel: geymir síðuna sjálfa og Firebase-skrifturnar í skyndiminni
// svo hún opnist án nets. Gögn ferðarinnar eru geymd í localStorage af síðunni sjálfri.
// Hækka CACHE-nafnið við stærri breytingar.
const CACHE = 'travel-v2';
const PRECACHE = [
  '/travel/',
  '/travel/index.html',
  '/travel/manifest.json',
  '/apple-touch-icon.png',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(PRECACHE.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Síðan sjálf: netið fyrst svo uppfærslur berist, skyndiminnið ef netið bregst.
// Firebase-skriftur og letur: skyndiminnið fyrst, þær breytast ekki.
// Allt annað (Firebase-gögn, Google Maps, innskráning) fer beint á netið.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = url.origin === self.location.origin && (url.pathname === '/travel' || url.pathname === '/travel/' || url.pathname.startsWith('/travel/') || url.pathname === '/apple-touch-icon.png');
  const isStatic = url.hostname === 'www.gstatic.com' && url.pathname.includes('/firebasejs/') || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (isPage){
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('/travel/'))));
  } else if (isStatic){
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); return res; })));
  }
});
