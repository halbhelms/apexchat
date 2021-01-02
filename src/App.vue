<template>
  <div class="outer-wrapper">
    <Header />
    <div class="inner-wrapper">
      <div class="sidenav">
        <div></div>
        <Dashboard />
        <Leads />
        <Videos />
        <CustomerSupport />
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
import CustomerSupport from './components/sidenav/CustomerSupport'
import Header from './components/site/Header'
  
  export default {
    name: 'App',
    components: {
      Dashboard,
      Leads,
      Videos,
      CustomerSupport,
      Header
    }
  }
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Dosis', sans-serif;
/* font-family: 'Mukta', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  height: 100vh;
}

.header {
  border-bottom: 1px solid silver;
}

.sidenav {
  display: grid;
  grid-template-rows: repeat(5, 50px);
  background-color:rgb(0,138,230);
  height: 100vh;
}

html, body {
  height: 100vh !important;
}



main {
  height: 100vh;
}
</style>
