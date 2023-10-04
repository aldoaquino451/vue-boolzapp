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

#### Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

#### Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


## HTML e JavaScript

**MILESTONE 1**
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


**MILESTONE 2 E 3**
- cicliamo nell'html tutti gli oggetti contenuti in messages con v-for così tramite data e message assegniamo i valori del testo e della data di invio mentre con status verifichiamo chi ha inviato il messaggio e quindi il colore di background
- tutte gli elementi chat dovranno essere nascosti tranne il primo 
- alle thumb chat aggiungiamo una funzione al click, questa funzione ci permetterà di aggiugnere la classe hide all'elemento chat corrispondente e attiverà la thumb (modificando il background)
- assegnamo all'input un v-model e dentro una variabile per salvare il dato inserito
    - con una funzione che si attiva con il tasto enter pushamo un nuovo oggetto dentro l'array messages corrispondente al contatto della chat corrispondete
    - il testo sarà dato dall'input, per la data salviamo la data corrente in una costante, lo status sarà di default sent
- alla funzione richiamata con enter deve partire un settimeout di 1000 ms in cui verrà visualizzato un messaggio con 
    - testo ok, status received, e data sempre quella corrente


**MILESTONE 4 E 5**
- creaiamo una funzione per restituire l'ultimo messaggio che compare in chat (quindi l'ultimo elemento dell'array messages)
- da questo messaggio richiamiamo nell'html il testo e la data
    - dalla data recuperiamo con uno slice solo la parte che ci interessa, ovvero l'orario 
    - per inserire la data nei nuovi messaggi, salvo in una costante l'ora e data attuale formattata come nei dati iniziali (l'array contacts)
- aggiugniamo un vento click allo chevron che si trova sui messaggi della chat
    - cliccando si aprirà una finestra con la possibilità di cancellare l'oggetto (o nasconderlo?) dall'array messages
- consideriamo tutti i nomi dei contatti come fossero un array di stringhe
    - nell'input colleghiamo una variabile che andrà nella funzione filter
    - la funzione filter dovrà restituire solo gli elementi che contengono (includes??) la stinga inserita nell'input
    - aggiugniamo una flag false a tutti i nomi mentre a quelli restituiti un flag true, in base alla flag la chat thumb appare e scompare

