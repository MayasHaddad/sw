(async () => {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', {scope: '/sw/'})
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    } catch (e) {
      // registration failed
      console.log('Registration failed with ' + error);
    }
  }
})()
