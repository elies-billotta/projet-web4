<template>
  <div class="card">
    <div class="imgContainer"><img pictureUrl="" v-bind:src="set_img_url" /></div>
    <div class="card-content">
      <div class="set_num">{{ set_num }}</div>
      <div class="name" id="name">{{ name }}</div>
      <ul class="check-list" role="list">
        <li class="check-list-item">
          <svg width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
              fill="#FF331F" />
          </svg>{{ themeName }}
        </li>
        <li class="check-list-item" v-if="num_parts > 0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7 5C6.44772 5 6 5.44772 6 6V7H9V6C9 5.44772 8.55228 5 8 5H7ZM11 7V6C11 4.34315 9.65685 3 8 3H7C5.34315 3 4 4.34315 4 6V7.17071C2.83481 7.58254 2 8.69378 2 10V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V10C22 8.69378 21.1652 7.58254 20 7.17071V6C20 4.34315 18.6569 3 17 3H16C14.3431 3 13 4.34315 13 6V7H11ZM15 7H18V6C18 5.44772 17.5523 5 17 5H16C15.4477 5 15 5.44772 15 6V7ZM5 9C4.44772 9 4 9.44772 4 10V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V10C20 9.44772 19.5523 9 19 9H14H10H5Z"
              fill="#FF331F" />
          </svg>{{ num_parts }} parts
        </li>
        <li class="check-list-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#FF331F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>{{ year }}
        </li>
      </ul>
      <div class="button-container">
        <BaseButton class="cardButton" v-if="!inCollection" name="Add to collection" @click="addToCollection" />
        <BaseButton class="cardButton" id="removeButton" v-if="inCollection" name="Remove from collection" @click="removeFromCollection" />
      </div>
    </div>
  </div>
</template>

<script>

import BaseButton from './elements/BaseButton.vue';

export default {
  name: 'LegoCard',
  props: {
    set_num: String,
    name: String,
    num_parts: Number,
    year: Number,
    set_img_url: String,
    theme_id: Number,
    themeName: String,
  },
  data() {
    return {
      inCollection: false,
    };
  },
  methods: {
    addToCollection() {
      this.inCollection = true;
      const set = {
        set_num: this.set_num,
        name: this.name,
        num_parts: this.num_parts,
        year: this.year,
        set_img_url: this.set_img_url,
        theme_id: this.theme_id,
        themeName: this.themeName,
      };
      let collection = JSON.parse(localStorage.getItem('collection'));
      collection.elements.push(set);
      localStorage.setItem('collection', JSON.stringify(collection));
    },
    removeFromCollection() {
      this.inCollection = false;
      let collection = JSON.parse(localStorage.getItem('collection'));
      collection.elements = collection.elements.filter((set) => set.set_num !== this.set_num);
      localStorage.setItem('collection', JSON.stringify(collection));
      this.$emit('item-removed', this.set_num);
    },
  },
  created() {
    let collection = JSON.parse(localStorage.getItem('collection'));
    if (collection) {
      this.inCollection = collection.elements.some((set) => set.set_num === this.set_num);
    }
  },
  components: {
    BaseButton,
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega:wght@100..900&display=swap');

.imgContainer {
  height: 180px;
  display: flex;
  justify-content: center;
}

img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.card {
  width: 325px;
  background: #FFFBFF;
  padding: 1rem;
  border-radius: 0rem;
  border: 0.5vmin solid #05060f;
  box-shadow: 0.4rem 0.4rem #05060f;
  overflow: hidden;
  color: black;
  margin: 1rem;
}

.card:hover {
  transform: translateX(0.2rem) translateY(0.2rem);
  box-shadow: 0.4rem 0.4rem #05060f;
  transition: none;
}

/*Card content*/
.card-content {
  display: flex;
  flex-direction: column;
  height: 250px; /* Ajoutez la hauteur fixe souhaitée */
}

.name {
  display: flex;
  color: #05060f;
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 700;
  font-family: "Lexend Mega", sans-serif;
  font-optical-sizing: auto;
}

.set_num {
  font-style: italic;
  color: #FF331F;
}

/*Checklist*/
.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  margin-bottom: 0.5rem;
  padding: 0;
}

.check-list-item {
  display: flex;
  align-items: flex-start; /* Ajustez l'alignement vertical ici */
  gap: 4px;
}
#removeButton {
  background-color: #FF331F;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100% ; /* Pour aligner les boutons à droite */
}

.cardButton {
  flex:1;
}

</style>
