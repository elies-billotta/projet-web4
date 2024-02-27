<template>
  <div class="header">
    <h1>LEGOrganizer</h1>
    <ul class="menu">
      <li class="btn">Accueil</li>
      <li class="btn">Produits</li>
      <li class="btn">Contact</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "main",
  methods: {

  }
}
</script>

<style>
.header {
  background-color: #FFFBFF;
  box-shadow: 0rem 0.4rem #05060f;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

h1 {
  font-family: 'Lexend Mega', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #05060f;
  margin: 0;
  padding: 1rem;
}

.menu {
  display: flex;
  list-style: none;
}

.btn {
  font-family: 'Lexend Mega', sans-serif;
  font-size: 1.5rem;
  color: #05060f;
  cursor: pointer;
  transition: 0.3s;
}
</style>

