<template>
  <div>
    <h1> Create your tournament</h1>
      <v-card class="required-data">
        <v-card-title>
          <h2>Required Fields</h2>
        </v-card-title>
        <v-form v-model="valid" @submit.prevent="saveTournament">
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
              <!-- </v-col>
              <v-col
                cols="12"
                md="4"
              > -->
              <v-text-field
              v-model="Prize"      
              label="Prize"
              name="prize"
              required
              ></v-text-field>
              <!-- </v-col>
              <v-col
                cols="12"
                md="4"
              > -->
              <v-text-field
              v-model="tournamentName"
              label="TournamentName"
              name="tournament-name"
              required
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="6" md="4">
              <v-time-picker
              v-if="menu2"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
                //removed menu
            </v-col>
            <div class="flex-grow-1"></div>
              <v-col cols="11" sm="5">
                <v-dialog
                  ref="dialog"
                  v-model="modal2"
                  :return-value.sync="time"
                  persistent
                  full-width
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="time"
                      label="Picker in dialog"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal2"
                    v-model="time"
                    full-width
                  >
                    <div class="flex-grow-1"></div>
                    <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                full-width
                width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Picker in dialog"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                </v-date-picker>
              </v-dialog>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>
<v-card>
    <v-card-title>
        <h2>Optional Fields</h2>
    </v-card-title>
    <v-textarea
      name="input-7-1"
      filled
      label="Rules"
      auto-grow
      value=""
    ></v-textarea>
     <v-img :src="this.picture" class="imagePreview">
     </v-img>
  <input accept="image/*" type="file" value="upload" @change="fileBtn(file, $event)">
</v-card>
<v-col>
  <v-btn :disabled="!formIsValid" type="submit" >create tournament</v-btn>
</v-col>
  </v-container>
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
           time: null,
        menu2: false,
        modal2: false,
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
         fguid:'',
         picture:''
      
      
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
        
      let storageRef = Firebase.storage().ref('tournaments/'+getFile.name);
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
 .required-data{
     width: 30em;
     height: 30em;
 }

 .imagePreview{
     height: 30em;
     width: 50em;
     border: solid black 0.5px;
 }
</style>