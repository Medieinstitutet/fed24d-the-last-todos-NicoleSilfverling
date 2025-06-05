import type { Todo } from '../models/Todo';
import { TodoPresentation } from './TodoPresentation';

type TodosProps = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleIsCompleted: (id: number) => void;
  showCompleted: boolean;
};

export const Todos = ({
  todos,
  deleteTodo,
  toggleIsCompleted,
  showCompleted,
}: TodosProps) => {
  const filteredTodos = todos.filter(
    (todo) => todo.isCompleted === showCompleted
  );
  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {showCompleted ? 'Completed Todos' : 'Pending Todos'}
      </h2>
      {filteredTodos.length === 0 && (
        <p>
          {showCompleted
            ? 'Nothing completed yet, keep going!'
            : 'All tasks are completed, great job!'}
        </p>
      )}
      <ul className="space-y-4">
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoPresentation
              todo={todo}
              deleteTodo={deleteTodo}
              toggleIsCompleted={toggleIsCompleted}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
