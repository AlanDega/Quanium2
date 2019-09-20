<template>
  <v-container fluid> 
    <v-row>
      <v-col cols="4">
        <Semifinals/>                  
      </v-col>
      <v-col cols="4">
        <Finals></Finals>     
      </v-col>
      <v-col cols="4">
        <Champion></Champion>  
      </v-col>
    </v-row>
    <!-- <Chat></Chat> -->
  </v-container>
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
