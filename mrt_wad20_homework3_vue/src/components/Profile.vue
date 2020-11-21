<template>
<div class="profile-container">
  <div class="profile-picture" :style="cavatar"></div>
  <div class="profile-name">{{ cname }}</div>
  <div class="profile-follow">
    <button type="button" class="profile-follow-button" @click="follow()" v-bind:style="{backgroundColor: ccolor, color: ctextcolor}">
      {{ ctext }}
    </button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Profile',
  data: function() {
    return {
      followcolor: 'rgb(1, 87, 155)',
      textcolor: 'white',
      text: 'Follow'
    }
  },

  computed: {
    cavatar: function() {
      return `background-image: url('${this.avatar}')`;
    },

    cname: function() {
      return this.first_name + " " + this.last_name;
    },

    ccolor: function() {
      return this.followcolor;
    },

    ctextcolor: function() {
      return this.textcolor;
    },

    ctext: function() {
      return this.text;
    }
  },

  props: {
    avatar: String,
    first_name: String,
    last_name: String
  },

  methods: {
    follow: function() {
      if (this.followcolor == 'rgb(1, 87, 155)') {
        this.followcolor = 'rgb(255, 255, 255)';
        this.textcolor = 'black';
        this.text = 'Unfollow';
      }

      else {
        this.followcolor = 'rgb(1, 87, 155)';
        this.textcolor = 'white';
        this.text = 'Follow';
      }
    }
  }
}
</script>
<style scoped>
.profile-container {
  width: 85%;
  height: 100%;
  min-width: 110px; /* Fit the picture */
  margin: auto auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: top;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.profile-name {
  text-align: center;
}

.profile-follow {
  width: 30%;
  margin: auto;
  padding: 10px;
}

.profile-follow button {
  width: 100%;
  margin: auto;
  border: 1px solid rgb(1, 87, 155);
}
</style>