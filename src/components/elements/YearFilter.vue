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
    type: String, // Ajout de la prop pour spécifier le type (collection ou sets)
  },
  data() {
    return {
      year: localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)).filters.year : "2024",
      isRangeEnabled: localStorage.getItem(this.type) ? JSON.parse(localStorage.getItem(this.type)).filters.isRangeEnabled : true,
    };
  },
  methods: {
    getGalleryYear() {
      const localStorageData = JSON.parse(localStorage.getItem(this.type)) || {}; // Récupérer les données du localStorage ou un objet vide
      const filters = localStorageData.filters || {}; // Récupérer les filtres ou un objet vide
      filters.year = this.year; // Mettre à jour la propriété year
      localStorage.setItem(this.type, JSON.stringify({ ...localStorageData, filters })); // Mettre à jour les données du localStorage en conservant les autres propriétés intactes
      this.$emit("year-changed", this.year); // Émettre l'événement year-changed
    },
    emitRangeStatus() {
      const localStorageData = JSON.parse(localStorage.getItem(this.type)) || {}; // Récupérer les données du localStorage ou un objet vide
      const filters = localStorageData.filters || {}; // Récupérer les filtres ou un objet vide
      filters.isRangeEnabled = this.isRangeEnabled; // Mettre à jour la propriété isRangeEnabled
      localStorage.setItem(this.type, JSON.stringify({ ...localStorageData, filters })); // Mettre à jour les données du localStorage en conservant les autres propriétés intactes
      this.$emit("range-status-changed", this.isRangeEnabled); // Émettre l'événement range-status-changed
    },
  },
};
</script>

<style>
#yearFilter {
  display: flex;
}
</style>
