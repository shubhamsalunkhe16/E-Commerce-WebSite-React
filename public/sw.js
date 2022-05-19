const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
const assets = [
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  'index.html',
  '/',
  '/products',
  '/blog',
  '/test',
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
  console.log('service worker installed');
  self.skipWaiting();
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', (evt) => {
  console.log('service worker activated');
  //testtt
  // sessionStorage.clear();

  // localStorage.clear();

  // caches.keys().then((keys) => {
  //   keys.forEach((key) => caches.delete(key));
  // });

  // indexedDB.databases().then((dbs) => {
  //   dbs.forEach((db) => indexedDB.deleteDatabase(db.name));
  // });

  // document.cookie = document.cookie.split(';').reduce((newCookie1, keyVal) => {
  //   var pair = keyVal.trim().split('=');
  //   if (pair[0]) {
  //     if (pair[0] !== 'path' && pair[0] !== 'expires') {
  //       newCookie1 += pair[0] + '=;';
  //     }
  //   }
  //   return newCookie1;
  // }, 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path:/;');
  //test

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
// self.addEventListener('fetch', (evt) => {
//   if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
//     evt.respondWith(
//       caches
//         .match(evt.request)
//         .then((cacheRes) => {
//           return (
//             cacheRes ||
//             fetch(evt.request).then((fetchRes) => {
//               return caches.open(dynamicCacheName).then((cache) => {
//                 cache.put(evt.request.url, fetchRes.clone());
//                 // check cached items size
//                 limitCacheSize(dynamicCacheName, 15);
//                 return fetchRes;
//               });
//             })
//           );
//         })
//         .catch(() => {
//           if (evt.request.url.indexOf('.html') > -1) {
//             return caches.match('/pages/fallback.html');
//           }
//         })
//     );
//   }
// });

self.addEventListener('fetch', (event) => {
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
