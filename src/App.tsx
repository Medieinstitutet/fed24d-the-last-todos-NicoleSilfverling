import { useState } from 'react';
import './App.css';
import type { Todo } from './models/Todo';
import { Todos } from './components/Todos';
import { AddTodoForm } from './components/AddTodoForm';
import { getInitialTodos } from './utils/localStorageUtils';

function App() {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

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

  localStorage.setItem("todos", JSON.stringify(todos))

  return (
    <>
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        toggleIsCompleted={toggleIsCompleted}
      />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
