<template>
  <div class="sidebar">
    <Filter v-model:search="search" type="sets" />
    <YearFilter v-model:year="year" @year-changed="onYearChanged" type="sets" />
    <Accordion v-model:selectedThemes="selectedThemes" type="sets" />
  </div>
  <div class="gallery-container">
    <div class="list">
      <LegoCard v-for="lego in filteredLegoList" :key="lego.set_num" :set_num="lego.set_num" :name="lego.name"
        :num_parts="lego.num_parts" :year="lego.year" :set_img_url="lego.set_img_url" :theme_id="lego.theme_id"
        :themeName="this.themes.find((theme) => theme.id === lego.theme_id).name" />
    </div>
  </div>
</template>

<script>
import { getSetMinYear } from "@/api/getSetMinYear.js";
import { getAllThemes } from "@/api/getAllThemes.js";
import LegoCard from "@/components/LegoCard.vue";
import Filter from "@/components/elements/Filter.vue";
import Accordion from "@/components/elements/Accordion.vue";
import BaseButton from "./elements/BaseButton.vue";
import YearFilter from "@/components/elements/YearFilter.vue";

export default {
  name: "LegoGallery",
  props: {
    view: String,
  },
  data() {
    return {
      legoList: [],
      search: localStorage.getItem("sets") ? JSON.parse(localStorage.getItem("sets")).filters.search : "",
      selectedThemes: localStorage.getItem("sets") ? JSON.parse(localStorage.getItem("sets")).filters.themes : [],
      year: localStorage.getItem("sets") ? JSON.parse(localStorage.getItem("sets")).filters.year : "2024",
      themes: [],
    };
  },
  computed: {
    filteredLegoList() {
      const searchLowerCase = this.search.toLowerCase();
      let filteredList = this.legoList.filter(
        (lego) =>
          lego.name.toLowerCase().includes(searchLowerCase) ||
          lego.set_num.toLowerCase().includes(searchLowerCase)
      );
      if (this.selectedThemes.length > 0) {
        filteredList = filteredList.filter((lego) =>
          this.selectedThemes.includes(lego.theme_id)
        );
      }
      return filteredList;
    },
  },
  created() {
    if (this.view == "collection" && JSON.parse(localStorage.getItem("collection")).length > 0) {
      console.log(JSON.parse(localStorage.getItem("collection")));
      this.legoList = JSON.parse(localStorage.getItem("collection"));
    }
    else {
      this.retrieveSetData(this.year, 1);
    }
    this.retrieveThemes();
  },
  methods: {
    async retrieveSetData(year, page) {
      try {
        this.legoList = await getSetMinYear(year, page);
      }
      catch (error) {
        console.error("Error retrieving set data:", error);
      }
    },
    async retrieveThemes() {
      try {
        this.themes = await getAllThemes();
      } catch (error) {
        console.error("Error retrieving themes:", error);
      }
    },
    getGalleryYear() {
      this.retrieveSetData(this.year, 1);
    },
    onYearChanged(newYear) {
      this.year = newYear;
      this.retrieveSetData(this.year, 1);
    },
  },
  components: { LegoCard, Filter, Accordion, BaseButton, YearFilter },
};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  background: #fffbff;
  border: 0.1rem solid #05060f;
  border-bottom: 0;
  border-top: 0;
  border-left: 0;
  padding: 1rem;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
}

.gallery-container {
  height: calc(94.6vh - 50px - 100px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
