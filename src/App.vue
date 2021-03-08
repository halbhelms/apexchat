<template>
  <login-form v-if="!loggedIn"></login-form>

  <div class="outer-wrapper" v-else>
    <Header v-if="$store.state.currentUser"/>
    <div class="inner-wrapper">
      <div v-if="$store.state.currentUser" class="sidenav">
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
import LoginForm from './views/LoginForm'
  
  export default {
    name: 'App',
    components: {
      Dashboard,
      Leads,
      Videos,
      Support,
      Header,
      LoginForm
    },

    computed: {
      loggedIn() {
        return typeof JSON.parse(sessionStorage.getItem('currentUser')) !== 'undefined'
      }
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
