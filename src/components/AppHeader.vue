<template>
  <div class="Header1">
    <section class="header">
      <div class="relative nav1" id="n1">
        <div class="w-10/12 mx-auto px-4 sm:px-0">
          <div
            class="flex justify-between items-center border-b-2 border-gray-100 pt-4 md:justify-start md:space-x-10"
          >
            <div
              class="flex justify-start lg:w-0 lg:flex-1 animate__animated animate__bounceInLeft"
            >
              <router-link to="/Home">
                <img
                  src="@/assets/Alzheimers-Brain-Word-Cloud-Black.svg"
                  alt=""
                  class="w-14 h-6"
              /></router-link>
              <button
                @click="RedirectHome()"
                class="flex items-center mb-4 font-bold text-gray-800 title-font md:mb-0 cur"
              >
                <span class="ml-3 text-xl text-slate-900 font-sans"
                  >BIo DataBase</span
                >
              </button>
            </div>

            <div class="animate__animated animate__bounceInRight">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                @click="redirctteam()"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-sans"
                >
                  About Team
                </span>
              </button>
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                @click="RedirectHome()"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-sans"
                >
                  Home
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import TheLogout from "@/views/TheLogout.vue";

export default {
  methods: {
    RedirectHome() {
      this.$router.push("home");
    },
    redirctteam() {
      this.$router.push("team");
    },
    // updateScroll() {
    //   const nav = document.getElementById("n1");
    //   this.scrollPosition = window.scrollY;
    //   if (this.scrollPosition > 30) {
    //     console.log("ada");
    //     nav.classList.add("nav2");
    //   } else {
    //     nav.classList.remove("nav2");
    //   }
    // },
  },
  mounted() {
    // window.addEventListener("scroll", this.updateScroll);
  },

  // components: { TheLogout },
};
</script>
<style scoped>
.nav2 {
  /* background-color: rgba(rgb(255, 255, 255), alpha); */
  background-color: rgba(96, 125, 139, 0.5);
  /* background-color: aqua; */
  /* opacity: 0.5; */
  /* z-index: 10; */
}
</style>
