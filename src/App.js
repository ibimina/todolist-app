import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/shared/Main";
// import { useEffect, useState } from "react";

function App() {
  // const [todos, setTodos] = useState([]);
  // const [url, setUrl] = useState("http://localhost:8000/todos");
 
  // useEffect(() => {
  //   fetch(" http://localhost:8000/todos")
  //   .then((res) => res.json())
  //   .then((d)=>setTodos(d))

  // }, []);



  return (
    <>
      <Header />
      <Main
      //  todos={todos} 
       />
    </>
  );
}

export default App;

//  <Main
//    addTodo={addTodo}
//    todos={todos}
//    handleClick={handleClick}
//    // handleCheck={handleCheck}
//    all={all}
//    active={active}
//    complete={complete}
//    handleActive={handleActive}
//    handleComplete={handleComplete}
//    handleAll={handleAll}
//  />;
//   const [all, setAll] = useState("true");

//   const [active, setActive] = useState("false");
//   const [complete, setComplete] = useState("false");
//  const [isLoading, setIsLoading] = useState(false);
//  const [error, setError] = useState(null);

// const handleClick = (id) => {
//   console.log(id);
//   setTodos(
//     todos.filter((todo) => {
//       return id !== todo.id;
//     })
//   );
// };

// const addTodo = (todo) => {
//   setTodos((prevTodos) => {
//     return [...prevTodos, todo];
//   });
// };

// const handleCheck = (id) => {
//   let mapped = todos.map((task) => {
//     if (id === task.id) {
//       return { ...task, checked: !task.checked };
//     }
//     return task;
//   });

//   setTodos(mapped);
// };

// const handleAll = () => {
//   setAll("true");
//   setActive("false");
//   setComplete("false");
// };
// const handleActive = () => {
//   setActive("true");
//   setComplete("false");
//   setAll("false");
// };
// const handleComplete = () => {
//   setActive("false");
//   setComplete("true");
//   setAll("false");
// };
