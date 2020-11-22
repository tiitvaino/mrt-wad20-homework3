<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="/images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search" v-model="capitalize"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img class="avatar" alt="Me"
        :src="user.avatar"
        @click="isUserDisplayed = !isUserDisplayed"
        >
      </div>
    </nav>
    <div id="user-info" v-bind:style="{ display: isUserDisplayed ? 'block': 'none'}">
      <p class="user-name">{{user.firstname}} {{user.lastname}}</p>
      <p class="user-email">{{user.email}}</p>
      <hr>
      <router-link :to="{name: 'browse_page'}">
        <span>Browse</span>
      </router-link>
      <hr>
      <router-link :to="{name: 'login_page'}">
        <span>Log out</span>
      </router-link>
    </div>
  </header>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Header',
    data: function () {
      return {isUserDisplayed: false,}
    },
    computed: {
      user: function () {
        if (!this.$store.getters.getUser()){
          this.loadUserRequest();
        }

        return this.$store.getters.getUser();
      }
    },
    props: {

    },
    methods: {
      showUserInfo: function(){
        if (this.isUserDisplayed == "none"){
          this.isUserDisplayed = "block";
        }
        else {
          this.isUserDisplayed = "none";
        }
      },
    loadUserRequest: async function() {
      await axios.get('https://private-anon-88cfa17c4c-wad20postit.apiary-mock.com/users/1')

        .then((response) => {
          console.log(response)
          this.$store.commit('setUser', response.data);
        })

        .catch(function(error) {
          console.log(error);
          alert('error: could not load user');
        });
    },

    },

}

</script>
<style scoped>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }

  header:hover {
    box-shadow: 0 -20px 30px #4d4d4d;
  }

  nav {
    display: flex;
    background-color: #ffffff;
    align-items: center;
  }

  nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
  }

  nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
  }

  nav div.search-container>input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid #e0e0e0;
  }
  nav div.search-container>button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
  }

  span {
    color: #40c4ff;
    text-decoration: underline ;
  }

  #user-info {
    position: absolute;
    right: 0;
    background-color: #ffffff;
    width: fit-content;
    height: fit-content;
    text-align: left;
    padding: 10px;
    box-shadow: 0px 8px 8px 8px rgba(0, 0, 0, 0.2);
  }

  #user-info hr {
    width: 100%;
    border: 1px solid #f0f0f0;
  }

  #user-info p {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
