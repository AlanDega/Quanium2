import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tournaments from './views/Tournaments.vue'
import MyTournaments from './views/MyTournaments.vue'
import EditTournament from './views/EditTournament.vue'
import Arena from './views/Arena.vue'
import Profile from './views/Profile.vue'
import Signup from './views/Signup.vue'
import Uploader from './views/Uploader.vue'
import TournamentDetails from './views/CreateTournament/TournamentDetails.vue'
import ChooseGame from './views/CreateTournament/ChooseGame.vue'
import NewTournament from './views/NewTournament.vue'
import ViewTournament from './views/ViewTournament.vue'
import Semi1 from './components/Semis/Semi1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/uploader',
      name: 'uploader',
      component: Uploader
    },
    
    {
      path: '/viewtournament',
      name: 'view-tournament',
      component: ViewTournament
    },
    
    {
      path: '/tournamentdetails',
      name: 'tournament-details',
      component: TournamentDetails
    },
    {
      path: '/newtournament',
      name: 'new-tournament',
      component: NewTournament
    },
    // {
    //   path: "/user/:id",
    //   component: User1,
    //   props: true,
    //   children: [
    //     {
    //       path: "", //selected tab by default
    //       component: TaskTab
    //     },
    //     {
    //       path: "project",
    //       component: ProjectTab
    //     }
    //   ]
    // },
    {
      path: '/choosegame',
      name: 'choose-game',
      component: ChooseGame
    },
    
    
    {
      path: '/edittournament',
      name: 'edit-tournament',
      component: EditTournament
    },
    
    {
      path: '/tournaments',
      name: 'tournaments',
      component: Tournaments
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/semi1',
      name: 'semi1',
      component: Semi1
    },
    
    {
      path: '/:tournament/:success?',
      name: 'arena',
      component: Arena
    },

    {
      path: '/:profile',
      name: 'profile',
      component: Profile
    },
    
    
    
    
    
    
    {
      path: '/mytournaments',
      name: 'my-tournaments',
      component: MyTournaments
    },
    
    
    
    
    
    
    
    
  ]

})