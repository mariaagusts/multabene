// Service worker fyrir house manual-ið: geymir síðuna og myndirnar í skyndiminni
// svo hún opnist án nets eftir fyrstu heimsókn. Hækka CACHE-nafnið við stærri breytingar.
const CACHE = 'byggakur-v1';
const ASSETS = [
  '/byggakur/',
  '/byggakur/index.html',
  '/byggakur/yfirlit.jpg',
  '/byggakur/photos/Picture1.png',
  '/byggakur/photos/hottubfaucet.png',
  '/byggakur/photos/hottub1.png',
  '/byggakur/photos/hottub2.png',
  '/byggakur/photos/laundry1.png',
  '/byggakur/photos/coffee1.png',
  '/byggakur/photos/coffee2.png',
  '/byggakur/photos/coffee3.png',
  '/byggakur/photos/coffee4.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Netið fyrst (svo uppfærslur berist), skyndiminnið ef netið bregst. Letur og hlekkir út á við
// fara beint í gegn; þeir vantar bara þegar netið er ekki til staðar.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('/byggakur/index.html')))
  );
});
