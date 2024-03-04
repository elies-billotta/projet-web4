<template>
  <div class="side">
    <Filter></Filter>
  </div>
</template>

<script>
import Filter from '@/components/elements/Filter.vue'
import BaseButton from '@/components/elements/BaseButton.vue'
export default {
  name: "main",
  components: { Filter, BaseButton },
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
  border: 0.1rem solid #05060f;
  border-bottom: 0;
  border-top: 0;
  border-left: 0;
  padding: 1rem;
}
</style>
