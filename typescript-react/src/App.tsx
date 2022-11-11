import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  // that means that this state manage array of Todos

  const addTodoHandler = (todoText:string) => {

    const newTodo = new Todo(todoText)

    setTodos((prevTodos) => prevTodos.concat(newTodo))
    
    
  }


  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
