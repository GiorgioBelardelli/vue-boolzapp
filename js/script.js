const { createApp } = Vue;

createApp({
    data(){
        return{
            userMessage: "",
            nome: "",
            avatar:"",
            currentChat: 0,
            chat: [],
            userSearch: "",
            contacts: [
                {
                    name: 'Ciuchino',
                    avatar: './img/ciuchino.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fiona stasera non ce, birretta e Ciao Darwin?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Dai non fa la pussy',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Ho pisciato la draghessa, alle 20:00 sono da te!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fiona',
                    avatar: './img/Fiona.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ricorda di salutarmi la regina quando arrivi!',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Va bene Shrek',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Grazie, stasera arriva Ciuchino e mettiamo su un documentario',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Lord Farquaad',
                    avatar: './img/LordFarquaad.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Capisco ch siamo partiti con il piede sbagliato ma vorrei venire a vedere Ciao Darwin con voi!',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Non ti sentiresti a tuo agio nella mia palude',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Faró il buono, lo prometto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Il Gatto',
                    avatar: './img/IlGatto.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Gatto ore 20:00 da me che si vede Ciao Darwin!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'DAJEEEEEEEEEEEEEEEEE',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Zenzy',
                    avatar: './img/Zenzy.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: "ore 20:00. Palude. Ciao Darwin. Chiama anche l'uomo focaccina",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ci stiamo.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Pinocchio',
                    avatar: './img/PinocchioShrek.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fra che sfigato tuo padre',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ma tu madre',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Vabbé se vuoi ore 20:00 Ciao Darwin da me',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Re Harold',
                    avatar: './img/HaroldShrek.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'A Scemoooo',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: '🐸💀',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Regina Lillian',
                    avatar: './img/LillianShrek.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Bello de casa a che punto sta Fiona? in quella carrozza a cipolla demmerda non prende un cazzo',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Buongiorno regina, sua figlia é partita!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Ennamoo',
                            status: 'received'
                        }
                    ],
                    
                }
            ]
        }
    },
    methods:{
        changeChat(i){  
            this.nome = this.contacts[i].name;
            this.avatar = this.contacts[i].avatar;
            this.chat = this.contacts[i].messages;
            this.currentChat = i;
        },
        addMessage(){
            const newMessage = {
                date: "10/10/10 12:00",
                message: this.userMessage,
                status: "sent"
            }
            this.contacts[this.currentChat].messages.push(newMessage);
            this.userMessage = "";

            setTimeout(() =>{
                const answer = {
                    date: "",
                    message: "daje",
                    status: "received"
                }
                this.contacts[this.currentChat].messages.push(answer);
            }, 1000);
        },
        filterContacts(){
            this.userSearch = this.userSearch.toLowerCase();

            this.contacts.forEach(contact =>{
            contact.visible = contact.name.includes(this.userSearch);
            })
        }
        
    }
}).mount("#app")








