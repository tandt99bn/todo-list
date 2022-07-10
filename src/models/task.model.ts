export class TaskModel {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  priority: string;

  constructor(init?: Partial<TaskModel>) {
    Object.assign(this, init);
  }
}

export enum TaskPriorityEnum {
  LOW = 'Low',
  NORMAL = 'Normal',
  HIGH = 'High',
}
