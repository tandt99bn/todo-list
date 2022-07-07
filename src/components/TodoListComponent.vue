<template>
  <div v-if="data?.modelValue">
    <div class="task">
      <div class="head">
        <input type="checkbox" :id="data?.modelValue.id" />
        <div class="title">{{ data?.modelValue.title }}</div>
      </div>
      <div class="action">
        <button @click="onDetail(data?.modelValue.id)">Detail</button>
        <button>Remove</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.task {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}
.head,
.action {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
<script lang="ts">
import { TaskModel } from '@/models/task.model';
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
class TaskComponentData {
  modelValue: TaskModel;
}

class TaskComponentProps {
  modelValue: TaskModel;
}

export default defineComponent({
  name: 'TodoListComponent',
  components: {},
  props: {
    modelValue: {
      type: TaskModel,
      default: null,
      required: true,
    },
  },
  setup(props: TaskComponentProps) {
    const router = useRouter();
    const data = reactive<TaskComponentData>({
      modelValue: { ...props.modelValue },
    });
    const onDetail = (id: string) => {
      router.push({ name: 'detail', params: { id } });
    };
    return {
      data,
      onDetail,
    };
  },
});
</script>
