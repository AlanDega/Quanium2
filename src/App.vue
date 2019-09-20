<template>
  <v-app >
    <v-navigation-drawer
    app
    color="#060715" 
    permanent
    dark
    >
      <v-list>
        <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="pa-2">
        <v-text-field
        v-model="email"
        label="email">
        </v-text-field>
        <v-text-field
        v-model="password"
        label="password">
        </v-text-field>
        <v-btn block>Logout</v-btn>
        <v-btn @click="login">Login</v-btn>
      </div>
      </v-row>
      <div v-if="userPresence == true" >
        <router-link  v-bind:to="{ name: 'profile', params: { profile: this.user.uid }}">
        <v-avatar>
          <img :src="this.image" alt="avatar">
        </v-avatar>
        </router-link>
      </div>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from 'firebase'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
     items: [
          { title: 'Dashboard', icon: '' },
          { title: 'Account', icon: '' },
          { title: 'Admin', icon: '' },
        ],
        email:'',
        password:'',
        userPresence: null,
        image:''
    //
  }),
  created(){
    firebase.auth().onAuthStateChanged(user => {
    if (user) {
    this.user = user;
    console.log(this.user.uid)
    }
    })
  },
  methods: {

    login(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(function() {
      console.log('ok')
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      })

      firebase
      .firestore()
      .collection('users').where('id', '==', this.user.uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        this.tournament = doc.data()
        this.image= doc.data().image
        //change state to logged in and then next level vuex
        });
        })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
        this.userPresence = true;
    },
    logout(){
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }).catch(function(error) {
      // An error happened.
      });
      this.userPresence = false;
    },
    routeProfile(){
      this.$router.push()
    }
  }
}
</script>

<style >


</style>
