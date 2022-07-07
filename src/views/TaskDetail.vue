<template>
  <div class="home">
    <div class="detail-task">
      <TaskComponent />
    </div>
  </div>
</template>
<style scoped>
.detail-task {
  width: 50%;
  margin: 0 auto;
}
</style>
<script lang="ts">
import TaskComponent from '@/components/TaskComponent.vue'; // @ is an alias to /src
import { TaskModel } from '@/models/task.model';
import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';
class HomeViewData {
  modelValue: TaskModel;
  id: string;
}
export default defineComponent({
  name: 'HomeView',
  components: { TaskComponent },

  setup() {
    const route = useRoute();
    const data = reactive<HomeViewData>({
      id: route.params.id as string,
      modelValue: {
        id: '',
        title: '',
        dueDate: '',
        description: '',
        priority: '',
      },
    });

    const findTaskById = () => {
      let localItems!: string | null;
      localItems = localStorage.getItem('task');
      const tasks = localItems !== null ? JSON.parse(localItems) : [];
    };
    return {};
  },
});
</script>
