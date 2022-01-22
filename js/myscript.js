/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

*/
let app = new Vue({
    el: '#myvueboolzapp',
    data: {
        chatselected: 0,
        sentmessages: "",
        textinsearch: "",
        deletemexi: 0,
        contacts: [
            {
            name: 'Michela',
            avatar: 'img/2.png',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    deleteoption: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    deleteoption: false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    deleteoption: false
                    }
                    ],
            },
            {
            name: 'Fabio',
            avatar: 'img/3.png',
            visible: true,
            messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    deleteoption: false
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    deleteoption: false
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    deleteoption: false
                    }
                    ],
            },
            {
            name: 'Samuela',
            avatar: 'img/4.png',
            visible: true,
            messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received',
                    deleteoption: false
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    deleteoption: false
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received',
                    deleteoption: false
                    }
                    ],
            },
            {
            name: 'Giorgio',
            avatar: 'img/5.png',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    deleteoption: false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    deleteoption: false
                    }
                    ],
                },
            ]
    },

    methods:{
        chatswitch: function(index) {
                this.chatselected = index;
        },

        sendmex: function(){
                if(this.sentmessages !=''){
                        this.contacts[this.chatselected].messages.push(
                {
                    date: dayjs().format("DD/MM/YYYY HH.mm.ss"),
                    text: this.sentmessages,
                    status: 'sent'
                    });
                this.sentmessages = "";
                }

                setTimeout(() => {
                        this.contacts[this.chatselected].messages.push(
                        {
                                date: dayjs().format("DD/MM/YYYY HH.mm.ss"),
                                text: "ok",
                                status: 'received'
                        });
                }, 1000);
        },

        searchcontactbytext: function() {
                let nameTextSearch = this.textinsearch.toLowerCase();
                this.contacts.forEach(i => {
                  if (i.name.toLowerCase().includes(nameTextSearch)) {
                    i.visible = true;
                  }else {
                    i.visible = false;
                  }
                });
        },

        deletemex: function(del) {
                this.contacts[this.deletemexi].messages.splice(del, 1);
        },

        infomex: function() {
                alert("Stai chattando con " + this.contacts[this.chatselected].name);
        },

        scroll: function() {
                const chat = document.querySelector('.conversation-box');
                chat.scrollTop = chat.scrollHeight;
        
        }
    },
    
    updated: function() {
            this.scroll();
    },
  })