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
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: { TaskComponent },

  setup(props) {
    return {};
  },
});
</script>
