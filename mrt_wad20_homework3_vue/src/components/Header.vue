<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../../public/images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img src="../../public/images/avatar.png" class="avatar" alt="Me">
      </div>
    </nav>
    <div id="user-info">
      <p class="user-name"><!--John Doe--></p>
      <p class="user-email"><!--john.doe@example.com--></p>
      <hr> <a href="browse.html" class="browse-button">Browse</a>
      <hr>
      <a href="login.html">Log Out</a>
    </div>
  </header>

</template>
<script>
export default {
    name: 'Header',
    computed: {

    },
    props: {

    },
    mehtods: {

    }

}
</script>
<style scoped>

</style>
