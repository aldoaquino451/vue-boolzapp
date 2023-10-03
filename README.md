Boolzapp 
===

#### Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.     
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

#### Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.    
Click sul contatto mostra la conversazione del contatto cliccato


#### Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.   
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

##
- costruire uno sfondo con due colori
- il contenitore delle chat avra due sezioni:
  - a sinistra le chat thumb dove inseriamo: 
    - le informaizioni e icone del proprio profilo, la sezione notifiche, la barra per filtrare il nome, la lista di chat 
    - con l'array di oggetti inserisci un tot di chat con le varie proprietà
  - a destra nelle inseriamo: 
    - un div con le informazioni del destinatario e le icone per la messaggistica 
    - un div per la chat con i messaggi scritti dall'utente posizionati a destra e con sfondo verde, gli altri stanno a sinistra e hanno sfondo bianco 
    - un div per l'input del messaggio

- con vue creare un array di oggetti (che corrispondono alle chat thumb) con proprietà: avatar, nome, ultimo messaggio, orario. oltre queste informazioni visibili aggiungiamo la proprietà isActive per determinare quale chat tenere aperta.
