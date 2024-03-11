<template>
  <div>
    <h2>Filtres</h2>
    <input
      v-model="search"
      @input="updateSearch"
      placeholder="Enter a name, reference..."
    />
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
      this.$emit("update:search", this.search);
    },
  },
};
</script>
<style>
input {
  padding: 0.4rem 1.5rem;
  border: 0.3vmin solid #05060f;
  box-shadow: 0.2rem 0.2rem #05060f;
  font-family: "Public Sans", sans-serif;
}
</style>
