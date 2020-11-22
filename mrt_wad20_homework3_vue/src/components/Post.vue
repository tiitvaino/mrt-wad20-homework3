<template>
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
      <div class="post-content" :style="cpost"></div>
      <div class="post-text">{{ ctext }}</div>
      <div class="post-like">
        <button type="button" class="post-like-button" @click="like()" v-bind:style="{backgroundColor: ccolor, color: ctextcolor}">
          {{ clikes }}
        </button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Post',
  data: function() {
    return {
      followcolor: 'rgb(1, 87, 155)',
      textcolor: 'white'
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

    ctextcolor: function() {
      return this.textcolor;
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
      return this.media.type=="video";
    },

    clikes: function () {
      return this.likes;
    }
  },

  props: {
    author: Array,
    createTime: String,
    text: String,
    media: Array,
    likes: String

  },

  methods: {
    like: function() {
      if (this.followcolor == 'rgb(1, 87, 155)') {
        this.followcolor = 'rgb(255, 255, 255)';
        this.textcolor = 'black';
      }

      else {
        this.followcolor = 'rgb(1, 87, 155)';
        this.textcolor = 'white';
      }
    }
  }
}
</script>
<style scoped>


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

.post-like button {
  width: 100%;
  border: 1px solid rgb(1, 87, 155);
}

.post-text {
  padding-top: 10px;
  padding-left: 10px;
  font-size: 150%;
}

</style>