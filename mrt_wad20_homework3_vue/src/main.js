import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import BrowsePage from "./components/BrowsePage";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import Media from "./models/Media";
import Post from "./models/Post";
import Profile from "./models/Profile";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', component: MainPage},
  {path: '/login', name: "login_page", component: LoginPage},
  {path: '/browse', name: "browse_page", component: BrowsePage},
];

const router = new VueRouter({routes});

const posts = new Vuex.Posts({
  state: {},
  mutations: {},
  getters:  {},

});

const profile = new Vuex.Profile({
  state: {},
  mutations: {},
  getters:  {},
});

new Vue({
  router,
  posts,
  profile,
  render: h => h(App),
}).$mount('#app')
