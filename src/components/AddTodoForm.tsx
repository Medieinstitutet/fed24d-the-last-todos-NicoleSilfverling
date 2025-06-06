import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todo';

type AddTodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo('', '', false, new Date()));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'text') {
      setTodo({ ...todo, [e.target.id]: e.target.value });
    }

    if (e.target.type === 'date') {
      setTodo({ ...todo, [e.target.id]: new Date(e.target.value) });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Updates id when submitting
    const updatedTodo = {
      ...todo,
      id: Date.now(),
    };

    addTodo(updatedTodo);
    setTodo(new Todo('', '', false, new Date()));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 space-y-4 max-w-md mx-auto mb-6"
    >
      <h2 className="text-lg font-semibold text-gray-900">Add new todo</h2>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={todo.title}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          value={todo.description}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label
          htmlFor="dueDate"
          className="block text-sm font-medium text-gray-700"
        >
          Due date
        </label>
        <input
          id="dueDate"
          type="date"
          value={todo.dueDate.toISOString().split('T')[0]}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
};
