export class Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  dueDate: Date;

  constructor(
    title: string,
    description: string,
    isCompleted: boolean = false,
    dueDate: Date,
    id?: number
  ) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.id = id || Date.now();
  }
} 
