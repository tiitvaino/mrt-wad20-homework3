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
//import Profile from "./models/Profile";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', name: "login_page", component: LoginPage},
  {path: '/posts', name: "posts_page", component: PostsPage},
  {path: '/browse', name: "browse_page", component: BrowsePage},
];



const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    user: NaN,//new Profile("Firstname","Lastname","email@email.email","./images/avatar.png"),
    profiles: [],
    posts: [],
  },
  mutations: {
    setProfiles: function(state, newProfiles) {
      this.state.profiles = newProfiles;
    },
    setPosts: function (state, newPosts) {
      this.state.posts = newPosts;
    },
    setUser: function (state, newUser) {
      this.state.user = newUser;//.firstname;
      //this.state.user.lastname = newUser.lastname;
      //this.state.user.email = newUser.email;
      //this.state.user.avatar = newUser.avatar;
    },
  },
  getters: {
    getUser: (state) => () => {
      return state.user;
    },

    getProfiles: (state) => () => {
      return state.profiles;
    },

    getPosts: (state) => () => {
      return state.posts;
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
