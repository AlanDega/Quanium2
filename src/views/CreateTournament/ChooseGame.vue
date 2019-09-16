<template>
    <div>
<h1> Select a game</h1>
<v-container>
    <v-row>
        <v-col cols="4" v-for="game in games" :key="game.id">
       <v-card >
           <v-img :src="game.image">
              
           </v-img>
           <v-card-title>
               {{game.name}}
           </v-card-title>
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
                games:[
                    {
                   name: 'Fortnite',
                   image: "https://cdn2.unrealengine.com/Fortnite%2Fbattle-pass%2Fseason-x%2FS10_KeyArt_LineUp_Logo_1920x1080-1920x1080-4deed5e28027cea2c5d6ab36321f3eaa32b8f6ce.jpg"
                    },
                    {
                   name: 'Fifa',
                   image: "https://wallpapercave.com/wp/wp3714366.jpg"
                    },
                    {
                   name: 'Apex',
                   image: "https://addons.cdn.mozilla.net/user-media/previews/full/215/215857.png?modified=1551712455"
                    }
                    
                    


                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>