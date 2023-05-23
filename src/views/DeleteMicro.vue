<template>
  <div class="messages flex flex-col items-start">
    <div>
      <label
        for="in"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Insert Id</label
      >
      <input
        type="number"
        placeholder="ID"
        v-model="id"
        id="in"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
    </div>

    <!-- <p @click="ty()">{{ this.id }}dddddddddd</p> -->
    <button
      @click="deleteitem()"
      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-72 mt-16"
    >
      Delet
    </button>
    ------------------
    <p @click="ty()" v-if="this.response == 200">Successfully deleted</p>
    <p @click="ty()" v-if="this.response !== 200 && this.response !== ''">
      This ID not found
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: 100,
      response: "",
    };
  },
  methods: {
    deleteitem() {
      // console.log(this.id);

      axios
        .delete(`http://localhost:8000/human_info/${this.id}/`)
        .then((response) => {
          this.response = response.status;
          // console.log(response.status);
        });
    },
    ty() {
      if (this.response == 200);
    },
  },
};
</script>

<style scoped>
.messages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
</style>
