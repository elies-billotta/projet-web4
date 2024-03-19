<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import LegoGallery from '@/components/LegoGallery.vue'
import Header from '@/components/Header.vue'
import Filter from '@/components/elements/Filter.vue'
import Footer from '@/components/Footer.vue'


export default {
    name: "App",
    components: { LegoGallery, Header, Filter, Footer }
}
</script>

<style>
body {
    background-color: rgb(245, 245, 245);
}
</style>