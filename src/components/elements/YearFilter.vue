<template>
  <div id="yearFilter">
    <input type="range" min="1965" max="2024" step="1" v-model="year" @change="getGalleryYear"
      :disabled="!isRangeEnabled" />
    <p>{{ year }}</p>
    <input type="checkbox" id="scales" name="scales" v-model="isRangeEnabled" @change="emitRangeStatus" />
  </div>
</template>

<script>
export default {
  name: "YearFilter",
  props: {
    type: String,
  },
  data() {
    return {
      year: localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)).filters.year : "2024",
      isRangeEnabled: localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)).filters.isRangeEnabled : true,
    };
  },
  methods: {
    getGalleryYear() {
      const localStorageData = JSON.parse(localStorage.getItem(this.type)) || {}; 
      const filters = localStorageData.filters || {};
      filters.year = this.year;
      localStorage.setItem(this.type, JSON.stringify({ ...localStorageData, filters })); 
      this.$emit("year-changed", this.year);
    },
    emitRangeStatus() {
      const localStorageData = JSON.parse(localStorage.getItem(this.type)) || {};
      const filters = localStorageData.filters || {};
      filters.isRangeEnabled = this.isRangeEnabled;
      localStorage.setItem(this.type, JSON.stringify({ ...localStorageData, filters }));
      this.$emit("range-status-changed", this.isRangeEnabled);
    },
  },
};
</script>

<style>
#yearFilter {
  display: flex;
}
</style>
