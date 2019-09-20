<template>
  <div >
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
      <v-divider color="blue" class="divider" ></v-divider>
      <div class="bexg1">
        <h1>hola</h1>
      </div>
      <v-row>
        <v-col cols="4" v-for="tournament in tournaments" :key="tournament.id">
          <v-card > 
            <v-img :src="tournament.image" max-height="160" >          
            </v-img>
            <v-card-title>
            {{tournament.tournamentName}}
            </v-card-title>
            <v-row>
              <v-avatar>
                <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
              </v-avatar>
              <p>creator</p>
            </v-row>
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
      background-color: #060715;


h1{
  color: #ffff;
  margin-top: 40px;
}

.bexg1{
  height: 50px;
  width: 50px;
          border-left-color: blue;

}

}

</style>