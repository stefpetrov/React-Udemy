import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css"



type Props = { children?: React.ReactNode; items: Todo[];removeTodo:(id:string)=> void };

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.removeTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
