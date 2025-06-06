import { useState } from 'react';
import './App.css';
import type { Todo } from './models/Todo';
import { Todos } from './components/Todos';
import { AddTodoForm } from './components/AddTodoForm';
import { getInitialTodos } from './utils/localStorageUtils';
import { SortOptions } from './components/SortOptions';
import { sortTodos } from './utils/sortUtils';
import { Header } from './components/Header';

function App() {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const [sortOption, setSortOption] = useState('newest');
  const [showForm, setShowForm] = useState(false);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    setShowForm(false);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleIsCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: todo.isCompleted ? false : true };
        }
        return todo;
      })
    );
  };

  const onSortChange = (option: string) => {
    setSortOption(option);
  };

  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        {showForm && <AddTodoForm addTodo={addTodo} />}
        <div className="flex flex-col items-center md:flex-row md:items-end md:justify-center gap-4">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {showForm ? 'Cancel' : 'Add Todo'}
          </button>
          <SortOptions sortOption={sortOption} onSortChange={onSortChange} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-6 my-6">
          <Todos
            todos={sortTodos(todos, sortOption)}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
            showCompleted={false}
          />
          <Todos
            todos={sortTodos(todos, sortOption)}
            deleteTodo={deleteTodo}
            toggleIsCompleted={toggleIsCompleted}
            showCompleted={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
