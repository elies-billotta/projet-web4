<template>
  <div>
    <h3>Filtres</h3>
    <input v-model="search" @input="updateSearch" placeholder="Enter a name, reference..." />
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    updateSearch() {
        const filters = JSON.parse(localStorage.getItem("filters"));
        filters.search = this.search;
        localStorage.setItem("filters", JSON.stringify(filters));
        this.$emit("update:search", this.search);
    },
  },
  created() {
    const filters = JSON.parse(localStorage.getItem("filters"));
    this.search = filters.search;
  },
};
</script>
<style>
input {
  padding: 0.4rem 1.5rem;
  border: 0.3vmin solid #05060f;
  box-shadow: 0.2rem 0.2rem #05060f;
  font-family: "Public Sans", sans-serif;
  outline: none;
}
</style>
