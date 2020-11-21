<template>
 <div>
    <Header :user="user"/>
    <section class="main-container">
      <div class="profiles">
        <div class="profile-container">
          <div class="profile-picture" style="background-image: url('todo')"></div>
          <div class="profile-name">todo}</div>
          <div class="profile-follow">
            <button type="button" class="profile-follow-button">Follow</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Header from './Header'
  export default {
    name: 'Browse',
    computed: {

    },
    props: {

    },
    mehtods: {

    },

    components: {
      Header,
    },

}
</script>
<style scoped>
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.profiles {
  width: 95%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-rows: 50% 50%;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  margin: auto;
}

.profile-container {
    width: 100%;
    height: 200px;
    margin: 15px auto;
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
