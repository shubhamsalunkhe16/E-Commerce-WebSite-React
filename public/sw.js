// console.log('SW working');

// const addResourcesToCache = async (resources) => {
//   const cache = await caches.open('v1');
//   await cache.addAll(resources);
// };

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     addResourcesToCache([
//       '/static/js/bundle.js',
//       '/static/js/0.chunk.js',
//       '/static/js/main.chunk.js',
//       'index.html',
//       '/',
//       '/manifest.json',
//       '/static/media/bannerImage2.7f11a80c.png',
//       '/static/media/bannerImage3.75a7e2a0.jpg',
//       'https://fakestoreapi.com/products',
//     ])
//   );
// });

// this.addEventListener('fetch', (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.match(event.request).then((result) => {
//         if (result) {
//           return result;
//         }
//       })
//     );
//   }
// });

const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
const assets = [
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  'index.html',
  '/',
  '/Products',
  '/Blog',
];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', (evt) => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch events
self.addEventListener('fetch', (evt) => {
  if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
    evt.respondWith(
      caches
        .match(evt.request)
        .then((cacheRes) => {
          return (
            cacheRes ||
            fetch(evt.request).then((fetchRes) => {
              return caches.open(dynamicCacheName).then((cache) => {
                cache.put(evt.request.url, fetchRes.clone());
                // check cached items size
                limitCacheSize(dynamicCacheName, 15);
                return fetchRes;
              });
            })
          );
        })
        .catch(() => {
          if (evt.request.url.indexOf('.html') > -1) {
            return caches.match('/pages/fallback.html');
          }
        })
    );
  }
});
