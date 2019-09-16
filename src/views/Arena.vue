<template>



  <div class="booker">
    <div class="chat">
        <div class="container">
          <div class="msg-header">
              <div class="active" v-if this.player1>

                  accepted your challenge 
                  he will send you a invitation to the match
                  <h2>{{user.email}}</h2>
                  <h2>{{this.user.uid}}</h2>
                  <h2>{{this.tournament.id}}</h2>
                 
                <span></span>
                <span> {{this.player2}}</span>
                <p>fguid</p><span> {{this.fguid}}</span>
              <v-container fluid> 
                <v-row>
                <v-col cols="4">
<Semifinals>
</Semifinals>

            
<!--for admin endmatch start match -->
                  

             
            </v-col>
     <!--         <v-col  >
             <div>

    
      

   <ziggeo-recorder
         :allowscreen=true
        :apiKey="'e08516fda6673a6f8bdf3ba15e69742d'"
        :width="400"
        :height="300"
        :countdown=3
        @countdown="countdownEvent"
        @camera_unresponsive="recorderCameraUnresponsive"
        @access_forbidden="recorderAccessForbidden"
        @upload_selected="recorderUploadSelected"
    ></ziggeo-recorder> 
    
                  </div> 

            </v-col>-->
           <v-col cols="4"
           >
                   <Finals></Finals>     
             </v-col>
           <v-col cols="4"
          
          
                    >
             <Champion></Champion>
             </v-col>
            </v-row>
            <!-- <Chat></Chat> -->
      </v-container>

            

<!--<button v-if="this.player1.length == 0 && this.player2.length == 0 && this.player3.length == 0 && this.player4.length == 0 " @click="joinPlayer1">join tournament1</button>
<button @click="notify1">send notification1</button>
<button v-if="this.player1.length >= 1 && this.player2.length == 0 && this.player3.length == 0 && this.player4.length == 0 " @click="joinPlayer2">join tournament2</button>
<button@click="notify2"
>send notification2</button>
<button v-if="this.player1.length >= 1 && this.player2.length >= 1 && this.player3.length == 0 && this.player4.length == 0 " @click="joinPlayer3">join tournament3</button>
<button@click="notify3"
>send notification3</button>
<button v-if="this.player1.length >= 1 && this.player2.length >= 1 && this.player3.length >= 1 && this.player4.length == 0 " @click="joinPlayer4">join tournament4</button>
<button@click="notify4"
>send notification4</button> -->



            </div>
                  <!--worker app routes to todo on accepted click 
                  // <h5>
                  if you doesnt get the invitation please send a report </h5> -->
              </div>
          </div>
  

         

                        


                            
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>
  

<script>
import Chat from "@/components/Chat.vue"
import Semifinals from "@/components/Semifinals.vue"
import Finals from "@/components/Finals.vue"
import Champion from "@/components/Champion.vue"
import firebase from "firebase";
    import { CometChat } from "@cometchat-pro/chat";
  export default {
    name: '',
    components:{
      Chat,
      Semifinals,
      Finals,
      Champion
    },
    data () {
      return {
         counter1: 0,
         counter2: 0,
         counter3: 0,
         counter4: 0,
        champion:'',
        playerCommTag:'',
        playerCommTag1:'',
        playerCommTag2:'',
        playerCommTag3:'',
        playerCommTag4:'',
        tournament:'',
        player1:'',
        player2:'',
        player3:'',
        player4:'',
                player1kills:'0',
                player2kills:'0',
                player3kills:'0',
                player4kills:'0',
        RefereeId: '',
      name:'',
      email:'',
      user:'',
      fguid:''
      }
    },
    // 
    created() {
  
        
      var messaging = firebase.messaging();
messaging.requestPermission()
    .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
    })
    .then(token => {
        console.log("FCM Token:", token);
        this.playerCommTag = token 
        //Do something with TOken like subscribe to topics
    })
    .catch(error => {
        if (error.code === "messaging/permission-blocked") {
            console.log("Please Unblock Notification Request Manually");
        } else {
            console.log("Error Occurred", error);
        }
    });
       firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
    
    //     firebase
    //     .firestore()
    //     .collection('tournaments').where('fguid', '==', this.$route.params.tournament).get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
          
    //         this.tournament = doc.data()
    //         this.tournament.id = doc.id
    //         this.fguid= doc.data().fguid
    //         this.playerCommTag1= doc.data().playerCommTag1
    //         this.playerCommTag2= doc.data().playerCommTag2
    //         this.playerCommTag3= doc.data().playerCommTag3
    //         this.playerCommTag4= doc.data().playerCommTag4
    //         this.player1= doc.data().player1
    //         this.player2= doc.data().player2
    //         this.player3= doc.data().player3
    //         this.player4= doc.data().player4
    //      this.AkoinStaked = doc.data().AkoinStaked
    //    this.success = this.$route.params.success
    //       })
        
    //     }
    
    //    )},
    // methods: {
            // playerAttached: function (data) {
            //     console.log('player attached', data)
            // },
            // playerPlaying: () => {
            //     console.log('player playing');
            // },
            // recorderCameraUnresponsive: function() {
            //     console.log('camera unresponsive');
            // },
            // recorderAccessForbidden: function () {
            //     console.log('access forbidden');
            // },
            // countdownEvent: (ms) => {
            //     console.log('countdown miscroseconds', ms);
            // },
            // recorderUploadSelected: (file) => {
            //     console.log('upload selected', file);
            // },
