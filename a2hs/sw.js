self.addEventListener('install', function(e) {
  console.log('install success')
});

// self.addEventListener('fetch', function(e) {
  // console.log(e.request.url);
  // e.respondWith(
  //   caches.match(e.request).then(function(response) {
  //     return response || fetch(e.request);
  //   })
  // );
// });
