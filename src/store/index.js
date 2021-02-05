import { createStore } from "vuex";
import router from '../router/index';

import differenceInDays from 'date-fns/differenceInDays'

export default createStore({
  state: {
    authenticated: true,
    name: 'Store',

    currentUser: {
      firstName: 'Brad',
      lastName: 'Chase',
      username: 'bchase',
      password: 'password',
      companyName: 'CJS Heating and Air',
      role: 'moger-media-customer',
    },

    lastLogin: new Date('1/15/2021 07:09:10 pm PST'),

    // where do we start in the leads array?
    leadsOffset: 0,
    
    // how many leads should be returned?
    leadsPerPage: 15,

    // these are the leads to display
    leadsActiveSlice: [],
    
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
    
    
    // leads: [
    //   {id: 1, leadtype:'Sales',date: new Date('1/02/2021 08:09:10 pm PST'), contact: 'Donna Holmes', location: 'Capital City, TX, US', address: '2102 Meadows Parkway, Katy, TN 84586',phone: '2537077195', email: 'dholmes@gmail.com', chatId:3 
    //   },
    //   {id: 2, leadtype:'Sales',date: new Date('1/17/2021 08:09:10 pm PST'), contact: 'Davis Gladwell', location: 'Nashville, TN, US', address: '271 Oak St., Davis, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 2
    //   },
    //   {id: 3, leadtype:'Sales', date: new Date('12/15/2020 08:09:10 pm PST'), contact: 'Edgar Holgren', location: 'Grand Prairie, TN, US', address: '5667 Broad, Nashville, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 1
    //   },
    //   {id: 4, leadtype:'Sales',date: new Date('11/28/2020 08:09:10 pm PST'), contact: 'Dianna Furstenburg', location: 'Idlewild, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId: 4 
    //   },
    //   {
    //     id: 5, leadtype:'Sales',date: new Date('1/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 6, leadtype:'Service',date: new Date('1/7/2020 10:09:10 pm PST'), contact: 'Servo Servicio', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 7, leadtype:'Sales',date: new Date('1/04/2020 10:09:10 pm PST'), contact: 'Mickey Mantle', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 8, leadtype:'Sales',date: new Date('12/01/2020 10:09:10 pm PST'), contact: 'Judi Dench', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 9, leadtype:'Sales',date: new Date('1/29/2020 10:09:10 pm PST'), contact: 'Alice Munro', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 10, leadtype:'Sales',date: new Date('12/4/2020 10:09:10 pm PST'), contact: 'Allen Jacobs', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 11, leadtype:'Sales',date: new Date('11/15/2020 10:09:10 pm PST'), contact: 'Helen Pluckrose', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 12, leadtype:'Sales',date: new Date('1/2/2021 10:09:10 pm PST'), contact: 'Alicia Silverstone', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 13, leadtype:'Sales',date: new Date('11/1/2020 10:09:10 pm PST'), contact: 'Dave Cully', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 14, leadtype:'Sales',date: new Date('12/19/2020 10:09:10 pm PST'), contact: 'Alina Williams', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 15, leadtype:'Sales',date: new Date('11/19/2020 10:09:10 pm PST'), contact: 'Marsha Adams', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 16, leadtype:'Sales',date: new Date('2/1/2021 10:09:10 pm PST'), contact: 'Tyreek Hill', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 17, leadtype:'Sales',date: new Date('12/02/2020 10:09:10 pm PST'), contact: 'Mike Tyson', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 18, leadtype:'Sales',date: new Date('11/26/2020 10:09:10 pm PST'), contact: 'Andreas Botticelli', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 19, leadtype:'Sales',date: new Date('12/31/2020 10:09:10 pm PST'), contact: 'Mike Baker', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 20, leadtype:'Sales',date: new Date('11/17/2020 10:09:10 pm PST'), contact: 'Whitey Ford', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 21, leadtype:'Sales',date: new Date('2/1/2021 10:09:10 pm PST'), contact: 'Avdi Grimm', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 22, leadtype:'Sales',date: new Date('12/19/2020 10:09:10 pm PST'), contact: 'Gwen Stefani', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 23, leadtype:'Sales',date: new Date('11/21/2020 10:09:10 pm PST'), contact: 'Kanye West', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 24, leadtype:'Sales',date: new Date('12/17/2020 10:09:10 pm PST'), contact: 'Omar Little', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 25, leadtype:'Sales',date: new Date('11/30/2020 10:09:10 pm PST'), contact: 'Hanz Undfranz', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 26, leadtype:'Sales',date: new Date('1/19/2021 10:09:10 pm PST'), contact: 'Mahalia Jackson', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 27, leadtype:'Sales',date: new Date('2/2/2021 10:09:10 pm PST'), contact: 'Hosey Hoserson', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 28, leadtype:'Sales',date: new Date('11/30/2020 10:09:10 pm PST'), contact: 'Krystal Ball', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 29, leadtype:'Sales',date: new Date('2/3/2021 10:09:10 pm PST'), contact: 'Olivia Munster', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 30, leadtype:'Sales',date: new Date('2/2/2021 10:09:10 pm PST'), contact: 'Donna Baker', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 31, leadtype:'Sales',date: new Date('12/3/2020 10:09:10 pm PST'), contact: 'Thurman Munson', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 32, leadtype:'Sales',date: new Date('11/23/2020 10:09:10 pm PST'), contact: 'Chester Field', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 33, leadtype:'Sales',date: new Date('12/15/2020 10:09:10 pm PST'), contact: 'Phil Hellmuth', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 34, leadtype:'Sales',date: new Date('12/18/2020 10:09:10 pm PST'), contact: 'Betty White', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 35, leadtype:'Sales',date: new Date('12/15/2020 10:09:10 pm PST'), contact: 'TJ White', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 36, leadtype:'Sales',date: new Date('12/9/2020 10:09:10 pm PST'), contact: 'Sammy Davis', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 37, leadtype:'Sales',date: new Date('12/20/2020 10:09:10 pm PST'), contact: 'Fred First', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    //   {
    //     id: 38, leadtype:'Sales',date: new Date('12/21/2020 10:09:10 pm PST'), contact: 'Barry White', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chatId:''
    //   },
    // ],
    leads: [],

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
    getNumberOfLeadsPerTimeFrame(state, getters) {
      if(state.timeFrame === 'lastLogin') {
        return getters.getLeadsSinceLastLogin.length
      }

      if(state.timeFrame === 'last30') {
        return getters.getLeadsLast30.length
      }

      if (state.timeFrame === 'last60') {
        return getters.getLeadsLast60.length
      }
    },

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
        return getters.getLeadsSinceLastLogin.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
      }

      if(state.timeFrame === 'last30') {
        return getters.getLeadsLast30.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
      }

      if (state.timeFrame === 'last60') {
        return getters.getLeadsLast60.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
      }
    },

    getLeadsSinceLastLogin(state) {
      let leads = []
      state.leads.forEach( lead => {
        if (lead.date - state.lastLogin > 0) {
          leads.push(lead)
        }
      })
      return leads;
    },

    getLeadsLast30(state) {
      let leads = []
      state.leads.forEach( lead => {
        if (differenceInDays(new Date(), lead.date) < 31) {
          leads.push(lead)
        }
      })
      return leads;
    },

    getLeadsLast60(state) {
      let leads = []
      state.leads.forEach( lead => {
        if (differenceInDays(new Date(), lead.date) < 61) {
          leads.push(lead)
        }
      })
      return leads;
    },
  },

  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.active = navElement
    },

    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },

    SET_LEADS(state, leads) {
      state.leads = leads
    },

    SET_LEADS_ACTIVE_SLICE(state, activeSlice) {
      state.leadsActiveSlice = activeSlice
    },

    SET_LEADS_OFFSET(state, offset) {
      state.leadsOffset = offset
    },

    SET_TIME_FRAME(state, timeFrame) {
      state.timeFrame = timeFrame
    }
  },

  actions: {
    authenticate_login({commit}, loginInfo) {
      console.log('loginInfo', loginInfo);
      console.log('Need to call API to validate login' );
      commit('SET_AUTHENTICATED', true)
      router.push({name: 'Dashboard'})
    },

    change_account_info(_, accountInfo) {
      console.log('accountInfo', accountInfo);
    },

    previous_leads_active_slice({commit, state, getters}) {
      if (state.leadsOffset > 0) {
        commit('SET_LEADS_OFFSET', state.leadsOffset - state.leadsPerPage)
        commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrame)
      }
    },
    
    next_leads_active_slice({commit, state, getters}) {  
      commit('SET_LEADS_OFFSET', state.leadsOffset + state.leadsPerPage)
      commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrame)
    },

    initialize_leads_active_slice({commit, getters}) {
      commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrame)
    },

    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    load_leads_from_api({commit}, leads) {
      // const arrayToObject = (array, keyField) =>
      //   array.reduce((obj, item) => {
      //     obj[item[keyField]] = item
      //     return obj
      //   }, {})
      // console.log('date', new Date(leads[0].created_at))
      // console.log('convertedDate', new Date(parseInt(leads[0].raw_data.createdOn.substr(6)))
// new Date(parseInt(leads[0].raw_data.createdOn.substr(6))
      let extractLeadInfo = (lead) => {
        const {raw_data, ...rest} = lead
        return {...rest, date: new Date(parseInt(raw_data.createdOn.substr(6))), zipCode: raw_data.zipCode, name: raw_data.name}
      }
      commit('SET_LEADS', leads.map(extractLeadInfo))
    },

    register_dispute(_, dispute) {
      console.log('dispute.leadId', dispute.leadId);
      console.log('dispute.dispute', dispute.dispute);
    },

    register_support_request(_, supportRequest) {
      console.log('supportRequest', supportRequest);
      router.push({name: 'Dashboard'})
    },


    set_time_frame({commit, getters}, timeFrame) {
      commit('SET_TIME_FRAME', timeFrame)
      commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrame)
    },
  }

})

        