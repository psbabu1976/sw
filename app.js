//import express from 'express';
const express = require('express');
const webpush = require('web-push');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/client'));

app.get("/", (req, res) => {
    res.send("Hi");
})
let vapidKeys = {
    publicKey: 'BJuxdzueLrrEIdtmmbFN6x5VA0qTvhzr10rgqgpVrcLzZ6cDnO1deUDkj-ptvJ0k8-4r7UvN6mWgK0dJBDP7b80',
    privateKey: '9oSwDKpcs2zx0xq0Q0DgKdoQRX3FEMfl0AiX2xVPSsA'
}
//vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys);
//webpush.setGCMAPIKey('suman');
webpush.setVapidDetails(
    'mailto:psbabu1976@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
const body = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dBGnDCUFpYw:APA91bGjslo0wIz0YxpXHsbwPSmwmK-a9xQ9QPZkXzQopKj3LWtHrJ6Lt0GiKuCabJ1tUYvvkB64jCb5-vBWimSamBcUa9QWcpKauIjCi0GuJaBqBbhgAmcVq2Jhx_4ozZEz_aGHmNqc",
    "expirationTime": null,
    "keys": {
        "p256dh": "BOS9lOxRtE0ciHk2r7UJBZv2evG5JezCn8gJ2vjlULn1NH9jCxss6lTgbRobsFKFBQA2yqOrB56np1BHPcmVdWA",
        "auth": "yZSkgvcuhOl7V6RaDKyLNg"
    }
}
// headers:{
//     method:'post',
//     'content-type': 'application/json'
// }

const payload = JSON.stringify({
    msg: 'Hi how are you??'
});
app.post("/subscribe", (req, res) => {
    const payload = JSON.stringify({
        msg: 'Hi how are you??'
    });
    console.log(req.body)

    webpush.sendNotification(body, payload);
    //res.send(req.body)

})
webpush.sendNotification(body, 'tada')
    .catch(err => console.log(err))
// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//     endpoint: 'https://....',
//     keys: {
//       p256dh: parseInt('suman', 16),
//       auth: '.....'
//     }
// };

//webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
app.listen(3000, () => console.log('Listening on 3000...'));