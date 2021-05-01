self.addEventListener("install", e=>console.log('Installed...'));
self.addEventListener('push', e=>{
   self.ServiceWorkerRegistration.showNotification(e.data.msg, {})
})