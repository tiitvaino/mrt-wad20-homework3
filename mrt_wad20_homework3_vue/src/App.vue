<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

html {
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
}

.main-container {
    width: 50%;
    min-height: 100vh;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

</style>
