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
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width:100%;
}

h1 {
  font-family: 'Lexend Mega', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #05060f;
  margin-left: 1rem;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: right;
  list-style: none;
  width: 100%;
}

.menu > li {
  margin-right: 1rem;
}

.menu > ul {
  padding-left: 0;
  margin-left: 0;
}

/* Media query pour les appareils mobiles et tablettes */
@media only screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    height: auto;
    justify-content: center;
  }

  h1{
    margin-top:50px;
    font-size: 2rem;
    margin-left: 0;
  }

  .menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.menu > ul {
  margin-left: 0;
}

.menu > li {
  margin-right: 0;
} 
}

</style>