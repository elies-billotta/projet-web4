<template>
  <Header></Header>
  <div class="content">
    <Search></Search>
    <LegoGallery />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import LegoGallery from '@/components/LegoGallery.vue'
import Header from '@/components/Header.vue'
export default {
  name: "main",
  components: { LegoGallery, Search, Header },
  methods: {
    cleanSearch: function () {

    }
  }
}

</script>

<style>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
