<template>
  <v-card class="px-3 py-0">
    <v-card-text class="pt-2">
      <v-flex xs12 class="mt-4">
        <h3 class="box-section-title">Details</h3>
      </v-flex>
      <v-flex xs12 class="mt-2"
        v-for="item in items"
        :key="item.name"
        @click=""
      >
        <span class="box-subtitle-2 grey--text">{{item.name}}</span>
        <h4 class="box-title">{{item.value}}</h4>
      </v-flex>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:['items']
  }
</script>
