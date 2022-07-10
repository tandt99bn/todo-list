<template>
  <div class="container">
    <HomeLayoutHeader />
    <div class="main">
      <div class="left-size">
        <TaskComponent @on-submit="onSubmit" />
      </div>
      <div class="todo">
        <SearchComponent @onChange="onSearch" />
        <div class="todo-list">
          <div v-for="(item, index) in data.tasks" :key="index">
            <TodoListComponent
              :modelValue="item"
              @onRemove="onRemove"
              @onUpdate="onUpdate"
            />
          </div>
        </div>
      </div>
    </div>
    <HomeLayoutFooter />
  </div>
</template>
<style scoped>
.main {
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  gap: 20px;
  padding: 60px 0 150px 0;
}
.left-size {
  width: 50%;
}
.todo {
  width: 50%;
}
.todo-list {
  display: grid;
  gap: 10px;
}

@media screen and (max-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .left-size,
  .todo {
    width: 100%;
  }
}
</style>
<script lang="ts">
import TodoListComponent from '@/components/TodoListComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import TaskComponent from '@/components/TaskComponent.vue';
import HomeLayoutFooter from '@/components/layout/HomeLayoutFooter.vue';
import HomeLayoutHeader from '@/components/layout/HomeLayoutHeader.vue';
import { TaskModel } from '@/models/task.model';
import { defineComponent, onMounted, reactive } from 'vue';
import { getAllTask, removeTask, addTask } from '@/services/todoList.service';

class HomeViewData {
  tasks: TaskModel[];
}
export default defineComponent({
  name: 'HomeView',
  components: {
    TodoListComponent,
    SearchComponent,
    TaskComponent,
    HomeLayoutFooter,
    HomeLayoutHeader,
  },

  setup() {
    const data = reactive<HomeViewData>({
      tasks: [],
    });
    const getTasks = () => {
      data.tasks = getAllTask();
    };
    const onSubmit = (formData: TaskModel) => {
      addTask(formData);
      getTasks();
    };
    const onRemove = (id: string) => {
      removeTask(id);
      getTasks();
    };
    const onUpdate = (id: string) => {
      getTasks();
    };

    const onSearch = (text: string) => {
      data.tasks = getAllTask(text);
    };

    onMounted(() => {
      getTasks();
    });
    return {
      data,
      onRemove,
      onSearch,
      onSubmit,
      onUpdate,
    };
  },
});
</script>
