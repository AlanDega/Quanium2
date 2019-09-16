<template>
  <section class="container">
    <div class="header">
  </div>
    <div class="columns">
      <div class="column is-8">
        <h1>Tournaments

        </h1>

        <v-container>
            <v-row>
                <v-col cols="4">
                  <v-card>
                      <v-img :src="this.FortniteImage">
                          1
                      </v-img>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card>
                      <v-img :src="this.FifaImage">
                          2
                      </v-img>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card>
                      <v-img :src="this.ApexImage">
                          3
                      </v-img>
                  </v-card>
                </v-col>
            </v-row>
        </v-container>

        <div class="loader-section" v-if="loading">
          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">view profile </router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">view profile</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">view profile</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">view profile</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="user-list" v-for="tournament  in tournaments">
          <div class="columns">
            <div class="column is-8">
              <p>{{tournament.player1}} </p>
              <div class="inner">
                <div class="left">
                  <p class="user-list__sub"><strong> </strong>: {{tournament.player2}}</p>
                </div>
                <div class="right">
                  <p class="user-list__sub"><strong></strong>: {{tournament.player3}}</p>
                </div>
                <div class="right">
<p>  {{tournament.player4}}
  </p>                
  </div>
                
              </div>
            </div>
            <div class="column is-4 right">
              <router-link class="button is-primary" v-bind:to="{ name: 'view-tournament', params: { tournament: tournament.fguid }}">
                view profile
                </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'home',
    data () {
      return {
        tournaments: [],
        loading: true,
        player1:'',
        player2:'',
        player3:'',
        player4:'',
      }
    },
    created () {
firebase
        .firestore()
        .collection('tournaments').where('selectedGame', '==', 'fortnite').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.tournament = doc.data()
            this.tournament.id = doc.id
            this.fguid= doc.data().fguid
            this.playerCommTag1= doc.data().playerCommTag1
            this.playerCommTag2= doc.data().playerCommTag2
            this.playerCommTag3= doc.data().playerCommTag3
            this.playerCommTag4= doc.data().playerCommTag4
    })
        })
    }

  }
</script>

<style lang="scss" scoped>
  
</style>

