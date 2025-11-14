import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "../views/ContactBook.vue"; // đường dẫn tương đối từ router/index.js

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
