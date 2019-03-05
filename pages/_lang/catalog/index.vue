<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md4 xs12 class="mb-4">
        <v-img
          class="albumCover"
          max-width="400px"
          min-width="300px"
          :src="require(`~/assets/images/${catalog.album.navCover}`)"
        />
      </v-flex>
      <v-flex md6 xs12 class="mb-4">
        <Cover :item="catalog.album" />
      </v-flex>
      <v-flex md2></v-flex>
      <v-flex md3 xs12>
        <DetailList :items="catalog.album.details" />
        <v-flex class="mt-4 my-2">
          <h2 class="box-section-title">Content Owner</h2>
        </v-flex>
        <BrandCard :imageInfo="catalog.album.contentOwner.brandImage" :items="catalog.album.contentOwner.brandInfo"/>
        <v-flex class="mt-4 my-2">
          <h2 class="box-section-title">Artists</h2>
        </v-flex>
        <v-flex>
          <AvatarList :items="catalog.album.artists" />
        </v-flex>
      </v-flex>
      <v-flex md1></v-flex>
      <v-flex md6 xs12>
        <OrderedList :items="catalog.songs" :player="player" />
      </v-flex>
    </v-layout>
    <MusicNav :showPlayer="player"/>
  </v-container>
</template>

<script>
  import {mapState} from 'vuex'
  import Cover from '~/components/Cover.vue'
  import DetailList from '~/components/DetailList.vue'
  import OrderedList from '~/components/OrderedList.vue'
  import BrandCard from '~/components/BrandCard.vue'
  import AvatarList from '~/components/AvatarList.vue'
  import MusicNav from "../../../components/MusicNav";

  export default {
    async fetch ({ store }) {
      await store.dispatch('LOAD_CATALOG', 'db.json')
    },
    created() {
      // $on method will receive the updated count value from the sender component
      this.$nuxt.$on('PLAY', data => {
        this.$store.commit('setPlayer', 'true')
      });
    },
    data() {
      return {
      }
    },
    beforeDestroy() {
      // $off method will turned off the event listner
      this.$nuxt.$off('PLAY');
    },
    components: {
      MusicNav,
      Cover,
      DetailList,
      OrderedList,
      BrandCard,
      AvatarList
    },
    computed: mapState([
      'catalog',
      'player'
    ]),
  }
</script>
