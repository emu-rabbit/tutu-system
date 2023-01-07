<template>
  <router-view/>
</template>

<style lang="scss">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p, button {
  font-size: 1em;
}
</style>
