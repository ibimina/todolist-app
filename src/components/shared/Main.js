import Create from "./Create";
import "./todolist.css";
import Todolist from "./Todolist";
export default function Main({ todos }) {
  return (
    <main>
      <Create />
      <Todolist todos={todos} />
    </main>
  );
}
