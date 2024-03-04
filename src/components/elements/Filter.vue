<template>
    <div>
        <h2>Filtres</h2>
        <input type="text" v-model="year" placeholder="Enter a year, reference..." />
        <BaseButton name="Search"></BaseButton>
    </div>
</template>
  
<script>
import BaseButton from '@/components/elements/BaseButton.vue'
export default {
    name: "main",
    components: { BaseButton },
    methods: {
        cleanSearch: function () {
            //api call with the year
        }
    }
}
</script>