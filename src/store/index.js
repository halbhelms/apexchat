import { createStore } from "vuex";
import router from '../router/index';

import differenceInDays from 'date-fns/differenceInDays'

export default createStore({
  state: {
    currentUser: {
      firstName: 'Brad',
      lastName: 'Chase',
      username: 'bchase',
      password: 'password',
      companyName: 'CJS Heating and Air',
      role: 'moger-media-customer',
    },

    timeFrame: 'lastLogin',

    active: 'dashboard',

    videos: [
      `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/67hkx0ob00?videoFoam=true" title="FAQ_Disposal Care Video" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>`,

      `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_hib29wm9h6 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/hib29wm9h6/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`,

        `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_290f8sbgm7 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/290f8sbgm7/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`,

        `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_lxtll40z2a videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/lxtll40z2a/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`,

        `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_bfnz01syud videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/bfnz01syud/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`,

        `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_moe1ngjydt videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/moe1ngjydt/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`,

        `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_ki8jpas8mm videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/ki8jpas8mm/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`
    ],
    
    lastLogin: new Date('12/29/2020 08:09:10 pm PST'),
    
    leads: [
      {id: 1, leadtype:'Sales',date: new Date('1/02/2021 08:09:10 pm PST'), contact: 'Donna Holmes', location: 'Capital City, TX, US', address: '2102 Meadows Parkway, Katy, TN 84586',phone: '2537077195', email: 'dholmes@gmail.com', chatId:3 
      },
      {id: 2, leadtype:'Sales',date: new Date('1/17/2021 08:09:10 pm PST'), contact: 'Davis Gladwell', location: 'Nashville, TN, US', address: '271 Oak St., Davis, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 2
      },
      {id: 3, leadtype:'Sales', date: new Date('12/15/2020 08:09:10 pm PST'), contact: 'Edgar Holgren', location: 'Grand Prairie, TN, US', address: '5667 Broad, Nashville, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 1
      },
      {id: 4, leadtype:'Sales',date: new Date('11/28/2020 08:09:10 pm PST'), contact: 'Dianna Furstenburg', location: 'Idlewild, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 4 
      },
      {
        id: 5, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 6, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 7, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 8, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 9, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 10, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 11, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 12, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 13, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
      },
      {
        id: 14, leadtype:'Sales',date: new Date('8/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
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
    getChatById(state) {
      return (id) => {
        return state.chats.find( chat => {
          return chat.id == id
        })
      }
    },

    getLeadById (state) {
      return (id) => {
        return state.leads.find( lead => {
          return lead.id == id
        })
      }
    },

    getLeadsForTimeFrame(state, getters) {
      if(state.timeFrame === 'lastLogin') {
        return getters.getLeadsSinceLastLogin
      }

      if(state.timeFrame === 'last30') {
        return getters.getLeadsLast30
      }

      if (state.timeFrame === 'last60') {
        return getters.getLeadsLast60
      }

    },

    getLeadsSinceLastLogin(state) {
      let leads = []
      state.leads.forEach( lead => {
        console.log(lead.date - state.lastLogin)
        if (lead.date - state.lastLogin > 0) {
          leads.push(lead)
        }
      })
      return leads;
      // return ['hmmmm']
    },

    getLeadsLast30(state) {
      let leads = []
      state.leads.forEach( lead => {
        console.log(differenceInDays(new Date(), lead.date))
        if (differenceInDays(new Date(), lead.date) < 31) {
          leads.push(lead)
        }
      })
      return leads;
      // return ['hmmmm']
    },

    getLeadsLast60(state) {
      let leads = []
      state.leads.forEach( lead => {
        console.log(differenceInDays(new Date(), lead.date))
        if (differenceInDays(new Date(), lead.date) < 61) {
          leads.push(lead)
        }
      })
      return leads;
      // return ['hmmmm']
    },
  },

  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.active = navElement;
    },

    SET_TIME_FRAME(state, timeFrame) {
      state.timeFrame = timeFrame;
    }
  },

  actions: {
    change_account_info(_, accountInfo) {
      console.log('accountInfo', accountInfo);
    },
    
    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    register_dispute(_, dispute) {
      console.log('dispute.leadId', dispute.leadId);
      console.log('dispute.dispute', dispute.dispute);
    },

    register_support_request(_, supportRequest) {
      console.log('supportRequest', supportRequest);
      router.push({name: 'Dashboard'})
    },

    set_timeframe({commit}, timeFrame) {
      commit('SET_TIME_FRAME', timeFrame)
    }
  }

})

        