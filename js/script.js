/*

*/


const { createApp } = Vue;

createApp({

  data() {
    return {
      saluto: 'ciao',
    }
  },

  methods: {
    salutare() {
      console.log(this.saluto)
    }
  },


  mounted() {
    this.salutare()
  }

}).mount('#app')

