<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchTeamsData } from "../services/teams.service";
import TeamCard from "./TeamCard.vue";

// TODO: create types | interface
let teams = ref([]);

onMounted(async () => {
  teams.value = await fetchTeamsData();
});
</script>

<template>
  <div class="teams-container" v-if="teams.length > 0">
    <TeamCard v-for="team in teams" :team-info="team" :key="team['id']" />
  </div>
</template>

<style scoped>
.teams-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
