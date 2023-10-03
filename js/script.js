/*

*/

import { saluto, contacts } from "./contacts.js";
const { createApp } = Vue;

createApp ({

  data() {
    return {
      saluto,
      contacts,

    }
  },

  methods: {
    salutare() {
      console.log(this.saluto);
    }
  },

  mounted() {
    this.salutare()
    // setTimeout();
  }

}).mount('#app')