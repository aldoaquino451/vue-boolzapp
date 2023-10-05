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
      isMessageActive: true,
      deleted: false,
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
      this.contacts[this.counter].messages.push({
        date: this.nowDateTime,
        text: this.newMessage,
        status: 'sent',
        deleted: false,
      });
      setTimeout( () => {
        this.contacts[this.counter].messages.push({
          date: this.nowDateTime,
          text: 'ok!',
          status: 'received',
          deleted: false,
        });
      }, 3000)
      this.newMessage = '';
    },

    getLastMessage(contact) {
      return contact.messages.at(-1)
      // return contact.messages[contact.messages.length - 1].text
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
      return this.contacts.filter((contact) => {
        if (this.searchInput === '') {
          return contact
        }
        else {
          if ( contact.name.toLowerCase().includes(this.searchInput.toString()) ) { 
            return contact 
          }
        }
      })
    },
  },

  mounted() {

    this.contacts.forEach((contact, index) => {
      contact.numbID = index
      contact.messages.forEach( message => {
        message.deleted = false
      });
    }); 

    console.log(this.contacts);
  }

}).mount('#app')