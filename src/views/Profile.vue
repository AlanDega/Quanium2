<template>
    <div>
        <h1>profile</h1>   
        <div v-if="profileLoaded == true">
            <img :src="this.image" alt="" width="50px" height="50px">
        </div>
        <v-progress-linear :value="this.qxp"></v-progress-linear>
        <span> {{ this.qxp + '/100' }}</span>
        <div>
            <h3>Pending qxp</h3>
            <p>confirmations 2/4</p>
        </div>
        <div>
            <h3>Past events</h3>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        data() {
            return {
                image:'',
                profileLoaded: false,
                value:'',
                qxp:'20'
            }
        },
        beforeCreate() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
        firebase
        .firestore()
        .collection('users').where('id', '==', this.$route.params.profile).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
            this.tournament = doc.data()
            this.image= doc.data().image
            this.qxp = doc.data().qxp      
            }  
            )}
        )},
          created(){
        this.profileLoaded= true
    }
}
</script>

<style  scoped>

</style>