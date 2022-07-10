import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const TodoList = () =>
  import(/* webpackChunkName: "about" */ '../views/TodoList.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
