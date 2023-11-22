import { createRouter, createWebHistory } from "vue-router";
import Rule from "./components/Rule.vue";
import Acceil from "./components/Acceil.vue";
import App from "./App.vue";

const routes = [
    {
        name: "Acceil",
        path: "/",
        component: Acceil,
      },
  {
    name: "Rule",
    path: "/Rule",
    component: Rule,
  },

 
//   {
//     name: "Experiance",
//     path: "/Experiance",
//     component: Experiance,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
