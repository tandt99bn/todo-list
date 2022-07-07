<template>
  <div class="task">
    <div class="header">New Task</div>
    <div class="content">
      <input class="id" v-model="formData.id" hidden />
      <input
        class="title"
        v-model="formData.title"
        placeholder="Add news task..."
      />
      <textarea
        class="description"
        v-model="formData.description"
        placeholder="Add description..."
      ></textarea>
      <div class="group-option">
        <input
          class="date-picker"
          type="date"
          v-model="formData.dueDate"
          id="dueDate"
        />
        <select class="option" v-model="formData.priority">
          <option disabled value="">Please select one</option>
          <option v-for="(item, index) in TASK_PRIORITY" :key="index">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="action"><button @click="onSubmit">Add</button></div>
  </div>
</template>
<style scoped>
.task {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title,
.description,
.date-picker,
.option {
  padding: 5px 10px;
}
.title {
}
.description {
  height: 150px;
  resize: horizontal;
}
.group-option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.date-picker,
.option {
  width: 45%;
}
</style>
<script lang="ts">
import { TaskModel, TaskPriorityEnum } from '@/models/task.model';
import { defineComponent, reactive } from 'vue';
class TaskComponentData {
  modelValue: TaskModel;
}
class TaskComponentProps {
  modelValue: TaskModel;
}
const TASK_PRIORITY: any = [
  { key: 'LOW', name: 'Low' },
  { key: 'NORMAL', name: 'Normal' },
  { key: 'HIGH', name: 'High' },
];

export default defineComponent({
  name: 'TaskComponent',
  components: {},
  props: {
    modelValue: {
      type: TaskModel,
      default: null,
      required: true,
    },
  },
  setup(props: TaskComponentProps) {
    const data = reactive<TaskComponentData>({
      modelValue: {
        ...props.modelValue,
      },
    });

    const formData = reactive({
      id: '',
      title: data.modelValue.title,
      description: data.modelValue.description,
      dueDate: data.modelValue.dueDate,
      priority: data.modelValue.priority,
    });
    const handleId = (tasks: TaskModel[]) => {
      tasks.forEach((item, index) => {
        item.id = 'task-' + index;
      });
    };
    const onSubmit = () => {
      let localItems!: string | null;
      localItems = localStorage.getItem('task');
      const tasks = localItems !== null ? JSON.parse(localItems) : [];
      tasks.push(formData);
      handleId(tasks);
      localStorage.setItem('task', JSON.stringify(tasks));
    };
    return {
      formData,
      TaskPriorityEnum,
      TASK_PRIORITY,
      onSubmit,
    };
  },
});
</script>
