import { createStore } from "vuex";
import router from '../router/index';

export default createStore({
  state: {
    active: 'dashboard',
    lastLogin: new Date('12/29/2021 08:09:10 pm PST'),
    leads: [
      {id: 1, leadtype:'Sales',date: new Date('01/02/2021 08:09:10 pm PST'), contact: 'Donna Holmes', location: 'Capital City, TX, US', address: '2102 Meadows Parkway, Katy, TN 84586',phone: '2537077195', email: 'dholmes@gmail.com', chat: `[8:25:35 pm] Zach: Welcome to CJS Heating and Air! How can we help you?
[8:26:46 pm (71.0s)] Zach: Are you there?
[8:28:37 pm (110.6s)] Visitor: Hi I have a high efficiency furnace that is leaking water from the flue joints a couple of feet above the furnace. I have noticed some rust spots on top of the furnace.
[8:29:00 pm (23.2s)] Zach: I would be happy to help you. What city/state is the jobsite located in?
[8:29:33 pm (32.5s)] Visitor: Beaver creek ohio greene county
[8:29:40 pm (7.1s)] Zach: Okay. Before we proceed, may I have your phone number or email to better assist you?
[8:30:07 pm (27.3s)] Visitor: 937-336-7095
[8:30:16 pm (8.9s)] Zach: Thank you for the information. Are you the property owner?
[8:30:21 pm (5.5s)] Visitor: Yes
[8:30:34 pm (12.5s)] Zach: Great. May I have your name please?
[8:30:49 pm (15.3s)] Visitor: Bryan Larocca
[8:31:01 pm (11.6s)] Zach: Thanks, Bryan. One of our technicians can help with this. Would you like me to have them contact you?
[8:31:24 pm (23.1s)] Visitor: Yes
[8:31:41 pm (17.0s)] Zach: Perfect. I have forwarded your information to our office and you will be contacted as soon as possible. Is there anything else I can help you with?
[8:32:07 pm (26.0s)] Visitor: That was it thanks
[8:32:27 pm (20.0s)] Zach: You're most welcome, Bryan. Thank you for contacting CJS Heating & Air.
[8:33:02 pm (35.6s)] System: The chat session has ended.`
      },
      {id: 2, leadtype:'Sales',date: new Date('12/17/2020 08:09:10 pm PST'), contact: 'Davis Gladwell', location: 'Nashville, TN, US', address: '271 Oak St., Davis, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat: `[7:50:42 pm] Zach: Welcome to CJS Heating & Air! A live, real person is available to talk at no obligation. How can we help you?
[7:51:29 pm (47.1s)] Visitor: Trying to install a new GFCI at the end of a line... installed black to black, white to white, ground. Will not reset.
[7:52:07 pm (38.5s)] Zach: Hi, there. Let me see if I can get some information on that. Which of our electrical services are you interested in?
[7:53:33 pm (85.4s)] Visitor: Just need advice on adding a GFCI outlet for a new DW. The line is the old electrical line for a hardwired DW. converting to a plug
[7:54:08 pm (34.9s)] Visitor: We live in MN - sorry. I see that you are in CA. Nevermind.
[7:54:38 pm (30.9s)] Zach: No problem. Is there anything else I can help you with?
[7:54:55 pm (16.8s)] Visitor: Nope - sorry to bother. Have a good day.
[7:55:37 pm (41.7s)] Zach: Same to you. Thank you for contacting CJS Heating & Air.
[7:55:40 pm (3.3s)] System: The chat session has ended.`
      },
      {id: 3, leadtype:'Sales', date: new Date('12/15/2020 08:09:10 pm PST'), contact: 'Edgar Holgren', location: 'Grand Prairie, TN, US', address: '5667 Broad, Nashville, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat: `[7:39:12 pm] Zach: Welcome to CJS Heating & Air! A live, real person is available to talk at no obligation. How can we help you?
[7:40:05 pm (52.9s)] Visitor: i have a leak in my roof that is leaking thru my bedroom ceiling
[7:40:26 pm (21.3s)] Zach: I would be happy to help you. What zip code is the job site located in?
[7:40:43 pm (16.3s)] Visitor: 98388
[7:40:49 pm (5.9s)] Zach: Great! May I have your name please?
[7:41:05 pm (16.6s)] Visitor: kathy walker
[7:41:34 pm (29.0s)] Zach: Thanks, Kathy. May I have your phone number and email in case we need to contact you later?
[7:41:52 pm (17.7s)] Visitor: 253-468-1596 kwalker0926@comcast.net
[7:42:23 pm (30.8s)] Zach: Thanks. Can I ask how you heard about us?
[7:42:40 pm (17.6s)] Visitor: online
[7:43:05 pm (25.1s)] Zach: Okay. Are you a new or an existing customer?
[7:43:14 pm (9.1s)] Visitor: new customer
[7:43:34 pm (19.3s)] Zach: Alright. How soon are you looking to utilize our services?
[7:43:59 pm (25.2s)] Visitor: I have a leak. I would say that tomorrow would be great
[7:44:42 pm (43.2s)] Zach: Alright. Would you like to set up a consultation with one of our specialists who can answer your specific questions in detail?
[7:45:20 pm (37.8s)] Visitor: Yes
[7:45:39 pm (18.9s)] Zach: Okay. I have forwarded your information to our office and you will be contacted as soon as possible. Is there anything else I can help you with?
[7:45:57 pm (18.0s)] Visitor: no thank you
[7:46:04 pm (6.8s)] Zach: Thank you for contacting CJS Heating & Air.
[7:46:06 pm (2.0s)] System: The chat session has ended.`
      },
      {id: 4, leadtype:'Sales',date: new Date('11/28/2020 08:09:10 pm PST'), contact: 'Dianna Furstenburg', location: 'Idlewild, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat: `[5:44:12 pm] Zach: Welcome to Kanon Electric! How can we help you?
[5:44:36 pm (23.6s)] Visitor: I had my panel replaced this past summer. A breaker tripped and cannot reset
[5:45:26 pm (50.5s)] Zach: Okay. I'd be happy to help you. Is this for a residential or commercial property?
[5:45:35 pm (8.6s)] Visitor: Residential
[5:45:45 pm (10.6s)] Zach: Great. May I have your name please?
[5:45:56 pm (10.2s)] Visitor: Dwayne Bobbitt
[5:46:16 pm (20.3s)] Zach: Thank you, Dwayne. Before we proceed, may I have your phone number and email in case we need to contact you later?
[5:46:38 pm (22.0s)] Visitor: 206-310-1459 dwaynebobbitt@gmail.com
[5:47:18 pm (40.1s)] Zach: Thank you for contact details, Dwayne. Are you the property owner?
[5:47:29 pm (11.4s)] Visitor: Yes
[5:47:59 pm (29.5s)] Zach: Great. Which county and state is the jobsite located in?
[5:48:11 pm (12.4s)] Visitor: King County, WA
[5:49:10 pm (58.6s)] Zach: Okay. The next step would be for me to have one of our electricians contact you to schedule in-home consultation. Would you like me to have them contact you?
[5:49:27 pm (17.1s)] Visitor: Yes please
[5:49:42 pm (14.7s)] Zach: Sure. I have forwarded your information to our office and you will be contacted as soon as possible. Is there anything else I can help you with?
[5:49:57 pm (14.8s)] Visitor: No Thanks
[5:50:18 pm (21.9s)] Zach: You are welcome, Dwayne. Thank you for contacting Kanon Electric, Inc.
[5:50:23 pm (4.3s)] System: The chat session has ended.`
      },
      {
        id: 5, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 6, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 7, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 8, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 9, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 10, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 11, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 12, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 13, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
      {
        id: 14, leadtype:'Sales',date: new Date('12/27/2020 10:09:10 pm PST'), contact: 'Giovanni Ribisi', location: 'Tanglewood, TN, US', address: '563 Count Deiro St, Idlewild, TN', phone: '2537077195', email: 'dholmes@gmail.com', chat:''
      },
    ]
  },
  getters: {
    getLeadById (state) {
      return (id) => {
        return state.leads.find( lead => {
          return lead.id == id
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
