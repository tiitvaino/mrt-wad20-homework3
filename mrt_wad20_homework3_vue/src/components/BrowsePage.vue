<template>
  <div>
    <!-- <div v-for="n in names" v-bind:key='n'>{{ n }}</div> -->
    <Header :user="cuser"/>
    <section class="main-container">
      <div class="profiles">
        <Profile v-for="thing in profiles" v-bind:key='thing.id' :avatar='thing.avatar' :first_name='thing.firstname' :last_name='thing.lastname'></Profile>
      </div>
    </section>
  </div>
</template>
<script>
import Header from './Header'
import Profile from './Profile'
import axios from 'axios'

export default {
  name: 'Browse',

  computed: {
    profiles: function() {
      if (this.$store.getters.getProfiles().length == 0)
        this.loadProfilesRequest();

      return this.$store.getters.getProfiles();
    },

    cuser: function() {
      return this.$store.getters.getUser();
    }
  },

  methods: {
    loadProfilesRequest: async function() {
      await axios.get('https://private-anon-7a5a5239ec-wad20postit.apiary-mock.com/profiles')

      .then((response) => {
        this.$store.commit('setProfiles', response.data);
      })

      .catch(function(error) {
        console.log(error);
        alert('error: could not load profiles');
      });
    }
  },

  components: {
    Header,
    Profile
  }
}
</script>
<style scoped>
.profiles {
  width: 95%;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  margin: auto;
}
</style>
