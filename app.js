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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cVkpM78Jnic:APA91bEvB3_EpdgDv3c4wGfSsafxqVlExGgmnplKnCg9i-RsPgAt1OV8zW055mVQCURRhKk2c8gaXXgfQvFXzEXxLKI-5rUTx7TEmQIns1D3HeWryz5SItcqh5FdAa5XWdXuSVnQ4MD4",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEkc2az2MaxNl6SpE0gV9zcXfh1mc1M0dGWCWcp96s2ux7YGCKBJjW27MluT7gWcx954agrvNdtTzU_5IT2rFWU",
        "auth": "o5-8FefwMyfJ1pQVR7X4Vg"
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