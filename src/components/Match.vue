<template>
    <div>
<div>
    <v-col>
      <v-card
      class="mb-10"
      max-width="400"
      @click="WinnerPlayer1"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{this.player1}}</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-card-actions>
          <v-row>
            <v-btn @click="joinPlayer1">join tournament1</v-btn>
          </v-row>
    <!-- <v-btn  @click="notify1">send notification1</v-btn>-->
    <!--<v-btn @click="addP1point">Add points</v-btn>
    {{counter1}}           -->
        </v-card-actions>
        </v-card>
          <v-row>
            <v-btn >StartMatch</v-btn>
            <v-btn >EndMatch</v-btn>
          </v-row>
        <v-card
        max-width="400"
        class="mb-10"
        >
        <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title class="headline">{{this.player2}}</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>