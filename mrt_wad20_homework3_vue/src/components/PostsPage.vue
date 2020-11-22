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

.post {
  width: 85%;
  margin: 15px auto;
  padding-bottom: 10px;
}

</style>