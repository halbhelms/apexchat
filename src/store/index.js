import { createStore } from "vuex";
import router from '../router/index.js'
import axios from 'axios'

// import differenceInDays from 'date-fns/differenceInDays'

export default createStore({
  state: {
    name: "Store",

    apiUrl: process.env.VUE_APP_API_BASE,

    currentUser: null,

    // where do we start in the leads array?
    leadsOffset: 0,
    
    // how many leads should be returned?
    leadsPerPage: 15,

    leadsLastLogin: [],
    leadsLast30: [],
    leadsLast60: [],

    loading: false,

    loginError: false,
    
    active: 'dashboard',

    ApiBase: process.env.VUE_APP_API_BASE,
    
    videos: null,
    
    leads: null,

    activeChat: null,

    activeLead: null,

    timeFrame: "leadsLastLogin",
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

    SET_LEADS_ALL(state, leads) {
      state.leads = leads
    },

    SET_LEADS_LAST_LOGIN(state, leadsLastLogin) {
      state.leadsLastLogin = leadsLastLogin
    },

    SET_LEADS_LAST_30(state, leadsLast30) {
      state.leadsLast30 = leadsLast30
    },

    SET_LEADS_LAST_60(state, leadsLast60) {
      state.leadsLast60 = leadsLast60
    },

    SET_LEADS_OFFSET(state, offset) {
      state.leadsOffset = offset
    },

    SET_LOADING(state, val) {
      state.loading = val
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
        commit('SET_CURRENT_USER', currentUser.data)
        let videos = await axios({
          method: 'get',
          url: `${state.apiUrl}/videos?company_id=${state.currentUser.company_id}`,
          headers: {
            Authorization: `Basic ${btoa(email + ':' + password)}`
          },          
        })
        state.videos = videos.data
        console.log(state.videos)
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

    async load_leads_all({ commit,state }, companyId) {
      commit('SET_LOADING', true)
      let leads = await axios({
        method: 'get',
        url: `${state.apiUrl}/leads`,
        params: {
          company_id: companyId,
        },
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token 
        }
      })
      commit('SET_LEADS_ALL', leads.data)
      commit ('SET_LOADING', false)
    },
    async load_leads_last_login({ commit,state }, companyId) {
      commit('SET_LOADING', true)
      let leadsLastLogin = await axios({
        method: 'get',
        url: `${state.apiUrl}/leads`,
        params: {
          company_id: companyId,
          start_date: 'last_login'
        },
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token 
        }
      })
      commit('SET_LEADS_LAST_LOGIN', leadsLastLogin.data)
      commit ('SET_LOADING', false)
    },

    async load_leads_last_30({ commit,state }, companyId) {
      commit('SET_LOADING', true)
      let leadsLast30 = await axios({
        method: 'get',
        url: `${state.apiUrl}/leads`,
        params: {
          company_id: companyId,
          start_date: 'last_30'
        },
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token 
        }
      })
      commit('SET_LEADS_LAST_30', leadsLast30.data)
      commit ('SET_LOADING', false)
    },

    async load_leads_last_60({ commit,state }, companyId) {
      commit('SET_LOADING', true)
      let leadsLast60 = await axios({
        method: 'get',
        url: `${state.apiUrl}/leads`,
        params: {
          company_id: companyId,
          start_date: 'last_60'
        },
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token 
        }
      })
      commit('SET_LEADS_LAST_60', leadsLast60.data)
      commit ('SET_LOADING', false)
    },

    async load_leads({ dispatch }, companyId) {
      dispatch('load_leads_all', companyId)
      dispatch('load_leads_last_login', companyId)
      dispatch('load_leads_last_30', companyId)
      dispatch('load_leads_last_60', companyId)
    },

    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    register_dispute({ state }, dispute) {
      axios({
        method: 'post',
        url: `${state.apiUrl}/support`,
        params: {
          subject: dispute.title,
          message: dispute.message
        },
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token
        },
      })
    },

    register_support_request({ state }, supportRequest) {
      axios({
        method: 'post',
        url: `${state.apiUrl}/support`,
        params: supportRequest,
        headers: {
          'X-User-Email': state.currentUser.email,
          'X-User-Token': state.currentUser.authentication_token
        }
      })
      router.push({name: 'Dashboard'})
    },

    remove_active_chat({ commit }) {
      commit('SET_ACTIVE_CHAT', null)
    },

    remove_active_lead({ commit, dispatch }) {
      dispatch('remove_active_chat')
      commit('SET_ACTIVE_LEAD', null)
    },

    async set_active_chat({ commit, state }, chatId) {
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

    set_active_lead({ commit, dispatch, state }, leadId) {
      let activeLead = state.leads.find( lead => lead.id == leadId)
      commit('SET_ACTIVE_LEAD', activeLead)
      dispatch('set_active_chat', activeLead.chat_id)
    },

    set_current_user({ commit }, user) {
      commit('SET_CURRENT_USER', user)
      // router.push({name: 'Login'})
    },

    set_time_frame({ commit }, timeFrame) {
      commit('SET_TIME_FRAME', timeFrame)
    },
  }

})