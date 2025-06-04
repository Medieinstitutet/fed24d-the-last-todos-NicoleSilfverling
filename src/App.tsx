import { useState } from 'react';
import './App.css';
import { data } from './data/data';
import { Todos } from './components/Todos';
import type { Todo } from './models/Todo';

function App() {
  const [todo, setTodo] = useState<Todo[]>(data);

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const toggleIsCompleted = (id: number) => {
    setTodo(
      todo.map((todo) => {
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
        todos={todo}
        deleteTodo={deleteTodo}
        toggleIsCompleted={toggleIsCompleted}
      />
    </>
  );
}

export default App;
