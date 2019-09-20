<template>
  <div class="finals">
    <v-col class="champcol">
      <v-card
      max-width="400"
      class="mb-10"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{this.champion}}</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item two-line>
          <v-list-item-content>
            <v-card-actions>
              <v-row>
              </v-row>
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import firebase from "firebase";

    export default {

        data() {
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
        success: (this.$route.params.success),
      name:'',
      email:'',
      user:'',
      fguid:''
            }
        },

//         
// //     

    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
firebase
        .firestore()
        .collection('tournaments').where('fguid', '==', this.$route.params.tournament).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          
            this.tournament = doc.data()
            this.tournament.id = doc.id
            this.fguid= doc.data().fguid
            this.playerCommTag1= doc.data().playerCommTag1
            this.playerCommTag2= doc.data().playerCommTag2
            this.playerCommTag3= doc.data().playerCommTag3
            this.playerCommTag4= doc.data().playerCommTag4
            this.champion= doc.data().champion
            this.player1= doc.data().player1
            this.player2= doc.data().player2
            this.player3= doc.data().player3
            this.player4= doc.data().player4
         this.AkoinStaked = doc.data().AkoinStaked
       this.success = this.$route.params.success
          })
        
        })



    },
       
        }
    
</script>

<style lang="scss" scoped>

.finals{
    margin-top: 120px;
    }

 .winner1{
     margin-bottom: 200px;
 }   

 .champcol{
     height: 500px;
 }
</style>