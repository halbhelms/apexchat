<template>
  <div class="outer-wrapper">
    <div class="header">Header</div>
    <div class="inner-wrapper">
      <div class="sidenav">Sidenav</div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.outer-wrapper {
  outline: 1px solid black;
  display: grid;
  grid-template-rows: 180px auto;
}

.inner-wrapper {
  outline: 1 px solid green;
  display: grid;
  grid-template-columns: 240px auto;
}

.sidenav {
  outline: 1 px solid purple;
}

main {
  outline: 1px solid red;
}
</style>
