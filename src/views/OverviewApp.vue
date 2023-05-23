<template>
  <div class="w-full">
    <div class="w-11/12 mx-auto mt-20">
      <!-- <button
        @click="togglef()"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Show Data
      </button> -->
      <div class="relative flex flex-col">
        <table class="">
          <thead
            class="text-xs text-gray-900 uppercase dark:text-gray-400 bg-teal-500"
          >
            <tr class="">
              <th scope="col" class="pl-10 py-3">HMP_ID</th>
              <th scope="col" class="pl-6 py-3">GOLD_ID</th>
              <th scope="col" class="w-72 px-6 py-3">Organism_Name</th>
              <th scope="col" class="pl-24 py-3">Domain</th>
              <th scope="col" class="pl-6 py-3 ml-20">NCBI_Superkingdom</th>
              <th scope="col" class="px-6 py-3">HMP_Isolation_Body_Site</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
        </table>
        <div class="overflow-y-auto h-96">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-red-500"
          >
            <tbody>
              <tr
                class="bg-white dark:bg-gray-200"
                v-for="g in gens"
                :key="g.id"
              >
                <th
                  scope="row"
                  class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ g.HMP_ID }}
                </th>
                <!-- <td class="py-4">{{ g.HMP_ID }}</td> -->
                <!-- <td class="pl-6 py-4">{{ g.HMP_ID }}</td> -->

                <td class="py-4">{{ g.GOLD_ID }}</td>
                <td class="py-4 w-80">{{ g.Organism_Name }}</td>
                <td class="py-4">{{ g.Domain }}</td>
                <td class="py-4">{{ g.NCBI_Superkingdom }}</td>
                <td class="py-4">{{ g.HMP_Isolation_Body_Site }}</td>
                <td class="py-4">
                  <button
                    class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    @click="edititem(g.HMP_ID)"
                  >
                    Edit Item
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      gens: [],
      flag: -1,
    };
  },
  name: "HomeView",
  components: {},
  methods: {
    edititem(id) {
      this.$router
        .push({
          name: "update",
          params: {
            itemID: id,
          },
        })
        .catch(() => {});
    },
    togglef() {
      this.flag *= -1;
      console.log(this.flag);
      this.getData();
    },
    getData() {
      axios.get("http://localhost:8000/human_info/list").then((response) => {
        // this.cards = response.data.results;
        this.gens = response.data;
        console.log(this.gens);
        // console.log(response.data.results[0].name);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
