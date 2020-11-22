<template>
  <div>
    <Header :user="user"/>
    <section class=" main-container ">
      <div class="post ">
        <Post v-for="thing in posts" v-bind:key='thing.id' :author='thing.author' :createTime='thing.createTime' :text='thing.text' :media='thing.media' :likes='thing.likes'></Post>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from './Header'
  import axios from "axios";
  import Post from './Post'
  export default {
    name: 'PostsPage',
    data: () => {
      return {
        internalpostlist: []
      }
    },

    computed: {
      posts: function() {
        if (this.$store.getters.getPosts().length == 0)
          this.loadPostsRequest();

        return this.$store.getters.getPosts();
      },

      cuser: function() {
        return this.$store.getters.getUser();
      }
    },

    props: {
      likes: String,
      author: Object,
      media: Object,
      text: String
    },
    methods: {
      loadPostsRequest: async function() {
        await axios.get('https://private-anon-7a5a5239ec-wad20postit.apiary-mock.com/posts')

            .then((response) => {
              this.$store.commit('setPosts', response.data);
            })

            .catch(function(error) {
              console.log(error);
              alert('error: could not load profiles');
            });
      }
    },
    components: {
      Header,
      Post
    },
  }
</script>
<style scoped>
/* .post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info+small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img,
video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title~.post-actions {
    padding: 10px;
} */

</style>