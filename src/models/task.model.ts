export class TaskModel {
  id: string;
  title: string;
  dueDate: Date;
  description: string;
  priority: string;

  constructor(init?: Partial<TaskModel>) {
    Object.assign(this, init);
  }
}

export enum TaskPriorityEnum {
  LOW = "low",
  NORMAL = "normal",
  HIGH = "high",
}
