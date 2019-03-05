<template>
  <v-card>
    <v-layout>
      <v-flex xs4>
        <v-img
          class="ml-4 mt-3 mr-2"
          max-width="75px"
          :src="require(`~/assets/images/${imageInfo.value}`)"
        />
      </v-flex>
      <v-flex xs8>
        <v-card-title primary-title>
          <v-flex class="pa-0" xs12
            v-for="item in items"
            :key="item.name"
          >
            <div v-if="item.name ==='title'">
              <h3 class="box-title">{{item.value}}</h3>
            </div>
            <div v-else>
              <span class="box-subtitle">{{item.name}}</span>
              <span class="box-subtitle">{{item.value}}</span>
            </div>
          </v-flex>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
  export default {
    props:['imageInfo', 'items', 'classAvatar', 'classHighlight']
  }
</script>
