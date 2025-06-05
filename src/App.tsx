import { useState } from 'react';
import './App.css';
import { data } from './data/data';
import { Todos } from './components/Todos';
import type { Todo } from './models/Todo';
import { AddTodoForm } from './components/AddTodoForm';

function App() {

  const getInitialTodos = (): Todo[] => {
    const saved = localStorage.getItem("todos");
    if (!saved) return data;
    try {
      return (JSON.parse(saved) as Todo[]).map((todo) => ({
        ...todo,
        dueDate: new Date(todo.dueDate), // Convert back to Date from string
      }));
    } catch {
      return data;
    }
  };

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