//     addP4point() {
//         //invoking the 'INCREMENT_COUNT' mutation
//       this.counter4++;
// firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//                      counter4: this.counter4
//         }).then(() => {
//          var docRef = firebase.firestore().collection("players").doc(this.player4);
// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//         var aknBalance = doc.data().AkoinBalance;
//         firebase
//           .firestore()
//           .collection('players')
//           .doc(doc.id)
//           .update({
          
//                      AkoinBalance: 30
//         }).then(() => {
          
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
                
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//     },
//     addP3point() {
//         //invoking the 'INCREMENT_COUNT' mutation
//       this.counter3++;
// firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//                      counter3: this.counter3
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//     },
//     addP2point() {
//         //invoking the 'INCREMENT_COUNT' mutation
//       this.counter2++;
// firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//                      counter2: this.counter2
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//     },
//     addP1point() {
//         //invoking the 'INCREMENT_COUNT' mutation
//       this.counter1++;
// firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//                      counter1: this.counter1
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//     },
    
      
//       joinPlayer1() {
//       firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
//                      player1: this.user.uid,
//                      playerCommTag1: this.playerCommTag
//         }).then(() => {
          
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//       },
//       joinPlayer2() {
      
//          firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//                      playerCommTag2: this.playerCommTag
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//       },
//       joinPlayer3() {
      
//          firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//            player3: this.user.uid,
//                       playerCommTag3: this.playerCommTag
          
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//       },
//       joinPlayer4() {
      
//          firebase
//           .firestore()
//           .collection('tournaments')
//           .doc(this.tournament.id)
//           .update({
          
//            player4: this.user.uid,
//                       playerCommTag4: this.playerCommTag
          
//         }).then(() => {
//         })
//         .catch(function (error) {
//               console.error('Error adding document: ', error)
//             })
//       },
//   notify1 () {
//     var FCM = require('fcm-push');
// var serverKey = 'AIzaSyBKNZILuDHy1iOPwXrphOD05b8BVpG2Mwk';
// var fcm = new FCM(serverKey);
// var message = {
//     to: this.playerCommTag1,
//     data: {
//         your_custom_data_key: 'your_custom_data_value'
//     },
//     notification: {
//         title: 'Title of your push notification',
//         body: 'Body of your push notification'
//     }
// };
// //callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });
// //promise style
// fcm.send(message)
//     .then(function(response){
//         console.log("Successfully sent with response: ", response);
//     })
//     .catch(function(err){
//         console.log("Something has gone wrong!");
//         console.error(err);
//     })
//   },
//   notify2 () {
//     var FCM = require('fcm-push');
// var serverKey = 'AIzaSyBKNZILuDHy1iOPwXrphOD05b8BVpG2Mwk';
// var fcm = new FCM(serverKey);
// var message = {
//     to: this.playerCommTag2, // required fill with device token or topics
//     collapse_key: 'your_collapse_key', 
//     data: {
//         your_custom_data_key: 'your_custom_data_value'
//     },
//     notification: {
//         title: 'Title of your push notification',
//         body: 'Body of your push notification'
//     }
// };
// //callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });
// //promise style
// fcm.send(message)
//     .then(function(response){
//         console.log("Successfully sent with response: ", response);
//     })
//     .catch(function(err){
//         console.log("Something has gone wrong!");
//         console.error(err);
//     })
//   },
//   notify3 () {
//     var FCM = require('fcm-push');
// var serverKey = 'AIzaSyBKNZILuDHy1iOPwXrphOD05b8BVpG2Mwk';
// var fcm = new FCM(serverKey);
// var message = {
//     to: this.playerCommTag3,
//     data: {
//         your_custom_data_key: 'your_custom_data_value'
//     },
//     notification: {
//         title: 'Title of your push notification',
//         body: 'Body of your push notification'
//     }
// };
// //callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });
// //promise style
// fcm.send(message)
//     .then(function(response){
//         console.log("Successfully sent with response: ", response);
//     })
//     .catch(function(err){
//         console.log("Something has gone wrong!");
//         console.error(err);
//     })
//   },
//   notify4 () {
//     var FCM = require('fcm-push');
// var serverKey = 'AIzaSyBKNZILuDHy1iOPwXrphOD05b8BVpG2Mwk';
// var fcm = new FCM(serverKey);
// var message = {
//     to: this.playerCommTag4,
//     data: {
//         your_custom_data_key: 'your_custom_data_value'
//     },
//     notification: {
//         title: 'Title of your push notification',
//         body: 'Body of your push notification'
//     }
// };
// //callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });
// //promise style
// fcm.send(message)
//     .then(function(response){
//         console.log("Successfully sent with response: ", response);
//     })
//     .catch(function(err){
//         console.log("Something has gone wrong!");
//         console.error(err);
//     })
  },
  endMatch (){
  // click on the avatar to select the champion 
  //on  start match scoreboard appears  
    
    },
    getWinner(){
    //uid its playerTag to update the state of their data and route the players with end match 
    }
           
      
  }
  
      
  
  
</script>

<style  scoped>
  
  body, html {
    background-color: gray;
    height: 100%;

}
