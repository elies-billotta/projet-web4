<template>
  <div class="side">
    <h2>Filtres</h2>
    <input type="text" v-model="year" placeholder="Enter a year" />
    <button v-if="search" @click="cleanSearch">Search</button>
  </div>
</template>

<script>
import LegoGallery from '@/components/LegoGallery.vue'
export default {
  name: "main",
  components: { LegoGallery },
  methods: {
    cleanSearch: function () {
      //api call with the year
    }
  }
}
</script>

<style>
.side {
  display: flex;
  flex-direction: column;
  background: #FFFBFF;
  border-radius: 0rem;
  border: 0.5vmin solid #05060f;
  box-shadow: 0.4rem 0.4rem #05060f;
  padding: 5rem;
}
</style>
