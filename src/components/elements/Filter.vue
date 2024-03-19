<template>
  <div>
    <h3>Filtres</h3>
    <input class="searchBar" v-model="search" @input="updateSearch" placeholder="Enter a name, reference..." />
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    type: String,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    updateSearch() {
      const localStorageData = JSON.parse(localStorage.getItem(this.type)) || {}; // Récupérer les données du localStorage ou un objet vide
      const filters = localStorageData.filters || {}; // Récupérer les filtres ou un objet vide
      filters.search = this.search; // Mettre à jour la propriété search
      localStorage.setItem(this.type, JSON.stringify({ ...localStorageData, filters })); // Mettre à jour les données du localStorage en conservant les autres propriétés intactes
      this.$emit("update:search", this.search); // Émettre l'événement update:search
    },

  },
  created() {
    console.log(JSON.parse(localStorage.getItem(this.type)));
    const filters = JSON.parse(localStorage.getItem(this.type)).filters;
    this.search = filters.search;
    console.log(this.search)
  },
};
</script>
<style>
.searchBar {
  padding: 0.4rem 1.5rem;
  border: 0.3vmin solid #05060f;
  box-shadow: 0.2rem 0.2rem #05060f;
  font-family: "Public Sans", sans-serif;
  outline: none;
}
</style>
