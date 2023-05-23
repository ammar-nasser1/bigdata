<template>
  <div class="bgcon">
    <!-- <div class="bgcon">
      <img src="@/assets/4990224.jpg" alt="" class="imgg" />
    </div> -->
    <div class="home flex items-center justify-center w-5/6 mx-auto">
      <div class="w-1/2 p-14">
        <img src="@/assets/1586349622virus.svg" alt="" />
        <h1
          class="font-bold tracking-wide font-mono subpixel-antialiased ml-10 mt-8"
        >
          Disease Information
        </h1>
      </div>
      <div
        class="w-1/2 p-14 flex items-center justify-center flex-col"
        @click="RedirectHuman()"
      >
        <img src="@/assets/Psychological-Hurricane-Prismatic.svg" alt="" />
        <h1
          class="font-bold tracking-wide font-mono subpixel-antialiased ml-20 mt-4"
        >
          Human Information
        </h1>
      </div>
      <div class="w-1/2 p-14 flex items-center justify-center flex-col">
        <img src="@/assets/3855249.jpg" alt="" class="rounded-full" />
        <h1
          class="font-bold tracking-wide font-mono subpixel-antialiased ml-2 mt-4"
        >
          Microbiome
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
// import TheLogout from "@/views/TheLogout.vue";

export default {
  methods: {
    RedirectHuman() {
      this.$router.push("dash");
    },
    redirctlogin() {
      this.$router.push("login");
    },
    updateScroll() {
      const nav = document.getElementById("n1");
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 30) {
        console.log("ada");
        nav.classList.add("nav2");
      } else {
        nav.classList.remove("nav2");
      }
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.updateScroll);
  },

  // components: { TheLogout },
};
</script>
<style>
.bgcon {
  background-image: linear-gradient(to left, #000000, #7ed6df);
}

.home {
  position: relative;
  top: 50px;
  min-height: 100vh;
  /* z-index: -5; */
  /* background-image: url("@/assets/4990224.jpg"); */

  z-index: 2;
}
</style>
