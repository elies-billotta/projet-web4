<template>
    <div>
      <select v-model="selectedTheme" @change="updateTheme">
        <option value="">-- Choisissez un thème --</option>
        <option v-for="theme in themes" :key="theme.id" :value="theme.name">
          {{ theme.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  import { getAllThemes } from '@/api/getAllThemes';
  
  export default {
    name: "List",
    data() {
      return {
        themes: [],
        selectedTheme: "",
      };
    },
    created() {
      this.retrieveSetData();
    },
    methods: {
      async retrieveSetData() {
        this.themes = await getAllThemes();
        console.log(this.themes);
      },
      updateTheme() {
        this.$emit("update:selectedTheme", this.selectedTheme);
        console.log(this.selectedTheme);
      },
    },
  };
  </script>
  