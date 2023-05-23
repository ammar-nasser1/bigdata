<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content1">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SidebarApp";
export default {
  name: "disease-app",

  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: teal;
  height: 100vh;
  /* width: 100vw;   */
  box-sizing: border-box;
}

.content1 {
  background-color: white;

  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>
