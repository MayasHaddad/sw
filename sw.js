this.addEventListener('install', (event) => {
  event.waitUntil(caches.open('v3').then((cache) => {
    console.log('hello')
    cache.addAll([
      '/',
      '/fallback.jpg'
    ])
  }))
})

this.addEventListener('fetch', (event) => {
  console.log(event)
  const { request } = event
  const requestURL = new URL(request.url)

  console.log(requestURL.hostname)

  if (requestURL.hostname === 'lorempixel.com') {
    event.respondWith(caches.match('/fallback.jpg').then((resp) => resp))
  } else {
    event.respondWith(caches.match(request).then((resp) => resp || fetch(request)))
  }
})
