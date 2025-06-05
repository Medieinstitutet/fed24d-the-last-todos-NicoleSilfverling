import { useState } from 'react';
import './App.css';
import type { Todo } from './models/Todo';
import { Todos } from './components/Todos';
import { AddTodoForm } from './components/AddTodoForm';
import { getInitialTodos } from './utils/localStorageUtils';
import { SortOptions } from './components/SortOptions';
import { sortTodos } from './utils/sortUtils';

function App() {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);
  const [sortOption, setSortOption] = useState('newest');

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
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
    <>
      <SortOptions sortOption={sortOption} onSortChange={onSortChange} />
      <Todos
        todos={sortTodos(todos, sortOption)}
        deleteTodo={deleteTodo}
        toggleIsCompleted={toggleIsCompleted}
        showCompleted={true}
      />
      <Todos
        todos={sortTodos(todos, sortOption)}
        deleteTodo={deleteTodo}
        toggleIsCompleted={toggleIsCompleted}
        showCompleted={false}
      />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
