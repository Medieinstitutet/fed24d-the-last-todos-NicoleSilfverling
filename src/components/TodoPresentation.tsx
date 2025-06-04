import type { Todo } from '../models/Todo';

type TodoPresentationProps = {
  todo: Todo;
};
export const TodoPresentation = ({ todo }: TodoPresentationProps) => {
  return (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>{todo.dueDate.toLocaleDateString()}</p>
      <input type="checkbox" checked={todo.isCompleted} />
    </>
  );
};
