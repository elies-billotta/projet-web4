<template>
    <div>
        <h2>Filtres</h2>
        <input v-model="search2" @input="updateSearch" placeholder="Enter a year, reference..." />
        <!-- <BaseButton name="Search"></BaseButton> -->
    </div>
</template>

<script>
import BaseButton from '@/components/elements/BaseButton.vue'
export default {
    name: "Filter",
    components: { BaseButton },
    data() {
        return {
            search2: "",
        };
    },
    methods: {
        updateSearch() {
            this.$emit('update:search', this.search2);
        }
    }
}
</script>
