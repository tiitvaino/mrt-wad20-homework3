import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import BrowsePage from "./components/BrowsePage";
import PostsPage from "./components/PostsPage";
import LoginPage from "./components/LoginPage";
//import Media from "./models/Media";
//import Post from "./models/Post";
import Profile from "./models/Profile";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/login',name: "login_page", component: LoginPage},
  {path: '/posts', name: "posts_page", component: PostsPage},
  {path: '/browse', name: "browse_page", component: BrowsePage},
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    user: new Profile("Firstname","Lastname","email@email.email","./images/avatar.png",),
  },
  mutations: {},
  getters: {
    getUser: (state) => () => {
      return state.user
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
