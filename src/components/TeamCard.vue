<script setup lang="ts">
const props = defineProps(["teamInfo"]);
const { teamInfo } = props;
</script>

<template>
  <div class="card-body-container">
    <h2>{{ teamInfo["name"] }}</h2>
    <img class="team-logo-img" :src="teamInfo['crestUrl']" alt="team Logo" />
    <div class="card-links-container">
      <a :href="teamInfo['website']" target="_blank" rel="noopener noreferrer"
        >Web</a
      >
      <a :href="'mailto:' + teamInfo['email']">mail</a>
      <a :href="'tel:' + teamInfo['phone']">tel</a>
    </div>
  </div>
</template>

<style scoped>
.card-links-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 50%;
}
.team-logo-img {
  width: 150px;
  height: 150px;
}
.card-body-container {
  width: 250px;
  height: 350px;
  background: #f9f9f9;
  color: #231b40;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
