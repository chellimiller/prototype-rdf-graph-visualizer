const version="0.0.0";function cacheGetRequests(e){"GET"===e.request.method&&e.respondWith(caches.match(e.request).then((function(t){var n=fetch(e.request).then((function(t){var n=t.clone();return caches.open("0.0.0pages").then((function(t){t.put(e.request,n)})),t}),s).catch(s);return t||n;function s(){return new Response("Service is unavailable",{status:503,statusText:"Service Unavailable",headers:new Headers({"Content-Type":"text/plain"})})}})))}self.addEventListener("fetch",cacheGetRequests);