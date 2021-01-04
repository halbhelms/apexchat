import { createStore } from "vuex";
import router from '../router/index';

export default createStore({
  state: {
    active: 'dashboard',
    lastLogin: new Date('12/29/2021 08:09:10 pm PST'),
    leads: [
      {id: 1, leadtype:'Sales',date: new Date('01/02/2021 08:09:10 pm PST'), contact: 'Donna Holmes', location: 'Capital City, TX, US', address: '2102 Meadows Parkway, Katy, TN 84586',phone: '2537077195', email: 'dholmes@gmail.com', chatId:3 
      },
      {id: 2, leadtype:'Sales',date: new Date('12/17/2020 08:09:10 pm PST'), contact: 'Davis Gladwell', location: 'Nashville, TN, US', address: '271 Oak St., Davis, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 2
      },
      {id: 3, leadtype:'Sales', date: new Date('12/15/2020 08:09:10 pm PST'), contact: 'Edgar Holgren', location: 'Grand Prairie, TN, US', address: '5667 Broad, Nashville, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 1
      },
      {id: 4, leadtype:'Sales',date: new Date('11/28/2020 08:09:10 pm PST'), contact: 'Dianna Furstenburg', location: 'Idlewild, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 4 
      },
      {
        id: 5, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 6, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 7, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 8, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 9, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 10, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 11, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 12, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 13, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 14, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
    ],
    chats: [
      {
        id: 1,
        texts: [
          {
            participantDisplayName: 'Zach',
            text: "Welcome to CJS Heating & Air! A live, real person is available to talk at no obligation. How can we help you?"
          },
          { participantDisplayName: 'Visitor',
            text: "i have a leak in my roof that is leaking thru my bedroom ceiling"
          },
          {
            participantDisplayName: 'Zach',
            text: "I would be happy to help you. What zip code is the job site located in?"
          },     
          { participantDisplayName: 'Visitor',
            text: "98388"
          }, 
          {
            participantDisplayName: 'Zach',
            text: " Great! May I have your name please?"
          },                        
          { participantDisplayName: 'Visitor',
            text: "kathy walker"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Thanks, Kathy. May I have your phone number and email in case we need to contact you later?"
          },    
          { participantDisplayName: 'Visitor',
            text: " 253-468-1596 kwalker0926@comcast.net"
          },  
          {
            participantDisplayName: 'Zach',
            text: "Thanks. Can I ask how you heard about us?"
          },                        
          { participantDisplayName: 'Visitor',
            text: "online"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Okay. Are you a new or an existing customer?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "new customer"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Alright. How soon are you looking to utilize our services?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "I have a leak. I would say that tomorrow would be great"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Alright. Would you like to set up a consultation with one of our specialists who can answer your specific questions in detail?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "Yes"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Okay. I have forwarded your information to our office and you will be contacted as soon as possible. Is there anything else I can help you with?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "no thank you"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Thank you for contacting CJS Heating & Air."
          },          
          {
            participantDisplayName: 'System',
            text: "The chat session has ended"
          },          
        ]
      }
    ]
  },
  getters: {
    getLeadById (state) {
      return (id) => {
        return state.leads.find( lead => {
          return lead.id == id
        })
      }
    },

    getChatById(state) {
      return (id) => {
        console.log('id', id);
        
        return state.chats.find( chat => {
          console.log('chat.id', chat.id);
          
          return chat.id == id
        })
      }
    }
  },

  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.active = navElement;
    }
  },

  actions: {
    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    register_support_request(_, supportRequest) {
      console.log('supportRequest', supportRequest);
      router.push({name: 'Dashboard'})
    }
  },
  modules: {}
});
