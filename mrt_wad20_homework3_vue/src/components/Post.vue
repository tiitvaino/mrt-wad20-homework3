<template>
  <div class="post">
    <div class="post-container">
      <div class="post-name">
        <div class="post-picture" :style="cavatar"></div>
        <div class="post-author"> {{author.firstname}} {{author.lastname}}</div>
        <div class="post-time">{{createTime}}</div>
      </div>
      <div class="post-content" v-if="cpostvideo">
        <video width=100% controls>
          <source :src="cpostvideourl" type="video/mp4">
        </video>
      </div>
      <div class="post-content" v-if="cpostexists" :style="cpost"></div>
      <div class="post-text">{{ ctext }}</div>
      <div class="post-like">
        <button type="button" class="post-like-button" @click="like()" v-bind:style="{backgroundColor: ccolor}">
          {{ clikes }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Post',
  data: function() {
    return {
      followcolor: '#8a8a8a',
    }
  },

  computed: {
    cavatar: function() {
      return `content: url('${this.author.avatar}')`;
    },

    cname: function() {
      return this.author[0] + " " + this.author[1];
    },

    ccolor: function() {
      return this.followcolor;
    },

    ctext: function() {
      return this.text;
    },

    cpost: function () {
      return `content: url('${this.media.url}')`;
    },

    cpostvideourl: function () {
      return this.media.url;
    },

    cpostvideo: function () {
      return this.media!=null && this.media.type=="video";
    },

    clikes: function () {
      return this.likes;
    },

    cpostexists: function () {
      return this.media!=null;
    }
  },

  props: {
    author: Object,
    createTime: String,
    text: String,
    media: Object,
    likes: String

  },

  methods: {
    like: function() {
      if (this.followcolor == '#8a8a8a') {
        this.followcolor = ' #01579b';
      }

      else {
        this.followcolor = '#8a8a8a';
      }
    }
  }
}
</script>
<style scoped>

  * {
    font: 15px "Roboto Slab", serif;
    outline: none;
  }

.post {
  min-width: 100%;
}


.post-container {
  width: 100%;
  height: 100%;
  min-width: 110px; /* Fit the picture */
  margin: auto auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;

}

.post-content {
  width: 100%;
}

.post-picture {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: top;
  border-radius: 50%;
  padding: 10px 10px 10px 10px;
}

.post-name {
  text-align: left;
  padding: 10px 10px 10px 10px;
  display: flex;
}

.post-time {
  padding-left: 55%;
  padding-top: 20px;
}

.post-author {
  padding-top: 25px
}

.post-like {
  width: 30%;
  padding: 10px;
}

.post-text {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 130%;
  font-weight: 600;
}
<<<<<<< HEAD
=======
.post-like-button{
  background-image: url(/images/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
    color: "white"
}

</style>