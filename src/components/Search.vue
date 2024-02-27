<template>
  <div class="side">
    <h2>Filtres</h2>
    <input type="text" v-model="year" placeholder="Enter a year" />
    <Button name="Search"></Button>
  </div>
</template>

<script>
import LegoGallery from '@/components/LegoGallery.vue'
import Button from '@/components/elements/Button.vue'
export default {
  name: "main",
  components: { LegoGallery, Button },
  methods: {
    cleanSearch: function () {
      //api call with the year
    }
  }
}
</script>

<style>
.side {
  display: flex;
  flex-direction: column;
  background: #FFFBFF;
  border: 0.3vmin solid #05060f;
  border-top: 0;
  border-left: 0;
  padding: 1rem;
}

.btn {
  margin-top: 1rem;
  font-size: 1.2rem;
  padding: 0.4rem;
  background-color: #00A676;
  color: #FFFBFF;
  cursor: pointer;
  border: 0.3vmin solid #05060f;
  box-shadow: 0.2rem 0.2rem #05060f;
  font-family: "Public Sans", sans-serif;
  font-weight: 800;
  font-style:normal;
  transition : none;
}

/*Button clicked effect size with no transition */
.btn:hover {
  transform: translateX(0.2rem) translateY(0.2rem);
  box-shadow: 0.2rem 0.2rem #05060f;
  transition : none;
}

</style>
