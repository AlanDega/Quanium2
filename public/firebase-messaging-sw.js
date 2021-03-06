importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase.js");

var config = {

    messagingSenderId: "app_sender_id"
  };

firebase.initializeApp(config);

const messaging = firebase.messaging();
 
 //background
messaging.setBackgroundMessageHandler(function(payload) {
	console.log(' Received background message ', payload);
  
  // Customize notification here
  var notificationTitle ="notificationTitle";
  var notificationOptions = {
        body: payload.data.alert,
        icon: ''
  };
    
return self.registration.showNotification(notificationTitle,notificationOptions);
});

// [END background_handler]
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  //handle click event onClick on Web Push Notification
});