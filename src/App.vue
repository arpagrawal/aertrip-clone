<template>
  <div id="app">
    <ae-header></ae-header>
    <div class="ae-content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './router';
import AeHeader from './components/ae-header/ae-header.vue';

export default {
  name: 'App',
  components: {
    AeHeader
  },
  router
}
</script>

<style lang="less">
* {
  margin: 0;
}
body,
#app {
  font-family: 'Source Sans Pro', sans-serif;
  background: @white;
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 80px;
}

a {
  text-decoration: none;
}

.ae-content-container {
    max-width: 1120px;
    margin: 0 auto;
}
</style>
