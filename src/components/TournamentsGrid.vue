<template>
    <div>
<v-container class="container1">
        <v-row>
          <v-col cols="4" v-for="tournament in tournaments" :key="tournament.id">

<v-card :to="{ name: 'arena', params: { tournament: tournament.fguid }}"> 
   <v-img :src="tournament.image" max-height="160" >          
       
        </v-img>
  <v-card-title>
{{tournament.tournamentName}}
  </v-card-title>
 <v-card-text>
 <v-container class="grey lighten-5">
    <v-row no-gutters>
      <template v-for="n in 4">
        <v-col :key="n">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Column
          </v-card>
        </v-col>
        <v-responsive
          v-if="n === 2"
          :key="`width-${n}`"
          width="100%"
        ></v-responsive>
      </template>
    </v-row>
  </v-container>
 </v-card-text>
 <v-card-text>
   <v-row>
  <v-avatar>
      <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
    </v-avatar>
    <p>creator</p>
    </v-row>
 </v-card-text>
</v-card>

          </v-col>
          
        </v-row>
      </v-container>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        data() {
            return {
                tournaments: [],
                playersCount: '',
                fguid:''
            }
        },
             created () {

      firebase
      .firestore()
      .collection('tournaments').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'id': doc.id,
            'player1': doc.data().player1,
            'player2': doc.data().player2,
            'player3': doc.data().player3,
            'player4': doc.data().player4,
            'fguid': doc.data().fguid,
            'image': doc.data().image
          }
          this.tournaments.push(data)
        })
      })
    }
  }
        
</script>

<style lang="scss" scoped>
.container1{
    padding-left: 70px;
    padding-right: 70px;

}

</style>