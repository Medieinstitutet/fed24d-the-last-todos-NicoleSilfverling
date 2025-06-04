import type { Todo } from '../models/Todo';

type TodoPresentationProps = {
  todo: Todo;
  deleteTodo: (id:number) => void;
  toggleIsCompleted: (id:number) => void;
};
export const TodoPresentation = ({ todo, deleteTodo, toggleIsCompleted }: TodoPresentationProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{todo.title}</h3>
        <p className="text-gray-600">{todo.description}</p>
        <p className="text-sm text-gray-500">
          Due: {todo.dueDate.toLocaleDateString()}
        </p>
        <button onClick={() => {deleteTodo(todo.id)}} className="px-2 py-2 text-xs font-medium bg-red-400 hover:bg-red-500 text-white rounded">Delete</button>
      </div>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          readOnly
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          onChange={() => {toggleIsCompleted(todo.id)}}
        />
      </div>
    </div>
  );
};
