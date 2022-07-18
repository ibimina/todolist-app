import { useState } from "react";

export default function Create() {
  const [myTodo, setMyTodo] = useState("");
  const [checkbox, setCheckbox] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    if (myTodo.trim().length !== 0) {
      const todo = {
        todo: myTodo,
        checked: false,
      };
      setCheckbox(true);

      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      window.location.reload(false)
      setInterval(() => {
        setCheckbox(false);
      }, 500);
      setMyTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="list-style color">
        <label htmlFor="addtodo">
          <input
            type="checkbox"
            name="addtodo"
            id="addtodo"
            aria-checked={checkbox}
            onChange={handleSubmit}
          />
        </label>
        <input
          type="text"
          name="newtodo"
          id="newtodo"
          placeholder="Create a new todo"
          onChange={(e) => setMyTodo(e.target.value)}
          value={myTodo}
        />
      </form>
    </>
  );
}
