import Create from "./Create";
import { useFetch } from "../useFetch";
import "./todolist.css";
import Todo from "./Todo";

export default function Main() {
   const { todos, isLoading, error } = useFetch("http://localhost:3000/todos");
  return (
    <main>
      <Create />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading</div>}
      {todos && <Todo todos={todos} />}
    </main>
  );
}
