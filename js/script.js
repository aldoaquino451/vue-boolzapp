
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
    }
  },

  methods: {
    activeThumb(index) {
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
      this.counter = index;
      this.contacts[this.counter].visible = !this.contacts[this.counter].visible;
    },

    sendNewMessage() {
      this.contacts[this.counter].messages.push({
        date: this.nowDateTime,
        text: this.newMessage,
        status: 'sent'
      });
      setTimeout( () => {
        this.contacts[this.counter].messages.push({
          date: this.nowDateTime,
          text: 'ok!',
          status: 'received'
        });
      }, 3000)
      this.newMessage = '';
    },

    getLastMessage(contact) {
      // return contact.messages[contact.messages.length - 1].text
      return contact.messages.at(-1)
    },

  },

  computed: {
    nowTime24() {
      return dtNow.toLocaleString(dt.TIME_SIMPLE);
    },

    nowDateTime() {
      return dtNow.toLocaleString(dt.DATE_SHORT) + ' ' + dtNow.toLocaleString(dt.TIME_24_WITH_SECONDS);
    }
  },

  mounted() {
    this.dtTime24 = this.nowTime24
  }

}).mount('#app')