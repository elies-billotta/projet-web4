<template>
    <div v-if="collection.length != 0" class="sidebar">
        <h2>Ma collection</h2>
        <div>Total des pièces : {{ nbPartsTotal }}</div>
        <div>Thème favori : {{ favoriteTheme }}</div>
        <Filter v-model:search="search" />
        <YearFilter v-model:year="year" @year-changed="onYearChanged" />
        <Accordion v-model:selectedThemes="selectedThemes" />
    </div>
    <div class="gallery-container">
        <div class="list">
            <LegoCard v-for="set in collection" :key="set.set_num" :set_num="set.set_num" :name="set.name"
                :num_parts="set.num_parts" :year="set.year" :set_img_url="set.set_img_url" :theme_id="set.theme_id"
                :themeName="set.themeName" @item-removed="removeItemFromCollection" />
        </div>
        <div v-if="collection.length == 0"> Nothing to show</div>
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
        };
    },
    created() {
        this.loadCollectionFromLocalStorage();
        this.calculateTotalParts();
        this.calculateFavoriteTheme();
    },
    computed: {
        localStorageCollection() {
            return JSON.parse(localStorage.getItem("collection")) || [];
        }
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
        }
    },
    components: {
        LegoCard, Filter, Accordion, YearFilter
    },
}
</script>
