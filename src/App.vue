<template>
  <Header></Header>
  <div class="content">
    <LegoGallery />
  </div>
  <Footer></Footer>
  <div class="background"></div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import LegoGallery from '@/components/LegoGallery.vue'
import Header from '@/components/Header.vue'
import Filter from '@/components/elements/Filter.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "main",
  components: { LegoGallery, Sidebar, Header, Filter, Footer }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
  background-color: rgb(245, 245, 245);
}
</style>
