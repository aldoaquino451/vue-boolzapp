/*

  - con la libreria luxon inserisci la data precisa

*/

import contacts from "./contacts.js";
const { createApp } = Vue;

createApp ({

  data() {
    return {
    
      contacts, // importato

      counter: 0,
      newTextMessage: '',

    }
  },

  methods: {

    activeThumb(index) {
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
      this.counter = index;
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
    },

    addNewTextMessage() {
      this.contacts[this.counter].messages.push({
        date: '10/01/2020 15:30:55',
        text: this.newTextMessage,
        status: 'sent'
      });

      this.newTextMessage = '';

      setTimeout( () => {
        this.contacts[this.counter].messages.push({
          date: '10/01/2020 15:30:55',
          text: 'Va bene!',
          status: 'received'
        });
  
      }, 1000);
    }

  },

  mounted() {
    console.log(this.contacts[this.counter].messages[0].text);

  }

}).mount('#app')