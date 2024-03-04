<template>
    <div class="list">
        <input v-model="search" />
        <LegoCard v-for="lego in searchSet" :key="lego.set_num" :set_num="lego.set_num" :name="lego.name"
            :num_parts="lego.num_parts" :year="lego.year" :set_img_url="lego.set_img_url" />
    </div>
</template>
<script>
import { getSetMinYear } from '@/api/getSetMinYear.js'
import LegoCard from '@/components/LegoCard.vue'
import BaseButton from '@/components/elements/BaseButton.vue';

export default {
    name: 'LegoGallery',
    components: { BaseButton },
    data() {
        return {
            legoList: [],
            search: "",
        };
    },
    computed: {
        searchSet: function () {
            return this.legoList.filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    created: function () {
        this.retrieveSetData();
    },
    methods: {
        async retrieveSetData() {
            this.legoList = await getSetMinYear("2023", 1);
            console.log(this.legoList);
        }
    },
    components: { LegoCard, BaseButton }
}
</script>

<style>
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>