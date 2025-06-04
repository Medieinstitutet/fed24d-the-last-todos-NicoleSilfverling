import { useState } from 'react';
import './App.css';
import { data } from './data/data';
import { Todos } from './components/Todos';
import type { Todo } from './models/Todo';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState<Todo[]>(data);

  console.log(todos);

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
