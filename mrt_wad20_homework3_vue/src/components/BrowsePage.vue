<template>
  <div>
    <!-- <div v-for="n in names" v-bind:key='n'>{{ n }}</div> -->
    <!-- <Header :user="user"/> -->
    <section class="main-container">
      <div class="profiles">
        <Profile v-for="thing in profiles" v-bind:key='thing.id' :avatar='thing.avatar' :first_name='thing.firstname' :last_name='thing.lastname'></Profile>
      </div>
    </section>
  </div>
</template>
<script>
// import Header from './Header'
import Profile from './Profile'
import axios from 'axios'

export default {
  name: 'Browse',
  data: () => {
    return {
      internalprofilelist: []
    }
  },

  computed: {
    profiles: function() {
      if (this.internalprofilelist.length == 0)
        this.loadProfilesRequest();

      return this.internalprofilelist;
    },
  },

  methods: {
    loadProfilesRequest: async function() {
      console.log("Getting profiles: start");
      await axios.get('https://private-anon-7a5a5239ec-wad20postit.apiary-mock.com/profiles')

      .then((response) => {
        this.internalprofilelist = response.data;
      })

      .catch(function(error) {
        console.log(error);
        alert('error: could not load profiles');
      });
    }
  },

  components: {
    // Header,
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
