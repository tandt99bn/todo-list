<template>
  <div class="todo">
    <div class="todo-list">
      <div v-for="(item, index) in data.tasks" :key="index">
        <TodoListComponent :modelValue="item" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.todo {
  width: 50%;
  margin: 0 auto;
}
.todo-list {
  display: grid;
  gap: 10px;
}
</style>
<script lang="ts">
import TodoListComponent from '@/components/TodoListComponent.vue'; // @ is an alias to /src
import { TaskModel } from '@/models/task.model';
import { defineComponent, onMounted, reactive } from 'vue';
class HomeViewData {
  tasks: TaskModel[];
}
export default defineComponent({
  name: 'HomeView',
  components: { TodoListComponent },

  setup() {
    const data = reactive<HomeViewData>({
      tasks: [],
    });
    const getTasks = () => {
      let localItems!: string | null;
      localItems = localStorage.getItem('task');
      data.tasks = localItems !== null ? JSON.parse(localItems) : [];
    };
    onMounted(() => {
      getTasks();
    });
    return {
      data,
    };
  },
});
</script>
