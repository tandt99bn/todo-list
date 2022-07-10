import { TaskModel } from '@/models/task.model';

export const getAllTask = (text?: string) => {
  const localItems = localStorage.getItem('task');
  let tasks: TaskModel[] = localItems !== null ? JSON.parse(localItems) : [];
  if (text) {
    tasks = tasks.filter((item) => item.title.includes(text));
  }
  tasks = tasks.sort((a, b) => {
    return +new Date(a.dueDate) - +new Date(b.dueDate);
  });
  return tasks;
};

export const getTaskById = (id: string) => {
  const tasks: TaskModel[] = getAllTask();
  const foundTask = tasks.find((item) => item.id == id);
  return foundTask;
};

export const addTask = (formData: TaskModel) => {
  const tasks: TaskModel[] = getAllTask();
  tasks.push(formData);
  tasks.forEach((item, index) => {
    item.id = 'task-' + index;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};

export const updateTask = (formData: TaskModel) => {
  const tasks: TaskModel[] = getAllTask();
  const foundIndex = tasks.findIndex((item) => item.id == formData.id);
  tasks[foundIndex] = formData;
  const sorted = tasks.sort((a, b) => {
    return +new Date(a.dueDate) - +new Date(b.dueDate);
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};

export const removeTask = (id: string) => {
  let tasks: TaskModel[] = getAllTask();
  tasks = tasks.filter((task) => task.id != id);
  tasks.forEach((item, index) => {
    item.id = 'task-' + index;
  });
  localStorage.setItem('task', JSON.stringify(tasks));
};
