<template>
  <div class="outer-wrapper">
    <Header v-if="$store.state.authenticated"/>
    <div class="inner-wrapper">
      <div v-if="$store.state.authenticated" class="sidenav">
        <div></div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Dashboard'}">
            <Dashboard />
          </router-link>
        </div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Leads'}">
            <Leads />
          </router-link>
        </div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Videos'}">
            <Videos />
          </router-link>
        </div>
        <div class="sidebar-element">
          <router-link :to="{name: 'Support'}">
            <Support />
          </router-link>
        </div>
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/sidenav/Dashboard'
import Leads from './components/sidenav/Leads'
import Videos from './components/sidenav/Videos'
import Support from './components/sidenav/Support'
import Header from './components/site/Header'

import axios from 'axios'
  
  export default {
    name: 'App',
    components: {
      Dashboard,
      Leads,
      Videos,
      Support,
      Header
    },

    watch: {
      $route(to) {
        let namedRoute = to.matched[0].name
        let activeNav = ''
        if (namedRoute === 'Support') {
          activeNav = 'support'
        }
        if (namedRoute === 'Dashboard') {
          activeNav = 'dashboard'
        }
        if (namedRoute === 'Leads') {
          activeNav = 'leads'
        }
        if (namedRoute === 'Videos') {
          activeNav = 'videos'
        }
        this.$store.dispatch('set_active_nav', activeNav)
      },
    },

    async mounted() {
      const leads = await axios({
        method: 'get',
        url: 'https://codelifepro.herokuapp.com/leads',
        headers: {
          'X-User-Email': 'jquarto@berkees.com',
          'X-User-Token': 'qEn8jQq3Ar7RyErpxtLU'
        }
      })
      await this.$store.dispatch('load_leads_from_api', leads.data)
      await this.$store.dispatch('initialize_leads_active_slice')
      console.log('leads', this.$store.state.leads)
      console.log('slice', this.$store.getters.getLeadsForTimeFrame)
    },

    provide: {
      __randomId: function(length) {
        let result           = ''
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
    },


  }
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', sans-serif;
/* font-family: 'Mukta', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

html {
  height: 100vh;
}

* {
  box-sizing: border-box;
}

h1 {
  font-weight: 600;
}

.outer-wrapper {
  display: grid;
  grid-template-rows: 70px auto;
  height: 100vh;
}

.inner-wrapper {
  display: grid;
  grid-template-columns: 180px auto;
  /* min-height: 100vh; */
}

.header {
  border-bottom: 1px solid silver;
}

.sidenav {
  display: grid;
  grid-template-rows: repeat(6, 50px);
  background-color:rgb(0,138,230);
  position: relative;
  min-height: 100vh;
}

.sidebar-nav-element:hover {
  
}

html, body {
  min-height: 100vh !important;
}
</style>
