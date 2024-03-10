<template>
  <div class="sidebar">
    <Filter v-model:search="search" @update:search="updateSearch" />
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

export default {
  name: "LegoGallery",
  data() {
    return {
      legoList: [],
      search: "",
    };
  },
  computed: {
    searchSet: function () {
      return this.legoList.filter((a) =>
        a.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    this.retrieveSetData();
  },
  methods: {
    async retrieveSetData() {
      this.legoList = await getSetMinYear("2023", 1);
      console.log(this.legoList);
    },
    updateSearch(value) {
      this.search = value;
    },
  },
  components: { LegoCard, Filter },
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
    height: 730px; /* Hauteur fixe de la galerie, ajustez selon vos besoins */
    overflow-y: auto; /* Défilement vertical seulement si le contenu dépasse la hauteur */
    overflow-x: hidden; /* Masquer le défilement horizontal */
}
</style>
