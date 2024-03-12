<template>
  <div class="header">
    <h1>LEGOrganizer</h1>
    <ul class="menu">
      <li><BaseButton name="Sets"/></li>
      <li><BaseButton name="Collection"/></li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/elements/BaseButton.vue'

export default {
  name: "Header",
  components: { BaseButton }
}
</script>

<style>
.header {
  background-color: #F4D738;
  border-bottom: #05060f 0.1rem solid;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  height: 100px;
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

.menu>li {
  margin: 0 1rem;
}
</style>