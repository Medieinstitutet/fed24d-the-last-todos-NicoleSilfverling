import { data } from '../data/data';
import type { Todo } from '../models/Todo';

export const getInitialTodos = (): Todo[] => {
  const saved = localStorage.getItem('todos');
  if (!saved) return data;
  try {
    return (JSON.parse(saved) as Todo[]).map((todo) => ({
      ...todo,
      dueDate: new Date(todo.dueDate), // Convert back to Date from string
    }));
  } catch {
    return data;
  }
};
