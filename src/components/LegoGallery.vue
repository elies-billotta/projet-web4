<template>
  <div class="sidebar">
    <Filter v-model:search="search" @update:search="updateSearch" />
    <List v-model:theme="selectedTheme" @change:selectedTheme="selectedTheme"></List>
  </div>
  <div class="gallery-container">
    <div class="list">
      <!-- <input v-model="search" /> -->
      <LegoCard
        v-for="lego in searchSet"
        :key="lego.set_num"
        :set_num="lego.set_num"
        :name="lego.name"
        :num_parts="lego.num_parts"
        :year="lego.year"
        :set_img_url="lego.set_img_url"
      />
    </div>
  </div>
</template>

<script>
import { getSetMinYear } from "@/api/getSetMinYear.js";
import LegoCard from "@/components/LegoCard.vue";
import Filter from "@/components/elements/Filter.vue";
import List from "@/components/elements/List.vue"

export default {
  name: "LegoGallery",
  data() {
    return {
      legoList: [],
      search: "",
      selectedTheme:"",
    };
  },
  computed: {
  searchSet: function () {
    return this.legoList.filter((lego) => {
      const searchLowerCase = this.search.toLowerCase();
      return (
        lego.name.toLowerCase().includes(searchLowerCase) ||
        lego.set_num.toLowerCase().includes(searchLowerCase)
      );
    });
  },
},
  created() {
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData() {
      this.legoList = await getSetMinYear("2010", 1);
      console.log(this.legoList);
    },
  },
  components: { LegoCard, Filter, List },
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
  justify-content: space-evenly;
  padding: 1rem;
}
.gallery-container {
  height: calc(96vh - 50px - 100px); 
  overflow-y: auto; 
    overflow-x: hidden;
}
</style>
