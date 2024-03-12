<template>
    <BaseButton name="Themes" @click="toggleAccordion"/>
    <div class="panel" v-if="isAccordionOpen">
      <div class="theme-btn" v-for="theme in themes" :key="theme.id">
        <input
          type="checkbox"
          :id="theme.id"
          :value="theme.id"
          :checked="selectedThemes.includes(theme.id)"
          @change="updateTheme(theme.id, $event.target.checked)"
        />
        <label :for="theme.id">{{ theme.name }}</label>
      </div>
    </div>
    <BaseButton name="Reset" @click="this.selectedThemes = []" />
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
      const parentsMap = {};
      allThemes.forEach((theme) => {
        if (theme.parent_id == null) {
          parentsMap[theme.id] = { ...theme, children: [] };
        } else {
          if (!parentsMap[theme.parent_id]) {
            parentsMap[theme.parent_id] = { children: [] };
          }
          parentsMap[theme.parent_id].children.push(theme);
        }
      });
      this.themes = Object.values(parentsMap);
    },
    updateTheme(themeId, checked) {
      if (checked) {
        this.selectedThemes.push(themeId);
      } else {
        const index = this.selectedThemes.indexOf(themeId);
        if (index !== -1) {
          this.selectedThemes.splice(index, 1);
        }
      }
      this.$emit("update:selectedThemes", this.selectedThemes);
    },
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen;
    },
  },
};
</script>
<style>

.panel {
  margin-top: 5%;
  max-height: 400px;
  overflow-y: auto;
  transition: max-height 0.5s ease-out;
  scrollbar-width: none;
}

.theme-btn {
  display: flex;
  background-color: rgb(245, 245, 245);
  flex-direction: row;
  align-items: center;
  padding: 0.1rem;
  border-bottom: 0.1rem solid #05060f;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 2rem;
}

.theme-btn label {
  margin-left: 1rem;
}

</style>
