/* --------- INIT ---------- */

import contacts from "./contacts.js";
const dt = luxon.DateTime;
const dtNow = dt.now().setLocale('it');
const { createApp } = Vue;

createApp ({

  data() {
    return {
      contacts, // importato
      myName: 'Sofia',
      newMessage: '',
      counter: 0,
      dtTime24: '',
      searchInput: '',
    }
  },

  methods: {
    activeThumb(index) {
      if (this.counter !== index) this.newMessage = ''
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
      this.counter = index;
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
    },

    sendNewMessage() {
      const contact = this.contacts[this.counter]
      const messages = this.contacts[this.counter].messages

      if ( this.newMessage.trim() !== '') {
        contact.messages.push({
          date: this.nowDateTime,
          text: this.newMessage,
          status: 'sent',
          numbID: messages.length,
        });
        setTimeout( () => {
          contact.messages.push({
            date: this.nowDateTime,
            text: 'ok!',
            status: 'received',
            numbID: messages.length,
          });
        }, 2000)
        this.newMessage = '';
        
        console.log(contact.messages);
        console.log(contact);
      }  
      else this.newMessage = '';
      
    },

    getLastMessage(contact) {
      return contact.messages.at(-1)
      // return contact.messages[contact.messages.length - 1].text
    },


    deleteMessage(contact, message) {
      contact.messages.splice(message.numbID, 1)
    },


  },

  computed: {
    nowTime24() {
      return dtNow.toLocaleString(dt.TIME_SIMPLE);
    },

    nowDateTime() {
      return dtNow.toLocaleString(dt.DATE_SHORT) + ' ' + dtNow.toLocaleString(dt.TIME_24_WITH_SECONDS);
    },

    filteredContacts() {
      return this.contacts.filter(contact => {
        const names = contact.name.toLowerCase().trim();
        const words = this.searchInput.toString().trim();
        if (names.includes(words)) return contact 
      })
    },

  },

  mounted() {

    this.contacts.forEach((contact, index) => {
      contact.numbID = index
      contact.messages.forEach( (message, index) => {
        message.numbID = index
      });
    }); 

    this.contacts[0].messages.slice(0, 1);

  }

}).mount('#app')