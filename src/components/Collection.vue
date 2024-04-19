<template>
    <div class="main-container">
    <div class="sidebar" v-if="collection.length != 0">
        <h3>Ma collection</h3>
        <div class="info-container">
            <div>Total des pièces : {{ nbPartsTotal }}</div>
            <div>Thème favori : {{ favoriteTheme }}</div>
        </div>
        <Filter v-model:search="search" type="collection" />
        <YearFilter v-model:year="year" @year-changed="onYearChanged" type="collection" @range-status-changed="onRangeStatusChanged" />
        <Accordion v-model:selectedThemes="selectedThemes" type="collection" />
    </div>
    <div class="gallery-container">
        <div class="list">
            <LegoCard v-for="set in filteredLegoList" :key="set.set_num" :set_num="set.set_num" :name="set.name"
                :num_parts="set.num_parts" :year="set.year" :set_img_url="set.set_img_url" :theme_id="set.theme_id"
                :themeName="set.themeName" @item-removed="removeItemFromCollection" />
        </div>
        <div v-if="collection.length == 0"> Nothing to show</div>
    </div>
</div>
</template>

<script>
import LegoCard from "@/components/LegoCard.vue";
import Filter from "@/components/elements/Filter.vue";
import Accordion from "@/components/elements/Accordion.vue";
import YearFilter from "@/components/elements/YearFilter.vue";

export default {
    name: "Collection",
    data() {
        return {
            collection: [],
            nbPartsTotal: 0,
            favoriteTheme: "",
            search: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")).filters.search : "",
            selectedThemes: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")).filters.themes : [],
            year: localStorage.getItem("collection") ? JSON.parse(localStorage.getItem("collection")).filters.year : "",
            isRangeEnabled: true,
        };
    },
    created() {
        this.loadCollectionFromLocalStorage();
        this.calculateTotalParts();
        this.calculateFavoriteTheme();
    },
    computed: {
        localStorageCollection() {
            return JSON.parse(localStorage.getItem("collection")).elements || [];
        },
        filteredLegoList() {
            let filteredList = this.collection;
            const searchLowerCase = this.search.toLowerCase();
            if (searchLowerCase) {
                filteredList = filteredList.filter(
                    (lego) =>
                        lego.name.toLowerCase().includes(searchLowerCase) ||
                        lego.set_num.toLowerCase().includes(searchLowerCase)
                );
            }
            if (this.selectedThemes.length > 0) {
                filteredList = filteredList.filter((lego) =>
                    this.selectedThemes.includes(lego.theme_id)
                );
            }
            if (this.year && this.isRangeEnabled) { // Vérifiez si le range est activé
                filteredList = filteredList.filter((lego) => lego.year == this.year);
            }
            return filteredList;
        },
    },
    watch: {
        localStorageCollection: {
            handler: function (newValue) {
                this.collection = newValue;
                this.calculateTotalParts();
                this.calculateFavoriteTheme();
            },
            deep: true
        }
    },
    methods: {
        loadCollectionFromLocalStorage() {
            this.collection = this.localStorageCollection;
        },
        removeItemFromCollection(setNum) {
            this.collection = this.collection.filter(set => set.set_num !== setNum);
            this.calculateTotalParts();
            this.calculateFavoriteTheme();
        },
        calculateTotalParts() {
            this.nbPartsTotal = this.collection.reduce((total, set) => total + set.num_parts, 0);
        },
        calculateFavoriteTheme() {
            const themesCount = {};
            this.collection.forEach(set => {
                if (set.themeName in themesCount) {
                    themesCount[set.themeName]++;
                } else {
                    themesCount[set.themeName] = 1;
                }
            });
            const maxThemes = [];
            let maxCount = 0;
            for (const theme in themesCount) {
                const count = themesCount[theme];
                if (count > maxCount) {
                    maxThemes.splice(0, maxThemes.length, theme); // Clear previous themes
                    maxCount = count;
                } else if (count === maxCount) {
                    maxThemes.push(theme); // Add to max themes
                }
            }
            this.favoriteTheme = maxThemes.join(", ");
        },
        onYearChanged(year) {
            this.year = year;
        },
        onRangeStatusChanged(isEnabled) { // Cette méthode gère le changement d'état du range
            this.isRangeEnabled = isEnabled;
        },
    },
    components: {
        LegoCard, Filter, Accordion, YearFilter
    },
};
</script>
<style>
.info-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

@media only screen and (max-width: 768px) {
  .gallery-container {
    height: calc(65vh - 50px - 100px);
    /* Utilisation de la hauteur automatique sur les petits écrans */
    overflow: scroll;
  }

  .info-container {
    flex-direction: row;
  }
}



</style>
