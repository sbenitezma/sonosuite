<template>
  <v-list two-line subheader>
    <v-list-tile
      v-for="item in items"
      :key="item.title"
      avatar
      @click="actionListItem(item)"
    >
      <v-list-tile-avatar @click="actionListItem(item)">
        <v-icon v-if="item.active === 'true'" color="orange darken-2" class="material-icons playerSong">format_align_right</v-icon>
        <span v-else class="box-title-2"> {{ item.id }}.</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-bind:class="item.active === 'true' ? 'orange--text text--darken-2 box-title-2' : 'box-title'">{{ item.name }}</v-list-tile-title>
        <v-list-tile-sub-title>
          <span v-for="artist in item.artists" :key="artist.id" class="box-subtitle">
            {{ artist.name }}<span v-if="artist.id+1 <= item.artists.length">, </span>
          </span>
        </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-avatar>
        <span class="box-subtitle">{{item.duration}}</span>
      </v-list-tile-avatar>
      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1" @click="actionListItem(item)">keyboard_arrow_down</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    props:['items'],
    methods: {
      actionListItem (item) {
        this.$store.commit('setPlaySong', item)
        this.$nuxt.$emit('PLAY', item);
      }
    },
    computed: mapState([
      'playSong'
    ]),
  }
</script>
