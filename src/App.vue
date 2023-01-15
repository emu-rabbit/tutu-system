<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const updateVH = () => document.body.style.setProperty('--vh', `${window.innerHeight / 100}px`)
onMounted(updateVH)
window.addEventListener('resize', updateVH)
</script>

<style lang="scss">
@import '~@/styles/utils.scss';
@import '~@/styles/vant.scss';
@import '~@/styles/nprogress.scss';

body {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-size: 1vw;
}

#app {
  font-family: Microsoft JhengHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    font-size: xx-large;
  }

  h2 {
    font-size: x-large;
  }

  a {
    color: #2c3e50;
    font-weight: bold;
    font-size: small;
  }
}

</style>
