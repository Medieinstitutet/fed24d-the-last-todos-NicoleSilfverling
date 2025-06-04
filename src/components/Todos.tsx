import type { Todo } from '../models/Todo';
import { TodoPresentation } from './TodoPresentation';

type TodosProps = {
  todos: Todo[];
  deleteTodo: (id:number) => void;
};

export const Todos = ({ todos, deleteTodo }: TodosProps) => {
  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Todos:</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoPresentation todo={todo} deleteTodo={deleteTodo}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
