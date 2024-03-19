<template>
    <Header></Header>
    <div class="content">
        <Collection/>
    </div>
    <Footer></Footer>
</template>

<script>
import LegoGallery from '@/components/LegoGallery.vue'
import Header from '@/components/Header.vue'
import Filter from '@/components/elements/Filter.vue'
import Footer from '@/components/Footer.vue'
import Collection from '@/components/Collection.vue'

export default {
    name: "CollectionPage",
    components: { LegoGallery, Header, Filter, Footer, Collection }
}
</script>

<style>
.content {
    display: flex;
    flex-direction: row;
}
</style>