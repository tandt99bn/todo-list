import { TaskModel } from '@/models/task.model';

export const getAllTask = () => {
  const localItems = localStorage.getItem('task');
  const tasks = localItems !== null ? JSON.parse(localItems) : [];
  return tasks;
};

export const addTask = (formData: TaskModel) => {
  const tasks: TaskModel[] = getAllTask();
  tasks.push(formData);
  tasks.forEach((item, index) => {
    item.id = 'task-' + index;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};

export const updateTask = (id: string, formData: TaskModel) => {
  const tasks: TaskModel[] = getAllTask();
  tasks.forEach((item, index) => {
    item.id = 'task-' + index;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};
