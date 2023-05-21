<template>
  <!-- <nav><router-link to="/">Home</router-link> |</nav> -->
  <div>
    <header1 class="fixed top-0 header1" v-if="$route.name == 'home'" />
    <router-view />
    <footerr />
  </div>
</template>
<script>
import header1 from "@/components/AppHeader.vue";
import footerr from "@/components/AppFooter.vue";

export default {
  components: { header1, footerr },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.header1 {
  width: 100%;
  z-index: 3;
}
</style>
