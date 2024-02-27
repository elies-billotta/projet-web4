<template>
  <div class="header">
    <h1>LEGOrganizer</h1>
    <ul class="menu">
      <li><Button name="Accueil"></Button></li>
      <li><Button name="Contact"></Button></li>
      <li><Button name="Boutique"></Button></li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "main",
  components: { Button }
}
</script>

<style>
.header {
  background-color: #F4D738;
  border-bottom: #05060f 0.3vmin solid;
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
  justify-content: center;
}

</style>

