import Create from "../shared/Create";
import React, { useEffect, useState } from "react";
import "./todolist.css";
import"../header/header.css"
import Todo from "../shared/Todo";

export default function Main({theme,changeTheme}) {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = "http://localhost:3000/todos";

  useEffect(() => {
    const abortConst = new AbortController();

    fetch(url, { signal: abortConst.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for the resource");
        }
        return res.json();
      })
      .then((d) => {
        setTodos(d);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch abort");
        } else {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => abortConst.abort();
  }, [url]);

  const add = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setTodos(d);
        setIsLoading(false);
        setError(null);
      });
  };

  return (
    <main>
      <div className="con">
        <div className="title">
          <h1>todo</h1>
          <button
            className="theme bg-img"
            aria-expanded={theme}
            onClick={changeTheme}
          >
            <span className="sr-only">background theme</span>
          </button>
        </div>
        <Create add={add} />
        {error && <div>{error}</div>}
        {isLoading && <div>Loading</div>}
        {todos && <Todo todos={todos} add={add} />}
        <p className="footer">Drag and drop to reorder list</p>
      </div>{" "}
    </main>
  );
}
