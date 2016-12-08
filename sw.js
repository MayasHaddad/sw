this.addEventListener('install', (event) => {
  event.waitUntil(caches.open('v4').then((cache) => {
    cache.addAll([
      '/sw/',
      '/sw/fallback.jpg'
    ])
  }))
})

this.addEventListener('fetch', (event) => {
  console.log(event)
  const { request } = event
  const requestURL = new URL(request.url)

  if (requestURL.hostname === 'lorempixel.com') {
    event.respondWith(caches.match('/sw/fallback.jpg').then((resp) => resp))
  } else {
    event.respondWith(caches.match(request).then((resp) => resp || fetch(request)))
  }
})
