<template>
<div>
    <h3>Let´s create your tournament </h3 >

    <div>
    <v-tabs
      class="tabs"
      centered
      grow
      height="60px"
      v-model="activeTab"
    >
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <router-view></router-view>
</div>
  <v-form v-model="valid" @submit.prevent="saveTournament">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedGame"      
            label="SelectedGame"
            name="selected-game"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="tournamentName"
            label="TournamentName"
            name="tournament-name"
            required
          ></v-text-field>
        </v-col>

       
          <v-col cols="12" sm="6" md="4">
     
         <v-row justify="center">
    <v-date-picker v-model="date"></v-date-picker>
  </v-row>
      {{date}}
      </v-menu>
        </v-col>
  <v-row justify="center">
    <v-time-picker v-model="time"></v-time-picker>
    <p>{{time}}</p>
  </v-row>
      </v-row>
      <v-col>
         
      </v-col>
      <v-col>
        <v-btn :disabled="!formIsValid" type="submit" >create tournament</v-btn>
      </v-col>
    </v-container>
  </v-form>
 <div>
  <progress value="0" max="100" id="uploader"></progress>
  <input accept="image/*" type="file" value="upload" @change="fileBtn(file, $event)">
</div>
      

      
     
</div> 
</template>

<script>
import Firebase from 'firebase';
import firebase from "firebase";
    import { CometChat } from "@cometchat-pro/chat";

    export default {
      components:{
      },
      data () {
        return {
           activeTab: `/user/${this.id}`,
      tabs: [
        { id: 1, name: "Task", route: `/user/${this.id}` },
        { id: 2, name: "Project", route: `/user/${this.id}/project` }
      ],
          picker:'',
          selectedGame:'',
          platform: null,
          tournamentName: null,
          player1:"",
          player2:"",
          player3:"",
          player4:"",
          image:"",
          entryStake: null,
           valid: false,
           date: '',
           time: '',
      menu: false,
      modal: false,
      menu2: false,
         playerCommTag:'',
         fguid:''
      
      
      }
      },
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
      },
      computed: {
        formIsValid (){
          return this.SelectedGame !== '' && this.tournamentName !== ''

        },

       

      
      },
 
    methods: {

      
           saveTournament() {
          
          const fguid = this.generateUUID()
          firebase
          .firestore()
          .collection('tournaments')
          .add({
            playerCommTag: this.playerCommTag,
            tournamentName: this.tournamentName,
            selectedGame: this.selectedGame,
      //      platform: this.platform,
     //       entryStake: this.entryStake,
            date: this.date,
            time: this.time,
           player1: this.player1,
     player2: this.player2,
         player3: this.player3,
         player4: this.player4,
         image:this.image,

            fguid: fguid
          })
            .then(docRef => {
              console.log('Document written with ID: ', docRef.id)
         //     this.$router.push(`/${fguid}`)
         var GUID = fguid ;
var groupName = "Hello Group!";
var groupType = CometChat.GROUP_TYPE.PUBLIC;
var password = "";

var group = new CometChat.Group(GUID, groupName, groupType, password);

CometChat.createGroup(group).then(
	group => {
		console.log("Group created successfully:", group);
	},
	error => {
		console.log("Group creation failed with exception:", error);
	}
);
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
        },
        generateUUID () {
          let d = new Date().getTime()
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          })
          return uuid
        },

        fileBtn:function(file, e){
        e.preventDefault();
        
      const uploader = document.getElementById('uploader');
      //get file
      let getFile = e.target.files[0];
      //set storage ref
        
      let storageRef = Firebase.storage().ref('test/'+getFile.name);
      //upload file
      firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
        // Add a new document with a generated id.
firebase.firestore().collection("tournaments").add({
    name: getFile.name,
    id:this.tournamentName
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


      let task = storageRef.put(getFile);
      task.on('state_changed',
       function progress(snapshot){
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
        uploader.value = percentage;
      },
      function error(err){
        console.log(err);
      },
      function complete(){
         console.log(getFile.name);
         this.image = getFile.name;
         console.log(this.image)
      }
      );
    }
  }
}
      
      

    
</script>

<style scoped>
  section {
    height: 100vh;
  }
  h1 {
    font-size: 30px;
    margin: 30px 0;
  }
  .input {
    height: 40px;
  }
</style>