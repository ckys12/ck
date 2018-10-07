import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from "../pages/homes/home.vue"
import Audio from "../pages/audios/audio.vue"
import Guanbo from "../pages/guanbos/guanbo.vue"
import Mirt from "../pages/mins/mirt.vue"
import News from "../pages/newss/news.vue"
import Fime from "../components/fime.vue"
import City from "../components/city.vue"
import Music from "../components/music.vue"
import Raed from "../components/raed.vue"
import Tv from "../components/tv.vue"
import Variety from "../components/variety.vue"


Vue.use(Router)
export default new Router({
  routes: [
     {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
      {path:'fime',component:Fime},
      {path:'city',component:City},
      {path:'music',component:Music},
      {path:'raed',component:Raed},
      {path:'tv',component:Tv},
      {path:'variety',component:Variety}

      ]
    },
     {
      path: '/guanbo',
      name: 'Guanbo',
      component: Guanbo
    },
    {
      path: '/mirt',
      name: 'Mirt',
      component: Mirt
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }

  ]
})

