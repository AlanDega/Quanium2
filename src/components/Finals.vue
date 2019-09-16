<template>
<div class="finals">
    <v-col
     >
 
             <v-card
    max-width="400"
    class="winner1
    "
    @click="FinalWinner1"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.winnerSemis1}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                 <v-card-actions>
                   <v-row>
      <!--       <v-btn  @click="notify3">send notification3</v-btn>-->
<!-- <v-btn @click="addP3point">Add points</v-btn>
{{counter3}}-->
            <v-btn 
      >winner1</v-btn>
               </v-row>
            </v-card-actions>
            </v-card>

             <v-card
    max-width="400"
    class="mb-10"
    @click="FinalWinner2"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.winnerSemis2}}</v-list-item-title>
        <v-list-item-subtitle>{{}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                       <v-list-item two-line>
      <v-list-item-content>
                 <v-card-actions>
                     <v-row>
           <!--  <v-btn  @click="notify4">send notification4</v-btn>
                                       <v-btn @click="addP4point">Add points</v-btn>
{{counter4}}-->
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
        computedBalance:'',
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
        winnerSemis1:'',
        winnerSemis2:'',
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
      fguid:'',
      totalAkoinStaked:''
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
            this.player1= doc.data().player1
            this.player2= doc.data().player2
            this.player3= doc.data().player3
            this.player4= doc.data().player4
            this.winnerSemis1= doc.data().winnerSemis1
            this.winnerSemis2= doc.data().winnerSemis2
         this.prize1 = doc.data().prize1
       this.success = this.$route.params.success
          })
        
        })

        }
        

    ,
        methods: {
         FinalWinner1(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               champion: this.winnerSemis1,

        }).then(() => {
            //operation 
             firebase
        .firestore()
        .collection('players').where('id', '==', this.winnerSemis1).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.tournament = doc.data()
            this.tournament.id = doc.id
            this.fguid= doc.data().fguid
            this.playerCommTag1= doc.data().playerCommTag1
            this.playerCommTag2= doc.data().playerCommTag2
            this.playerCommTag3= doc.data().playerCommTag3
            this.playerCommTag4= doc.data().playerCommTag4
            this.id= doc.data().id
            this.player1= doc.data().player1
            this.player2= doc.data().player2
            this.player3= doc.data().player3
            this.player4= doc.data().player4
            this.qxp= doc.data().qxp
            this.winnerSemis2= doc.data().winnerSemis2
       this.success = this.$route.params.success

var totalPrize = this.prize1
var actualBalance = this.qxpBalance
var newBalance = totalPrize + actualBalance
this.computedBalance= newBalance
       console.log(totalPrize)
       console.log(actualBalance)
       console.log(this.computedBalance)
       console.log(this.winnerSemis1)
        
          


          })
           firebase
           .firestore()
          .collection('players')
          .doc(this.winnerSemis1)
          .update({
                                 qxp: this.computedBalance,

        }).then(() => {
         
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
          })
          })

          
                               

        

        
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })

        },
         FinalWinner2(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                                 champion: this.winnerSemis2,

        }).then(() => {
          console.log(this.tournament.id)
         
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })

        }
        }}
    
</script>

<style lang="scss" scoped>

.finals{
    margin-top: 120px;
    }

 .winner1{
     margin-bottom: 200px;
 }   
</style>