<template>
    <div>
          <div class="text-center">
    <v-avatar>
      <img :src="this.picture" alt="avatar">
    </v-avatar>
<progress :value="UploadValue" max="100" id="uploader">0%</progress>
<input type="file" @change="onFileSelected"/>
<button @click="onUpload"> upload </button>
    </div>
    </div>

</template>

<script>
import firebase from 'firebase'
    export default {
        data() {
            return {
                selectedFile: null,
                UploadValue: 0,
                picture: null
            }
        },
        created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
                console.log(this.user.uid)
            }
        });
    },
        methods:{
            onFileSelected(event){
                this.selectedFile = event.target.files[0];

            },

            onUpload(){
                const storageRef = firebase.storage().ref(`/ProfileImages/${this.selectedFile.name}`);
                const task = storageRef.put(this.selectedFile);
                task.on('state_changed',snapshot=>{
                    let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                    this.UploadValue = percentage;
                }, error =>{console.log(error.message)},
                 ()=>{this.UploadValue=100;
                     // download url 
                     task.snapshot.ref.getDownloadURL().then((url)=>{
                         this.picture = url;
                         console.log(this.picture)

                         firebase.firestore().collection("users").add({
    image: this.picture,
    id: this.user.uid

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

                     });;
                 });
                }
            }
        }
    
</script>

<style lang="scss" scoped>

</style>