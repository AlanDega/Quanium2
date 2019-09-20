<template>
  <div>
    <v-container>
      <h1 class="text-center">
      Tournaments
      </h1>
    </v-container>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col
          :key="i"
          cols="12"
          md="4"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  :src="item.img"
                  height="225px"
                >
                  <v-card-title class="title white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">{{ item.title }}</p>

                      <div>
                        <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                          {{ item.text }}
                        </p>
                        <p class="caption font-weight-medium font-italic text-left">
                          {{ item.subtext }}
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <TournamentsGrid></TournamentsGrid>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import TournamentsGrid from '@/components/TournamentsGrid'

  export default {
    name: 'home',
    components:{
      TournamentsGrid
    },
    data () {
      return {
        tournaments: [],
        loading: true,
        player1:'',
        player2:'',
        player3:'',
        player4:'',
        FortniteImage:'',
        ApexImage:'',
        FifaImage:'',
        items: [
        {
          title: '',
          text: "",
          subtext: '',
          img: 'https://battlebus.org/wp-content/uploads/2019/06/Fortnite-Wallpaper-HD-Clutch-Grind-Skin-Hang-Time-Set-1920x1080.jpg',
        },
        {
          title: '',
          text: '',
          subtext: '',
          img: 'https://progameguides.com/wp-content/uploads/2019/03/apex-legends-wattson-wallpaper005.jpg',
        },
        {
          title: '',
          text: '',
          subtext: '',
          img: 'https://media.contentapi.ea.com/content/dam/ea/easports/fifa/fifa-19/19-days-fifa/FIFA19-Tile-Large-Day18-lg.jpg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
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
            'fguid': doc.data().fguid
          }
          this.tournaments.push(data)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>

.image1{
  height: 100%;
  width: 100%;
}

.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

  
</style>

