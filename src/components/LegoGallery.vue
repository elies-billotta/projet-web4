<template>
  <div class="sidebar">
    <Filter v-model:search="search" />
    <Accordion v-model:selectedThemes="selectedThemes"/>
  </div>
  <div class="gallery-container">
    <div class="list">
      <LegoCard
        v-for="lego in filteredLegoList"
        :key="lego.set_num"
        :set_num="lego.set_num"
        :name="lego.name"
        :num_parts="lego.num_parts"
        :year="lego.year"
        :set_img_url="lego.set_img_url"
        :theme_id="lego.theme_id"
      />
    </div>
  </div>
</template>

<script>
import { getSetMinYear } from "@/api/getSetMinYear.js";
import LegoCard from "@/components/LegoCard.vue";
import Filter from "@/components/elements/Filter.vue";
import Accordion from "@/components/elements/Accordion.vue";
import BaseButton from "./elements/BaseButton.vue";

export default {
  name: "LegoGallery",
  data() {
    return {
      legoList: [],
      search: "",
      selectedThemes: [],
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
      if (this.selectedThemes && this.selectedThemes.length > 0) {
        filteredList = filteredList.filter((lego) =>
          this.selectedThemes.includes(lego.theme_id)
        );
      }

      return filteredList;
    },
  },
  created() {
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData(year, page) {
      this.legoList = await getSetMinYear("2012", 1);
    },
  },
  components: { LegoCard, Filter, Accordion, BaseButton },
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
  justify-content: space-between;
  padding: 1rem;
}
.gallery-container {
  height: calc(94.6vh - 50px - 100px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
