<template>
  <div class="add">
    <div class="w-full max-w-md mx-auto mt-24">
      <form v-on:submit.prevent="addForm" ref="form">
        <div class="mb-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="_id"
          >
            Id
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="name"
            placeholder="_id"
            v-model="form._id"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
                                                                          HMP_ID"
          >
            HMP_ID
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
                                                                          HMP_ID"
            placeholder="HMP_ID"
            v-model="form.HMP_ID"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-900 font-medium mb-1" for=" GOLD_ID">
            GOLD_ID
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
  
                                                                                      GOLD_ID"
            placeholder="GOLD_ID"
            v-model="form.GOLD_ID"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
  
                                                                                      Organism_Name"
          >
            Organism_Name
          </label>
          <input
            required
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
  
                                                                                      Organism_Name"
            placeholder="Organism_Name"
            v-model="form.Organism_Name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
  
                                                                                      Domain"
          >
            Domain
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
  
                                                                                      Domain"
            placeholder="Domain"
            v-model="form.Domain"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
  
                                                                                      NCBI_Superkingdom"
          >
            NCBI_Superkingdom
          </label>
          <input
            type="text"
            required
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
  
                                                                                      NCBI_Superkingdom"
            placeholder="NCBI_Superkingdom"
            v-model="form.NCBI_Superkingdom"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
  
                                                                                      HMP_Isolation_Body_Site"
          >
            HMP_Isolation_Body_Site
          </label>
          <input
            required
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id=" HMP_Isolation_Body_Site"
            placeholder="HMP_Isolation_Body_Site"
            v-model="form.HMP_Isolation_Body_Site"
          />
        </div>
        <div class="mb-4">
          <button
            @click="reloadPage()"
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        _id: "",
        HMP_ID: "",
        GOLD_ID: "",
        Organism_Name: "",
        Domain: "",
        NCBI_Superkingdom: "",
        HMP_Isolation_Body_Site: "",
      },
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    addForm() {
      axios
        .post("http://localhost:8000/human_info/create_one/", this.form)
        .then((res) => {
          //Perform Success Action
          console.log(res.data);
          console.log("success");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
