var CACHE_NAME = 'general-cache-0-0-4';

// Files that we want to cache

var urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icons/favicon.ico',
    './icons/favicon-16x16.png',
    './icons/favicon-32x32.png',
    './icons/homescreen48.png',
    './icons/homescreen72.png',
    './icons/homescreen96.png',
    './icons/homescreen144.png',
    './icons/homescreen168.png',
    './icons/homescreen192.png',
    './dist/build.js',
];


// On install, we want to add all urls we want to cache, to the cache

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// On activate, we clean out any old caches that have not been white listed

self.addEventListener('activate', function(event){

    var whiteList = ['general-cache'];

    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (whiteList.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                )
            })
    );

});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {

                // We have a copy of the response in our cache, so return it
                // No network request is necessary :)

                if (response) {

                    return response;
                }

                var fetchRequest = event.request.clone();

                // If not then we handle the response accordingly

                return fetch(fetchRequest).then(

                    function (response) {

                        var shouldCache = false;

                        if (response.type === "basic" && response.status === 200) {

                            shouldCache = CACHE_NAME;
                        }

                        if (shouldCache) {

                            var responseToCache = response.clone();

                            caches.open(shouldCache)
                                .then(function (cache) {
                                    var cacheRequest = event.request.clone();
                                    cache.put(cacheRequest, responseToCache);
                                });
                        }

                        return response;
                    }
                );
            })
    );
});