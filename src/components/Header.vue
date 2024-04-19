<template>
  <div class="header">
    <h1>LEGOrganizer</h1>
    <ul class="menu">
      <li><router-link to="/">
          <BaseButton name="Sets" />
        </router-link></li>
      <li><router-link to="/collection">
          <BaseButton name="Collection" />
        </router-link></li>
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
  width:100%;
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

/* Media query pour les appareils mobiles et tablettes */
@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  h1{
    font-size: 2rem;
  }
}

</style>