<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #3F50B6;
  color: #ffffff;
  display: flex;
  justify-content: space-between;

  .links {
    padding-top: 16px;
  }

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #b9b742;
    }
  }
}


</style>
