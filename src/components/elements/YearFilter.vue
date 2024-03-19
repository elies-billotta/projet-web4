<template>
    <div id="yearFilter">
        <input type="range" min="1965" max="2024" step="1" v-model="year" @change="getGalleryYear" />
        <p>{{ year }}</p>
    </div>
</template>
<script>
export default {
  name: "YearFilter",
  data() {
    return {
      year: localStorage.getItem("filters") ? JSON.parse(localStorage.getItem("filters")).year : "2024",
    };
  },
  methods: {
    getGalleryYear() {
        //push year to localStorage filters array
        const filters = JSON.parse(localStorage.getItem("filters"));
        filters.year = this.year;
        localStorage.setItem("filters", JSON.stringify(filters));
      // Émettre un événement personnalisé avec la nouvelle valeur de year
      this.$emit("year-changed", this.year);
    },
  },
};
</script>

<style>

#yearFilter {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
}

</style>