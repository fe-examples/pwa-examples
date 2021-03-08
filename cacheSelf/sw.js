// sw.js
console.log('service worker 注册成功')

self.addEventListener('install', async (event) => {
    const preCache = async () => {
        const cache = await caches.open('static-v1');
        return cache.addAll([
            './',
        ]);
    };
    event.waitUntil(preCache());
})

self.addEventListener('activate', (event) => {
    console.log('service worker 激活成功')
})

self.addEventListener('fetch', event => {
    console.log('service worker 抓取请求成功: ' + event.request.url)
    event.respondWith(
        caches.match(e.request).then(function (cache) {
            return cache || fetch(e.request);
        }).catch(function (err) {
            console.log(err);
            return fetch(e.request);
        })
    );
})
