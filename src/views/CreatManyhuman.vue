<template>
  <div class="add">
    <div class="w-full max-w-md mx-auto pt-20">
      <form>
        <div class="mb-4">
          <label class="block text-gray-900 font-medium mb-1" for="_id">
            id
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="name"
            placeholder="_id"
            v-model="product._id"
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
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
                                                                                                                                    HMP_ID"
            placeholder="HMP_ID"
            v-model="product.HMP_ID"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-900 font-medium mb-1"
            for="
    
                                                                                                                                                GOLD_ID"
          >
            GOLD_ID
          </label>
          <input
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
    
                                                                                                                                                GOLD_ID"
            placeholder="GOLD_ID"
            v-model="product.GOLD_ID"
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
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
    
                                                                                                                                                Organism_Name"
            placeholder="Organism_Name"
            v-model="product.Organism_Name"
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
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
    
                                                                                                                                                Domain"
            placeholder="Domain"
            v-model="product.Domain"
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
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
    
                                                                                                                                                NCBI_Superkingdom"
            placeholder="NCBI_Superkingdom"
            v-model="product.NCBI_Superkingdom"
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
            type="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="
    
                                                                                                                                                HMP_Isolation_Body_Site"
            placeholder="HMP_Isolation_Body_Site"
            v-model="product.HMP_Isolation_Body_Site"
          />
        </div>
        <div class="mb-4">
          <button
            @click.prevent="addProduct"
            v-if="!showBtn"
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
          <button
            v-else
            @click.prevent="showBtn = !showBtn"
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-72"
          >
            Add more
          </button>
          <button
            @click.prevent="addForm"
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-72 ml-8"
          >
            Finish
          </button>
          <div
            v-if="itemAdded"
            class="bg-green-200 text-green-800 px-4 py-2 mt-4 rounded"
          >
            record added successfully!
          </div>
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
      showModal: false,
      showBtn: false,
      products: [],
      product: {
        _id: null,
        HMP_ID: null,
        GOLD_ID: null,
        Organism_Name: "",
        Domain: "",
        NCBI_Superkingdom: "",
        HMP_Isolation_Body_Site: "",
      },
      itemAdded: false,
    };
  },
  created() {
    console.log(this.products);
  },
  methods: {
    addProduct() {
      this.showModal = true;
      this.showBtn = true;
      this.products.push({
        _id: this.product._id,
        HMP_ID: this.product.HMP_ID,
        GOLD_ID: this.product.GOLD_ID,
        Organism_Name: this.product.Organism_Name,
        Domain: this.product.Domain,
        NCBI_Superkingdom: this.product.NCBI_Superkingdom,
        HMP_Isolation_Body_Site: this.product.HMP_Isolation_Body_Site,
      });
      this.product = {};
      console.log(this.products);
    },
    async addForm() {
      await axios
        .post("http://localhost:8000/human_info/create_many/", this.products)
        .then((res) => {
          //Perform Success Action
          console.log(res.data);
          console.log("success");
          this.form = {
            _id: "",
            HMP_ID: "",
            GOLD_ID: "",
            Organism_Name: "",
            Domain: "",
            NCBI_Superkingdom: "",
            HMP_Isolation_Body_Site: "",
          };

          // Close the modal
          this.showModal = false;
          // Show the item added message
          this.itemAdded = true;

          // Clear the message after 2 seconds
          setTimeout(() => {
            this.$router.push({
              name: "over",
            });
          }, 2000);
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
