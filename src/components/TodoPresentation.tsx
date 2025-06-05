import type { Todo } from '../models/Todo';

type TodoPresentationProps = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleIsCompleted: (id: number) => void;
};
export const TodoPresentation = ({
  todo,
  deleteTodo,
  toggleIsCompleted,
}: TodoPresentationProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{todo.title}</h3>
        <p className="text-gray-600">{todo.description}</p>
        <p className="text-sm text-gray-500">
          Due: {todo.dueDate.toLocaleDateString()}
        </p>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
          className="mt-2 text-sm text-red-500 hover:text-red-600 hover:underline cursor-pointer"
        >
          Delete
        </button>
      </div>
      <div>
        <input
          name="isCompleted"
          type="checkbox"
          checked={todo.isCompleted}
          className="w-5 h-5 accent-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
          onChange={() => {
            toggleIsCompleted(todo.id);
          }}
        />
      </div>
    </div>
  );
};
