<template>
  <Header></Header>
  <div class="content">
    <LegoGallery view="gallery"/>
  </div>
  <Footer></Footer>
</template>

<script>
import LegoGallery from '@/components/LegoGallery.vue'
import Header from '@/components/Header.vue'
import Filter from '@/components/elements/Filter.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: "GalleryPage",
  components: { LegoGallery, Header, Filter, Footer }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
}
</style>
