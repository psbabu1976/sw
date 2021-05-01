self.addEventListener("install", e=>console.log('Installed...'));
self.addEventListener('push', e=>{
   e.waitUntil(self.registration.showNotification("Hello World!!", {}))
})