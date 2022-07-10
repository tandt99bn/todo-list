<template>
  <div class="task">
    <div class="header" v-if="!isEdit">New Task</div>
    <div class="content">
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
    <div class="action">
      <button @click="onUpdate" v-if="isEdit" class="btn-update">Update</button>
      <button @click="onSubmit" v-else class="btn-add">Add</button>
    </div>
  </div>
  <div class="message-error" :class="[data.isValidateDate ? 'show' : '']">
    Ngày không được nhỏ hơn hiện tại
  </div>
</template>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
}
.header {
  font: normal 36px 'Open Sans', cursive;
}
.content {
  display: flex;
  flex-direction: column;
  width: 95%;
  gap: 20px;
}
.title,
.description,
.date-picker,
.option {
  font: normal 36px 'Open Sans', cursive;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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
.btn-update,
.btn-add {
  font: normal 36px 'Open Sans', cursive;
  font-weight: 700;
  font-size: 13px;
  line-height: 110%;
  text-align: center;
  text-transform: uppercase;
  border: none;
  width: 183px !important;
  height: 34px !important;
  background: #04c35c;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}
.message-error {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(221, 14, 14);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

.message-error.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
<script lang="ts">
import { TaskModel, TaskPriorityEnum } from '@/models/task.model';
import { computed, defineComponent, onMounted, reactive, watch } from 'vue';
class TaskComponentData {
  modelValue: TaskModel;
  isEdit: boolean;
  isValidateDate: boolean;
}
class TaskComponentProps {
  modelValue: TaskModel;
  isEdit: boolean;
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
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['onSubmit', 'onUpdate'],
  setup(props: TaskComponentProps, { emit }) {
    const today = new Date().toLocaleDateString('en-CA');
    const data = reactive<TaskComponentData>({
      modelValue: {
        ...props.modelValue,
      },
      isEdit: props.isEdit,
      isValidateDate: false,
    });
    const formData = reactive({
      id: data.modelValue.id ?? '',
      title: data.modelValue.title ?? '',
      description: data.modelValue.description ?? '',
      dueDate: data.modelValue.dueDate ?? today,
      priority: data.modelValue.priority ?? TaskPriorityEnum.NORMAL,
    });

    const onSubmit = () => {
      if (
        new Date(formData.dueDate) <
        new Date(new Date().toLocaleDateString('en-CA'))
      ) {
        data.isValidateDate = true;
        setTimeout(function () {
          data.isValidateDate = false;
        }, 3000);
      } else {
        emit('onSubmit', formData);
      }
    };
    const onUpdate = () => {
      if (
        new Date(formData.dueDate) <
        new Date(new Date().toLocaleDateString('en-CA'))
      ) {
        data.isValidateDate = true;
        setTimeout(function () {
          data.isValidateDate = false;
        }, 3000);
      } else {
        emit('onUpdate', formData);
      }
    };
    return {
      formData,
      TaskPriorityEnum,
      TASK_PRIORITY,
      data,
      today,
      onSubmit,
      onUpdate,
    };
  },
});
</script>
