<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div style="width:100%;" >
        <NavMenu/>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavMenu from './components/NavMenu.vue'

export default {
  name: 'App',

  data: () => ({
    //
  }),
    components: {
    NavMenu
},
};
</script>
