import React from "react";
import { useSelector } from "react-redux"
import Todo from "./Todo"

function TodoContainer() {
  const todos = useSelector(state => state.todos.entities)

  const displayTodos = todos.map((t, i) => {
    return (
    <Todo key={i} text={t} />
    )
  })

  return <ul>{displayTodos}</ul>;
}

export default TodoContainer;
