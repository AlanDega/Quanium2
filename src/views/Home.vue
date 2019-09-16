
<template>
<div>
    <div>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
</div>


      <v-container class="container2">
               <h1>Featured Tournaments</h1>
        <v-row>
          <v-col cols="4" v-for="tournament in tournaments" :key="tournament.id">
<v-card > 
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
  import TournamentsGrid from '@/components/TournamentsGrid.vue'
  import firebase from 'firebase'
  export default {
    components:{
       TournamentsGrid
    },
    data () {
      return {
        tournaments:[],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          }
          
        ],
      }
    },

    created(){
    

      firebase
      .firestore()
      .collection('tournaments').limit(9).get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'id': doc.id,
            'image': doc.data().image,
            'tournamentName': doc.data().tournamentName,
          }
          this.tournaments.push(data)
        })
      })
      
    },
  }
</script>

<style lang="scss" scoped>
.container2 {
  padding-left: 5em;
    padding-right: 5em;
    margin-top: 3em;

}

</style>