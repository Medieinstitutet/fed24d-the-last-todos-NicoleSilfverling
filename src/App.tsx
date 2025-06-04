import { useState } from 'react';
import './App.css';
import { data } from './data/data';
import { Todos } from './components/Todos';
import type { Todo } from './models/Todo';

function App() {
  const [todo, setTodo] = useState<Todo[]>(data);

  const deleteTodo = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Todos todos={todo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
