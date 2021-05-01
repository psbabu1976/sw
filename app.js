//import express from 'express';
const express = require('express');
const webpush = require('web-push');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/client'));

app.get("/", (req, res) => {
    res.send("Hi");
})
const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys);
//webpush.setGCMAPIKey('suman');
webpush.setVapidDetails(
    'mailto:psbabu1976@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
const body = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dOx2qRwOJ0E:APA91bE3GFk50Fwhje6RzGfpCd3BXy1k8NbMY60GV5dZ9niDBaElheSBczVAmYfAkSwzIZ8xGWgou875ze2AIHcE5F1av_bT-Ibs59CerbXzy0SNHLum9NphQaMLp1OjM1OvoUzSjZ8G",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEq6Uz992wXYi5mup-adfzPsBAnY2uffI1turCzg73IWuO25Eh1_ktZyAhhdSR3BxhYWJWCwqJBBJz9SExMXnRs",
        "auth": "GK4B2qaiMgE9MhO3kILIwQ"
    }
}
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
webpush.sendNotification(body, payload);
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