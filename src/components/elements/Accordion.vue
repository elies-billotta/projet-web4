<template>
  <div>
    <button class="accordion">Themes</button>
    <div v-for="theme in themes" :key="theme.id">
      <input
        type="checkbox"
        :id="theme.id"
        :value="theme.id"
        v-model="selectedThemes"
        @change="updateTheme(theme.id, $event.target.checked)"
      />
      <label :for="theme.id">{{ theme.name }}</label>
    </div>
  </div>
</template>

<script>
import { getAllThemes } from "@/api/getAllThemes";

export default {
  name: "Accordion",
  data() {
    return {
      themes: [],
      selectedThemes: [],
    };
  },
  created() {
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData() {
      const allThemes = await getAllThemes();
      const parentsIds = [];
      allThemes.forEach((theme) => {
        if (theme.parent_id == null) parentsIds.push(theme);
      });
      console.log("parents", parentsIds);
      allThemes.forEach((theme) => {
        parentsIds.forEach((parent) => {
          if (theme.parent_id == parent.id) {
            if (!this.themes[parent]) {
              this.themes[parent] = [];
            }
            this.themes[parent].push(theme);
          }
          // else if (!(theme.parent_id == null)) this.themes.push(theme);
        });
      });
      console.log("themes : ", this.themes);
    },

    updateTheme(themeId, checked) {
      const index = this.selectedThemes.indexOf(themeId);
      if (checked && index === -1) {
        this.selectedThemes.push(themeId); // Ajoute le thème si la case est cochée et n'existe pas déjà
      } else if (!checked && index !== -1) {
        this.selectedThemes.splice(index, 1); // Retire le thème si la case est décochée et existe déjà
      }
      const selectedThemess = this.themes.filter((theme) =>
        this.selectedThemes.includes(theme.id)
      );
      this.$emit("update:selectedThemes", selectedThemess);
    },
  },
};
</script>
