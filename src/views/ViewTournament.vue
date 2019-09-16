<template>
    <div>
        <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item three-line>
          

          <v-list-item-content>
            <v-list-item-title>Registration Open</v-list-item-title>
            <v-list-item-subtitle>3 players registered</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>


      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- //tabs
button sign up 
//brackets 
// -->
    </div>
</template>

<script>
    export default {
         data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },
  }
    
</script>

<style lang="scss" scoped>

</style>