<template>
  <div>
    <span class="title-1 xs12">{{item.title}}</span>
    <span class="title-2">{{item.subTitle}}</span>
    <div class="mt-2 text-1">
      <span v-if="item.artists" v-for="artist in item.artists" :key="artist.id">
          {{ artist.name }}<span v-if="artist.id+1 <= item.artists.length">, </span>
      </span>
    </div>
    <span class="mt-2 text-1">Release Type: {{item.releaseType}}</span>
    <p class="mt-4 text-1">
      {{item.description}}
    </p>
  </div>
</template>
<script>
  export default {
    props:['item']
  }
</script>
