<template>
  <v-list two-line subheader class="pa-4">
    <v-list-tile
      v-for="item in items"
      :key="item.name"
      avatar
      @click=""
      class="mb-3 mt-3"
    >
      <v-list-tile-avatar class="mr-4 my-2">
        <v-badge color="orange" :overlap="true">
          <template v-if="item.highlight" v-slot:badge>
            <v-icon dark small>star</v-icon>
          </template>
          <v-avatar
            size="80px"
          >
            <v-img
              :src="require('~/assets/images/'+item.logo)"
            />
          </v-avatar>
        </v-badge>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.position }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>
<script>
  export default {
    props:['items']
  }
</script>
