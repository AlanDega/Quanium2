<template>
<div>
    <v-col
                       >

    
    <v-card
    class="mb-10"
    max-width="400"
    @click="WinnerPlayer1"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.player1}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                 <v-card-actions>
                                      <v-row>

    <!--         <v-btn  @click="notify1">send notification1</v-btn>-->
            <v-btn @click="joinPlayer1">join tournament1</v-btn>
<!--<v-btn @click="addP1point">Add points</v-btn>
{{counter1}}           -->
                               </v-row>

            <!-- one click media sharing distribution -->
            </v-card-actions>
            </v-card>
            <v-row>
                <v-btn >StartMatch</v-btn>
                <v-btn >EndMatch</v-btn>
            </v-row>
           
             <v-card
    max-width="400"
    class="mb-10"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.player2}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                 <v-card-actions>
                                      <v-row>

   <!--          <v-btn  @click="notify2">send notification2</v-btn>-->
            <v-btn @click="joinPlayer2">join tournament2</v-btn>
<!--<v-btn @click="addP2point">Add points</v-btn>
{{counter2}}    -->       
                               </v-row>

            </v-card-actions>
            </v-card>
             <v-card
    max-width="400"
    class="mb-10"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.player3}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                 <v-card-actions>
                   <v-row>
   <!--          <v-btn  @click="notify3">send notification3</v-btn>
            <v-btn @click="joinPlayer3">join tournament3</v-btn>
 <v-btn @click="addP3point">Add points</v-btn>
{{counter3}}-->
            <v-btn 
      >winner1</v-btn>
               </v-row>
            </v-card-actions>
            </v-card>
             <v-card
    max-width="400"
    class="mb-10"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{this.player4}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
                       <v-list-item two-line>
      <v-list-item-content>
                 <v-card-actions>
                     <v-row>
  <!--           <v-btn  @click="notify4">send notification4</v-btn>-->
            <v-btn @click="joinPlayer4">join tournament4</v-btn>
                                  <!--     <v-btn @click="addP4point">Add points</v-btn>
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
            this.player1= doc.data().player1
            this.player1avatar= doc.data().player1avatar
            this.player2= doc.data().player2
            this.player3= doc.data().player3
            this.player4= doc.data().player4
       this.success = this.$route.params.success
          })
        
        })

        
        

    },
        methods: {
         joinPlayer1() {
      firebase
          .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               player1: this.user.uid,
                     playerCommTag1: this.playerCommTag
        }).then(() => {
         
  


        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
    },

    //computed properties of whih buttons are enabled
    // button text (this player is the winner) 

       WinnerPlayer1(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               winnerSemis1: this.player1,

        }).then(() => {
          console.log(this.tournament.id)
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })

       },
        WinnerPlayer2(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               winnerSemis1: this.player2,

        }).then(() => {
          console.log(this.tournament.id)
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
       

       
    },

     WinnerPlayer3(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               winnerSemis2: this.player3,

        }).then(() => {
          console.log(this.tournament.id)
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })

              },
              WinnerPlayer4(){
           firebase
           .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                               winnerSemis2: this.player4,

        }).then(() => {
          console.log(this.tournament.id)
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })


      
                    },
                     joinPlayer1() {
      firebase
          .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
                     player1: this.user.uid,
                     playerCommTag1: this.playerCommTag
        }).then(() => {
          
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
      },
      joinPlayer2() {
      
         firebase
          .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
          
                     playerCommTag2: this.playerCommTag
        }).then(() => {
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
      },
      joinPlayer3() {
      
         firebase
          .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
          
           player3: this.user.uid,
                      playerCommTag3: this.playerCommTag
          
        }).then(() => {
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
      },
      joinPlayer4() {
      
         firebase
          .firestore()
          .collection('tournaments')
          .doc(this.tournament.id)
          .update({
          
           player4: this.user.uid,
                      playerCommTag4: this.playerCommTag
          
        }).then(() => {
        })
        .catch(function (error) {
              console.error('Error adding document: ', error)
            })
      },
                }
              }
        
    
</script>

<style lang="scss" scoped>

</style>