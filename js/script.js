
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
      isMenuActive: false,
      isMessageActive: true,
      deleted: false,
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
        status: 'sent',
        isMenuActive: false,
        deleted: false,
      });
      setTimeout( () => {
        this.contacts[this.counter].messages.push({
          date: this.nowDateTime,
          text: 'ok!',
          status: 'received',
          isMenuActive: false,
          deleted: false,
        });
      }, 3000)
      this.newMessage = '';
    },

    getLastMessage(contact) {
      // return contact.messages[contact.messages.length - 1].text
      return contact.messages.at(-1)
    },

    deleteMessage(message) {
      message;
    }

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
    this.contacts.forEach(contact => {
      contact.messages.forEach( message => {
        message.isMenuActive = false
        message.deleted = false
      });
    });
  }

}).mount('#app')