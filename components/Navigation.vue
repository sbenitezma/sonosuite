<template>
  <div>
    <v-navigation-drawer
      v-model="drawer.open"
      :mini-variant="drawer.miniVariant"
      :clipped="drawer.clipped"
      fixed
      app
    >
      <v-img
        class="ma-5 hidden-md-and-down"
        max-width="250px"
        :src="require('~/assets/images/la-cupula-logo.png')"
      />
      <v-divider />
      <v-list>
        <v-list-tile
          v-for="(item, i) in menu"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-img
              class="deep-orange--text navigation-color"
              :src="require('~/assets/icons/icon-menu-'+item.icon+'.svg')"
              max-width="24px"
            />

          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="navigation-font" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="hidden-lg-and-up"
      :clipped-left="drawer.clipped"
      fixed
      app
    >
      <v-img
        class="ma-3"
        position="left left"
        max-width="150px"
        :src="require('~/assets/images/la-cupula-logo.png')"
      />
      <v-spacer />
      <v-toolbar-side-icon @click="drawer.open = !drawer.open" />
    </v-toolbar>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState([
      'menu'
    ]),
    data() {
      return {
        drawer: {
          // sets the open status of the drawer
          open: true,
          // sets if the drawer is shown above (false) or below (true) the toolbar
          clipped: false,
          // sets if the drawer is CSS positioned as 'fixed'
          fixed: false
        },
        toolbar: {
          //
          fixed: true,
          // sets if the toolbar contents is leaving space for drawer (false) or not (true)
          clippedLeft: false
        },
      }
    }
  }
</script>

