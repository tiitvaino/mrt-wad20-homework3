import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
  {path: '/',name: "login_page", component: LoginPage},
  {path: '/posts', name: "posts_page", component: PostsPage},
  {path: '/browse', name: "browse_page", component: BrowsePage},
];



const router = new VueRouter({routes});

const store = new Vuex.Store({
  state: {
    user: new Profile("Firstname","Lastname","email@email.email","./images/avatar.png",),
  },
  mutations: {
  },
  actions: {
    loadItems() {
      axios.get('https://private-https://private-anon-88cfa17c4c-wad20postit.apiary-mock.com/users/1-7a5a5239ec-wad20postit.apiary-mock.com/profiles')
      .then((response) => {
        this.user = Profile(response.firstname,response.lastname,response.email,response.avatar)
      })
      .catch(function(error) {
        console.log(error);
      });
    },
  },
  getters: {
    getUser: (state) => () => {
      this.actions.loadItems()
      return state.user;
    },
  },
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
