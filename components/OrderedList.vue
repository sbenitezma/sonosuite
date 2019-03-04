<template>
  <v-list two-line subheader>
    <v-list-tile
      v-for="item in items"
      :key="item.title"
      avatar
      @click=""
    >
      <v-list-tile-avatar>
        {{ item.id }}.
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        <v-list-tile-sub-title>
          <span v-for="artist in item.artists" :key="artist.id">
            {{ artist.name }}<span v-if="artist.id+1 <= item.artists.length">, </span>
          </span>
        </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-avatar>
        <span>{{item.duration}}</span>
      </v-list-tile-avatar>
      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1" @click="actionListItem(item.id)">keyboard_arrow_down</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>
<script>
  export default {
    props:['items'],
    methods: {
      actionListItem (itemId) {
        this.$nuxt.$emit('PLAY', itemId);
      }
    }
  }
</script>
