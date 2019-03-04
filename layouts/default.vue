<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="true"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {Navigation},
}
</script>
