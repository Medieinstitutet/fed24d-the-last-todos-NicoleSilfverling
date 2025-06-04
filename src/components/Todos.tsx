import type { Todo } from '../models/Todo';
import { TodoPresentation } from './TodoPresentation';

type TodosProps = {
  todos: Todo[];
};

export const Todos = ({ todos }: TodosProps) => {
  return (
    <>
      <h2>Todos:</h2>
      {todos.map((todo) => {
        return <TodoPresentation key={todo.id} todo={todo} />;
      })}
    </>
  );
};
