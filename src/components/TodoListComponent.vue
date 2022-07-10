<template>
  <div v-if="data?.modelValue" class="task-container">
    <div class="task-card" :class="[data.checked ? 'check' : '']">
      <div class="head">
        <input
          class="check-box"
          type="checkbox"
          :id="data?.modelValue.id"
          v-model="data.checked"
        />
        <div class="title">{{ data?.modelValue.title }}</div>
      </div>
      <div class="action">
        <button @click="onDetail(data?.modelValue.id)" class="btn-detail">
          Detail
        </button>
        <button @click="onRemove(data?.modelValue.id)" class="btn-remove">
          Remove
        </button>
      </div>
    </div>
    <div v-if="data.isDetail" class="detail">
      <TaskComponent
        :modelValue="modelValue"
        :is-edit="true"
        @on-update="onUpdate"
      />
    </div>
    <div v-if="data.checked && !data.isDetail" class="bulk">
      <div class="head">
        <div class="title">Bulk Action:</div>
      </div>
      <div class="action">
        <button class="btn-done" disabled>Done</button>
        <button @click="onRemove(data?.modelValue.id)" class="btn-remove">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.task-container {
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  min-height: 70px;
  position: relative;
}
.task-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.task-card,
.bulk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  border: 1px solid #f2f2f2;
  height: 70px;
  background: #f2f2f2;
}
.detail {
  height: fit-content;
}
.head,
.action {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
}
.check {
  background: #d49520;
}
.title {
  font: normal 36px 'Open Sans', cursive;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
}
.btn-detail,
.btn-remove,
.btn-done {
  font: normal 36px 'Open Sans', cursive;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  text-align: center;
  text-transform: uppercase;
  border: none;
  width: 40 !important;
  height: 34px !important;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}
.btn-detail {
  background: #18b7df;
}
.btn-detail:hover {
  box-shadow: 0 8px 16px 0 rgba(28, 196, 226, 0.2);
}
.btn-remove {
  background: #af2e1d;
}
.btn-remove:hover {
  box-shadow: 0 8px 16px 0 rgba(190, 45, 45, 0.2);
}
.btn-done {
  background: #1ac55c;
  cursor: not-allowed;
}
.bulk {
  padding-top: 10px;
}
</style>
<script lang="ts">
import { TaskModel } from '@/models/task.model';
import { defineComponent, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import TaskComponent from '@/components/TaskComponent.vue';
import { updateTask } from '@/services/todoList.service';
class TodoListComponentData {
  modelValue: TaskModel;
  checked: boolean;
  isDetail: boolean;
}

class TodoListComponentProps {
  modelValue: TaskModel;
}

export default defineComponent({
  name: 'TodoListComponent',
  components: { TaskComponent },
  props: {
    modelValue: {
      type: TaskModel,
      default: null,
      required: true,
    },
  },
  emits: ['onRemove', 'onUpdate'],
  setup(props: TodoListComponentProps, { emit }) {
    const router = useRouter();
    const data = reactive<TodoListComponentData>({
      modelValue: { ...props.modelValue },
      checked: false,
      isDetail: false,
    });
    watch(
      () => props.modelValue,
      (newValue, oldValue) => {
        data.modelValue = newValue;
      },
    );
    const onDetail = (id: string) => {
      data.isDetail = !data.isDetail;
    };
    const onRemove = (id: string) => {
      emit('onRemove', id);
    };

    const onUpdate = (formData: TaskModel) => {
      updateTask(formData);
      data.checked = false;
      data.isDetail = false;
      emit('onUpdate');
    };

    return {
      data,
      onRemove,
      onDetail,
      onUpdate,
    };
  },
});
</script>
