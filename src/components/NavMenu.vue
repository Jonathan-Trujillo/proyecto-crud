<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/administracion">Administración</router-link>
    </nav>
  </div>


</template>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: #fff !important;
  text-decoration: none;
  padding: 8px 30px;
  border: 2px solid #fff;
  margin-right: 20px;
  border-radius: 50px;
}

nav a:hover,
nav a.router-link-exact-active:hover {
  background: #fff;
  color: #0055ff !important;
}

nav a.router-link-exact-active {
  color: #0055ff !important;
  background: #fff;
}
</style>

<script>

export default {
  drawer: null,
  name: 'NavMenu'
}

</script>