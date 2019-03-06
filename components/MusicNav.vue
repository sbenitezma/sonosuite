<template>
  <v-bottom-nav
    xs12
    :active.sync="showPlayer"
    :value="showPlayer !== 'false'"
    fixed
    color="orange darken-2"
  >
    <v-flex
      grow
      ma-1
    >
      <v-layout>
        <v-flex md1 xs2>
          <v-img
            class="mt-2"
            position="left left"
            min-width="36px"
            min-height="36px"
            max-width="36px"
            max-height="36px"
            :src="require('~/assets/images/image-album-cover.png')"
          />
        </v-flex>
        <v-flex md11 xs10 class="mb-2 ml-4">
          <div class="white--text">
            <div class="song-title">{{playSong.name}}</div>
            <div>
              <span class="song-text" v-for="artist in playSong.artists" :key="artist.id">
                {{ artist.name }}<span v-if="artist.id+1 <= playSong.artists.length">, </span>
              </span>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex shrink md1 class="mt-3 hidden-sm-and-down">
      <v-img
        :contain="true"
        class="mr-1"
        position="center center"
        max-width="20px"
        max-height="20px"
        aspect-ratio="1"
        :src="require('~/assets/icons/icons-bottom-player/icon-player-shuffle.svg')"
      />
    </v-flex>

    <v-flex shrink md1 class="mt-3 hidden-sm-and-down">
      <v-img
        class="mr-1"
        :contain="true"
        max-width="20px"
        max-height="20px"
        width="20px"
        height="20px"
        :src="require('~/assets/icons/icons-bottom-player/icon-player-prev.svg')"
      />
    </v-flex>

    <v-flex shrink xs2 md1 sm1 class="mt-2">
      <v-img
        :contain="true"
        max-width="40px"
        max-height="40px"
        width="40px"
        height="40px"
        :src="require('~/assets/icons/icons-bottom-player/icon-player-play.svg')"
      />
    </v-flex>
    <v-flex shrink md1 class="mt-3 hidden-sm-and-down">
      <v-img
        :contain="true"
        max-width="20px"
        max-height="20px"
        width="20px"
        height="20px"
        :src="require('~/assets/icons/icons-bottom-player/icon-player-next.svg')"
      />
    </v-flex>
    <v-flex shrink md2 class="mt-3 hidden-sm-and-down">
      <v-img
        :contain="true"
        max-width="20px"
        max-height="20px"
        width="20px"
        height="20px"
        :src="require('~/assets/icons/icons-bottom-player/icon-player-repeat.svg')"
      />
    </v-flex>
    <v-flex class="hidden-sm-and-down" grow pa-1 />
  </v-bottom-nav>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    props:['showPlayer', 'cover', 'title', 'artists'],
    computed: mapState([
      'playSong'
    ]),
  }
</script>
