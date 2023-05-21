<template>
  <div class="w-full">
    <div class="w-3/4 mx-auto">
      <button
        @click="togglef()"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Show Data
      </button>
      <div class="relative overflow-y-auto h-96" v-if="(this.flag = 1)">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-red-500"
        >
          <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr class="">
              <th scope="col" class="px-6 py-3">Id</th>
              <th scope="col" class="px-6 py-3">First_Name</th>
              <th scope="col" class="px-6 py-3">Last_Name</th>
              <th scope="col" class="px-6 py-3">email</th>
              <th scope="col" class="px-6 py-3">gender</th>
              <th scope="col" class="px-6 py-3">ip_addr</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-200" v-for="g in gens" :key="g.id">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ g._id }}
              </th>
              <td class="px-6 py-4">{{ g.HMP_ID }}</td>
              <td class="px-6 py-4">{{ g.GOLD_ID }}</td>
              <td class="px-6 py-4">{{ g.Organism_Name }}</td>
              <td class="px-6 py-4">{{ g.Domain }}</td>
              <td class="px-6 py-4">{{ g.NCBI_Superkingdom }}</td>
              <td class="px-6 py-4">{{ g.HMP_Isolation_Body_Site }}</td>
            </tr>
            <h1>
              $route.name !== 'profile' && $route.name !== 'settings' &&
              $route.name !== 'dash' && $route.name !== 'over'
            </h1>
          </tbody>
        </table>
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
    // this.getData();
  },
};
</script>
