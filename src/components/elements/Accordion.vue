<template>
  <BaseButton name="Themes" @click="toggleAccordion" />
  <div class="panel" v-if="isAccordionOpen">
    <div class="theme-btn" v-for="theme in themes" :key="theme.id">
      <input type="checkbox" :id="theme.id" :value="theme.id" :checked="selectedThemes.includes(theme.id)"
        @change="updateTheme(theme.id, $event.target.checked)" />
      <div class="themeInList"><label :for="theme.id">{{ theme.name }}</label></div>
    </div>
  </div>
  <BaseButton name="Reset" v-on:click="resetSelectedThemes" />
</template>

<script>
import { getAllThemes } from "@/api/getAllThemes";
import BaseButton from "@/components/elements/BaseButton.vue";

export default {
  name: "Accordion",
  data() {
    return {
      themes: [],
      selectedThemes: [],
      isAccordionOpen: false,
    };
  },
  components: { BaseButton },
  created() {
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData() {
      const allThemes = await getAllThemes();
      allThemes.sort((a, b) => a.id - b.id);
      const parentMap = {};
      allThemes.forEach((theme) => {
        if (theme.parent_id === null) {
          this.themes.push({
            id: theme.id,
            name: theme.name,
            children: [],
          });
        } else {
          if (!parentMap.hasOwnProperty(theme.parent_id)) {
            parentMap[theme.parent_id] = [];
          }
          parentMap[theme.parent_id].push({
            id: theme.id,
            name: theme.name,
          });
        }
      });
      this.themes.forEach((theme) => {
        if (parentMap.hasOwnProperty(theme.id)) {
          theme.children = parentMap[theme.id];
        }
      });
      this.themes.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    },

    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen;
    },
    updateTheme(themeId, checked) {
      let theme = this.themes.find((theme) => theme.id == themeId);
      if (checked) {
        this.selectedThemes.push(theme.id);
        theme.children.forEach((child) => this.selectedThemes.push(child.id));
      } else {
        const index = this.selectedThemes.indexOf(themeId);
        if (index !== -1) {
          this.selectedThemes.splice(index, 1);
          theme.children.forEach((child) => {
            const childIndex = this.selectedThemes.indexOf(child.id);
            this.selectedThemes.splice(childIndex, 1);
          }
          );
        }
      }
      this.$emit("update:selectedThemes", this.selectedThemes);
    },
    resetSelectedThemes() {
      this.selectedThemes = [];
      this.$emit("update:selectedThemes", this.selectedThemes);
    },
  },
};
</script>

<style>
.panel {
  margin-top: 5px;
  max-height: 390px;
  overflow-y: auto;
  transition: max-height 1s ease-out;
  scrollbar-width: none;
}

.theme-btn {
  display: flex;
  background-color: rgb(245, 245, 245);
  align-items: center;
  border-bottom: 0.1rem solid #05060f;
  border-left: none;
  border-right: none;
  height: 2rem;
  overflow: hidden;
  width: 220px;
}

.theme-btn label {
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  font-size: clamp(12px, 1vw, 16px);
  max-width: 100%;
  position: relative;
}
</style>
