
import { useFetch } from "../useFetch";
import Todo from "./Todo";
import { useState } from "react";
export default function Todolist(
  {
  
  }
) {
  const { todos, isLoading, error } = useFetch("http://localhost:8000/todos");
 


  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading</div>}
      {todos && <Todo todos={todos} />}
    </>
  );
}
{

}


