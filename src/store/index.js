import { createStore } from "vuex";
import router from '../router/index.js'
import axios from 'axios'

import differenceInDays from 'date-fns/differenceInDays'

export default createStore({
  state: {
    name: 'Store',

    apiUrl: "https://codelifepro.herokuapp.com",

    currentUser: null,

    // where do we start in the leads array?
    leadsOffset: 0,
    
    // how many leads should be returned?
    leadsPerPage: 15,

    loginError: false,

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
    
    leads: null,

    leadsLastLogin: null,

    leadsLast30: null,

    leadsLast60: null,

    activeChat: null,

    activeLead: null,
  },
 
  getters: {
    
    
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

    SET_ACTIVE_CHAT(state, chat) {
      state.activeChat = chat
    },

    SET_ACTIVE_LEAD(state, lead) {
      state.activeLead = lead
    },

    SET_CURRENT_USER(state, currentUser) {
      state.currentUser = currentUser
    },

    SET_LEADS(state, leads) {
      state.leads = leads
    },

    // timeFrame is 'login' | 30 | 60
    SET_LEADS_LAST(state, {timeFrame, leads}) {
      state[`leadsLast${timeFrame}`] = leads
    },

    SET_LEADS_OFFSET(state, offset) {
      state.leadsOffset = offset
    },

    SET_TIME_FRAME(state, timeFrame) {
      state.timeFrame = timeFrame
    }
  },

  actions: {
    async authenticate_login({commit, state}, { email, password}) {
      try {
        let currentUser = await axios({
          method: 'get',
          url: `${state.apiUrl}/users/me`,
          headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
          },
        })
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser.data))
        commit('SET_CURRENT_USER', currentUser.data)
        console.log('router', router)
        router.push('/')
      } catch(e) {
        this.loginError = true
      }
    },

    async get_active_chat({ commit, state }, chatId) {
      let chat = await axios({
        method: 'get',
        url: `${state.apiUrl}/chats/${chatId}`,
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token
        },
      })
      commit('SET_ACTIVE_CHAT', chat.data)
    },

    async load_leads({ commit, state, dispatch }, companyId) {
      let leads = await axios({
        method: 'get',
        url: `${state.apiUrl}/leads`,
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token
        },
        params: {
          company_id: companyId
        },
      })
      commit('SET_LEADS', leads.data)
      dispatch('load_leads_last_login')
      dispatch('load_leads_last_30')
      dispatch('load_leads_last_60')
    },

    load_leads_last_login({ commit, state }) {
      let leads = []
      let lastLogins = 0
      state.leads.forEach( lead => {
        let lastLoginDate = new Date(state.currentUser.last_login_at)
        // console.log("🚀 ~ file: index.js ~ line 197 ~ load_leads_last_login ~ lastLoginDate", lastLoginDate)
        let leadDate = new Date(lead.generated_at)
        
        // console.log('Number of days in lastLogin', differenceInDays(leadDate, lastLoginDate))
        
        if (differenceInDays(leadDate, lastLoginDate) > 0) {
          lastLogins++
          leads.push(lead)
        }
      })
      console.log('lastLogins', lastLogins);
      
      commit('SET_LEADS_LAST',{timeFrame: 'Login', leads: leads})
    },
    
    load_leads_last_30({ commit, state }) {
      let leads = []
      let last30 = 0
      state.leads.forEach( lead => {
        let today = new Date()
        let leadDate = new Date(lead.generated_at)
        
        // console.log('Number of days in last30', differenceInDays(today, leadDate))
        
        if (differenceInDays(today, leadDate) <30) {
          last30++
          leads.push(lead)
        }
      })
      console.log('last30', last30);
      
      
      commit('SET_LEADS_LAST', {timeFrame: 30, leads: leads})
    },

    load_leads_last_60({ commit, state }) {
      let leads = []
      let last60 = 0
      let moreThan60 = 0
      state.leads.forEach(lead => {
        let today = new Date()
        let leadDate = new Date(lead.generated_at)
        if (differenceInDays(today, leadDate) > 60) {
          moreThan60++
        }

        // console.log('Number of days in last60', differenceInDays(today, leadDate))

        if (differenceInDays(today, leadDate) < 61) {
          last60++
          leads.push(lead)
        }
      })
      console.log('last60', last60)
      console.log('moreThan60', moreThan60)
      commit('SET_LEADS_LAST', {timeFrame: 60, leads: leads})
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

    set_current_user({ commit }, user) {
      commit('SET_CURRENT_USER', user)
    },

    set_time_frame({ commit }, timeFrame) {
      commit('SET_TIME_FRAME', timeFrame)
    },
  }

})

        