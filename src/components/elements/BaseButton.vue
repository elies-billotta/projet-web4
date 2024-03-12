<template>
  <button class="btn">{{ name }}</button>
</template>
<script>

export default {
  name: "BaseButton",
  props: {
    name: String,
  },
}
</script>
  
<style>
.btn {
  margin-top: 1rem;
  font-size: 1.2rem;
  padding: 0.4rem 1.5rem;
  background-color: #00A676;
  color: #FFFBFF;
  cursor: pointer;
  border: 0.3vmin solid #05060f;
  box-shadow: 0.2rem 0.2rem #05060f;
  font-family: "Public Sans", sans-serif;
  font-weight: 800;
  font-style: normal;
  transition: none;
}

.btn:hover {
  transform: translateX(0.2rem) translateY(0.2rem);
  box-shadow: 0.2rem 0.2rem #05060f;
  transition: none;
}
</style>

