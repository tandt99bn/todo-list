import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const HomeView = () =>
  import(/* webpackChunkName: "about" */ '../views/HomeView.vue');
const TaskDetail = () =>
  import(/* webpackChunkName: "about" */ '../views/TaskDetail.vue');
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
  {
    path: '/add',
    name: 'add',
    component: HomeView,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: TaskDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
