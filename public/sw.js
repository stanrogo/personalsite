var CACHE_NAME = 'general-cache-0-0-1';

// On install, open the cache

self.addEventListener('install', function(event){
    event.waitUntil(caches.open(CACHE_NAME));
});

// On activate, we clean out any old caches that have not been white listed

self.addEventListener('activate', function(event){

    var whiteList = ['general-cache'];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
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

// We try to cache absolutely everything that is necessary

self.addEventListener("fetch", function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) {

            // We have a copy of the response in our cache, so return it
            // No network request is necessary :)

            if(response) return response;

            var fetchRequest = event.request.clone();

            // If not then we handle the response accordingly

            return fetch(fetchRequest).then(

                function (response) {

                    var shouldCache = false;

                    // console.log(response.url);

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
            )
        })
        .catch(function() {
            return fetch(event.request);
        })
    );
});