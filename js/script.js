/*
  - cicliamo nell'html tutti gli oggetti contenuti in messages con v-for così tramite data e message assegniamo i valori del testo e della data di invio mentre con status verifichiamo chi ha inviato il messaggio e quindi il colore di background
  - tutte gli elementi chat dovranno essere nascosti tranne il primo 
  - alle thumb chat aggiungiamo una funzione al click, questa funzione ci permetterà di aggiugnere la classe hide all'elemento chat corrispondente e attiverà la thumb (modificando il background)
  - assegnamo all'input un v-model e dentro una variabile per salvare il dato inserito
      - con una funzione che si attiva con il tasto enter pushamo un nuovo oggetto dentro l'array messages corrispondente al contatto della chat corrispondete
      - il testo sarà dato dall'input, per la data salviamo la data corrente in una costante, lo status sarà di default sent
  - alla funzione richiamata con enter deve partire un settimeout di 1000 ms in cui verrà visualizzato un messaggio con 
      - testo ok, status received, e data sempre quella corrente

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