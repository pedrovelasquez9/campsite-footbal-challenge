import Teams from "../components/Teams.vue";
import Players from "../components/Players.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Teams, default: true },
  { path: "/players/:id", component: Players },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
