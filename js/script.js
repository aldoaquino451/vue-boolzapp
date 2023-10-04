/*

  - con la libreria luxon inserisci la data precisa

*/

import contacts from "./contacts.js";
const dt = luxon.DateTime;
const { createApp } = Vue;

createApp ({

  data() {
    return {
      contacts, // importato
      
      myName: 'Aldo Aquino  ',
      counter: 0,
      newTextMessage: '',
      dtNowIt: 0,
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
          text: 'ok!',
          status: 'received'
        });
      }, 1000)

    },

    getLastMessage(contact) {
      return contact.messages[0].text
    },

    
  },

  mounted() {
    this.dtNowIt = dt.now().setLocale('it');
    const dataCompleta = this.dtNowIt.toLocaleString(dt.DATE_SHORT);
    console.log(dataCompleta);
  }

}).mount('#app')