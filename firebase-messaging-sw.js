importScripts('https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBrZFB8yQOESUT7q2Bm2ARtI9kQ34KrEwg',
  appId: '1:843078322062:web:4986be05fb82bf12b686df',
  messagingSenderId: '843078322062',
  projectId: 'albuhairaalarabia2026',
  authDomain: 'albuhairaalarabia2026.firebaseapp.com',
  storageBucket: 'albuhairaalarabia2026.firebasestorage.app',
  measurementId: 'G-87D3N9N43R',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload?.notification?.title || 'إشعار';
  const notificationOptions = {
    body: payload?.notification?.body || '',
    icon: '/icons/Icon-192.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
