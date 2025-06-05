import type { Todo } from '../models/Todo';

export const sortTodos = (todos: Todo[], sortOption: string): Todo[] => {
  const sorted = [...todos];
  switch (sortOption) {
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'oldest':
      return sorted.sort((a, b) => a.id - b.id);
    case 'due-asc':
      return sorted.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    case 'due-desc':
      return sorted.sort((a, b) => b.dueDate.getTime() - a.dueDate.getTime());
    case 'titleAsc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'titleDesc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
};
