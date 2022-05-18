console.log('SW working');

const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/static/js/bundle.js',
      '/static/js/0.chunk.js',
      '/static/js/main.chunk.js',
      'index.html',
      '/',
      '/static/media/bannerImage2.7f11a80c.png',
      '/static/media/bannerImage3.75a7e2a0.jpg',
      'https://fakestoreapi.com/products',
      '/Products',
    ])
  );
});

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
      })
    );
  }
});

var deferredPrompt;

this.addEventListener('beforeinstallprompt', function (event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

if (deferredPrompt) {
  deferredPrompt.prompt();

  deferredPrompt.userChoice.then(function (choiceResult) {
    console.log(choiceResult.outcome);

    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled installation');
    } else {
      console.log('User added to home screen');
    }
  });

  deferredPrompt = null;
}
